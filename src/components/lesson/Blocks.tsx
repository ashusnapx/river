import type { Block } from "@/content/types";
import { CheckCircleIcon, PushPinIcon, ScalesIcon, WarningIcon, XCircleIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { getRiver, rivers as allRivers, tributaries } from "@/content";
import { REGISTRY } from "@/content/registry";
import { Markup } from "@/lib/markup";
import { RiverMap, type MapRiver } from "@/components/map/RiverMap";
import { Spine } from "@/components/spine/Spine";
import { Sketch } from "@/components/sketches";
import { Frame } from "@/components/ink/Frame";
import { Pencil, Sticky } from "@/components/ink/Pen";
import { Check } from "./Check";
import { WhyCard } from "./WhyCard";

/** Rivers to draw lightly around the focus: everything in the same systems. */
export function mapRiversFor(focus: string[]): MapRiver[] {
  const systems = new Set(focus.map((id) => REGISTRY[id]?.system));
  return Object.entries(REGISTRY)
    .filter(([, r]) => systems.has(r.system) || (!systems.has("world") && r.system !== "world"))
    .map(([id, r]) => ({ id, name: getRiver(id)?.name ?? r.name, rank: getRiver(id)?.rank ?? 2 }));
}

export function BlockView({ block, seed }: { block: Block; seed: string }) {
  switch (block.type) {
    case "say":
      return (
        <p className="my-3 whitespace-pre-line leading-8">
          <Markup text={block.text} />
        </p>
      );

    case "why":
      return <WhyCard q={<Markup text={block.q} />} a={<Markup text={block.a} />} />;

    case "law":
      return (
        <Frame seed={seed} ink="blue" strokeWidth={2.2} double className="my-6 px-5 py-4">
          <p className="flex items-center gap-1.5 font-marker text-sm uppercase tracking-[0.2em] text-red-ink"><ScalesIcon {...ink} />The law</p>
          <p className="font-pen text-3xl font-bold leading-9 text-blue-ink">{block.title}</p>
          <p className="mt-1 leading-8">
            <Markup text={block.text} />
          </p>
        </Frame>
      );

    case "trap":
      return (
        <div className="my-5 rounded-sm bg-hl-pink/15 px-4 py-3">
          <p className="flex items-center gap-1.5 font-marker text-sm uppercase tracking-[0.2em] text-red-ink"><WarningIcon {...ink} />Exam trap</p>
          <p className="leading-8">
            <XCircleIcon {...ink} className="mr-1 inline align-[-0.2em] text-red-ink" />
            <span className="text-pencil line-through decoration-red-ink decoration-2">
              <Markup text={block.wrong} />
            </span>
          </p>
          <p className="leading-8">
            <CheckCircleIcon {...ink} className="mr-1 inline align-[-0.2em] text-green-ink" />
            <strong>
              <Markup text={block.right} />
            </strong>
          </p>
          <p className="leading-8 text-ink/85">
            <span className="font-pen text-xl text-green-ink">why: </span>
            <Markup text={block.why} />
          </p>
        </div>
      );

    case "remember":
      return (
        <div className="my-7 flex justify-center px-2">
          <Sticky seed={seed} className="w-full max-w-md">
            <p className="flex items-center gap-1 font-pencil text-2xl leading-6 text-pencil"><PushPinIcon {...ink} className="text-red-ink" />remember:</p>
            <p className="font-pen text-[2rem] font-bold leading-9 text-ink">
              <Markup text={block.hook} />
            </p>
            <p className="mt-2 text-[1rem] leading-7">
              <Markup text={block.logic} />
            </p>
          </Sticky>
        </div>
      );

    case "sketch":
      return (
        <figure className="graph my-6 rounded-sm border border-rule/80 bg-[#fffdf6] p-2">
          <Sketch id={block.id} />
          <figcaption>
            <Pencil className="px-2">
              <Markup text={block.caption} />
            </Pencil>
          </figcaption>
        </figure>
      );

    case "map":
      return (
        <div className="my-6 rounded-sm border border-rule/80 bg-[#fffdf6] p-1 sm:p-2">
          <RiverMap rivers={mapRiversFor(block.focus)} focus={block.focus} trace={block.trace} zoom linkRivers labels="focus" title={block.caption} />
          <Pencil className="px-2">
            <Markup text={block.caption} />
          </Pencil>
        </div>
      );

    case "spine": {
      const r = getRiver(block.river);
      if (!r) return null;
      return (
        <div className="my-6 rounded-sm border border-rule/80 bg-[#fffdf6] p-2">
          <Spine river={r} tributaries={tributaries(r.id)} caption={block.caption} />
        </div>
      );
    }

    case "compare":
      return (
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-[1rem] leading-7">
            <caption className="mb-1 text-left font-pen text-2xl font-bold text-blue-ink">{block.title}</caption>
            <thead>
              <tr>
                {block.columns.map((c) => (
                  <th key={c} scope="col" className="border-b-2 border-ink/70 px-2 py-1 font-marker text-sm uppercase tracking-wider text-red-ink">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-dashed border-pencil/40 align-top">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-2 py-1.5 ${j === 0 ? "font-pen text-xl font-bold text-ink" : ""}`}>
                      <Markup text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "check":
      return (
        <Check
          id={block.q.id}
          prompt={<Markup text={block.q.prompt} />}
          options={block.q.options.map((o, i) => <Markup key={i} text={o} terms={false} />)}
          answer={block.q.answer}
          explain={<Markup text={block.q.explain} />}
          trap={block.q.trap ? <Markup text={block.q.trap} /> : undefined}
          source={block.q.source}
        />
      );
  }
}

export const riverCount = () => allRivers.length;
