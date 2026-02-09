"use client";

import Link from "next/link";

import { getUiText, localeToPathSegment } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function SiteFooter() {
  const { locale } = useLocale();
  const ui = getUiText(locale);
  const localePath = localeToPathSegment(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-edge)] bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-[color:var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-[color:var(--color-ink)] md:flex-1 md:whitespace-nowrap md:pr-4">
          {ui.footerText}
        </p>
        <div className="flex flex-col gap-3 md:flex-none md:flex-row md:items-center md:gap-6">
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href={`/${localePath}/about`}
              className="font-semibold text-[color:var(--color-ink)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
            >
              {ui.footerAbout}
            </Link>
            <Link
              href={`/${localePath}/privacy`}
              className="font-semibold text-[color:var(--color-ink)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
            >
              {ui.footerPrivacy}
            </Link>
            <Link
              href={`/${localePath}/terms`}
              className="font-semibold text-[color:var(--color-ink)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
            >
              {ui.footerTerms}
            </Link>
            <Link
              href={`/${localePath}/contact`}
              className="font-semibold text-[color:var(--color-ink)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
            >
              {ui.footerContact}
            </Link>
          </nav>
          <p>© {year} Preposition Dino</p>
        </div>
      </div>
    </footer>
  );
}
