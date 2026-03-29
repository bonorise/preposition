import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "instead of: in place of; as a substitute for one thing rather than another.",
  cardMeaning: "instead of: instead of / in place of.",
  tips: [
    "Use instead of when A replaces B: tea instead of coffee.",
    "Instead of is followed by a noun phrase or -ing form: instead of a car / instead of driving.",
    "If you want role or function, use as. If you want substitution, use instead of.",
  ],
  examples: [
    {
      en: "We took the train instead of driving.",
      i18n: {
        en: { translation: "We took the train instead of driving." },
        "zh-CN": { translation: "我们坐了火车，而不是自己开车。" },
      },
    },
    {
      en: "Use olive oil instead of butter in this recipe.",
      i18n: {
        en: { translation: "Use olive oil instead of butter in this recipe." },
        "zh-CN": { translation: "这个食谱里用橄榄油代替黄油。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "The team chose a short meeting instead of another email thread.",
        i18n: {
          en: {
            translation:
              "The team chose a short meeting instead of another email thread.",
          },
          "zh-CN": { translation: "团队选择开个短会，而不是再拉一串邮件讨论。" },
        },
      },
      {
        en: "She apologized instead of making excuses.",
        i18n: {
          en: { translation: "She apologized instead of making excuses." },
          "zh-CN": { translation: "她选择道歉，而不是找借口。" },
        },
      },
      {
        en: "We invested in training instead of new furniture.",
        i18n: {
          en: { translation: "We invested in training instead of new furniture." },
          "zh-CN": { translation: "我们把钱投在培训上，而不是买新家具。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Instead of is about substitution: one option replaces another. Learners often compare it with as (role/function) and without (absence, not replacement).",
    differences: [
      {
        term: "as",
        description:
          "As shows role or function. Instead of shows replacement.",
        examples: [
          {
            term: "as",
            sentence: "Use this room as an office.",
          },
          {
            term: "instead of",
            sentence: "Use this room instead of the old office.",
          },
        ],
      },
      {
        term: "without",
        description:
          "Without means not having something. Instead of means choosing one thing in place of another.",
        examples: [
          {
            term: "without",
            sentence: "He left without his umbrella.",
          },
          {
            term: "instead of",
            sentence: "He took a raincoat instead of an umbrella.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Food and everyday choices",
      items: [
        "tea instead of coffee",
        "rice instead of bread",
        "olive oil instead of butter",
        "water instead of soda",
        "fruit instead of candy",
        "walking instead of driving",
      ],
    },
    {
      title: "Work and planning",
      items: [
        "a meeting instead of emails",
        "training instead of travel",
        "a draft instead of a final version",
        "cash instead of credit",
        "notes instead of slides",
        "a short call instead of a long report",
      ],
    },
    {
      title: "Useful sentence frames",
      items: [
        "choose A instead of B",
        "do this instead of that",
        "use it instead of",
        "buy one instead of two",
        "stay home instead of going out",
        "rest instead of pushing harder",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "We went by train instead to driving.",
      correct: "We went by train instead of driving.",
      reason:
        "The fixed expression is instead of, not instead to.",
    },
    {
      wrong: "Use the box instead of a table as a table.",
      correct: "Use the box as a table. / Use the box instead of the table.",
      reason:
        "As and instead of do different jobs. As shows function; instead of shows replacement.",
    },
    {
      wrong: "He left instead of his umbrella.",
      correct: "He left without his umbrella. / He took a coat instead of his umbrella.",
      reason:
        "Instead of needs a replacement relationship, not simple absence.",
    },
  ],
  quiz: [
    {
      prompt: "We walked ___ taking a taxi.",
      options: ["instead of", "as", "during"],
      answer: "instead of",
      explanation:
        "Walking replaced the option of taking a taxi.",
    },
    {
      prompt: "Use this app ___ a notebook.",
      options: ["instead of", "like", "since"],
      answer: "instead of",
      explanation:
        "The app replaces the notebook, so instead of is correct.",
    },
    {
      prompt: "Use this notebook ___ a planner.",
      options: ["as", "instead of", "until"],
      answer: "as",
      explanation:
        "Here the notebook serves in the role of a planner, so as is better than instead of.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of instead of?",
      answer:
        "It shows that one thing is chosen, used, or done in place of another.",
    },
    {
      question: "Can instead of be followed by -ing?",
      answer:
        "Yes. Instead of driving, instead of waiting, and instead of arguing are common patterns.",
    },
    {
      question: "What is the difference between instead of and as?",
      answer:
        "Instead of is about replacement. As is about role or function.",
    },
    {
      question: "What is the difference between instead of and without?",
      answer:
        "Without means absence. Instead of means one thing takes the place of another.",
    },
    {
      question: "Is instead of always negative?",
      answer:
        "Not always. It simply marks a choice or substitution. The tone depends on context.",
    },
  ],
};

export default content;
