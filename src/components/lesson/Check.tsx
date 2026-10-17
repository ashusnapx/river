"use client";

import { AnimatePresence, motion } from "motion/react";
import { CheckCircleIcon, ExamIcon, WarningIcon, XCircleIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { useState, type ReactNode } from "react";
import { update, useProgress } from "@/lib/progress";

const LETTERS = ["a", "b", "c", "d", "e", "f"];

/** A UPSC-style question. Pick, then see the reasoning in green and the trap in red. */
export function Check({
  id,
  prompt,
  options,
  answer,
  explain,
  trap,
  source,
}: {
  id: string;
  prompt: ReactNode;
  options: ReactNode[];
  answer: number;
  explain: ReactNode;
  trap?: ReactNode;
  source?: string;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const progress = useProgress();
  const before = progress.answers[id];

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (before === undefined) update((p) => ({ ...p, answers: { ...p.answers, [id]: i === answer } }));
  };

  return (
    <div className="relative my-6 rotate-[-0.3deg] bg-[#fffdf5] px-4 pb-3 pt-4 sticky-shadow">
      <span aria-hidden className="tape -top-3 left-6 rotate-[-4deg]" />
      <div className="mb-1 flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 font-marker text-sm uppercase tracking-widest text-blue-ink"><ExamIcon {...ink} />Test yourself</span>
        {source && <span className="font-pen text-lg text-red-ink">{source}</span>}
      </div>
      <div className="whitespace-pre-line text-[1.08rem] leading-8">{prompt}</div>
      <ol className="mt-2 space-y-1.5">
        {options.map((o, i) => {
          const right = picked !== null && i === answer;
          const wrong = picked === i && i !== answer;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => pick(i)}
                disabled={picked !== null}
                aria-pressed={picked === i}
                className={`group flex w-full items-start gap-3 rounded-md px-2 py-0.5 text-left transition-colors ${
                  picked === null ? "hover:bg-hl/30" : ""
                } ${right ? "bg-hl-green/40" : ""} ${wrong ? "bg-hl-pink/40" : ""}`}
              >
                <span className="relative mt-0.5 inline-grid h-7 w-7 shrink-0 place-items-center font-pen text-xl">
                  ({LETTERS[i]})
                  {right && <Tick />}
                  {wrong && <Cross />}
                </span>
                <span className="leading-8">{o}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <AnimatePresence>
        {picked !== null && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 space-y-2 border-t border-dashed border-pencil/40 pt-2" aria-live="polite">
            <p className="flex items-center gap-2 font-pen text-2xl" style={{ color: picked === answer ? "var(--color-green-ink)" : "var(--color-red-ink)" }}>
              {picked === answer ? <CheckCircleIcon {...ink} /> : <XCircleIcon {...ink} />}
              {picked === answer ? "Correct — and here's why:" : `Not quite. It's (${LETTERS[answer]}). Here's the reasoning:`}
            </p>
            <div className="leading-8">{explain}</div>
            {trap && (
              <div className="leading-8">
                <span className="font-pen text-xl text-red-ink"><WarningIcon {...ink} className="mr-1 inline align-[-0.15em]" />The trap: </span>
                {trap}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Tick() {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className="pointer-events-none absolute -inset-2 h-11 w-11 overflow-visible">
      <motion.path d="M6 22 L16 32 L36 6" fill="none" stroke="var(--color-green-ink)" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.35 }} />
    </svg>
  );
}

function Cross() {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className="pointer-events-none absolute -inset-2 h-11 w-11 overflow-visible">
      <motion.path d="M8 8 L32 32 M32 8 L8 32" fill="none" stroke="var(--color-red-ink)" strokeWidth={4} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.35 }} />
    </svg>
  );
}
