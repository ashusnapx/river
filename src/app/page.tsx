import Link from "next/link";
import { ArrowRightIcon, ExamIcon, EyeIcon, HandTapIcon, ProhibitIcon, PushPinIcon, QuestionIcon, ScalesIcon, WavesIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { chapters, pyqs, stats } from "@/content";
import { Markup } from "@/lib/markup";
import { SITE } from "@/lib/site";
import { RiverMap } from "@/components/map/RiverMap";
import { mapRiversFor } from "@/components/lesson/Blocks";
import { Check } from "@/components/lesson/Check";
import { BankRuleDemo } from "@/components/home/BankRuleDemo";
import { ChapterIndex } from "@/components/home/ChapterIndex";
import { Frame } from "@/components/ink/Frame";
import { Arrow, Pencil, PenTitle, Stamp, Sticky, Underline } from "@/components/ink/Pen";

const METHOD = [
  { k: "Notice", t: "See the pattern on the map first.", c: "var(--color-blue-ink)", Icon: EyeIcon },
  { k: "Ask why", t: "Guess the reason before we tell you.", c: "var(--color-blue-ink)", Icon: QuestionIcon },
  { k: "The law", t: "One rule that explains a dozen facts.", c: "var(--color-red-ink)", Icon: ScalesIcon },
  { k: "Lock it", t: "A memory hook that carries its logic.", c: "var(--color-green-ink)", Icon: PushPinIcon },
  { k: "Test", t: "UPSC-style question, reasoning shown.", c: "var(--color-ink)", Icon: ExamIcon },
];

export default function Home() {
  const s = stats();
  const sample = pyqs.find((p) => p.exam === "prelims" && p.keyStatus === "official" && p.options && p.answer !== undefined);
  const hero = ["indus", "ganga", "brahmaputra"];

  return (
    <div className="overflow-x-clip">
      {/* ---------------- hero ---------------- */}
      <section className="ruled border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-10 sm:pl-[4.5rem] lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Pencil className="mb-2">UPSC · Prelims + Mains · latest papers &amp; current affairs</Pencil>
            <PenTitle seed="hero-1" as="h1" className="text-[3.4rem] font-bold sm:text-[4.6rem]">
              Rivers aren&apos;t a list.
            </PenTitle>
            <PenTitle seed="hero-2" as="p" ink="blue" underline="red" className="mt-1 text-[2.6rem] font-semibold sm:text-[3.6rem]">
              They&apos;re a story with reasons.
            </PenTitle>
            <p className="mt-6 max-w-xl text-[1.2rem] leading-8">
              Why do the Narmada and Tapi run west when almost everything else runs east? Why is every Himalayan tributary of the Ganga on its{" "}
              <span className="pen-hl">left</span> bank, and every one of the Brahmaputra&apos;s on its <span className="pen-hl">right</span>? Once you see
              the <span className="pen-green">reason</span>, you never have to mug up the fact.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={chapters[0] ? `/learn/${chapters[0].id}` : "/learn"}
                className="rounded-full bg-blue-ink px-7 py-2 font-pen text-[1.7rem] text-paper shadow-[4px_5px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
              >
                Start chapter 1 <ArrowRightIcon {...ink} className="inline align-[-0.15em]" />
              </Link>
              <Link href="/atlas" className="font-pen text-[1.6rem] hover:text-blue-ink">
                <Frame seed="hero-atlas" ink="ink" className="px-5 py-1.5">
                  open the hand-drawn atlas
                </Frame>
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-5">
              <Sticky seed="st-1" className="w-36 text-center" maxTilt={4}>
                <p className="font-marker text-3xl text-blue-ink">{s.rivers || "120+"}</p>
                <p className="font-pen text-lg leading-5"><WavesIcon {...ink} className="mr-1 inline align-[-0.15em] text-blue-ink" />rivers, each with a why</p>
              </Sticky>
              <Sticky seed="st-2" color="pink" className="w-36 text-center" maxTilt={4}>
                <p className="font-marker text-3xl text-red-ink">{s.pyqs || "70+"}</p>
                <p className="font-pen text-lg leading-5"><ExamIcon {...ink} className="mr-1 inline align-[-0.15em] text-red-ink" />UPSC questions explained</p>
              </Sticky>
              <Sticky seed="st-3" color="blue" className="w-36 text-center" maxTilt={4}>
                <p className="font-marker text-3xl text-green-ink">0</p>
                <p className="font-pen text-lg leading-5"><ProhibitIcon {...ink} className="mr-1 inline align-[-0.15em] text-green-ink" />logins, ads or videos</p>
              </Sticky>
            </div>
          </div>

          <div className="relative">
            <div className="rotate-[0.8deg] rounded-sm border border-ink/15 bg-[#fffdf6] p-2 sticky-shadow">
              <span aria-hidden className="tape -top-3 left-8 rotate-[-6deg]" />
              <span aria-hidden className="tape -top-3 right-8 rotate-[5deg]" />
              <RiverMap rivers={mapRiversFor(hero)} focus={hero} trace labels="focus" linkRivers title="India's three great Himalayan rivers, traced from source to mouth" />
            </div>
            <div className="pointer-events-none absolute -bottom-16 -left-6 hidden w-56 -rotate-3 lg:block">
              <Arrow seed="hero-arrow" ink="red" className="ml-24 h-14 w-24 -rotate-[120deg]" />
              <p className="font-pencil text-[1.7rem] leading-6 text-red-ink">three rivers, one ancient story: watch them flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the 30 second aha ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:pl-[4.5rem]">
        <Stamp seed="aha"><HandTapIcon {...ink} />try it</Stamp>
        <PenTitle seed="aha-t" className="mt-2 text-[2.6rem] font-bold sm:text-5xl">
          The 30-second &ldquo;aha&rdquo;
        </PenTitle>
        <p className="mb-6 mt-1 max-w-2xl leading-8">
          Banks are named <strong className="pen-heavy">facing downstream</strong>. That one idea settles every &ldquo;left-bank or right-bank?&rdquo;
          question UPSC can ask. Flip the river and watch.
        </p>
        <BankRuleDemo />
      </section>

      {/* ---------------- rote vs reason ---------------- */}
      <section className="bg-paper-deep/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:pl-[4.5rem]">
          <PenTitle seed="vs" className="text-[2.6rem] font-bold sm:text-5xl">
            Same fact. Two notebooks.
          </PenTitle>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="relative rounded-sm bg-[#fffdf6] p-6 opacity-80 sticky-shadow" style={{ transform: "rotate(-1deg)" }}>
              <p className="font-marker text-sm uppercase tracking-widest text-pencil">the usual way</p>
              <ul className="mt-2 space-y-1 font-pencil text-[1.7rem] leading-8 text-pencil">
                <li>Narmada — west — estuary</li>
                <li>Tapi — west — estuary</li>
                <li>Godavari — east — delta</li>
                <li>Mahanadi — east — delta</li>
                <li>…repeat 40 times, forget by Prelims</li>
              </ul>
              <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
                <path d="M8 12 L92 88 M92 14 L10 86" stroke="var(--color-red-ink)" strokeWidth={1.2} opacity={0.6} vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <Frame seed="vs-dhara" ink="blue" strokeWidth={2.4} className="bg-[#fffdf6] p-6">
              <p className="font-marker text-sm uppercase tracking-widest text-blue-ink">the {SITE.name} way</p>
              <p className="mt-2 leading-8">
                <strong className="pen-heavy">Narmada &amp; Tapi</strong> flow west{" "}
                <span className="pen-green">because they run in rift valleys (faulted troughs) that slope west</span>.
              </p>
              <p className="leading-8">
                A trough is narrow and rocky, so the river is <span className="pen-hl">fast and carries little silt</span>, and the tides of the Gulf of Khambhat
                sweep the mouth clean. Result: an <span className="pen-underline">estuary, not a delta</span>.
              </p>
              <p className="leading-8">
                East-flowing rivers cross wide, gentle plains with heavy silt, so they <strong className="pen-heavy">build deltas</strong>. One reason, every
                river answered.
              </p>
            </Frame>
          </div>
        </div>
      </section>

      {/* ---------------- method ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:pl-[4.5rem]">
        <PenTitle seed="method" className="text-[2.6rem] font-bold sm:text-5xl">
          Every step teaches the same way
        </PenTitle>
        <Underline seed="method-u" ink="blue" className="mt-1 max-w-xs" />
        <ol className="mt-8 grid gap-4 sm:grid-cols-5">
          {METHOD.map((m, i) => (
            <li key={m.k} className="relative">
              <p className="flex items-center gap-2 font-marker text-3xl" style={{ color: m.c }}>
                {i + 1}
                <m.Icon weight="duotone" size={30} aria-hidden />
              </p>
              <p className="font-pen text-[1.8rem] font-bold leading-8">{m.k}</p>
              <p className="text-[1rem] leading-7 text-ink/80">{m.t}</p>
              {i < METHOD.length - 1 && <Arrow seed={`m-${i}`} className="absolute -right-5 top-1 hidden h-8 w-10 sm:block" />}
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl font-pencil text-[1.7rem] leading-7 text-pencil">
          built on what memory research says works: asking &ldquo;why&rdquo;, testing yourself, spacing your revision, and drawing what you learn.
        </p>
      </section>

      {/* ---------------- a real PYQ ---------------- */}
      {sample && (
        <section className="mx-auto max-w-3xl px-4 pb-16">
          <PenTitle seed="pyq-h" className="text-[2.3rem] font-bold sm:text-[2.8rem]">
            UPSC asked this. Reason it out.
          </PenTitle>
          <Check
            id={`home-${sample.id}`}
            prompt={<Markup text={sample.text} />}
            options={(sample.options ?? []).map((o, i) => <Markup key={i} text={o} terms={false} />)}
            answer={sample.answer!}
            explain={<Markup text={sample.explain} />}
            source={`UPSC CSE Prelims ${sample.year}`}
          />
          <Link href="/pyq" className="font-pen text-2xl text-blue-ink underline decoration-wavy underline-offset-4">
            all {s.pyqs} river PYQs, explained <ArrowRightIcon {...ink} className="inline align-[-0.15em]" />
          </Link>
        </section>
      )}

      {/* ---------------- index ---------------- */}
      <section className="ruled border-y border-ink/10 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:pl-[4.5rem]">
          <PenTitle seed="index" className="text-[2.6rem] font-bold sm:text-5xl">
            Index
          </PenTitle>
          <p className="mb-6 font-pencil text-2xl text-pencil">
            {s.chapters} chapters · {s.steps} steps · read in order, one idea at a time
          </p>
          <ChapterIndex chapters={chapters.map((c) => ({ id: c.id, number: c.number, title: c.title, subtitle: c.subtitle, minutes: c.minutes, steps: c.steps.length }))} />
        </div>
      </section>
    </div>
  );
}
