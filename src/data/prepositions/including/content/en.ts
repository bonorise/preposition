import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "including: counting something as part of a whole; with ... included in the set.",
  cardMeaning: "including: including / counted inside.",
  tips: [
    "Including adds an item into a group: five people, including me.",
    "It often comes before an example, member, or extra item inside a total set.",
    "If you want to exclude something from the set, use apart from or except for instead.",
  ],
  examples: [
    {
      en: "The fee covers everything, including lunch.",
      i18n: {
        en: { translation: "The fee covers everything, including lunch." },
        "zh-CN": { translation: "这笔费用包含所有项目，包括午餐。" },
      },
    },
    {
      en: "Three students, including Leo, stayed after class.",
      i18n: {
        en: { translation: "Three students, including Leo, stayed after class." },
        "zh-CN": { translation: "包括 Leo 在内的三名学生课后留了下来。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "The update affects several teams, including customer support.",
        i18n: {
          en: {
            translation:
              "The update affects several teams, including customer support.",
          },
          "zh-CN": { translation: "这次更新影响多个团队，包括客服团队。" },
        },
      },
      {
        en: "We packed the basics, including medicine and snacks.",
        i18n: {
          en: { translation: "We packed the basics, including medicine and snacks." },
          "zh-CN": { translation: "我们带上了基本用品，包括药和零食。" },
        },
      },
      {
        en: "Several cities, including ours, will host the event.",
        i18n: {
          en: { translation: "Several cities, including ours, will host the event." },
          "zh-CN": { translation: "包括我们城市在内的几个城市都会举办这项活动。" },
        },
      },
    ],
    space: [
      {
        en: "Everyone in the circle, including Mia, stepped forward.",
        i18n: {
          en: {
            translation:
              "Everyone in the circle, including Mia, stepped forward.",
          },
          "zh-CN": { translation: "圆圈里的每个人，包括 Mia，都向前迈了一步。" },
        },
      },
      {
        en: "The route crosses five towns, including ours.",
        i18n: {
          en: { translation: "The route crosses five towns, including ours." },
          "zh-CN": { translation: "这条路线会经过五个小镇，包括我们这个。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Including brings an item into the group or list. It is often contrasted with apart from (excluding) and among (inside a group, but not necessarily highlighting membership in a list).",
    differences: [
      {
        term: "apart from",
        description:
          "Apart from usually excludes or separates something. Including explicitly counts it inside the set.",
        examples: [
          {
            term: "apart from",
            sentence: "Apart from lunch, the price covers everything.",
          },
          {
            term: "including",
            sentence: "The price covers everything, including lunch.",
          },
        ],
      },
      {
        term: "among",
        description:
          "Among places something in the middle of a group. Including names a member as part of the set.",
        examples: [
          {
            term: "among",
            sentence: "She felt calm among friends.",
          },
          {
            term: "including",
            sentence: "Everyone came, including her closest friends.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Including an example or member",
      items: [
        "including me",
        "including lunch",
        "including tax",
        "including children",
        "including this point",
        "including the final chapter",
      ],
    },
    {
      title: "Lists and totals",
      items: [
        "five people including Leo",
        "all costs including delivery",
        "three teams including ours",
        "several topics including safety",
        "four countries including Japan",
        "many tools including this app",
      ],
    },
    {
      title: "Useful sentence frames",
      items: [
        "covers everything including",
        "affects several groups including",
        "packed the essentials including",
        "invited everyone including",
        "mentions many cases including",
        "offers services including",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "Apart from lunch, the fee covers lunch too.",
      correct: "The fee covers everything, including lunch.",
      reason:
        "If lunch is inside the set, use including, not apart from.",
    },
    {
      wrong: "Including of tax, the total is 40 dollars.",
      correct: "Including tax, the total is 40 dollars.",
      reason:
        "Including does not need of after it.",
    },
    {
      wrong: "She is including the group.",
      correct: "She is among the group. / She is included in the group.",
      reason:
        "Including is a preposition here; it does not work like a location preposition meaning 'inside a group'.",
    },
  ],
  quiz: [
    {
      prompt: "The price includes everything, ___ delivery.",
      options: ["including", "apart from", "during"],
      answer: "including",
      explanation:
        "Delivery is counted inside the total set, so including is correct.",
    },
    {
      prompt: "___ one final detail, the document is complete.",
      options: ["Apart from", "Including", "Via"],
      answer: "Apart from",
      explanation:
        "The sentence excludes one detail, so apart from is correct.",
    },
    {
      prompt: "Everyone came, ___ Maya and Ken.",
      options: ["including", "until", "as"],
      answer: "including",
      explanation:
        "Maya and Ken are named as members inside the whole group.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of including?",
      answer:
        "It names something as part of a larger whole, list, or total.",
    },
    {
      question: "Can including be used with people?",
      answer:
        "Yes. You can say five students, including Leo or everyone, including the manager.",
    },
    {
      question: "Can including be used with money or totals?",
      answer:
        "Yes. Including tax, including delivery, and including lunch are all common.",
    },
    {
      question: "What is the difference between including and apart from?",
      answer:
        "Including adds something into the set. Apart from usually removes or separates something from the set.",
    },
    {
      question: "What is the difference between including and among?",
      answer:
        "Including highlights membership in a list or whole. Among places something inside a group or environment.",
    },
  ],
};

export default content;
