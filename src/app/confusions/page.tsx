import type { Metadata } from "next";
import Link from "next/link";
import { confusions } from "@/content";
import { REGISTRY } from "@/content/registry";
import { Markup } from "@/lib/markup";
import { tilt } from "@/lib/seed";
import { Pencil, PenTitle } from "@/components/ink/Pen";

export const metadata: Metadata = { title: "Confusion clinic", description: "The river pairs and lists UPSC aspirants mix up, each with a one-glance way to tell them apart and the reason behind it." };

export default function ConfusionsPage() {
  return (
    <div className="ruled min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:pl-[4.5rem]">
        <PenTitle seed="conf" as="h1" underline="red" className="text-[3rem] font-bold sm:text-6xl">
          Confusion clinic
        </PenTitle>
        <Pencil className="mt-2">{confusions.length} mix-ups that cost marks, untangled with one reason each.</Pencil>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {confusions.map((c) => (
            <article key={c.id} id={c.id} className="scroll-mt-28 bg-[#fffdf6] p-5 sticky-shadow" style={{ transform: `rotate(${tilt(c.id, 0.7)}deg)` }}>
              <h2 className="font-pen text-[1.9rem] font-bold leading-9 text-ink">{c.title}</h2>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                {c.items.map((it, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="font-marker text-sm text-red-ink">vs</span>}
                    <span className="rounded-sm bg-hl/40 px-1.5 font-hand">{it}</span>
                  </span>
                ))}
              </p>
              <p className="mt-3 leading-8">
                <span className="font-pen text-xl text-blue-ink">tell them apart: </span>
                <Markup text={c.tell} />
              </p>
              <p className="mt-1 border-l-[3px] border-green-ink/50 pl-3 text-[1rem] leading-7">
                <span className="font-pen text-lg text-green-ink">because </span>
                <Markup text={c.why} />
              </p>
              {c.riverIds.length > 0 && (
                <p className="mt-2 font-pen text-lg text-pencil">
                  {c.riverIds.map((id, i) => (
                    <span key={id}>
                      {i > 0 && " · "}
                      <Link href={`/rivers/${id}`} className="river-link">{REGISTRY[id]?.name ?? id}</Link>
                    </span>
                  ))}
                </p>
              )}
            </article>
          ))}
        </div>
        {!confusions.length && <p className="mt-10 font-pen text-2xl text-pencil">The clinic is being written…</p>}
      </div>
    </div>
  );
}
