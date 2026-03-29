import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "until：一直持续到某个时间边界，到了那个点就停止或发生变化。",
  cardMeaning: "until：一直到某个时间点为止。",
  tips: [
    "until 标的是“终点边界”：wait until Friday / open until 9 p.m.",
    "某件事在那个点之前一直持续，用 until；强调“最晚在……之前完成”则用 by。",
    "until 后面可以接时间点，也可以接一个结束该过程的事件。",
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
      "until 的重点是“在这个边界前一直持续”。最容易混的是 by（截止时间）和 to（范围终点，但不一定强调持续到那个点）。",
    differences: [
      {
        term: "by",
        description: "by 表示“最晚不超过这个点完成”；until 表示“在这个点之前一直持续”。",
        examples: [
          {
            term: "by",
            sentence: "Finish the report by Friday.",
            translation: "最晚周五前把报告完成。"
          },
          {
            term: "until",
            sentence: "Keep working on the report until Friday.",
            translation: "一直做到周五为止。"
          }
        ]
      },
      {
        term: "to",
        description: "to 常见于 from ... to ... 的中性范围表达；until 更适合等待、停留、持续这类过程。",
        examples: [
          {
            term: "to",
            sentence: "The office is open from 9 to 5.",
            translation: "办公室从九点开到五点。"
          },
          {
            term: "until",
            sentence: "Stay here until 5.",
            translation: "在这里待到五点。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "时间边界表达",
      items: [
        { phrase: "until tomorrow", meaning: "到明天为止" },
        { phrase: "until Friday", meaning: "到周五为止" },
        { phrase: "until midnight", meaning: "到午夜为止" },
        { phrase: "until the end of June", meaning: "到六月底为止" },
        { phrase: "until lunchtime", meaning: "到午饭前/到午饭时为止" },
        { phrase: "until then", meaning: "到那时为止" }
      ]
    },
    {
      title: "持续/等待类搭配",
      items: [
        { phrase: "stay until the end", meaning: "一直待到最后" },
        { phrase: "wait until the bus arrives", meaning: "等到公交车来" },
        { phrase: "keep reading until bedtime", meaning: "一直读到睡前" },
        { phrase: "work until midnight", meaning: "工作到午夜" },
        { phrase: "sleep until noon", meaning: "睡到中午" },
        { phrase: "talk until dawn", meaning: "聊到天亮" }
      ]
    },
    {
      title: "常用指令句型",
      items: [
        { phrase: "hold this until I return", meaning: "先拿着这个，等我回来" },
        { phrase: "leave it there until Monday", meaning: "先把它放在那里，到周一再说" },
        { phrase: "don't open it until later", meaning: "先别打开，晚一点再开" },
        { phrase: "keep the receipt until next month", meaning: "把收据留到下个月" },
        { phrase: "save the file until we decide", meaning: "先把文件留着，等我们决定" },
        { phrase: "remain seated until the doors open", meaning: "在车门打开前请一直坐着" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "Finish it until Friday.",
      correct: "Finish it by Friday.",
      reason: "这是“最晚周五前完成”的截止语义，要用 by；until 更像“持续到周五”。"
    },
    {
      wrong: "The shop is open until 9 to 5.",
      correct: "The shop is open from 9 to 5.",
      reason: "营业时间范围要用 from ... to ...；until 通常只标一个终点边界。"
    },
    {
      wrong: "I will wait by you call.",
      correct: "I will wait until you call.",
      reason: "until 可以引出结束等待的事件：until you call。"
    }
  ],
  quiz: [
    {
      prompt: "Please wait here ___ I come back.",
      options: ["until", "by", "since"],
      answer: "until",
      explanation: "等待会一直持续到“我回来”这个边界，所以要用 until。"
    },
    {
      prompt: "Submit the form ___ Friday.",
      options: ["by", "until", "during"],
      answer: "by",
      explanation: "这里是截止时间，不是持续动作，所以应该用 by。"
    },
    {
      prompt: "The café stays open ___ 11 p.m.",
      options: ["until", "from", "after"],
      answer: "until",
      explanation: "until 标出关门前一直营业到 11 点这个边界。"
    }
  ],
  faq: [
    {
      question: "until 的核心画面是什么？",
      answer: "某件事在某个边界点之前一直持续，到那个点停止或转变。"
    },
    {
      question: "until 和 by 的区别是什么？",
      answer: "until 强调“持续到”；by 强调“最晚在……之前完成”。"
    },
    {
      question: "until 后面可以接事件吗？",
      answer: "可以，比如 until the bus arrives、until I call you、until the rain stops。"
    },
    {
      question: "什么时候该用 from ... to ... 而不是 until？",
      answer: "描述营业时间、数字范围这类中性区间时，更常用 from ... to ...；描述等待、停留、持续过程时更常用 until。"
    },
    {
      question: "until 只能接钟点吗？",
      answer: "不是。它还可以接日期、星期、季节或事件，如 until Friday、until summer、until the meeting ends。"
    }
  ]
};

export default content;
