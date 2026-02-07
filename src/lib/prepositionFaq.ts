import type { Locale, PrepositionEntry, PrepositionFaqItem } from "@/data/types";
import {
  isDynamicPreposition,
  isTemporalPreposition,
} from "@/lib/prepositionCategory";

type FaqTextBundle = {
  meaningQ: (word: string) => string;
  usageQ: (word: string) => string;
  compareQ: (word: string, term: string) => string;
  timeUsageQ: (word: string) => string;
  mistakesQ: (word: string) => string;
  collocationsQ: (word: string) => string;
  motionQ: (word: string) => string;
  memoryQ: (word: string) => string;
  usageAnswerPrefix: string;
  rulePrefix: string;
  commonMistakePrefix: string;
  avoidPrefix: string;
  usePrefix: string;
  reasonPrefix: string;
  collocationPrefix: string;
  motionAnswer: string;
  timePositive: string;
  timeNegative: string;
  memoryAnswer: string;
};

const FAQ_TEXT: Record<Locale, FaqTextBundle> = {
  en: {
    meaningQ: (word) => `What does "${word}" mean?`,
    usageQ: (word) => `When should I use "${word}"?`,
    compareQ: (word, term) => `What is the difference between "${word}" and "${term}"?`,
    timeUsageQ: (word) => `Can "${word}" be used for time expressions?`,
    mistakesQ: (word) => `What is a common mistake when using "${word}"?`,
    collocationsQ: (word) => `What are common collocations with "${word}"?`,
    motionQ: (word) => `How does "${word}" express movement?`,
    memoryQ: (word) => `How can I remember "${word}" quickly?`,
    usageAnswerPrefix: "Use it when this relation is true:",
    rulePrefix: "Rule:",
    commonMistakePrefix: "A frequent beginner mistake is:",
    avoidPrefix: "Avoid",
    usePrefix: "Use",
    reasonPrefix: "Reason",
    collocationPrefix: "High-frequency examples:",
    motionAnswer:
      "Track the movement path first, then confirm start point, direction, and endpoint.",
    timePositive:
      "Yes. It can be used in time expressions depending on context (point, period, or range).",
    timeNegative:
      "Mostly no. This preposition is primarily spatial/dynamic; use dedicated time prepositions when needed.",
    memoryAnswer:
      "Tie it to one clear spatial image and one short sentence. Repeat both together for 30 seconds.",
  },
  "zh-CN": {
    meaningQ: (word) => `“${word}”是什么意思？`,
    usageQ: (word) => `什么时候该用“${word}”？`,
    compareQ: (word, term) => `“${word}”和“${term}”有什么区别？`,
    timeUsageQ: (word) => `“${word}”可以用于时间表达吗？`,
    mistakesQ: (word) => `使用“${word}”最常见的错误是什么？`,
    collocationsQ: (word) => `“${word}”有哪些高频搭配？`,
    motionQ: (word) => `“${word}”如何表达运动过程？`,
    memoryQ: (word) => `如何快速记住“${word}”的用法？`,
    usageAnswerPrefix: "当满足以下关系时使用它：",
    rulePrefix: "规则：",
    commonMistakePrefix: "初学者常见错误：",
    avoidPrefix: "避免",
    usePrefix: "建议",
    reasonPrefix: "原因",
    collocationPrefix: "高频搭配示例：",
    motionAnswer: "先看路径，再确认起点、方向和终点，就不容易混淆。",
    timePositive: "可以。根据语境，它可用于时间点、时间段或时间范围表达。",
    timeNegative: "通常不用于时间核心表达，它主要描述空间/运动关系。",
    memoryAnswer:
      "把它绑定成“一个空间画面 + 一个短句”，连续复述 30 秒，记忆会更稳。",
  },
};

function pickMeaning(entry: PrepositionEntry, locale: Locale) {
  return entry.i18n[locale]?.meaning ?? entry.i18n["zh-CN"]?.meaning ?? entry.word;
}

function pickTips(entry: PrepositionEntry, locale: Locale) {
  return entry.i18n[locale]?.tips ?? entry.i18n["zh-CN"]?.tips ?? [];
}

function pickExamples(entry: PrepositionEntry, locale: Locale) {
  return entry.examples.slice(0, 2).map((example) =>
    locale === "en" ? example.en : example.i18n[locale]?.translation ?? example.en,
  );
}

function pickCollocationPhrases(entry: PrepositionEntry, locale: Locale) {
  const grouped = entry.collocationGroups?.[locale] ?? entry.collocationGroups?.["zh-CN"];
  if (grouped?.length) {
    return grouped
      .flatMap((group) =>
        group.items.map((item) => (typeof item === "string" ? item : item.phrase)),
      )
      .slice(0, 6);
  }
  const plain = entry.collocations?.[locale] ?? entry.collocations?.["zh-CN"] ?? [];
  return plain.slice(0, 6);
}

function buildComparisonFaqs(entry: PrepositionEntry, locale: Locale, text: FaqTextBundle) {
  const comparison = entry.comparison?.i18n[locale] ?? entry.comparison?.i18n["zh-CN"];
  if (!comparison) return [];
  return comparison.differences.slice(0, 2).map<PrepositionFaqItem>((difference) => {
    const sample = difference.examples?.[0]?.sentence;
    const sentence = sample
      ? `${difference.description} ${text.rulePrefix} ${sample}`
      : difference.description;
    return {
      question: text.compareQ(entry.word, difference.term),
      answer: sentence,
    };
  });
}

export function getPrepositionFaqItems(
  entry: PrepositionEntry,
  locale: Locale,
): PrepositionFaqItem[] {
  const overrides = entry.faq?.[locale] ?? entry.faq?.["zh-CN"];
  if (overrides?.length) {
    return overrides.slice(0, 8);
  }

  const text = FAQ_TEXT[locale];
  const meaning = pickMeaning(entry, locale);
  const tips = pickTips(entry, locale);
  const examples = pickExamples(entry, locale);
  const collocations = pickCollocationPhrases(entry, locale);
  const mistakes =
    entry.commonMistakes?.[locale] ?? entry.commonMistakes?.["zh-CN"] ?? [];
  const faqs: PrepositionFaqItem[] = [];

  faqs.push({
    question: text.meaningQ(entry.word),
    answer: `${meaning}${tips[0] ? ` ${text.rulePrefix} ${tips[0]}` : ""}`,
  });

  faqs.push({
    question: text.usageQ(entry.word),
    answer: `${text.usageAnswerPrefix} ${
      tips.slice(0, 2).join(" ") || meaning
    }${examples[0] ? ` ${text.rulePrefix} ${examples[0]}` : ""}`,
  });

  faqs.push(...buildComparisonFaqs(entry, locale, text));

  faqs.push({
    question: text.timeUsageQ(entry.word),
    answer: isTemporalPreposition(entry) ? text.timePositive : text.timeNegative,
  });

  if (mistakes.length) {
    const first = mistakes[0];
    faqs.push({
      question: text.mistakesQ(entry.word),
      answer: `${text.commonMistakePrefix} ${text.avoidPrefix}: ${first.wrong}. ${text.usePrefix}: ${first.correct}. ${text.reasonPrefix}: ${first.reason}`,
    });
  }

  if (collocations.length) {
    faqs.push({
      question: text.collocationsQ(entry.word),
      answer: `${text.collocationPrefix} ${collocations.join(", ")}`,
    });
  }

  if (isDynamicPreposition(entry)) {
    faqs.push({
      question: text.motionQ(entry.word),
      answer: text.motionAnswer,
    });
  }

  faqs.push({
    question: text.memoryQ(entry.word),
    answer: text.memoryAnswer,
  });

  const uniqueByQuestion = Array.from(
    new Map(faqs.map((faq) => [faq.question, faq])).values(),
  );

  return uniqueByQuestion.slice(0, 8);
}
