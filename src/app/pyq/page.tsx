import type { Metadata } from "next";
import { pyqs } from "@/content";
import { roughPaths } from "@/lib/draw";
import { PyqList } from "@/components/pyq/PyqList";
import { Pencil, PenTitle } from "@/components/ink/Pen";

export const metadata: Metadata = { title: "River PYQs since 2011", description: "Every UPSC Prelims and Mains question on rivers since 2011, with the reasoning that gets you to the answer without rote." };

/** Hand-drawn bar chart: Prelims river questions per year. */
function YearChart() {
  const pre = pyqs.filter((p) => p.exam === "prelims");
  if (!pre.length) return null;
  const years = Array.from({ length: 2026 - 2011 + 1 }, (_, i) => 2011 + i);
  const counts = years.map((y) => pre.filter((p) => p.year === y).length);
  const max = Math.max(...counts, 1);
  const W = 960, H = 240, base = 200, bw = 40, gap = (W - 40 - years.length * bw) / (years.length - 1);
  return (
    <figure className="my-6 rounded-sm border border-rule bg-[#fffdf6] p-3">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={`Prelims river questions per year: ${years.map((y, i) => `${y}: ${counts[i]}`).join(", ")}`}>
        <line x1={20} y1={base} x2={W - 10} y2={base} stroke="var(--color-ink)" strokeWidth={1.5} />
        {years.map((y, i) => {
          const h = (counts[i] / max) * 150;
          const x = 20 + i * (bw + gap);
          const paths = h > 0 ? roughPaths({ kind: "rect", w: bw, h: h + 8 }, `bar-${y}`, { stroke: "var(--color-blue-ink)", fill: "var(--color-water)", fillStyle: "hachure", hachureGap: 5, strokeWidth: 1.4, roughness: 1.2 }) : [];
          return (
            <g key={y}>
              <g transform={`translate(${x} ${base - h - 4})`}>
                {paths.map((p, k) => (
                  <path key={k} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill="none" opacity={k === 0 && paths.length > 1 ? 0.6 : 1} />
                ))}
              </g>
              <text x={x + bw / 2} y={base - h - 10} textAnchor="middle" className="font-pen" fontSize={22} fontWeight={700} fill="var(--color-ink)">{counts[i] || ""}</text>
              <text x={x + bw / 2} y={base + 24} textAnchor="middle" className="font-hand" fontSize={14} fill="var(--color-pencil)">{`'${String(y).slice(2)}`}</text>
            </g>
          );
        })}
      </svg>
      <figcaption className="px-1 font-pencil text-2xl leading-7 text-pencil">
        river questions in Prelims each year (incl. river-fed lakes, falls and dams). Small numbers, but almost every year: these are the cheapest marks on the paper.
      </figcaption>
    </figure>
  );
}

export default function PyqPage() {
  return (
    <div className="ruled min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:pl-[4.5rem]">
        <PenTitle seed="pyq" as="h1" underline="red" className="text-[3rem] font-bold sm:text-6xl">
          Every river PYQ
        </PenTitle>
        <Pencil className="mt-2">UPSC CSE 2011–2026. Each one solved by reasoning, not memory.</Pencil>
        <YearChart />
        <PyqList pyqs={pyqs} />
      </div>
    </div>
  );
}
