import type { Locale, PrepositionEntry } from "@/data/types";

import type {
  LocalizedComparison,
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
