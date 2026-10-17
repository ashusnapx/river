import type { CSSProperties, ReactNode } from "react";
import { INK, penStroke, roughPaths, wobblyLine, type Ink } from "@/lib/draw";
import { tilt } from "@/lib/seed";

/** A freehand underline that stretches to its container width. */
export function Underline({ seed, ink = "red", width = 3, className = "" }: { seed: string; ink?: Ink; width?: number; className?: string }) {
  const d = penStroke(wobblyLine(4, 296, 8, seed, 1.8, 18), width);
  return (
    <svg aria-hidden viewBox="0 0 300 16" preserveAspectRatio="none" className={`block h-3 w-full ${className}`}>
      <path d={d} fill={INK[ink]} />
    </svg>
  );
}

/** Handwritten heading: Caveat pen, weight + size + tilt variety, optional underline. */
export function PenTitle({
  children,
  seed,
  as: Tag = "h2",
  ink = "ink",
  underline,
  className = "",
  style,
}: {
  children: ReactNode;
  seed: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  ink?: Ink;
  underline?: Ink;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag
      className={`font-pen leading-[1.05] ${className}`}
      style={{ color: INK[ink], transform: `rotate(${tilt(seed, 0.9)}deg)`, transformOrigin: "left center", ...style }}
    >
      <span className="inline-block">
        {children}
        {underline && <Underline seed={seed + "u"} ink={underline} className="-mt-1" />}
      </span>
    </Tag>
  );
}

const STICKY = {
  yellow: "var(--color-sticky)",
  blue: "var(--color-sticky-blue)",
  pink: "var(--color-sticky-pink)",
  white: "#fffdf6",
};

/** A taped sticky note. */
export function Sticky({
  children,
  seed,
  color = "yellow",
  tape = true,
  className = "",
  maxTilt = 1.6,
}: {
  children: ReactNode;
  seed: string;
  color?: keyof typeof STICKY;
  tape?: boolean;
  className?: string;
  maxTilt?: number;
}) {
  const t = tilt(seed, maxTilt);
  return (
    <div className={`sticky-shadow relative px-5 pb-5 pt-6 ${className}`} style={{ background: STICKY[color], transform: `rotate(${t}deg)` }}>
      {tape && <span aria-hidden className="tape left-1/2 -top-3" style={{ transform: `translateX(-50%) rotate(${-t * 2}deg)` }} />}
      {children}
    </div>
  );
}

/** A red rubber stamp, e.g. "PYQ 2021". */
export function Stamp({ children, seed, ink = "red", className = "" }: { children: ReactNode; seed: string; ink?: Ink; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border-[2.5px] px-2 py-0 font-marker text-[0.8rem] uppercase leading-6 tracking-wider ${className}`}
      style={{ color: INK[ink], borderColor: INK[ink], transform: `rotate(${tilt(seed, 6)}deg)`, opacity: 0.85 }}
    >
      {children}
    </span>
  );
}

/** A curved, hand-drawn arrow. `from`/`to` in the 0–100 box of its own svg. */
export function Arrow({
  seed,
  ink = "pencil",
  className = "",
  bend = 30,
  flip = false,
}: {
  seed: string;
  ink?: Ink;
  className?: string;
  bend?: number;
  flip?: boolean;
}) {
  const pts = [
    [6, 50],
    [50 + tilt(seed, 8), 50 - bend],
    [94, 50],
  ];
  const body = penStroke(
    Array.from({ length: 24 }, (_, i) => {
      const t = i / 23;
      const x = (1 - t) ** 2 * pts[0][0] + 2 * (1 - t) * t * pts[1][0] + t ** 2 * pts[2][0];
      const y = (1 - t) ** 2 * pts[0][1] + 2 * (1 - t) * t * pts[1][1] + t ** 2 * pts[2][1];
      return [x, y];
    }),
    3,
  );
  const head = penStroke([[80, 36], [94, 50], [80, 58]], 3);
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className} style={{ transform: flip ? "scaleX(-1)" : undefined }}>
      <path d={body} fill={INK[ink]} />
      <path d={head} fill={INK[ink]} />
    </svg>
  );
}

/** Rough circle scribbled around an inline word. */
export function Circled({ children, seed, ink = "red" }: { children: ReactNode; seed: string; ink?: Ink }) {
  const paths = roughPaths({ kind: "ellipse", w: 200, h: 80 }, seed, { stroke: INK[ink], strokeWidth: 2.2, roughness: 1.6 });
  return (
    <span className="relative inline-block px-2">
      <svg aria-hidden viewBox="0 0 200 80" preserveAspectRatio="none" className="pointer-events-none absolute -inset-x-1 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+0.5rem)] overflow-visible">
        {paths.map((p, i) => (
          <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill="none" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

/** Margin note in pencil handwriting. */
export function Pencil({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-pencil text-2xl leading-7 text-pencil ${className}`}>{children}</p>;
}
