import type { Metadata } from "next";
import { notFound } from "next/navigation";

import FaqSection from "@/components/FaqSection";
import PrepositionGallery from "@/components/PrepositionGallery";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getUiText,
  localeToPathSegment,
  pathSegmentToLocale,
} from "@/data/i18n";
import type { Locale } from "@/data/types";
import { PREPOSITIONS } from "@/data/prepositions";
import { getThumbnailFormat } from "@/lib/thumbnail";
import {
  absoluteUrl,
  buildHreflangLanguages,
  getOpenGraphLocale,
  getSiteUrl,
} from "@/lib/seo";

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
  const languages = buildHreflangLanguages({
    locales: SUPPORTED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    pathBuilder: (targetLocale) => `/${targetLocale}`,
  });
  return {
    title: ui.metaTitle,
    description: ui.metaDescription,
    keywords: ["prepositions", "3D", "English learning", "spatial learning"],
    alternates: {
      canonical: `/${localePath}`,
      languages,
    },
    openGraph: {
      title: ui.metaTitle,
      description: ui.metaDescription,
      type: "website",
      url: `/${localePath}`,
      locale: getOpenGraphLocale(locale),
    },
    twitter: {
      card: "summary",
      title: ui.metaTitle,
      description: ui.metaDescription,
    },
  };
}

export default async function LocaleHome({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.locale);
  if (!locale) {
    notFound();
  }

  const ui = getUiText(locale);
  const localePath = localeToPathSegment(locale);
  const thumbnailFormat = getThumbnailFormat(PREPOSITIONS.map((entry) => entry.id));
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ui.siteTitle,
    description: ui.metaDescription,
    url: siteUrl,
    inLanguage: ["en", "zh-CN"],
    publisher: {
      "@type": "Organization",
      name: ui.siteTitle,
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PREPOSITIONS.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/${localePath}/p/${entry.id}`),
        name: entry.word,
      })),
    },
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ui.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="relative mx-auto min-h-screen max-w-6xl px-6 pb-20 pt-12">
      <div className="pointer-events-none absolute right-6 top-12 hidden h-36 w-36 rounded-full border border-[color:var(--color-edge)] md:block" />
      <PrepositionGallery
        entries={PREPOSITIONS}
        locale={locale}
        thumbnailFormat={thumbnailFormat}
      />
      <div className="mt-16">
        <FaqSection locale={locale} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </main>
  );
}
