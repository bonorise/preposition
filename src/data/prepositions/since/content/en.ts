import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "since: a starting point that can be temporal ('from that time until now/then') or logical ('because / given that').",
  cardMeaning: "since: marks a time starting point, and sometimes the reason a judgment starts from.",
  tips: [
    "The core idea of since is a starting point, not a length of time.",
    "In time expressions, since often works with the present perfect: since 2020 / since Monday.",
    "In reason clauses, since introduces the fact a judgment starts from, often with a 'because / given that' tone.",
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
    abstract: [
      {
        en: "Since you are here, let's begin with the first example.",
        i18n: {
          en: {
            translation: "Since you are here, let's begin with the first example.",
          },
          "zh-CN": { translation: "既然你已经到了，我们就从第一个例子开始吧。" },
        },
      },
      {
        en: "Since everyone agrees, we can move to the next step.",
        i18n: {
          en: {
            translation: "Since everyone agrees, we can move to the next step.",
          },
          "zh-CN": { translation: "既然大家都同意，我们就可以进入下一步了。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Since always points to a starting point. In time, it marks where a span begins and continues. In logic, it marks the fact a judgment starts from. Learners mainly confuse it with after, from, and because.",
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
      {
        term: "because",
        description:
          "Because directly answers why something happens. Since can also give a reason, but it often sounds like the speaker is starting from a fact that is already known or accepted.",
        examples: [
          {
            term: "because",
            sentence: "We stayed inside because it was raining.",
          },
          {
            term: "since",
            sentence: "Since it was raining, we stayed inside.",
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
    {
      title: "Reason / judgment starters",
      items: [
        "since you asked",
        "since everyone agrees",
        "since this is true",
        "since we are already here",
        "since the road is closed",
        "since that is the case",
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
    {
      wrong: "Since I was tired, because I went home early.",
      correct: "Since I was tired, I went home early. / Because I was tired, I went home early.",
      reason:
        "Do not stack since and because in the same clause. Choose one reason marker.",
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
    {
      prompt: "___ everyone is ready, let's start the lesson.",
      options: ["Since", "After", "During"],
      answer: "Since",
      explanation:
        "Here since means 'because / given that' and introduces the starting fact behind the decision.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of since as a preposition?",
      answer:
        "Its core meaning is a starting point. In time, that means 'from that point onward'. In logic, it can also mark the fact or reason a judgment starts from.",
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
      question: "Can since mean because?",
      answer:
        "Yes. Since can introduce a reason, especially when that reason is treated as known or already accepted: Since everyone agrees, we can move on.",
    },
    {
      question: "What is the difference between since and because?",
      answer:
        "Because directly explains why. Since also gives a reason, but it often sounds like the speaker is starting from an already known fact and drawing a conclusion from it.",
    },
    {
      question: "Why can since mean both time and reason?",
      answer:
        "Both uses share the same underlying idea: a starting point. One is a starting point in time; the other is the starting point of a thought, judgment, or decision.",
    },
    {
      question: "Can since be followed by a date or event?",
      answer:
        "Yes. You can say since 2020, since Monday, since breakfast, or since the meeting.",
    },
  ],
};

export default content;
