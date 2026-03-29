import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "via: by way of a route, place, system, or channel; through an intermediate path.",
  cardMeaning: "via: by way of / through a channel.",
  tips: [
    "Via can describe a physical route: travel to the airport via downtown.",
    "It can also describe an abstract channel: contact me via email / pay via the app.",
    "Via highlights the route or intermediate channel, not just general means.",
  ],
  examples: [
    {
      en: "The bus reaches the airport via downtown.",
      i18n: {
        en: { translation: "The bus reaches the airport via downtown." },
        "zh-CN": { translation: "这班公交会经由市中心到达机场。" },
      },
    },
    {
      en: "I heard the update via email this morning.",
      i18n: {
        en: { translation: "I heard the update via email this morning." },
        "zh-CN": { translation: "今天早上我通过邮件得知了这条更新。" },
      },
    },
  ],
  examplesByCategory: {
    dynamic: [
      {
        en: "We drove to the coast via the mountain road.",
        i18n: {
          en: { translation: "We drove to the coast via the mountain road." },
          "zh-CN": { translation: "我们经由山路开车去了海边。" },
        },
      },
      {
        en: "The package was sent via Singapore.",
        i18n: {
          en: { translation: "The package was sent via Singapore." },
          "zh-CN": { translation: "这个包裹经由新加坡转运。" },
        },
      },
    ],
    abstract: [
      {
        en: "Please send the file via the shared drive.",
        i18n: {
          en: { translation: "Please send the file via the shared drive." },
          "zh-CN": { translation: "请通过共享盘发送这个文件。" },
        },
      },
      {
        en: "Customers can pay via mobile wallet.",
        i18n: {
          en: { translation: "Customers can pay via mobile wallet." },
          "zh-CN": { translation: "顾客可以通过手机钱包付款。" },
        },
      },
      {
        en: "We contacted her via a mutual friend.",
        i18n: {
          en: { translation: "We contacted her via a mutual friend." },
          "zh-CN": { translation: "我们通过一位共同朋友联系上了她。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Via highlights the route or intermediate channel. Learners often compare it with through (passage through something) and by (general means or method).",
    differences: [
      {
        term: "through",
        description:
          "Through often focuses on passing through an interior or opening. Via focuses on the route/channel used to reach a result.",
        examples: [
          {
            term: "through",
            sentence: "The train passed through the tunnel.",
          },
          {
            term: "via",
            sentence: "The train reaches the city via the tunnel route.",
          },
        ],
      },
      {
        term: "by",
        description:
          "By can name a general method (by bus, by phone). Via feels more like 'through this route/channel/system'.",
        examples: [
          {
            term: "by",
            sentence: "I paid by card.",
          },
          {
            term: "via",
            sentence: "I paid via the app.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Route and travel",
      items: [
        "via downtown",
        "via the mountain road",
        "via Singapore",
        "via the bridge",
        "via the north entrance",
        "via the main station",
      ],
    },
    {
      title: "Digital and business channels",
      items: [
        "via email",
        "via the app",
        "via text message",
        "via video call",
        "via the website",
        "via mobile wallet",
      ],
    },
    {
      title: "Useful sentence frames",
      items: [
        "contact someone via",
        "pay via",
        "send it via",
        "travel via",
        "ship via",
        "connect via",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "We walked via the park and through the city channel.",
      correct: "We walked to the park via the side street.",
      reason:
        "Via needs a clear route or channel. It should not be used randomly when the route idea is unclear.",
    },
    {
      wrong: "The ball went via the tunnel.",
      correct: "The ball went through the tunnel.",
      reason:
        "Through is better when the focus is physical passage inside the tunnel.",
    },
    {
      wrong: "Please contact me by the app route.",
      correct: "Please contact me via the app.",
      reason:
        "Via naturally expresses the app as the intermediate channel.",
    },
  ],
  quiz: [
    {
      prompt: "The train goes to the airport ___ downtown.",
      options: ["via", "as", "during"],
      answer: "via",
      explanation:
        "Downtown is the route the train passes by on the way to the airport.",
    },
    {
      prompt: "Please send the invoice ___ email.",
      options: ["via", "apart from", "until"],
      answer: "via",
      explanation:
        "Email is the delivery channel, so via is correct.",
    },
    {
      prompt: "The cat jumped ___ the window.",
      options: ["through", "via", "according to"],
      answer: "through",
      explanation:
        "This is physical passage through an opening, so through is the better choice.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of via?",
      answer:
        "It marks the route, path, or channel used to reach something.",
    },
    {
      question: "Can via describe physical travel?",
      answer:
        "Yes. You can go somewhere via a town, road, station, or bridge.",
    },
    {
      question: "Can via describe digital channels?",
      answer:
        "Yes. Via email, via the app, and via video call are all common.",
    },
    {
      question: "What is the difference between via and through?",
      answer:
        "Via highlights the route or intermediate channel. Through highlights passage through an interior space or opening.",
    },
    {
      question: "What is the difference between via and by?",
      answer:
        "By is broader for method or means. Via feels more specific about the channel or route used.",
    },
  ],
};

export default content;
