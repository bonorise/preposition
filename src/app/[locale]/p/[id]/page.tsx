import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PrepositionDetail from "@/components/PrepositionDetail";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getUiText,
  isSupportedLocale,
  localeToPathSegment,
} from "@/data/i18n";
import type { Locale } from "@/data/types";
import {
  PREPOSITIONS,
  getPrepositionById,
  getPrepositionIndex,
  getRelatedPrepositions,
} from "@/data/prepositions";
import { getThumbnailFormat } from "@/lib/thumbnail";
import {
  absoluteUrl,
  buildHreflangLanguages,
  getOpenGraphLocale,
  getSiteUrl,
} from "@/lib/seo";
import { buildResolvedPrepositionSeo } from "@/lib/prepositionSeo";
import { getPrepositionFaqItems } from "@/lib/prepositionFaq";

type PageProps = {
  params:
    | { locale: string; id: string }
    | Promise<{ locale: string; id: string }>;
  searchParams?:
    | { [key: string]: string | string[] | undefined }
    | Promise<{ [key: string]: string | string[] | undefined }>;
};

function resolveLocale(value: string): Locale | null {
  if (value === "zh") return "zh-CN";
  if (!isSupportedLocale(value)) return null;
  return value;
}

export function generateStaticParams() {
  const routeLocales = SUPPORTED_LOCALES.map((locale) =>
    locale === "zh-CN" ? "zh" : locale,
  );
  return routeLocales.flatMap((locale) =>
    PREPOSITIONS.map((entry) => ({ locale, id: entry.id })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.locale) ?? DEFAULT_LOCALE;
  const entry = getPrepositionById(resolvedParams.id);
  const ui = getUiText(locale);

  if (!entry) {
    return {
      title: ui.metaTitle,
      description: ui.metaDescription,
    };
  }

  const resolvedSeo = buildResolvedPrepositionSeo({
    entry,
    locale,
  });
  const languages = buildHreflangLanguages({
    locales: SUPPORTED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    pathBuilder: (targetLocale) => `/${targetLocale}/p/${entry.id}`,
  });
  const socialImage = [
    {
      url: absoluteUrl(`/thumbnails/${entry.id}.svg`),
      alt: `${entry.word} preposition 3D diagram`,
    },
  ];

  return {
    title: resolvedSeo.title,
    description: resolvedSeo.description,
    keywords: resolvedSeo.keywords,
    alternates: {
      canonical: `/${locale === "zh-CN" ? "zh" : locale}/p/${entry.id}`,
      languages,
    },
    openGraph: {
      title: resolvedSeo.title,
      description: resolvedSeo.description,
      type: "article",
      url: `/${locale === "zh-CN" ? "zh" : locale}/p/${entry.id}`,
      locale: getOpenGraphLocale(locale),
      images: socialImage,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedSeo.title,
      description: resolvedSeo.description,
      images: socialImage.map((image) => image.url),
    },
  };
}

export default async function LocalePrepositionPage({
  params,
  searchParams,
}: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.locale);
  if (!locale) {
    notFound();
  }
  const localePath = localeToPathSegment(locale);

  const resolvedSearch = await Promise.resolve(searchParams);
  const thumbParam = resolvedSearch?.thumb;
  const isThumb = Array.isArray(thumbParam) ? thumbParam[0] === "1" : thumbParam === "1";
  const thumbnailFormat = getThumbnailFormat(PREPOSITIONS.map((entry) => entry.id));
  const entry = getPrepositionById(resolvedParams.id);
  if (!entry) {
    notFound();
  }

  const index = getPrepositionIndex(resolvedParams.id);
  const prev = index > 0 ? PREPOSITIONS[index - 1] : undefined;
  const next =
    index >= 0 && index < PREPOSITIONS.length - 1
      ? PREPOSITIONS[index + 1]
      : undefined;
  const related = getRelatedPrepositions(entry.id);

  const siteUrl = getSiteUrl();
  const meaning =
    entry.i18n[locale]?.meaning ??
    entry.i18n[DEFAULT_LOCALE]?.meaning ??
    entry.word;
  const resolvedSeo = buildResolvedPrepositionSeo({
    entry,
    locale,
  });
  const faqItems = getPrepositionFaqItems(entry, locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${entry.word} | Preposition Dino`,
    description: resolvedSeo.description,
    url: absoluteUrl(`/${localePath}/p/${entry.id}`),
    inLanguage: ["en", "zh-CN"],
    isPartOf: {
      "@type": "WebSite",
      name: "Preposition Dino",
      url: siteUrl,
    },
    mainEntity: {
      "@type": "DefinedTerm",
      name: entry.word,
      description: meaning,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "English Prepositions",
        url: siteUrl,
      },
    },
  };
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "zh-CN" ? "首页" : "Home",
        item: absoluteUrl(`/${localePath}`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: entry.word,
        item: absoluteUrl(`/${localePath}/p/${entry.id}`),
      },
    ],
  };
  const faqStructuredData = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <main className="relative mx-auto min-h-screen max-w-6xl px-6 pb-20 pt-12">
      <PrepositionDetail
        entry={entry}
        prev={prev}
        next={next}
        related={related}
        locale={locale}
        showGroundOverride={isThumb ? false : undefined}
        thumbnailFormat={thumbnailFormat}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {faqStructuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      ) : null}
    </main>
  );
}
