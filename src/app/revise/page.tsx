import type { Metadata } from "next";
import { SYSTEMS, rivers } from "@/content";
import { Deck } from "@/components/revise/Deck";
import { Pencil, PenTitle } from "@/components/ink/Pen";

export const metadata: Metadata = { title: "Revise", description: "Spaced-repetition flashcards for every river fact, each with its reason." };

export default function RevisePage() {
  const cards = rivers.flatMap((r) => r.facts.map((f) => ({ id: f.id, river: r.id, riverName: r.name, system: r.system, q: f.q, a: f.a, because: f.because })));
  return (
    <div className="ruled min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:pl-[4.5rem]">
        <PenTitle seed="rev" as="h1" underline="green" className="text-[3rem] font-bold sm:text-6xl">
          Revise
        </PenTitle>
        <Pencil className="mb-8 mt-2">{cards.length} flashcards. Ten minutes a day beats ten hours before Prelims.</Pencil>
        <Deck cards={cards} systems={SYSTEMS.map((s) => ({ id: s.id, name: s.name }))} />
      </div>
    </div>
  );
}
