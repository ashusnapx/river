"use client";

import { useLayoutEffect, useRef, useState, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { INK, roughPaths, type Ink } from "@/lib/draw";

// tag names only: a component (e.g. Link) can't cross the server → client boundary as a prop
type Tag = "div" | "section" | "article" | "aside" | "li" | "span";

type Props<T extends Tag> = {
  as?: T;
  children: ReactNode;
  seed: string;
  ink?: Ink;
  shape?: "rect" | "ellipse";
  strokeWidth?: number;
  roughness?: number;
  /** a hachure fill colour, e.g. "var(--color-hl)" */
  fill?: string;
  fillStyle?: "hachure" | "solid" | "zigzag" | "cross-hatch" | "dots";
  double?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/** Draws a rough, hand-drawn border around any element once its size is known. */
export function Frame<T extends Tag = "div">({
  as,
  children,
  seed,
  ink = "ink",
  shape = "rect",
  strokeWidth = 1.8,
  roughness = 1.2,
  fill,
  fillStyle = "hachure",
  double = false,
  className = "",
  ...rest
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const box = entry.target as HTMLElement;
      const w = Math.round(width + parseFloat(getComputedStyle(box).paddingLeft) + parseFloat(getComputedStyle(box).paddingRight));
      const h = Math.round(height + parseFloat(getComputedStyle(box).paddingTop) + parseFloat(getComputedStyle(box).paddingBottom));
      setSize((s) => (s && s.w === w && s.h === h ? s : { w, h }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const stroke = INK[ink];
  const paths = size
    ? [
        ...roughPaths({ kind: shape, w: size.w + 8, h: size.h + 8 }, seed, {
          stroke,
          strokeWidth,
          roughness,
          fill,
          fillStyle,
          hachureGap: 7,
          fillWeight: 1.4,
          hachureAngle: -41,
        }),
        ...(double ? roughPaths({ kind: shape, w: size.w + 8, h: size.h + 8 }, seed + "2", { stroke, strokeWidth: strokeWidth * 0.6, roughness: roughness * 1.4 }) : []),
      ]
    : [];

  return (
    <Tag ref={ref} className={`relative ${className}`} {...rest}>
      {size && (
        <svg
          aria-hidden
          className="pointer-events-none absolute -left-1 -top-1 -z-0 overflow-visible"
          width={size.w + 8}
          height={size.h + 8}
        >
          {paths.map((p, i) => (
            <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill={p.fill ?? "none"} strokeLinecap="round" strokeLinejoin="round" opacity={p.fill && p.fill !== "none" ? 0.55 : 1} />
          ))}
        </svg>
      )}
      <div className="relative z-[1]">{children}</div>
    </Tag>
  );
}
