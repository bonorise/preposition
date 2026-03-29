import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "apart from：除……之外；撇开……不谈；在有些语境里也可表示“此外、除了……还”。",
  cardMeaning: "apart from：除……之外；此外。",
  tips: [
    "最常见的意思是排除：apart from one detail, everything is fine。",
    "它有时也可表示“此外、除了……还”，要靠上下文判断。",
    "“分开、隔开”的空间感觉有助于记忆，但本页核心仍是抽象排除/补充关系。",
  ],
  examples: [
    {
      en: "Apart from one typo, the report is ready to send.",
      i18n: {
        en: { translation: "Apart from one typo, the report is ready to send." },
        "zh-CN": { translation: "除了一个错字外，这份报告已经可以发出了。" },
      },
    },
    {
      en: "Apart from Sara, everyone agreed with the plan.",
      i18n: {
        en: { translation: "Apart from Sara, everyone agreed with the plan." },
        "zh-CN": { translation: "除了 Sara 之外，大家都同意这个计划。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "Apart from cost, the proposal has no serious weakness.",
        i18n: {
          en: { translation: "Apart from cost, the proposal has no serious weakness." },
          "zh-CN": { translation: "除了成本，这个方案没有明显短板。" },
        },
      },
      {
        en: "Apart from English, she also speaks Korean.",
        i18n: {
          en: { translation: "Apart from English, she also speaks Korean." },
          "zh-CN": { translation: "除了英语，她还会说韩语。" },
        },
      },
      {
        en: "Apart from a few delays, the event went smoothly.",
        i18n: {
          en: { translation: "Apart from a few delays, the event went smoothly." },
          "zh-CN": { translation: "除了一些延误，这次活动进行得很顺利。" },
        },
      },
    ],
    space: [
      {
        en: "The cabin stood apart from the other houses.",
        i18n: {
          en: { translation: "The cabin stood apart from the other houses." },
          "zh-CN": { translation: "那间木屋和其他房子隔开而建。" },
        },
      },
      {
        en: "Keep the chemicals apart from food.",
        i18n: {
          en: { translation: "Keep the chemicals apart from food." },
          "zh-CN": { translation: "把化学品和食物分开放。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "apart from 通常表示把某个东西从整体里排除出来。它常和 except for（接近）以及 including（方向相反，是算进整体）对比。",
    differences: [
      {
        term: "except for",
        description: "except for 是更直接的排除标记；apart from 也能排除，但有时还可以表示“此外”。",
        examples: [
          {
            term: "except for",
            sentence: "Except for one page, the document is complete.",
            translation: "除了有一页外，文件已经完整。"
          },
          {
            term: "apart from",
            sentence: "Apart from one page, the document is complete.",
            translation: "除了一页之外，文件已经完整。"
          }
        ]
      },
      {
        term: "including",
        description: "including 是把某项算进整体；apart from 常是把某项排除出去，或和整体分开看。",
        examples: [
          {
            term: "including",
            sentence: "The price includes everything, including lunch.",
            translation: "这个价格包含所有东西，包括午餐。"
          },
          {
            term: "apart from",
            sentence: "Apart from lunch, the price covers everything else.",
            translation: "除了午餐外，这个价格包含其他所有项目。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "排除类表达",
      items: [
        { phrase: "apart from one problem", meaning: "除一个问题外" },
        { phrase: "apart from that", meaning: "除此之外" },
        { phrase: "apart from the cost", meaning: "除成本外" },
        { phrase: "apart from a typo", meaning: "除一个错字外" },
        { phrase: "apart from me", meaning: "除了我之外" },
        { phrase: "apart from a few delays", meaning: "除了一些延误外" }
      ]
    },
    {
      title: "此外/除了……还",
      items: [
        { phrase: "apart from English", meaning: "除了英语之外" },
        { phrase: "apart from work", meaning: "除了工作之外" },
        { phrase: "apart from the main course", meaning: "除了主菜之外" },
        { phrase: "apart from football", meaning: "除了足球之外" },
        { phrase: "apart from teaching", meaning: "除了教书之外" },
        { phrase: "apart from her family", meaning: "除了她家人之外" }
      ]
    },
    {
      title: "空间分离类",
      items: [
        { phrase: "stand apart from the crowd", meaning: "和人群分开站着" },
        { phrase: "sit apart from each other", meaning: "彼此分开坐" },
        { phrase: "keep it apart from heat", meaning: "让它远离热源" },
        { phrase: "apart from the main road", meaning: "离主路有些距离" },
        { phrase: "apart from the wall", meaning: "和墙隔开" },
        { phrase: "grow apart from the rest", meaning: "和其余部分分离开来" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "Apart from of the price, it is perfect.",
      correct: "Apart from the price, it is perfect.",
      reason: "apart from 本身已经是固定介词短语，后面不要再加 of。"
    },
    {
      wrong: "Including Sara, everyone agreed.",
      correct: "Apart from Sara, everyone agreed.",
      reason: "如果 Sara 是例外项，要用 apart from，而不是 including。"
    },
    {
      wrong: "She sat apart from to me.",
      correct: "She sat apart from me.",
      reason: "apart from 后面直接接名词或代词，不要加 to。"
    }
  ],
  quiz: [
    {
      prompt: "___ one small issue, the plan looks strong.",
      options: ["Apart from", "Including", "During"],
      answer: "Apart from",
      explanation: "这里是在排除一个小问题，说其他部分都不错，所以用 apart from。"
    },
    {
      prompt: "Keep the medicine ___ the food.",
      options: ["apart from", "instead of", "according to"],
      answer: "apart from",
      explanation: "这里表示分开放、隔开，所以用 apart from。"
    },
    {
      prompt: "The package includes everything, ___ the charger.",
      options: ["including", "apart from", "until"],
      answer: "including",
      explanation: "charger 被算进整体里，所以用 including。"
    }
  ],
  faq: [
    {
      question: "apart from 的核心意思是什么？",
      answer: "通常是“除……之外”，带有把某项从整体里分开的感觉。"
    },
    {
      question: "apart from 也能表示“此外”吗？",
      answer: "可以。在某些语境里它相当于 besides / in addition to。"
    },
    {
      question: "apart from 和 except for 的区别是什么？",
      answer: "两者在排除义上很接近，但 apart from 的用法范围更宽，还可能表示“此外”。"
    },
    {
      question: "apart from 可以表示空间上的分开吗？",
      answer: "可以，比如让两个东西 apart from each other，或者某处 apart from the rest。"
    },
    {
      question: "apart from 和 including 的区别是什么？",
      answer: "apart from 多半是排除或分离；including 是把某项算进整体。"
    }
  ]
};

export default content;
