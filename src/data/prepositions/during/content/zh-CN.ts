import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "during：在某个时间段、事件或活动进行的期间之内。",
  cardMeaning: "during：在……期间 / 在……过程中。",
  tips: [
    "during 后面接名词性时间段或事件：during the meeting / during summer。",
    "它强调“在这个时期里面”，不是起点，也不是终点。",
    "如果后面要接完整从句，英语通常更用 while：while I was sleeping。",
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
      "during 的核心是“处在某个时间段/事件内部”。常见混淆有 for（时长）和 while（后接从句）。",
    differences: [
      {
        term: "for",
        description: "for 强调持续了多久（for two hours）；during 强调事情发生在某个时期/事件里面。",
        examples: [
          {
            term: "for",
            sentence: "We talked for two hours.",
            translation: "我们聊了两个小时。"
          },
          {
            term: "during",
            sentence: "We talked during the break.",
            translation: "我们在休息时间里聊了会儿。"
          }
        ]
      },
      {
        term: "while",
        description: "while 后面接从句；during 后面接名词性时间段或事件。",
        examples: [
          {
            term: "while",
            sentence: "While I was driving, it started to rain.",
            translation: "我开车的时候开始下雨了。"
          },
          {
            term: "during",
            sentence: "It started to rain during the drive.",
            translation: "在那段车程中开始下雨了。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "事件/活动类",
      items: [
        { phrase: "during the meeting", meaning: "会议期间" },
        { phrase: "during the exam", meaning: "考试期间" },
        { phrase: "during dinner", meaning: "晚饭期间" },
        { phrase: "during the trip", meaning: "旅途中" },
        { phrase: "during the lesson", meaning: "上课期间" },
        { phrase: "during the interview", meaning: "面试期间" }
      ]
    },
    {
      title: "时间段类",
      items: [
        { phrase: "during the summer", meaning: "在夏天期间" },
        { phrase: "during the holidays", meaning: "在假期期间" },
        { phrase: "during the night", meaning: "在夜里" },
        { phrase: "during the weekend", meaning: "在周末期间" },
        { phrase: "during the week", meaning: "在这一周里" },
        { phrase: "during the first month", meaning: "在第一个月期间" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "happened during the break", meaning: "发生在休息期间" },
        { phrase: "changed during the process", meaning: "在过程中发生变化" },
        { phrase: "improved during treatment", meaning: "在治疗期间改善" },
        { phrase: "fell asleep during the movie", meaning: "看电影时睡着了" },
        { phrase: "spoke during the discussion", meaning: "在讨论期间发言" },
        { phrase: "was injured during training", meaning: "在训练期间受伤" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "I met him during two hours.",
      correct: "I met him for two hours. / I met him during the meeting.",
      reason: "during 不能单独表示“两个小时”这种时长，它需要一个具体时期或事件。"
    },
    {
      wrong: "During I was sleeping, the phone rang.",
      correct: "While I was sleeping, the phone rang.",
      reason: "during 后面不接完整从句；这里应改用 while。"
    },
    {
      wrong: "We stayed there during Friday to Sunday.",
      correct: "We stayed there from Friday to Sunday.",
      reason: "有明确起点和终点的范围要用 from ... to ...；during 更像“在某个时期里面”。"
    }
  ],
  quiz: [
    {
      prompt: "No talking is allowed ___ the exam.",
      options: ["during", "for", "since"],
      answer: "during",
      explanation: "the exam 是一个具体事件，规则发生在这个事件期间，所以用 during。"
    },
    {
      prompt: "We stayed in Paris ___ three days.",
      options: ["for", "during", "until"],
      answer: "for",
      explanation: "three days 是时长，要用 for，不用 during。"
    },
    {
      prompt: "___ I was cooking, the lights went out.",
      options: ["While", "During", "Until"],
      answer: "While",
      explanation: "后面是完整从句，所以要用 while。during 后面应接名词词组。"
    }
  ],
  faq: [
    {
      question: "during 的核心意思是什么？",
      answer: "它把某件事放进某个时间段、活动或事件的内部。"
    },
    {
      question: "during 后面应该接什么？",
      answer: "接名词词组，比如 during the trip、during class、during summer、during the storm。"
    },
    {
      question: "during 和 for 的区别是什么？",
      answer: "during 强调“在某个时期里面”；for 强调“持续了多久”。"
    },
    {
      question: "during 和 while 的区别是什么？",
      answer: "during 后面接名词词组；while 后面接从句。"
    },
    {
      question: "during 可以接季节、吃饭、开会这些词吗？",
      answer: "可以，这些都是 during 最典型的搭配对象。"
    }
  ]
};

export default content;
