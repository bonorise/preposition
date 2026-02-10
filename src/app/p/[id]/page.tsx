import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PrepositionDetail from "@/components/PrepositionDetail";
import { DEFAULT_LOCALE, getUiText } from "@/data/i18n";
import {
  PREPOSITIONS,
  getPrepositionById,
  getPrepositionIndex,
  getRelatedPrepositions,
} from "@/data/prepositions";
import { getThumbnailFormat } from "@/lib/thumbnail";
import { absoluteUrl, getOpenGraphLocale, getSiteUrl } from "@/lib/seo";

type PageProps = {
  params: { id: string } | Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined } | Promise<{ [key: string]: string | string[] | undefined }>;
};

export function generateStaticParams() {
  return PREPOSITIONS.map((entry) => ({ id: entry.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const entry = getPrepositionById(resolvedParams.id);
  const ui = getUiText(DEFAULT_LOCALE);
  if (!entry) {
    return {
      title: ui.metaTitle,
      description: ui.metaDescription,
    };
  }
  const meaning = entry.i18n[DEFAULT_LOCALE]?.meaning ?? entry.word;
  const title = `${entry.word} · ${meaning} | Preposition Dino`;
  return {
    title,
    description: meaning,
    keywords: [
      entry.word,
      ...entry.tags,
      "preposition",
      "English learning",
      "3D",
    ],
    alternates: {
      canonical: `/p/${entry.id}`,
    },
    openGraph: {
      title,
      description: meaning,
      type: "article",
      url: `/p/${entry.id}`,
      locale: getOpenGraphLocale(DEFAULT_LOCALE),
    },
    twitter: {
      card: "summary",
      title,
      description: meaning,
    },
  };
}

export default async function PrepositionPage({ params, searchParams }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
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
  const next = index >= 0 && index < PREPOSITIONS.length - 1 ? PREPOSITIONS[index + 1] : undefined;
  const related = getRelatedPrepositions(entry.id);
  const siteUrl = getSiteUrl();
  const meaning = entry.i18n[DEFAULT_LOCALE]?.meaning ?? entry.word;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${entry.word} | Preposition Dino`,
    description: meaning,
    url: absoluteUrl(`/p/${entry.id}`),
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

  return (
    <main className="relative mx-auto min-h-screen max-w-6xl px-6 pb-20 pt-12">
      <PrepositionDetail
        entry={entry}
        prev={prev}
        next={next}
        related={related}
        showGroundOverride={isThumb ? false : undefined}
        thumbnailFormat={thumbnailFormat}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
