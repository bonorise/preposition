import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "since 的核心含义是“起点”。它既可以表示时间上的起点，意思是“自从……以来”；也可以表示判断或事实的出发点，意思接近“因为 / 既然”。表面上意思不同，内在其实一致。",
  cardMeaning:
    "since：先抓“起点”这个核心，再分别理解时间起点（自从）和逻辑起点（因为 / 既然）。",
  tips: [
    "since 标的是“起点”，不是时长本身；时间义里它表示“从这个点开始一直延续”。",
    "接时间起点时，since 常和现在完成时连用：since 2020 / since Monday。",
    "表示原因时，since 引出的是判断、决定或结论的出发点，语气常比 because 更像“既然 / 既然如此”。",
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
      "since 的核心始终是“起点”。时间义里，它标出某段持续关系从哪里开始；原因义里，它标出后文判断是从什么事实出发。最常见混淆是 after、from 和 because。",
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
      },
      {
        term: "because",
        description: "because 是直接回答“为什么”；since 也能引出原因，但更像“既然事实如此，就顺着这个出发点往下判断”。",
        examples: [
          {
            term: "because",
            sentence: "We stayed inside because it was raining.",
            translation: "因为下雨了，所以我们待在室内。"
          },
          {
            term: "since",
            sentence: "Since it was raining, we stayed inside.",
            translation: "既然下雨了，我们就待在室内。"
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
      title: "原因/判断出发点",
      items: [
        { phrase: "since you asked", meaning: "既然你问到了" },
        { phrase: "since everyone agrees", meaning: "既然大家都同意" },
        { phrase: "since this is true", meaning: "既然这一点成立" },
        { phrase: "since we are already here", meaning: "既然我们已经到这里了" },
        { phrase: "since the road is closed", meaning: "既然这条路封了" },
        { phrase: "since that is the case", meaning: "既然情况如此" }
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
    },
    {
      wrong: "Since I was tired, because I went home early.",
      correct: "Since I was tired, I went home early. / Because I was tired, I went home early.",
      reason: "同一句里不要把 since 和 because 叠在一起；二选一即可。"
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
      prompt: "The café has been busy ___ noon.",
      options: ["since", "until", "for"],
      answer: "since",
      explanation: "noon 是起点。since noon 表示“从中午起一直忙到现在”。"
    },
    {
      prompt: "___ everyone is ready, let's start the lesson.",
      options: ["Since", "After", "During"],
      answer: "Since",
      explanation: "这里的 since 表示“既然 / 因为”，引出后面决定的出发点。"
    }
  ],
  faq: [
    {
      question: "since 作为介词的核心意思是什么？",
      answer: "它的核心意思是“起点”。在时间里，是“从那个点开始到现在/到另一个参照时刻”；在原因义里，是“后文判断从这个事实出发”。"
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
      question: "since 可以表示 because 吗？",
      answer: "可以。since 可以引出原因，尤其是在说话人把这个原因当作已知事实时，语气常接近“既然 / 因为”。"
    },
    {
      question: "since 和 because 的区别是什么？",
      answer: "because 更直接地回答“为什么”；since 也能表示原因，但更强调“从这个事实出发，于是有了后面的判断或决定”。"
    },
    {
      question: "since 为什么既能表示“自从”又能表示“因为”？",
      answer: "因为这两个用法共享同一个底层感觉：起点。一个是时间线上的起点，一个是思考、判断或结论的出发点。"
    },
    {
      question: "since 后面可以接日期、星期或事件吗？",
      answer: "可以，比如 since 2020、since Monday、since breakfast、since the meeting。"
    }
  ]
};

export default content;
