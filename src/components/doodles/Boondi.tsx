import { penStroke } from "@/lib/draw";

export type Mood = "happy" | "wink" | "wow" | "think" | "sleep";

const INK = "var(--color-ink)";

/** Boondi's body and face as an SVG group, so doodles can drop little Boondis in. (x, y) = face centre, r = half-width. */
export function Drop({ x, y, r = 8, mood = "happy" }: { x: number; y: number; r?: number; mood?: Mood }) {
  // classic teardrop curve: tip up, widest a little below the middle
  const h = r * 1.3;
  const k = r / 0.77;
  const y0 = y - 0.32 * h;
  const pts = Array.from({ length: 49 }, (_, i) => {
    const t = (i / 48) * Math.PI * 2;
    return [x + k * Math.sin(t) * Math.sin(t / 2), y0 - h * Math.cos(t)];
  });
  const body = "M" + pts.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join("L") + "Z";
  const u = r / 10;
  const w = Math.max(0.9, 0.8 * u);
  const ex = 3.3 * u;
  const ey = y - 0.6 * u;
  const eye = Math.max(0.95, 1.2 * u) * (mood === "wow" ? 1.2 : 1);
  const look = mood === "think" ? [0.9 * u, -1.1 * u] : [0, 0];
  const line = { stroke: INK, strokeWidth: w, strokeLinecap: "round" as const, fill: "none" };
  const closed = (cx: number) => `M${cx - 1.3 * u},${ey - 0.2 * u}Q${cx},${ey + 1.4 * u} ${cx + 1.3 * u},${ey - 0.2 * u}`;
  const shine = Array.from({ length: 6 }, (_, i) => {
    const a = ((205 + i * 9) * Math.PI) / 180;
    return `${(x + 0.62 * r * Math.cos(a)).toFixed(1)},${(y - 0.15 * r + 0.62 * r * Math.sin(a)).toFixed(1)}`;
  });
  return (
    <g>
      <path d={body} fill="var(--color-water)" fillOpacity={0.24} />
      <path d={"M" + shine.join("L")} stroke="#fff" strokeWidth={Math.max(1, 0.16 * r)} strokeLinecap="round" fill="none" opacity={0.9} />
      <path d={penStroke(pts, 1.1 + r * 0.09, 0.4)} fill="var(--color-blue-ink)" />
      {[-1, 1].map((s) => (
        <ellipse key={s} cx={x + s * 5.7 * u} cy={y + 1.7 * u} rx={1.7 * u} ry={1.05 * u} fill="var(--color-hl-pink)" opacity={0.8} />
      ))}
      {mood === "sleep" ? (
        <>
          <path d={closed(x - ex)} {...line} />
          <path d={closed(x + ex)} {...line} />
        </>
      ) : (
        <>
          <ellipse cx={x - ex + look[0]} cy={ey + look[1]} rx={eye * 0.85} ry={eye} fill={INK} />
          {mood === "wink" ? (
            <path d={`M${x + ex - 1.3 * u},${ey + 0.3 * u}Q${x + ex},${ey - 1.6 * u} ${x + ex + 1.3 * u},${ey + 0.3 * u}`} {...line} />
          ) : (
            <ellipse cx={x + ex + look[0]} cy={ey + look[1]} rx={eye * 0.85} ry={eye} fill={INK} />
          )}
          {mood === "wow" && [-1, 1].map((s) => <circle key={s} cx={x + s * ex + 0.35 * u} cy={ey - 0.5 * u} r={0.42 * u} fill="#fff" />)}
        </>
      )}
      {mood === "wow" || mood === "sleep" ? (
        <ellipse cx={x} cy={y + 3 * u} rx={(mood === "wow" ? 1.3 : 0.9) * u} ry={(mood === "wow" ? 1.7 : 1) * u} fill={INK} />
      ) : mood === "think" ? (
        <>
          <path d={`M${x - 1.4 * u},${y + 3.2 * u}L${x + 1.8 * u},${y + 2.6 * u}`} {...line} />
          <circle cx={x + 0.85 * r} cy={y - 1.2 * r} r={0.07 * r} fill="var(--color-blue-ink)" />
          <circle cx={x + 1.05 * r} cy={y - 1.5 * r} r={0.1 * r} fill="var(--color-blue-ink)" />
        </>
      ) : (
        <path d={`M${x - 2.1 * u},${y + 2.1 * u}Q${x},${y + 4.6 * u} ${x + 2.1 * u},${y + 2.1 * u}`} {...line} />
      )}
    </g>
  );
}

/** The mascot: a cheerful little water drop. Server-safe. */
export function Boondi({
  size = 40,
  mood = "happy",
  className,
  decorative,
}: {
  size?: number;
  mood?: "happy" | "wink" | "wow" | "think";
  className?: string;
  decorative?: boolean;
}) {
  const a11y = decorative ? { "aria-hidden": true } : { role: "img", "aria-label": "Boondi the water drop" };
  return (
    <svg viewBox="0 0 40 48" width={size} height={size * 1.2} className={className} {...a11y}>
      <Drop x={20} y={31} r={15.5} mood={mood} />
    </svg>
  );
}
