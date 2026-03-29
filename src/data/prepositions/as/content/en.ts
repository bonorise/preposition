import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "as: in the role, function, identity, or use of something.",
  cardMeaning: "as: as a role / in the function of.",
  tips: [
    "This page focuses only on the preposition use of as: as a teacher / use it as a guide.",
    "As means 'in the role of' or 'with the function of', not simply 'similar to'.",
    "Do not mix this page with the conjunction as or the pattern as ... as ... .",
  ],
  examples: [
    {
      en: "She works as a designer in a small studio.",
      i18n: {
        en: { translation: "She works as a designer in a small studio." },
        "zh-CN": { translation: "她在一家小型工作室当设计师。" },
      },
    },
    {
      en: "We used a box as a temporary table.",
      i18n: {
        en: { translation: "We used a box as a temporary table." },
        "zh-CN": { translation: "我们把一个箱子当临时桌子用。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "He spoke as a parent, not as a manager.",
        i18n: {
          en: { translation: "He spoke as a parent, not as a manager." },
          "zh-CN": { translation: "他是以家长身份发言，不是以经理身份发言。" },
        },
      },
      {
        en: "Please keep this note as a reminder.",
        i18n: {
          en: { translation: "Please keep this note as a reminder." },
          "zh-CN": { translation: "请把这张纸条留作提醒。" },
        },
      },
      {
        en: "The team sees the setback as a useful lesson.",
        i18n: {
          en: { translation: "The team sees the setback as a useful lesson." },
          "zh-CN": { translation: "团队把这次挫折看作一次有用的教训。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "As is about role, identity, or function. Learners often confuse it with like (similarity) and instead of (substitution).",
    differences: [
      {
        term: "like",
        description:
          "Like means similar to. As means in the role or function of.",
        examples: [
          {
            term: "like",
            sentence: "This fabric feels like silk.",
          },
          {
            term: "as",
            sentence: "Use this fabric as a curtain.",
          },
        ],
      },
      {
        term: "instead of",
        description:
          "Instead of means one thing replaces another. As means one thing serves in a role or identity.",
        examples: [
          {
            term: "instead of",
            sentence: "Use tea instead of coffee.",
          },
          {
            term: "as",
            sentence: "Use tea as a warm welcome for guests.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Role and identity",
      items: [
        "work as a teacher",
        "serve as captain",
        "act as a guide",
        "speak as a parent",
        "see him as a friend",
        "treat it as a joke",
      ],
    },
    {
      title: "Use something as",
      items: [
        "use a box as a table",
        "use your phone as a torch",
        "use water as a coolant",
        "use the room as storage",
        "use the file as a template",
        "use the chair as a step",
      ],
    },
    {
      title: "Common sentence frames",
      items: [
        "as a student",
        "as evidence",
        "as a warning",
        "as an example",
        "as a gift",
        "as part of the plan",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "She works like a designer there.",
      correct: "She works as a designer there.",
      reason:
        "If designer is her job role, English uses as. Like would mean only 'similar to a designer'.",
    },
    {
      wrong: "We used a box instead of a table for a temporary table.",
      correct: "We used a box as a temporary table.",
      reason:
        "As highlights the function the box served. Instead of would only highlight replacement.",
    },
    {
      wrong: "As I was tired, I went home.",
      correct: "That is a conjunction use of as, not the preposition use on this page.",
      reason:
        "This page only explains the preposition meaning: role, function, or identity.",
    },
  ],
  quiz: [
    {
      prompt: "She spoke ___ the team leader.",
      options: ["as", "like", "during"],
      answer: "as",
      explanation:
        "Team leader is the role in which she spoke, so as is correct.",
    },
    {
      prompt: "This tastes ___ lemon, but it isn't lemon.",
      options: ["like", "as", "since"],
      answer: "like",
      explanation:
        "This sentence is about similarity, not role or function, so like is better than as.",
    },
    {
      prompt: "We used the spare room ___ an office.",
      options: ["as", "until", "about"],
      answer: "as",
      explanation:
        "The room served in the function of an office, so use as.",
    },
  ],
  faq: [
    {
      question: "What is the core preposition meaning of as?",
      answer:
        "It marks role, function, identity, or the way something is understood.",
    },
    {
      question: "Can as be used for jobs and roles?",
      answer:
        "Yes. Work as a teacher, serve as captain, and act as a guide are common patterns.",
    },
    {
      question: "What is the difference between as and like?",
      answer:
        "As is about role or function. Like is about similarity.",
    },
    {
      question: "Can as be used after verbs such as see or describe?",
      answer:
        "Yes. You can say see it as a chance, describe him as calm, or regard it as a risk.",
    },
    {
      question: "Why is this page not explaining as a conjunction?",
      answer:
        "Because this page is limited to the preposition use of as, which is common and easier for learners to separate clearly.",
    },
  ],
};

export default content;
