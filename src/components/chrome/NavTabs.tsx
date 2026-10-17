"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowsSplitIcon, BookBookmarkIcon, BookOpenTextIcon, CardsIcon, ExamIcon, MapTrifoldIcon, WavesIcon } from "@phosphor-icons/react/ssr";
import { NAV } from "@/lib/site";
import { ink } from "@/components/ink/icons";

const TAB_ICON = {
  "/learn": BookOpenTextIcon,
  "/atlas": MapTrifoldIcon,
  "/rivers": WavesIcon,
  "/pyq": ExamIcon,
  "/confusions": ArrowsSplitIcon,
  "/revise": CardsIcon,
  "/glossary": BookBookmarkIcon,
} as const;

const TAB_COLORS = ["#ffe98a", "#cfe6ff", "#d9f5c9", "#ffd3c4", "#ead6ff", "#ffe0ef", "#e6f0d0"];

/** Notebook divider tabs. */
export function NavTabs() {
  const path = usePathname();
  return (
    <nav aria-label="Main" className="-mb-px w-full max-w-full overflow-x-auto sm:w-auto">
      <ul className="flex min-w-max items-end gap-1 px-1">
        {NAV.map((n, i) => {
          const active = path === n.href || path.startsWith(n.href + "/");
          const Icon = TAB_ICON[n.href];
          return (
            <li key={n.href}>
              <Link
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-1.5 rounded-t-lg border border-b-0 border-ink/25 px-3.5 pt-1 font-pen text-[1.35rem] leading-8 transition-all ${
                  active ? "translate-y-0 pb-2 font-bold text-ink shadow-[0_-2px_6px_rgb(0_0_0/0.06)]" : "translate-y-1 pb-1 text-ink/70 hover:translate-y-0 hover:text-ink"
                }`}
                style={{ background: TAB_COLORS[i] }}
              >
                <Icon {...ink} />
                {n.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
