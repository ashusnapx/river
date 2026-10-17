import type { Metadata } from "next";
import { SquareIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { notFound } from "next/navigation";
import { chapters, getChapter } from "@/content";
import { BlockView } from "@/components/lesson/Blocks";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { Pencil, PenTitle, Stamp } from "@/components/ink/Pen";

export const dynamicParams = false;

export function generateStaticParams() {
  return chapters.map((c) => ({ chapter: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ chapter: string }> }): Promise<Metadata> {
  const c = getChapter((await params).chapter);
  if (!c) return {};
  const title = `${String(c.number).padStart(2, "0")} · ${c.title}`;
  const images = [{ url: `/og/chapter-${c.id}.png`, width: 1200, height: 630, alt: c.title }];
  return { title, description: c.subtitle, openGraph: { title, description: c.subtitle, images }, twitter: { card: "summary_large_image", title, description: c.subtitle, images: images.map((i) => i.url) } };
}

export default async function ChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const c = getChapter((await params).chapter);
  if (!c) notFound();
  const idx = chapters.findIndex((x) => x.id === c.id);
  const next = chapters[idx + 1];

  return (
    <div className="ruled min-h-screen">
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:pl-[4.5rem]">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <Stamp seed={c.id}>chapter {String(c.number).padStart(2, "0")}</Stamp>
            <span className="font-pen text-xl text-pencil">{c.minutes} min · {c.steps.length} steps</span>
          </div>
          <PenTitle seed={c.id + "t"} as="h1" className="mt-3 text-[2.7rem] font-bold sm:text-[3.4rem]">
            {c.title}
          </PenTitle>
          {c.hindiTitle && <p className="font-hand text-2xl text-red-ink">{c.hindiTitle}</p>}
          <p className="mt-2 text-[1.15rem] leading-8 text-ink/85">{c.subtitle}</p>
          {c.outcomes.length > 0 && (
            <div className="mt-4">
              <Pencil>after this chapter you can…</Pencil>
              <ul className="mt-1 space-y-0.5">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex gap-2 leading-8">
                    <SquareIcon {...ink} className="mt-1.5 shrink-0 text-green-ink" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        <LessonPlayer
          chapterId={c.id}
          next={next ? { href: `/learn/${next.id}`, title: next.title } : undefined}
          steps={c.steps.map((s) => ({
            id: s.id,
            title: s.title,
            content: (
              <>
                {s.blocks.map((b, i) => (
                  <BlockView key={i} block={b} seed={`${c.id}-${s.id}-${i}`} />
                ))}
              </>
            ),
          }))}
        />
      </article>
    </div>
  );
}
