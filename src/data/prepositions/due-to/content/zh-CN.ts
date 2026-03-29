import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "due to：由于、因为、由……造成。",
  cardMeaning: "due to：由于…… / 因为……。",
  tips: [
    "due to 后面通常接名词词组：due to rain / due to a delay。",
    "它的语气常比 because of 稍正式一些。",
    "如果后面要接完整从句，英语更常改用 because：because it rained。",
  ],
  examples: [
    {
      en: "The game was canceled due to heavy rain.",
      i18n: {
        en: { translation: "The game was canceled due to heavy rain." },
        "zh-CN": { translation: "比赛因大雨取消了。" },
      },
    },
    {
      en: "His delay was due to a traffic accident.",
      i18n: {
        en: { translation: "His delay was due to a traffic accident." },
        "zh-CN": { translation: "他的迟到是因为一起交通事故。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "The change is due to safety concerns.",
        i18n: {
          en: { translation: "The change is due to safety concerns." },
          "zh-CN": { translation: "这次变更是出于安全方面的担忧。" },
        },
      },
      {
        en: "Production slowed down due to a parts shortage.",
        i18n: {
          en: { translation: "Production slowed down due to a parts shortage." },
          "zh-CN": { translation: "由于零件短缺，生产放慢了。" },
        },
      },
      {
        en: "The delay was due to bad weather, not poor planning.",
        i18n: {
          en: { translation: "The delay was due to bad weather, not poor planning." },
          "zh-CN": { translation: "这次延误是因为天气不好，不是因为规划差。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "due to 用来引出原因或成因。最常见的对比是 because of（意思接近）和 according to（来源，不是原因）。",
    differences: [
      {
        term: "because of",
        description: "because of 和 due to 很接近；due to 往往更正式、更书面。",
        examples: [
          {
            term: "because of",
            sentence: "We stayed home because of the storm.",
            translation: "因为暴风雨，我们待在家里。"
          },
          {
            term: "due to",
            sentence: "The closure was due to the storm.",
            translation: "这次关闭是由于暴风雨。"
          }
        ]
      },
      {
        term: "according to",
        description: "according to 引出“根据谁/根据什么”；due to 引出“因为什么”。",
        examples: [
          {
            term: "according to",
            sentence: "According to the report, sales fell in May.",
            translation: "根据报告，五月销量下降了。"
          },
          {
            term: "due to",
            sentence: "Sales fell due to low demand.",
            translation: "销量下降是因为需求低。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "天气/条件类",
      items: [
        { phrase: "due to heavy rain", meaning: "由于大雨" },
        { phrase: "due to strong winds", meaning: "由于大风" },
        { phrase: "due to bad weather", meaning: "由于天气不好" },
        { phrase: "due to icy roads", meaning: "由于道路结冰" },
        { phrase: "due to poor visibility", meaning: "由于能见度差" },
        { phrase: "due to extreme heat", meaning: "由于酷热" }
      ]
    },
    {
      title: "工作/运营类",
      items: [
        { phrase: "due to a delay", meaning: "由于延误" },
        { phrase: "due to staff shortages", meaning: "由于人手不足" },
        { phrase: "due to low demand", meaning: "由于需求不足" },
        { phrase: "due to a system error", meaning: "由于系统错误" },
        { phrase: "due to supply issues", meaning: "由于供应问题" },
        { phrase: "due to budget limits", meaning: "由于预算限制" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "was canceled due to", meaning: "因……被取消" },
        { phrase: "changed due to", meaning: "因……发生变化" },
        { phrase: "slowed down due to", meaning: "因……放慢" },
        { phrase: "failed due to", meaning: "因……失败" },
        { phrase: "improved due to", meaning: "因……改善" },
        { phrase: "was postponed due to", meaning: "因……被推迟" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "The match was canceled due to it rained.",
      correct: "The match was canceled because it rained. / ... due to heavy rain.",
      reason: "due to 后面要接名词词组，不能直接接完整从句。"
    },
    {
      wrong: "According to traffic, he was late.",
      correct: "He was late due to traffic.",
      reason: "traffic 是迟到原因，不是信息来源，所以更自然的是 due to。"
    },
    {
      wrong: "The report due to lower sales.",
      correct: "The loss was due to lower sales.",
      reason: "due to 需要放在完整句子结构里，不能单独撑起整个谓语。"
    }
  ],
  quiz: [
    {
      prompt: "The flight was delayed ___ fog.",
      options: ["due to", "according to", "until"],
      answer: "due to",
      explanation: "fog 是航班延误的原因，所以要用 due to。"
    },
    {
      prompt: "___ the memo, the office will close early.",
      options: ["According to", "Due to", "As"],
      answer: "According to",
      explanation: "memo 是信息来源，不是原因，所以这里用 according to。"
    },
    {
      prompt: "The road was closed because it ___ .",
      options: ["rained", "due to", "according to"],
      answer: "rained",
      explanation: "because it 后面要接完整从句；如果用 due to，则要改成 due to rain。"
    }
  ],
  faq: [
    {
      question: "due to 的核心意思是什么？",
      answer: "它把某件事和背后的原因、成因或条件连接起来。"
    },
    {
      question: "due to 和 because of 一样吗？",
      answer: "两者很接近，只是 due to 往往更正式一些。"
    },
    {
      question: "due to 后面应该接什么？",
      answer: "通常接名词词组，如 due to rain、due to a delay、due to traffic。"
    },
    {
      question: "due to 能用于日常英语吗？",
      answer: "可以，尤其常见于通知、工作英语、报告和较正式的表达。"
    },
    {
      question: "due to 和 according to 的区别是什么？",
      answer: "due to 说的是原因；according to 说的是根据谁/根据什么。"
    }
  ]
};

export default content;
