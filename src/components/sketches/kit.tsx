import type { ReactNode } from "react";
import type { Options } from "roughjs/bin/core";
import { INK, penStroke, roughPaths, type Ink } from "@/lib/draw";
import { rng, tilt } from "@/lib/seed";

/** Shared drawing kit for the notebook sketches. Pure functions, server-safe, seeded. */

export type Pt = [number, number];
export { INK, type Ink };
export const HL = "var(--color-hl)";
export const PAPER = "var(--color-paper)";
export const WATER = "var(--color-water)";

// perfect-freehand's simulated pressure settles low when points are spaced about one pen-width apart, so the line
// comes out ~0.55 × size. Sample at 0.9 × size and scale size up: a "3" reads as a 3-unit line, with a heavier
// pen-down start and a tapered end, and half the path data of finer sampling.
const K = 1.8;
function stroke(pts: Pt[], size: number) {
  const s = size * K;
  return penStroke(dense(pts, Math.max(1.5, s * 0.9)), s);
}

// literal class names so Tailwind generates them
const FONT = { pen: "font-pen", hand: "font-hand", pencil: "font-pencil", marker: "font-marker" } as const;

export function Svg({ label, children }: { label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 800 460" role="img" aria-label={label} className="h-auto w-full">
      {children}
    </svg>
  );
}

/** Even resample of a polyline, so perfect-freehand sees steady speed (steady pressure). */
export function dense(pts: Pt[], step = 5): Pt[] {
  const out: Pt[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step));
    for (let k = 0; k < n; k++) out.push([x0 + ((x1 - x0) * k) / n, y0 + ((y1 - y0) * k) / n]);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

/** Catmull-Rom curve through the points, densely sampled. */
export function smooth(pts: Pt[], step = 5): Pt[] {
  if (pts.length < 3) return dense(pts, step);
  const out: Pt[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const n = Math.max(2, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / step));
    for (let k = 0; k < n; k++) {
      const t = k / n;
      const f = (j: 0 | 1) =>
        0.5 *
        (2 * p1[j] +
          (-p0[j] + p2[j]) * t +
          (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * t * t +
          (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * t * t * t);
      out.push([f(0), f(1)]);
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}

/** Small seeded hand tremor on control points. */
export function jitter(pts: Pt[], seed: string, amp = 1.2): Pt[] {
  if (!amp) return pts;
  const r = rng(seed);
  return pts.map(([x, y]) => [x + (r() - 0.5) * 2 * amp, y + (r() - 0.5) * 2 * amp]);
}

/** Points shifted sideways by d (positive = left of travel direction in screen space). */
export function offset(pts: Pt[], d: number | ((t: number) => number)): Pt[] {
  return pts.map(([x, y], i) => {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(pts.length - 1, i + 1)];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const k = typeof d === "number" ? d : d(i / (pts.length - 1));
    return [x + ((b[1] - a[1]) / len) * k, y - ((b[0] - a[0]) / len) * k];
  });
}

export const toD = (pts: Pt[], close = false) =>
  "M" + pts.map(([x, y]) => `${Math.round(x * 10) / 10},${Math.round(y * 10) / 10}`).join("L") + (close ? "Z" : "");

/** A pressure-varying ink line. */
export function Pen({
  pts,
  seed,
  size = 3,
  ink = "ink",
  curve = true,
  wob = 1,
  opacity,
}: {
  pts: Pt[];
  seed: string;
  size?: number;
  ink?: Ink;
  curve?: boolean;
  wob?: number;
  opacity?: number;
}) {
  const p = jitter(pts, seed, wob);
  return <path d={stroke(curve ? smooth(p) : p, size)} fill={INK[ink]} opacity={opacity} />;
}

/** A dashed pencil/ink line (rough.js would double it; dashes read better as plain strokes). */
export function Dash({ pts, ink = "pencil", w = 1.6, dash = "7 6", opacity }: { pts: Pt[]; ink?: Ink; w?: number; dash?: string; opacity?: number }) {
  return <path d={toD(smooth(pts))} stroke={INK[ink]} strokeWidth={w} strokeDasharray={dash} strokeLinecap="round" fill="none" opacity={opacity} />;
}

/** Ink arrow along points, head at the last point. */
export function Arrow({
  pts,
  seed,
  size = 2.6,
  ink = "ink",
  head = 13,
  curve = true,
  wob = 1,
}: {
  pts: Pt[];
  seed: string;
  size?: number;
  ink?: Ink;
  head?: number;
  curve?: boolean;
  wob?: number;
}) {
  const p = (curve ? smooth : dense)(jitter(pts.slice(0, -1), seed, wob).concat([pts[pts.length - 1]]));
  const tip = p[p.length - 1];
  let i = p.length - 1;
  while (i > 0 && Math.hypot(tip[0] - p[i][0], tip[1] - p[i][1]) < head * 0.8) i--;
  const a = Math.atan2(tip[1] - p[i][1], tip[0] - p[i][0]);
  const wing = (s: number): Pt => [tip[0] - head * Math.cos(a + s * 0.5), tip[1] - head * Math.sin(a + s * 0.5)];
  return (
    <g fill={INK[ink]}>
      <path d={stroke(p, size)} />
      <path d={stroke([wing(1), tip, wing(-1)], size)} />
    </g>
  );
}

type Shape = Parameters<typeof roughPaths>[0];

/** rough.js shape rendered as SVG paths. */
export function Rough({ shape, seed, o, at }: { shape: Shape; seed: string; o?: Options; at?: Pt }) {
  return (
    <g transform={at && `translate(${at[0]} ${at[1]})`}>
      {roughPaths(shape, seed, o).map((p, i) => (
        <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill={p.fill ?? "none"} strokeLinecap="round" />
      ))}
    </g>
  );
}

/** Pencil hatching inside a closed path (land, rock). "dots" = stipple (sand, silt), drawn as dashed hachure. */
export function Hatch({
  d,
  seed,
  ink = "pencil",
  gap = 7,
  angle = -41,
  weight = 1,
  style = "hachure",
  opacity = 0.75,
}: {
  d: string;
  seed: string;
  ink?: Ink;
  gap?: number;
  angle?: number;
  weight?: number;
  style?: "hachure" | "dots" | "cross-hatch";
  opacity?: number;
}) {
  const dots = style === "dots";
  // rough.js "dots" emits one curve per dot (megabytes); dashed hachure lines with round caps look the same
  const paths = roughPaths({ kind: "path", d }, seed, {
    stroke: "none",
    fill: INK[ink],
    fillStyle: dots ? "hachure" : style,
    hachureGap: gap,
    hachureAngle: dots ? angle + 17 : angle,
    fillWeight: weight,
    roughness: dots ? 0.4 : 0.8,
    disableMultiStrokeFill: true,
  });
  return (
    <g opacity={opacity}>
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth={dots ? 2.4 : p.strokeWidth}
          strokeDasharray={dots ? `0.1 ${gap}` : undefined}
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </g>
  );
}

/** Water wash: a pale fill of --color-water. */
export function Water({ d, opacity = 0.16 }: { d: string; opacity?: number }) {
  return <path d={d} fill={WATER} fillOpacity={opacity} />;
}

/** A river drawn as two inked banks with a water wash between. Width may vary along its length. */
export function River({
  c,
  w,
  seed,
  ink = "blue",
  size = 1.8,
  opacity = 0.2,
}: {
  c: Pt[];
  w: number | ((t: number) => number);
  seed: string;
  ink?: Ink;
  size?: number;
  opacity?: number;
}) {
  const mid = smooth(jitter(c, seed, 1));
  const half = typeof w === "number" ? w / 2 : (t: number) => w(t) / 2;
  const neg = typeof half === "number" ? -half : (t: number) => -half(t);
  const l = offset(mid, half);
  const r = offset(mid, neg);
  return (
    <g>
      <Water d={toD([...l, ...r.slice().reverse()], true)} opacity={opacity} />
      <path d={stroke(l, size)} fill={INK[ink]} />
      <path d={stroke(r, size)} fill={INK[ink]} />
    </g>
  );
}

/** A row of little wave marks for sea. */
export function Waves({ x0, x1, y, seed, ink = "blue", gap = 34, size = 1.7 }: { x0: number; x1: number; y: number; seed: string; ink?: Ink; gap?: number; size?: number }) {
  const r = rng(seed);
  const marks: ReactNode[] = [];
  for (let x = x0, i = 0; x + 20 <= x1; x += gap, i++) {
    const dy = (r() - 0.5) * 4;
    const pts: Pt[] = Array.from({ length: 9 }, (_, k) => [x + k * 2.6, y + dy + Math.sin((k / 8) * Math.PI * 2) * 3]);
    marks.push(<path key={i} d={stroke(pts, size)} fill={INK[ink]} />);
  }
  return <g opacity={0.8}>{marks}</g>;
}

/** Handwritten label. */
export function T({
  x,
  y,
  children,
  f = "pen",
  s = 24,
  ink = "ink",
  a,
  r,
  bold,
  halo,
}: {
  x: number;
  y: number;
  children: ReactNode;
  f?: keyof typeof FONT;
  s?: number;
  ink?: Ink;
  a?: "start" | "middle" | "end";
  r?: number;
  bold?: boolean;
  halo?: boolean;
}) {
  const common = {
    x,
    y,
    className: FONT[f],
    fontSize: s,
    textAnchor: a,
    fontWeight: bold ? 700 : undefined,
    transform: r ? `rotate(${r} ${x} ${y})` : undefined,
  };
  // halo drawn as a separate paper-coloured stroke underneath, so it works without paint-order support
  return (
    <>
      {halo && (
        <text {...common} aria-hidden fill={PAPER} stroke={PAPER} strokeWidth={7} strokeLinejoin="round">
          {children}
        </text>
      )}
      <text {...common} fill={INK[ink]}>
        {children}
      </text>
    </>
  );
}

/** Yellow highlighter swipe behind text: x, baseline y, width w. */
export function Mark({ x, y, w, seed, h = 20 }: { x: number; y: number; w: number; seed: string; h?: number }) {
  const t = tilt(seed, 0.8);
  return <rect x={x - 4} y={y - h + 4} width={w + 8} height={h} rx={5} fill={HL} opacity={0.55} transform={`rotate(${t} ${x + w / 2} ${y})`} />;
}

/** Closed mountain/land profile: surface points + baseline y, as a path. */
export const landD = (surface: Pt[], base: number) =>
  toD([...surface, [surface[surface.length - 1][0], base], [surface[0][0], base]], true);
