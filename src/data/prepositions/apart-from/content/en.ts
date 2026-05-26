import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "apart from: the core image is one item separated from a source or group. In use, it often means except for, and in some contexts besides / in addition to.",
  cardMeaning: "apart from: separated from the group; except for.",
  tips: [
    "Start with the image: one item is taken out from the main group.",
    "The most common use is exclusion: apart from one detail = except for one detail.",
    "Sometimes it adds information, close to besides / in addition to, so context matters.",
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
      "Apart from starts from separation: one item is taken out from a group, situation, or list. That can create exclusion, physical separation, or sometimes an additive meaning close to besides.",
    differences: [
      {
        term: "except for",
        description:
          "Except for is the most direct exclusion marker. Apart from can mean the same, but it keeps a wider separation image and can also be additive in some contexts.",
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
          "Including counts an item inside the set. Apart from often points the other way: it separates an item from the set or treats it as an exception.",
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
      {
        term: "besides / in addition to",
        description:
          "Besides and in addition to clearly add another item. Apart from can also add information, but beginners should check the context so they do not read an additive sentence as exclusion.",
        examples: [
          {
            term: "besides / in addition to",
            sentence: "Besides English, she speaks Korean.",
          },
          {
            term: "apart from",
            sentence: "Apart from English, she speaks Korean too.",
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
      wrong: "Apart from English, she speaks Korean. (meaning: she does not speak English)",
      correct: "Apart from English, she speaks Korean. (meaning: she speaks English and Korean)",
      reason:
        "In additive contexts, apart from can mean besides / in addition to. Do not automatically read it as exclusion.",
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
