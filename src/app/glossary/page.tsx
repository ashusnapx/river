import type { Metadata } from "next";
import { GLOSSARY } from "@/content/glossary-index";
import type { GlossaryId } from "@/content/glossary-ids";
import { Markup } from "@/lib/markup";
import { tilt } from "@/lib/seed";
import { Doodle } from "@/components/doodles";
import { Boondi } from "@/components/doodles/Boondi";
import { Pencil, PenTitle } from "@/components/ink/Pen";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Every river word, explained twice: the exact exam definition, and a version a five-year-old understands.",
};

const GROUPS: { title: string; ids: GlossaryId[] }[] = [
  { title: "The parts of a river", ids: ["source", "mouth", "headwaters", "upstream-downstream", "main-stem", "tributary", "distributary", "confluence", "prayag", "left-right-bank", "basin", "catchment", "water-divide", "inland-drainage"] },
  { title: "How rivers behave", ids: ["perennial", "seasonal-river", "regime", "discharge", "cusec", "tmc", "monsoon", "glacier", "erosion", "deposition", "sediment-load", "alluvium"] },
  { title: "Shapes rivers make", ids: ["v-shaped-valley", "gorge", "canyon", "waterfall", "rapids", "meander", "oxbow-lake", "braided-channel", "river-island", "floodplain", "levee", "delta", "estuary", "lagoon", "backwaters", "wetland", "ramsar-site"] },
  { title: "Land and rocks", ids: ["plateau", "fault", "rift-valley", "doab", "bhabar", "terai", "khadar", "bhangar"] },
  { title: "Drainage patterns and river history", ids: ["antecedent", "consequent", "superimposed", "river-capture", "dendritic", "trellis", "rectangular", "radial", "centripetal"] },
  { title: "People and rivers", ids: ["dam", "barrage", "reservoir", "run-of-river", "canal", "interlinking", "tribunal", "e-flow"] },
];

export default function GlossaryPage() {
  const count = Object.keys(GLOSSARY).length;
  return (
    <div className="ruled min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:pl-[4.5rem]">
        <div className="flex flex-wrap items-end gap-4">
          <PenTitle seed="gloss" as="h1" underline="blue" className="text-[3rem] font-bold sm:text-6xl">
            Glossary
          </PenTitle>
          <Boondi size={56} mood="wink" className="mb-2" />
        </div>
        <Pencil className="mt-2 max-w-2xl">
          {count ? `${count} words` : "words are being written…"}, each explained twice: exactly (for the exam) and the way Boondi the water drop would tell a five-year-old. Spot a dotted
          underline anywhere in the notebook? Hover or tap it.
        </Pencil>

        <nav aria-label="Glossary sections" className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-pen text-xl">
          {GROUPS.map((g) => (
            <a key={g.title} href={`#${g.title.toLowerCase().replace(/\W+/g, "-")}`} className="text-blue-ink underline decoration-dotted underline-offset-4 hover:text-water">
              {g.title}
            </a>
          ))}
        </nav>

        {GROUPS.map((g) => (
          <section key={g.title} id={g.title.toLowerCase().replace(/\W+/g, "-")} className="mt-14 scroll-mt-28">
            <h2 className="font-pen text-[2.3rem] font-bold leading-10 text-ink">{g.title}</h2>
            <div className="mt-5 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {g.ids.map((id) => {
                const t = GLOSSARY[id];
                if (!t) return null;
                return (
                  <article key={id} id={`g-${id}`} className="scroll-mt-28 bg-[#fffdf6] px-4 pb-4 pt-2 sticky-shadow" style={{ transform: `rotate(${tilt(id, 0.8)}deg)` }}>
                    <Doodle id={id} className="mx-auto block h-[100px] w-[160px]" />
                    <h3 className="flex flex-wrap items-baseline gap-2 font-pen text-[1.75rem] font-bold leading-8">
                      {t.term}
                      {t.hindi && <span className="font-hand text-base font-normal text-red-ink">{t.hindi}</span>}
                    </h3>
                    <p className="mt-1 text-[0.98rem] leading-7">
                      <span className="font-marker text-[0.68rem] uppercase tracking-[0.18em] text-blue-ink">exactly · </span>
                      <Markup text={t.exact} terms={false} />
                    </p>
                    <div className="mt-2 flex gap-2 rounded-sm bg-sticky-blue/60 px-2 py-1.5 text-[0.95rem] leading-6">
                      <Boondi size={28} decorative className="mt-0.5 shrink-0" />
                      <p>
                        <span className="font-pen text-lg text-blue-ink">like you&apos;re 5: </span>
                        <Markup text={t.kid} terms={false} />
                      </p>
                    </div>
                    {t.example && (
                      <p className="mt-2 text-[0.92rem] leading-6 text-ink/85">
                        <span className="font-pen text-base text-green-ink">e.g. </span>
                        <Markup text={t.example} terms={false} />
                      </p>
                    )}
                    {t.see && t.see.length > 0 && (
                      <p className="mt-1 font-pen text-lg text-pencil">
                        see:{" "}
                        {t.see.map((s, i) => (
                          <span key={s}>
                            {i > 0 && ", "}
                            <a href={`#g-${s}`} className="text-blue-ink underline decoration-dotted underline-offset-4">
                              {GLOSSARY[s]?.term ?? s}
                            </a>
                          </span>
                        ))}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
