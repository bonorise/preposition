export function getSiteUrl() {
  const fallback = "https://prepositiondino.vercel.app";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? fallback).trim();
  const withProtocol =
    raw.startsWith("http://") || raw.startsWith("https://")
      ? raw
      : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

type HreflangOptions = {
  locales: readonly string[];
  defaultLocale: string;
  pathBuilder: (locale: string) => string;
};

export function buildHreflangLanguages({
  locales,
  defaultLocale,
  pathBuilder,
}: HreflangOptions) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    const pathLocale = locale === "zh-CN" ? "zh" : locale;
    languages[locale] = pathBuilder(pathLocale);
  }
  languages["x-default"] = pathBuilder(defaultLocale);
  return languages;
}

export function getOpenGraphLocale(locale: string) {
  if (locale === "zh-CN") return "zh_CN";
  if (locale === "en") return "en_US";
  return locale;
}
