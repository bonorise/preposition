import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "via：经由……、通过……渠道/路径/中间环节。",
  cardMeaning: "via：经由…… / 通过……渠道。",
  tips: [
    "via 可以表示实体路线：travel to the airport via downtown。",
    "它也可以表示抽象渠道：contact me via email / pay via the app。",
    "via 强调“经由哪条路径/哪个中介渠道”，不只是笼统的方式。",
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
      "via 的核心是“经由某条路径/某个中间渠道”。最常见的对比是 through（穿过内部空间）和 by（一般方式/手段）。",
    differences: [
      {
        term: "through",
        description: "through 更强调穿过内部空间或开口；via 更强调到达结果时所经过的路线/渠道。",
        examples: [
          {
            term: "through",
            sentence: "The train passed through the tunnel.",
            translation: "火车穿过了隧道。"
          },
          {
            term: "via",
            sentence: "The train reaches the city via the tunnel route.",
            translation: "火车经由这条隧道路线到达城市。"
          }
        ]
      },
      {
        term: "by",
        description: "by 可以笼统表示方式（by bus / by phone）；via 更强调“通过哪个具体渠道或中间路径”。",
        examples: [
          {
            term: "by",
            sentence: "I paid by card.",
            translation: "我刷卡支付。"
          },
          {
            term: "via",
            sentence: "I paid via the app.",
            translation: "我通过应用支付。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "路线/转运类",
      items: [
        { phrase: "via downtown", meaning: "经由市中心" },
        { phrase: "via the mountain road", meaning: "经由山路" },
        { phrase: "via Singapore", meaning: "经由新加坡" },
        { phrase: "via the bridge", meaning: "经由桥上/通过那座桥" },
        { phrase: "via the north entrance", meaning: "经由北门" },
        { phrase: "via the main station", meaning: "经由主车站" }
      ]
    },
    {
      title: "数字/沟通渠道类",
      items: [
        { phrase: "via email", meaning: "通过邮件" },
        { phrase: "via the app", meaning: "通过应用" },
        { phrase: "via text message", meaning: "通过短信" },
        { phrase: "via video call", meaning: "通过视频通话" },
        { phrase: "via the website", meaning: "通过网站" },
        { phrase: "via mobile wallet", meaning: "通过手机钱包" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "contact someone via", meaning: "通过……联系某人" },
        { phrase: "pay via", meaning: "通过……支付" },
        { phrase: "send it via", meaning: "通过……发送它" },
        { phrase: "travel via", meaning: "经由……出行" },
        { phrase: "ship via", meaning: "经由……发货" },
        { phrase: "connect via", meaning: "通过……连接" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "We walked via the park and through the city channel.",
      correct: "We walked to the park via the side street.",
      reason: "via 需要一个清晰可辨的路径/渠道，不适合随意乱加在普通地点前面。"
    },
    {
      wrong: "The ball went via the tunnel.",
      correct: "The ball went through the tunnel.",
      reason: "如果重点是“穿过隧道内部”，through 更自然。"
    },
    {
      wrong: "Please contact me by the app route.",
      correct: "Please contact me via the app.",
      reason: "app 作为中间渠道时，用 via the app 最自然。"
    }
  ],
  quiz: [
    {
      prompt: "The train goes to the airport ___ downtown.",
      options: ["via", "as", "during"],
      answer: "via",
      explanation: "downtown 是去机场途中经过的路线节点，所以用 via。"
    },
    {
      prompt: "Please send the invoice ___ email.",
      options: ["via", "apart from", "until"],
      answer: "via",
      explanation: "email 是发送渠道，所以用 via。"
    },
    {
      prompt: "The cat jumped ___ the window.",
      options: ["through", "via", "according to"],
      answer: "through",
      explanation: "这里强调穿过窗户这个开口，所以用 through。"
    }
  ],
  faq: [
    {
      question: "via 的核心意思是什么？",
      answer: "它标出到达某个结果时所经过的路线、路径或中间渠道。"
    },
    {
      question: "via 可以表示实体路线吗？",
      answer: "可以，比如经由某个城镇、道路、车站或桥梁。"
    },
    {
      question: "via 可以表示数字渠道吗？",
      answer: "可以，比如 via email、via the app、via video call。"
    },
    {
      question: "via 和 through 的区别是什么？",
      answer: "via 强调“经由哪条路径/哪个渠道”；through 强调“穿过内部空间或开口”。"
    },
    {
      question: "via 和 by 的区别是什么？",
      answer: "by 更宽泛，表示一般方式或手段；via 更具体，突出中间路径或渠道。"
    }
  ]
};

export default content;
