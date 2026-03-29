import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "until: up to a boundary point in time, with the action or state continuing before that point and stopping or changing there.",
  cardMeaning: "until: continue up to a time boundary.",
  tips: [
    "Until marks the end point of a period: wait until Friday / open until 9 p.m.",
    "Use until when something continues before the boundary. Use by for deadlines.",
    "Until is followed by a time or event. After the boundary, English usually switches to after.",
  ],
  examples: [
    {
      en: "The library stays open until 9 p.m.",
      i18n: {
        en: { translation: "The library stays open until 9 p.m." },
        "zh-CN": { translation: "图书馆一直开到晚上九点。" },
      },
    },
    {
      en: "Wait here until the bus arrives.",
      i18n: {
        en: { translation: "Wait here until the bus arrives." },
        "zh-CN": { translation: "在这里等到公交车到来。" },
      },
    },
  ],
  examplesByCategory: {
    time: [
      {
        en: "I worked until midnight last night.",
        i18n: {
          en: { translation: "I worked until midnight last night." },
          "zh-CN": { translation: "昨晚我一直工作到午夜。" },
        },
      },
      {
        en: "Stay online until I call you.",
        i18n: {
          en: { translation: "Stay online until I call you." },
          "zh-CN": { translation: "一直在线，等我打给你。" },
        },
      },
      {
        en: "The sale runs until the end of June.",
        i18n: {
          en: { translation: "The sale runs until the end of June." },
          "zh-CN": { translation: "促销会持续到六月底。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Until focuses on the boundary where something continues up to a point. The biggest confusions are by (deadline before a point) and to (range endpoint without the 'continue before that point' meaning).",
    differences: [
      {
        term: "by",
        description:
          "By means no later than a deadline. Until means the situation continues up to that point.",
        examples: [
          {
            term: "by",
            sentence: "Finish the report by Friday.",
          },
          {
            term: "until",
            sentence: "Keep working on the report until Friday.",
          },
        ],
      },
      {
        term: "to",
        description:
          "To often marks an endpoint in ranges such as from 9 to 5. Until sounds more natural when you describe continuing action or waiting.",
        examples: [
          {
            term: "to",
            sentence: "The office is open from 9 to 5.",
          },
          {
            term: "until",
            sentence: "Stay here until 5.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Time boundaries",
      items: [
        "until tomorrow",
        "until Friday",
        "until midnight",
        "until the end of June",
        "until lunchtime",
        "until then",
      ],
    },
    {
      title: "Continue or wait until",
      items: [
        "stay until the end",
        "wait until the bus arrives",
        "keep reading until bedtime",
        "work until midnight",
        "sleep until noon",
        "talk until dawn",
      ],
    },
    {
      title: "Useful instructions",
      items: [
        "hold this until I return",
        "leave it there until Monday",
        "don't open it until later",
        "keep the receipt until next month",
        "save the file until we decide",
        "remain seated until the doors open",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "Finish it until Friday.",
      correct: "Finish it by Friday.",
      reason:
        "Finish is a deadline target. By Friday means no later than Friday. Until Friday suggests continuous action before that point.",
    },
    {
      wrong: "The shop is open until 9 to 5.",
      correct: "The shop is open from 9 to 5.",
      reason:
        "Use from ... to ... for schedule ranges. Until works better with one boundary point.",
    },
    {
      wrong: "I will wait by you call.",
      correct: "I will wait until you call.",
      reason:
        "Until can introduce the event that ends the waiting period.",
    },
  ],
  quiz: [
    {
      prompt: "Please wait here ___ I come back.",
      options: ["until", "by", "since"],
      answer: "until",
      explanation:
        "The waiting continues before the return, so until is correct.",
    },
    {
      prompt: "Submit the form ___ Friday.",
      options: ["by", "until", "during"],
      answer: "by",
      explanation:
        "This is a deadline, not a continuing action, so by is better than until.",
    },
    {
      prompt: "The café stays open ___ 11 p.m.",
      options: ["until", "from", "after"],
      answer: "until",
      explanation:
        "Until marks the closing boundary in time.",
    },
  ],
  faq: [
    {
      question: "What is the core idea of until?",
      answer:
        "Something continues before a boundary point and stops or changes at that point.",
    },
    {
      question: "What is the difference between until and by?",
      answer:
        "Until is about continuing up to a boundary. By is about finishing no later than that boundary.",
    },
    {
      question: "Can until be followed by an event?",
      answer:
        "Yes. You can say until the bus arrives, until I call you, or until the rain stops.",
    },
    {
      question: "When should I use from ... to ... instead of until?",
      answer:
        "Use from ... to ... for neutral ranges such as opening hours. Use until when you want the idea of waiting, staying, or continuing before the endpoint.",
    },
    {
      question: "Does until only work with clock times?",
      answer:
        "No. It can be followed by dates, days, parts of the day, or events: until Friday, until midnight, until summer, until the meeting ends.",
    },
  ],
};

export default content;
