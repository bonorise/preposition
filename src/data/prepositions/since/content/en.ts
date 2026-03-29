import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "since: from a starting point in the past up to now, or from one starting point up to another reference moment.",
  cardMeaning: "since: from a past starting point until now/then.",
  tips: [
    "Since marks the starting point, not the length of time.",
    "With time expressions, since often works with the present perfect: since 2020 / since Monday.",
    "If you only mean 'later than', use after, not since.",
  ],
  examples: [
    {
      en: "I have lived here since 2020.",
      i18n: {
        en: { translation: "I have lived here since 2020." },
        "zh-CN": { translation: "我从 2020 年起就住在这里。" },
      },
    },
    {
      en: "Nothing has changed since last week.",
      i18n: {
        en: { translation: "Nothing has changed since last week." },
        "zh-CN": { translation: "从上周到现在，什么都没变。" },
      },
    },
  ],
  examplesByCategory: {
    time: [
      {
        en: "She has felt better since Tuesday.",
        i18n: {
          en: { translation: "She has felt better since Tuesday." },
          "zh-CN": { translation: "她从周二开始就感觉好多了。" },
        },
      },
      {
        en: "Since noon, the office has been unusually quiet.",
        i18n: {
          en: { translation: "Since noon, the office has been unusually quiet." },
          "zh-CN": { translation: "从中午起，办公室就异常安静。" },
        },
      },
      {
        en: "We have had three meetings since March.",
        i18n: {
          en: { translation: "We have had three meetings since March." },
          "zh-CN": { translation: "从三月以来，我们已经开了三次会。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Since points to the beginning of a time span that continues. The main learner confusions are after (simple sequence) and from (a neutral starting point without the 'continuing until now' idea).",
    differences: [
      {
        term: "after",
        description:
          "After means later than a point or event. Since means starting at that point and continuing.",
        examples: [
          {
            term: "after",
            sentence: "We left after lunch.",
          },
          {
            term: "since",
            sentence: "We haven't eaten since lunch.",
          },
        ],
      },
      {
        term: "from",
        description:
          "From can mark a starting point in schedules, ranges, or movement. Since is more natural for a time starting point that still matters now.",
        examples: [
          {
            term: "from",
            sentence: "The store is open from 9 a.m. to 6 p.m.",
          },
          {
            term: "since",
            sentence: "The store has been open since 9 a.m.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Common starting points",
      items: [
        "since 2020",
        "since Monday",
        "since childhood",
        "since breakfast",
        "since the meeting",
        "since then",
      ],
    },
    {
      title: "Present perfect patterns",
      items: [
        "have lived here since 2020",
        "has worked there since June",
        "have known her since school",
        "has been quiet since noon",
        "have waited since 8 a.m.",
        "has improved since last month",
      ],
    },
    {
      title: "Useful sentence frames",
      items: [
        "since the beginning of the year",
        "since the project started",
        "since our last call",
        "since the accident",
        "since the rule changed",
        "since that day",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "I live here since 2020.",
      correct: "I have lived here since 2020.",
      reason:
        "Since often introduces a starting point that continues to now, so English usually uses the present perfect.",
    },
    {
      wrong: "We left since lunch.",
      correct: "We left after lunch.",
      reason:
        "Since does not simply mean 'later than'. Use after when you only want sequence.",
    },
    {
      wrong: "The shop is open since 9 to 6.",
      correct: "The shop is open from 9 to 6.",
      reason:
        "Use from ... to ... for schedule ranges. Since is for a starting point that continues.",
    },
  ],
  quiz: [
    {
      prompt: "I have known her ___ primary school.",
      options: ["since", "after", "during"],
      answer: "since",
      explanation:
        "Since introduces the starting point of a relationship that continues until now.",
    },
    {
      prompt: "We went home ___ dinner.",
      options: ["after", "since", "from"],
      answer: "after",
      explanation:
        "This sentence is only about order in time, so after is correct, not since.",
    },
    {
      prompt: "The café has been busy ___ noon.",
      options: ["since", "until", "for"],
      answer: "since",
      explanation:
        "Noon is the starting point. Since noon means from noon up to now.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of since as a preposition?",
      answer:
        "It marks the point where a time span begins. The idea is 'from that point onward'.",
    },
    {
      question: "Why do many since sentences use the present perfect?",
      answer:
        "Because the action or state began in the past and still connects to the present.",
    },
    {
      question: "What is the difference between since and after?",
      answer:
        "After only tells you what comes later. Since tells you where the time span starts and suggests continuation.",
    },
    {
      question: "What is the difference between since and from?",
      answer:
        "From is broader and can describe ranges or movement. Since is especially natural for a time starting point that continues until now or another reference moment.",
    },
    {
      question: "Can since be followed by a date or event?",
      answer:
        "Yes. You can say since 2020, since Monday, since breakfast, or since the meeting.",
    },
  ],
};

export default content;
