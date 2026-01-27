import type { Metadata } from "next";

import PrepositionGallery from "@/components/PrepositionGallery";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_LOCALE, getUiText } from "@/data/i18n";
import { PREPOSITIONS } from "@/data/prepositions";
import { getThumbnailFormat } from "@/lib/thumbnail";
import { absoluteUrl, getOpenGraphLocale, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: getUiText(DEFAULT_LOCALE).metaTitle,
  description: getUiText(DEFAULT_LOCALE).metaDescription,
  keywords: ["prepositions", "3D", "English learning", "spatial learning"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: getUiText(DEFAULT_LOCALE).metaTitle,
    description: getUiText(DEFAULT_LOCALE).metaDescription,
    type: "website",
    url: "/",
    locale: getOpenGraphLocale(DEFAULT_LOCALE),
  },
  twitter: {
    card: "summary",
    title: getUiText(DEFAULT_LOCALE).metaTitle,
    description: getUiText(DEFAULT_LOCALE).metaDescription,
  },
};

export default function Home() {
  const ui = getUiText(DEFAULT_LOCALE);
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
        url: absoluteUrl(`/p/${entry.id}`),
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
      <PrepositionGallery entries={PREPOSITIONS} thumbnailFormat={thumbnailFormat} />
      <div className="mt-16">
        <FaqSection />
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </main>
  );
}
