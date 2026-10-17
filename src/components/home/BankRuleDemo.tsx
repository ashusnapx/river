"use client";

import { motion } from "motion/react";
import { useState } from "react";

const CASES = {
  east: {
    label: "flows east →",
    example: "Ganga in the plains",
    north: "LEFT bank",
    south: "RIGHT bank",
    note: "Ghaghara, Gandak, Kosi come down from the Himalaya in the north → they join on the Ganga's left bank.",
  },
  west: {
    label: "← flows west",
    example: "Brahmaputra in Assam",
    north: "RIGHT bank",
    south: "LEFT bank",
    note: "Subansiri, Manas, Kameng also come from the Himalaya in the north, but the Brahmaputra flows west → they join on its right bank.",
  },
} as const;

/** The bank rule in one tap: face downstream; your left hand is the left bank. */
export function BankRuleDemo() {
  const [flow, setFlow] = useState<"east" | "west">("east");
  const c = CASES[flow];
  const east = flow === "east";
  return (
    <div className="grid items-center gap-6 md:grid-cols-[1.25fr_1fr]">
      <div className="relative rounded-sm border border-rule bg-[#fffdf6] p-2">
        <svg viewBox="0 0 600 300" className="block h-auto w-full" role="img" aria-label={`A river that ${c.label}; the north side is its ${c.north}, the south side its ${c.south}.`}>
          <text x={300} y={30} textAnchor="middle" className="font-pencil" fontSize={26} fill="var(--color-pencil)">
            north (Himalaya)
          </text>
          <text x={300} y={290} textAnchor="middle" className="font-pencil" fontSize={26} fill="var(--color-pencil)">
            south
          </text>
          <path d="M40 150 C 140 128, 220 172, 300 150 S 460 128, 560 150" fill="none" stroke="var(--color-water)" strokeOpacity={0.22} strokeWidth={34} strokeLinecap="round" />
          <path d="M40 150 C 140 128, 220 172, 300 150 S 460 128, 560 150" fill="none" stroke="var(--color-blue-ink)" strokeWidth={4} strokeLinecap="round" strokeDasharray="14 10">
            <animate attributeName="stroke-dashoffset" from={east ? 48 : 0} to={east ? 0 : 48} dur="1s" repeatCount="indefinite" />
          </path>
          {/* tributaries from the north */}
          {[150, 300, 450].map((x, i) => (
            <path key={x} d={`M${x - 40} 50 Q ${x - 10} ${100 + i * 4}, ${x} 146`} fill="none" stroke="var(--color-blue-soft)" strokeWidth={3} strokeLinecap="round" />
          ))}
          <motion.text key={flow + "n"} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} x={300} y={86} textAnchor="middle" className="font-pen" fontSize={34} fontWeight={700} fill={east ? "var(--color-green-ink)" : "var(--color-red-ink)"}>
            {c.north}
          </motion.text>
          <motion.text key={flow + "s"} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} x={300} y={232} textAnchor="middle" className="font-pen" fontSize={34} fontWeight={700} fill={east ? "var(--color-red-ink)" : "var(--color-green-ink)"}>
            {c.south}
          </motion.text>
          {/* the swimmer faces downstream */}
          <motion.g animate={{ x: east ? 470 : 130, scaleX: east ? 1 : -1 }} initial={false} transition={{ type: "spring", stiffness: 90, damping: 14 }} style={{ originX: "0px" }}>
            <g transform="translate(0 106)" stroke="var(--color-ink)" strokeWidth={3} fill="none" strokeLinecap="round">
              <circle cx={0} cy={10} r={9} fill="var(--color-paper)" />
              <path d="M0 19 L0 50 M0 50 L-10 70 M0 50 L10 70" />
              {/* north arm is the left hand when facing east, the right hand when facing west */}
              <path d="M0 28 L18 14" stroke={east ? "var(--color-green-ink)" : "var(--color-red-ink)"} />
              <path d="M0 30 L18 46" stroke={east ? "var(--color-red-ink)" : "var(--color-green-ink)"} />
              <path d="M6 9 L12 10" />
            </g>
          </motion.g>
        </svg>
      </div>
      <div>
        <div className="mb-3 flex gap-2" role="radiogroup" aria-label="Direction of flow">
          {(["east", "west"] as const).map((f) => (
            <button
              key={f}
              type="button"
              role="radio"
              aria-checked={flow === f}
              onClick={() => setFlow(f)}
              className={`rounded-full border-2 px-4 font-pen text-2xl transition-all ${flow === f ? "border-blue-ink bg-blue-ink text-paper" : "border-ink/40 text-ink hover:border-ink"}`}
            >
              {CASES[f].label}
            </button>
          ))}
        </div>
        <p className="font-pen text-[1.9rem] leading-9 text-blue-ink">{c.example}</p>
        <p className="mt-1 leading-8">{c.note}</p>
        <p className="mt-3 font-pencil text-2xl leading-7 text-pencil">
          same mountains, opposite bank, because the river turned around. Nothing to mug up.
        </p>
      </div>
    </div>
  );
}
