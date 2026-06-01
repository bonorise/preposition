import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "due to: because of; caused by. It links a result to the cause behind it: cause -> result.",
  cardMeaning: "due to: because of / caused by.",
  tips: [
    "Due to is usually followed by a noun phrase that names the cause: due to rain / due to a delay.",
    "It is close to because of, but due to often sounds more formal or more written, especially in notices and reports.",
    "If you need a full clause, use because: because it rained, not due to it rained.",
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
      "Due to links a result to its cause: cause -> result. The most useful contrasts are because of (similar meaning but different tone), because (full clause), and according to (source, not cause).",
    differences: [
      {
        term: "because of",
        description:
          "Because of and due to both introduce a cause. Because of is more conversational and general; due to often sounds more formal or written.",
        examples: [
          {
            term: "because of",
            sentence: "We stayed home because of the storm.",
          },
          {
            term: "due to",
            sentence: "The closure was due to the storm.",
          },
        ],
      },
      {
        term: "because",
        description:
          "Because is followed by a full clause. Due to is usually followed by a noun phrase. Do not say due to it rained; say because it rained or due to rain.",
        examples: [
          {
            term: "because",
            sentence: "The match was canceled because it rained.",
          },
          {
            term: "due to",
            sentence: "The match was canceled due to heavy rain.",
          },
        ],
      },
      {
        term: "according to",
        description:
          "According to introduces a source, rule, or basis. Due to introduces a cause. Do not use according to when you mean the reason something happened.",
        examples: [
          {
            term: "according to",
            sentence: "According to the report, sales fell in May.",
          },
          {
            term: "due to",
            sentence: "Sales fell due to low demand.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Weather and conditions",
      items: [
        "due to heavy rain",
        "due to strong winds",
        "due to bad weather",
        "due to icy roads",
        "due to poor visibility",
        "due to extreme heat",
      ],
    },
    {
      title: "Business and logistics",
      items: [
        "due to a delay",
        "due to staff shortages",
        "due to low demand",
        "due to a system error",
        "due to supply issues",
        "due to budget limits",
      ],
    },
    {
      title: "Useful sentence frames",
      items: [
        "was canceled due to",
        "changed due to",
        "slowed down due to",
        "failed due to",
        "improved due to",
        "was postponed due to",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "The match was canceled due to it rained.",
      correct: "The match was canceled because it rained. / ... due to heavy rain.",
      reason:
        "Due to is followed by a noun phrase, not a full clause.",
    },
    {
      wrong: "According to traffic, he was late.",
      correct: "He was late due to traffic.",
      reason:
        "Traffic is the cause, not a source of information, so due to is the better choice.",
    },
    {
      wrong: "The report due to lower sales.",
      correct: "The loss was due to lower sales.",
      reason:
        "Due to needs a complete structure around it. It cannot stand alone as the whole predicate here.",
    },
  ],
  quiz: [
    {
      prompt: "The flight was delayed ___ fog.",
      options: ["due to", "according to", "until"],
      answer: "due to",
      explanation:
        "Fog is the cause of the delay, so due to is correct.",
    },
    {
      prompt: "___ the memo, the office will close early.",
      options: ["According to", "Due to", "As"],
      answer: "According to",
      explanation:
        "The memo is the source of information, not the cause.",
    },
    {
      prompt: "The road was closed because it ___ .",
      options: ["rained", "due to", "according to"],
      answer: "rained",
      explanation:
        "After because it, English needs a full clause. Due to would need a noun phrase such as due to rain.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of due to?",
      answer:
        "It introduces the reason, cause, or condition behind something.",
    },
    {
      question: "Is due to the same as because of?",
      answer:
        "They are very close. Due to often sounds a little more formal or written.",
    },
    {
      question: "What should come after due to?",
      answer:
        "Usually a noun phrase: due to rain, due to a delay, due to traffic, due to policy changes.",
    },
    {
      question: "Can due to be used in everyday English?",
      answer:
        "Yes, especially in notices, reports, workplace English, and careful speech.",
    },
    {
      question: "What is the difference between due to and according to?",
      answer:
        "Due to gives the cause. According to gives the source or rule.",
    },
  ],
};

export default content;
