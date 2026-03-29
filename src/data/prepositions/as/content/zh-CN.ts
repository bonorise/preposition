import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "as：表示“作为……身份/功能/用途”，强调某物被看作或被用作什么。",
  cardMeaning: "as：作为…… / 当作……来用。",
  tips: [
    "本页只讲 as 的介词用法：as a teacher / use it as a guide。",
    "as 强调角色、身份、功能或看待方式，不只是“像……一样”。",
    "不要把这里和连词 as 或 as ... as ... 结构混在一起。",
  ],
  examples: [
    {
      en: "She works as a designer in a small studio.",
      i18n: {
        en: { translation: "She works as a designer in a small studio." },
        "zh-CN": { translation: "她在一家小型工作室当设计师。" },
      },
    },
    {
      en: "We used a box as a temporary table.",
      i18n: {
        en: { translation: "We used a box as a temporary table." },
        "zh-CN": { translation: "我们把一个箱子当临时桌子用。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "He spoke as a parent, not as a manager.",
        i18n: {
          en: { translation: "He spoke as a parent, not as a manager." },
          "zh-CN": { translation: "他是以家长身份发言，不是以经理身份发言。" },
        },
      },
      {
        en: "Please keep this note as a reminder.",
        i18n: {
          en: { translation: "Please keep this note as a reminder." },
          "zh-CN": { translation: "请把这张纸条留作提醒。" },
        },
      },
      {
        en: "The team sees the setback as a useful lesson.",
        i18n: {
          en: { translation: "The team sees the setback as a useful lesson." },
          "zh-CN": { translation: "团队把这次挫折看作一次有用的教训。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "as 的核心是“以……身份/作用来看”。最容易混的是 like（像……一样）和 instead of（代替……）。",
    differences: [
      {
        term: "like",
        description: "like 强调“像……一样、类似于”；as 强调“作为……来使用/看待”。",
        examples: [
          {
            term: "like",
            sentence: "This fabric feels like silk.",
            translation: "这种布摸起来像丝绸。"
          },
          {
            term: "as",
            sentence: "Use this fabric as a curtain.",
            translation: "把这种布当窗帘用。"
          }
        ]
      },
      {
        term: "instead of",
        description: "instead of 强调“拿 A 替代 B”；as 强调“A 在这里承担什么功能/身份”。",
        examples: [
          {
            term: "instead of",
            sentence: "Use tea instead of coffee.",
            translation: "用茶代替咖啡。"
          },
          {
            term: "as",
            sentence: "Use tea as a warm welcome for guests.",
            translation: "把热茶当作招待客人的一种欢迎方式。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "角色/身份类",
      items: [
        { phrase: "work as a teacher", meaning: "当老师工作" },
        { phrase: "serve as captain", meaning: "担任队长" },
        { phrase: "act as a guide", meaning: "充当向导" },
        { phrase: "speak as a parent", meaning: "以家长身份发言" },
        { phrase: "see him as a friend", meaning: "把他看作朋友" },
        { phrase: "treat it as a joke", meaning: "把它当玩笑看待" }
      ]
    },
    {
      title: "把某物用作……",
      items: [
        { phrase: "use a box as a table", meaning: "把箱子当桌子用" },
        { phrase: "use your phone as a torch", meaning: "把手机当手电筒用" },
        { phrase: "use water as a coolant", meaning: "把水当冷却液用" },
        { phrase: "use the room as storage", meaning: "把这个房间当储藏室用" },
        { phrase: "use the file as a template", meaning: "把文件当模板用" },
        { phrase: "use the chair as a step", meaning: "把椅子当垫脚物用" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "as a student", meaning: "作为学生" },
        { phrase: "as evidence", meaning: "作为证据" },
        { phrase: "as a warning", meaning: "作为警告" },
        { phrase: "as an example", meaning: "作为例子" },
        { phrase: "as a gift", meaning: "作为礼物" },
        { phrase: "as part of the plan", meaning: "作为计划的一部分" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "She works like a designer there.",
      correct: "She works as a designer there.",
      reason: "如果 designer 是她的真实工作身份，要用 as；like 只表示“像设计师一样”。"
    },
    {
      wrong: "We used a box instead of a table for a temporary table.",
      correct: "We used a box as a temporary table.",
      reason: "这里重点是“箱子承担了桌子的功能”，更自然的是 use ... as ...。"
    },
    {
      wrong: "As I was tired, I went home.",
      correct: "That is a conjunction use of as, not the preposition use on this page.",
      reason: "本页只讲 as 的介词义，不讲“因为/当……时”这种连词用法。"
    }
  ],
  quiz: [
    {
      prompt: "She spoke ___ the team leader.",
      options: ["as", "like", "during"],
      answer: "as",
      explanation: "这里说的是“以队长身份发言”，所以要用 as。"
    },
    {
      prompt: "This tastes ___ lemon, but it isn't lemon.",
      options: ["like", "as", "since"],
      answer: "like",
      explanation: "这里强调“像柠檬”，是相似关系，不是角色/功能，所以用 like。"
    },
    {
      prompt: "We used the spare room ___ an office.",
      options: ["as", "until", "about"],
      answer: "as",
      explanation: "房间在这里承担了办公室的功能，所以用 as。"
    }
  ],
  faq: [
    {
      question: "as 作为介词的核心意思是什么？",
      answer: "它标出角色、身份、功能，或者“把某物看作什么”。"
    },
    {
      question: "as 可以用在职业和身份上吗？",
      answer: "可以，比如 work as a teacher、serve as captain、act as a guide。"
    },
    {
      question: "as 和 like 的区别是什么？",
      answer: "as 说的是“作为……来用/来看”；like 说的是“像……一样”。"
    },
    {
      question: "as 可以跟在 see、describe 这类动词后面吗？",
      answer: "可以，比如 see it as a chance、describe him as calm、regard it as a risk。"
    },
    {
      question: "为什么这页不讲 as 的连词用法？",
      answer: "因为把介词义单独拆出来更适合初学者建立清晰边界。"
    }
  ]
};

export default content;
