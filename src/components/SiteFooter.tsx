"use client";

import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function SiteFooter() {
  const { locale } = useLocale();
  const ui = getUiText(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-edge)] bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-[color:var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-[color:var(--color-ink)]">
          {ui.footerText}
        </p>
        <p>© {year} Preposition 3D</p>
      </div>
    </footer>
  );
}
