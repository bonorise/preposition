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
import type { LearningCategory, Locale } from "@/data/types";
import {
  PREPOSITIONS,
  getPrepositionById,
  getPrepositionIndex,
} from "@/data/prepositions";
import { getThumbnailFormat } from "@/lib/thumbnail";
import {
  absoluteUrl,
  buildHreflangLanguages,
  getOpenGraphLocale,
  getSiteUrl,
} from "@/lib/seo";
import { getPrepositionFaqItems } from "@/lib/prepositionFaq";
import {
  isDynamicPreposition,
  isSpatialPreposition,
  isTemporalPreposition,
} from "@/lib/prepositionCategory";

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

const SEO_CATEGORY_PRIORITY: LearningCategory[] = ["dynamic", "time", "space"];

const SEO_TEMPLATE: Record<
  Locale,
  Record<
    LearningCategory,
    {
      titleSuffix: string;
      ctrLead: string;
      ruleLabel: string;
      exampleLabel: string;
      actionLine: string;
    }
  >
> = {
  en: {
    space: {
      titleSuffix: "spatial preposition meaning, rules and examples",
      ctrLead: "Build location intuition fast.",
      ruleLabel: "Rule",
      exampleLabel: "Example",
      actionLine: "Learn one clear pattern in 30 seconds.",
    },
    time: {
      titleSuffix: "time preposition meaning, rules and examples",
      ctrLead: "Build time-expression accuracy fast.",
      ruleLabel: "Rule",
      exampleLabel: "Example",
      actionLine: "Learn one clear pattern in 30 seconds.",
    },
    dynamic: {
      titleSuffix: "movement preposition meaning, rules and examples",
      ctrLead: "Build motion-path intuition fast.",
      ruleLabel: "Rule",
      exampleLabel: "Example",
      actionLine: "Learn one clear pattern in 30 seconds.",
    },
  },
  "zh-CN": {
    space: {
      titleSuffix: "空间介词用法：含义、规则与例句",
      ctrLead: "快速掌握位置关系表达。",
      ruleLabel: "用法规则",
      exampleLabel: "例句",
      actionLine: "用一个清晰模式，30秒建立介词直觉。",
    },
    time: {
      titleSuffix: "时间介词用法：含义、规则与例句",
      ctrLead: "快速掌握时间表达。",
      ruleLabel: "用法规则",
      exampleLabel: "例句",
      actionLine: "用一个清晰模式，30秒建立介词直觉。",
    },
    dynamic: {
      titleSuffix: "动态介词用法：含义、规则与例句",
      ctrLead: "快速掌握运动路径表达。",
      ruleLabel: "用法规则",
      exampleLabel: "例句",
      actionLine: "用一个清晰模式，30秒建立介词直觉。",
    },
  },
};

const SEO_KEYWORDS_BY_CATEGORY: Record<
  Locale,
  Record<LearningCategory, string[]>
> = {
  en: {
    space: ["spatial preposition", "location preposition", "place preposition"],
    time: ["time preposition", "preposition of time", "time expressions"],
    dynamic: ["movement preposition", "direction preposition", "path preposition"],
  },
  "zh-CN": {
    space: ["空间介词", "位置介词", "英语方位介词"],
    time: ["时间介词", "英语时间介词", "时间表达"],
    dynamic: ["动态介词", "运动介词", "方向介词"],
  },
};

function getSeoCategories(entry: NonNullable<ReturnType<typeof getPrepositionById>>) {
  const categories: LearningCategory[] = [];
  if (isDynamicPreposition(entry)) categories.push("dynamic");
  if (isTemporalPreposition(entry)) categories.push("time");
  if (isSpatialPreposition(entry) || categories.length === 0) categories.push("space");
  return categories;
}

function getPrimarySeoCategory(categories: LearningCategory[]) {
  return (
    SEO_CATEGORY_PRIORITY.find((candidate) => categories.includes(candidate)) ?? "space"
  );
}

const PRIMARY_SEO_CATEGORY_OVERRIDE: Partial<Record<string, LearningCategory>> = {
  behind: "space",
};

function getSeoTitle({
  word,
  locale,
  category,
}: {
  word: string;
  locale: Locale;
  category: LearningCategory;
}) {
  return `${word} ${SEO_TEMPLATE[locale][category].titleSuffix} | Preposition Dino`;
}

function getSeoDescription({
  locale,
  category,
  meaning,
  tip,
  example,
}: {
  locale: Locale;
  category: LearningCategory;
  meaning: string;
  tip?: string;
  example?: string;
}) {
  const template = SEO_TEMPLATE[locale][category];
  const parts: string[] = [meaning, template.ctrLead];
  if (tip) {
    parts.push(`${template.ruleLabel}: ${tip}`);
  }
  if (example) {
    parts.push(`${template.exampleLabel}: ${example}`);
  }
  parts.push(template.actionLine);
  return parts.join(" ");
}

function getSeoKeywords({
  entry,
  locale,
  categories,
}: {
  entry: NonNullable<ReturnType<typeof getPrepositionById>>;
  locale: Locale;
  categories: LearningCategory[];
}) {
  const baseKeywords = [
    entry.word,
    ...entry.tags,
    "preposition",
    "preposition words",
    "preposition examples",
    "English learning",
    "3D",
    "meaning",
    "examples",
  ];
  const categoryKeywords = categories.flatMap(
    (category) => SEO_KEYWORDS_BY_CATEGORY[locale][category],
  );
  return Array.from(new Set([...baseKeywords, ...categoryKeywords]));
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

  const localizedContent = entry.i18n[locale] ?? entry.i18n[DEFAULT_LOCALE];
  const meaning = localizedContent?.meaning ?? entry.word;
  const seoCategories = getSeoCategories(entry);
  const primarySeoCategory =
    PRIMARY_SEO_CATEGORY_OVERRIDE[entry.id] ?? getPrimarySeoCategory(seoCategories);
  const tip = localizedContent?.tips?.[0];
  const categoryExample = entry.examplesByCategory?.[primarySeoCategory]?.[0];
  const fallbackExample = entry.examples[0];
  const example =
    locale === "en"
      ? categoryExample?.en ?? fallbackExample?.en
      : categoryExample?.i18n?.[locale]?.translation ??
        categoryExample?.en ??
        fallbackExample?.i18n?.[locale]?.translation ??
        fallbackExample?.en;
  const title = getSeoTitle({
    word: entry.word,
    locale,
    category: primarySeoCategory,
  });
  const description = getSeoDescription({
    locale,
    category: primarySeoCategory,
    meaning,
    tip,
    example,
  });
  const keywords = getSeoKeywords({
    entry,
    locale,
    categories: seoCategories,
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
    title,
    description,
    keywords,
    alternates: {
      canonical: `/${locale === "zh-CN" ? "zh" : locale}/p/${entry.id}`,
      languages,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/${locale === "zh-CN" ? "zh" : locale}/p/${entry.id}`,
      locale: getOpenGraphLocale(locale),
      images: socialImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
  const related = entry.relatedIds
    .map((id) => getPrepositionById(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const siteUrl = getSiteUrl();
  const meaning =
    entry.i18n[locale]?.meaning ??
    entry.i18n[DEFAULT_LOCALE]?.meaning ??
    entry.word;
  const faqItems = getPrepositionFaqItems(entry, locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${entry.word} | Preposition Dino`,
    description: meaning,
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
      {faqStructuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      ) : null}
    </main>
  );
}
