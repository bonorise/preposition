import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "according to: based on a source, rule, report, plan, or someone's statement.",
  cardMeaning: "according to: based on / as stated by.",
  tips: [
    "Use according to before a source: according to the report / according to my doctor.",
    "It can also mean following a rule or plan: according to policy / according to schedule.",
    "For personal opinion, English usually prefers in my opinion, not according to me.",
  ],
  examples: [
    {
      en: "According to the map, the station is only five minutes away.",
      i18n: {
        en: { translation: "According to the map, the station is only five minutes away." },
        "zh-CN": { translation: "根据地图，车站只要走五分钟。" },
      },
    },
    {
      en: "Everything happened according to plan.",
      i18n: {
        en: { translation: "Everything happened according to plan." },
        "zh-CN": { translation: "一切都按计划进行。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "According to the doctor, he should rest for a week.",
        i18n: {
          en: { translation: "According to the doctor, he should rest for a week." },
          "zh-CN": { translation: "根据医生的说法，他应该休息一周。" },
        },
      },
      {
        en: "According to school policy, phones must stay in your bag.",
        i18n: {
          en: {
            translation:
              "According to school policy, phones must stay in your bag.",
          },
          "zh-CN": { translation: "按学校规定，手机必须放在包里。" },
        },
      },
      {
        en: "According to the forecast, rain will arrive tonight.",
        i18n: {
          en: { translation: "According to the forecast, rain will arrive tonight." },
          "zh-CN": { translation: "根据天气预报，今晚会下雨。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "According to links information or action to a source or rule. Learners often mix it with by (method/compliance) and about (topic).",
    differences: [
      {
        term: "by",
        description:
          "By often highlights method or compliance (pay by card, play by the rules). According to highlights the source or basis for a statement or arrangement.",
        examples: [
          {
            term: "by",
            sentence: "Please pay by card.",
          },
          {
            term: "according to",
            sentence: "According to the bill, service is included.",
          },
        ],
      },
      {
        term: "about",
        description:
          "About introduces a topic. According to introduces the source or rule behind a statement.",
        examples: [
          {
            term: "about",
            sentence: "This book is about climate change.",
          },
          {
            term: "according to",
            sentence: "According to this book, climate change is accelerating.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "According to a source",
      items: [
        "according to the report",
        "according to the doctor",
        "according to the news",
        "according to the map",
        "according to the survey",
        "according to the guide",
      ],
    },
    {
      title: "According to a rule or plan",
      items: [
        "according to policy",
        "according to plan",
        "according to the rules",
        "according to schedule",
        "according to tradition",
        "according to the contract",
      ],
    },
    {
      title: "Useful sentence frames",
      items: [
        "according to my notes",
        "according to the data",
        "according to local law",
        "according to your email",
        "according to the label",
        "according to her account",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "According to me, this movie is boring.",
      correct: "In my opinion, this movie is boring.",
      reason:
        "According to usually introduces an external source or rule, not your personal opinion.",
    },
    {
      wrong: "This book is according to space travel.",
      correct: "This book is about space travel.",
      reason:
        "About introduces the topic. According to introduces the source or basis.",
    },
    {
      wrong: "We arrived according to 6 p.m.",
      correct: "We arrived at 6 p.m. / We arrived according to schedule.",
      reason:
        "According to cannot simply replace a time preposition. It needs a source, rule, or plan.",
    },
  ],
  quiz: [
    {
      prompt: "___ the weather app, it will snow tonight.",
      options: ["According to", "About", "Until"],
      answer: "According to",
      explanation:
        "The weather app is the information source, so according to is correct.",
    },
    {
      prompt: "Everything went ___ plan.",
      options: ["according to", "during", "since"],
      answer: "according to",
      explanation:
        "According to plan means 'in the way the plan said it would happen'.",
    },
    {
      prompt: "___ me, the best route is the quiet one.",
      options: ["In my opinion", "According to", "During"],
      answer: "In my opinion",
      explanation:
        "For personal opinion, English normally says in my opinion, not according to me.",
    },
  ],
  faq: [
    {
      question: "What is the core idea of according to?",
      answer:
        "It points to the source, rule, or basis behind what you say.",
    },
    {
      question: "Can according to be used with people?",
      answer:
        "Yes. You can say according to my teacher, according to the doctor, or according to witnesses.",
    },
    {
      question: "Can it be used with plans or rules?",
      answer:
        "Yes. According to plan, according to policy, and according to the rules are all common.",
    },
    {
      question: "Why is according to me often avoided?",
      answer:
        "Because English normally uses according to for external sources, not for your own opinion.",
    },
    {
      question: "What is the difference between according to and about?",
      answer:
        "About tells you what the topic is. According to tells you where the information comes from or what rule it follows.",
    },
  ],
};

export default content;
