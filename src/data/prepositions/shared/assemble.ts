import type { Locale, PrepositionEntry } from "@/data/types";

import type {
  LocalizedComparison,
  LocalizedComparisonVisual,
  LocalizedPrepositionContent,
  PrepositionModule,
} from "./types";

const SUPPORTED_CONTENT_LOCALES: Locale[] = ["en", "zh-CN"];

function buildLocalizedMap<T>(
  module: PrepositionModule,
  selector: (content: LocalizedPrepositionContent) => T | undefined,
) {
  const enValue = module.content.en ? selector(module.content.en) : undefined;
  const zhValue = module.content["zh-CN"]
    ? selector(module.content["zh-CN"])
    : undefined;

  if (enValue === undefined || zhValue === undefined) {
    return undefined;
  }

  return {
    en: enValue,
    "zh-CN": zhValue,
  };
}

function buildComparison(module: PrepositionModule) {
  const i18n = buildLocalizedMap<LocalizedComparison>(
    module,
    (content) => content.comparison,
  );

  return i18n ? { i18n } : undefined;
}

function buildComparisonVisual(module: PrepositionModule) {
  const enVisual = module.content.en?.comparisonVisual;
  const zhVisual = module.content["zh-CN"]?.comparisonVisual;
  const primaryVisual = enVisual ?? zhVisual;

  if (!primaryVisual) {
    return undefined;
  }

  const itemByTerm = (
    visual: LocalizedComparisonVisual | undefined,
  ) => new Map((visual?.items ?? []).map((item) => [item.term, item]));

  const enItems = itemByTerm(enVisual);
  const zhItems = itemByTerm(zhVisual);

  return {
    type: primaryVisual.type,
    i18n: {
      en: {
        title: enVisual?.title ?? primaryVisual.title,
        caption: enVisual?.caption ?? primaryVisual.caption,
      },
      "zh-CN": {
        title: zhVisual?.title ?? primaryVisual.title,
        caption: zhVisual?.caption ?? primaryVisual.caption,
      },
    },
    items: primaryVisual.items.map((item) => ({
      term: item.term,
      xRange: item.xRange,
      yRange: item.yRange,
      marker: item.marker,
      note: {
        en: enItems.get(item.term)?.note ?? item.note,
        "zh-CN": zhItems.get(item.term)?.note ?? item.note,
      },
    })),
  } satisfies NonNullable<PrepositionEntry["comparisonVisual"]>;
}

function getPrimaryContent(module: PrepositionModule) {
  return (
    module.content.en ??
    module.content["zh-CN"] ??
    SUPPORTED_CONTENT_LOCALES.map((locale) => module.content[locale]).find(Boolean)
  );
}

export function assemblePreposition(module: PrepositionModule): PrepositionEntry {
  const primaryContent = getPrimaryContent(module);

  return {
    ...module.meta,
    ...module.scene,
    i18n: {
      en: {
        meaning: module.content.en?.meaning ?? primaryContent?.meaning ?? module.meta.word,
        cardMeaning:
          module.content.en?.cardMeaning ??
          primaryContent?.cardMeaning ??
          module.content.en?.meaning ??
          primaryContent?.meaning ??
          module.meta.word,
        tips: module.content.en?.tips,
      },
      "zh-CN": {
        meaning:
          module.content["zh-CN"]?.meaning ?? primaryContent?.meaning ?? module.meta.word,
        cardMeaning:
          module.content["zh-CN"]?.cardMeaning ??
          primaryContent?.cardMeaning ??
          module.content["zh-CN"]?.meaning ??
          primaryContent?.meaning ??
          module.meta.word,
        tips: module.content["zh-CN"]?.tips,
      },
    },
    examples: primaryContent?.examples ?? [],
    examplesByCategory: primaryContent?.examplesByCategory,
    comparison: buildComparison(module),
    comparisonVisual: buildComparisonVisual(module),
    meaningMap: buildLocalizedMap(module, (content) => content.meaningMap),
    collocations: buildLocalizedMap(module, (content) => content.collocations),
    collocationGroups: buildLocalizedMap(
      module,
      (content) => content.collocationGroups,
    ),
    commonMistakes: buildLocalizedMap(
      module,
      (content) => content.commonMistakes,
    ),
    quiz: buildLocalizedMap(module, (content) => content.quiz),
    faq: buildLocalizedMap(module, (content) => content.faq),
  };
}
