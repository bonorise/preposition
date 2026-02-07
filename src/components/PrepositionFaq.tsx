"use client";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";
import { getPrepositionFaqItems } from "@/lib/prepositionFaq";

type PrepositionFaqProps = {
  entry: PrepositionEntry;
  locale?: Locale;
};

export default function PrepositionFaq({ entry, locale }: PrepositionFaqProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const faqItems = getPrepositionFaqItems(entry, activeLocale);

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {ui.detailFaqTitle}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        {faqItems.length ? (
          <div className="divide-y divide-[color:var(--color-edge)]/70">
            {faqItems.map((item, index) => (
              <details key={`${entry.id}-faq-${index}`} className="group py-3" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-sm font-semibold text-[color:var(--color-ink)]">
                    {item.question}
                  </span>
                  <span className="text-[color:var(--color-muted)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[color:var(--color-muted)]">
            {ui.detailFaqPlaceholder}
          </p>
        )}
      </div>
    </section>
  );
}
