import type { Metadata } from "next";
import { ArrowLeftIcon, ArrowRightIcon, ArrowsSplitIcon, BookOpenTextIcon, CheckCircleIcon, CompassIcon, ExamIcon, FlagCheckeredIcon, GitMergeIcon, MapPinIcon, NewspaperIcon, PathIcon, PushPinIcon, RulerIcon, XCircleIcon } from "@phosphor-icons/react/ssr";
import { ink, PLACE_ICON } from "@/components/ink/icons";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SYSTEMS,
  chaptersForRiver,
  confusionsForRiver,
  getRiver,
  lineage,
  pyqsForRiver,
  rivers,
  tributaries,
} from "@/content";
import type { PlaceKind } from "@/content/types";
import { Markup, plain } from "@/lib/markup";
import { RiverMap } from "@/components/map/RiverMap";
import { Spine } from "@/components/spine/Spine";
import { FactCard } from "@/components/river/FactCard";
import { Frame } from "@/components/ink/Frame";
import { Pencil, PenTitle, Stamp, Sticky } from "@/components/ink/Pen";
import { REGISTRY } from "@/content/registry";
import { mapFor } from "@/data/map";

export const dynamicParams = false;

export function generateStaticParams() {
  return rivers.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const r = getRiver((await params).id);
  if (!r) return {};
  const title = `${r.name} river — UPSC notes with reasons`;
  const description = plain(r.oneLiner);
  const images = [{ url: `/og/river-${r.id}.png`, width: 1200, height: 630, alt: `${r.name} river on the map` }];
  return { title: `${r.name} river`, description, openGraph: { title, description, images }, twitter: { card: "summary_large_image", title, description, images: images.map((i) => i.url) } };
}

const PASSPORT_ICON: Record<string, typeof MapPinIcon> = {
  Rises: MapPinIcon,
  Ends: FlagCheckeredIcon,
  Flows: CompassIcon,
  Length: RulerIcon,
  Through: PathIcon,
  Joins: GitMergeIcon,
};

const KIND_LABEL: Record<PlaceKind, string> = {
  dam: "dam",
  barrage: "barrage",
  waterfall: "waterfall",
  city: "city",
  pilgrimage: "pilgrimage",
  heritage: "heritage",
  "national-park": "park / sanctuary",
  wetland: "wetland",
  project: "project",
  gorge: "gorge",
  confluence: "confluence",
  island: "island",
  lake: "lake",
  delta: "delta",
  glacier: "glacier",
  valley: "valley",
  canal: "canal",
  bridge: "bridge",
};

function Section({ title, seed, children, ink = "ink" as const }: { title: string; seed: string; children: React.ReactNode; ink?: "ink" | "blue" | "red" | "green" }) {
  return (
    <section className="mt-14">
      <PenTitle seed={seed} as="h2" ink={ink} underline={ink === "ink" ? "blue" : ink} className="mb-4 text-[2.3rem] font-bold">
        {title}
      </PenTitle>
      {children}
    </section>
  );
}

export default async function RiverPage({ params }: { params: Promise<{ id: string }> }) {
  const r = getRiver((await params).id);
  if (!r) notFound();
  const sys = SYSTEMS.find((s) => s.id === r.system);
  const tribs = tributaries(r.id);
  const up = lineage(r.id);
  const parent = up[0];
  const qs = pyqsForRiver(r.id);
  const conf = confusionsForRiver(r.id);
  const lessons = chaptersForRiver(r.id);
  const siblings = rivers.filter((x) => x.system === r.system);
  const at = siblings.findIndex((x) => x.id === r.id);
  const prev = siblings[at - 1];
  const next = siblings[at + 1];
  const world = r.system === "world";
  const hasGeom = !!mapFor(r.system).rivers[r.id];
  const mapRivers = Object.entries(REGISTRY)
    .filter(([, x]) => (world ? x.system === "world" : x.system !== "world"))
    .map(([id, x]) => ({ id, name: getRiver(id)?.name ?? x.name, rank: getRiver(id)?.rank ?? 2 }));

  const passport: [string, React.ReactNode][] = [
    ["Rises", <><Markup text={r.source.place} />{r.source.state ? `, ${r.source.state}` : ""}{r.source.elevationM ? ` (${r.source.elevationM.toLocaleString("en-IN")} m)` : ""}</>],
    ["Ends", <><Markup text={r.mouth.place} />{r.mouth.note ? <span className="text-ink/70"> — <Markup text={r.mouth.note} /></span> : null}</>],
    ["Flows", r.direction],
    ...(r.lengthKm ? ([["Length", <>{r.lengthKm.value.toLocaleString("en-IN")} km{r.lengthKm.note ? <span className="font-pencil text-xl text-pencil"> ({r.lengthKm.note})</span> : null}</>]] as [string, React.ReactNode][]) : []),
    ["Through", r.flowsThrough.join(" → ")],
    ...(parent
      ? ([[
          "Joins",
          <>
            <Link href={`/rivers/${parent.id}`} className="river-link">{parent.name}</Link>
            {r.bank && <> on its <span className={r.bank === "left" ? "pen-green font-bold" : "pen-red"}>{r.bank} bank</span></>}
            {r.confluence && <> at {r.confluence}</>}
            {up.length > 1 && <span className="text-ink/70"> (then {up.slice(1).map((u) => u.name).join(" → ")})</span>}
          </>,
        ]] as [string, React.ReactNode][])
      : []),
  ];

  return (
    <div className="ruled min-h-screen">
      <article className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:pl-[4.5rem]">
        <nav className="mb-4 font-pen text-xl text-pencil" aria-label="Breadcrumb">
          <Link href="/rivers" className="hover:text-ink">rivers</Link> / <span>{sys?.name}</span>
        </nav>

        <header className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Stamp seed={r.id}>{r.rank === 1 ? "main river" : r.rank === 2 ? "major tributary" : "exam-relevant"}</Stamp>
            <PenTitle seed={r.id + "h"} as="h1" ink="blue" className="mt-2 text-[3.6rem] font-bold sm:text-[4.4rem]">
              {r.name}
            </PenTitle>
            {r.hindi && <p className="-mt-1 font-hand text-3xl text-red-ink">{r.hindi}</p>}
            {r.aka && r.aka.length > 0 && <Pencil className="mt-1">also: {r.aka.join(" · ")}</Pencil>}
            <p className="mt-4 font-pen text-[1.9rem] leading-9">
              <Markup text={r.oneLiner} />
            </p>

            <Frame seed={r.id + "pp"} ink="ink" strokeWidth={1.6} className="mt-6 bg-[#fffdf6]/80 px-5 py-3">
              <p className="font-marker text-sm uppercase tracking-[0.2em] text-red-ink">river passport</p>
              <dl className="mt-1 grid grid-cols-[6.6rem_1fr] gap-x-3">
                {passport.map(([k, v]) => {
                  const Icon = PASSPORT_ICON[k] ?? MapPinIcon;
                  return (
                  <div key={k} className="contents">
                    <dt className="flex items-center gap-1 font-pen text-xl leading-8 text-pencil"><Icon {...ink} />{k}</dt>
                    <dd className="leading-8">{v}</dd>
                  </div>
                  );
                })}
              </dl>
              {r.source.examNote && (
                <p className="mt-2 rounded-sm bg-hl/30 px-2 text-[0.98rem] leading-7">
                  <span className="font-pen text-lg text-red-ink">exam note: </span>
                  <Markup text={r.source.examNote} />
                </p>
              )}
            </Frame>
          </div>

          <div className="lg:pt-8">
            {hasGeom ? (
              <div className="rotate-[0.6deg] rounded-sm border border-ink/15 bg-[#fffdf6] p-2 sticky-shadow">
                <span aria-hidden className="tape -top-3 left-10 rotate-[-5deg]" />
                <RiverMap
                  world={world}
                  rivers={mapRivers}
                  focus={[r.id, ...tribs.map((t) => t.id)].filter((id) => mapFor(r.system).rivers[id]).slice(0, 1)}
                  trace
                  zoom
                  linkRivers
                  labels="focus"
                  title={`Map of the ${r.name}`}
                />
                {tribs.length > 0 && <Pencil className="px-2">tap any thin blue line to open that river</Pencil>}
              </div>
            ) : (
              <Sticky seed={r.id + "nomap"} color="blue">
                <p className="font-pen text-2xl">Map trace coming soon for this river.</p>
              </Sticky>
            )}
          </div>
        </header>

        <Section title="Why it behaves the way it does" seed={r.id + "why"} ink="green">
          <ul className="space-y-3">
            {r.personality.map((p, i) => (
              <li key={i} className="flex gap-3 leading-8">
                <span aria-hidden className="font-marker text-xl text-green-ink">{i + 1}.</span>
                <span>
                  <Markup text={p} />
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {r.journey.length > 0 && (
          <Section title="The journey, source to mouth" seed={r.id + "j"} ink="blue">
            <ol className="relative ml-3 border-l-[3px] border-dashed border-water/60 pl-7">
              {r.journey.map((j, i) => (
                <li key={i} className="relative pb-6 last:pb-0">
                  <span aria-hidden className="absolute -left-[2.35rem] top-1.5 grid h-6 w-6 place-items-center rounded-full border-2 border-blue-ink bg-paper font-pen text-sm text-blue-ink">
                    {i + 1}
                  </span>
                  <p className="font-pen text-[1.6rem] font-bold leading-8 text-blue-ink">{j.at}</p>
                  <p className="leading-8">
                    <Markup text={j.text} />
                  </p>
                  {j.why && (
                    <p className="text-[1rem] leading-7">
                      <span className="font-pen text-lg text-green-ink">why: </span>
                      <Markup text={j.why} />
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </Section>
        )}

        {tribs.length > 0 && (
          <Section title="Its tributaries, in order" seed={r.id + "sp"}>
            <div className="rounded-sm border border-rule bg-[#fffdf6] p-2">
              <Spine river={r} tributaries={tribs} caption="Read left to right like the river flows. Above the line = left bank, below = right bank." />
            </div>
          </Section>
        )}

        {r.places.length > 0 && (
          <Section title="On its banks" seed={r.id + "pl"}>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {r.places.map((p) => (
                <li key={p.name} className="leading-7">
                  <span className="mr-2 inline-flex items-center gap-1 rounded-sm border border-pencil/50 px-1.5 font-hand text-xs uppercase tracking-wider text-pencil">
                    {(() => { const Icon = PLACE_ICON[p.kind]; return <Icon {...ink} className="text-blue-ink" />; })()}
                    {KIND_LABEL[p.kind]}
                  </span>
                  <strong className="font-pen text-[1.45rem]">{p.name}</strong>
                  <span className="block text-[1rem]">
                    <Markup text={p.note} />
                  </span>
                  {p.why && (
                    <span className="block text-[0.95rem] text-green-ink">
                      <Markup text={p.why} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Test yourself" seed={r.id + "f"} ink="red">
          <div className="grid gap-5 sm:grid-cols-2">
            {r.facts.map((f) => (
              <FactCard key={f.id} id={f.id} q={<Markup text={f.q} />} a={<Markup text={f.a} />} because={<Markup text={f.because} />} tag={f.tag} />
            ))}
          </div>
        </Section>

        {r.traps && r.traps.length > 0 && (
          <Section title="Exam traps" seed={r.id + "tr"} ink="red">
            <ul className="space-y-4">
              {r.traps.map((t, i) => (
                <li key={i} className="rounded-sm bg-hl-pink/15 px-4 py-2 leading-8">
                  <p>
                    <XCircleIcon {...ink} className="mr-1 inline align-[-0.2em] text-red-ink" />
                    <span className="text-pencil line-through decoration-red-ink decoration-2"><Markup text={t.wrong} /></span>
                  </p>
                  <p>
                    <CheckCircleIcon {...ink} className="mr-1 inline align-[-0.2em] text-green-ink" />
                    <strong><Markup text={t.right} /></strong>
                  </p>
                  <p className="text-[1rem]"><Markup text={t.why} /></p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {r.remember && r.remember.length > 0 && (
          <div className="mt-14 flex flex-wrap gap-6">
            {r.remember.map((m, i) => (
              <Sticky key={i} seed={`${r.id}-rem-${i}`} className="w-full max-w-sm">
                <p className="flex items-center gap-1 font-pencil text-2xl leading-6 text-pencil"><PushPinIcon {...ink} className="text-red-ink" />remember:</p>
                <p className="font-pen text-[1.8rem] font-bold leading-8"><Markup text={m.hook} /></p>
                <p className="mt-1 text-[0.98rem] leading-7"><Markup text={m.logic} /></p>
              </Sticky>
            ))}
          </div>
        )}

        {r.news && r.news.length > 0 && (
          <Section title="In the news" seed={r.id + "n"} ink="green">
            <ul className="space-y-4">
              {r.news.map((n, i) => (
                <li key={i} className="rotate-[-0.4deg] border border-ink/20 bg-[#f7f3e8] px-4 py-3 font-hand shadow-sm">
                  <p className="flex items-center gap-1.5 font-marker text-xs uppercase tracking-[0.25em] text-pencil"><NewspaperIcon {...ink} />clipping · {n.year}</p>
                  <p className="leading-8"><Markup text={n.text} /></p>
                  <p className="text-[0.98rem] leading-7"><span className="font-pen text-lg text-green-ink">why it matters: </span><Markup text={n.why} /></p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {(qs.length > 0 || conf.length > 0 || lessons.length > 0) && (
          <Section title="Where it shows up" seed={r.id + "w"}>
            <div className="grid gap-8 sm:grid-cols-3">
              {qs.length > 0 && (
                <div>
                  <p className="flex items-center gap-1.5 font-pen text-2xl font-bold"><ExamIcon {...ink} className="text-red-ink" />UPSC asked</p>
                  <ul className="mt-1 space-y-1">
                    {qs.map((q) => (
                      <li key={q.id}>
                        <Link href={`/pyq#${q.id}`} className="river-link">
                          {q.exam === "prelims" ? "Prelims" : q.exam === "mains" ? `Mains ${q.paper ?? ""}` : "Optional"} {q.year}
                        </Link>
                        <span className="text-[0.95rem] text-ink/70"> · {q.skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {conf.length > 0 && (
                <div>
                  <p className="flex items-center gap-1.5 font-pen text-2xl font-bold"><ArrowsSplitIcon {...ink} className="text-red-ink" />Often confused</p>
                  <ul className="mt-1 space-y-1">
                    {conf.map((c) => (
                      <li key={c.id}><Link href={`/confusions#${c.id}`} className="river-link">{c.title}</Link></li>
                    ))}
                  </ul>
                </div>
              )}
              {lessons.length > 0 && (
                <div>
                  <p className="flex items-center gap-1.5 font-pen text-2xl font-bold"><BookOpenTextIcon {...ink} className="text-blue-ink" />Taught in</p>
                  <ul className="mt-1 space-y-1">
                    {lessons.map((c) => (
                      <li key={c.id}><Link href={`/learn/${c.id}`} className="river-link">{String(c.number).padStart(2, "0")} · {c.title}</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Section>
        )}

        <nav className="mt-16 flex justify-between gap-4 border-t-2 border-dashed border-pencil/30 pt-5 font-pen text-2xl" aria-label="More rivers">
          {prev ? <Link href={`/rivers/${prev.id}`} className="inline-flex items-center gap-1.5 hover:text-blue-ink"><ArrowLeftIcon {...ink} />{prev.name}</Link> : <span />}
          {next ? <Link href={`/rivers/${next.id}`} className="inline-flex items-center gap-1.5 hover:text-blue-ink">{next.name}<ArrowRightIcon {...ink} /></Link> : <span />}
        </nav>
      </article>
    </div>
  );
}
