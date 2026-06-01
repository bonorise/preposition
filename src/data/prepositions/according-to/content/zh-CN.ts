import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "according to：核心是“与……一致”。according 来自 accord（达成一致），to 表示目标；接消息来源时，表示“与该来源的说法一致”，即“据……所说 / 据……报道”；接计划、规则或标准时，表示“与该计划/标准一致”，即“按照 / 根据”。",
  cardMeaning: "according to：与……一致；据……所说 / 按照……",
  tips: [
    "according 来自 accord（达成一致），to 指向目标，所以 according to 的底层感觉是“与某个来源、计划或标准一致”。",
    "后面接消息来源时：according to the report / according to my doctor，意思是“据报告 / 据医生说”。",
    "后面接计划、规则、标准时：according to plan / according to policy / according to the rules，意思是“按计划 / 按规定 / 按规则”。",
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
      "according to 不是“关于”、不是“因为”，也通常不表达“我个人觉得”。它只是在说：这句话或做法与哪个外部来源、计划、规则或标准一致。",
    differences: [
      {
        term: "in my opinion",
        description:
          "in my opinion 用来表达自己的看法；according to 通常引出外部来源，不用来表达“我个人觉得”。",
        examples: [
          {
            term: "in my opinion",
            sentence: "In my opinion, this route is better.",
            translation: "在我看来，这条路线更好。",
          },
          {
            term: "according to",
            sentence: "According to the map, this route is shorter.",
            translation: "根据地图，这条路线更短。",
          },
        ],
      },
      {
        term: "about",
        description:
          "about 引出话题内容；according to 引出信息来源、依据、计划或标准。",
        examples: [
          {
            term: "about",
            sentence: "This book is about climate change.",
            translation: "这本书是关于气候变化的。",
          },
          {
            term: "according to",
            sentence: "According to this book, climate change is accelerating.",
            translation: "根据这本书的说法，气候变化正在加速。",
          },
        ],
      },
      {
        term: "due to",
        description:
          "due to 引出原因；according to 引出信息来源、规则、计划或标准。",
        examples: [
          {
            term: "due to",
            sentence: "The delay was due to heavy traffic.",
            translation: "延误是因为交通拥堵。",
          },
          {
            term: "according to",
            sentence: "According to the traffic report, the road is closed.",
            translation: "根据交通报告，这条路封闭了。",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "信息来源类",
      items: [
        { phrase: "according to the report", meaning: "根据报告" },
        { phrase: "according to the doctor", meaning: "根据医生的说法" },
        { phrase: "according to the news", meaning: "根据新闻报道" },
        { phrase: "according to the map", meaning: "根据地图" },
        { phrase: "according to the survey", meaning: "根据调查" },
        { phrase: "according to the guide", meaning: "按照指南 / 根据导览说明" }
      ]
    },
    {
      title: "规则/计划类",
      items: [
        { phrase: "according to policy", meaning: "按政策规定" },
        { phrase: "according to plan", meaning: "按计划" },
        { phrase: "according to the rules", meaning: "按规则" },
        { phrase: "according to schedule", meaning: "按日程安排" },
        { phrase: "according to tradition", meaning: "按传统" },
        { phrase: "according to the contract", meaning: "按合同" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "according to my notes", meaning: "根据我的笔记" },
        { phrase: "according to the data", meaning: "根据数据" },
        { phrase: "according to local law", meaning: "根据当地法律" },
        { phrase: "according to your email", meaning: "根据你的邮件" },
        { phrase: "according to the label", meaning: "按标签说明" },
        { phrase: "according to her account", meaning: "根据她的描述" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "According to me, this movie is boring.",
      correct: "In my opinion, this movie is boring.",
      reason: "according to 通常引出外部来源，不太用来表达“我个人觉得……”。"
    },
    {
      wrong: "This book is according to space travel.",
      correct: "This book is about space travel.",
      reason: "话题内容要用 about；according to 不是“关于”的意思。"
    },
    {
      wrong: "We arrived according to 6 p.m.",
      correct: "We arrived at 6 p.m. / We arrived according to schedule.",
      reason: "according to 不能直接替代时间介词；它后面必须是来源、规则或计划。"
    }
  ],
  quiz: [
    {
      prompt: "___ the weather app, it will snow tonight.",
      options: ["According to", "About", "Until"],
      answer: "According to",
      explanation: "这里引出信息来源（天气应用），所以要用 according to。"
    },
    {
      prompt: "Everything went ___ plan.",
      options: ["according to", "during", "since"],
      answer: "according to",
      explanation: "according to plan 表示“按计划进行”。"
    },
    {
      prompt: "___ the traffic report, the bridge is closed.",
      options: ["According to", "Due to", "About"],
      answer: "According to",
      explanation: "traffic report 是信息来源，不是原因或话题，所以用 according to。",
    }
  ],
  faq: [
    {
      question: "according to 的核心意思是什么？",
      answer:
        "核心是“与……一致”：与来源的说法一致，就是“据……所说”；与计划、规则或标准一致，就是“按照 / 根据”。"
    },
    {
      question: "according to 可以接人吗？",
      answer: "可以，比如 according to my teacher、according to the doctor、according to witnesses。"
    },
    {
      question: "according to 可以接计划或规则吗？",
      answer: "可以。according to plan、according to policy、according to the rules 都很常见。"
    },
    {
      question: "为什么英语里不太说 according to me？",
      answer: "因为它通常指“外部来源怎么说”，而不是“我个人怎么想”。"
    },
    {
      question: "according to 和 about 的区别是什么？",
      answer: "about 说的是“话题是什么”；according to 说的是“信息根据谁/根据什么”。"
    }
  ]
};

export default content;
