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
  getRelatedPrepositions,
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

const SEO_METADATA_OVERRIDES: Partial<
  Record<string, Partial<Record<Locale, Pick<Metadata, "title" | "description">>>>
> = {
  "in-back-of": {
    en: {
      title: "in back of vs behind: meaning & examples | Preposition Dino",
      description:
        "in back of is informal AmE for behind (physical location). For figurative/formal uses, use behind. Not the same as in the back of (= inside). Example: The garage is in back of the house.",
    },
    "zh-CN": {
      title: "in back of：美式口语“在后面”（vs behind） | Preposition Dino",
      description:
        "in back of 表示“在……后面”（美式口语，≈ behind）。正式/书面与抽象义用 behind。不要和 in the back of（在……里面靠后）混淆。例句：The garage is in back of the house.",
    },
  },
  between: {
    en: {
      title: "between preposition: meaning & examples | Preposition Dino",
      description:
        "between links two endpoints (A and B) in space or time. Pattern: between A and B (not between A to B). Example: Call me between 7 and 9 p.m.",
    },
    "zh-CN": {
      title: "between 介词用法：含义与例句 | Preposition Dino",
      description:
        "between 表示“两端点之间”的关系（空间/时间）。固定搭配：between A and B（不是 between A to B）。例句：Call me between 7 and 9 p.m.",
    },
  },
  upon: {
    en: {
      title: "upon: meaning & examples (upon vs on) | Preposition Dino",
      description:
        'upon is a formal version of on for surface contact. Use upon + noun/gerund for "when/as soon as" (upon arrival). In daily speech, prefer on/when.',
    },
    "zh-CN": {
      title: "upon 介词用法：含义与例句（更正式的 on） | Preposition Dino",
      description:
        "upon 是较正式的 on（接触表面）。常见结构：upon + 名词/动名词，表示“在……时/一……就”（upon arrival / upon arriving）。口语多用 on/when。",
    },
  },
  outside: {
    en: {
      title: "outside vs out of: meaning & examples | Preposition Dino",
      description:
        "outside is a location preposition: not inside a boundary (outside the house). For leaving/movement, use out of (go out of the room). Don't confuse it with without (lacking).",
    },
    "zh-CN": {
      title: "outside 介词：含义与例句（对比 out of） | Preposition Dino",
      description:
        "outside 表示位置：在边界/房间/建筑外（outside the house）。若强调从里到外的动作，用 out of（go out of the room）。不要和 without（缺少/没带）混淆。",
    },
  },
  beyond: {
    en: {
      title: "beyond: meaning & examples (vs past, over) | Preposition Dino",
      description:
        'beyond means "farther than a point" or "outside a limit" (beyond the river, beyond our budget). Use past for passing a point, and over for numbers (over 100).',
    },
    "zh-CN": {
      title: "beyond 介词用法：含义与例句（对比 past/over） | Preposition Dino",
      description:
        "beyond 表示“在更远那边/超出界限”（beyond the river, beyond our budget）。past 更像“走过某点”，over 常用于数量“超过”（over 100）。",
    },
  },
  across: {
    en: {
      title: "across vs through: meaning & examples | Preposition Dino",
      description:
        'across means "from one side to the other" (across the street). through goes inside a space/passage (through the tunnel). Example: She ran across the street.',
    },
    "zh-CN": {
      title: "across 介词用法：含义与例句（对比 through） | Preposition Dino",
      description:
        "across 表示“到对面/横穿”（across the street）；through 表示“穿过内部/通道”（through the tunnel）。例句：She ran across the street.",
    },
  },
  through: {
    en: {
      title: "through vs across: meaning & examples | Preposition Dino",
      description:
        'through means passing inside a space/passage (through the tunnel). across crosses an area/surface (across the street). Example: The train went through the tunnel.',
    },
    "zh-CN": {
      title: "through 介词用法：含义与例句（对比 across） | Preposition Dino",
      description:
        "through 表示“穿过内部/通道”（through the tunnel）；across 表示“跨越表面/区域到另一侧”（across the street）。例句：The train went through the tunnel.",
    },
  },
  opposite: {
    en: {
      title: "opposite vs across from: meaning & examples | Preposition Dino",
      description:
        'opposite means directly facing on the other side (sit opposite me, the cafe is opposite the school). across from is very close in meaning and common in American English. Don\'t confuse opposite with in front of.',
    },
    "zh-CN": {
      title: "opposite 介词用法：含义与例句（对比 across from） | Preposition Dino",
      description:
        "opposite 表示“在对面/正对（面对面）”：sit opposite me / The cafe is opposite the school。across from 多数情况下近似（美式更常见）。不要把 opposite 和 in front of（同侧前方）混淆。",
    },
  },
  past: {
    en: {
      title: "past vs to (clock time): meaning & examples | Preposition Dino",
      description:
        'past means passing a point and going beyond it (walk past the school). In time it can mean later than a time (It\'s past 3 o\'clock) and clock reading (ten past six). Contrast: ten past six vs ten to six.',
    },
    "zh-CN": {
      title: "past 介词用法：含义与例句（对比 to） | Preposition Dino",
      description:
        "past 的核心画面是“经过某点继续往前”：walk past the school。时间里可表示“超过某时间点”（It's past 3 o'clock）以及钟表读法（ten past six）。对比：ten past six（过六点十分）vs ten to six（差十分到六点）。",
    },
  },
  "far-from": {
    en: {
      title: "far from vs near: meaning & examples | Preposition Dino",
      description:
        'far from means a long distance away (far from home, far from here). Contrast: near/close to for short distance. Also common: "far from perfect" = not at all perfect.',
    },
    "zh-CN": {
      title: "far from 介词用法：含义与例句（对比 near） | Preposition Dino",
      description:
        "far from 表示“离……很远”：far from home / far from here。对比 near/close to 表示近。常见固定表达：far from perfect = 远非完美/一点也不完美。",
    },
  },
  against: {
    en: {
      title: "against vs on: meaning & examples | Preposition Dino",
      description:
        'against means touching with pressure/support (against the wall). on is on top of a surface (on the table). Example: The ladder is against the wall.',
    },
    "zh-CN": {
      title: "against 介词用法：含义与例句（对比 on） | Preposition Dino",
      description:
        "against 表示“贴着/靠着”（against the wall）；on 表示“在表面上方并接触”（on the table）。例句：The ladder is against the wall.",
    },
  },
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
  const overrides = SEO_METADATA_OVERRIDES[entry.id]?.[locale];
  const resolvedTitle = overrides?.title ?? title;
  const resolvedDescription = overrides?.description ?? description;
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
    title: resolvedTitle,
    description: resolvedDescription,
    keywords,
    alternates: {
      canonical: `/${locale === "zh-CN" ? "zh" : locale}/p/${entry.id}`,
      languages,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      type: "article",
      url: `/${locale === "zh-CN" ? "zh" : locale}/p/${entry.id}`,
      locale: getOpenGraphLocale(locale),
      images: socialImage,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
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
