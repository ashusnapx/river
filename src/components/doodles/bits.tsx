import type { ReactNode } from "react";
import type { GlossaryId } from "@/content/glossary-ids";
import { HL, INK, Pen, Rough, smooth, toD, type Ink, type Pt } from "@/components/sketches/kit";

/** Small shared pieces for the 160×100 glossary doodles. */

export type Doodles = Partial<Record<GlossaryId, () => ReactNode>>;

export const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx},${cy}a${rx},${ry} 0 1,0 ${2 * rx},0a${rx},${ry} 0 1,0 ${-2 * rx},0`;

/** Rough ellipse drawn at its exact size (kit's rough ellipse pads by the stroke width, too much at this scale). */
export function Oval({ c, rx, ry = rx, seed, ink = "ink", w = 1.3, fill, fo = 1 }: { c: Pt; rx: number; ry?: number; seed: string; ink?: Ink; w?: number; fill?: string; fo?: number }) {
  const d = ellD(c[0], c[1], rx, ry);
  return (
    <g>
      {fill && <path d={d} fill={fill} fillOpacity={fo} />}
      <Rough shape={{ kind: "path", d }} seed={seed} o={{ stroke: INK[ink], strokeWidth: w, roughness: 0.6, bowing: 0.6 }} />
    </g>
  );
}

/** Yellow highlighter swipe along points. */
export const Hl = ({ pts, w = 12, o = 0.55 }: { pts: Pt[]; w?: number; o?: number }) => (
  <path d={toD(smooth(pts))} stroke={HL} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={o} />
);

/** Highlighter wash over a closed area. */
export const HlArea = ({ d, o = 0.5 }: { d: string; o?: number }) => <path d={d} fill={HL} opacity={o} />;

/** Little "~" wave marks at each point. */
export const Waves = ({ at, seed, w = 11 }: { at: Pt[]; seed: string; w?: number }) => (
  <g opacity={0.85}>
    {at.map(([x, y], i) => (
      <Pen key={i} pts={[[x, y], [x + w * 0.25, y - 2], [x + w * 0.5, y], [x + w * 0.75, y + 2], [x + w, y]]} seed={seed + i} ink="blue" size={1.1} wob={0.2} />
    ))}
  </g>
);

export function Sun({ c, r = 7, seed }: { c: Pt; r?: number; seed: string }) {
  return (
    <g>
      <Oval c={c} rx={r} seed={seed} ink="red" w={1.2} fill={HL} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 + 0.3;
        const p = (k: number): Pt => [c[0] + Math.cos(a) * k, c[1] + Math.sin(a) * k];
        return <Pen key={i} pts={[p(r + 3), p(r + 7)]} seed={seed + i} ink="red" size={1} wob={0.2} />;
      })}
    </g>
  );
}

/** A puffy cloud centred at c, optionally raining. */
export function Cloud({ c: [x, y], seed, rain = 0 }: { c: Pt; seed: string; rain?: number }) {
  const d = `M${x - 15},${y + 6}C${x - 22},${y + 5} ${x - 20},${y - 5} ${x - 12},${y - 3}C${x - 11},${y - 12} ${x + 1},${y - 13} ${x + 3},${y - 5}C${x + 8},${y - 11} ${x + 18},${y - 6} ${x + 15},${y + 1}C${x + 21},${y + 2} ${x + 20},${y + 8} ${x + 14},${y + 7}Z`;
  return (
    <g>
      <path d={d} fill="var(--color-paper)" />
      <Rough shape={{ kind: "path", d }} seed={seed} o={{ stroke: INK.pencil, strokeWidth: 1.3, roughness: 0.6, fill: "var(--color-paper-deep)", fillStyle: "solid" }} />
      {Array.from({ length: rain }, (_, i) => {
        const rx = x - 11 + (i * 22) / Math.max(1, rain - 1);
        return <Pen key={i} pts={[[rx, y + 11], [rx - 2.5, y + 18]]} seed={seed + i} ink="blue" size={1} wob={0.2} />;
      })}
    </g>
  );
}

/** A tuft of grass or reeds. */
export const Tuft = ({ c: [x, y], h = 10, seed, ink = "green" }: { c: Pt; h?: number; seed: string; ink?: Ink }) => (
  <g>
    {[-0.45, 0, 0.4].map((dx, i) => (
      <Pen key={i} pts={[[x, y], [x + dx * h * 0.4, y - h * 0.5], [x + dx * h * 0.8, y - h * (i === 1 ? 1 : 0.8)]]} seed={seed + i} ink={ink} size={1} wob={0.2} />
    ))}
  </g>
);

/** A small stopwatch. */
export const Watch = ({ c: [x, y], seed }: { c: Pt; seed: string }) => (
  <g>
    <Oval c={[x, y]} rx={8} seed={seed} fill="var(--color-paper)" />
    <Pen pts={[[x, y - 9], [x, y - 12]]} seed={seed + "k"} size={1.6} wob={0} />
    <Pen pts={[[x - 3, y - 12.5], [x + 3, y - 12.5]]} seed={seed + "t"} size={1.4} wob={0} />
    <Pen pts={[[x, y], [x + 3.5, y - 4]]} seed={seed + "h"} ink="red" size={1.2} wob={0} />
  </g>
);
