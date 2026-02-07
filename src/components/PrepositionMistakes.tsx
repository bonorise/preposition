"use client";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionMistakesProps = {
  entry: PrepositionEntry;
  locale?: Locale;
};

export default function PrepositionMistakes({
  entry,
  locale,
}: PrepositionMistakesProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const mistakes =
    entry.commonMistakes?.[activeLocale] ??
    entry.commonMistakes?.["zh-CN"] ??
    [];
  const labels =
    activeLocale === "zh-CN"
      ? { avoid: "不建议", use: "建议", reason: "原因" }
      : { avoid: "Avoid", use: "Use", reason: "Reason" };

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {ui.detailMistakesTitle}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        {mistakes.length ? (
          <div className="space-y-3">
            {mistakes.map((item, index) => (
              <div
                key={`mistake-${entry.id}-${index}`}
                className="rounded-[var(--radius-md)] bg-white/80 p-4"
              >
                <p className="text-sm text-[color:var(--color-ink)]">
                  <span className="mr-2 rounded bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-600">
                    {labels.avoid}
                  </span>
                  {item.wrong}
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-ink)]">
                  <span className="mr-2 rounded bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                    {labels.use}
                  </span>
                  {item.correct}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  <span className="font-semibold text-[color:var(--color-ink)]">
                    {labels.reason}
                  </span>{" "}
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[color:var(--color-muted)]">
            {ui.detailMistakesPlaceholder}
          </p>
        )}
      </div>
    </section>
  );
}
