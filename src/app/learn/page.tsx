import type { Metadata } from "next";
import { chapters, stats } from "@/content";
import { ChapterIndex } from "@/components/home/ChapterIndex";
import { Pencil, PenTitle } from "@/components/ink/Pen";

export const metadata: Metadata = { title: "Learn step by step", description: "The river notebook, chapter by chapter: laws first, then each river system, then the issues UPSC asks in Mains." };

export default function LearnPage() {
  const s = stats();
  return (
    <div className="ruled min-h-[80vh]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:pl-[4.5rem]">
        <PenTitle seed="learn" as="h1" underline="red" className="text-[3rem] font-bold sm:text-6xl">
          The notebook
        </PenTitle>
        <Pencil className="mt-2">
          {s.chapters} chapters · {s.steps} steps. Start at 01: it gives you the laws that make every later chapter easy.
        </Pencil>
        <div className="mt-8">
          <ChapterIndex chapters={chapters.map((c) => ({ id: c.id, number: c.number, title: c.title, subtitle: c.subtitle, minutes: c.minutes, steps: c.steps.length }))} />
        </div>
      </div>
    </div>
  );
}
