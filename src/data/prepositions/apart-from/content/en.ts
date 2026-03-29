import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "apart from: except for; aside from; and in some contexts, besides / in addition to.",
  cardMeaning: "apart from: except for / besides.",
  tips: [
    "The most common meaning is exclusion: apart from one detail, everything is fine.",
    "It can also mean 'besides / in addition to', but context needs to make that clear.",
    "The physical idea of separation can help memory, but the core page use is abstract exclusion/addition.",
  ],
  examples: [
    {
      en: "Apart from one typo, the report is ready to send.",
      i18n: {
        en: { translation: "Apart from one typo, the report is ready to send." },
        "zh-CN": { translation: "除了一个错字外，这份报告已经可以发出了。" },
      },
    },
    {
      en: "Apart from Sara, everyone agreed with the plan.",
      i18n: {
        en: { translation: "Apart from Sara, everyone agreed with the plan." },
        "zh-CN": { translation: "除了 Sara 之外，大家都同意这个计划。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "Apart from cost, the proposal has no serious weakness.",
        i18n: {
          en: { translation: "Apart from cost, the proposal has no serious weakness." },
          "zh-CN": { translation: "除了成本，这个方案没有明显短板。" },
        },
      },
      {
        en: "Apart from English, she also speaks Korean.",
        i18n: {
          en: { translation: "Apart from English, she also speaks Korean." },
          "zh-CN": { translation: "除了英语，她还会说韩语。" },
        },
      },
      {
        en: "Apart from a few delays, the event went smoothly.",
        i18n: {
          en: { translation: "Apart from a few delays, the event went smoothly." },
          "zh-CN": { translation: "除了一些延误，这次活动进行得很顺利。" },
        },
      },
    ],
    space: [
      {
        en: "The cabin stood apart from the other houses.",
        i18n: {
          en: { translation: "The cabin stood apart from the other houses." },
          "zh-CN": { translation: "那间木屋和其他房子隔开而建。" },
        },
      },
      {
        en: "Keep the chemicals apart from food.",
        i18n: {
          en: { translation: "Keep the chemicals apart from food." },
          "zh-CN": { translation: "把化学品和食物分开放。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Apart from usually excludes something from a group or situation. It is often compared with except for (close meaning) and including (the opposite direction: counting something in).",
    differences: [
      {
        term: "except for",
        description:
          "Except for is a direct exclusion marker. Apart from can exclude too, but it can also mean 'besides' in some contexts.",
        examples: [
          {
            term: "except for",
            sentence: "Except for one page, the document is complete.",
          },
          {
            term: "apart from",
            sentence: "Apart from one page, the document is complete.",
          },
        ],
      },
      {
        term: "including",
        description:
          "Including adds something into the set. Apart from usually takes something out of the set or separates it from the rest.",
        examples: [
          {
            term: "including",
            sentence: "The price includes everything, including lunch.",
          },
          {
            term: "apart from",
            sentence: "Apart from lunch, the price covers everything else.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Exclusion patterns",
      items: [
        "apart from one problem",
        "apart from that",
        "apart from the cost",
        "apart from a typo",
        "apart from me",
        "apart from a few delays",
      ],
    },
    {
      title: "Besides / in addition to",
      items: [
        "apart from English",
        "apart from work",
        "apart from the main course",
        "apart from football",
        "apart from teaching",
        "apart from her family",
      ],
    },
    {
      title: "Physical separation",
      items: [
        "stand apart from the crowd",
        "sit apart from each other",
        "keep it apart from heat",
        "apart from the main road",
        "apart from the wall",
        "grow apart from the rest",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "Apart from of the price, it is perfect.",
      correct: "Apart from the price, it is perfect.",
      reason:
        "Apart from is already a fixed preposition phrase. Do not add of after it.",
    },
    {
      wrong: "Including Sara, everyone agreed.",
      correct: "Apart from Sara, everyone agreed.",
      reason:
        "If Sara is the exception, use apart from rather than including.",
    },
    {
      wrong: "She sat apart from to me.",
      correct: "She sat apart from me.",
      reason:
        "Apart from is followed directly by a noun phrase or pronoun.",
    },
  ],
  quiz: [
    {
      prompt: "___ one small issue, the plan looks strong.",
      options: ["Apart from", "Including", "During"],
      answer: "Apart from",
      explanation:
        "The sentence excludes one issue and says everything else is fine.",
    },
    {
      prompt: "Keep the medicine ___ the food.",
      options: ["apart from", "instead of", "according to"],
      answer: "apart from",
      explanation:
        "This is about separation, so apart from is correct.",
    },
    {
      prompt: "The package includes everything, ___ the charger.",
      options: ["including", "apart from", "until"],
      answer: "including",
      explanation:
        "The charger is counted inside the set, so including is correct.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of apart from?",
      answer:
        "Usually it means except for, with the idea of separating one thing from the rest.",
    },
    {
      question: "Can apart from also mean besides?",
      answer:
        "Yes. In some contexts it means in addition to, especially when the sentence clearly adds information rather than excluding it.",
    },
    {
      question: "What is the difference between apart from and except for?",
      answer:
        "They are close in exclusion meaning, but apart from is slightly wider because it can also mean besides.",
    },
    {
      question: "Can apart from describe physical separation?",
      answer:
        "Yes. You can keep objects apart from each other or say a place stands apart from others.",
    },
    {
      question: "What is the difference between apart from and including?",
      answer:
        "Apart from usually excludes or separates. Including adds something into the group.",
    },
  ],
};

export default content;
