import type { Metadata } from "next";
import { notFound } from "next/navigation";

import StaticPage from "@/components/StaticPage";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getUiText,
  localeToPathSegment,
  pathSegmentToLocale,
} from "@/data/i18n";
import { getStaticPageContent } from "@/data/staticPages";
import type { Locale } from "@/data/types";
import { buildHreflangLanguages, getOpenGraphLocale } from "@/lib/seo";

type PageProps = {
  params: { locale: string } | Promise<{ locale: string }>;
};

function resolveLocale(value: string): Locale | null {
  return pathSegmentToLocale(value);
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale: localeToPathSegment(locale),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.locale) ?? DEFAULT_LOCALE;
  const ui = getUiText(locale);
  const localePath = localeToPathSegment(locale);
  const content = getStaticPageContent(locale, "contact");
  const languages = buildHreflangLanguages({
    locales: SUPPORTED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    pathBuilder: (targetLocale) => `/${targetLocale}/contact`,
  });
  const title = `${content.title} | ${ui.siteTitle}`;

  return {
    title,
    description: content.description,
    alternates: {
      canonical: `/${localePath}/contact`,
      languages,
    },
    openGraph: {
      title,
      description: content.description,
      type: "website",
      url: `/${localePath}/contact`,
      locale: getOpenGraphLocale(locale),
    },
    twitter: {
      card: "summary",
      title,
      description: content.description,
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.locale);
  if (!locale) {
    notFound();
  }

  const content = getStaticPageContent(locale, "contact");
  return <StaticPage locale={locale} content={content} />;
}

