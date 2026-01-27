"use client";

import type { Locale, PrepositionEntry } from "@/data/types";

type PrepositionTextPanelProps = {
  entry: PrepositionEntry;
  locale: Locale;
  tipsTitle: string;
  examplesTitle: string;
};

export default function PrepositionTextPanel({
  entry,
  locale,
  tipsTitle,
  examplesTitle,
}: PrepositionTextPanelProps) {
  const text = entry.i18n[locale] ?? entry.i18n["zh-CN"];
  return (
    <div className="space-y-6">
      <div className="rounded-[var(--radius-md)] border border-[color:var(--color-edge)] bg-white/80 p-5 shadow-[var(--shadow-tight)]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {tipsTitle}
        </p>
        <p className="mt-3 text-base leading-relaxed text-[color:var(--color-ink)]">
          {text.meaning}
        </p>
        {text.tips?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
            {text.tips.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="rounded-[var(--radius-md)] border border-[color:var(--color-edge)] bg-white/80 p-5 shadow-[var(--shadow-tight)]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {examplesTitle}
        </p>
        <div className="mt-4 space-y-4">
          {entry.examples.map((example) => {
            const translation =
              example.i18n[locale]?.translation ??
              example.i18n["zh-CN"].translation;
            return (
              <div key={example.en} className="space-y-1">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {example.en}
                </p>
                <p className="text-sm text-[color:var(--color-muted)]">
                  {translation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
