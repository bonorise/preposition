import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "during: at some point or points inside a period, event, or activity.",
  cardMeaning: "during: in the course of a period or event.",
  tips: [
    "During is followed by a noun phrase: during the meeting / during summer.",
    "It means 'inside that period', not the starting point or ending point.",
    "If you need a full clause, English usually prefers while: while I was sleeping.",
  ],
  examples: [
    {
      en: "We stayed inside during the storm.",
      i18n: {
        en: { translation: "We stayed inside during the storm." },
        "zh-CN": { translation: "暴风雨期间我们一直待在室内。" },
      },
    },
    {
      en: "No phones are allowed during the exam.",
      i18n: {
        en: { translation: "No phones are allowed during the exam." },
        "zh-CN": { translation: "考试期间不允许使用手机。" },
      },
    },
  ],
  examplesByCategory: {
    time: [
      {
        en: "She learned a lot during her internship.",
        i18n: {
          en: { translation: "She learned a lot during her internship." },
          "zh-CN": { translation: "实习期间她学到了很多。" },
        },
      },
      {
        en: "The lights went out during dinner.",
        i18n: {
          en: { translation: "The lights went out during dinner." },
          "zh-CN": { translation: "吃晚饭时停电了。" },
        },
      },
      {
        en: "Traffic is heavy during the morning rush.",
        i18n: {
          en: { translation: "Traffic is heavy during the morning rush." },
          "zh-CN": { translation: "早高峰期间交通很拥堵。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "During places something inside a time period or event. Learners often confuse it with for (length of time) and while (a clause-based connector).",
    differences: [
      {
        term: "for",
        description:
          "For focuses on duration length (for two hours). During focuses on what happened inside a named period or event.",
        examples: [
          {
            term: "for",
            sentence: "We talked for two hours.",
          },
          {
            term: "during",
            sentence: "We talked during the break.",
          },
        ],
      },
      {
        term: "while",
        description:
          "While is followed by a clause. During is followed by a noun phrase.",
        examples: [
          {
            term: "while",
            sentence: "While I was driving, it started to rain.",
          },
          {
            term: "during",
            sentence: "It started to rain during the drive.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Events and activities",
      items: [
        "during the meeting",
        "during the exam",
        "during dinner",
        "during the trip",
        "during the lesson",
        "during the interview",
      ],
    },
    {
      title: "Periods of time",
      items: [
        "during the summer",
        "during the holidays",
        "during the night",
        "during the weekend",
        "during the week",
        "during the first month",
      ],
    },
    {
      title: "Useful patterns",
      items: [
        "happened during the break",
        "changed during the process",
        "improved during treatment",
        "fell asleep during the movie",
        "spoke during the discussion",
        "was injured during training",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "I met him during two hours.",
      correct: "I met him for two hours. / I met him during the meeting.",
      reason:
        "During does not measure length by itself. It needs a named period or event.",
    },
    {
      wrong: "During I was sleeping, the phone rang.",
      correct: "While I was sleeping, the phone rang.",
      reason:
        "During is followed by a noun phrase, not a full clause.",
    },
    {
      wrong: "We stayed there during Friday to Sunday.",
      correct: "We stayed there from Friday to Sunday.",
      reason:
        "Use from ... to ... for a range with both start and end points. During is for being inside one period or event.",
    },
  ],
  quiz: [
    {
      prompt: "No talking is allowed ___ the exam.",
      options: ["during", "for", "since"],
      answer: "during",
      explanation:
        "The exam is the named event inside which the rule applies.",
    },
    {
      prompt: "We stayed in Paris ___ three days.",
      options: ["for", "during", "until"],
      answer: "for",
      explanation:
        "Three days is a duration length, so for is correct.",
    },
    {
      prompt: "___ I was cooking, the lights went out.",
      options: ["While", "During", "Until"],
      answer: "While",
      explanation:
        "A full clause follows, so while is correct. During would need a noun phrase such as during dinner.",
    },
  ],
  faq: [
    {
      question: "What is the core idea of during?",
      answer:
        "It places something inside a period, event, or activity.",
    },
    {
      question: "What comes after during?",
      answer:
        "A noun phrase: during the trip, during class, during summer, during the storm.",
    },
    {
      question: "What is the difference between during and for?",
      answer:
        "During focuses on being inside a named period. For focuses on how long something lasted.",
    },
    {
      question: "What is the difference between during and while?",
      answer:
        "During is followed by a noun phrase. While is followed by a clause.",
    },
    {
      question: "Can during be used with seasons, meals, or meetings?",
      answer:
        "Yes. These are exactly the kinds of periods and events that work well with during.",
    },
  ],
};

export default content;
