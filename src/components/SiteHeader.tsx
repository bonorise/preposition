"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { Locale } from "@/data/types";
import { SUPPORTED_LOCALES, getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const ui = getUiText(locale);
  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    const segments = pathname.split("/").filter(Boolean);
    if (
      segments.length > 0 &&
      SUPPORTED_LOCALES.includes(segments[0] as Locale)
    ) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }
    const nextPath = `/${segments.join("/")}`;
    const query = searchParams.toString();
    router.push(query ? `${nextPath}?${query}` : nextPath);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-edge)] bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <Link
            href={`/${locale}`}
            className="font-display text-2xl font-semibold tracking-tight text-[color:var(--color-ink)]"
          >
            {ui.headerTitle}
          </Link>
          <p className="text-sm text-[color:var(--color-muted)]">
            {ui.headerSubtitle}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="sr-only" htmlFor="locale-select">
            {ui.languageLabel}
          </label>
          <select
            id="locale-select"
            value={locale}
            onChange={(event) => handleLocaleChange(event.target.value as Locale)}
            className="h-10 rounded-full border border-[color:var(--color-edge)] bg-white/80 px-4 text-sm font-semibold text-[color:var(--color-ink)] shadow-[var(--shadow-tight)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]"
          >
            <option value="en">{ui.languageEnglish}</option>
            <option value="zh-CN">{ui.languageChinese}</option>
          </select>
        </div>
      </div>
    </header>
  );
}
