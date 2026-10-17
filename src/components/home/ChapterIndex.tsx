"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";

export interface ChapterSummary {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  minutes: number;
  steps: number;
}

/** The notebook's index page: numbers, dotted leaders, ticks for finished chapters. */
export function ChapterIndex({ chapters }: { chapters: ChapterSummary[] }) {
  const p = useProgress();
  if (!chapters.length) return <p className="font-pen text-2xl text-pencil">Chapters are being written…</p>;
  return (
    <ol className="space-y-1">
      {chapters.map((c) => {
        const done = p.done[c.id];
        const at = p.steps[c.id];
        return (
          <li key={c.id}>
            <Link href={`/learn/${c.id}`} className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-3 rounded-sm px-1 py-1 hover:bg-hl/25">
              <span className="font-marker text-2xl text-red-ink">{String(c.number).padStart(2, "0")}</span>
              <span className="min-w-0">
                <span className="flex items-baseline gap-2">
                  <span className="font-pen text-[1.75rem] font-bold leading-8 text-ink group-hover:text-blue-ink">{c.title}</span>
                  <span aria-hidden className="mb-1.5 hidden flex-1 border-b-2 border-dotted border-pencil/50 sm:block" />
                </span>
                <span className="block text-[0.98rem] leading-6 text-ink/75">{c.subtitle}</span>
              </span>
              <span className="text-right font-pen text-xl leading-6 text-pencil">
                {done ? (
                  <span className="text-green-ink">✓ done</span>
                ) : at !== undefined ? (
                  <span className="text-blue-ink">
                    step {at + 1}/{c.steps}
                  </span>
                ) : (
                  <>{c.minutes} min</>
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
