"use client";

import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FaqSection() {
  const { locale } = useLocale();
  const ui = getUiText(locale);

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
        {ui.faqItems.map((item) => (
          <Card
            key={item.question}
            className="border border-[color:var(--color-edge)] bg-white/70 shadow-[var(--shadow-soft)]"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {item.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[color:var(--color-muted)]">
              {item.answer}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
