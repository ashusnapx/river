import type { Metadata } from "next";
import { SYSTEMS, getRiver, rivers } from "@/content";
import { REGISTRY } from "@/content/registry";
import { Atlas } from "@/components/map/Atlas";
import { Pencil, PenTitle } from "@/components/ink/Pen";

export const metadata: Metadata = { title: "Hand-drawn atlas", description: "Tap any river to trace it from source to mouth, or play 'find the river' to test your map memory." };

export default function AtlasPage() {
  const list = Object.entries(REGISTRY).map(([id, reg]) => {
    const r = getRiver(id);
    const parent = r?.parent ? getRiver(r.parent)?.name ?? REGISTRY[r.parent]?.name : undefined;
    return {
      id,
      name: r?.name ?? reg.name,
      hindi: r?.hindi,
      system: reg.system,
      systemName: SYSTEMS.find((s) => s.id === reg.system)?.name ?? reg.system,
      rank: r?.rank ?? 2,
      oneLiner: r?.oneLiner ?? "",
      source: r?.source.place ?? "",
      mouth: r?.mouth.place ?? "",
      joins: parent,
      bank: r?.bank,
    };
  });
  return (
    <div className="graph min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <PenTitle seed="atlas" as="h1" className="text-[2.8rem] font-bold sm:text-5xl">
          The atlas
        </PenTitle>
        <Pencil className="mb-5">{rivers.length ? `${list.length} rivers, drawn by hand from survey data.` : "loading rivers…"} Tap one to trace it.</Pencil>
        <Atlas rivers={list} systems={SYSTEMS.map((s) => ({ id: s.id, name: s.name }))} />
      </div>
    </div>
  );
}
