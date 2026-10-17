"use client";

import Link from "next/link";
import { ArrowRightIcon, ArrowsOutIcon, CheckCircleIcon, CrosshairIcon, GlobeHemisphereEastIcon, MagnifyingGlassIcon, MapTrifoldIcon, XCircleIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { indiaMap, worldMap } from "@/data/map";
import { Markup } from "@/lib/markup";
import { hash } from "@/lib/seed";
import { RiverMap } from "./RiverMap";

export interface AtlasRiver {
  id: string;
  name: string;
  hindi?: string;
  system: string;
  systemName: string;
  rank: 1 | 2 | 3;
  oneLiner: string;
  source: string;
  mouth: string;
  joins?: string;
  bank?: "left" | "right";
}

type Mode = "explore" | "quiz";

/** Explore the hand-drawn map, or play "find the river". */
export function Atlas({ rivers, systems }: { rivers: AtlasRiver[]; systems: { id: string; name: string }[] }) {
  const [world, setWorld] = useState(false);
  const [mode, setMode] = useState<Mode>("explore");
  const [system, setSystem] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [labels, setLabels] = useState(false);
  const [cities, setCities] = useState(false);

  const geo = world ? worldMap : indiaMap;
  const pool = useMemo(
    () => rivers.filter((r) => (world ? r.system === "world" : r.system !== "world") && geo.rivers[r.id]),
    [rivers, world, geo],
  );
  const visible = pool.filter((r) => system === "all" || r.system === system);
  const matches = query.trim()
    ? pool.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()) || r.hindi?.includes(query.trim()))
    : [];
  const sel = rivers.find((r) => r.id === selected);

  // quiz state
  const [round, setRound] = useState(0);
  const [score, setScore] = useState({ right: 0, tries: 0 });
  const [feedback, setFeedback] = useState<{ ok: boolean; picked: string } | null>(null);
  const quizPool = visible.filter((r) => r.rank <= 2);
  // deterministic shuffle: round n picks a pseudo-random river from the pool
  const target = mode === "quiz" && quizPool.length ? quizPool[hash(`round-${round}`) % quizPool.length].id : null;
  const nextTarget = () => {
    setRound((n) => n + 1);
    setFeedback(null);
  };

  const onSelect = (id: string) => {
    if (mode === "explore") {
      setSelected(id);
      return;
    }
    if (!target || feedback?.ok) return;
    const ok = id === target;
    setFeedback({ ok, picked: id });
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), tries: s.tries + 1 }));
    if (ok) setTimeout(nextTarget, 1100);
  };

  const focus = mode === "quiz" ? (feedback ? [feedback.picked, ...(feedback.ok ? [] : [])] : []) : selected ? [selected] : [];
  const targetName = rivers.find((r) => r.id === target)?.name;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Toggle on={!world} onClick={() => { setWorld(false); setSelected(null); setSystem("all"); }}><MapTrifoldIcon {...ink} />India</Toggle>
          <Toggle on={world} onClick={() => { setWorld(true); setSelected(null); setSystem("all"); }}><GlobeHemisphereEastIcon {...ink} />World</Toggle>
          <span className="mx-2 h-6 w-px bg-ink/20" aria-hidden />
          <Toggle on={mode === "explore"} onClick={() => { setMode("explore"); setFeedback(null); }}><MagnifyingGlassIcon {...ink} />explore</Toggle>
          <Toggle on={mode === "quiz"} onClick={() => { setMode("quiz"); setSelected(null); setScore({ right: 0, tries: 0 }); nextTarget(); }}><CrosshairIcon {...ink} />find the river</Toggle>
        </div>

        {!world && (
          <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1" role="radiogroup" aria-label="River system">
            {[{ id: "all", name: "all systems" }, ...systems.filter((s) => s.id !== "world")].map((s) => (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={system === s.id}
                onClick={() => setSystem(s.id)}
                className={`font-pen text-xl ${system === s.id ? "pen-hl font-bold text-ink" : "text-pencil hover:text-ink"}`}
              >
                {s.name}
              </button>
            ))}
          </div>
        )}

        <div className="relative rounded-sm border border-ink/15 bg-[#fffdf6] p-1 sticky-shadow sm:p-2">
          <AnimatePresence>
            {mode === "quiz" && targetName && (
              <motion.div
                key={target}
                initial={{ y: -12, opacity: 0, rotate: -3 }}
                animate={{ y: 0, opacity: 1, rotate: -1.5 }}
                exit={{ opacity: 0 }}
                className="absolute left-3 top-3 z-10 max-w-[80%] bg-sticky px-4 py-2 sticky-shadow"
                aria-live="polite"
              >
                <p className="font-pencil text-xl leading-5 text-pencil">tap the river:</p>
                <p className="font-pen text-3xl font-bold leading-8">{targetName}</p>
                {feedback && (
                  <p className={`font-pen text-xl ${feedback.ok ? "text-green-ink" : "text-red-ink"}`}>
                    {feedback.ok ? <CheckCircleIcon {...ink} className="mr-1 inline align-[-0.15em]" /> : <XCircleIcon {...ink} className="mr-1 inline align-[-0.15em]" />}
                    {feedback.ok ? "yes!" : `that's the ${rivers.find((r) => r.id === feedback.picked)?.name}. try again`}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <RiverMap
            world={world}
            rivers={visible.map((r) => ({ id: r.id, name: r.name, rank: r.rank }))}
            focus={focus}
            trace={mode === "explore"}
            zoom={mode === "explore" && !!selected}
            onSelect={onSelect}
            labels={mode === "quiz" ? "none" : labels ? "all" : "focus"}
            showCities={cities}
            title={world ? "World rivers map" : "Hand-drawn map of Indian rivers"}
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-4 font-pen text-lg text-pencil">
          {mode === "explore" && (
            <>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={labels} onChange={(e) => setLabels(e.target.checked)} className="accent-[var(--color-blue-ink)]" /> label every river</label>
              {!world && <label className="flex items-center gap-1.5"><input type="checkbox" checked={cities} onChange={(e) => setCities(e.target.checked)} className="accent-[var(--color-blue-ink)]" /> show cities</label>}
              {selected && <button type="button" onClick={() => setSelected(null)} className="inline-flex items-center gap-1 hover:text-ink"><ArrowsOutIcon {...ink} />zoom out</button>}
            </>
          )}
          {mode === "quiz" && (
            <>
              <span>score: {score.right}/{score.tries}</span>
              <button type="button" onClick={nextTarget} className="inline-flex items-center gap-1 hover:text-ink">skip<ArrowRightIcon {...ink} /></button>
            </>
          )}
        </div>
      </div>

      <aside className="space-y-4">
        {mode === "explore" && (
          <>
            <label className="block">
              <span className="flex items-center gap-1 font-pen text-xl text-pencil"><MagnifyingGlassIcon {...ink} />find a river</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Godavari, गंगा"
                className="mt-0.5 w-full border-0 border-b-2 border-ink/40 bg-transparent px-1 font-hand text-xl outline-none placeholder:text-pencil/60 focus:border-blue-ink"
              />
            </label>
            {matches.length > 0 && (
              <ul className="-mt-2 max-h-48 overflow-auto">
                {matches.slice(0, 12).map((r) => (
                  <li key={r.id}>
                    <button type="button" onClick={() => { setSelected(r.id); setQuery(""); }} className="w-full px-1 text-left font-pen text-xl hover:bg-hl/30">
                      {r.name} <span className="text-base text-pencil">· {r.systemName}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <AnimatePresence mode="wait">
              {sel ? (
                <motion.div key={sel.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="bg-[#fffdf6] p-4 sticky-shadow">
                  <p className="font-pencil text-xl text-pencil">{sel.systemName}</p>
                  <p className="font-pen text-4xl font-bold leading-10 text-blue-ink">{sel.name}</p>
                  {sel.hindi && <p className="font-hand text-xl text-red-ink">{sel.hindi}</p>}
                  <p className="mt-2 leading-7"><Markup text={sel.oneLiner} /></p>
                  <dl className="mt-3 space-y-1 text-[0.98rem] leading-6">
                    <div><dt className="inline font-pen text-lg text-green-ink">rises: </dt><dd className="inline"><Markup text={sel.source} /></dd></div>
                    <div><dt className="inline font-pen text-lg text-red-ink">ends: </dt><dd className="inline"><Markup text={sel.mouth} /></dd></div>
                    {sel.joins && <div><dt className="inline font-pen text-lg text-blue-ink">joins: </dt><dd className="inline">{sel.joins}{sel.bank ? ` (${sel.bank} bank)` : ""}</dd></div>}
                  </dl>
                  <Link href={`/rivers/${sel.id}`} className="mt-3 inline-block font-pen text-2xl text-blue-ink underline decoration-wavy underline-offset-4">
                    open its full page <ArrowRightIcon {...ink} className="inline align-[-0.15em]" />
                  </Link>
                </motion.div>
              ) : (
                <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-pencil text-2xl leading-7 text-pencil">
                  tap any river on the map. it zooms in and traces itself from source to mouth.
                </motion.p>
              )}
            </AnimatePresence>
          </>
        )}
        {mode === "quiz" && (
          <div className="font-hand leading-7">
            <p className="font-pen text-2xl font-bold">Why a map quiz?</p>
            <p>Pulling a river&apos;s position out of memory (instead of re-reading the atlas) is what makes it stick. Miss one? The map tells you which river you tapped, so even the mistake teaches.</p>
          </div>
        )}
      </aside>
    </div>
  );
}

function Toggle({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border-2 px-3.5 font-pen text-xl leading-8 transition-colors ${on ? "border-blue-ink bg-blue-ink text-paper" : "border-ink/30 hover:border-ink"}`}
    >
      {children}
    </button>
  );
}
