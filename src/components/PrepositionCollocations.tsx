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

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {ui.detailCollocationsTitle}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        {collocations.length ? (
          <div className="grid gap-2 md:grid-cols-3">
            {collocations.map((item, index) => {
              const normalizedItem = item.trim();
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
                  key={`${item}-${index}`}
                  className={`rounded-[var(--radius-sm)] px-3 py-2 text-sm ${
                    index % 2 === 0 ? "bg-slate-50/80" : "bg-white/70"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 text-[color:var(--color-ink)]">
                    <span className="h-1 w-1 rounded-full bg-slate-300/80" />
                    <span className="font-semibold text-[#7c3aed]">
                      {head}
                    </span>
                    <span className="text-[color:var(--color-ink)]">{tail}</span>
                  </span>
                </div>
              );
            })}
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
