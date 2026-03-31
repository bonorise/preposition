import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "as是“also”(也)的缩略形式,在古英语中等于“all so”(全部如此),其包含的两层含义,“相似”加“相伴随”。第一、“相似”。“全部如此”表示大家在某个方面存在共同点、相似之处。比如大家都喜欢吃苹果，我们的喜好相似。第二，“一起”“相伴随”。“全部如此”表示主体不止一个，处于彼此相伴随的状态。比如我们全部都要去上学，那么我们相伴而行，一起去上学。",
  cardMeaning: "as:同样地、作为、当……时、因为。",
  tips: [
    "先抓住两个核心感觉：相似、相伴随。",
    "从“相似”能走到 as ... as,也能走到“作为……身份/功能”的用法。",
    "从“相伴随”能走到“当……时”、较轻的“因为”，以及正式的让步结构。",
  ],
  meaningMap: {
    title: "as 的意思为什么能串起来",
    intro:
      "不要把 as 的每一种用法都当成彼此无关的规则去背。先抓住一个核心感觉，再看英语怎样沿着这条线往外延伸，会更容易真正掌握它。",
    coreLabel: "核心感觉",
    coreMeaning:
      "可以把 as 理解成一种接近 “all so / also” 的学习模型：大家都如此，所以会有“相似”；事情一起如此，所以会有“相伴随”。这就形成了 as 的两条主线：相似、相伴随。",
    branches: [
      {
        label: "相似 -> 比较",
        description:
          "如果两个东西在某一点上“同样如此”，英语就能用 as ... as 把它们放在同一条刻度上比较。",
        examples: [
          "as quiet as the library",
          "as carefully as she could",
        ],
      },
      {
        label: "相似 / 视作同类 -> 身份、功能、用途",
        description:
          "如果某物被当成某种身份、类型或用途来看，英语就会用 as 标出它“在这里算作什么”。",
        examples: [
          "work as a teacher",
          "use the bench as a table",
        ],
      },
      {
        label: "相伴随 -> 时间伴随",
        description:
          "当一件事发生的时候，另一件事也伴随着发生，as 就能表示“当……时 / 随着……”。",
        examples: [
          "As I was leaving, the phone rang.",
          "As the sun went down, the air grew colder.",
        ],
      },
      {
        label: "相伴随 -> 原因背景",
        description:
          "如果一个情况在背景中伴随出现，并顺便解释了结果，as 就可以表示较轻的“因为”。",
        examples: [
          "As it was getting late, we took a taxi home.",
          "As no one objected, the plan went ahead.",
        ],
      },
      {
        label: "相伴随但不阻止结果 -> 让步",
        description:
          "正式表达里，即使某种情况伴随着存在，结果仍然照样发生，这时可以用倒装的 as 让步结构。",
        examples: [
          "Young as she is, she speaks with great confidence.",
          "Try as he might, he could not move it.",
        ],
      },
    ],
    note:
      "这里的 “all so / also” 不是在做严格历史语言学考据，而是一个帮助学习者把多种用法串成一条线的记忆模型。",
  },
  examples: [
    {
      en: "This room is as quiet as the library.",
      i18n: {
        en: { translation: "This room is as quiet as the library." },
        "zh-CN": { translation: "这个房间和图书馆一样安静。" },
      },
    },
    {
      en: "She spoke as a parent, not as a manager.",
      i18n: {
        en: { translation: "She spoke as a parent, not as a manager." },
        "zh-CN": { translation: "她是以家长身份发言，不是以经理身份发言。" },
      },
    },
    {
      en: "As I was crossing the street, it started to rain.",
      i18n: {
        en: { translation: "As I was crossing the street, it started to rain." },
        "zh-CN": { translation: "我正过马路的时候，开始下雨了。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "This room is as quiet as the library.",
        i18n: {
          en: { translation: "This room is as quiet as the library." },
          "zh-CN": { translation: "这个房间和图书馆一样安静。" },
        },
      },
      {
        en: "We used the bench as a temporary table.",
        i18n: {
          en: { translation: "We used the bench as a temporary table." },
          "zh-CN": { translation: "我们把长凳当临时桌子用。" },
        },
      },
      {
        en: "As the children grew older, they became more independent.",
        i18n: {
          en: {
            translation:
              "As the children grew older, they became more independent.",
          },
          "zh-CN": {
            translation: "随着孩子们长大，他们变得更独立了。",
          },
        },
      },
      {
        en: "As it was already midnight, we went straight home.",
        i18n: {
          en: {
            translation: "As it was already midnight, we went straight home.",
          },
          "zh-CN": { translation: "因为已经是半夜了，我们就直接回家了。" },
        },
      },
      {
        en: "Tired as he was, he kept working.",
        i18n: {
          en: { translation: "Tired as he was, he kept working." },
          "zh-CN": { translation: "虽然他很累，他还是继续工作。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "学 as 最好的方法，不是把每个意思硬拆开背，而是看它们怎样从一个核心感觉往外长出来。它可以表示相等比较，也可以表示身份/用途、时间伴随、较轻的原因和正式让步。",
    differences: [
      {
        term: "like",
        description:
          "like 主要说“像……一样”；as 可以表示 as ... as 的相等比较，也能表示身份/功能，如 work as a teacher、use it as a guide。",
        examples: [
          {
            term: "like",
            sentence: "She looks like her sister.",
            translation: "她看起来像她姐姐。",
          },
          {
            term: "as",
            sentence: "She works as her sister's assistant.",
            translation: "她担任她姐姐的助理。",
          },
        ],
      },
      {
        term: "because",
        description:
          "because 直接给出原因；as 更常给出背景性、语气较轻的原因说明。",
        examples: [
          {
            term: "because",
            sentence: "We stayed inside because it was storming.",
            translation: "因为暴风雨，我们待在室内。",
          },
          {
            term: "as",
            sentence: "As it was storming, we stayed inside.",
            translation: "由于当时正下着暴风雨，我们就待在室内。",
          },
        ],
      },
      {
        term: "when / while",
        description:
          "when 比较中性地标出时间点；while 更强调两个动作持续同时发生；as 常带有“一个过程伴随着另一个过程”的感觉。",
        examples: [
          {
            term: "when",
            sentence: "When I opened the door, the cat ran out.",
            translation: "当我开门时，猫跑了出去。",
          },
          {
            term: "as",
            sentence: "As I opened the door, the cat ran out.",
            translation: "我开门的同时，猫跑了出去。",
          },
        ],
      },
      {
        term: "although / though",
        description:
          "although / though 是最普通的让步表达；as 也能表示“虽然”，但通常出现在更正式的倒装结构里，如 Tired as he was ...。",
        examples: [
          {
            term: "although",
            sentence: "Although he was tired, he kept working.",
            translation: "虽然他累了，他还是继续工作。",
          },
          {
            term: "as",
            sentence: "Tired as he was, he kept working.",
            translation: "虽然他很累，他还是继续工作。",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "比较结构",
      items: [
        { phrase: "as soon as possible", meaning: "尽快" },
        { phrase: "as carefully as possible", meaning: "尽可能仔细地" },
        { phrase: "as much as I can", meaning: "尽我所能地" },
        { phrase: "as far as I know", meaning: "据我所知" },
        { phrase: "as long as you like", meaning: "你想多久都行" },
        { phrase: "as good as new", meaning: "几乎跟新的一样" },
      ],
    },
    {
      title: "身份 / 用途",
      items: [
        { phrase: "work as a teacher", meaning: "当老师工作" },
        { phrase: "serve as a reminder", meaning: "起提醒作用" },
        { phrase: "act as a guide", meaning: "充当向导" },
        { phrase: "use it as a tool", meaning: "把它当工具用" },
        { phrase: "see it as a chance", meaning: "把它看作机会" },
        { phrase: "describe him as calm", meaning: "把他描述为冷静" },
      ],
    },
    {
      title: "从句模式",
      items: [
        { phrase: "as I was leaving", meaning: "当我正要离开时" },
        { phrase: "as the sun rose", meaning: "随着太阳升起" },
        { phrase: "as it was late", meaning: "因为已经晚了" },
        { phrase: "as no one objected", meaning: "因为没人反对" },
        { phrase: "tired as he was", meaning: "虽然他很累" },
        { phrase: "try as he might", meaning: "尽管他怎么努力" },
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "She is as her sister.",
      correct: "She is like her sister. / She is as tall as her sister.",
      reason:
        "单纯表示“像”，通常用 like；as 用在 as ... as 的相等比较，或“作为……身份/用途”时更自然。",
    },
    {
      wrong: "We used the bench like a table.",
      correct: "We used the bench as a table.",
      reason:
        "这里重点是“长凳承担了桌子的功能”，所以更自然的是 use ... as ...。",
    },
    {
      wrong: "As he was tired, but he kept working.",
      correct: "Although he was tired, he kept working. / Tired as he was, he kept working.",
      reason:
        "不要把表示原因的 as 和另一个转折标记硬拼在一起。要么用 although/though，要么用正式倒装的 as 让步结构。",
    },
  ],
  quiz: [
    {
      prompt: "This bag is ___ heavy as the old one.",
      options: ["as", "like", "because"],
      answer: "as",
      explanation:
        "相等比较要用 as ... as：as heavy as the old one。",
    },
    {
      prompt: "She worked ___ an interpreter during the meeting.",
      options: ["as", "like", "while"],
      answer: "as",
      explanation:
        "这里说的是她在会议中的身份/角色，所以用 as。",
    },
    {
      prompt: "___ I was walking home, I saw the lights go out.",
      options: ["As", "Like", "Since"],
      answer: "As",
      explanation:
        "这里表示一个过程伴随着另一个过程发生，所以 as 相当于“当……时 / 正……的时候”。",
    },
  ],
  faq: [
    {
      question: "as 到底是介词还是连词？",
      answer:
        "两者都可以。它既能出现在 work as a teacher 这种身份/功能结构里，也能引导表示时间、原因和正式让步的从句。",
    },
    {
      question: "as 和 like 的区别是什么？",
      answer:
        "like 通常表示“像……一样”；as 可以表示 as ... as 的相等比较，也可以表示“作为……身份/用途”。",
    },
    {
      question: "为什么 as 会有“因为”的意思？",
      answer:
        "因为某个情况在背景中伴随着另一个结果出现时，它不仅共存，还会顺带解释这个结果，所以 as 可以引出较轻的原因。",
    },
    {
      question: "as 怎么表示时间？",
      answer:
        "当一个动作和另一个动作同时或伴随发生时，as 可以表示“当……时 / 随着……”。例如：As I was leaving, the phone rang.",
    },
    {
      question: "as ... as 和 as 的核心意思有什么关系？",
      answer:
        "它们都来自“相似 / 同样如此”这条主线。两个东西如果在某一点上同样如此，就能用 as ... as 来比较。",
    },
  ],
};

export default content;
