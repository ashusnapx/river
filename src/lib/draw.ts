import rough from "roughjs";
import { getStroke } from "perfect-freehand";
import type { Options } from "roughjs/bin/core";
import { hash } from "./seed";

const gen = rough.generator();

export type Ink = "ink" | "blue" | "red" | "green" | "pencil" | "water";

export const INK: Record<Ink, string> = {
  ink: "var(--color-ink)",
  blue: "var(--color-blue-ink)",
  red: "var(--color-red-ink)",
  green: "var(--color-green-ink)",
  pencil: "var(--color-pencil)",
  water: "var(--color-water)",
};

type Shape =
  | { kind: "rect"; w: number; h: number }
  | { kind: "ellipse"; w: number; h: number }
  | { kind: "line"; points: [number, number][] }
  | { kind: "curve"; points: [number, number][] }
  | { kind: "path"; d: string };

/** Pure rough.js → SVG path data. Same seed, same wobble on server and client. */
export function roughPaths(shape: Shape, seedKey: string, opts: Options = {}) {
  const o: Options = { roughness: 1.1, bowing: 1.2, strokeWidth: 1.8, seed: (hash(seedKey) % 2 ** 31) + 1, ...opts };
  const pad = (o.strokeWidth ?? 2) + 2;
  const d =
    shape.kind === "rect"
      ? gen.rectangle(pad, pad, shape.w - pad * 2, shape.h - pad * 2, o)
      : shape.kind === "ellipse"
        ? gen.ellipse(shape.w / 2, shape.h / 2, shape.w - pad * 2, shape.h - pad * 2, o)
        : shape.kind === "line"
          ? gen.linearPath(shape.points, o)
          : shape.kind === "curve"
            ? gen.curve(shape.points, o)
            : gen.path(shape.d, o);
  // rough.js emits full-precision floats; one decimal is invisible and halves the page weight
  return gen.toPaths(d).map((p) => ({ ...p, d: p.d.replace(/(\.\d)\d+/g, "$1") }));
}

/** A pressure-varying pen stroke (filled outline) through points. */
export function penStroke(points: number[][], size = 3, thinning = 0.55): string {
  const outline = getStroke(points, { size, thinning, smoothing: 0.5, streamline: 0.4, simulatePressure: true, end: { taper: size * 2 } });
  if (!outline.length) return "";
  const r = (n: number) => Math.round(n * 10) / 10;
  let d = `M${r(outline[0][0])},${r(outline[0][1])} Q`;
  for (let i = 0; i < outline.length; i++) {
    const [x0, y0] = outline[i];
    const [x1, y1] = outline[(i + 1) % outline.length];
    d += `${r(x0)},${r(y0)} ${r((x0 + x1) / 2)},${r((y0 + y1) / 2)} `;
  }
  return d + "Z";
}

/** Points along a gentle hand-drawn line from (x0,y) to (x1,y). */
export function wobblyLine(x0: number, x1: number, y: number, seedKey: string, amp = 1.6, step = 12): number[][] {
  let s = hash(seedKey);
  const pts: number[][] = [];
  for (let x = x0; x <= x1; x += step) {
    s = (s * 1103515245 + 12345) >>> 0;
    pts.push([x, y + ((s % 1000) / 1000 - 0.5) * amp * 2]);
  }
  pts.push([x1, y]);
  return pts;
}
