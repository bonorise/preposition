"use client";

import type { Locale, PrepositionEntry } from "@/data/types";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionMeaningMapProps = {
  entry: PrepositionEntry;
  locale?: Locale;
};

export default function PrepositionMeaningMap({
  entry,
  locale,
}: PrepositionMeaningMapProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const meaningMap =
    entry.meaningMap?.[activeLocale] ?? entry.meaningMap?.["zh-CN"];

  if (!meaningMap) {
    return null;
  }

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {meaningMap.title}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            {meaningMap.intro}
          </p>
          <div className="rounded-[var(--radius-md)] bg-slate-50/80 p-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
              {meaningMap.coreLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink)]">
              {meaningMap.coreMeaning}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {meaningMap.branches.map((branch) => (
              <div
                key={branch.label}
                className="rounded-[var(--radius-md)] bg-white/80 p-4"
              >
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {branch.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  {branch.description}
                </p>
                {branch.examples?.length ? (
                  <ul className="mt-3 space-y-1 text-xs text-[color:var(--color-ink)]">
                    {branch.examples.map((example) => (
                      <li key={example} className="rounded-[var(--radius-sm)] bg-slate-50/70 px-2 py-1.5">
                        {example}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
          {meaningMap.note ? (
            <p className="text-xs leading-relaxed text-[color:var(--color-muted)]">
              {meaningMap.note}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
