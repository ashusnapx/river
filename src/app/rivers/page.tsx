import type { Metadata } from "next";
import Link from "next/link";
import { SYSTEMS, rivers, tributaries } from "@/content";
import { Markup } from "@/lib/markup";
import { Pencil, PenTitle } from "@/components/ink/Pen";

export const metadata: Metadata = { title: "Every river", description: "Every UPSC-relevant river, grouped by system, each with its reason-first passport, journey, tributaries, traps and PYQs." };

export default function RiversPage() {
  return (
    <div className="ruled min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:pl-[4.5rem]">
        <PenTitle seed="rivers" as="h1" underline="blue" className="text-[3rem] font-bold sm:text-6xl">
          Every river
        </PenTitle>
        <Pencil className="mt-2">{rivers.length} rivers. Bold = main river · normal = tributary · each one tells you why.</Pencil>

        {SYSTEMS.map((s) => {
          const list = rivers.filter((r) => r.system === s.id);
          if (!list.length) return null;
          const mains = list.filter((r) => r.rank === 1);
          return (
            <section key={s.id} className="mt-14" aria-labelledby={`sys-${s.id}`}>
              <h2 id={`sys-${s.id}`} className="flex flex-wrap items-baseline gap-x-3 font-pen text-[2.4rem] font-bold leading-10" style={{ color: s.ink }}>
                {s.name}
                <span className="font-hand text-xl text-red-ink">{s.hindi}</span>
              </h2>
              <Pencil>{s.blurb}</Pencil>
              <div className="mt-4 grid gap-x-10 gap-y-6 md:grid-cols-2">
                {(mains.length ? mains : list).map((m) => {
                  const kids = s.id === "world" ? [] : list.filter((r) => r !== m && (r.parent === m.id || tributaries(m.id).some((t) => t.id === r.parent)));
                  return (
                    <div key={m.id}>
                      <Link href={`/rivers/${m.id}`} className="group block">
                        <span className="font-pen text-[2rem] font-bold leading-9 text-blue-ink group-hover:underline">{m.name}</span>
                        {m.hindi && <span className="ml-2 font-hand text-lg text-red-ink">{m.hindi}</span>}
                        <span className="block text-[1rem] leading-7 text-ink/85">
                          <Markup text={m.oneLiner.replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_, id, l) => l || id)} />
                        </span>
                      </Link>
                      {kids.length > 0 && (
                        <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 leading-7">
                          {kids.map((k) => (
                            <li key={k.id}>
                              <Link href={`/rivers/${k.id}`} className="font-hand text-[1.02rem] text-ink/80 underline decoration-pencil/40 decoration-dotted underline-offset-4 hover:text-blue-ink">
                                {k.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
              {s.id !== "world" && (
                <ul className="mt-4 flex flex-wrap gap-x-3 leading-7">
                  {list
                    .filter((r) => r.rank !== 1 && !mains.some((m) => r.parent === m.id || tributaries(m.id).some((t) => t.id === r.parent)))
                    .map((r) => (
                      <li key={r.id}>
                        <Link href={`/rivers/${r.id}`} className="font-hand text-ink/80 underline decoration-dotted underline-offset-4 hover:text-blue-ink">
                          {r.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </section>
          );
        })}
        {!rivers.length && <p className="mt-10 font-pen text-2xl text-pencil">Rivers are being written…</p>}
      </div>
    </div>
  );
}
