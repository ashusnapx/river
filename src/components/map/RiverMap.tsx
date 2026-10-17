"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { indiaMap, worldMap, type MapData } from "@/data/map";

export interface MapRiver {
  id: string;
  name: string;
  rank: 1 | 2 | 3;
}

export interface RiverMapProps {
  /** use the world map instead of India */
  world?: boolean;
  /** rivers drawn on the map (geometry must exist in geo.rivers) */
  rivers: MapRiver[];
  /** highlighted rivers, drawn in heavy ink */
  focus?: string[];
  /** animate focus rivers from source to mouth */
  trace?: boolean;
  /** zoom the view to the focus rivers */
  zoom?: boolean;
  /** click a river: select it (atlas) or open its page */
  onSelect?: (id: string) => void;
  linkRivers?: boolean;
  labels?: "focus" | "all" | "none";
  showCities?: boolean;
  className?: string;
  title: string;
}

type Box = [number, number, number, number];

const parseViewBox = (vb: string): Box => {
  const [x, y, w, h] = vb.split(/\s+/).map(Number);
  return [x, y, w, h];
};

function focusBox(geo: MapData, ids: string[], full: Box): Box {
  const boxes = ids.map((id) => geo.rivers[id]?.bbox).filter(Boolean) as Box[];
  if (!boxes.length) return full;
  let [x0, y0, x1, y1] = [Infinity, Infinity, -Infinity, -Infinity];
  for (const [a, b, c, d] of boxes) {
    x0 = Math.min(x0, a); y0 = Math.min(y0, b); x1 = Math.max(x1, c); y1 = Math.max(y1, d);
  }
  let w = x1 - x0, h = y1 - y0;
  const pad = Math.max(w, h) * 0.14 + 18;
  x0 -= pad; y0 -= pad; w += pad * 2; h += pad * 2;
  // keep the frame between portrait and landscape so it never becomes a sliver
  const aspect = full[2] / full[3];
  if (w / h > aspect * 1.6) { const nh = w / (aspect * 1.6); y0 -= (nh - h) / 2; h = nh; }
  if (h / w > (1 / aspect) * 1.25) { const nw = h * aspect / 1.25; x0 -= (nw - w) / 2; w = nw; }
  if (w > full[2] || h > full[3]) return full;
  return [x0, y0, w, h];
}

const WIDTH = { 1: 2.8, 2: 1.9, 3: 1.4 } as const;

const noop = () => () => {};

/**
 * Client-only: the map geometry already ships once in the JS bundle (cached across pages),
 * so server-rendering the SVG would send the same ~700 KB a second time in every page's HTML.
 */
export function RiverMap(props: RiverMapProps) {
  const isClient = useSyncExternalStore(noop, () => true, () => false);
  const geo = props.world ? worldMap : indiaMap;
  const [, , w, h] = parseViewBox(geo.viewBox);
  if (!isClient) {
    return (
      <div className={`grid place-items-center ${props.className ?? ""}`} style={{ aspectRatio: `${w} / ${h}` }} role="img" aria-label={props.title}>
        <span className="font-pencil text-2xl text-pencil">drawing the map…</span>
      </div>
    );
  }
  return <RiverMapInner {...props} />;
}

function RiverMapInner({
  world = false,
  rivers,
  focus = [],
  trace = false,
  zoom = false,
  onSelect,
  linkRivers = false,
  labels = "focus",
  showCities = false,
  className = "",
  title,
}: RiverMapProps) {
  const geo: MapData = world ? worldMap : indiaMap;
  const uid = useId().replace(/:/g, "");
  const router = useRouter();
  const reduce = useReducedMotion();
  const full = useMemo(() => parseViewBox(geo.viewBox), [geo.viewBox]);
  const focusKey = focus.join(",");
  const target = useMemo(
    () => (zoom ? focusBox(geo, focusKey ? focusKey.split(",") : [], full) : full),
    [zoom, geo, focusKey, full],
  );
  const [vb, setVb] = useState<Box>(target);
  const [hover, setHover] = useState<string | null>(null);
  const [replay, setReplay] = useState(0);
  const raf = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const [cw, setCw] = useState(640);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setCw(e.contentRect.width || 640));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // glide the camera to the new view box
  useEffect(() => {
    if (reduce) return;
    const from = vb;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / 700);
      const e = 1 - (1 - k) ** 3;
      setVb(from.map((v, i) => v + (target[i] - v) * e) as Box);
      if (k < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, reduce]);

  // text and markers are sized in screen pixels, whatever the zoom or container width
  const view = reduce ? target : vb;
  const ppu = cw / view[2];
  const fs = (px: number) => px / ppu;
  const focusSet = new Set(focus);
  const drawn = rivers.filter((r) => geo.rivers[r.id]);
  const background = drawn.filter((r) => !focusSet.has(r.id));
  const highlighted = drawn.filter((r) => focusSet.has(r.id));
  const clickable = !!onSelect || linkRivers;

  const select = (id: string) => {
    if (onSelect) onSelect(id);
    else if (linkRivers) router.push(`/rivers/${id}`);
  };

  const labelFor = (r: MapRiver, strong: boolean) => {
    const g = geo.rivers[r.id];
    const [x, y, a] = g.label;
    return (
      <text
        key={`l-${r.id}`}
        x={x}
        y={y}
        transform={`rotate(${a} ${x} ${y})`}
        textAnchor="middle"
        className="font-pen"
        fontSize={fs(strong ? 17 : 12.5)}
        fontWeight={strong ? 700 : 500}
        fill={strong ? "var(--color-blue-ink)" : "var(--color-blue-soft)"}
        stroke="var(--color-paper)"
        strokeWidth={fs(3.5)}
        paintOrder="stroke"
        style={{ pointerEvents: "none" }}
      >
        {r.name}
      </text>
    );
  };

  return (
    <figure className={`relative ${className}`}>
      <svg
        ref={svgRef}
        viewBox={view.join(" ")}
        role="img"
        aria-label={title}
        className="block h-auto w-full touch-manipulation select-none"
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <pattern id={`${uid}h`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-40)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="var(--color-water)" strokeWidth="1" opacity="0.18" />
          </pattern>
        </defs>

        {/* sea hatching, like a pencil shading the coast */}
        <rect x={full[0] - 500} y={full[1] - 500} width={full[2] + 1000} height={full[3] + 1000} fill={`url(#${uid}h)`} />

        {/* boundaries stay exact: no wobble filter on borders (Survey of India conformity) */}
        <g>
          {geo.land && <path d={geo.land} fill="var(--color-paper)" stroke="var(--color-pencil)" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />}
          {geo.neighbours?.map((n) => (
            <path key={n.name} d={n.d} fill="var(--color-paper-deep)" stroke="var(--color-pencil)" strokeWidth={0.7} strokeDasharray="4 3" vectorEffect="non-scaling-stroke" opacity={0.85} />
          ))}
          {geo.india && (
            <>
              <path d={geo.india} fill="#fffcf2" stroke="var(--color-ink)" strokeWidth={1.6} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </>
          )}
          {geo.states && <path d={geo.states} fill="none" stroke="var(--color-pencil)" strokeWidth={0.6} strokeDasharray="2 4" opacity={0.6} vectorEffect="non-scaling-stroke" />}
          {geo.lakes?.map((l) => (
            <path key={l.name} d={l.d} fill="var(--color-water)" fillOpacity={0.28} stroke="var(--color-water)" strokeWidth={0.6} vectorEffect="non-scaling-stroke">
              <title>{l.name}</title>
            </path>
          ))}
        </g>

        {geo.seas?.map((s) => (
          // keep sea names inside the current view so they never clip at the edge
          <text key={s.name} x={Math.min(Math.max(s.x, view[0] + fs(70)), view[0] + view[2] - fs(70))} y={s.y} textAnchor="middle" className="font-pencil" fontSize={fs(17)} fill="var(--color-pencil)" opacity={0.75} letterSpacing={fs(2)}>
            {s.name}
          </text>
        ))}

        {/* every other river: thin, light ink */}
        <g>
          {background.map((r) => (
            <path
              key={r.id}
              d={geo.rivers[r.id].d}
              fill="none"
              stroke={hover === r.id ? "var(--color-blue-ink)" : "var(--color-blue-soft)"}
              strokeWidth={hover === r.id ? WIDTH[r.rank] + 0.8 : WIDTH[r.rank] * 0.55}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={focus.length ? 0.38 : 0.85}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>

        {/* highlighted rivers: a soft wash under heavy ink, drawn source → mouth */}
        <g key={`${focus.join(",")}-${replay}`}>
          {highlighted.map((r, i) => {
            const g = geo.rivers[r.id];
            const delay = trace && !reduce ? i * 0.55 : 0;
            const dur = trace && !reduce ? 1.6 + Math.min(2, g.length / 600) : 0;
            return (
              <g key={r.id}>
                <motion.path
                  d={g.d}
                  fill="none"
                  stroke="var(--color-water)"
                  strokeOpacity={0.22}
                  strokeWidth={WIDTH[r.rank] * 3.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: trace && !reduce ? 0 : 1 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: dur, delay, ease: "easeInOut" }}
                />
                <motion.path
                  d={g.d}
                  fill="none"
                  stroke="var(--color-blue-ink)"
                  strokeWidth={WIDTH[r.rank] + 0.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: trace && !reduce ? 0 : 1 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: dur, delay, ease: "easeInOut" }}
                />
                {focus.length <= 4 && (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + dur * 0.1 }}>
                    <circle cx={g.source[0]} cy={g.source[1]} r={fs(5)} fill="var(--color-paper)" stroke="var(--color-green-ink)" strokeWidth={fs(2)} />
                    <text x={g.source[0] + fs(8)} y={g.source[1] - fs(6)} className="font-pen" fontSize={fs(13)} fill="var(--color-green-ink)" stroke="var(--color-paper)" strokeWidth={fs(3)} paintOrder="stroke">
                      source
                    </text>
                  </motion.g>
                )}
                {focus.length <= 4 && (
                  <motion.g initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: delay + dur }} style={{ transformOrigin: `${g.end[0]}px ${g.end[1]}px` }}>
                    <circle cx={g.end[0]} cy={g.end[1]} r={fs(6)} fill="var(--color-red-ink)" opacity={0.85} />
                    <circle cx={g.end[0]} cy={g.end[1]} r={fs(11)} fill="none" stroke="var(--color-red-ink)" strokeWidth={fs(1.5)} strokeDasharray={`${fs(3)} ${fs(3)}`} />
                  </motion.g>
                )}
              </g>
            );
          })}
        </g>

        {showCities &&
          geo.cities?.map((c) => (
            <g key={c.name} opacity={0.8}>
              <rect x={c.x - fs(2.5)} y={c.y - fs(2.5)} width={fs(5)} height={fs(5)} fill="var(--color-ink)" transform={`rotate(45 ${c.x} ${c.y})`} />
              <text x={c.x + fs(6)} y={c.y + fs(4)} className="font-hand" fontSize={fs(11)} fill="var(--color-ink)" stroke="var(--color-paper)" strokeWidth={fs(2.5)} paintOrder="stroke">
                {c.name}
              </text>
            </g>
          ))}

        {labels !== "none" && (
          <g>
            {(labels === "all" ? background : []).map((r) => labelFor(r, false))}
            {highlighted.map((r) => labelFor(r, true))}
            {hover && !focusSet.has(hover) && labels !== "all" && drawn.find((r) => r.id === hover) && labelFor(drawn.find((r) => r.id === hover)!, true)}
          </g>
        )}

        {/* wide invisible hit-areas so thin rivers are easy to tap */}
        {clickable && (
          <g>
            {drawn.map((r) => (
              <path
                key={`hit-${r.id}`}
                d={geo.rivers[r.id].d}
                fill="none"
                stroke="transparent"
                strokeWidth={14}
                vectorEffect="non-scaling-stroke"
                className="cursor-pointer"
                onMouseEnter={() => setHover(r.id)}
                onClick={() => select(r.id)}
              >
                <title>{r.name}</title>
              </path>
            ))}
          </g>
        )}
      </svg>

      {trace && !reduce && highlighted.length > 0 && (
        <button
          type="button"
          onClick={() => setReplay((n) => n + 1)}
          className="absolute bottom-2 right-2 rounded-full bg-paper/90 px-3 font-pen text-lg text-blue-ink shadow-sm hover:text-water"
        >
          ↻ trace again
        </button>
      )}
      {!Object.keys(geo.rivers).length && (
        <p className="absolute inset-0 grid place-items-center font-pen text-2xl text-pencil">map is being drawn…</p>
      )}
    </figure>
  );
}
