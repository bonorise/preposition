import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "including：包括……在内；把某项算进整体里。",
  cardMeaning: "including：包括……在内。",
  tips: [
    "including 把某项加进整体：five people, including me。",
    "它常用于举出整体中的成员、例子或附加项目。",
    "如果你要排除某项，就该用 apart from 或 except for，而不是 including。",
  ],
  examples: [
    {
      en: "The fee covers everything, including lunch.",
      i18n: {
        en: { translation: "The fee covers everything, including lunch." },
        "zh-CN": { translation: "这笔费用包含所有项目，包括午餐。" },
      },
    },
    {
      en: "Three students, including Leo, stayed after class.",
      i18n: {
        en: { translation: "Three students, including Leo, stayed after class." },
        "zh-CN": { translation: "包括 Leo 在内的三名学生课后留了下来。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "The update affects several teams, including customer support.",
        i18n: {
          en: {
            translation:
              "The update affects several teams, including customer support.",
          },
          "zh-CN": { translation: "这次更新影响多个团队，包括客服团队。" },
        },
      },
      {
        en: "We packed the basics, including medicine and snacks.",
        i18n: {
          en: { translation: "We packed the basics, including medicine and snacks." },
          "zh-CN": { translation: "我们带上了基本用品，包括药和零食。" },
        },
      },
      {
        en: "Several cities, including ours, will host the event.",
        i18n: {
          en: { translation: "Several cities, including ours, will host the event." },
          "zh-CN": { translation: "包括我们城市在内的几个城市都会举办这项活动。" },
        },
      },
    ],
    space: [
      {
        en: "Everyone in the circle, including Mia, stepped forward.",
        i18n: {
          en: {
            translation:
              "Everyone in the circle, including Mia, stepped forward.",
          },
          "zh-CN": { translation: "圆圈里的每个人，包括 Mia，都向前迈了一步。" },
        },
      },
      {
        en: "The route crosses five towns, including ours.",
        i18n: {
          en: { translation: "The route crosses five towns, including ours." },
          "zh-CN": { translation: "这条路线会经过五个小镇，包括我们这个。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "including 的核心是“把某项算进整体里”。它常和 apart from（排除）以及 among（在一群之中，但不一定强调列名归属）对比。",
    differences: [
      {
        term: "apart from",
        description: "apart from 多数时候是把某项排除或单独分开；including 则是明确把某项算进整体。",
        examples: [
          {
            term: "apart from",
            sentence: "Apart from lunch, the price covers everything.",
            translation: "除了午餐外，这个价格涵盖其他所有项目。"
          },
          {
            term: "including",
            sentence: "The price covers everything, including lunch.",
            translation: "这个价格包含所有项目，包括午餐。"
          }
        ]
      },
      {
        term: "among",
        description: "among 更像“在一群之中”；including 更像“点名说这个成员也算在里面”。",
        examples: [
          {
            term: "among",
            sentence: "She felt calm among friends.",
            translation: "她在朋友中感到很放松。"
          },
          {
            term: "including",
            sentence: "Everyone came, including her closest friends.",
            translation: "大家都来了，包括她最亲近的朋友。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "举成员/举例类",
      items: [
        { phrase: "including me", meaning: "包括我在内" },
        { phrase: "including lunch", meaning: "包括午餐在内" },
        { phrase: "including tax", meaning: "包括税在内" },
        { phrase: "including children", meaning: "包括孩子在内" },
        { phrase: "including this point", meaning: "包括这一点在内" },
        { phrase: "including the final chapter", meaning: "包括最后一章在内" }
      ]
    },
    {
      title: "整体/总数类",
      items: [
        { phrase: "five people including Leo", meaning: "包括 Leo 在内的五个人" },
        { phrase: "all costs including delivery", meaning: "包含运费在内的全部成本" },
        { phrase: "three teams including ours", meaning: "包括我们在内的三个团队" },
        { phrase: "several topics including safety", meaning: "包括安全在内的几个话题" },
        { phrase: "four countries including Japan", meaning: "包括日本在内的四个国家" },
        { phrase: "many tools including this app", meaning: "包括这个应用在内的很多工具" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "covers everything including", meaning: "包含所有项目，包括……" },
        { phrase: "affects several groups including", meaning: "影响多个群体，包括……" },
        { phrase: "packed the essentials including", meaning: "打包了必需品，包括……" },
        { phrase: "invited everyone including", meaning: "邀请了所有人，包括……" },
        { phrase: "mentions many cases including", meaning: "提到很多案例，包括……" },
        { phrase: "offers services including", meaning: "提供多项服务，包括……" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "Apart from lunch, the fee covers lunch too.",
      correct: "The fee covers everything, including lunch.",
      reason: "如果午餐是被算进整体的，就应该用 including，而不是 apart from。"
    },
    {
      wrong: "Including of tax, the total is 40 dollars.",
      correct: "Including tax, the total is 40 dollars.",
      reason: "including 后面不要再加 of。"
    },
    {
      wrong: "She is including the group.",
      correct: "She is among the group. / She is included in the group.",
      reason: "including 在这里是介词，用来点名“算进整体”，不是表示“身处群体中”的位置介词。"
    }
  ],
  quiz: [
    {
      prompt: "The price includes everything, ___ delivery.",
      options: ["including", "apart from", "during"],
      answer: "including",
      explanation: "delivery 被算进总价里，所以用 including。"
    },
    {
      prompt: "___ one final detail, the document is complete.",
      options: ["Apart from", "Including", "Via"],
      answer: "Apart from",
      explanation: "这里排除了一个细节，说其他部分都完整，所以用 apart from。"
    },
    {
      prompt: "Everyone came, ___ Maya and Ken.",
      options: ["including", "until", "as"],
      answer: "including",
      explanation: "Maya 和 Ken 被点名算进整体，所以用 including。"
    }
  ],
  faq: [
    {
      question: "including 的核心意思是什么？",
      answer: "它把某项明确点出来，说“这项也算在整体里”。"
    },
    {
      question: "including 可以接人吗？",
      answer: "可以，比如 five students, including Leo 或 everyone, including the manager。"
    },
    {
      question: "including 可以和金额、总价一起用吗？",
      answer: "可以，比如 including tax、including delivery、including lunch。"
    },
    {
      question: "including 和 apart from 的区别是什么？",
      answer: "including 是把某项算进去；apart from 多数时候是把某项排除出去或单独分开看。"
    },
    {
      question: "including 和 among 的区别是什么？",
      answer: "including 强调“列名并计入整体”；among 强调“处在群体之中”。"
    }
  ]
};

export default content;
