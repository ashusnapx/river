"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowBendDownRightIcon, ArrowLeftIcon, ArrowRightIcon, BookOpenTextIcon, CardsIcon, CheckSquareIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { update, useProgress } from "@/lib/progress";

export interface PlayerStep {
  id: string;
  title: string;
  content: ReactNode;
}

/** One idea at a time. A paper boat sails the progress river as you go. */
export function LessonPlayer({
  chapterId,
  steps,
  next,
}: {
  chapterId: string;
  steps: PlayerStep[];
  next?: { href: string; title: string };
}) {
  const progress = useProgress();
  const reached = progress.steps[chapterId] ?? 0;
  const done = !!progress.done[chapterId];
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [onePage, setOnePage] = useState(false);
  const top = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const last = steps.length - 1;

  const go = useCallback(
    (to: number) => {
      const n = Math.max(0, Math.min(last, to));
      setDir(n >= i ? 1 : -1);
      setI(n);
      update((p) => ({
        ...p,
        steps: { ...p.steps, [chapterId]: Math.max(p.steps[chapterId] ?? 0, n) },
      }));
      top.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    },
    [i, last, chapterId, reduce],
  );

  const finish = () => {
    update((p) => ({ ...p, done: { ...p.done, [chapterId]: true }, steps: { ...p.steps, [chapterId]: last } }));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (onePage || e.target instanceof HTMLInputElement || e.metaKey || e.ctrlKey) return;
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, i, onePage]);

  const step = steps[i];

  return (
    <div ref={top} className="scroll-mt-24">
      <BoatRiver count={steps.length} at={i} reached={reached} onJump={go} titles={steps.map((s) => s.title)} />

      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        {!onePage && reached > 0 && i === 0 && !done ? (
          <button type="button" onClick={() => go(reached)} className="inline-flex items-center gap-1.5 font-pen text-xl text-blue-ink underline decoration-wavy underline-offset-4">
            <ArrowBendDownRightIcon {...ink} /> continue from step {reached + 1}
          </button>
        ) : (
          <span className="font-pen text-xl text-pencil">{onePage ? `${steps.length} steps` : `step ${i + 1} of ${steps.length}`}</span>
        )}
        <button type="button" onClick={() => setOnePage((v) => !v)} className="inline-flex items-center gap-1.5 font-pencil text-2xl text-pencil hover:text-ink">
          {onePage ? <CardsIcon {...ink} /> : <BookOpenTextIcon {...ink} />}
          {onePage ? "back to one step at a time" : "read as one page (revision)"}
        </button>
      </div>

      {onePage ? (
        <div className="mt-4 space-y-10">
          {steps.map((s, n) => (
            <section key={s.id} aria-labelledby={`h-${s.id}`}>
              <StepTitle id={`h-${s.id}`} n={n + 1} title={s.title} />
              {s.content}
            </section>
          ))}
        </div>
      ) : (
        <div className="relative mt-4 min-h-[50vh]">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.section
              key={step.id}
              custom={dir}
              initial={reduce ? false : { opacity: 0, x: 40 * dir, rotate: 0.6 * dir }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -40 * dir, rotate: -0.6 * dir }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              aria-labelledby={`h-${step.id}`}
            >
              <StepTitle id={`h-${step.id}`} n={i + 1} title={step.title} />
              {step.content}
            </motion.section>
          </AnimatePresence>
        </div>
      )}

      {!onePage && (
        <nav className="mt-10 flex items-center justify-between gap-4 border-t-2 border-dashed border-pencil/30 pt-5" aria-label="Lesson steps">
          <button type="button" onClick={() => go(i - 1)} disabled={i === 0} className="inline-flex items-center gap-1.5 font-pen text-2xl text-pencil enabled:hover:text-ink disabled:opacity-30">
            <ArrowLeftIcon {...ink} /> back
          </button>
          {i < last ? (
            <button
              type="button"
              onClick={() => go(i + 1)}
              className="group relative rounded-full bg-blue-ink px-6 py-1.5 font-pen text-2xl text-paper shadow-[3px_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_2px_0_var(--color-ink)]"
            >
              next step <ArrowRightIcon {...ink} className="ml-1 inline align-[-0.15em] transition-transform group-hover:translate-x-1" />
            </button>
          ) : done ? (
            next ? (
              <Link href={next.href} className="rounded-full bg-green-ink px-6 py-1.5 font-pen text-2xl text-paper shadow-[3px_4px_0_var(--color-ink)]">
                next: {next.title} <ArrowRightIcon {...ink} className="ml-1 inline align-[-0.15em]" />
              </Link>
            ) : (
              <Link href="/revise" className="rounded-full bg-green-ink px-6 py-1.5 font-pen text-2xl text-paper shadow-[3px_4px_0_var(--color-ink)]">
                <CardsIcon {...ink} className="mr-1 inline align-[-0.15em]" /> revise everything
              </Link>
            )
          ) : (
            <button type="button" onClick={finish} className="rounded-full bg-green-ink px-6 py-1.5 font-pen text-2xl text-paper shadow-[3px_4px_0_var(--color-ink)]">
              <CheckSquareIcon {...ink} className="mr-1 inline align-[-0.15em]" /> mark chapter done
            </button>
          )}
        </nav>
      )}
      {done && !onePage && i === last && (
        <motion.p initial={{ scale: 1.6, opacity: 0, rotate: -14 }} animate={{ scale: 1, opacity: 1, rotate: -6 }} className="mx-auto mt-6 w-fit rounded-md border-4 border-green-ink px-4 font-marker text-2xl uppercase tracking-widest text-green-ink">
          chapter done
        </motion.p>
      )}
    </div>
  );
}

function StepTitle({ id, n, title }: { id: string; n: number; title: string }) {
  return (
    <h2 id={id} className="mb-2 flex items-baseline gap-3 font-pen text-[2.1rem] font-bold leading-10 text-ink">
      <span className="font-marker text-xl text-red-ink">{String(n).padStart(2, "0")}</span>
      {title}
    </h2>
  );
}

/** Progress as a little river with a paper boat. */
function BoatRiver({ count, at, reached, onJump, titles }: { count: number; at: number; reached: number; onJump: (i: number) => void; titles: string[] }) {
  const W = 1000;
  const xs = Array.from({ length: count }, (_, k) => 30 + (k * (W - 60)) / Math.max(1, count - 1));
  const yAt = (x: number) => 30 + Math.sin(x / 70) * 7;
  const d = Array.from({ length: 101 }, (_, k) => {
    const x = (k / 100) * W;
    return `${k ? "L" : "M"}${x.toFixed(1)},${yAt(x).toFixed(1)}`;
  }).join(" ");
  const bx = xs[at];
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} 60`} className="block h-auto w-full" aria-hidden>
        <path d={d} fill="none" stroke="var(--color-water)" strokeOpacity={0.25} strokeWidth={10} strokeLinecap="round" />
        <path d={d} fill="none" stroke="var(--color-water)" strokeWidth={2} strokeDasharray="10 8" strokeLinecap="round" />
        {xs.map((x, k) => (
          <circle key={k} cx={x} cy={yAt(x)} r={k <= Math.max(reached, at) ? 6 : 4.5} fill={k <= Math.max(reached, at) ? "var(--color-blue-ink)" : "var(--color-paper)"} stroke="var(--color-blue-ink)" strokeWidth={2} />
        ))}
        <motion.g animate={{ x: bx, y: yAt(bx) }} initial={false} transition={{ type: "spring", stiffness: 120, damping: 16 }}>
          <g transform="translate(-22 -36)">
            <path d="M4 22 L40 22 L33 31 L11 31 Z" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={2.2} strokeLinejoin="round" />
            <path d="M22 22 L22 2 L36 18 Z" fill="var(--color-hl)" stroke="var(--color-ink)" strokeWidth={2} strokeLinejoin="round" />
          </g>
        </motion.g>
      </svg>
      <ol className="absolute inset-0 flex" aria-label="Jump to step">
        {titles.map((t, k) => (
          <li key={k} className="flex-1">
            <button type="button" onClick={() => onJump(k)} className="h-full w-full" title={`${k + 1}. ${t}`} aria-label={`Step ${k + 1}: ${t}`} />
          </li>
        ))}
      </ol>
    </div>
  );
}
