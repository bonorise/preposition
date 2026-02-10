"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { Locale } from "@/data/types";
import {
  SUPPORTED_LOCALES,
  getUiText,
  localeToPathSegment,
  pathSegmentToLocale,
} from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";
import DinoLogo from "@/components/DinoLogo";

export default function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const ui = getUiText(locale);
  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    const segments = pathname.split("/").filter(Boolean);
    const currentRouteLocale =
      segments.length > 0 ? pathSegmentToLocale(segments[0]) : null;
    if (currentRouteLocale && SUPPORTED_LOCALES.includes(currentRouteLocale)) {
      segments[0] = localeToPathSegment(nextLocale);
    } else {
      segments.unshift(localeToPathSegment(nextLocale));
    }
    const nextPath = `/${segments.join("/")}`;
    const query = searchParams.toString();
    router.push(query ? `${nextPath}?${query}` : nextPath);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-edge)] bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Link
            href={`/${localeToPathSegment(locale)}`}
            aria-label={ui.headerHome}
            className="shrink-0"
          >
            <DinoLogo className="h-[52px] w-[52px]" />
          </Link>
          <div className="space-y-1">
            <Link
              href={`/${localeToPathSegment(locale)}`}
              className="block font-display text-2xl font-semibold tracking-tight text-[color:var(--color-ink)]"
            >
              {ui.headerTitle}
            </Link>
            <p className="text-sm text-[color:var(--color-muted)]">
              {ui.headerSubtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="sr-only" htmlFor="locale-select">
            {ui.languageLabel}
          </label>
          <select
            id="locale-select"
            value={locale}
            onChange={(event) => handleLocaleChange(event.target.value as Locale)}
            className="h-9 rounded-md bg-transparent px-2 text-sm font-semibold text-[color:var(--color-ink)] focus-visible:outline-none"
          >
            <option value="en">EN</option>
            <option value="zh-CN">中</option>
          </select>
        </div>
      </div>
    </header>
  );
}
