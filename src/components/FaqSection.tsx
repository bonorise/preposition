"use client";

import { useMemo, useState } from "react";

import type { Locale } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function FaqSection({ locale }: { locale?: Locale }) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const columns = useMemo(() => {
    const left: Array<{ index: number; question: string; answer: string }> = [];
    const right: Array<{ index: number; question: string; answer: string }> = [];
    ui.faqItems.forEach((item, index) => {
      const payload = { index, question: item.question, answer: item.answer };
      if (index % 2 === 0) {
        left.push(payload);
      } else {
        right.push(payload);
      }
    });
    return [left, right];
  }, [ui.faqItems]);
  const [openKey, setOpenKey] = useState("faq-0");

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
          {ui.faqSubtitle}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--color-ink)]">
          {ui.faqTitle}
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {columns.map((column, columnIndex) => (
          <div key={`faq-col-${columnIndex}`} className="space-y-3">
            {column.map((item) => {
              const itemKey = `faq-${item.index}`;
              const isOpen = openKey === itemKey;
              return (
                <article
                  key={itemKey}
                  className="rounded-[var(--radius-md)] border border-[color:var(--color-edge)] bg-white/70 shadow-[var(--shadow-soft)]"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${itemKey}-panel`}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                      onClick={() => setOpenKey(isOpen ? "" : itemKey)}
                    >
                      <span className="text-base font-semibold text-[color:var(--color-ink)]">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-xl leading-none text-[color:var(--color-muted)]"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`${itemKey}-panel`}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[color:var(--color-edge)] px-5 py-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
