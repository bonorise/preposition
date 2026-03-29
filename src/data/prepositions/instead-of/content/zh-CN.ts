import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "instead of：而不是……；用 A 替代 B。",
  cardMeaning: "instead of：代替…… / 而不是……。",
  tips: [
    "instead of 强调“拿 A 替代 B”：tea instead of coffee。",
    "它后面可以接名词词组，也可以接动名词：instead of a car / instead of driving。",
    "如果你要说“把 A 当作 B 来用”，用 as；如果你要说“用 A 替掉 B”，用 instead of。",
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
      "instead of 的核心是“替代关系”：一个选项取代另一个。最容易混的是 as（角色/功能）和 without（没有，不一定替代）。",
    differences: [
      {
        term: "as",
        description: "as 强调身份或功能；instead of 强调替代。",
        examples: [
          {
            term: "as",
            sentence: "Use this room as an office.",
            translation: "把这个房间当办公室用。"
          },
          {
            term: "instead of",
            sentence: "Use this room instead of the old office.",
            translation: "用这个房间替代旧办公室。"
          }
        ]
      },
      {
        term: "without",
        description: "without 表示“没有某物”；instead of 表示“用某物代替另一物”。",
        examples: [
          {
            term: "without",
            sentence: "He left without his umbrella.",
            translation: "他没带伞就走了。"
          },
          {
            term: "instead of",
            sentence: "He took a raincoat instead of an umbrella.",
            translation: "他带了雨衣，没带伞。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "饮食/日常选择",
      items: [
        { phrase: "tea instead of coffee", meaning: "用茶代替咖啡" },
        { phrase: "rice instead of bread", meaning: "用米饭代替面包" },
        { phrase: "olive oil instead of butter", meaning: "用橄榄油代替黄油" },
        { phrase: "water instead of soda", meaning: "用水代替汽水" },
        { phrase: "fruit instead of candy", meaning: "用水果代替糖果" },
        { phrase: "walking instead of driving", meaning: "走路而不是开车" }
      ]
    },
    {
      title: "工作/计划选择",
      items: [
        { phrase: "a meeting instead of emails", meaning: "开会而不是来回发邮件" },
        { phrase: "training instead of travel", meaning: "培训而不是出差" },
        { phrase: "a draft instead of a final version", meaning: "草稿而不是终稿" },
        { phrase: "cash instead of credit", meaning: "现金而不是赊账/信用方式" },
        { phrase: "notes instead of slides", meaning: "笔记而不是幻灯片" },
        { phrase: "a short call instead of a long report", meaning: "打个短电话而不是写长报告" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "choose A instead of B", meaning: "选 A 不选 B" },
        { phrase: "do this instead of that", meaning: "做这个而不是那个" },
        { phrase: "use it instead of", meaning: "用它来代替……" },
        { phrase: "buy one instead of two", meaning: "买一个而不是两个" },
        { phrase: "stay home instead of going out", meaning: "待在家里而不是出门" },
        { phrase: "rest instead of pushing harder", meaning: "先休息，而不是继续硬撑" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "We went by train instead to driving.",
      correct: "We went by train instead of driving.",
      reason: "固定搭配是 instead of，不是 instead to。"
    },
    {
      wrong: "Use the box instead of a table as a table.",
      correct: "Use the box as a table. / Use the box instead of the table.",
      reason: "as 和 instead of 功能不同：as 说“当作……用”，instead of 说“替代……”。"
    },
    {
      wrong: "He left instead of his umbrella.",
      correct: "He left without his umbrella. / He took a coat instead of his umbrella.",
      reason: "instead of 需要明确替代关系；如果只是“没带”，应该用 without。"
    }
  ],
  quiz: [
    {
      prompt: "We walked ___ taking a taxi.",
      options: ["instead of", "as", "during"],
      answer: "instead of",
      explanation: "走路替代了打车这个选项，所以用 instead of。"
    },
    {
      prompt: "Use this app ___ a notebook.",
      options: ["instead of", "like", "since"],
      answer: "instead of",
      explanation: "这里是“用 app 替代 notebook”，所以用 instead of。"
    },
    {
      prompt: "Use this notebook ___ a planner.",
      options: ["as", "instead of", "until"],
      answer: "as",
      explanation: "这里强调“笔记本承担 planner 的功能”，所以用 as。"
    }
  ],
  faq: [
    {
      question: "instead of 的核心意思是什么？",
      answer: "它表示“一个东西/做法取代了另一个东西/做法”。"
    },
    {
      question: "instead of 后面可以接动名词吗？",
      answer: "可以，比如 instead of driving、instead of waiting、instead of arguing。"
    },
    {
      question: "instead of 和 as 的区别是什么？",
      answer: "instead of 讲替代；as 讲角色、功能或看待方式。"
    },
    {
      question: "instead of 和 without 的区别是什么？",
      answer: "without 是“没有”；instead of 是“用 A 替掉 B”。"
    },
    {
      question: "instead of 一定带负面语气吗？",
      answer: "不一定。它只是说明选择或替代关系，语气要看上下文。"
    }
  ]
};

export default content;
