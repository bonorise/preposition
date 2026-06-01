import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "according to: in agreement with a source, rule, report, plan, or standard.",
  cardMeaning: "according to: in agreement with / as stated by.",
  tips: [
    "The core idea is agreement: the statement or action matches a source, rule, plan, or standard.",
    "Before a source, it means as stated by: according to the report / according to my doctor.",
    "Before a rule, plan, or standard, it means following it: according to policy / according to schedule.",
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
      "According to is not about the topic, not about the cause, and it is usually not your personal opinion. It simply tells you which external source, plan, rule, or standard the statement agrees with.",
    differences: [
      {
        term: "in my opinion",
        description:
          "In my opinion is for your own view. According to usually points to an external source, not your personal opinion.",
        examples: [
          {
            term: "in my opinion",
            sentence: "In my opinion, this route is better.",
          },
          {
            term: "according to",
            sentence: "According to the map, this route is shorter.",
          },
        ],
      },
      {
        term: "about",
        description:
          "About introduces the topic. According to introduces the source, basis, plan, or standard.",
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
      {
        term: "due to",
        description:
          "Due to introduces a cause or reason. According to introduces a source, rule, plan, or standard.",
        examples: [
          {
            term: "due to",
            sentence: "The delay was due to heavy traffic.",
          },
          {
            term: "according to",
            sentence: "According to the traffic report, the road is closed.",
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
      prompt: "___ the traffic report, the bridge is closed.",
      options: ["According to", "Due to", "About"],
      answer: "According to",
      explanation:
        "The traffic report is the source of the information, so according to is correct.",
    },
  ],
  faq: [
    {
      question: "What is the core idea of according to?",
      answer:
        "It means that a statement or action is in agreement with a source, rule, plan, or standard.",
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
