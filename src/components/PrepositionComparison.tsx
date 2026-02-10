"use client";

import Link from "next/link";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText, localeToPathSegment } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";
import PrepositionDecisionTree from "@/components/PrepositionDecisionTree";

type PrepositionComparisonProps = {
  entry: PrepositionEntry;
  locale?: Locale;
};

export default function PrepositionComparison({
  entry,
  locale,
}: PrepositionComparisonProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const localePath = localeToPathSegment(activeLocale);
  const ui = getUiText(activeLocale);
  const comparison =
    entry.comparison?.i18n[activeLocale] ??
    entry.comparison?.i18n["zh-CN"];
  const toPrepositionId = (value: string) => {
    const normalized = value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return normalized.length ? normalized : null;
  };

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {ui.detailComparisonTitle}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        <div className="space-y-4">
          {comparison ? (
            <div className="space-y-4">
              <p className="text-sm text-[color:var(--color-muted)]">
                {comparison.summary}
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                {comparison.differences.map((item) => {
                  const trimmedTerm = item.term.trim();
                  const termId =
                    /^[a-z\\s-]+$/i.test(trimmedTerm) ? toPrepositionId(trimmedTerm) : null;
                  const termHref = termId ? `/${localePath}/p/${termId}` : null;

                  return (
                    <div
                      key={item.term}
                      className="rounded-[var(--radius-md)] bg-white/80 p-4"
                    >
                      <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                        {termHref ? (
                          <Link
                            href={termHref}
                            className="decoration-[color:var(--color-accent)] underline-offset-4 hover:underline"
                          >
                            {item.term}
                          </Link>
                        ) : (
                          item.term
                        )}
                      </p>
                    <p className="mt-2 text-xs text-[color:var(--color-muted)]">
                      {item.description}
                    </p>
                    {item.examples?.length ? (
                      <div className="mt-3 space-y-2 text-xs">
                        {item.examples.map((example, index) => (
                          <div
                            key={`${item.term}-${index}`}
                            className="rounded-[var(--radius-sm)] bg-slate-50/80 px-2 py-1.5"
                          >
                            <div className="flex flex-wrap items-baseline gap-2 text-[color:var(--color-ink)]">
                              <span className="font-semibold text-[#7c3aed]">
                                {example.term}
                              </span>
                              <span>{example.sentence}</span>
                            </div>
                            {example.translation ? (
                              <p className="mt-1 text-[11px] text-[color:var(--color-muted)]">
                                {example.translation}
                              </p>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-sm text-[color:var(--color-muted)]">
              {ui.detailComparisonPlaceholder}
            </p>
          )}
          <PrepositionDecisionTree entry={entry} locale={activeLocale} />
        </div>
      </div>
    </section>
  );
}
