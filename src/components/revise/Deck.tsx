"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowCounterClockwiseIcon, CheckIcon, EyeIcon, DownloadSimpleIcon, FireIcon, HourglassHighIcon, SealCheckIcon, UploadSimpleIcon, XIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { useMemo, useRef, useState } from "react";
import { Markup } from "@/lib/markup";
import { gradeCard, resetProgress, streak, update, useProgress, type Progress } from "@/lib/progress";

export interface Card {
  id: string;
  river: string;
  riverName: string;
  system: string;
  q: string;
  a: string;
  because: string;
}

/** Spaced revision (Leitner boxes) over every fact in the notebook. */
export function Deck({ cards, systems }: { cards: Card[]; systems: { id: string; name: string }[] }) {
  const p = useProgress();
  const [system, setSystem] = useState("all");
  const [flipped, setFlipped] = useState(false);
  const [sessionDone, setSessionDone] = useState(0);
  const file = useRef<HTMLInputElement>(null);

  const [now, setNow] = useState(() => Date.now());
  const pool = useMemo(() => cards.filter((c) => system === "all" || c.system === system), [cards, system]);
  const due = pool.filter((c) => !p.cards[c.id] || p.cards[c.id].due <= now);
  // seen-and-due first (forgetting risk), then new cards
  const queue = [...due.filter((c) => p.cards[c.id]), ...due.filter((c) => !p.cards[c.id])];
  const card = queue[0];
  const mastered = pool.filter((c) => (p.cards[c.id]?.box ?? 0) >= 4).length;

  const grade = (knew: boolean) => {
    if (!card) return;
    gradeCard(card.id, knew);
    setNow(Date.now());
    setFlipped(false);
    setSessionDone((n) => n + 1);
  };

  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(p, null, 1)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `dhara-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importProgress = async (f: File) => {
    try {
      const data = JSON.parse(await f.text()) as Partial<Progress>;
      if (typeof data !== "object" || !data || !("cards" in data)) throw new Error("not a progress file");
      update((cur) => ({
        steps: { ...cur.steps, ...(data.steps ?? {}) },
        done: { ...cur.done, ...(data.done ?? {}) },
        answers: { ...cur.answers, ...(data.answers ?? {}) },
        cards: { ...cur.cards, ...(data.cards ?? {}) },
        days: [...new Set([...cur.days, ...(Array.isArray(data.days) ? data.days.filter((d) => typeof d === "string") : [])])],
      }));
    } catch {
      alert("That file doesn't look like a Dhara progress file.");
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        {[{ id: "all", name: "everything" }, ...systems].map((s) => (
          <button key={s.id} type="button" aria-pressed={system === s.id} onClick={() => { setSystem(s.id); setFlipped(false); }} className={`font-pen text-xl ${system === s.id ? "pen-hl font-bold" : "text-pencil hover:text-ink"}`}>
            {s.name}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap gap-x-8 gap-y-1 font-pen text-2xl">
        <span className="inline-flex items-center gap-1.5"><HourglassHighIcon {...ink} className="text-red-ink" /><strong className="text-red-ink">{due.length}</strong> due now</span>
        <span className="inline-flex items-center gap-1.5"><SealCheckIcon {...ink} className="text-green-ink" /><strong className="text-green-ink">{mastered}</strong>/{pool.length} mastered</span>
        <span className="inline-flex items-center gap-1.5"><FireIcon {...ink} className="text-red-ink" /><strong className="text-blue-ink">{streak(p.days)}</strong>-day streak</span>
        {sessionDone > 0 && <span className="text-pencil">{sessionDone} reviewed this session</span>}
      </div>

      <div className="mx-auto max-w-xl">
        <AnimatePresence mode="wait">
          {card ? (
            <motion.div key={card.id} initial={{ opacity: 0, y: 16, rotate: 1.5 }} animate={{ opacity: 1, y: 0, rotate: -0.6 }} exit={{ opacity: 0, x: -60, rotate: -4 }} transition={{ duration: 0.25 }}>
              <div onClick={() => setFlipped(true)} className="block min-h-[16rem] w-full cursor-pointer bg-[#fffdf6] p-6 text-left sticky-shadow">
                <p className="font-pencil text-xl text-pencil">{card.riverName}</p>
                <p className="font-pen text-[2rem] font-bold leading-10 text-blue-ink"><Markup text={card.q} /></p>
                {flipped ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-2">
                    <p className="text-[1.15rem] leading-8"><strong><Markup text={card.a} /></strong></p>
                    <p className="border-l-[3px] border-green-ink/50 pl-3 leading-7"><span className="font-pen text-lg text-green-ink">because </span><Markup text={card.because} /></p>
                  </motion.div>
                ) : (
                  <button type="button" aria-expanded={flipped} onClick={(e) => { e.stopPropagation(); setFlipped(true); }} className="mt-6 inline-flex items-center gap-1.5 font-pencil text-2xl text-pencil hover:text-ink">
                    <EyeIcon {...ink} /> say the answer (and the reason) out loud, then tap
                  </button>
                )}
              </div>
              {flipped && (
                <div className="mt-5 flex justify-center gap-4">
                  <button type="button" onClick={() => grade(false)} className="rounded-full border-2 border-red-ink px-5 font-pen text-2xl text-red-ink hover:bg-hl-pink/30"><XIcon {...ink} className="mr-1 inline align-[-0.15em]" />not yet</button>
                  <button type="button" onClick={() => grade(true)} className="rounded-full bg-green-ink px-5 font-pen text-2xl text-paper shadow-[3px_4px_0_var(--color-ink)]"><CheckIcon {...ink} className="mr-1 inline align-[-0.15em]" />knew it + why</button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-sticky p-6 text-center sticky-shadow">
              <p className="font-pen text-3xl font-bold">{pool.length ? "Nothing due. Come back tomorrow." : "Facts are being written…"}</p>
              <p className="mt-2 font-pencil text-2xl text-pencil">spacing is the point: cards you know come back after 1, 3, 7, 16, then 35 days.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <details className="mt-16 font-hand">
        <summary className="cursor-pointer font-pen text-xl text-pencil">your progress lives only in this browser: back it up</summary>
        <div className="mt-3 flex flex-wrap gap-4">
          <button type="button" onClick={exportProgress} className="inline-flex items-center gap-1 font-pen text-xl text-blue-ink underline"><DownloadSimpleIcon {...ink} />download backup</button>
          <button type="button" onClick={() => file.current?.click()} className="inline-flex items-center gap-1 font-pen text-xl text-blue-ink underline"><UploadSimpleIcon {...ink} />restore from backup</button>
          <input ref={file} type="file" accept="application/json" hidden onChange={(e) => e.target.files?.[0] && importProgress(e.target.files[0])} />
          <button type="button" onClick={() => confirm("Erase all progress in this browser?") && resetProgress()} className="inline-flex items-center gap-1 font-pen text-xl text-red-ink underline"><ArrowCounterClockwiseIcon {...ink} />reset everything</button>
        </div>
      </details>
    </div>
  );
}
