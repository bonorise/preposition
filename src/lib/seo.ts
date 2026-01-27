export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";
  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    return raw;
  }
  return `https://${raw}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export function getOpenGraphLocale(locale: string) {
  if (locale === "zh-CN") return "zh_CN";
  if (locale === "en") return "en_US";
  return locale;
}
