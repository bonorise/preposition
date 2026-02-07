"use client";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionCollocationsProps = {
  entry: PrepositionEntry;
  locale?: Locale;
};

export default function PrepositionCollocations({
  entry,
  locale,
}: PrepositionCollocationsProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const collocations =
    entry.collocations?.[activeLocale] ?? entry.collocations?.["zh-CN"] ?? [];
  const collocationGroups =
    entry.collocationGroups?.[activeLocale] ??
    entry.collocationGroups?.["zh-CN"] ??
    [];
  const isEnglishLocale = activeLocale === "en";

  const parseItem = (
    item:
      | string
      | {
          phrase: string;
          meaning?: string;
        },
  ) => {
    if (typeof item === "string") {
      return { phrase: item, meaning: undefined as string | undefined };
    }
    return { phrase: item.phrase, meaning: item.meaning };
  };

  const renderCollocation = (
    item:
      | string
      | {
          phrase: string;
          meaning?: string;
        },
    key: string,
    index: number,
  ) => {
    const { phrase, meaning } = parseItem(item);
    const normalizedItem = phrase.trim();
    const lowerItem = normalizedItem.toLowerCase();
    const word = entry.word.toLowerCase();
    let head = "";
    let tail = normalizedItem;
    if (lowerItem.startsWith(`${word} `) || lowerItem === word) {
      head = normalizedItem.slice(0, word.length);
      tail = normalizedItem.slice(word.length);
    } else {
      const firstSpace = normalizedItem.indexOf(" ");
      if (firstSpace > 0) {
        head = normalizedItem.slice(0, firstSpace);
        tail = normalizedItem.slice(firstSpace);
      }
    }
    return (
      <div
        key={key}
        className={`rounded-[var(--radius-sm)] px-3 py-2 text-sm ${
          index % 2 === 0 ? "bg-slate-50/80" : "bg-white/70"
        }`}
      >
        <span className="inline-flex items-center gap-2 text-[color:var(--color-ink)]">
          <span className="h-1 w-1 rounded-full bg-slate-300/80" />
          <span className="font-semibold text-[#7c3aed]">{head}</span>
          <span className="text-[color:var(--color-ink)]">{tail}</span>
        </span>
        {!isEnglishLocale && meaning ? (
          <p className="mt-1 pl-3 text-xs text-[color:var(--color-muted)]">
            {meaning}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {ui.detailCollocationsTitle}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        {collocationGroups.length ? (
          <div className="grid gap-4 md:grid-cols-3">
            {collocationGroups.slice(0, 3).map((group, groupIndex) => (
              <div
                key={`${group.title}-${groupIndex}`}
                className="rounded-[var(--radius-md)] bg-white/75 p-3"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                  {group.title}
                </p>
                <div className="space-y-2">
                  {group.items
                    .slice(0, 6)
                    .map((item, itemIndex) =>
                      renderCollocation(
                        item,
                        `${group.title}-${itemIndex}`,
                        itemIndex,
                      ),
                    )}
                </div>
              </div>
            ))}
          </div>
        ) : collocations.length ? (
          <div className="grid gap-2 md:grid-cols-3">
            {collocations.map((item, index) =>
              renderCollocation(item, `${item}-${index}`, index),
            )}
          </div>
        ) : (
          <p className="text-sm text-[color:var(--color-muted)]">
            {ui.detailCollocationsPlaceholder}
          </p>
        )}
      </div>
    </section>
  );
}
