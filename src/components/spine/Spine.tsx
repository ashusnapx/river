import type { River } from "@/content/types";
import { penStroke, wobblyLine } from "@/lib/draw";
import { hash } from "@/lib/seed";

const W = 1000;
const H = 440;
const Y = 220;
const X0 = 110;
const X1 = 905;

function curve(a: number[], c: number[], b: number[], n = 18): number[][] {
  return Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    return [
      (1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t ** 2 * b[0],
      (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t ** 2 * b[1],
    ];
  });
}

/**
 * The tributary spine: the main river as one line flowing left → right (source → mouth).
 * Face downstream (→) and your left hand points up, so left-bank tributaries sit above the line.
 */
export function Spine({ river, tributaries, caption }: { river: River; tributaries: River[]; caption?: string }) {
  const placed = tributaries.filter((t) => t.bank);
  const unplaced = tributaries.filter((t) => !t.bank);
  const n = Math.max(placed.length, 1);
  const slot = (X1 - X0 - 90) / n;

  const stem = penStroke(wobblyLine(X0, X1, Y, river.id, 2.4, 22), 7, 0.25);
  const flowHead = penStroke([[X1 - 8, Y - 14], [X1 + 14, Y], [X1 - 8, Y + 14]], 5);

  let up = 0;
  let down = 0;

  return (
    <figure className="my-2">
      <div className="-mx-2 overflow-x-auto px-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full min-w-[680px]" role="img" aria-label={`Tributaries of the ${river.name}: ${placed.map((t) => `${t.name} (${t.bank} bank)`).join(", ")}`}>
          {/* banks legend */}
          <text x={X0 - 10} y={42} className="font-pen" fontSize={24} fill="var(--color-green-ink)">
            ↑ left bank
          </text>
          <text x={X0 - 10} y={H - 22} className="font-pen" fontSize={24} fill="var(--color-red-ink)">
            ↓ right bank
          </text>
          <text x={W - 20} y={42} textAnchor="end" className="font-pencil" fontSize={26} fill="var(--color-pencil)">
            facing downstream →
          </text>

          {/* stick figure at the source, facing downstream */}
          <g transform={`translate(${X0 - 62} ${Y - 54})`} stroke="var(--color-ink)" strokeWidth={2.4} fill="none" strokeLinecap="round">
            <circle cx={18} cy={8} r={7} />
            <path d="M18 15 L18 38 M18 38 L10 54 M18 38 L27 54" />
            <path d="M18 22 L30 12" stroke="var(--color-green-ink)" />
            <path d="M18 24 L30 34" stroke="var(--color-red-ink)" />
            <text x={33} y={12} fontSize={13} className="font-hand" fill="var(--color-green-ink)" stroke="none">L</text>
            <text x={33} y={40} fontSize={13} className="font-hand" fill="var(--color-red-ink)" stroke="none">R</text>
          </g>

          {/* tributaries */}
          {placed.map((t, i) => {
            const isLeft = t.bank === "left";
            const k = isLeft ? up++ : down++;
            const x = X0 + 70 + slot * (i + 0.5);
            const reach = 92 + (k % 2) * 62 + (hash(t.id) % 14);
            const tipY = isLeft ? Y - reach : Y + reach;
            const tipX = x - 64;
            const d = penStroke(curve([tipX, tipY], [x - 30, isLeft ? Y - reach * 0.2 : Y + reach * 0.2], [x, Y]), 3.6, 0.5);
            const labelY = isLeft ? tipY - 12 : tipY + 26;
            return (
              <a key={t.id} href={`/rivers/${t.id}`} className="group">
                <path d={d} fill={isLeft ? "var(--color-green-ink)" : "var(--color-red-ink)"} opacity={0.85} />
                <circle cx={x} cy={Y} r={4.5} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={2} />
                <text x={tipX} y={labelY} textAnchor="middle" className="font-pen transition-colors group-hover:fill-[var(--color-water)]" fontSize={25} fontWeight={700} fill="var(--color-ink)" stroke="var(--color-paper)" strokeWidth={5} paintOrder="stroke">
                  {t.name}
                </text>
                {t.confluence && (
                  <text x={tipX} y={labelY + (isLeft ? -24 : 20)} textAnchor="middle" className="font-hand" fontSize={13} fill="var(--color-pencil)" stroke="var(--color-paper)" strokeWidth={3} paintOrder="stroke">
                    {t.confluence.length > 34 ? t.confluence.slice(0, 32) + "…" : t.confluence}
                  </text>
                )}
              </a>
            );
          })}

          {/* the main river */}
          <path d={stem} fill="var(--color-blue-ink)" />
          <path d={flowHead} fill="var(--color-blue-ink)" />
          <circle cx={X0} cy={Y} r={8} fill="var(--color-paper)" stroke="var(--color-green-ink)" strokeWidth={3} />
          <text x={X0} y={Y + 34} textAnchor="middle" className="font-hand" fontSize={15} fill="var(--color-green-ink)">
            {river.source.place.length > 26 ? river.source.place.slice(0, 24) + "…" : river.source.place}
          </text>
          <text x={X1 + 6} y={Y + 40} textAnchor="end" className="font-hand" fontSize={15} fill="var(--color-red-ink)">
            {river.mouth.place.length > 30 ? river.mouth.place.slice(0, 28) + "…" : river.mouth.place}
          </text>
          <text x={(X0 + X1) / 2} y={Y - 14} textAnchor="middle" className="font-marker" fontSize={22} fill="var(--color-blue-ink)" opacity={0.18}>
            {river.name.toUpperCase()}
          </text>
        </svg>
      </div>
      {(caption || unplaced.length > 0) && (
        <figcaption className="mt-1 font-pencil text-2xl leading-7 text-pencil">
          {caption}
          {unplaced.length > 0 && <> Also joins: {unplaced.map((t) => t.name).join(", ")}.</>}
        </figcaption>
      )}
    </figure>
  );
}
