export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export function getOpenGraphLocale(locale: string) {
  if (locale === "zh-CN") return "zh_CN";
  if (locale === "en") return "en_US";
  return locale;
}
