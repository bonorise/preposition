import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "since：从过去某个起点开始，一直持续到现在，或持续到另一个参照时刻。",
  cardMeaning: "since：自从某个起点开始，到现在/到当时一直如此。",
  tips: [
    "since 标的是“起点”，不是时长本身。",
    "接时间起点时，since 常和现在完成时连用：since 2020 / since Monday。",
    "如果你只是想说“在……之后”，要用 after，不用 since。",
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
  },
  comparison: {
    summary:
      "since 的核心是“从这个点开始一直延续”。最常见混淆是 after（只是先后顺序）和 from（普通起点，不自带“持续到现在”的感觉）。",
    differences: [
      {
        term: "after",
        description: "after 只是表示“在……之后”；since 表示“从那时起一直到现在/到另一个参照点”。",
        examples: [
          {
            term: "after",
            sentence: "We left after lunch.",
            translation: "我们午饭后离开了。"
          },
          {
            term: "since",
            sentence: "We haven't eaten since lunch.",
            translation: "我们从午饭后到现在都没吃东西。"
          }
        ]
      },
      {
        term: "from",
        description: "from 的起点用法更中性，常用于范围或时段；since 更适合“起点到现在仍然成立”的时间关系。",
        examples: [
          {
            term: "from",
            sentence: "The store is open from 9 a.m. to 6 p.m.",
            translation: "这家店从早上九点营业到下午六点。"
          },
          {
            term: "since",
            sentence: "The store has been open since 9 a.m.",
            translation: "这家店从早上九点起一直开着。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "常见起点表达",
      items: [
        { phrase: "since 2020", meaning: "自 2020 年以来" },
        { phrase: "since Monday", meaning: "从周一以来" },
        { phrase: "since childhood", meaning: "从小时候起" },
        { phrase: "since breakfast", meaning: "从早餐后起" },
        { phrase: "since the meeting", meaning: "从那场会以后起" },
        { phrase: "since then", meaning: "从那时起" }
      ]
    },
    {
      title: "现在完成时常见搭配",
      items: [
        { phrase: "have lived here since 2020", meaning: "从 2020 年起一直住在这里" },
        { phrase: "has worked there since June", meaning: "从六月起一直在那里工作" },
        { phrase: "have known her since school", meaning: "从学生时代就认识她" },
        { phrase: "has been quiet since noon", meaning: "从中午起就一直很安静" },
        { phrase: "have waited since 8 a.m.", meaning: "从早上八点起一直在等" },
        { phrase: "has improved since last month", meaning: "从上个月起已经有所改善" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "since the beginning of the year", meaning: "从年初以来" },
        { phrase: "since the project started", meaning: "从项目启动以来" },
        { phrase: "since our last call", meaning: "从我们上次通话以来" },
        { phrase: "since the accident", meaning: "从那次事故以后起" },
        { phrase: "since the rule changed", meaning: "从规则更改以后起" },
        { phrase: "since that day", meaning: "从那一天起" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "I live here since 2020.",
      correct: "I have lived here since 2020.",
      reason: "since 常表示从过去开始一直持续到现在，所以英语里通常配现在完成时。"
    },
    {
      wrong: "We left since lunch.",
      correct: "We left after lunch.",
      reason: "这里只是说先后顺序，不是从午饭后一直持续，所以要用 after。"
    },
    {
      wrong: "The shop is open since 9 to 6.",
      correct: "The shop is open from 9 to 6.",
      reason: "营业时间范围要用 from ... to ...；since 不是这种“起点到终点”的时段表达。"
    }
  ],
  quiz: [
    {
      prompt: "I have known her ___ primary school.",
      options: ["since", "after", "during"],
      answer: "since",
      explanation: "这里要表达“从小学开始一直到现在都认识她”，所以用 since。"
    },
    {
      prompt: "We went home ___ dinner.",
      options: ["after", "since", "from"],
      answer: "after",
      explanation: "这里只是“晚饭后回家”，是单纯先后顺序，所以用 after。"
    },
    {
      prompt: "The café has been busy ___ noon.",
      options: ["since", "until", "for"],
      answer: "since",
      explanation: "noon 是起点。since noon 表示“从中午起一直忙到现在”。"
    }
  ],
  faq: [
    {
      question: "since 作为介词的核心意思是什么？",
      answer: "它标出一个时间段的起点，意思接近“从那个点开始到现在/到另一个参照时刻”。"
    },
    {
      question: "为什么 since 常和现在完成时一起出现？",
      answer: "因为很多 since 句子都在表达“过去开始、现在仍然相关”的状态或动作。"
    },
    {
      question: "since 和 after 的区别是什么？",
      answer: "after 只说“在……之后”；since 还强调“从那时起一直延续”。"
    },
    {
      question: "since 和 from 的区别是什么？",
      answer: "from 更宽泛，可用于范围、移动、时段等；since 更像“时间起点 + 延续”的专用表达。"
    },
    {
      question: "since 后面可以接日期、星期或事件吗？",
      answer: "可以，比如 since 2020、since Monday、since breakfast、since the meeting。"
    }
  ]
};

export default content;
