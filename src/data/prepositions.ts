import type {
  LearningCategory,
  PrepositionCollocationGroup,
  PrepositionEntry,
  PrepositionExample,
  PrepositionMistakeItem,
  PrepositionQuizItem,
} from "@/data/types";
import { DEFAULT_CAMERA, DEFAULT_CUBE, DEFAULT_RENDER } from "@/lib/scenePreset";

const ballRadius = 0.22;

function makeScene(
  position: [number, number, number],
  overrides?: Partial<PrepositionEntry["scene"]>,
): PrepositionEntry["scene"] {
  return {
    cube: DEFAULT_CUBE,
    ball: {
      radius: ballRadius,
      position,
    },
    camera: DEFAULT_CAMERA,
    render: DEFAULT_RENDER,
    ...(overrides ?? {}),
  };
}

type PrepositionEntryBase = Omit<PrepositionEntry, "relatedIds">;

const PREPOSITIONS_BASE: PrepositionEntryBase[] = [
  {
    id: "in",
    word: "in",
    tags: ["space", "inside", "containment"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……里面（被包住）",
        tips: ["强调被包裹、在边界之内。", "不接触表面时用 in，不是 on。"],
      },
      en: {
        meaning: "inside; enclosed by boundaries",
        tips: ["Fully contained within a space.", "Use in for enclosed, not on for surfaces."],
      },
    },
    examples: [
      {
        en: "The ball is in the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子里。" },
          en: { translation: "The ball is in the box." },
        },
      },
      {
        en: "The keys are in the drawer.",
        i18n: {
          "zh-CN": { translation: "钥匙在抽屉里。" },
          en: { translation: "The keys are in the drawer." },
        },
      },
    ],
    scene: makeScene([0, 0, 0]),
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "in 强调在边界之内；和 inside/into/on 等词相比，in 更偏静态位置。",
          differences: [
            {
              term: "inside",
              description: "inside 更强调边界与内部空间感，比 in 更“在里面”。",
              examples: [
                {
                  term: "inside",
                  sentence: "The keys are inside the box.",
                  translation: "钥匙在盒子内部。",
                },
                {
                  term: "in",
                  sentence: "The keys are in the box.",
                  translation: "钥匙在盒子里。",
                },
              ],
            },
            {
              term: "into",
              description: "into 表示从外到内的运动过程；in 只表示位置。",
              examples: [
                {
                  term: "into",
                  sentence: "The cat jumped into the box.",
                  translation: "猫跳进盒子里。",
                },
                {
                  term: "in",
                  sentence: "The cat is in the box.",
                  translation: "猫在盒子里。",
                },
              ],
            },
            {
              term: "on",
              description: "on 强调接触表面；in 强调被包在内部。",
              examples: [
                {
                  term: "on",
                  sentence: "The book is on the box.",
                  translation: "书在盒子上。",
                },
                {
                  term: "in",
                  sentence: "The book is in the box.",
                  translation: "书在盒子里。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "In focuses on being inside a boundary; compared with inside/into/on, it describes a static position.",
          differences: [
            {
              term: "inside",
              description:
                "Inside emphasizes the boundary and interior space more strongly.",
              examples: [
                {
                  term: "inside",
                  sentence: "The keys are inside the box.",
                },
                {
                  term: "in",
                  sentence: "The keys are in the box.",
                },
              ],
            },
            {
              term: "into",
              description:
                "Into is motion from outside to inside; in is a static location.",
              examples: [
                {
                  term: "into",
                  sentence: "The cat jumped into the box.",
                },
                {
                  term: "in",
                  sentence: "The cat is in the box.",
                },
              ],
            },
            {
              term: "on",
              description:
                "On means touching a surface; in means enclosed within.",
              examples: [
                {
                  term: "on",
                  sentence: "The book is on the box.",
                },
                {
                  term: "in",
                  sentence: "The book is in the box.",
                },
              ],
            },
          ],
        },
      },
    },
    collocations: {
      "zh-CN": [
        "in a taxi",
        "in a car",
        "in prison",
        "in the bedroom",
        "in the classroom",
        "in the garden",
        "in the park",
        "in the kitchen",
        "in a book",
        "in a picture",
        "in the newspaper",
        "in my pocket",
        "in my bag",
        "in a building",
        "in the city",
        "in the morning",
        "in the evening",
        "in a hurry",
        "in love",
        "in trouble",
        "in the hallway",
      ],
      en: [
        "in a taxi",
        "in a car",
        "in prison",
        "in the bedroom",
        "in the classroom",
        "in the garden",
        "in the park",
        "in the kitchen",
        "in a book",
        "in a picture",
        "in the newspaper",
        "in my pocket",
        "in my bag",
        "in a building",
        "in the city",
        "in the morning",
        "in the evening",
        "in a hurry",
        "in love",
        "in trouble",
        "in the hallway",
      ],
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "空间类",
          items: [
            { phrase: "in the room", meaning: "在房间里" },
            { phrase: "in the classroom", meaning: "在教室里" },
            { phrase: "in the kitchen", meaning: "在厨房里" },
            { phrase: "in my bag", meaning: "在我的包里" },
            { phrase: "in the park", meaning: "在公园里" },
            { phrase: "in the city", meaning: "在城市里" },
          ],
        },
        {
          title: "时间类",
          items: [
            { phrase: "in the morning", meaning: "在早上" },
            { phrase: "in the afternoon", meaning: "在下午" },
            { phrase: "in the evening", meaning: "在晚上" },
            { phrase: "in January", meaning: "在一月" },
            { phrase: "in 2026", meaning: "在 2026 年" },
            { phrase: "in two hours", meaning: "两小时后" },
          ],
        },
        {
          title: "抽象状态类",
          items: [
            { phrase: "in trouble", meaning: "陷入麻烦中" },
            { phrase: "in love", meaning: "在恋爱中 / 相爱" },
            { phrase: "in a hurry", meaning: "匆忙中" },
            { phrase: "in danger", meaning: "处于危险中" },
            { phrase: "in silence", meaning: "在沉默中 / 默默地" },
            { phrase: "in fact", meaning: "事实上" },
          ],
        },
      ],
      en: [
        {
          title: "Spatial",
          items: [
            "in the room",
            "in the classroom",
            "in the kitchen",
            "in my bag",
            "in the park",
            "in the city",
          ],
        },
        {
          title: "Time",
          items: [
            "in the morning",
            "in the afternoon",
            "in the evening",
            "in January",
            "in 2026",
            "in two hours",
          ],
        },
        {
          title: "Abstract states",
          items: [
            "in trouble",
            "in love",
            "in a hurry",
            "in danger",
            "in silence",
            "in fact",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The keys are at my bag.",
          correct: "The keys are in my bag.",
          reason: "包是有边界的容器，表达“在里面”用 in，不用 at。",
        },
        {
          wrong: "There is a bird in the roof.",
          correct: "There is a bird on the roof.",
          reason: "roof 是表面，强调接触时用 on，不用 in。",
        },
        {
          wrong: "The cat jumped in the box.",
          correct: "The cat jumped into the box.",
          reason: "jumped 是动态进入过程，应用 into；in 只描述位置。",
        },
        {
          wrong: "I will finish this in Monday.",
          correct: "I will finish this on Monday.",
          reason: "具体到星期几一般用 on；in 常用于月份、年份或较长时间段。",
        },
      ],
      en: [
        {
          wrong: "The keys are at my bag.",
          correct: "The keys are in my bag.",
          reason: "A bag is an enclosed container, so use in for inside position.",
        },
        {
          wrong: "There is a bird in the roof.",
          correct: "There is a bird on the roof.",
          reason: "A roof is treated as a surface, so use on for contact.",
        },
        {
          wrong: "The cat jumped in the box.",
          correct: "The cat jumped into the box.",
          reason: "Jumped expresses motion into a space, so into is needed.",
        },
        {
          wrong: "I will finish this in Monday.",
          correct: "I will finish this on Monday.",
          reason: "Use on with days; in is for months, years, or longer periods.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "My phone is ___ my bag.",
          options: ["in", "on", "under"],
          answer: "in",
          explanation: "手机在包的内部空间，所以用 in。",
        },
        {
          prompt: "We usually study ___ the morning.",
          options: ["in", "on", "at"],
          answer: "in",
          explanation: "morning 是时间段，固定搭配是 in the morning。",
        },
        {
          prompt: "She walked ___ the room and sat down.",
          options: ["in", "into", "on"],
          answer: "into",
          explanation: "walked 表示进入的动态过程，用 into 更准确。",
        },
      ],
      en: [
        {
          prompt: "My phone is ___ my bag.",
          options: ["in", "on", "under"],
          answer: "in",
          explanation: "Use in because the phone is inside an enclosed space.",
        },
        {
          prompt: "We usually study ___ the morning.",
          options: ["in", "on", "at"],
          answer: "in",
          explanation: "Morning is a time period, so the collocation is in the morning.",
        },
        {
          prompt: "She walked ___ the room and sat down.",
          options: ["in", "into", "on"],
          answer: "into",
          explanation: "Use into for movement from outside to inside.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "介词 in 的核心含义是什么？",
          answer:
            "in 的核心是“在边界之内”。当人或物体被一个空间包住时，优先用 in。例：The keys are in the bag.",
        },
        {
          question: "in 和 on 的区别怎么快速判断？",
          answer:
            "先问“是否接触表面”。接触表面用 on；在容器或空间内部用 in。例：in the box vs on the box。",
        },
        {
          question: "in 和 into 有什么区别？",
          answer:
            "in 描述静态位置；into 描述“从外到内”的运动过程。例：The cat is in the box. / The cat jumped into the box.",
        },
        {
          question: "in 在时间表达里怎么用？",
          answer:
            "in 常用于较大的时间段：月份、年份、季节、一天中的时段。例：in July, in 2026, in winter, in the morning。",
        },
        {
          question: "in 在时间里什么时候不要用？",
          answer:
            "具体日期和星期通常不用 in。用 on Monday / on July 1；具体时刻用 at 7:00。",
        },
        {
          question: "初学者用 in 最常见的错误是什么？",
          answer:
            "常把 in 用在“表面接触”场景。应说 on the roof，不说 in the roof；应说 in my bag，不说 at my bag。",
        },
        {
          question: "in 的高频搭配有哪些？",
          answer:
            "高频组合：in the room, in the morning, in 2026, in trouble, in a hurry, in love。",
        },
        {
          question: "如何在 30 秒内记住 in 的用法？",
          answer:
            "记住一句规则：inside a boundary -> in。再复述两个对比：in the box（内部）/ on the box（表面）。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of the preposition in?",
          answer:
            "The core meaning is inside a boundary. Use in when a person or thing is enclosed by a space. Example: The keys are in the bag.",
        },
        {
          question: "How do I quickly choose between in and on?",
          answer:
            "Ask one question: is it touching a surface? Use on for surface contact, and in for enclosed space. Example: in the box vs on the box.",
        },
        {
          question: "What is the difference between in and into?",
          answer:
            "In is a static position; into is movement from outside to inside. Example: The cat is in the box. / The cat jumped into the box.",
        },
        {
          question: "How is in used in time expressions?",
          answer:
            "Use in with larger time units: months, years, seasons, and parts of the day. Example: in July, in 2026, in winter, in the morning.",
        },
        {
          question: "When should I not use in for time?",
          answer:
            "Do not use in with specific days or dates. Use on Monday / on July 1, and use at for exact clock time.",
        },
        {
          question: "What is a common learner mistake with in?",
          answer:
            "Learners overuse in for surface situations. Say on the roof, not in the roof; say in my bag, not at my bag.",
        },
        {
          question: "What are common collocations with in?",
          answer:
            "High-frequency collocations include: in the room, in the morning, in 2026, in trouble, in a hurry, and in love.",
        },
        {
          question: "What is a 30-second memory rule for in?",
          answer:
            "Use this rule: inside a boundary -> in. Then rehearse a contrast pair: in the box (inside) vs on the box (surface).",
        },
      ],
    },
  },
  {
    id: "on",
    word: "on",
    tags: ["space", "contact", "surface"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……上面（接触表面）；（时间）用于星期/日期",
        tips: [
          "接触表面 -> 用 on。",
          "星期/具体日期 -> 用 on（on Monday / on July 1）。",
          "不接触仅在上方 -> above/over；有“落到表面”的动作 -> onto。",
        ],
      },
      en: {
        meaning: "touching a surface; (time) used with days and dates",
        tips: [
          "Surface contact -> on.",
          "Days and dates -> on (on Monday / on July 1).",
          "No contact -> above/over; movement to a surface -> onto.",
        ],
      },
    },
    examples: [
      {
        en: "The ball is on the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子上面。" },
          en: { translation: "The ball is on the box." },
        },
      },
      {
        en: "The book is on the table.",
        i18n: {
          "zh-CN": { translation: "书在桌子上。" },
          en: { translation: "The book is on the table." },
        },
      },
    ],
    scene: makeScene([0, 0.7, 0]),
    examplesByCategory: {
      space: [
        {
          en: "The book is on the table.",
          i18n: {
            "zh-CN": { translation: "书在桌子上。" },
            en: { translation: "The book is on the table." },
          },
        },
        {
          en: "A sticker is on the box.",
          i18n: {
            "zh-CN": { translation: "贴纸在盒子上。" },
            en: { translation: "A sticker is on the box." },
          },
        },
      ],
      time: [
        {
          en: "We have class on Monday.",
          i18n: {
            "zh-CN": { translation: "我们在星期一上课。" },
            en: { translation: "We have class on Monday." },
          },
        },
        {
          en: "My birthday is on July 1.",
          i18n: {
            "zh-CN": { translation: "我的生日在 7 月 1 日。" },
            en: { translation: "My birthday is on July 1." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "on 的核心是“接触表面”；在时间表达中常用于星期与具体日期。常与 in/onto/over 混淆。",
          differences: [
            {
              term: "in",
              description: "in 表示在内部；on 表示接触表面。",
              examples: [
                {
                  term: "in",
                  sentence: "The keys are in the box.",
                  translation: "钥匙在盒子里。",
                },
                {
                  term: "on",
                  sentence: "The keys are on the box.",
                  translation: "钥匙在盒子上。",
                },
              ],
            },
            {
              term: "onto",
              description: "onto 表示移动到表面；on 表示已在表面上。",
              examples: [
                {
                  term: "onto",
                  sentence: "He climbed onto the box.",
                  translation: "他爬到盒子上。",
                },
                {
                  term: "on",
                  sentence: "He is on the box.",
                  translation: "他在盒子上。",
                },
              ],
            },
            {
              term: "over",
              description: "over 在上方不一定接触；on 必须接触。",
              examples: [
                {
                  term: "over",
                  sentence: "A lamp hangs over the table.",
                  translation: "灯悬挂在桌子上方。",
                },
                {
                  term: "on",
                  sentence: "A lamp is on the table.",
                  translation: "灯在桌子上。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "On mainly means surface contact. In time expressions, it is common with days and specific dates.",
          differences: [
            {
              term: "in",
              description: "In is inside; on is on a surface (touching).",
              examples: [
                {
                  term: "in",
                  sentence: "The keys are in the box.",
                },
                {
                  term: "on",
                  sentence: "The keys are on the box.",
                },
              ],
            },
            {
              term: "onto",
              description: "Onto is movement to a surface; on is a position on it.",
              examples: [
                {
                  term: "onto",
                  sentence: "He climbed onto the box.",
                },
                {
                  term: "on",
                  sentence: "He is on the box.",
                },
              ],
            },
            {
              term: "over",
              description: "Over can be above without contact; on requires contact.",
              examples: [
                {
                  term: "over",
                  sentence: "A lamp hangs over the table.",
                },
                {
                  term: "on",
                  sentence: "A lamp is on the table.",
                },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "表面/接触类",
          items: [
            { phrase: "on the table", meaning: "在桌子上" },
            { phrase: "on the wall", meaning: "在墙上" },
            { phrase: "on the floor", meaning: "在地板上" },
            { phrase: "on the roof", meaning: "在屋顶上" },
            { phrase: "on the screen", meaning: "在屏幕上" },
            { phrase: "on the left", meaning: "在左边" },
          ],
        },
        {
          title: "时间类",
          items: [
            { phrase: "on Monday", meaning: "在星期一" },
            { phrase: "on Tuesday", meaning: "在星期二" },
            { phrase: "on July 1", meaning: "在 7 月 1 日" },
            { phrase: "on my birthday", meaning: "在我生日那天" },
            { phrase: "on the weekend", meaning: "在周末" },
            { phrase: "on Monday morning", meaning: "在周一早上" },
          ],
        },
        {
          title: "抽象/常用表达",
          items: [
            { phrase: "on time", meaning: "准时" },
            { phrase: "on schedule", meaning: "按计划" },
            { phrase: "on duty", meaning: "值班/在岗" },
            { phrase: "on sale", meaning: "在打折" },
            { phrase: "on the phone", meaning: "在打电话/电话里" },
            { phrase: "on the internet", meaning: "在网上" },
          ],
        },
      ],
      en: [
        {
          title: "Surface contact",
          items: [
            "on the table",
            "on the wall",
            "on the floor",
            "on the roof",
            "on the screen",
            "on the left",
          ],
        },
        {
          title: "Time (days/dates)",
          items: [
            "on Monday",
            "on Tuesday",
            "on July 1",
            "on my birthday",
            "on the weekend",
            "on Monday morning",
          ],
        },
        {
          title: "Common phrases",
          items: [
            "on time",
            "on schedule",
            "on duty",
            "on sale",
            "on the phone",
            "on the internet",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The book is in the table.",
          correct: "The book is on the table.",
          reason: "table 是表面，强调接触时用 on，不用 in。",
        },
        {
          wrong: "I will see you in Monday.",
          correct: "I will see you on Monday.",
          reason: "具体到星期几一般用 on；in 多用于月份、年份或较长时间段。",
        },
        {
          wrong: "I was born on 2010.",
          correct: "I was born in 2010.",
          reason: "年份通常用 in（in 2010），而不是 on。",
        },
        {
          wrong: "I am on a taxi.",
          correct: "I am in a taxi.",
          reason:
            "taxi/car 这类封闭空间通常用 in；on 更常用于 bus/train/bike 这类“平台式”交通工具。",
        },
      ],
      en: [
        {
          wrong: "The book is in the table.",
          correct: "The book is on the table.",
          reason: "A table is a surface, so use on for contact.",
        },
        {
          wrong: "I will see you in Monday.",
          correct: "I will see you on Monday.",
          reason: "Use on with days; in is for months, years, or longer periods.",
        },
        {
          wrong: "I was born on 2010.",
          correct: "I was born in 2010.",
          reason: "Use in with years (in 2010), not on.",
        },
        {
          wrong: "I am on a taxi.",
          correct: "I am in a taxi.",
          reason:
            "Taxis/cars are enclosed spaces, so in is typical; on is common for buses/trains/bikes.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "The picture is ___ the wall.",
          options: ["on", "in", "under"],
          answer: "on",
          explanation: "墙是表面，图片贴在表面上，用 on。",
        },
        {
          prompt: "We have class ___ Monday.",
          options: ["on", "in", "at"],
          answer: "on",
          explanation: "星期几用 on：on Monday。",
        },
        {
          prompt: "He climbed ___ the roof.",
          options: ["on", "onto", "into"],
          answer: "onto",
          explanation: "climbed 表示移动到表面上，用 onto；到达后才是 on。",
        },
      ],
      en: [
        {
          prompt: "The picture is ___ the wall.",
          options: ["on", "in", "under"],
          answer: "on",
          explanation: "Use on because the picture is on a surface (the wall).",
        },
        {
          prompt: "We have class ___ Monday.",
          options: ["on", "in", "at"],
          answer: "on",
          explanation: "Use on with days: on Monday.",
        },
        {
          prompt: "He climbed ___ the roof.",
          options: ["on", "onto", "into"],
          answer: "onto",
          explanation: "Onto highlights movement to a surface; on is the final position.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "介词 on 的核心含义是什么？",
          answer:
            "on 的核心是“接触表面”。物体与表面接触时用 on。时间表达里，on 也常用于星期与具体日期。例：on the table / on Monday。",
        },
        {
          question: "on 和 in 怎么快速区分？",
          answer:
            "先问“是否接触表面”。接触表面用 on；在容器/空间内部用 in。例：on the box（表面）vs in the box（内部）。",
        },
        {
          question: "on 和 onto 有什么区别？",
          answer:
            "on 描述位置（已经在表面上）；onto 描述动作（移动到表面上）。例：He climbed onto the roof. / He is on the roof.",
        },
        {
          question: "on 和 over/above 的区别是什么？",
          answer:
            "on 必须接触；over/above 可以只在上方不接触。例：A lamp hangs over the table（悬挂）vs A lamp is on the table（放在桌上）。",
        },
        {
          question: "on 在时间表达里怎么用？",
          answer:
            "on 常用于星期与具体日期：on Monday, on July 1。时间点用 at（at 7:00），月份/年份/早中晚等时间段用 in（in July / in 2026 / in the morning）。",
        },
        {
          question: "为什么是 on the bus，但 in the car？",
          answer:
            "初学者可先用“平台感”记忆：bus/train/bike 更像站在平台上 -> on；car/taxi 更像封闭空间 -> in。实际用法也会随语境变化，但这是好用的入门规则。",
        },
        {
          question: "初学者用 on 最常见的错误有哪些？",
          answer:
            "最常见是把 on 用错到年份/月份（应 in 2010 / in July），或把 in 用错到星期/日期（应 on Monday / on July 1），以及把 taxi/car 误用成 on。",
        },
        {
          question: "如何在 30 秒内记住 on？",
          answer:
            "记两条：touching a surface -> on；days/dates -> on。然后复述一对对比：on the box（表面）/ in the box（内部）。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of the preposition on?",
          answer:
            "The core meaning is surface contact. Use on when something touches a surface. In time, on is also common with days and specific dates. Example: on the table / on Monday.",
        },
        {
          question: "How do I quickly choose between on and in?",
          answer:
            "Ask one question: is it touching a surface? Use on for surface contact, and in for being inside a container or boundary. Example: on the box vs in the box.",
        },
        {
          question: "What is the difference between on and onto?",
          answer:
            "On is a position (already on the surface). Onto is movement to the surface. Example: He climbed onto the roof. / He is on the roof.",
        },
        {
          question: "What is the difference between on and over/above?",
          answer:
            "On requires contact. Over/above can be above without contact. Example: A lamp hangs over the table vs A lamp is on the table.",
        },
        {
          question: "How is on used for time?",
          answer:
            "Use on with days and specific dates: on Monday, on July 1. Use at for exact clock time (at 7:00), and use in for months/years/periods (in July / in 2026 / in the morning).",
        },
        {
          question: "Why do we say on the bus but in the car?",
          answer:
            "A beginner rule: buses/trains/bikes feel like platforms, so on is common; cars/taxis feel enclosed, so in is typical. Context can affect the choice, but this rule works well.",
        },
        {
          question: "What are common learner mistakes with on?",
          answer:
            "Learners often use on with years/months (use in 2010 / in July), or use in with days/dates (use on Monday / on July 1). Another common confusion is on a taxi (usually in a taxi).",
        },
        {
          question: "What is a 30-second memory rule for on?",
          answer:
            "Memorize two cues: touching a surface -> on; days/dates -> on. Then rehearse a contrast pair: on the box (surface) vs in the box (inside).",
        },
      ],
    },
  },
  {
    id: "under",
    word: "under",
    tags: ["space", "below", "time", "limit"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……下面；低于（时间/数量上限）",
        tips: [
          "空间里：under 常表示在某物正下方，带“被上方覆盖/遮挡”的感觉。",
          "时间或数量里：under 表示“少于、低于某上限”（如 under an hour）。",
          "和 below 比：below 更中性，只表示更低，不一定有覆盖关系。",
        ],
      },
      en: {
        meaning: "below and often covered by something above; also less than a limit",
        tips: [
          "For space, under is often directly below with possible cover from above.",
          "For time/quantity, under means less than a threshold (under an hour, under $50).",
          "Compared with below, under usually feels more physical and concrete.",
        ],
      },
    },
    examples: [
      {
        en: "The cat is under the table.",
        i18n: {
          "zh-CN": { translation: "猫在桌子下面。" },
          en: { translation: "The cat is under the table." },
        },
      },
      {
        en: "The repair took under an hour.",
        i18n: {
          "zh-CN": { translation: "维修不到一小时就完成了。" },
          en: { translation: "The repair took under an hour." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "The cat is under the table.",
          i18n: {
            "zh-CN": { translation: "猫在桌子下面。" },
            en: { translation: "The cat is under the table." },
          },
        },
        {
          en: "We found the note under the pillow.",
          i18n: {
            "zh-CN": { translation: "我们在枕头下面找到了那张纸条。" },
            en: { translation: "We found the note under the pillow." },
          },
        },
      ],
      time: [
        {
          en: "The repair took under an hour.",
          i18n: {
            "zh-CN": { translation: "维修不到一小时就完成了。" },
            en: { translation: "The repair took under an hour." },
          },
        },
        {
          en: "Children under five can enter for free.",
          i18n: {
            "zh-CN": { translation: "五岁以下儿童可免费入场。" },
            en: { translation: "Children under five can enter for free." },
          },
        },
      ],
    },
    scene: makeScene([0, -0.84, 0]),
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "under 既能表示空间中的“在下方（常有遮挡感）”，也能表示“低于上限”。学习时先判断是空间关系还是“少于”关系。",
          differences: [
            {
              term: "below",
              description: "below 仅表示更低的位置；under 更强调正下方、覆盖或压在下面。",
              examples: [
                {
                  term: "below",
                  sentence: "The temperature is below zero.",
                  translation: "温度在零度以下。",
                },
                {
                  term: "under",
                  sentence: "The cat is under the table.",
                  translation: "猫在桌子下面。",
                },
              ],
            },
            {
              term: "underneath",
              description:
                "underneath 更强调“正下方”且语气更口语；under 更常用、更中性。",
              examples: [
                {
                  term: "underneath",
                  sentence: "The toy is underneath the sofa.",
                  translation: "玩具在沙发正下方。",
                },
                {
                  term: "under",
                  sentence: "The toy is under the sofa.",
                  translation: "玩具在沙发下面。",
                },
              ],
            },
            {
              term: "within",
              description:
                "within 强调“在某期限之内完成”；under 强调“少于某时长/数量上限”。",
              examples: [
                {
                  term: "within",
                  sentence: "Please reply within an hour.",
                  translation: "请在一小时内回复。",
                },
                {
                  term: "under",
                  sentence: "We finished in under an hour.",
                  translation: "我们用不到一小时就完成了。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Under has two high-value uses for beginners: spatial position directly below (often with cover), and limits that are lower than a threshold.",
          differences: [
            {
              term: "below",
              description:
                "Below is neutral vertical position. Under is usually more physical: directly below, often with something above it.",
              examples: [
                {
                  term: "below",
                  sentence: "The temperature is below zero.",
                },
                {
                  term: "under",
                  sentence: "The cat is under the table.",
                },
              ],
            },
            {
              term: "underneath",
              description:
                "Underneath emphasizes directly under and sounds a bit more conversational. Under is broader and more common.",
              examples: [
                {
                  term: "underneath",
                  sentence: "The toy is underneath the sofa.",
                },
                {
                  term: "under",
                  sentence: "The toy is under the sofa.",
                },
              ],
            },
            {
              term: "within",
              description:
                "Within means before a deadline inside a time window; under means less than an amount (time/number/price).",
              examples: [
                {
                  term: "within",
                  sentence: "Please reply within an hour.",
                },
                {
                  term: "under",
                  sentence: "We finished in under an hour.",
                },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "空间位置类",
          items: [
            { phrase: "under the table", meaning: "在桌子下面" },
            { phrase: "under the bed", meaning: "在床下面" },
            { phrase: "under the chair", meaning: "在椅子下面" },
            { phrase: "under the bridge", meaning: "在桥下" },
            { phrase: "under the tree", meaning: "在树下" },
            { phrase: "under the blanket", meaning: "在毯子下面" },
          ],
        },
        {
          title: "时间/数量上限类",
          items: [
            { phrase: "under an hour", meaning: "不到一小时" },
            { phrase: "under 30 minutes", meaning: "不到 30 分钟" },
            { phrase: "under a week", meaning: "不到一周" },
            { phrase: "under $50", meaning: "低于 50 美元" },
            { phrase: "under 10 people", meaning: "少于 10 人" },
            { phrase: "under five years old", meaning: "五岁以下" },
          ],
        },
        {
          title: "状态与过程类",
          items: [
            { phrase: "under pressure", meaning: "在压力之下" },
            { phrase: "under control", meaning: "处于可控状态" },
            { phrase: "under review", meaning: "在审核中" },
            { phrase: "under construction", meaning: "在建设中" },
            { phrase: "under discussion", meaning: "在讨论中" },
            { phrase: "under investigation", meaning: "在调查中" },
          ],
        },
      ],
      en: [
        {
          title: "Spatial position",
          items: [
            "under the table",
            "under the bed",
            "under the chair",
            "under the bridge",
            "under the tree",
            "under the blanket",
          ],
        },
        {
          title: "Time/quantity limits",
          items: [
            "under an hour",
            "under 30 minutes",
            "under a week",
            "under $50",
            "under 10 people",
            "under five years old",
          ],
        },
        {
          title: "States and process",
          items: [
            "under pressure",
            "under control",
            "under review",
            "under construction",
            "under discussion",
            "under investigation",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The cat is below the table.",
          correct: "The cat is under the table.",
          reason: "表示“在桌子正下方”时，under 更自然；below 在这里语气偏中性、距离感更强。",
        },
        {
          wrong: "The project took below two hours.",
          correct: "The project took under two hours.",
          reason: "表示“少于某时长”时用 under，不用 below。",
        },
        {
          wrong: "Please finish under an hour.",
          correct: "Please finish within an hour.",
          reason: "如果强调“在截止时间内完成”，within 更合适；under 更像“总时长少于”。",
        },
      ],
      en: [
        {
          wrong: "The cat is below the table.",
          correct: "The cat is under the table.",
          reason:
            "For a physical object directly beneath something, under is more natural than below.",
        },
        {
          wrong: "The project took below two hours.",
          correct: "The project took under two hours.",
          reason:
            "Use under for numeric/time limits. Below is less natural for this pattern.",
        },
        {
          wrong: "Please finish under an hour.",
          correct: "Please finish within an hour.",
          reason:
            "Within stresses deadline completion inside a time window; under stresses amount less than a threshold.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Choose the correct preposition: The shoes are ___ the bed.",
          options: ["under", "below", "on"],
          answer: "under",
          explanation: "这里是具体物体在床正下方，under 最自然。",
        },
        {
          prompt: "Choose the correct preposition: The task took ___ an hour.",
          options: ["under", "within", "over"],
          answer: "under",
          explanation: "表达“不到一小时”时，under 表示低于该时长上限。",
        },
        {
          prompt: "Choose the correct preposition: The report is still ___ review.",
          options: ["under", "on", "in"],
          answer: "under",
          explanation: "固定搭配是 under review。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: The shoes are ___ the bed.",
          options: ["under", "below", "on"],
          answer: "under",
          explanation:
            "This is a direct physical position beneath the bed, so under is the best choice.",
        },
        {
          prompt: "Choose the correct preposition: The task took ___ an hour.",
          options: ["under", "within", "over"],
          answer: "under",
          explanation:
            "Under expresses an amount lower than the threshold (less than one hour).",
        },
        {
          prompt: "Choose the correct preposition: The report is still ___ review.",
          options: ["under", "on", "in"],
          answer: "under",
          explanation: "The fixed collocation is under review.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "“under”作为介词最核心的意思是什么？",
          answer:
            "核心有两层：空间里表示“在……下面（常有覆盖感）”；时间/数量里表示“低于某上限”（如 under an hour）。",
        },
        {
          question: "under 和 below 的区别是什么？",
          answer:
            "under 更像“正下方、被上方覆盖”；below 更中性，只表示更低的位置。比如 under the table 更自然。",
        },
        {
          question: "under 和 underneath 如何区分？",
          answer:
            "under 更常见更中性；underneath 更强调“正下方”，口语里更有画面感。",
        },
        {
          question: "under 可以用于时间表达吗？",
          answer:
            "可以。常用于“少于某时长/上限”：under an hour, under 30 minutes。",
        },
        {
          question: "under 和 within 在时间上怎么选？",
          answer:
            "under 强调总量少于上限；within 强调在截止窗口内完成。对比：in under an hour vs within an hour。",
        },
        {
          question: "under 的高频搭配有哪些？",
          answer:
            "常见有 under the table, under pressure, under review, under control, under construction。",
        },
        {
          question: "学习 under 最容易犯什么错？",
          answer:
            "常见错是把“少于时长”写成 below two hours，或把“截止时间内”误写成 under an hour。",
        },
        {
          question: "30 秒记住 under 的方法是什么？",
          answer:
            "记两条：空间=在下方（有覆盖感）；时间/数量=低于上限。再用两个句子各造一遍即可。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of the under preposition?",
          answer:
            "Under mainly means directly below (often with something above), and it also means less than a limit in time/quantity (under an hour, under $50).",
        },
        {
          question: "What is the difference between under and below?",
          answer:
            "Under is usually more physical and concrete (directly beneath). Below is more neutral for vertical level.",
        },
        {
          question: "What is the difference between under and underneath?",
          answer:
            "Both can mean below, but underneath often sounds more emphatic or conversational for direct physical position.",
        },
        {
          question: "Can under be used for time expressions?",
          answer:
            "Yes. Use it for limits lower than a threshold: under an hour, under 30 minutes, under a week.",
        },
        {
          question: "How do I choose between under and within for time?",
          answer:
            "Use under for amount less than a limit; use within for completion before a deadline window.",
        },
        {
          question: "What are high-frequency under collocations?",
          answer:
            "Common ones include under the table, under pressure, under review, under control, and under construction.",
        },
        {
          question: "What is a common learner mistake with under?",
          answer:
            "Many learners use below for numeric limits (below two hours). In this pattern, under is usually the better choice.",
        },
        {
          question: "What is a 30-second memory rule for under?",
          answer:
            "Memorize two cues: physical below (often covered) and less-than limit. Then practice one space sentence and one time sentence.",
        },
      ],
    },
  },
  {
    id: "over",
    word: "over",
    tags: ["space", "above", "movement", "time", "more-than"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……上方并跨越；在……期间；超过（数量/标准）",
        tips: [
          "空间上，over 常表示“在上方且跨越”，通常不接触表面。",
          "时间上，over 常表示“在一段时间里”（over the weekend, over time）。",
          "数量上，over 表示“超过”（over $50, over 100 people）。",
        ],
      },
      en: {
        meaning: "above and across; during a period; more than a number",
        tips: [
          "For space, over often means above with crossing, usually without contact.",
          "For time, over means during a span (over the weekend, over time).",
          "For quantity, over means more than a threshold (over $50, over 100 people).",
        ],
      },
    },
    examples: [
      {
        en: "A bird flew over the wall.",
        i18n: {
          "zh-CN": { translation: "一只鸟飞过了墙上方。" },
          en: { translation: "A bird flew over the wall." },
        },
      },
      {
        en: "We worked on the report over the weekend.",
        i18n: {
          "zh-CN": { translation: "我们在周末期间完成了报告。" },
          en: { translation: "We worked on the report over the weekend." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "A bird flew over the wall.",
          i18n: {
            "zh-CN": { translation: "一只鸟飞过了墙上方。" },
            en: { translation: "A bird flew over the wall." },
          },
        },
        {
          en: "There is a bridge over the river.",
          i18n: {
            "zh-CN": { translation: "河上有一座桥。" },
            en: { translation: "There is a bridge over the river." },
          },
        },
      ],
      time: [
        {
          en: "We worked on the report over the weekend.",
          i18n: {
            "zh-CN": { translation: "我们在周末期间完成了报告。" },
            en: { translation: "We worked on the report over the weekend." },
          },
        },
        {
          en: "Sales improved over the past year.",
          i18n: {
            "zh-CN": { translation: "过去一年里销售额有所提升。" },
            en: { translation: "Sales improved over the past year." },
          },
        },
      ],
      dynamic: [
        {
          en: "The drone passed over the stadium.",
          i18n: {
            "zh-CN": { translation: "无人机从体育场上空飞过。" },
            en: { translation: "The drone passed over the stadium." },
          },
        },
        {
          en: "She jumped over the puddle.",
          i18n: {
            "zh-CN": { translation: "她跳过了水坑。" },
            en: { translation: "She jumped over the puddle." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "over 不是单一“在上方”。它常同时带有“跨越”或“时间跨度/数量超出”的信息，是初学者最容易混淆但也最高频的介词之一。",
          differences: [
            {
              term: "above",
              description:
                "above 只强调“更高位置”；over 常暗示覆盖或跨越关系。若只是静态高低对比，用 above 更精确。",
              examples: [
                {
                  term: "above",
                  sentence: "The clock is above the door.",
                  translation: "时钟在门上方。",
                },
                {
                  term: "over",
                  sentence: "A plane flew over the city.",
                  translation: "一架飞机从城市上空飞过。",
                },
              ],
            },
            {
              term: "across",
              description:
                "across 强调从一侧到另一侧（常在同一平面上）；over 强调“在上方跨过”。",
              examples: [
                {
                  term: "across",
                  sentence: "She walked across the street.",
                  translation: "她走过了街道。",
                },
                {
                  term: "over",
                  sentence: "She jumped over the fence.",
                  translation: "她跳过了栅栏。",
                },
              ],
            },
            {
              term: "through",
              description:
                "through 是“从内部穿过”；over 是“从上方跨过”。看是否进入内部通道即可快速判断。",
              examples: [
                {
                  term: "through",
                  sentence: "The train went through the tunnel.",
                  translation: "火车穿过了隧道（内部）。",
                },
                {
                  term: "over",
                  sentence: "The train went over the bridge.",
                  translation: "火车从桥上开过去。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Over is not only 'above'. It often adds crossing, duration, or quantity-over-threshold meaning, so choosing the right contrast is key.",
          differences: [
            {
              term: "above",
              description:
                "Above is pure higher position. Over often carries crossing or covering nuance in addition to being above.",
              examples: [
                { term: "above", sentence: "The clock is above the door." },
                { term: "over", sentence: "A plane flew over the city." },
              ],
            },
            {
              term: "across",
              description:
                "Across emphasizes side-to-side movement on a surface/area. Over emphasizes movement above something.",
              examples: [
                { term: "across", sentence: "She walked across the street." },
                { term: "over", sentence: "She jumped over the fence." },
              ],
            },
            {
              term: "through",
              description:
                "Through means moving inside an enclosed space; over means passing above it.",
              examples: [
                { term: "through", sentence: "The train went through the tunnel." },
                { term: "over", sentence: "The train went over the bridge." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "空间与跨越类",
          items: [
            { phrase: "over the wall", meaning: "越过墙" },
            { phrase: "over the bridge", meaning: "从桥上经过" },
            { phrase: "over the river", meaning: "在河上方/跨过河" },
            { phrase: "over the fence", meaning: "越过篱笆" },
            { phrase: "over the roof", meaning: "在屋顶上方" },
            { phrase: "over the city", meaning: "在城市上空" },
          ],
        },
        {
          title: "时间跨度类",
          items: [
            { phrase: "over the weekend", meaning: "在周末期间" },
            { phrase: "over time", meaning: "随着时间推移" },
            { phrase: "over the years", meaning: "这些年里" },
            { phrase: "over the past month", meaning: "过去一个月里" },
            { phrase: "over the holidays", meaning: "在假期期间" },
            { phrase: "over three days", meaning: "在三天时间里" },
          ],
        },
        {
          title: "数量超出类",
          items: [
            { phrase: "over $50", meaning: "超过 50 美元" },
            { phrase: "over 100 people", meaning: "超过 100 人" },
            { phrase: "over 20%", meaning: "超过 20%" },
            { phrase: "over 18", meaning: "超过 18 岁" },
            { phrase: "over 10 miles", meaning: "超过 10 英里" },
            { phrase: "over the limit", meaning: "超过上限" },
          ],
        },
      ],
      en: [
        {
          title: "Space and crossing",
          items: [
            "over the wall",
            "over the bridge",
            "over the river",
            "over the fence",
            "over the roof",
            "over the city",
          ],
        },
        {
          title: "Time span",
          items: [
            "over the weekend",
            "over time",
            "over the years",
            "over the past month",
            "over the holidays",
            "over three days",
          ],
        },
        {
          title: "More than",
          items: [
            "over $50",
            "over 100 people",
            "over 20%",
            "over 18",
            "over 10 miles",
            "over the limit",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The book is over the table. (book touches the table)",
          correct: "The book is on the table.",
          reason: "如果有接触，用 on；over 通常不强调接触。",
        },
        {
          wrong: "The train went over the tunnel.",
          correct: "The train went through the tunnel.",
          reason: "隧道是内部通道，应用 through，不是 over。",
        },
        {
          wrong: "I will finish it in the weekend.",
          correct: "I will finish it over the weekend.",
          reason: "表示“在周末这段时间里”，美式英语常用 over the weekend。",
        },
      ],
      en: [
        {
          wrong: "The book is over the table. (when it is touching)",
          correct: "The book is on the table.",
          reason:
            "Use on for surface contact. Over usually does not express direct contact.",
        },
        {
          wrong: "The train went over the tunnel.",
          correct: "The train went through the tunnel.",
          reason:
            "A tunnel is an inside path, so through is the correct relation.",
        },
        {
          wrong: "I will finish it in the weekend.",
          correct: "I will finish it over the weekend.",
          reason:
            "For duration during the weekend, over the weekend is a strong default in American usage.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Choose the correct preposition: The cat jumped ___ the fence.",
          options: ["over", "through", "on"],
          answer: "over",
          explanation: "强调“从上方跨越障碍”时用 over。",
        },
        {
          prompt: "Choose the correct preposition: We talked about it ___ the weekend.",
          options: ["over", "at", "through"],
          answer: "over",
          explanation: "表示“在周末期间”用 over the weekend。",
        },
        {
          prompt: "Choose the correct preposition: The ticket costs ___ $50.",
          options: ["over", "on", "inside"],
          answer: "over",
          explanation: "表达“超过某数量”时用 over。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: The cat jumped ___ the fence.",
          options: ["over", "through", "on"],
          answer: "over",
          explanation: "Over is used for crossing above a barrier.",
        },
        {
          prompt: "Choose the correct preposition: We talked about it ___ the weekend.",
          options: ["over", "at", "through"],
          answer: "over",
          explanation: "Over the weekend expresses duration during that period.",
        },
        {
          prompt: "Choose the correct preposition: The ticket costs ___ $50.",
          options: ["over", "on", "inside"],
          answer: "over",
          explanation: "Over marks a value greater than a threshold.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "over 的核心意思是什么？",
          answer:
            "核心是“在上方并常带跨越感”。此外它还能表示“在一段时间里”和“超过某数量”。",
        },
        {
          question: "over 和 above 的区别是什么？",
          answer:
            "above 只说“更高位置”；over 常带“跨越/覆盖”的动态或关系信息。",
        },
        {
          question: "over 和 across 怎么区分？",
          answer:
            "across 常是从一侧到另一侧（同一平面）；over 更强调从上方越过。",
        },
        {
          question: "over 和 through 如何判断？",
          answer:
            "看是否进入内部通道：进入内部用 through；从上方经过用 over。",
        },
        {
          question: "over 可以用于时间表达吗？",
          answer:
            "可以。常见于 over the weekend、over time、over the years，表示“在一段时间里”。",
        },
        {
          question: "over 可以表示“超过”吗？",
          answer:
            "可以。比如 over $50、over 100 people，表示高于某数值阈值。",
        },
        {
          question: "初学者最常见的 over 错误是什么？",
          answer:
            "常见是把有接触场景误用 over（应 on），或把内部穿过误用 over（应 through）。",
        },
        {
          question: "30 秒记住 over 的方法是什么？",
          answer:
            "记三条：上方跨越、时间跨度、数量超出。每条造一个短句即可快速内化。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of over?",
          answer:
            "Over mainly means above with crossing. It also expresses duration across a period and values greater than a threshold.",
        },
        {
          question: "What is the difference between over and above?",
          answer:
            "Above is pure higher position. Over often adds crossing or covering relation.",
        },
        {
          question: "What is the difference between over and across?",
          answer:
            "Across is side-to-side across an area; over is movement above something.",
        },
        {
          question: "How do I choose between over and through?",
          answer:
            "Use through for movement inside an enclosed space; use over for movement above it.",
        },
        {
          question: "Can over be used for time expressions?",
          answer:
            "Yes. Over the weekend, over time, and over the years all express duration during a period.",
        },
        {
          question: "Can over mean more than a number?",
          answer:
            "Yes. It is common for quantities: over $50, over 100 people, over 20%.",
        },
        {
          question: "What is a common learner mistake with over?",
          answer:
            "Learners often use over where contact is intended (use on) or where internal movement is intended (use through).",
        },
        {
          question: "What is a 30-second memory rule for over?",
          answer:
            "Memorize three cues: above-and-crossing, time span, and more-than quantity.",
        },
      ],
    },
    scene: makeScene([0, 1.1, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [0, 1.1, 0],
          [-1.2, 1.1, 0],
          [0, 1.5, 0],
          [1.2, 1.1, 0],
          [0, 1.1, 0],
        ],
      },
    }),
  },
  {
    id: "above",
    word: "above",
    tags: ["space", "above", "level", "more-than"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……上方（不接触）；高于（标准/数值）",
        tips: [
          "above 强调“更高位置”，通常不涉及接触，也不强调跨越路径。",
          "表达数值/水平高于标准时也常用 above（above average, above zero）。",
          "若有表面接触用 on；若强调从上方跨过去常用 over。",
        ],
      },
      en: {
        meaning: "at a higher level or position; higher than a standard",
        tips: [
          "Above marks higher position without contact.",
          "It also works for levels and standards (above average, above zero).",
          "Use on for contact; use over when crossing movement is central.",
        ],
      },
    },
    examples: [
      {
        en: "The lamp is above the table.",
        i18n: {
          "zh-CN": { translation: "灯在桌子上方。" },
          en: { translation: "The lamp is above the table." },
        },
      },
      {
        en: "Her score is above average.",
        i18n: {
          "zh-CN": { translation: "她的成绩高于平均水平。" },
          en: { translation: "Her score is above average." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "The lamp is above the table.",
          i18n: {
            "zh-CN": { translation: "灯在桌子上方。" },
            en: { translation: "The lamp is above the table." },
          },
        },
        {
          en: "The plane is above the clouds.",
          i18n: {
            "zh-CN": { translation: "飞机在云层上方。" },
            en: { translation: "The plane is above the clouds." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "above 的核心是“位置更高或水平更高”，不强调接触与跨越动作。先判断是否接触、是否跨越，再选 above。",
          differences: [
            {
              term: "over",
              description:
                "above 偏静态“更高”；over 常带“从上方跨过/覆盖”的动态关系。",
              examples: [
                {
                  term: "above",
                  sentence: "The clock is above the door.",
                  translation: "时钟在门上方。",
                },
                {
                  term: "over",
                  sentence: "A bird flew over the wall.",
                  translation: "一只鸟飞过了墙上方。",
                },
              ],
            },
            {
              term: "on",
              description:
                "on 强调接触表面；above 强调在上方且不接触。",
              examples: [
                {
                  term: "on",
                  sentence: "The book is on the table.",
                  translation: "书在桌子上（接触）。",
                },
                {
                  term: "above",
                  sentence: "The lamp hangs above the table.",
                  translation: "灯悬挂在桌子上方（不接触）。",
                },
              ],
            },
            {
              term: "below",
              description:
                "below 与 above 方向相反：below 是低于，above 是高于。",
              examples: [
                {
                  term: "below",
                  sentence: "The temperature is below zero.",
                  translation: "温度在零度以下。",
                },
                {
                  term: "above",
                  sentence: "The temperature is above zero.",
                  translation: "温度在零度以上。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Above means higher position or higher level, without contact and without necessary crossing movement.",
          differences: [
            {
              term: "over",
              description:
                "Above is usually static higher position; over often adds crossing or covering meaning.",
              examples: [
                { term: "above", sentence: "The clock is above the door." },
                { term: "over", sentence: "A bird flew over the wall." },
              ],
            },
            {
              term: "on",
              description:
                "On requires surface contact. Above means higher than without touching.",
              examples: [
                { term: "on", sentence: "The book is on the table." },
                { term: "above", sentence: "The lamp hangs above the table." },
              ],
            },
            {
              term: "below",
              description:
                "Below is the opposite direction. Above means higher than; below means lower than.",
              examples: [
                { term: "below", sentence: "The temperature is below zero." },
                { term: "above", sentence: "The temperature is above zero." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "空间位置类",
          items: [
            { phrase: "above the table", meaning: "在桌子上方" },
            { phrase: "above the door", meaning: "在门上方" },
            { phrase: "above the clouds", meaning: "在云层上方" },
            { phrase: "above the roof", meaning: "在屋顶上方" },
            { phrase: "above the bed", meaning: "在床上方" },
            { phrase: "above the screen", meaning: "在屏幕上方" },
          ],
        },
        {
          title: "数值与标准类",
          items: [
            { phrase: "above average", meaning: "高于平均水平" },
            { phrase: "above zero", meaning: "高于零" },
            { phrase: "above sea level", meaning: "高于海平面" },
            { phrase: "above 90%", meaning: "高于 90%" },
            { phrase: "above the limit", meaning: "高于上限" },
            { phrase: "above the age of 18", meaning: "超过 18 岁" },
          ],
        },
        {
          title: "抽象表达类",
          items: [
            { phrase: "above all", meaning: "最重要的是" },
            { phrase: "above suspicion", meaning: "无可怀疑" },
            { phrase: "above criticism", meaning: "无可指摘" },
            { phrase: "rise above", meaning: "超越（困难/情绪）" },
            { phrase: "head and shoulders above", meaning: "远胜于" },
            { phrase: "above board", meaning: "光明正大的" },
          ],
        },
      ],
      en: [
        {
          title: "Spatial position",
          items: [
            "above the table",
            "above the door",
            "above the clouds",
            "above the roof",
            "above the bed",
            "above the screen",
          ],
        },
        {
          title: "Numbers and standards",
          items: [
            "above average",
            "above zero",
            "above sea level",
            "above 90%",
            "above the limit",
            "above the age of 18",
          ],
        },
        {
          title: "Abstract expressions",
          items: [
            "above all",
            "above suspicion",
            "above criticism",
            "rise above",
            "head and shoulders above",
            "above board",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The book is above the table. (book touching the table)",
          correct: "The book is on the table.",
          reason: "有接触关系时应用 on，不用 above。",
        },
        {
          wrong: "The bird flew above the wall and crossed it.",
          correct: "The bird flew over the wall.",
          reason: "强调“跨越动作”时，over 比 above 更自然。",
        },
        {
          wrong: "The score is over average.",
          correct: "The score is above average.",
          reason: "表示“高于平均值”的固定搭配是 above average。",
        },
      ],
      en: [
        {
          wrong: "The book is above the table. (when touching)",
          correct: "The book is on the table.",
          reason: "Use on for surface contact; above means no contact.",
        },
        {
          wrong: "The bird flew above the wall and crossed it.",
          correct: "The bird flew over the wall.",
          reason:
            "When crossing movement is central, over is usually the better choice.",
        },
        {
          wrong: "The score is over average.",
          correct: "The score is above average.",
          reason: "The standard collocation is above average.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Choose the correct preposition: The clock is ___ the door.",
          options: ["above", "on", "through"],
          answer: "above",
          explanation: "时钟在门上方且不接触门面，选 above。",
        },
        {
          prompt: "Choose the correct preposition: Her score is ___ average.",
          options: ["above", "over", "under"],
          answer: "above",
          explanation: "固定搭配为 above average。",
        },
        {
          prompt: "Choose the correct preposition: The helicopter hovered ___ the stadium.",
          options: ["above", "inside", "under"],
          answer: "above",
          explanation: "强调“在上方悬停”而非穿越动作，选 above。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: The clock is ___ the door.",
          options: ["above", "on", "through"],
          answer: "above",
          explanation: "The relation is higher position without contact.",
        },
        {
          prompt: "Choose the correct preposition: Her score is ___ average.",
          options: ["above", "over", "under"],
          answer: "above",
          explanation: "The standard expression is above average.",
        },
        {
          prompt: "Choose the correct preposition: The helicopter hovered ___ the stadium.",
          options: ["above", "inside", "under"],
          answer: "above",
          explanation:
            "This is static higher position, not internal movement or lower position.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "above 的核心意思是什么？",
          answer:
            "above 表示“在更高位置”或“高于某标准”，通常不强调接触，也不强调跨越。",
        },
        {
          question: "above 和 over 的区别是什么？",
          answer:
            "above 更静态，表示高于；over 常带跨越或覆盖关系，尤其在运动场景中更常见。",
        },
        {
          question: "above 和 on 如何区分？",
          answer:
            "关键看接触：接触表面用 on，不接触且在上方用 above。",
        },
        {
          question: "above 可以表示数值关系吗？",
          answer:
            "可以，比如 above average、above zero、above 90%，都表示“高于某标准”。",
        },
        {
          question: "above 可以用于时间表达吗？",
          answer:
            "一般不作为时间介词核心用法；时间关系通常用 at/in/on/over 等词。",
        },
        {
          question: "学习 above 最常见错误是什么？",
          answer:
            "常见错是把接触关系误用 above（应 on），或把跨越动作场景误用 above（常应 over）。",
        },
        {
          question: "above 的高频搭配有哪些？",
          answer:
            "常见有 above the table、above average、above sea level、above all。",
        },
        {
          question: "30 秒记住 above 的方法？",
          answer:
            "记一个判据：只要是“更高但不接触”，优先想 above；再用 above average 强化数值义。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of above?",
          answer:
            "Above means higher position or higher level than a reference point, usually without contact.",
        },
        {
          question: "What is the difference between above and over?",
          answer:
            "Above is usually static higher position; over often adds crossing or covering meaning.",
        },
        {
          question: "How is above different from on?",
          answer:
            "On requires contact with a surface. Above means higher than without touching.",
        },
        {
          question: "Can above express numeric meaning?",
          answer:
            "Yes. It is common in level expressions such as above average, above zero, and above 90%.",
        },
        {
          question: "Can above be used for time expressions?",
          answer:
            "Not as a core time preposition in most beginner contexts. Use at/in/on/over for time relations.",
        },
        {
          question: "What is a common learner mistake with above?",
          answer:
            "Learners often use above where contact is intended (use on) or where crossing movement is intended (use over).",
        },
        {
          question: "What are common collocations with above?",
          answer:
            "High-frequency collocations include above the table, above average, above sea level, and above all.",
        },
        {
          question: "What is a quick memory rule for above?",
          answer:
            "Use one test: higher but not touching. Then anchor it with a level phrase like above average.",
        },
      ],
    },
    scene: makeScene([0, 1, 0]),
  },
  {
    id: "below",
    word: "below",
    tags: ["space", "below", "level"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……下方；低于（高度/数值/标准）",
        tips: [
          "below 强调“更低的位置或水平”，语气中性，不一定有遮挡或贴近感。",
          "说温度、分数、海拔、标准线时，below 是高频表达。",
          "如果是具体物体在某物正下方，under 往往更自然。",
        ],
      },
      en: {
        meaning: "at a lower level; lower than a reference point or standard",
        tips: [
          "Below is a neutral lower-position word and does not require contact or cover.",
          "It is common for levels, temperatures, scores, and thresholds.",
          "For a concrete object directly under something, under is often more natural.",
        ],
      },
    },
    examples: [
      {
        en: "The valley lies below the village.",
        i18n: {
          "zh-CN": { translation: "山谷位于村庄下方。" },
          en: { translation: "The valley lies below the village." },
        },
      },
      {
        en: "Temperatures fell below zero last night.",
        i18n: {
          "zh-CN": { translation: "昨晚气温降到了零度以下。" },
          en: { translation: "Temperatures fell below zero last night." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "The valley lies below the village.",
          i18n: {
            "zh-CN": { translation: "山谷位于村庄下方。" },
            en: { translation: "The valley lies below the village." },
          },
        },
        {
          en: "A sign hangs below the screen.",
          i18n: {
            "zh-CN": { translation: "屏幕下方挂着一块标牌。" },
            en: { translation: "A sign hangs below the screen." },
          },
        },
      ],
      time: [
        {
          en: "Temperatures fell below zero last night.",
          i18n: {
            "zh-CN": { translation: "昨晚气温降到了零度以下。" },
            en: { translation: "Temperatures fell below zero last night." },
          },
        },
        {
          en: "His score was below 60 on the test.",
          i18n: {
            "zh-CN": { translation: "他这次测试分数低于 60 分。" },
            en: { translation: "His score was below 60 on the test." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "below 的核心是“低于参照点/标准线”的中性关系。它能表达空间高低，也常用于温度、分数、价格等数值语境。",
          differences: [
            {
              term: "under",
              description:
                "under 更强调“正下方”与具体空间感；below 更偏中性层级，不强调遮挡。",
              examples: [
                {
                  term: "under",
                  sentence: "The cat is under the table.",
                  translation: "猫在桌子下面。",
                },
                {
                  term: "below",
                  sentence: "The temperature is below zero.",
                  translation: "温度在零度以下。",
                },
              ],
            },
            {
              term: "beneath",
              description:
                "beneath 语体更正式、文学感更强；below 更口语、通用，尤其适合数据和客观描述。",
              examples: [
                {
                  term: "beneath",
                  sentence: "The river runs beneath the bridge.",
                  translation: "河水从桥下流过。",
                },
                {
                  term: "below",
                  sentence: "The village is below the mountain.",
                  translation: "村庄在山下。",
                },
              ],
            },
            {
              term: "underneath",
              description:
                "underneath 常强调“正下方且贴近”，画面更具体；below 只给出“更低”关系。",
              examples: [
                {
                  term: "underneath",
                  sentence: "There is a drawer underneath the table.",
                  translation: "桌子正下方有个抽屉。",
                },
                {
                  term: "below",
                  sentence: "Write your name below the line.",
                  translation: "在线条下方写下你的名字。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Below marks a neutral lower level relative to a reference point. It works well for physical level and for numbers or standards.",
          differences: [
            {
              term: "under",
              description:
                "Under is more concrete and physical for directly beneath objects; below is more level-based and neutral.",
              examples: [
                { term: "under", sentence: "The cat is under the table." },
                { term: "below", sentence: "The temperature is below zero." },
              ],
            },
            {
              term: "beneath",
              description:
                "Beneath sounds more formal or literary; below is plain and high-frequency in everyday and factual writing.",
              examples: [
                { term: "beneath", sentence: "The river runs beneath the bridge." },
                { term: "below", sentence: "The village is below the mountain." },
              ],
            },
            {
              term: "underneath",
              description:
                "Underneath often implies directly under and close to the underside; below simply means lower than.",
              examples: [
                {
                  term: "underneath",
                  sentence: "There is a drawer underneath the table.",
                },
                { term: "below", sentence: "Write your name below the line." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "空间方位类",
          items: [
            { phrase: "below the bridge", meaning: "在桥下方" },
            { phrase: "below the window", meaning: "在窗户下方" },
            { phrase: "below the line", meaning: "在线条下方" },
            { phrase: "below the shelf", meaning: "在架子下方" },
            { phrase: "below sea level", meaning: "低于海平面" },
            { phrase: "below the mountain", meaning: "在山下" },
          ],
        },
        {
          title: "数值与标准类",
          items: [
            { phrase: "below zero", meaning: "低于零度" },
            { phrase: "below average", meaning: "低于平均水平" },
            { phrase: "below 60", meaning: "低于 60" },
            { phrase: "below the limit", meaning: "低于上限" },
            { phrase: "below the target", meaning: "低于目标值" },
            { phrase: "below expectations", meaning: "低于预期" },
          ],
        },
        {
          title: "文本与图表类",
          items: [
            { phrase: "as shown below", meaning: "如下所示" },
            { phrase: "the chart below", meaning: "下图/下表" },
            { phrase: "the section below", meaning: "下文部分" },
            { phrase: "below this paragraph", meaning: "在本段下方" },
            { phrase: "listed below", meaning: "列在下方" },
            { phrase: "see below for details", meaning: "详情见下文" },
          ],
        },
      ],
      en: [
        {
          title: "Spatial position",
          items: [
            "below the bridge",
            "below the window",
            "below the line",
            "below the shelf",
            "below sea level",
            "below the mountain",
          ],
        },
        {
          title: "Numbers and standards",
          items: [
            "below zero",
            "below average",
            "below 60",
            "below the limit",
            "below the target",
            "below expectations",
          ],
        },
        {
          title: "Text and charts",
          items: [
            "as shown below",
            "the chart below",
            "the section below",
            "below this paragraph",
            "listed below",
            "see below for details",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The cat is below the table.",
          correct: "The cat is under the table.",
          reason: "具体物体“在桌子正下方”通常用 under 更自然。",
        },
        {
          wrong: "The temperature is under zero.",
          correct: "The temperature is below zero.",
          reason: "表示温度/数值低于标准时，below 是更稳定的搭配。",
        },
        {
          wrong: "Please finish below an hour.",
          correct: "Please finish in under an hour.",
          reason: "时长上限常用 under；below 不用于这个结构。",
        },
      ],
      en: [
        {
          wrong: "The cat is below the table.",
          correct: "The cat is under the table.",
          reason:
            "For concrete physical position directly beneath an object, under is usually more natural.",
        },
        {
          wrong: "The temperature is under zero.",
          correct: "The temperature is below zero.",
          reason:
            "For temperature and level benchmarks, below is the stable high-frequency choice.",
        },
        {
          wrong: "Please finish below an hour.",
          correct: "Please finish in under an hour.",
          reason:
            "Use under for duration limits. Below is not the normal pattern here.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Choose the correct preposition: The warning sign is ___ the screen.",
          options: ["below", "under", "on"],
          answer: "below",
          explanation: "强调“位于更低位置”时，below 更合适。",
        },
        {
          prompt: "Choose the correct preposition: The temperature is ___ zero.",
          options: ["below", "under", "over"],
          answer: "below",
          explanation: "温度低于零度的固定搭配是 below zero。",
        },
        {
          prompt: "Choose the correct preposition: Details are listed ___.",
          options: ["below", "under", "inside"],
          answer: "below",
          explanation: "文本场景“如下、下文”常用 below。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: The warning sign is ___ the screen.",
          options: ["below", "under", "on"],
          answer: "below",
          explanation:
            "This sentence describes a lower level, so below is the best fit.",
        },
        {
          prompt: "Choose the correct preposition: The temperature is ___ zero.",
          options: ["below", "under", "over"],
          answer: "below",
          explanation:
            "The standard collocation is below zero for temperature levels.",
        },
        {
          prompt: "Choose the correct preposition: Details are listed ___.",
          options: ["below", "under", "inside"],
          answer: "below",
          explanation:
            "In document language, below is used for information that appears later in the text.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "below 的核心意思是什么？",
          answer:
            "核心是“低于某个参照点或标准”。它既可表示空间方位，也常用于数值、温度和等级。",
        },
        {
          question: "below 和 under 有什么区别？",
          answer:
            "below 更中性，强调层级高低；under 更具体，常表示在某物正下方并有覆盖感。",
        },
        {
          question: "below 可以用于时间吗？",
          answer:
            "通常不用 below 表示“不到一小时”这类时长上限。此时更常用 under（in under an hour）。",
        },
        {
          question: "below 和 beneath 如何区分？",
          answer:
            "beneath 更正式、更书面；below 更通用，尤其适合客观描述和数据表达。",
        },
        {
          question: "below 和 underneath 怎么选？",
          answer:
            "underneath 更强调“正下方且贴近下侧”；below 只表达“位置更低”。",
        },
        {
          question: "below 的高频搭配有哪些？",
          answer:
            "如 below zero, below average, below sea level, listed below, as shown below。",
        },
        {
          question: "初学者最常见的 below 错误是什么？",
          answer:
            "常见是把 below 用到“不到某时长”里（应 under），或把具体物体下方场景误用 below（常应 under）。",
        },
        {
          question: "30 秒记住 below 的方法？",
          answer:
            "记住关键词“低于标准线”。看到温度、分数、海拔、图文位置，优先考虑 below。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of below?",
          answer:
            "Below means lower than a reference point or standard. It is used for position and for levels like temperature and scores.",
        },
        {
          question: "What is the difference between below and under?",
          answer:
            "Below is neutral and level-based. Under is more concrete for directly beneath an object, often with cover from above.",
        },
        {
          question: "Can below be used for time limits?",
          answer:
            "Usually no for duration limits. For 'less than an hour', English prefers under (in under an hour).",
        },
        {
          question: "How is below different from beneath?",
          answer:
            "Beneath is more formal or literary. Below is the common all-purpose choice in factual and daily writing.",
        },
        {
          question: "How is below different from underneath?",
          answer:
            "Underneath often implies directly under and close to the underside. Below simply marks a lower level.",
        },
        {
          question: "What are common below collocations?",
          answer:
            "High-frequency collocations include below zero, below average, below sea level, listed below, and as shown below.",
        },
        {
          question: "What is a common learner mistake with below?",
          answer:
            "Learners often use below for duration limits ('below an hour') or use below where under is more natural for concrete objects.",
        },
        {
          question: "What is a quick memory rule for below?",
          answer:
            "Think 'lower than a line or standard.' If the sentence is about level, score, temperature, or text position, below is likely correct.",
        },
      ],
    },
    scene: makeScene([0, -1.1, 0]),
  },
  {
    id: "beside",
    word: "beside",
    tags: ["space", "side"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……旁边（同一侧、近距离）",
        tips: [
          "beside 强调“在一侧且很近”，常用于具体空间位置。",
          "与 next to 相比，beside 语气稍书面；与 near 相比，距离更近。",
          "只表达并排位置，不表达“在上/下/内”等关系。",
        ],
      },
      en: {
        meaning: "at the side of; next to, usually very close",
        tips: [
          "Beside marks side-by-side position with short distance.",
          "It overlaps with next to, but often sounds slightly more formal.",
          "Use it for side relation only, not top/bottom/inside relations.",
        ],
      },
    },
    examples: [
      {
        en: "She sits beside the window.",
        i18n: {
          "zh-CN": { translation: "她坐在窗边。" },
          en: { translation: "She sits beside the window." },
        },
      },
      {
        en: "The bike is beside the door.",
        i18n: {
          "zh-CN": { translation: "自行车在门旁边。" },
          en: { translation: "The bike is beside the door." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "Please sit beside me.",
          i18n: {
            "zh-CN": { translation: "请坐在我旁边。" },
            en: { translation: "Please sit beside me." },
          },
        },
        {
          en: "A small table stands beside the sofa.",
          i18n: {
            "zh-CN": { translation: "沙发旁边放着一张小桌子。" },
            en: { translation: "A small table stands beside the sofa." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "beside 的核心是“同一侧+近距离”。初学者最常混淆的是 next to、by、near：next to 更强调紧贴；by 更口语泛化；near 只表示附近。",
          differences: [
            {
              term: "next to",
              description: "next to 强调“紧挨着、几乎无间隔”；beside 也近，但语义可稍宽。",
              examples: [
                {
                  term: "next to",
                  sentence: "She sat next to me on the bus.",
                  translation: "她在公交车上紧挨着我坐。",
                },
                {
                  term: "beside",
                  sentence: "She sat beside me during the meeting.",
                  translation: "会议时她坐在我旁边。",
                },
              ],
            },
            {
              term: "by",
              description: "by 更口语、范围更宽；beside 更聚焦并排侧向位置。",
              examples: [
                {
                  term: "by",
                  sentence: "Wait by the door.",
                  translation: "在门边等。",
                },
                {
                  term: "beside",
                  sentence: "A lamp is beside the bed.",
                  translation: "床边有一盏灯。",
                },
              ],
            },
            {
              term: "near",
              description: "near 只强调距离不远，不要求同一侧并排。",
              examples: [
                {
                  term: "near",
                  sentence: "There is a cafe near the station.",
                  translation: "车站附近有一家咖啡馆。",
                },
                {
                  term: "beside",
                  sentence: "There is a bench beside the station gate.",
                  translation: "车站大门旁边有一张长椅。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Beside means side-by-side and close. Learners often mix it with next to, by, and near. The key is whether you mean strict side relation or only general proximity.",
          differences: [
            {
              term: "next to",
              description:
                "Next to is the tightest adjacency. Beside is also close, but can be slightly less strict.",
              examples: [
                { term: "next to", sentence: "She sat next to me on the bus." },
                { term: "beside", sentence: "She sat beside me during the meeting." },
              ],
            },
            {
              term: "by",
              description:
                "By is broader and more conversational. Beside is more specific for side relation.",
              examples: [
                { term: "by", sentence: "Wait by the door." },
                { term: "beside", sentence: "A lamp is beside the bed." },
              ],
            },
            {
              term: "near",
              description:
                "Near marks short distance only. Beside adds side-by-side orientation.",
              examples: [
                { term: "near", sentence: "There is a cafe near the station." },
                { term: "beside", sentence: "There is a bench beside the station gate." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "人物与位置",
          items: [
            { phrase: "sit beside me", meaning: "坐在我旁边" },
            { phrase: "stand beside her", meaning: "站在她旁边" },
            { phrase: "walk beside him", meaning: "和他并排走" },
            { phrase: "kneel beside the bed", meaning: "跪在床边" },
            { phrase: "wait beside the door", meaning: "在门旁等候" },
            { phrase: "stay beside your child", meaning: "陪在孩子身边" },
          ],
        },
        {
          title: "物体与场景",
          items: [
            { phrase: "beside the window", meaning: "在窗边" },
            { phrase: "beside the sofa", meaning: "在沙发旁" },
            { phrase: "beside the road", meaning: "在路边" },
            { phrase: "beside the river", meaning: "在河边" },
            { phrase: "beside the desk", meaning: "在书桌旁" },
            { phrase: "beside the gate", meaning: "在大门旁" },
          ],
        },
        {
          title: "教学高频短句",
          items: [
            { phrase: "right beside", meaning: "就在旁边" },
            { phrase: "sit beside each other", meaning: "并排坐着" },
            { phrase: "park beside the curb", meaning: "靠路缘停放" },
            { phrase: "place it beside", meaning: "把它放在旁边" },
            { phrase: "live beside the park", meaning: "住在公园旁" },
            { phrase: "work beside experienced teachers", meaning: "与资深老师并肩工作" },
          ],
        },
      ],
      en: [
        {
          title: "People and Position",
          items: [
            "sit beside me",
            "stand beside her",
            "walk beside him",
            "kneel beside the bed",
            "wait beside the door",
            "stay beside your child",
          ],
        },
        {
          title: "Objects and Places",
          items: [
            "beside the window",
            "beside the sofa",
            "beside the road",
            "beside the river",
            "beside the desk",
            "beside the gate",
          ],
        },
        {
          title: "High-frequency Chunks",
          items: [
            "right beside",
            "sit beside each other",
            "park beside the curb",
            "place it beside",
            "live beside the park",
            "work beside experienced teachers",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The cafe is beside the station. (只想表达“附近”)",
          correct: "The cafe is near the station.",
          reason: "若只是“离得不远”而非并排同侧，near 更自然。",
        },
        {
          wrong: "Put the cup beside the table. (想表达放在桌面上)",
          correct: "Put the cup on the table.",
          reason: "beside 是“在旁边”，不是“在表面上”。",
        },
        {
          wrong: "He sat near me in a very tight seat arrangement.",
          correct: "He sat beside me.",
          reason: "座位紧挨并排时，beside/next to 比 near 更准确。",
        },
      ],
      en: [
        {
          wrong: "The cafe is beside the station. (when you only mean general proximity)",
          correct: "The cafe is near the station.",
          reason: "Use near for broad proximity; beside implies side relation.",
        },
        {
          wrong: "Put the cup beside the table. (when you mean on the surface)",
          correct: "Put the cup on the table.",
          reason: "Beside means at the side, not on the surface.",
        },
        {
          wrong: "He sat near me in a tight seating row.",
          correct: "He sat beside me.",
          reason: "For clear side-by-side adjacency, beside/next to is stronger than near.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "选择正确介词：Please sit ___ me so we can read together.",
          options: ["beside", "on", "under"],
          answer: "beside",
          explanation: "表达“坐在我旁边”要用 beside。",
        },
        {
          prompt: "选择正确介词：The lamp is ___ the bed, not on it.",
          options: ["beside", "on", "inside"],
          answer: "beside",
          explanation: "灯在床边（侧边），不是在床面上。",
        },
        {
          prompt: "选择更自然的词：The supermarket is ___ the station (只表示附近).",
          options: ["near", "beside", "on"],
          answer: "near",
          explanation: "只表达“附近”时 near 更合适；beside 要求侧向并排感更强。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: Please sit ___ me so we can read together.",
          options: ["beside", "on", "under"],
          answer: "beside",
          explanation: "Beside is used for side-by-side seating.",
        },
        {
          prompt: "Choose the correct preposition: The lamp is ___ the bed, not on it.",
          options: ["beside", "on", "inside"],
          answer: "beside",
          explanation: "The lamp is at the side of the bed, not on the surface.",
        },
        {
          prompt: "Choose the better word: The supermarket is ___ the station (general proximity only).",
          options: ["near", "beside", "on"],
          answer: "near",
          explanation: "Use near for broad proximity; beside implies stronger side relation.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "beside 的核心含义是什么？",
          answer: "beside 表示“在……旁边、同一侧且距离近”，常用于具体空间位置。",
        },
        {
          question: "beside 和 next to 有什么区别？",
          answer: "两者都可表示“旁边”。next to 更强调紧贴；beside 常略书面、语气更中性。",
        },
        {
          question: "beside 和 near 如何区分？",
          answer: "near 只表示“附近”；beside 表示“并排在侧边”。如果没有并排关系，优先 near。",
        },
        {
          question: "beside 和 by 有区别吗？",
          answer: "by 更口语、范围更宽；beside 对“侧向并排”的空间关系表达更清楚。",
        },
        {
          question: "beside 可以用于时间表达吗？",
          answer: "通常不用。时间关系优先使用 at/in/on/by 等时间介词。",
        },
        {
          question: "初学者最常见的 beside 错误是什么？",
          answer: "把 beside 用在“在表面上”（应 on）或“仅附近”（应 near）的场景。",
        },
        {
          question: "有哪些高频搭配适合先记？",
          answer: "可先记：sit beside me、beside the window、beside the road、right beside。",
        },
        {
          question: "30 秒记住 beside 的方法？",
          answer: "先问自己：是否“同一侧并排且很近”？是就用 beside；若只是附近，用 near。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of beside?",
          answer: "Beside means at the side of something, usually with close side-by-side relation.",
        },
        {
          question: "What is the difference between beside and next to?",
          answer: "Both can mean nearby at the side. Next to is often the tightest adjacency; beside can be slightly less strict and more neutral in tone.",
        },
        {
          question: "How is beside different from near?",
          answer: "Near means close in distance only. Beside adds side orientation and clearer adjacency.",
        },
        {
          question: "How is beside different from by?",
          answer: "By is broader and very conversational. Beside is more specific for side-by-side spatial relation.",
        },
        {
          question: "Can beside be used for time expressions?",
          answer: "Not typically. For time, use prepositions such as at, in, on, and by.",
        },
        {
          question: "What is a common learner mistake with beside?",
          answer: "Using beside for surface contact (should be on) or for broad proximity without side relation (often near).",
        },
        {
          question: "What collocations should beginners memorize first?",
          answer: "Useful starters: sit beside me, beside the window, beside the road, right beside.",
        },
        {
          question: "What is a 30-second memory rule for beside?",
          answer: "Ask one question: Is it side-by-side and close? If yes, choose beside. If it is only nearby, use near.",
        },
      ],
    },
    scene: makeScene([1.05, 0, 0]),
  },
  {
    id: "next-to",
    word: "next to",
    tags: ["space", "side", "near"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "紧挨着；就在……旁边",
        tips: [
          "next to 强调“最紧邻”的并排关系，常用于座位、排队、摆放位置。",
          "比 near 更近、更明确；与 beside 接近，但 next to 更口语高频。",
          "next to 只表达侧向邻接，不表达上下、内外、前后关系。",
        ],
      },
      en: {
        meaning: "immediately beside; directly adjacent to",
        tips: [
          "Next to signals the tightest side-by-side adjacency.",
          "It is stronger and more concrete than near.",
          "Use it for side relation only, not for on/in/under relations.",
        ],
      },
    },
    examples: [
      {
        en: "The chair is next to the desk.",
        i18n: {
          "zh-CN": { translation: "椅子在桌子旁边。" },
          en: { translation: "The chair is next to the desk." },
        },
      },
      {
        en: "The bus stop is next to the bank.",
        i18n: {
          "zh-CN": { translation: "公交站在银行旁边。" },
          en: { translation: "The bus stop is next to the bank." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "Sit next to your partner.",
          i18n: {
            "zh-CN": { translation: "坐在你搭档旁边。" },
            en: { translation: "Sit next to your partner." },
          },
        },
        {
          en: "The pharmacy is next to the supermarket.",
          i18n: {
            "zh-CN": { translation: "药店就在超市旁边。" },
            en: { translation: "The pharmacy is next to the supermarket." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "next to 的关键是“紧挨着”。它和 beside 含义接近，但更口语常用；和 near 最大差异在于距离与并排关系是否明确。",
          differences: [
            {
              term: "beside",
              description: "beside 与 next to 都可表示“在旁边”；next to 更口语，beside 稍书面。",
              examples: [
                {
                  term: "next to",
                  sentence: "Sit next to me.",
                  translation: "坐我旁边。",
                },
                {
                  term: "beside",
                  sentence: "She stood beside her father.",
                  translation: "她站在父亲身旁。",
                },
              ],
            },
            {
              term: "near",
              description: "near 只表示附近，不要求紧邻；next to 要求相邻并排。",
              examples: [
                {
                  term: "near",
                  sentence: "There is a cafe near the station.",
                  translation: "车站附近有家咖啡馆。",
                },
                {
                  term: "next to",
                  sentence: "There is a cafe next to the station exit.",
                  translation: "车站出口旁边就有家咖啡馆。",
                },
              ],
            },
            {
              term: "by",
              description: "by 更宽泛口语；next to 对“紧挨着”表达更稳定。",
              examples: [
                {
                  term: "by",
                  sentence: "Wait by the window.",
                  translation: "在窗边等。",
                },
                {
                  term: "next to",
                  sentence: "The printer is next to the monitor.",
                  translation: "打印机紧挨着显示器。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Next to means immediate adjacency. It is very close to beside, but usually more conversational. The key contrast is with near: near is broad proximity, next to is direct side-by-side contact-level closeness.",
          differences: [
            {
              term: "beside",
              description:
                "Both mean at the side. Next to is often more conversational; beside can sound slightly more formal.",
              examples: [
                { term: "next to", sentence: "Sit next to me." },
                { term: "beside", sentence: "She stood beside her father." },
              ],
            },
            {
              term: "near",
              description:
                "Near marks short distance only. Next to requires direct adjacency.",
              examples: [
                { term: "near", sentence: "There is a cafe near the station." },
                { term: "next to", sentence: "There is a cafe next to the station exit." },
              ],
            },
            {
              term: "by",
              description:
                "By is broad and flexible in speech. Next to is more precise for immediate adjacency.",
              examples: [
                { term: "by", sentence: "Wait by the window." },
                { term: "next to", sentence: "The printer is next to the monitor." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "座位与人物位置",
          items: [
            { phrase: "sit next to me", meaning: "坐在我旁边" },
            { phrase: "stand next to her", meaning: "站在她旁边" },
            { phrase: "walk next to him", meaning: "和他并排走" },
            { phrase: "live next to my parents", meaning: "住在父母隔壁" },
            { phrase: "line up next to each other", meaning: "并排排队" },
            { phrase: "park next to the car", meaning: "停在那辆车旁边" },
          ],
        },
        {
          title: "地点与设施",
          items: [
            { phrase: "next to the station", meaning: "在车站旁边" },
            { phrase: "next to the school", meaning: "在学校旁边" },
            { phrase: "next to the bank", meaning: "在银行旁边" },
            { phrase: "next to the office", meaning: "在办公室旁边" },
            { phrase: "next to the elevator", meaning: "在电梯旁边" },
            { phrase: "next to the entrance", meaning: "在入口旁边" },
          ],
        },
        {
          title: "课堂高频短句",
          items: [
            { phrase: "right next to", meaning: "就在紧旁边" },
            { phrase: "next to each other", meaning: "彼此并排" },
            { phrase: "put it next to", meaning: "把它放在…旁边" },
            { phrase: "move next to the wall", meaning: "移到墙边" },
            { phrase: "next to impossible", meaning: "几乎不可能（习语）" },
            { phrase: "the room next to ours", meaning: "我们隔壁的房间" },
          ],
        },
      ],
      en: [
        {
          title: "People and Seating",
          items: [
            "sit next to me",
            "stand next to her",
            "walk next to him",
            "live next to my parents",
            "line up next to each other",
            "park next to the car",
          ],
        },
        {
          title: "Places and Facilities",
          items: [
            "next to the station",
            "next to the school",
            "next to the bank",
            "next to the office",
            "next to the elevator",
            "next to the entrance",
          ],
        },
        {
          title: "High-frequency Chunks",
          items: [
            "right next to",
            "next to each other",
            "put it next to",
            "move next to the wall",
            "next to impossible",
            "the room next to ours",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The hotel is next to the city center. (只是表示“离市中心近”)",
          correct: "The hotel is near the city center.",
          reason: "若不是“紧挨着”，用 near 更自然。",
        },
        {
          wrong: "Put the phone next to the table. (想表达放在桌面上)",
          correct: "Put the phone on the table.",
          reason: "next to 只表示旁边，不表示接触桌面。",
        },
        {
          wrong: "He sat near me in a fixed classroom seat order.",
          correct: "He sat next to me.",
          reason: "固定座位并排时，next to 更准确。",
        },
      ],
      en: [
        {
          wrong: "The hotel is next to the city center. (when you only mean generally close)",
          correct: "The hotel is near the city center.",
          reason: "Use near unless there is real immediate adjacency.",
        },
        {
          wrong: "Put the phone next to the table. (when you mean on the surface)",
          correct: "Put the phone on the table.",
          reason: "Next to means at the side, not on top.",
        },
        {
          wrong: "He sat near me in a fixed seat row.",
          correct: "He sat next to me.",
          reason: "In clear adjacent seating, next to is the better choice.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "选择正确介词：Please sit ___ me.",
          options: ["next to", "in", "under"],
          answer: "next to",
          explanation: "并排坐在旁边，选 next to。",
        },
        {
          prompt: "选择正确介词：The bakery is ___ the post office (两家店相邻).",
          options: ["next to", "near", "over"],
          answer: "next to",
          explanation: "两家店紧挨着时，next to 更准确。",
        },
        {
          prompt: "选择更自然的词：My apartment is ___ downtown (只表示离市中心不远).",
          options: ["near", "next to", "on"],
          answer: "near",
          explanation: "只表达“附近”不用 next to，优先 near。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: Please sit ___ me.",
          options: ["next to", "in", "under"],
          answer: "next to",
          explanation: "For adjacent seating, use next to.",
        },
        {
          prompt: "Choose the correct preposition: The bakery is ___ the post office (the two stores are adjacent).",
          options: ["next to", "near", "over"],
          answer: "next to",
          explanation: "Immediate adjacency calls for next to.",
        },
        {
          prompt: "Choose the better word: My apartment is ___ downtown (general proximity only).",
          options: ["near", "next to", "on"],
          answer: "near",
          explanation: "For broad proximity, near is better than next to.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "next to 的核心意思是什么？",
          answer:
            "next to 的核心是“紧挨着、直接相邻”。当两个人/物几乎没有间隔地并排时，优先用 next to。",
        },
        {
          question: "next to 和 beside 的区别大吗？",
          answer:
            "意义非常接近。教学上可先当同义词处理：next to 更口语日常，beside 稍书面。先保证“并排紧邻”这个核心判断，再细分语体。",
        },
        {
          question: "next to 和 near 怎么快速区分？",
          answer:
            "看距离是否“贴近相邻”。若只是在附近、并不贴着，用 near；若明确是隔壁/并排，用 next to。",
        },
        {
          question: "next to 能用在城市级别位置吗？",
          answer:
            "可以，但要真实“相邻”。例如 two towns next to each other。若只是“离城市不远”，通常用 near。",
        },
        {
          question: "next to 常见的语法结构有哪些？",
          answer:
            "最常见是 next to + 名词/代词（next to me, next to the station），也常见 right next to 表示“就在旁边”。",
        },
        {
          question: "next to 可以表示“仅次于”吗？",
          answer:
            "可以，在抽象表达中 next to 常表示“几乎、仅次于”，如 next to impossible（几乎不可能）。这是高频扩展义。",
        },
        {
          question: "初学者最常见错误是什么？",
          answer:
            "一是把 next to 误当 near（距离不够近也用）；二是把 next to 误当 on（本该表达接触表面）。",
        },
        {
          question: "30 秒记忆法怎么做？",
          answer:
            "先问：是否“并排且几乎无间隔”？是就 next to；不是就转到 near/on/in 等关系词。再背两个锚点：sit next to me、right next to the door。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of next to?",
          answer:
            "Next to means immediately adjacent, with little or no gap. Use it when side-by-side relation is explicit.",
        },
        {
          question: "Is next to very different from beside?",
          answer:
            "They are close in meaning. For beginners, treat them as near-synonyms first: next to is more conversational, beside can sound slightly more formal.",
        },
        {
          question: "How do I quickly choose between next to and near?",
          answer:
            "Ask one question: Is it directly adjacent? If yes, use next to. If it is only generally close, use near.",
        },
        {
          question: "Can next to be used for larger locations?",
          answer:
            "Yes, but only when adjacency is real (for example, two neighboring towns). If you only mean close by, near is better.",
        },
        {
          question: "What are common sentence patterns with next to?",
          answer:
            "The core pattern is next to + noun/pronoun (next to me, next to the station). Right next to is a very common intensifier.",
        },
        {
          question: "Can next to express an abstract meaning?",
          answer:
            "Yes. In expressions like next to impossible, it means almost/nearly, not physical adjacency.",
        },
        {
          question: "What is a common learner mistake with next to?",
          answer:
            "Learners overuse next to for general proximity (should be near) and misuse it where surface contact is needed (should be on).",
        },
        {
          question: "What is a 30-second memory rule for next to?",
          answer:
            "Use a two-step test: adjacent side-by-side -> next to; not adjacent -> choose near/on/in by relation type. Anchor it with sit next to me and right next to the door.",
        },
      ],
    },
    scene: makeScene([0.95, 0, 0]),
  },
  {
    id: "near",
    word: "near",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……附近；离……不远（不强调紧挨）",
        tips: [
          "near 强调“距离近”，但不一定是紧挨着或并排。",
          "若要表达“紧挨着/隔壁/并排”，更常用 next to / beside。",
          "想强调“非常近”时可用 close to / right next to。",
        ],
      },
      en: {
        meaning: "near; close in distance (not necessarily adjacent)",
        tips: [
          "Near means close in distance, not necessarily side-by-side.",
          "For immediate adjacency, use next to / beside.",
          "For very short distance emphasis, close to is often stronger.",
        ],
      },
    },
    examples: [
      {
        en: "The school is near the park.",
        i18n: {
          "zh-CN": { translation: "学校在公园附近。" },
          en: { translation: "The school is near the park." },
        },
      },
      {
        en: "A shop is near the station.",
        i18n: {
          "zh-CN": { translation: "商店在车站附近。" },
          en: { translation: "A shop is near the station." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "Meet me near the entrance.",
          i18n: {
            "zh-CN": { translation: "在入口附近见。" },
            en: { translation: "Meet me near the entrance." },
          },
        },
        {
          en: "I live near the airport.",
          i18n: {
            "zh-CN": { translation: "我住在机场附近。" },
            en: { translation: "I live near the airport." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "near 的核心是“距离近”，不要求紧挨。初学者最常混淆的是 next to/beside（紧邻并排）与 close to（更强的“很近”强调）。",
          differences: [
            {
              term: "next to",
              description: "next to 强调“紧挨着、直接相邻”；near 只是“离得近”。",
              examples: [
                {
                  term: "near",
                  sentence: "There is a cafe near the station.",
                  translation: "车站附近有家咖啡馆。",
                },
                {
                  term: "next to",
                  sentence: "There is a cafe next to the station exit.",
                  translation: "车站出口旁边就有家咖啡馆。",
                },
              ],
            },
            {
              term: "close to",
              description: "close to 常比 near 更强调“非常近”；near 更中性。",
              examples: [
                {
                  term: "near",
                  sentence: "We live near the subway.",
                  translation: "我们住得离地铁不远。",
                },
                {
                  term: "close to",
                  sentence: "We live close to the subway entrance.",
                  translation: "我们住得离地铁口很近。",
                },
              ],
            },
            {
              term: "far from",
              description: "far from 与 near 相反，表示“距离很远”。",
              examples: [
                {
                  term: "near",
                  sentence: "The hotel is near the beach.",
                  translation: "酒店离海滩不远。",
                },
                {
                  term: "far from",
                  sentence: "The hotel is far from the beach.",
                  translation: "酒店离海滩很远。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Near means close in distance and is less strict than next to/beside. For stronger closeness, close to is common; for the opposite, far from.",
          differences: [
            {
              term: "next to",
              description:
                "Next to is immediate adjacency. Near is broad closeness and does not require side-by-side contact-level distance.",
              examples: [
                { term: "near", sentence: "There is a cafe near the station." },
                { term: "next to", sentence: "There is a cafe next to the station exit." },
              ],
            },
            {
              term: "close to",
              description:
                "Close to often emphasizes very short distance. Near is more neutral.",
              examples: [
                { term: "near", sentence: "We live near the subway." },
                { term: "close to", sentence: "We live close to the subway entrance." },
              ],
            },
            {
              term: "far from",
              description: "Far from is the opposite of near: long distance.",
              examples: [
                { term: "near", sentence: "The hotel is near the beach." },
                { term: "far from", sentence: "The hotel is far from the beach." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "地点与设施",
          items: [
            { phrase: "near the station", meaning: "在车站附近" },
            { phrase: "near the airport", meaning: "在机场附近" },
            { phrase: "near the entrance", meaning: "在入口附近" },
            { phrase: "near the exit", meaning: "在出口附近" },
            { phrase: "near my house", meaning: "在我家附近" },
            { phrase: "near the city center", meaning: "在市中心附近" },
          ],
        },
        {
          title: "自然与地标",
          items: [
            { phrase: "near the beach", meaning: "在海滩附近" },
            { phrase: "near the river", meaning: "在河边附近" },
            { phrase: "near the park", meaning: "在公园附近" },
            { phrase: "near the lake", meaning: "在湖边附近" },
            { phrase: "near the mountain", meaning: "在山附近" },
            { phrase: "near the border", meaning: "在边境附近" },
          ],
        },
        {
          title: "学习高频句型",
          items: [
            { phrase: "near here", meaning: "在这附近" },
            { phrase: "near me", meaning: "在我附近" },
            { phrase: "somewhere near", meaning: "在…附近某处" },
            { phrase: "near the corner", meaning: "在拐角附近" },
            { phrase: "near the end of", meaning: "接近…的末尾" },
            { phrase: "near midnight", meaning: "接近午夜（时间用法）" },
          ],
        },
      ],
      en: [
        {
          title: "Places and Facilities",
          items: [
            "near the station",
            "near the airport",
            "near the entrance",
            "near the exit",
            "near my house",
            "near the city center",
          ],
        },
        {
          title: "Nature and Landmarks",
          items: [
            "near the beach",
            "near the river",
            "near the park",
            "near the lake",
            "near the mountain",
            "near the border",
          ],
        },
        {
          title: "High-frequency Patterns",
          items: [
            "near here",
            "near me",
            "somewhere near",
            "near the corner",
            "near the end of",
            "near midnight",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "Sit near me. (需要并排一起看一本书)",
          correct: "Sit next to me.",
          reason: "并排紧挨时 next to/beside 更准确；near 可能隔着一点距离。",
        },
        {
          wrong: "My home is near to the school.",
          correct: "My home is near the school.",
          reason: "near 作介词时通常不需要 to，直接 near + 名词即可。",
        },
        {
          wrong: "Put the cup near the table. (杯子在桌面上)",
          correct: "Put the cup on the table.",
          reason: "near 表示“附近”，不表示“在表面上接触”。",
        },
      ],
      en: [
        {
          wrong: "Sit near me. (when you need side-by-side seating to share a book)",
          correct: "Sit next to me.",
          reason: "Use next to/beside for immediate adjacency; near can allow a gap.",
        },
        {
          wrong: "My home is near to the school.",
          correct: "My home is near the school.",
          reason: "As a preposition, near usually does not take to in modern everyday usage.",
        },
        {
          wrong: "Put the cup near the table. (when the cup is on the table)",
          correct: "Put the cup on the table.",
          reason: "Near means close by, not surface contact.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "选择正确介词：There is a convenience store ___ my home (步行 3 分钟).",
          options: ["near", "next to", "on"],
          answer: "near",
          explanation: "表达“离我家不远”用 near。",
        },
        {
          prompt: "选择正确介词：Please sit ___ me. We need to share this book.",
          options: ["next to", "near", "under"],
          answer: "next to",
          explanation: "需要并排紧挨着时，next to 更自然。",
        },
        {
          prompt: "选择更自然的表达：We live ___ the subway entrance (非常近).",
          options: ["close to", "near", "far from"],
          answer: "close to",
          explanation: "强调“非常近”时 close to 往往比 near 更强。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: There is a convenience store ___ my home (a 3-minute walk).",
          options: ["near", "next to", "on"],
          answer: "near",
          explanation: "Near is used for general closeness in distance.",
        },
        {
          prompt: "Choose the correct preposition: Please sit ___ me. We need to share this book.",
          options: ["next to", "near", "under"],
          answer: "next to",
          explanation: "When side-by-side adjacency is required, next to is clearer than near.",
        },
        {
          prompt: "Choose the better phrase: We live ___ the subway entrance (very close).",
          options: ["close to", "near", "far from"],
          answer: "close to",
          explanation: "Close to often emphasizes very short distance.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "near 的核心意思是什么？",
          answer:
            "near 的核心是“距离近、离得不远”。它不要求紧挨着，也不要求一定并排，只要在可感知的近距离范围即可。",
        },
        {
          question: "near 和 next to 怎么快速区分？",
          answer:
            "问一句：是否必须“紧挨着/隔壁/并排”？如果是，用 next to/beside；如果只是“在附近”，用 near。",
        },
        {
          question: "near 和 close to 的差别是什么？",
          answer:
            "close to 常更强调“非常近”，语气更强；near 更中性。两者都正确时，想强调“近得明显”可选 close to。",
        },
        {
          question: "near 和 beside/by 有什么关系？",
          answer:
            "beside/by 往往更像“在一侧、在旁边”；near 只讲距离，不强制侧向并排。若你不确定方向关系，只想说近，near 更稳。",
        },
        {
          question: "near 后面需要加 to 吗？",
          answer:
            "通常不需要。日常表达更常见 near + 名词（near the station）。near to 存在但偏少见，初学者可先用 near + 名词。",
        },
        {
          question: "near 能用于时间吗？",
          answer:
            "可以，用法是“接近某个时间点/阶段”，如 near midnight、near the end of the month。初学者先掌握空间义，再把它当作扩展用法即可。",
        },
        {
          question: "near 的高频句型有哪些？",
          answer:
            "常见是 near + 地点/人（near the park, near me），也常搭配 near here（这附近）和 somewhere near（附近某处）。",
        },
        {
          question: "初学者最常见的 near 错误是什么？",
          answer:
            "把需要紧挨的场景用 near（应 next to），或把接触表面的关系用 near（应 on），以及写成 near to（不自然）。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of near?",
          answer:
            "Near means close in distance. It does not require immediate adjacency or a specific side orientation.",
        },
        {
          question: "How do I quickly choose between near and next to?",
          answer:
            "Ask one question: Do you need direct adjacency (side-by-side, no gap)? If yes, use next to/beside. If you only mean close by, use near.",
        },
        {
          question: "What is the difference between near and close to?",
          answer:
            "Close to often emphasizes very short distance. Near is more neutral and broad.",
        },
        {
          question: "How is near related to beside/by?",
          answer:
            "Beside/by often suggests being at the side. Near focuses on distance only. If direction is not important, near is a safe choice.",
        },
        {
          question: "Do I need 'to' after near?",
          answer:
            "In everyday modern usage, near usually works as near + noun (near the station). Near to exists but is less common for beginners.",
        },
        {
          question: "Can near be used for time?",
          answer:
            "Yes. It can mean close to a time point or stage (near midnight, near the end of the month). Treat it as an extension after mastering space usage.",
        },
        {
          question: "What are common patterns with near?",
          answer:
            "The main pattern is near + place/person (near the park, near me). Near here and somewhere near are also high-frequency.",
        },
        {
          question: "What is a common learner mistake with near?",
          answer:
            "Using near when strict adjacency is needed (use next to) or when surface contact is intended (use on).",
        },
      ],
    },
    scene: makeScene([1.2, 0, 0]),
  },
  {
    id: "by",
    word: "by",
    tags: ["space", "side", "near"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……旁边",
        tips: ["口语常用，含义接近 near/beside。", "可表示紧靠在一旁。"],
      },
      en: {
        meaning: "by; close to",
        tips: ["Casual, similar to near/beside.", "Often implies very close."],
      },
    },
    examples: [
      {
        en: "Stand by the door.",
        i18n: {
          "zh-CN": { translation: "站在门旁边。" },
          en: { translation: "Stand by the door." },
        },
      },
      {
        en: "The lamp is by the bed.",
        i18n: {
          "zh-CN": { translation: "灯在床边。" },
          en: { translation: "The lamp is by the bed." },
        },
      },
    ],
    scene: makeScene([0.65, 0, 0]),
  },
  {
    id: "behind",
    word: "behind",
    tags: ["space", "back"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……后面（后方）",
        tips: [
          "空间：在参照物的后方（与 in front of 相对）。",
          "进度：落后于计划或他人（behind schedule / behind in math / behind on rent）。",
          "搭配：behind + 名词；behind in + 学习/比赛进度；behind on + 任务/付款。",
        ],
      },
      en: {
        meaning: "at the back of; at the rear (also: late in progress)",
        tips: [
          "Space: at the back of something (opposite of in front of).",
          "Progress: later than planned or others (behind schedule, behind in math, behind on rent).",
          "Patterns: behind + noun; behind in + subject/progress; behind on + tasks/payments.",
        ],
      },
    },
    examples: [
      {
        en: "The ball is behind the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子后面。" },
          en: { translation: "The ball is behind the box." },
        },
      },
      {
        en: "The car is behind the bus.",
        i18n: {
          "zh-CN": { translation: "汽车在公交车后面。" },
          en: { translation: "The car is behind the bus." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "The cat is behind the sofa.",
          i18n: {
            "zh-CN": { translation: "猫在沙发后面。" },
            en: { translation: "The cat is behind the sofa." },
          },
        },
        {
          en: "Stand behind the line.",
          i18n: {
            "zh-CN": { translation: "站到线后面。" },
            en: { translation: "Stand behind the line." },
          },
        },
      ],
      time: [
        {
          en: "We're behind schedule.",
          i18n: {
            "zh-CN": { translation: "我们进度落后了。" },
            en: { translation: "We're behind schedule." },
          },
        },
        {
          en: "I'm behind in math this semester.",
          i18n: {
            "zh-CN": { translation: "这学期我的数学进度落后了。" },
            en: { translation: "I'm behind in math this semester." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "behind 的核心是“在后方”。它还常引申表示“进度落后”（behind schedule / behind in/on）。若表达纯时间顺序“更晚”，通常用 after，而不是 behind。",
          differences: [
            {
              term: "in front of",
              description:
                "in front of 是“在前面”；behind 是“在后面”。两者是最直接的一对反义空间关系。",
              examples: [
                {
                  term: "in front of",
                  sentence: "The ball is in front of the box.",
                  translation: "球在盒子前面。",
                },
                {
                  term: "behind",
                  sentence: "The ball is behind the box.",
                  translation: "球在盒子后面。",
                },
              ],
            },
            {
              term: "ahead of",
              description:
                "ahead of 常表示“领先/提前”；behind 表示“落后/拖后”。在进度表达里它们很常成对出现。",
              examples: [
                {
                  term: "ahead of",
                  sentence: "We're ahead of schedule.",
                  translation: "我们进度提前了。",
                },
                {
                  term: "behind",
                  sentence: "We're behind schedule.",
                  translation: "我们进度落后了。",
                },
              ],
            },
            {
              term: "in back of",
              description:
                "in back of 是较口语的美式表达，含义接近 behind；behind 更通用也更常见。",
              examples: [
                {
                  term: "behind",
                  sentence: "The garage is behind the house.",
                  translation: "车库在房子后面。",
                },
                {
                  term: "in back of",
                  sentence: "The garage is in back of the house.",
                  translation: "车库在房子后面（口语/美式）。",
                },
              ],
            },
            {
              term: "after",
              description:
                "after 表示时间顺序“在……之后”；behind 更像“进度落后”，不等于“时间点更晚”。",
              examples: [
                {
                  term: "after",
                  sentence: "The meeting is after 3 p.m.",
                  translation: "会议在下午三点之后。",
                },
                {
                  term: "behind",
                  sentence: "We're behind schedule.",
                  translation: "我们进度落后了。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            'Behind mainly means "at the back." It also commonly expresses being late in progress (behind schedule, behind in/on). For simple time order, English usually uses after, not behind.',
          differences: [
            {
              term: "in front of",
              description:
                "In front of is the direct opposite: front vs back position.",
              examples: [
                { term: "in front of", sentence: "The ball is in front of the box." },
                { term: "behind", sentence: "The ball is behind the box." },
              ],
            },
            {
              term: "ahead of",
              description:
                "Ahead of often means earlier/ahead in progress; behind means late/behind in progress.",
              examples: [
                { term: "ahead of", sentence: "We're ahead of schedule." },
                { term: "behind", sentence: "We're behind schedule." },
              ],
            },
            {
              term: "in back of",
              description:
                "In back of is a more conversational American variant. Behind is the general all-purpose option.",
              examples: [
                { term: "behind", sentence: "The garage is behind the house." },
                { term: "in back of", sentence: "The garage is in back of the house." },
              ],
            },
            {
              term: "after",
              description:
                "After is time order. Behind is about position or progress, not simply a later clock time.",
              examples: [
                { term: "after", sentence: "The meeting is after 3 p.m." },
                { term: "behind", sentence: "We're behind schedule." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "真实空间类",
          items: [
            { phrase: "behind the box", meaning: "在盒子后面" },
            { phrase: "behind the door", meaning: "在门后面" },
            { phrase: "behind the car", meaning: "在车后面" },
            { phrase: "behind the tree", meaning: "在树后面" },
            { phrase: "behind the curtain", meaning: "在帘子后面" },
            { phrase: "behind the building", meaning: "在楼后面" },
          ],
        },
        {
          title: "进度落后类",
          items: [
            { phrase: "behind schedule", meaning: "进度落后" },
            { phrase: "behind in math", meaning: "数学进度落后" },
            { phrase: "behind on rent", meaning: "房租拖欠" },
            { phrase: "behind on payments", meaning: "付款/还款拖欠" },
            { phrase: "behind on homework", meaning: "作业没跟上" },
            { phrase: "two weeks behind", meaning: "落后两周" },
          ],
        },
        {
          title: "高频固定表达类",
          items: [
            { phrase: "behind the scenes", meaning: "在幕后；暗中" },
            { phrase: "behind bars", meaning: "在监狱里" },
            { phrase: "behind closed doors", meaning: "私下；不公开" },
            { phrase: "behind your back", meaning: "背着你；在你背后" },
            { phrase: "behind the wheel", meaning: "开车；在方向盘后" },
            { phrase: "behind the times", meaning: "落伍；跟不上时代" },
          ],
        },
      ],
      en: [
        {
          title: "Physical position",
          items: [
            "behind the box",
            "behind the door",
            "behind the car",
            "behind the tree",
            "behind the curtain",
            "behind the building",
          ],
        },
        {
          title: "Behind in progress",
          items: [
            "behind schedule",
            "behind in math",
            "behind on rent",
            "behind on payments",
            "behind on homework",
            "two weeks behind",
          ],
        },
        {
          title: "Fixed phrases",
          items: [
            "behind the scenes",
            "behind bars",
            "behind closed doors",
            "behind your back",
            "behind the wheel",
            "behind the times",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The bag is behind of the chair.",
          correct: "The bag is behind the chair.",
          reason: "behind 后面不需要 of，直接 behind + 名词。",
        },
        {
          wrong: "The meeting is behind 3 p.m.",
          correct: "The meeting is after 3 p.m.",
          reason: "表达时间顺序“在……之后”用 after，不用 behind。",
        },
        {
          wrong: "I'm behind on math this week.",
          correct: "I'm behind in math this week.",
          reason: "学科/学习进度常用 behind in；任务/账单更常用 behind on。",
        },
      ],
      en: [
        {
          wrong: "The bag is behind of the chair.",
          correct: "The bag is behind the chair.",
          reason: "Do not add of after behind in this pattern.",
        },
        {
          wrong: "The meeting is behind 3 p.m.",
          correct: "The meeting is after 3 p.m.",
          reason: "Use after for simple time order. Behind is not a clock-time preposition.",
        },
        {
          wrong: "I'm behind on math this week.",
          correct: "I'm behind in math this week.",
          reason: "Behind in often fits subjects/skills; behind on fits tasks/payments.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "选择正确介词：The cat is ___ the sofa.",
          options: ["behind", "in front of", "under"],
          answer: "behind",
          explanation: "在沙发后方的位置关系，用 behind。",
        },
        {
          prompt: "选择正确介词：We're ___ schedule, so we need to speed up.",
          options: ["behind", "over", "between"],
          answer: "behind",
          explanation: "进度落后常用 behind schedule。",
        },
        {
          prompt: "选择更自然的表达：The meeting is ___ 3 p.m.",
          options: ["after", "behind", "by"],
          answer: "after",
          explanation: "时间顺序“在……之后”用 after；behind 不表示具体时间点顺序。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: The cat is ___ the sofa.",
          options: ["behind", "in front of", "under"],
          answer: "behind",
          explanation: "Behind expresses back position relative to the sofa.",
        },
        {
          prompt: "Choose the correct preposition: We're ___ schedule, so we need to speed up.",
          options: ["behind", "over", "between"],
          answer: "behind",
          explanation: "Behind schedule is the standard progress expression.",
        },
        {
          prompt: "Choose the better word: The meeting is ___ 3 p.m.",
          options: ["after", "behind", "by"],
          answer: "after",
          explanation: "Use after for time order. Behind is not used for clock-time sequencing.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "behind 的核心含义是什么？",
          answer:
            "behind 的核心是“在后方”。空间上表示在某物后面；引申义常表示“进度落后”，如 behind schedule。",
        },
        {
          question: "什么时候用 behind？",
          answer:
            "当你要表达“在后面/后方”或“进度落后于计划”时用 behind。例：The car is behind the bus / We're behind schedule。",
        },
        {
          question: "behind 和 in front of 有什么区别？",
          answer:
            "它们是空间反义：in front of 在前面；behind 在后面。例：The ball is in front of the box vs behind the box。",
        },
        {
          question: "behind 和 ahead of 有什么区别？",
          answer:
            "在进度语境中，ahead of 表示领先/提前；behind 表示落后/拖后。例：ahead of schedule vs behind schedule。",
        },
        {
          question: "behind 和 after 能互换吗？",
          answer:
            "通常不能。after 表示时间顺序“在……之后”；behind 表示位置或进度落后。表达时间点顺序用 after。",
        },
        {
          question: "behind in 和 behind on 怎么区分？",
          answer:
            "behind in 常接学科/技能/进度（behind in math/reading）；behind on 常接任务/账单（behind on homework/rent/payments）。",
        },
        {
          question: "初学者最常见错误是什么？",
          answer:
            "最常见是误加 of（behind of ❌），正确是 behind + 名词。另一个常见是把 behind 当作时间顺序词（应 after）。",
        },
        {
          question: "30 秒记住 behind 的方法？",
          answer:
            "记两个锚点：空间画面“在后方”（behind the box）+ 进度表达“落后计划”（behind schedule）。遇到时间顺序就改用 after。",
        },
      ],
      en: [
        {
          question: "What does \"behind\" mean?",
          answer:
            "Behind mainly means at the back of something. It can also mean late in progress, as in behind schedule.",
        },
        {
          question: "When should I use \"behind\"?",
          answer:
            "Use behind for back position or late progress. Example: The car is behind the bus. We're behind schedule.",
        },
        {
          question: "What is the difference between \"behind\" and \"in front of\"?",
          answer:
            "They are opposites in space: in front of is front position, behind is back position. Example: in front of the box vs behind the box.",
        },
        {
          question: "What is the difference between \"behind\" and \"ahead of\"?",
          answer:
            "In progress language, ahead of means early/leading; behind means late/lagging. Example: ahead of schedule vs behind schedule.",
        },
        {
          question: "Is \"behind\" the same as \"after\"?",
          answer:
            "Usually no. After is time order. Behind is position or progress. For clock-time order, use after.",
        },
        {
          question: "How do I choose between \"behind in\" and \"behind on\"?",
          answer:
            "Behind in often fits subjects/skills (behind in math, behind in reading). Behind on often fits tasks/payments (behind on rent, behind on homework).",
        },
        {
          question: "What is a common learner mistake with \"behind\"?",
          answer:
            'A common mistake is adding "of" (behind of). Use behind + noun: behind the chair. Another mistake is using behind for time order (use after).',
        },
        {
          question: "What is a 30-second memory rule for \"behind\"?",
          answer:
            "Memorize two anchors: behind the box (space) and behind schedule (progress). Use after for simple time order.",
        },
      ],
    },
    scene: makeScene([0, 0, -1.1]),
  },
  {
    id: "in-front-of",
    word: "in front of",
    tags: ["space", "front"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……前面（面对观察者）",
        tips: ["强调在视线前方。", "与 behind 相对。"],
      },
      en: {
        meaning: "in front of; at the front",
        tips: ["Located in the front from the viewer.", "Opposite of behind."],
      },
    },
    examples: [
      {
        en: "The ball is in front of the box.",
        i18n: {
          "zh-CN": { translation: "球在盒子前面。" },
          en: { translation: "The ball is in front of the box." },
        },
      },
      {
        en: "She stands in front of the mirror.",
        i18n: {
          "zh-CN": { translation: "她站在镜子前面。" },
          en: { translation: "She stands in front of the mirror." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.1]),
  },
  {
    id: "between",
    word: "between",
    tags: ["space", "between"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之间（两个物体）",
        tips: [
          "between 强调“两端点之间”的关系（人/物/时间范围）。",
          "among 强调“在一群里”；但如果是清晰的端点/对应关系，三个及以上也可用 between。",
          "固定搭配：between A and B（不是 between A to B）。",
        ],
      },
      en: {
        meaning: "between; in the middle of two",
        tips: [
          "Between links two endpoints (people/things, or a time range with A and B).",
          "Among means inside a group; but between can also work with 3+ when the endpoints/relationships are clear.",
          "Pattern: between A and B (not between A to B).",
        ],
      },
    },
    examples: [
      {
        en: "The ball is between the boxes.",
        i18n: {
          "zh-CN": { translation: "球在两个盒子之间。" },
          en: { translation: "The ball is between the boxes." },
        },
      },
      {
        en: "The cafe is between the bank and the bookstore.",
        i18n: {
          "zh-CN": { translation: "咖啡店在银行和书店之间。" },
          en: { translation: "The cafe is between the bank and the bookstore." },
        },
      },
    ],
    examplesByCategory: {
      time: [
        createLocalizedExample(
          "Call me between 7 and 9 p.m.",
          "请在晚上 7 点到 9 点之间给我打电话。",
        ),
        createLocalizedExample(
          "I grabbed a coffee between classes.",
          "我在两节课之间去买了杯咖啡。",
        ),
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "between 强调“两端点之间”的关系（空间/时间范围）；和 among/from/through 对比能更快避免混用。",
          differences: [
            {
              term: "among",
              description:
                "among 表示“在一群里/群体之中”；between 表示“端点之间/两方之间”的关系。",
              examples: [
                {
                  term: "among",
                  sentence: "He sat among his friends.",
                  translation: "他坐在朋友们中间（在一群人里）。",
                },
                {
                  term: "between",
                  sentence: "Keep this between you and me.",
                  translation: "这件事只在你我之间保密。",
                },
              ],
            },
            {
              term: "from",
              description:
                "between 表示有两个端点的范围；from 表示起点，常和 to/until 搭配说明终点。",
              examples: [
                {
                  term: "between",
                  sentence: "I’m free between 2 and 3 p.m.",
                  translation: "我 2 点到 3 点之间有空。",
                },
                {
                  term: "from",
                  sentence: "I’m free from 2 to 3 p.m.",
                  translation: "我从 2 点到 3 点有空。",
                },
              ],
            },
            {
              term: "through",
              description:
                "between 表示被两个端点“夹住”的区间；through 强调从开始到结束“持续不断”。",
              examples: [
                {
                  term: "between",
                  sentence: "The office is closed between 12 and 1 p.m.",
                  translation: "办公室在 12 点到 1 点之间关闭。",
                },
                {
                  term: "through",
                  sentence: "The office stayed open through the afternoon.",
                  translation: "办公室整个下午都保持开放。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Between links endpoints (space or time ranges). Compare it with among/from/through to avoid overlap.",
          differences: [
            {
              term: "among",
              description:
                "Among means inside a group; between links endpoints or one-to-one relationships.",
              examples: [
                { term: "among", sentence: "He sat among his friends." },
                { term: "between", sentence: "Keep this between you and me." },
              ],
            },
            {
              term: "from",
              description:
                "Between is a range with two endpoints; from marks the starting point (often paired with to/until).",
              examples: [
                { term: "between", sentence: "I’m free between 2 and 3 p.m." },
                { term: "from", sentence: "I’m free from 2 to 3 p.m." },
              ],
            },
            {
              term: "through",
              description:
                "Between is a bounded interval; through emphasizes continuous coverage until an end.",
              examples: [
                {
                  term: "between",
                  sentence: "The office is closed between 12 and 1 p.m.",
                },
                {
                  term: "through",
                  sentence: "The office stayed open through the afternoon.",
                },
              ],
            },
          ],
        },
      },
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "Call me between 7 to 9 p.m.",
          correct: "Call me between 7 and 9 p.m.",
          reason:
            "固定结构是 between A and B；不要用 between A to B。",
        },
        {
          wrong: "Between you and I, this is hard.",
          correct: "Between you and me, this is hard.",
          reason:
            "介词后用宾格：between you and me（不是 between you and I）。",
        },
      ],
      en: [
        {
          wrong: "Call me between 7 to 9 p.m.",
          correct: "Call me between 7 and 9 p.m.",
          reason: 'Use "between A and B" (not "between A to B").',
        },
        {
          wrong: "Between you and I, this is hard.",
          correct: "Between you and me, this is hard.",
          reason: "Use object pronouns after a preposition (me, him, her, us, them).",
        },
      ],
    },
    scene: makeScene([0, 0, 0], {
      variant: "twoCubes",
    }),
  },
  {
    id: "among",
    word: "among",
    tags: ["space", "among"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之中（多者之间）",
        tips: ["通常是三个及以上之间。", "强调在一群中。"],
      },
      en: {
        meaning: "among; in a group of many",
        tips: ["Used for three or more.", "In the middle of a group."],
      },
    },
    examples: [
      {
        en: "The ball is among the boxes.",
        i18n: {
          "zh-CN": { translation: "球在一堆盒子中间。" },
          en: { translation: "The ball is among the boxes." },
        },
      },
      {
        en: "He sat among his friends.",
        i18n: {
          "zh-CN": { translation: "他坐在朋友们中间。" },
          en: { translation: "He sat among his friends." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "around",
    word: "around",
    tags: ["space", "around"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……周围（环绕）",
        tips: ["强调围绕在周边。", "可表示环绕或分布在周围。"],
      },
      en: {
        meaning: "around; surrounding",
        tips: ["Surrounding or encircling.", "Can mean spread around."],
      },
    },
    examples: [
      {
        en: "The kids sit around the table.",
        i18n: {
          "zh-CN": { translation: "孩子们围着桌子坐。" },
          en: { translation: "The kids sit around the table." },
        },
      },
      {
        en: "Trees grow around the house.",
        i18n: {
          "zh-CN": { translation: "树长在房子周围。" },
          en: { translation: "Trees grow around the house." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0], {
      variant: "ringCubes",
      animation: {
        type: "path",
        duration: 3.2,
        closed: true,
        path: [
          [1.2, 0, 0],
          [0.85, 0, 0.85],
          [0, 0, 1.2],
          [-0.85, 0, 0.85],
          [-1.2, 0, 0],
          [-0.85, 0, -0.85],
          [0, 0, -1.2],
          [0.85, 0, -0.85],
        ],
      },
    }),
  },
  {
    id: "inside",
    word: "inside",
    tags: ["space", "inside"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……内部",
        tips: ["强调内部空间。", "比 in 更强调边界。"],
      },
      en: {
        meaning: "inside; within",
        tips: ["Inside a boundary.", "Often emphasizes the boundary."],
      },
    },
    examples: [
      {
        en: "There is a toy inside the bag.",
        i18n: {
          "zh-CN": { translation: "包里有个玩具。" },
          en: { translation: "There is a toy inside the bag." },
        },
      },
      {
        en: "Stay inside the room.",
        i18n: {
          "zh-CN": { translation: "待在房间里。" },
          en: { translation: "Stay inside the room." },
        },
      },
    ],
    scene: makeScene([0, 0, 0]),
  },
  {
    id: "outside",
    word: "outside",
    tags: ["space", "outside"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……外面",
        tips: [
          "与 inside 相对：表示在边界/房间/建筑外。",
          "outside 描述位置；若强调“从里到外离开”，用 out of。",
          "表示“超出范围”也常用 outside：outside the scope / outside office hours。",
        ],
      },
      en: {
        meaning: "outside; not inside a place or boundary",
        tips: [
          "Opposite of inside: outside a boundary/building/room.",
          "Outside is location; for leaving (movement), use out of.",
          "It can also mean beyond a range: outside the scope / outside office hours.",
        ],
      },
    },
    examples: [
      {
        en: "The dog is outside the house.",
        i18n: {
          "zh-CN": { translation: "狗在房子外面。" },
          en: { translation: "The dog is outside the house." },
        },
      },
      {
        en: "He waits outside the room.",
        i18n: {
          "zh-CN": { translation: "他在房间外等。" },
          en: { translation: "He waits outside the room." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0]),
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "outside 表示“在边界之外”的位置；初学者最常混淆的是 outside（位置）vs out of（从里出来的动作）vs without（缺少/没有）。",
          differences: [
            {
              term: "inside",
              description:
                "inside 表示在内部；outside 表示在外部（位置对立）。",
              examples: [
                {
                  term: "inside",
                  sentence: "The dog is inside the house.",
                  translation: "狗在房子里。",
                },
                {
                  term: "outside",
                  sentence: "The dog is outside the house.",
                  translation: "狗在房子外面。",
                },
              ],
            },
            {
              term: "out of",
              description:
                "out of 强调从内部离开的动作/路径；outside 只说明位置在外面。",
              examples: [
                {
                  term: "out of",
                  sentence: "He went out of the room.",
                  translation: "他走出房间。",
                },
                {
                  term: "outside",
                  sentence: "He is waiting outside the room.",
                  translation: "他在房间外面等。",
                },
              ],
            },
            {
              term: "without",
              description:
                "without 表示“缺少/没有”；outside 表示“在外面/在范围之外”。",
              examples: [
                {
                  term: "without",
                  sentence: "I left home without my keys.",
                  translation: "我没带钥匙就出门了。",
                },
                {
                  term: "outside",
                  sentence: "Please wait outside the office.",
                  translation: "请在办公室外等。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Outside means not inside a boundary (a location). Beginners often confuse it with out of (movement) and without (lack).",
          differences: [
            {
              term: "inside",
              description:
                "Inside means within the boundary; outside means not within it.",
              examples: [
                { term: "inside", sentence: "The dog is inside the house." },
                { term: "outside", sentence: "The dog is outside the house." },
              ],
            },
            {
              term: "out of",
              description:
                "Out of emphasizes leaving (movement) from inside to outside; outside is a static location.",
              examples: [
                { term: "out of", sentence: "He went out of the room." },
                { term: "outside", sentence: "He is waiting outside the room." },
              ],
            },
            {
              term: "without",
              description:
                'Without means "lacking / not having"; outside is about location or being beyond a range.',
              examples: [
                { term: "without", sentence: "I left home without my keys." },
                { term: "outside", sentence: "Please wait outside the office." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "地点搭配",
          items: [
            { phrase: "outside the house", meaning: "在房子外面" },
            { phrase: "outside the door", meaning: "在门外" },
            { phrase: "outside the room", meaning: "在房间外" },
            { phrase: "outside the school", meaning: "在学校外" },
            { phrase: "outside the city", meaning: "在城外" },
            { phrase: "outside the window", meaning: "在窗外" },
          ],
        },
        {
          title: "常用动词",
          items: [
            { phrase: "wait outside", meaning: "在外面等" },
            { phrase: "stand outside", meaning: "站在外面" },
            { phrase: "meet outside", meaning: "在外面见面" },
            { phrase: "be outside", meaning: "在外面" },
            { phrase: "go outside", meaning: "到外面去" },
            { phrase: "sit outside", meaning: "坐在外面" },
          ],
        },
        {
          title: "抽象/习语",
          items: [
            { phrase: "outside the box", meaning: "跳出框架思考" },
            { phrase: "outside the scope", meaning: "超出范围" },
            { phrase: "outside the rules", meaning: "不符合规则/越界" },
            { phrase: "outside normal hours", meaning: "非正常营业时间" },
            { phrase: "outside my comfort zone", meaning: "走出舒适区" },
            { phrase: "outside the system", meaning: "系统之外/体制外" },
          ],
        },
      ],
      en: [
        {
          title: "Places",
          items: [
            "outside the house",
            "outside the door",
            "outside the room",
            "outside the school",
            "outside the city",
            "outside the window",
          ],
        },
        {
          title: "Verbs + outside",
          items: [
            "wait outside",
            "stand outside",
            "meet outside",
            "be outside",
            "go outside",
            "sit outside",
          ],
        },
        {
          title: "Abstract / idioms",
          items: [
            "outside the box",
            "outside the scope",
            "outside the rules",
            "outside normal hours",
            "outside my comfort zone",
            "outside the system",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "He went outside the room.",
          correct: "He went out of the room.",
          reason: "go/went 表示动作“从里到外离开”，用 out of；outside 更偏位置。",
        },
        {
          wrong: "I left home outside my keys.",
          correct: "I left home without my keys.",
          reason: "without 表示“没带/缺少”；outside 不能表达“没有”。",
        },
        {
          wrong: "The chair is outside the table.",
          correct: "The chair is next to the table.",
          reason: "outside 强调“在边界外”；只是并排靠近，用 next to/beside。",
        },
        {
          wrong: "He is outside of.",
          correct: "He is outside.",
          reason:
            "outside 可以作副词单独使用；要接宾语时直接 outside + 名词短语即可。",
        },
      ],
      en: [
        {
          wrong: "He went outside the room.",
          correct: "He went out of the room.",
          reason: "Outside is location; out of is movement leaving a place.",
        },
        {
          wrong: "I left home outside my keys.",
          correct: "I left home without my keys.",
          reason: 'Without means "lacking / not having"; outside is not used for that.',
        },
        {
          wrong: "The chair is outside the table.",
          correct: "The chair is next to the table.",
          reason: "Outside is about a boundary; next to is side-by-side adjacency.",
        },
        {
          wrong: "He is outside of.",
          correct: "He is outside.",
          reason:
            "Outside can be an adverb on its own. Don't add of unless you need outside of + noun (often unnecessary).",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "选择正确的介词：The kids are playing ___ the house.",
          options: ["outside", "inside", "out of", "without"],
          answer: "outside",
          explanation: "表示位置：在房子外面，用 outside。",
        },
        {
          prompt: "选择正确的介词：Please wait ___ the room.",
          options: ["outside", "out of", "inside", "without"],
          answer: "outside",
          explanation: "wait 是静态位置；在房间外等，用 outside（不是 out of 的离开动作）。",
        },
        {
          prompt: "选择正确的介词：This topic is ___ the scope of today's lesson.",
          options: ["outside", "inside", "between", "without"],
          answer: "outside",
          explanation: "outside + scope 表示“超出范围”。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: The kids are playing ___ the house.",
          options: ["outside", "inside", "out of", "without"],
          answer: "outside",
          explanation: "It describes a location: not inside the house.",
        },
        {
          prompt: "Choose the correct preposition: Please wait ___ the room.",
          options: ["outside", "out of", "inside", "without"],
          answer: "outside",
          explanation: "Wait is a static situation; outside marks the location.",
        },
        {
          prompt:
            "Choose the correct preposition: This topic is ___ the scope of today's lesson.",
          options: ["outside", "inside", "between", "without"],
          answer: "outside",
          explanation: 'Outside + scope means "beyond the range".',
        },
      ],
    },
    faq: {
      en: [
        {
          question: 'What does "outside" mean?',
          answer:
            'Outside means "not inside a boundary" (a location). Example: The dog is outside the house.',
        },
        {
          question: 'When do I use "outside" vs "out of"?',
          answer:
            'Use outside for location (wait outside the room). Use out of for movement leaving a place (go out of the room).',
        },
        {
          question: 'Is "outside" a preposition or an adverb?',
          answer:
            'Both. Preposition: outside + noun (outside the door). Adverb: go outside / He is outside (no object).',
        },
        {
          question: 'What is the difference between "outside" and "without"?',
          answer:
            'Outside is about location or being beyond a range (outside the city, outside the scope). Without means "lacking / not having" (without money, without my keys).',
        },
        {
          question: 'Can I say "outside of"?',
          answer:
            'For basic location, outside is usually enough (outside the house). Outside of is common in some styles and can also mean "except for", but beginners can often omit of.',
        },
        {
          question: 'How do I use "outside" for abstract meaning (scope/rules/hours)?',
          answer:
            'Use outside + noun to mean "beyond": outside the scope, outside the rules, outside office hours.',
        },
        {
          question: 'What are common collocations with "outside"?',
          answer:
            "outside the house, outside the door, wait outside, go outside, outside the box, outside the scope.",
        },
        {
          question: 'How can I remember "outside" quickly?',
          answer:
            'Picture a box boundary: not inside = outside. Leaving the box (movement) = out of.',
        },
      ],
      "zh-CN": [
        {
          question: "outside 是什么意思？",
          answer:
            "outside 表示“在边界之外”的位置。例句：The dog is outside the house.（狗在房子外面。）",
        },
        {
          question: "outside 和 inside 的区别是什么？",
          answer:
            "inside 在内部；outside 在外部（位置对立）。inside the house vs outside the house。",
        },
        {
          question: "outside 和 out of 的区别是什么？",
          answer:
            "outside 描述位置（在外面）；out of 描述“从里到外离开”的动作/路径。wait outside the room vs go out of the room。",
        },
        {
          question: "outside 和 without 的区别是什么？",
          answer:
            "outside 是“在外面/在范围外”；without 是“没有/缺少”。outside the city/outside the scope vs without money/without my keys。",
        },
        {
          question: "outside 可以单独用吗？",
          answer:
            "可以。outside 可作副词：go outside / He is outside（不需要宾语）。作介词时：outside + 名词短语（outside the door）。",
        },
        {
          question: "outside of 要用吗？",
          answer:
            "入门阶段通常直接用 outside + 名词短语就够了（outside the house）。outside of 在部分语体里也常见，有时还可表示“除……之外”。",
        },
        {
          question: "outside 用在“范围/规则”里怎么表达？",
          answer:
            "outside + 名词表示“超出范围/不在规则内”：outside the scope, outside the rules, outside office hours。",
        },
        {
          question: "如何快速记住 outside？",
          answer:
            "把它想成一个“盒子边界”：不在盒子里就是 outside；从盒子里出来的动作用 out of。",
        },
      ],
    },
  },
  {
    id: "across",
    word: "across",
    tags: ["space", "across"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……对面/穿过",
        tips: ["强调从一侧到另一侧（对面）。", "across 跨越表面，through 穿过内部。"],
      },
      en: {
        meaning: "across; to the other side",
        tips: ["From one side to the other.", "Across a surface; through goes inside."],
      },
    },
    examples: [
      {
        en: "The cafe is across the street.",
        i18n: {
          "zh-CN": { translation: "咖啡店在街对面。" },
          en: { translation: "The cafe is across the street." },
        },
      },
      {
        en: "The bridge is across the river.",
        i18n: {
          "zh-CN": { translation: "桥横跨河流。" },
          en: { translation: "The bridge is across the river." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0.8], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.2, 0, 0.8],
          [0.4, 0.2, 0.85],
          [-1.2, 0, 0.8],
          [-0.2, 0.15, 0.75],
          [1.2, 0, 0.8],
        ],
      },
    }),
  },
  {
    id: "through",
    word: "through",
    tags: ["space", "through"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "穿过……（从一侧到另一侧）",
        tips: ["通常表示经过内部。", "强调进入并穿出。"],
      },
      en: {
        meaning: "through; from one side to the other",
        tips: ["Passing within or inside.", "Goes into and out of."],
      },
    },
    examples: [
      {
        en: "Walk through the door.",
        i18n: {
          "zh-CN": { translation: "从门里穿过去。" },
          en: { translation: "Walk through the door." },
        },
      },
      {
        en: "The train goes through the tunnel.",
        i18n: {
          "zh-CN": { translation: "火车穿过隧道。" },
          en: { translation: "The train goes through the tunnel." },
        },
      },
    ],
    scene: makeScene([0, 0, 0.4], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [0, 0, 0.4],
          [0, 0.2, 1.2],
          [0, -0.1, -1.2],
          [0, 0, 0.4],
        ],
      },
    }),
  },
  {
    id: "against",
    word: "against",
    tags: ["space", "contact"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "靠着……/贴着",
        tips: ["强调接触并有支撑感。", "不是“远离”，而是紧贴。"],
      },
      en: {
        meaning: "against; touching and supported",
        tips: ["Touching with support.", "Close contact, not away."],
      },
    },
    examples: [
      {
        en: "The ladder is against the wall.",
        i18n: {
          "zh-CN": { translation: "梯子靠在墙上。" },
          en: { translation: "The ladder is against the wall." },
        },
      },
      {
        en: "He leaned against the door.",
        i18n: {
          "zh-CN": { translation: "他靠在门上。" },
          en: { translation: "He leaned against the door." },
        },
      },
    ],
    scene: makeScene([0.7, 0, 0]),
  },
  {
    id: "along",
    word: "along",
    tags: ["space", "along"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "沿着……（沿线方向）",
        tips: ["强调沿着边或路径。", "常与道路/河流等线状物搭配。"],
      },
      en: {
        meaning: "along; following a line",
        tips: ["Following a path or edge.", "Often with roads or rivers."],
      },
    },
    examples: [
      {
        en: "We walked along the river.",
        i18n: {
          "zh-CN": { translation: "我们沿着河边走。" },
          en: { translation: "We walked along the river." },
        },
      },
      {
        en: "The lamp posts line up along the street.",
        i18n: {
          "zh-CN": { translation: "路灯沿街排开。" },
          en: { translation: "The lamp posts line up along the street." },
        },
      },
    ],
    scene: makeScene([0, 0, 0.8], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [0, 0, 0.8],
          [0.8, 0, 0.95],
          [1.6, 0, 0.8],
          [0.8, 0, 0.65],
          [0, 0, 0.8],
        ],
      },
    }),
  },
  {
    id: "into",
    word: "into",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "进入……里面（方向）",
        tips: ["表示从外到内的运动方向。", "静态位置用 in。"],
      },
      en: {
        meaning: "into; moving inside",
        tips: ["Movement from outside to inside.", "Use in for a static position."],
      },
    },
    examples: [
      {
        en: "The ball rolls into the box.",
        i18n: {
          "zh-CN": { translation: "球滚进盒子里。" },
          en: { translation: "The ball rolls into the box." },
        },
      },
      {
        en: "She went into the room.",
        i18n: {
          "zh-CN": { translation: "她走进房间。" },
          en: { translation: "She went into the room." },
        },
      },
    ],
    scene: makeScene([0, 0, 0.1], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 1.4],
        to: [0, 0, 0.1],
      },
    }),
  },
  {
    id: "onto",
    word: "onto",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "到……上面（方向）",
        tips: ["表示向上、到表面的运动。", "静态位置用 on。"],
      },
      en: {
        meaning: "onto; moving to a surface",
        tips: ["Movement onto a surface.", "Use on for a static position."],
      },
    },
    examples: [
      {
        en: "The cat jumped onto the chair.",
        i18n: {
          "zh-CN": { translation: "猫跳到椅子上。" },
          en: { translation: "The cat jumped onto the chair." },
        },
      },
      {
        en: "He put the cup onto the table.",
        i18n: {
          "zh-CN": { translation: "他把杯子放到桌上。" },
          en: { translation: "He put the cup onto the table." },
        },
      },
    ],
    scene: makeScene([0, 0.72, 0], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 1.4, 0],
        to: [0, 0.72, 0],
      },
    }),
  },
  {
    id: "out-of",
    word: "out of",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "从……出来（离开内部）",
        tips: ["表示从内到外。", "强调离开内部空间。"],
      },
      en: {
        meaning: "out of; moving outside",
        tips: ["Movement from inside to outside.", "Leaving an interior space."],
      },
    },
    examples: [
      {
        en: "The bird flew out of the cage.",
        i18n: {
          "zh-CN": { translation: "鸟飞出了笼子。" },
          en: { translation: "The bird flew out of the cage." },
        },
      },
      {
        en: "Take the book out of the bag.",
        i18n: {
          "zh-CN": { translation: "把书从包里拿出来。" },
          en: { translation: "Take the book out of the bag." },
        },
      },
    ],
    scene: makeScene([0, 0, -0.7], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 0.1],
        to: [0, 0, -0.7],
      },
    }),
  },
  {
    id: "at",
    word: "at",
    tags: ["space", "point", "location"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……（具体点/位置）",
        tips: ["强调“点位”，不强调内部或表面。", "常用于地点或具体位置。"],
      },
      en: {
        meaning: "at; a specific point or place",
        tips: ["Focuses on a point, not inside or on a surface.", "Used for exact locations."],
      },
    },
    examples: [
      {
        en: "He is at the door.",
        i18n: {
          "zh-CN": { translation: "他在门口。" },
          en: { translation: "He is at the door." },
        },
      },
      {
        en: "Meet me at the corner.",
        i18n: {
          "zh-CN": { translation: "在拐角处见我。" },
          en: { translation: "Meet me at the corner." },
        },
      },
    ],
    scene: makeScene([0.4, 0, 0.4]),
  },
  {
    id: "after",
    word: "after",
    tags: ["time", "sequence", "later"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之后（时间顺序）",
        tips: [
          "表示时间顺序：在某个时间点/事件之后。",
          "after 后面通常接“事件/时间点/从句”：after dinner / after I finish。",
          "表示“从现在起多久之后”多用 in：in two hours（除非有明确参照事件）。",
        ],
      },
      en: {
        meaning: "later than; following in time",
        tips: [
          "Use after for time order: later than a time or event.",
          "After usually takes an object: after dinner / after I finish.",
          'For duration from now, prefer in: "in two hours" (unless a clear reference event exists).',
        ],
      },
    },
    examples: [
      {
        en: "We went home after the movie.",
        i18n: {
          "zh-CN": { translation: "我们在电影结束后回家了。" },
          en: { translation: "We went home after the movie." },
        },
      },
      {
        en: "Call me after 8 p.m.",
        i18n: {
          "zh-CN": { translation: "晚上 8 点以后给我打电话。" },
          en: { translation: "Call me after 8 p.m." },
        },
      },
    ],
    examplesByCategory: {
      time: [
        {
          en: "I usually shower after work.",
          i18n: {
            "zh-CN": { translation: "我通常下班后洗澡。" },
            en: { translation: "I usually shower after work." },
          },
        },
        {
          en: "Let's talk after class.",
          i18n: {
            "zh-CN": { translation: "我们下课后再聊。" },
            en: { translation: "Let's talk after class." },
          },
        },
      ],
      space: [
        {
          en: "The dog ran after the boy.",
          i18n: {
            "zh-CN": { translation: "狗追着男孩跑。" },
            en: { translation: "The dog ran after the boy." },
          },
        },
        {
          en: "The runners came in after the leader.",
          i18n: {
            "zh-CN": { translation: "选手们在领跑者之后冲线。" },
            en: { translation: "The runners came in after the leader." },
          },
        },
      ],
    },
    scene: makeScene([0.9, 0, 0]),
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "after 用来表达时间顺序“在……之后”。最常见的混淆是：later/afterwards（副词不用宾语）、in（从现在起多久之后）、since（从某点持续到现在）。",
          differences: [
            {
              term: "later",
              description:
                "later 是副词，常不接宾语；after 是介词，后面要跟时间/事件/从句。",
              examples: [
                {
                  term: "later",
                  sentence: "I'll call you later.",
                  translation: "我晚点给你打电话。",
                },
                {
                  term: "after",
                  sentence: "I'll call you after dinner.",
                  translation: "我晚饭后给你打电话。",
                },
              ],
            },
            {
              term: "afterwards",
              description:
                "afterwards 也是副词，强调“那之后”（不需要具体宾语）；after 更常接具体参照。",
              examples: [
                {
                  term: "afterwards",
                  sentence: "We ate dinner and went for a walk afterwards.",
                  translation: "我们吃完饭，之后去散步。",
                },
                {
                  term: "after",
                  sentence: "We went for a walk after dinner.",
                  translation: "我们吃完饭后去散步。",
                },
              ],
            },
            {
              term: "in",
              description:
                "in + 时间段表示“从现在起多久之后”；after + 时间段通常需要参照事件（after two hours of waiting）。",
              examples: [
                {
                  term: "in",
                  sentence: "I'll be back in two hours.",
                  translation: "我两小时后回来。（从现在算）",
                },
                {
                  term: "after",
                  sentence: "I'll leave after two hours of waiting.",
                  translation: "我等了两小时后就走。（有参照：等待）",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            'After expresses time order "later than...". Common confusions: later/afterwards (adverbs), in (from now), and since (continuing from a starting point).',
          differences: [
            {
              term: "later",
              description:
                "Later is an adverb and often has no object; after is a preposition that takes an object (time/event/clause).",
              examples: [
                { term: "later", sentence: "I'll call you later." },
                { term: "after", sentence: "I'll call you after dinner." },
              ],
            },
            {
              term: "afterwards",
              description:
                "Afterwards is an adverb meaning then; after usually introduces a specific reference point.",
              examples: [
                { term: "afterwards", sentence: "We ate dinner and went for a walk afterwards." },
                { term: "after", sentence: "We went for a walk after dinner." },
              ],
            },
            {
              term: "in",
              description:
                'In + duration is counted from now ("in two hours"); after + duration usually needs a reference event ("after two hours of waiting").',
              examples: [
                { term: "in", sentence: "I'll be back in two hours." },
                { term: "after", sentence: "I'll leave after two hours of waiting." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "时间点/事件之后",
          items: [
            { phrase: "after school", meaning: "放学后" },
            { phrase: "after work", meaning: "下班后" },
            { phrase: "after class", meaning: "下课后" },
            { phrase: "after dinner", meaning: "晚饭后" },
            { phrase: "after the meeting", meaning: "会议后" },
            { phrase: "after lunch", meaning: "午饭后" },
          ],
        },
        {
          title: "after + 从句/动作",
          items: [
            { phrase: "after I finish", meaning: "在我完成之后" },
            { phrase: "after you arrive", meaning: "在你到达之后" },
            { phrase: "after we get home", meaning: "在我们到家之后" },
            { phrase: "after she left", meaning: "在她离开之后" },
            { phrase: "after finishing work", meaning: "完成工作之后" },
            { phrase: "after talking to him", meaning: "和他谈过之后" },
          ],
        },
        {
          title: "固定搭配",
          items: [
            { phrase: "after all", meaning: "毕竟；终究" },
            { phrase: "after a while", meaning: "过了一会儿" },
            { phrase: "after that", meaning: "在那之后" },
            { phrase: "after midnight", meaning: "午夜之后" },
            { phrase: "after dark", meaning: "天黑以后" },
            { phrase: "after the fact", meaning: "事后；事后看来" },
          ],
        },
      ],
      en: [
        {
          title: "After a time or event",
          items: [
            "after school",
            "after work",
            "after class",
            "after dinner",
            "after the meeting",
            "after lunch",
          ],
        },
        {
          title: "After + clause / -ing",
          items: [
            "after I finish",
            "after you arrive",
            "after we get home",
            "after she left",
            "after finishing work",
            "after talking to him",
          ],
        },
        {
          title: "Fixed phrases",
          items: [
            "after all",
            "after a while",
            "after that",
            "after midnight",
            "after dark",
            "after the fact",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "I'll be home after two hours.",
          correct: "I'll be home in two hours.",
          reason:
            "从“现在起过多久”通常用 in。after two hours 更需要参照事件（after two hours of driving/waiting）。",
        },
        {
          wrong: "I'll call you later dinner.",
          correct: "I'll call you after dinner.",
          reason: "later 是副词，不能直接接宾语；after 后面可以接事件/时间点。",
        },
        {
          wrong: "After, we went home.",
          correct: "Afterwards, we went home. / After dinner, we went home.",
          reason: "after 作为介词需要宾语；不带宾语时用 afterwards，或补上参照事件。",
        },
        {
          wrong: "I haven't seen her after Monday.",
          correct: "I haven't seen her since Monday.",
          reason:
            "since 表示“从某个时间点持续到现在”；after 表示时间顺序，不表示持续。",
        },
      ],
      en: [
        {
          wrong: "I'll be home after two hours.",
          correct: "I'll be home in two hours.",
          reason:
            "Use in for duration counted from now. After two hours usually needs a reference event (after two hours of driving/waiting).",
        },
        {
          wrong: "I'll call you later dinner.",
          correct: "I'll call you after dinner.",
          reason: "Later is an adverb and does not take an object; after can.",
        },
        {
          wrong: "After, we went home.",
          correct: "Afterwards, we went home. / After dinner, we went home.",
          reason: "After needs an object; without an object, use afterwards or add the reference.",
        },
        {
          wrong: "I haven't seen her after Monday.",
          correct: "I haven't seen her since Monday.",
          reason: "Since means starting then and continuing to now; after is only sequence.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "I'll call you ___ dinner.",
          options: ["after", "later", "in"],
          answer: "after",
          explanation: "after 需要接一个参照事件/时间点：after dinner。",
        },
        {
          prompt: "I'll be back ___ two hours.",
          options: ["in", "after", "since"],
          answer: "in",
          explanation: "从现在起的时间段用 in：in two hours。",
        },
        {
          prompt: "We finished dinner and went for a walk ___.",
          options: ["afterwards", "after", "since"],
          answer: "afterwards",
          explanation: "句尾不带宾语时用 afterwards（= then）。",
        },
      ],
      en: [
        {
          prompt: "I'll call you ___ dinner.",
          options: ["after", "later", "in"],
          answer: "after",
          explanation: "Use after because it introduces a reference event: after dinner.",
        },
        {
          prompt: "I'll be back ___ two hours.",
          options: ["in", "after", "since"],
          answer: "in",
          explanation: "Use in for a duration counted from now: in two hours.",
        },
        {
          prompt: "We finished dinner and went for a walk ___.",
          options: ["afterwards", "after", "since"],
          answer: "afterwards",
          explanation: "Use afterwards when you mean then and have no object.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "after 的核心含义是什么？",
          answer:
            "after 表示时间顺序“在……之后”。它通常引出一个参照点：after dinner / after 8 p.m.",
        },
        {
          question: "after 后面接什么最常见？",
          answer:
            "最常见三种：名词（after class）、时间点（after 8 p.m.）、从句（after I finish）。after 作为介词一般需要宾语。",
        },
        {
          question: "after 和 later 的区别是什么？",
          answer:
            "later 是副词，常不接宾语：I'll call you later. after 是介词，需要宾语：I'll call you after dinner.",
        },
        {
          question: "after 和 afterwards 的区别是什么？",
          answer:
            "afterwards 是副词= then，常放句尾或句首：We left afterwards. after 需要宾语：We left after dinner.",
        },
        {
          question: "after 和 in two hours 怎么选？",
          answer:
            "in two hours 通常从“现在”开始算：I'll be back in two hours. after two hours 多需要参照事件：after two hours of waiting/driving。",
        },
        {
          question: "after 和 since 怎么快速区分？",
          answer:
            "since 表示“从某点持续到现在”：I have lived here since 2020. after 只是顺序：I moved here after 2020.（= 2020 之后搬来）",
        },
        {
          question: "初学者最常见的 after 错误是什么？",
          answer:
            "把 after 当成“从现在起多久之后”。多数场景应说 in two hours，不说 after two hours（除非句子里有参照事件）。",
        },
        {
          question: "after 的高频搭配有哪些？",
          answer:
            "高频组合：after school, after work, after class, after dinner, after the meeting, after a while。",
        },
      ],
      en: [
        {
          question: 'What does "after" mean?',
          answer:
            '"After" expresses time order: later than a time or event. It usually introduces a reference point (after dinner, after 8 p.m.).',
        },
        {
          question: 'What can come after "after"?',
          answer:
            "Three common patterns: a noun (after class), a time point (after 8 p.m.), or a clause (after I finish). As a preposition, after usually needs an object.",
        },
        {
          question: 'After vs later: what is the difference?',
          answer:
            'Later is an adverb and often has no object: "I\'ll call you later." After is a preposition and needs an object: "I\'ll call you after dinner."',
        },
        {
          question: 'After vs afterwards: what is the difference?',
          answer:
            'Afterwards is an adverb meaning then: "We left afterwards." After needs an object: "We left after dinner."',
        },
        {
          question: 'After vs "in two hours": which one should I use?',
          answer:
            '"In two hours" is counted from now: "I\'ll be back in two hours." "After two hours" usually needs a reference event: "after two hours of waiting/driving."',
        },
        {
          question: 'After vs since: how do I choose?',
          answer:
            'Since means starting then and continuing to now: "I have lived here since 2020." After is only sequence: "I moved here after 2020."',
        },
        {
          question: "What is a common beginner mistake with after?",
          answer:
            'Using after for "from now" duration. In most cases you want "in two hours", not "after two hours" unless a reference event is explicit.',
        },
        {
          question: 'What are common collocations with "after"?',
          answer:
            "High-frequency examples: after school, after work, after class, after dinner, after the meeting, after a while.",
        },
      ],
    },
  },
  {
    id: "to",
    word: "to",
    tags: ["space", "direction", "destination"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "到/向……（目的地）",
        tips: ["表示方向或目的地。", "强调“到达”。"],
      },
      en: {
        meaning: "to; toward a destination",
        tips: ["Indicates direction or destination.", "Focus on reaching a point."],
      },
    },
    examples: [
      {
        en: "She walks to the door.",
        i18n: {
          "zh-CN": { translation: "她走向门口。" },
          en: { translation: "She walks to the door." },
        },
      },
      {
        en: "The bus goes to the station.",
        i18n: {
          "zh-CN": { translation: "公交车开往车站。" },
          en: { translation: "The bus goes to the station." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.2], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 2.2],
        to: [0, 0, 1.2],
      },
    }),
  },
  {
    id: "from",
    word: "from",
    tags: ["space", "direction", "origin"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "从……（出发点）",
        tips: ["表示起点或来源。", "与 to 相对。"],
      },
      en: {
        meaning: "from; starting point",
        tips: ["Indicates origin or source.", "Opposite of to."],
      },
    },
    examples: [
      {
        en: "He comes from the school.",
        i18n: {
          "zh-CN": { translation: "他从学校来。" },
          en: { translation: "He comes from the school." },
        },
      },
      {
        en: "The train left from the platform.",
        i18n: {
          "zh-CN": { translation: "火车从站台出发。" },
          en: { translation: "The train left from the platform." },
        },
      },
    ],
    scene: makeScene([0, 0, -1.2], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, -0.2],
        to: [0, 0, -1.2],
      },
    }),
  },
  {
    id: "up",
    word: "up",
    tags: ["space", "direction", "vertical"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "向上/在上方",
        tips: ["强调向上的方向或位置。", "可与 down 对比。"],
      },
      en: {
        meaning: "up; upward or above",
        tips: ["Direction or position upward.", "Contrast with down."],
      },
    },
    examples: [
      {
        en: "Look up at the sky.",
        i18n: {
          "zh-CN": { translation: "抬头看天空。" },
          en: { translation: "Look up at the sky." },
        },
      },
      {
        en: "The balloon floats up.",
        i18n: {
          "zh-CN": { translation: "气球向上飘。" },
          en: { translation: "The balloon floats up." },
        },
      },
    ],
    scene: makeScene([0, 1.4, 0], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0.2, 0],
        to: [0, 1.4, 0],
      },
    }),
  },
  {
    id: "down",
    word: "down",
    tags: ["space", "direction", "vertical"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "向下/在下方",
        tips: ["强调向下的方向或位置。", "可与 up 对比。"],
      },
      en: {
        meaning: "down; downward or below",
        tips: ["Direction or position downward.", "Contrast with up."],
      },
    },
    examples: [
      {
        en: "The apple falls down.",
        i18n: {
          "zh-CN": { translation: "苹果向下掉。" },
          en: { translation: "The apple falls down." },
        },
      },
      {
        en: "He went down the stairs.",
        i18n: {
          "zh-CN": { translation: "他下楼了。" },
          en: { translation: "He went down the stairs." },
        },
      },
    ],
    scene: makeScene([0, -1.4, 0], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0.2, 0],
        to: [0, -1.4, 0],
      },
    }),
  },
  {
    id: "off",
    word: "off",
    tags: ["space", "separation", "surface"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "从……上脱离/离开表面",
        tips: ["强调离开表面，不再接触。", "与 on 相对。"],
      },
      en: {
        meaning: "off; away from a surface",
        tips: ["Separated from a surface.", "Opposite of on."],
      },
    },
    examples: [
      {
        en: "The book fell off the table.",
        i18n: {
          "zh-CN": { translation: "书从桌子上掉下来了。" },
          en: { translation: "The book fell off the table." },
        },
      },
      {
        en: "He jumped off the box.",
        i18n: {
          "zh-CN": { translation: "他从盒子上跳下来。" },
          en: { translation: "He jumped off the box." },
        },
      },
    ],
    scene: makeScene([1.1, 0.3, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.1, 0.3, 0],
          [0.6, 0.6, 0],
          [0, 0.72, 0],
          [0.5, 0.45, 0],
          [1.1, 0.3, 0],
        ],
      },
    }),
  },
  {
    id: "beneath",
    word: "beneath",
    tags: ["space", "below", "formal"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……下方（较正式）；低于（地位/尊严）",
        tips: [
          "beneath 比 under 更正式，常见于书面语或文学表达。",
          "空间里常表示“在……正下方”并带一点风格化语气。",
          "抽象表达里可表示“有失身份/不配”（beneath someone）。",
        ],
      },
      en: {
        meaning: "under; below in a formal or literary tone",
        tips: [
          "Beneath is more formal than under in many contexts.",
          "It often highlights directly under in a descriptive or literary style.",
          "It also appears in abstract status expressions like beneath his dignity.",
        ],
      },
    },
    examples: [
      {
        en: "The treasure is beneath the floor.",
        i18n: {
          "zh-CN": { translation: "宝藏在地板下面。" },
          en: { translation: "The treasure is beneath the floor." },
        },
      },
      {
        en: "Such behavior is beneath him.",
        i18n: {
          "zh-CN": { translation: "这种行为有失他的身份。" },
          en: { translation: "Such behavior is beneath him." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "The treasure is beneath the floor.",
          i18n: {
            "zh-CN": { translation: "宝藏在地板下面。" },
            en: { translation: "The treasure is beneath the floor." },
          },
        },
        {
          en: "Shadows gathered beneath the trees.",
          i18n: {
            "zh-CN": { translation: "树下聚起了阴影。" },
            en: { translation: "Shadows gathered beneath the trees." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "beneath 与 under 都表示“在下方”，但 beneath 的语体更正式，也更适合文学描述与抽象身份表达。",
          differences: [
            {
              term: "under",
              description:
                "under 是日常高频、通用词；beneath 更书面。口语日常优先 under，正式文体可用 beneath。",
              examples: [
                {
                  term: "under",
                  sentence: "The cat is under the table.",
                  translation: "猫在桌子下面。",
                },
                {
                  term: "beneath",
                  sentence: "The vault lies beneath the city.",
                  translation: "金库位于城市地下。",
                },
              ],
            },
            {
              term: "below",
              description:
                "below 更中性，常用于层级与数据；beneath 更有风格化色彩，不是数值表达首选。",
              examples: [
                {
                  term: "below",
                  sentence: "The temperature is below zero.",
                  translation: "温度在零度以下。",
                },
                {
                  term: "beneath",
                  sentence: "A river runs beneath the bridge.",
                  translation: "一条河从桥下流过。",
                },
              ],
            },
            {
              term: "underneath",
              description:
                "underneath 偏口语且强调贴近下侧；beneath 偏正式，语体感更强。",
              examples: [
                {
                  term: "underneath",
                  sentence: "The label is underneath the box.",
                  translation: "标签贴在盒子底下。",
                },
                {
                  term: "beneath",
                  sentence: "The roots spread beneath the soil.",
                  translation: "根系在土层下延展。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Beneath shares core meaning with under, but it carries a more formal or literary tone and supports abstract status meaning.",
          differences: [
            {
              term: "under",
              description:
                "Under is the everyday default. Beneath is a stylistic upgrade for formal writing or narrative tone.",
              examples: [
                { term: "under", sentence: "The cat is under the table." },
                { term: "beneath", sentence: "The vault lies beneath the city." },
              ],
            },
            {
              term: "below",
              description:
                "Below is neutral for levels and numbers; beneath is not usually the first choice for numeric thresholds.",
              examples: [
                { term: "below", sentence: "The temperature is below zero." },
                { term: "beneath", sentence: "A river runs beneath the bridge." },
              ],
            },
            {
              term: "underneath",
              description:
                "Underneath is more conversational and often physical. Beneath sounds more formal and literary.",
              examples: [
                { term: "underneath", sentence: "The label is underneath the box." },
                { term: "beneath", sentence: "The roots spread beneath the soil." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "空间方位类",
          items: [
            { phrase: "beneath the bridge", meaning: "在桥下" },
            { phrase: "beneath the floor", meaning: "在地板下" },
            { phrase: "beneath the surface", meaning: "在表面之下" },
            { phrase: "beneath the trees", meaning: "在树下" },
            { phrase: "beneath the ground", meaning: "在地下" },
            { phrase: "beneath the waves", meaning: "在海浪之下" },
          ],
        },
        {
          title: "书面表达类",
          items: [
            { phrase: "beneath notice", meaning: "不值一提" },
            { phrase: "beneath contempt", meaning: "令人不屑" },
            { phrase: "beneath the dignity of", meaning: "有失……身份" },
            { phrase: "beneath criticism", meaning: "不值得批评" },
            { phrase: "beneath the city", meaning: "在城市地下" },
            { phrase: "beneath the soil", meaning: "在土层之下" },
          ],
        },
        {
          title: "抽象语义类",
          items: [
            { phrase: "beneath him", meaning: "有失他的身份" },
            { phrase: "beneath her", meaning: "有失她的身份" },
            { phrase: "beneath me", meaning: "有失我的身份" },
            { phrase: "beneath our standards", meaning: "低于我们的标准" },
            { phrase: "beneath expectation", meaning: "低于期望（书面）" },
            { phrase: "beneath the minimum", meaning: "低于最低标准" },
          ],
        },
      ],
      en: [
        {
          title: "Spatial position",
          items: [
            "beneath the bridge",
            "beneath the floor",
            "beneath the surface",
            "beneath the trees",
            "beneath the ground",
            "beneath the waves",
          ],
        },
        {
          title: "Formal style",
          items: [
            "beneath notice",
            "beneath contempt",
            "beneath the dignity of",
            "beneath criticism",
            "beneath the city",
            "beneath the soil",
          ],
        },
        {
          title: "Abstract meaning",
          items: [
            "beneath him",
            "beneath her",
            "beneath me",
            "beneath our standards",
            "beneath expectation",
            "beneath the minimum",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The treasure is beneath of the floor.",
          correct: "The treasure is beneath the floor.",
          reason: "beneath 后面不加 of，直接接名词。",
        },
        {
          wrong: "The temperature is beneath zero.",
          correct: "The temperature is below zero.",
          reason: "温度与数值语境中通常用 below，更自然更常见。",
        },
        {
          wrong: "This job is under my dignity.",
          correct: "This job is beneath my dignity.",
          reason: "表达“有失身份”时常用 beneath one's dignity。",
        },
      ],
      en: [
        {
          wrong: "The treasure is beneath of the floor.",
          correct: "The treasure is beneath the floor.",
          reason: "Beneath takes a noun directly; do not add of.",
        },
        {
          wrong: "The temperature is beneath zero.",
          correct: "The temperature is below zero.",
          reason:
            "For numbers and temperatures, below is the natural high-frequency form.",
        },
        {
          wrong: "This job is under my dignity.",
          correct: "This job is beneath my dignity.",
          reason:
            "The fixed abstract expression is beneath one's dignity.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Choose the correct preposition: A tunnel runs ___ the old town.",
          options: ["beneath", "below", "under"],
          answer: "beneath",
          explanation: "书面描述中，beneath 可表达“在……下方”且语气更正式。",
        },
        {
          prompt: "Choose the correct preposition: Such behavior is ___ her dignity.",
          options: ["beneath", "under", "below"],
          answer: "beneath",
          explanation: "固定表达是 beneath someone's dignity。",
        },
        {
          prompt: "Choose the correct preposition: The roots spread ___ the soil.",
          options: ["beneath", "on", "over"],
          answer: "beneath",
          explanation: "该句强调在土层之下，使用 beneath。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: A tunnel runs ___ the old town.",
          options: ["beneath", "below", "under"],
          answer: "beneath",
          explanation:
            "Beneath is a strong formal option for 'under' in descriptive writing.",
        },
        {
          prompt: "Choose the correct preposition: Such behavior is ___ her dignity.",
          options: ["beneath", "under", "below"],
          answer: "beneath",
          explanation: "The fixed phrase is beneath someone's dignity.",
        },
        {
          prompt: "Choose the correct preposition: The roots spread ___ the soil.",
          options: ["beneath", "on", "over"],
          answer: "beneath",
          explanation: "The meaning is physically under the soil layer.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "beneath 的核心意思是什么？",
          answer:
            "核心是“在……下方”，但语体更正式，常见于书面或文学叙述。",
        },
        {
          question: "beneath 和 under 的主要区别？",
          answer:
            "under 更日常、通用；beneath 更正式。多数口语场景可先用 under。",
        },
        {
          question: "beneath 和 below 怎么区分？",
          answer:
            "below 适合层级与数值比较（如 below zero）；beneath 更偏风格化空间描述。",
        },
        {
          question: "beneath 可以表示抽象含义吗？",
          answer:
            "可以，常见表达为 beneath someone's dignity，表示“有失身份，不屑于”。",
        },
        {
          question: "beneath 的高频搭配有哪些？",
          answer:
            "如 beneath the bridge, beneath the surface, beneath notice, beneath contempt。",
        },
        {
          question: "初学者最常见错误是什么？",
          answer:
            "一是误写成 beneath of；二是把温度/分数语境误用 beneath（应 below）。",
        },
        {
          question: "什么时候优先不用 beneath？",
          answer:
            "在日常口语或简单事实句里，under/below 通常更自然、频率更高。",
        },
        {
          question: "30 秒记忆法？",
          answer:
            "把 beneath 记成“formal under”。看到正式写作或身份表达时优先考虑它。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of beneath?",
          answer:
            "Beneath means under, with a more formal or literary tone than under.",
        },
        {
          question: "How is beneath different from under?",
          answer:
            "Under is everyday and neutral. Beneath is stylistic, often used in formal or descriptive writing.",
        },
        {
          question: "How is beneath different from below?",
          answer:
            "Below is usually better for neutral level and number comparisons. Beneath is more stylistic for spatial or abstract tone.",
        },
        {
          question: "Can beneath carry abstract meaning?",
          answer:
            "Yes. A common pattern is beneath someone's dignity, meaning unworthy or beneath status.",
        },
        {
          question: "What are common beneath collocations?",
          answer:
            "Common collocations include beneath the bridge, beneath the surface, beneath notice, and beneath contempt.",
        },
        {
          question: "What mistakes do learners make with beneath?",
          answer:
            "Common errors include adding of (beneath of) and using beneath where below is expected for numbers or temperature.",
        },
        {
          question: "When should I avoid beneath?",
          answer:
            "In plain everyday speech, under or below is often more natural and frequent.",
        },
        {
          question: "What is a quick memory rule for beneath?",
          answer:
            "Think 'formal under.' Use it when you want a refined tone or abstract status nuance.",
        },
      ],
    },
    scene: makeScene([0, -1.2, 0]),
  },
  {
    id: "underneath",
    word: "underneath",
    tags: ["space", "below", "close"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……正下方（常贴近下侧，偏口语）",
        tips: [
          "underneath 常强调“就在下面、贴着下方那一面”的画面感。",
          "语气通常比 under 更口语、更具体。",
          "如果只想中性表达“更低”，below 往往更合适。",
        ],
      },
      en: {
        meaning: "directly under, often close to the underside",
        tips: [
          "Underneath is often more vivid than under for direct underside position.",
          "It is common in conversational descriptions of hidden lower parts.",
          "Use below when you only need neutral lower-level meaning.",
        ],
      },
    },
    examples: [
      {
        en: "There is a sticker underneath the lid.",
        i18n: {
          "zh-CN": { translation: "盖子底下有一张贴纸。" },
          en: { translation: "There is a sticker underneath the lid." },
        },
      },
      {
        en: "He taped the note underneath the desk.",
        i18n: {
          "zh-CN": { translation: "他把便条贴在了书桌底面。" },
          en: { translation: "He taped the note underneath the desk." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "There is a sticker underneath the lid.",
          i18n: {
            "zh-CN": { translation: "盖子底下有一张贴纸。" },
            en: { translation: "There is a sticker underneath the lid." },
          },
        },
        {
          en: "He taped the note underneath the desk.",
          i18n: {
            "zh-CN": { translation: "他把便条贴在了书桌底面。" },
            en: { translation: "He taped the note underneath the desk." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "underneath 的重点是“正下方且贴近下侧表面”，语气较口语。它比 below 更具体，比 under 更有画面感。",
          differences: [
            {
              term: "under",
              description:
                "under 更中性、覆盖面更广；underneath 更强调“底面下方”的具体位置。",
              examples: [
                {
                  term: "under",
                  sentence: "The cat is under the table.",
                  translation: "猫在桌子下面。",
                },
                {
                  term: "underneath",
                  sentence: "The label is underneath the table.",
                  translation: "标签在桌子底面下面。",
                },
              ],
            },
            {
              term: "below",
              description:
                "below 只表示“更低”，不强调贴近底面；underneath 强调具体底部关系。",
              examples: [
                {
                  term: "below",
                  sentence: "The village is below the mountain.",
                  translation: "村庄在山下。",
                },
                {
                  term: "underneath",
                  sentence: "There is dust underneath the bed.",
                  translation: "床底下面有灰尘。",
                },
              ],
            },
            {
              term: "beneath",
              description:
                "beneath 更正式、更书面；underneath 更口语、生活化。",
              examples: [
                {
                  term: "beneath",
                  sentence: "A river flows beneath the bridge.",
                  translation: "一条河从桥下流过。",
                },
                {
                  term: "underneath",
                  sentence: "My keys were underneath the sofa.",
                  translation: "我的钥匙在沙发底下。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Underneath highlights direct position under a surface, often with a vivid everyday tone. It is more concrete than below.",
          differences: [
            {
              term: "under",
              description:
                "Under is broader and neutral; underneath is more specific to underside location.",
              examples: [
                { term: "under", sentence: "The cat is under the table." },
                { term: "underneath", sentence: "The label is underneath the table." },
              ],
            },
            {
              term: "below",
              description:
                "Below only marks lower level. Underneath adds close underside relation.",
              examples: [
                { term: "below", sentence: "The village is below the mountain." },
                { term: "underneath", sentence: "There is dust underneath the bed." },
              ],
            },
            {
              term: "beneath",
              description:
                "Beneath sounds formal; underneath is usually more conversational.",
              examples: [
                { term: "beneath", sentence: "A river flows beneath the bridge." },
                { term: "underneath", sentence: "My keys were underneath the sofa." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "底部位置类",
          items: [
            { phrase: "underneath the table", meaning: "在桌子底下" },
            { phrase: "underneath the bed", meaning: "在床底下" },
            { phrase: "underneath the sofa", meaning: "在沙发底下" },
            { phrase: "underneath the lid", meaning: "在盖子底下" },
            { phrase: "underneath the sink", meaning: "在水槽下方" },
            { phrase: "underneath the stairs", meaning: "在楼梯下面" },
          ],
        },
        {
          title: "隐藏与收纳类",
          items: [
            { phrase: "hide underneath", meaning: "躲在下面" },
            { phrase: "store underneath", meaning: "收纳在下方" },
            { phrase: "tape underneath", meaning: "贴在底部" },
            { phrase: "look underneath", meaning: "查看下面" },
            { phrase: "crawl underneath", meaning: "爬到下面" },
            { phrase: "slide underneath", meaning: "滑到下面" },
          ],
        },
        {
          title: "口语场景类",
          items: [
            { phrase: "right underneath", meaning: "就在正下方" },
            { phrase: "just underneath", meaning: "恰好在下面" },
            { phrase: "underneath it", meaning: "在它下面" },
            { phrase: "underneath here", meaning: "这下面" },
            { phrase: "underneath there", meaning: "那下面" },
            { phrase: "underneath the surface", meaning: "在表层之下" },
          ],
        },
      ],
      en: [
        {
          title: "Underside position",
          items: [
            "underneath the table",
            "underneath the bed",
            "underneath the sofa",
            "underneath the lid",
            "underneath the sink",
            "underneath the stairs",
          ],
        },
        {
          title: "Hiding and storage",
          items: [
            "hide underneath",
            "store underneath",
            "tape underneath",
            "look underneath",
            "crawl underneath",
            "slide underneath",
          ],
        },
        {
          title: "Everyday phrasing",
          items: [
            "right underneath",
            "just underneath",
            "underneath it",
            "underneath here",
            "underneath there",
            "underneath the surface",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The label is underneath of the box.",
          correct: "The label is underneath the box.",
          reason: "underneath 后面不加 of，直接接名词。",
        },
        {
          wrong: "The village is underneath the mountain.",
          correct: "The village is below the mountain.",
          reason: "这里是中性地理高低关系，用 below 更自然。",
        },
        {
          wrong: "The cat is below the table leg.",
          correct: "The cat is underneath the table.",
          reason: "强调“就在桌子底下”的具体位置时，underneath 更贴切。",
        },
      ],
      en: [
        {
          wrong: "The label is underneath of the box.",
          correct: "The label is underneath the box.",
          reason: "Underneath takes a noun directly, without of.",
        },
        {
          wrong: "The village is underneath the mountain.",
          correct: "The village is below the mountain.",
          reason:
            "For neutral geographic level relations, below is usually more natural.",
        },
        {
          wrong: "The cat is below the table leg.",
          correct: "The cat is underneath the table.",
          reason:
            "When you mean a concrete underside location, underneath gives the clearer picture.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Choose the correct preposition: There is dust ___ the bed.",
          options: ["underneath", "below", "over"],
          answer: "underneath",
          explanation: "强调“床底下面”的具体空间，选 underneath。",
        },
        {
          prompt: "Choose the correct preposition: He taped the note ___ the desk.",
          options: ["underneath", "below", "on"],
          answer: "underneath",
          explanation: "便条贴在桌子底面下方，underneath 更准确。",
        },
        {
          prompt: "Choose the correct preposition: My keys were right ___ the sofa.",
          options: ["underneath", "at", "into"],
          answer: "underneath",
          explanation: "固定口语搭配 right underneath 很常见。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: There is dust ___ the bed.",
          options: ["underneath", "below", "over"],
          answer: "underneath",
          explanation:
            "The sentence describes a concrete underside location under the bed.",
        },
        {
          prompt: "Choose the correct preposition: He taped the note ___ the desk.",
          options: ["underneath", "below", "on"],
          answer: "underneath",
          explanation:
            "Underneath fits a physical note attached to the underside of a desk.",
        },
        {
          prompt: "Choose the correct preposition: My keys were right ___ the sofa.",
          options: ["underneath", "at", "into"],
          answer: "underneath",
          explanation:
            "Right underneath is a common phrase for immediate lower position.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "underneath 的核心意思是什么？",
          answer:
            "核心是“正下方、贴近底面”。它比 below 更具体，也比 under 更有口语画面感。",
        },
        {
          question: "underneath 和 under 的差异？",
          answer:
            "under 更中性通用；underneath 更强调“底部下方”的具体位置。",
        },
        {
          question: "underneath 和 below 怎么选？",
          answer:
            "如果只是中性高低关系选 below；若强调“就在某物底面下”，选 underneath。",
        },
        {
          question: "underneath 和 beneath 的区别？",
          answer:
            "beneath 更正式书面；underneath 更日常口语、生活化。",
        },
        {
          question: "underneath 常见搭配有哪些？",
          answer:
            "如 underneath the table, underneath the bed, right underneath, look underneath。",
        },
        {
          question: "学习 underneath 最容易错在哪里？",
          answer:
            "常见错误是写成 underneath of，或在地理/数值语境里误用 underneath（通常应 below）。",
        },
        {
          question: "underneath 可以用于抽象含义吗？",
          answer:
            "少量可以（如 beneath the surface 更常见），但 underneath 主要还是具体空间位置。",
        },
        {
          question: "30 秒记忆法？",
          answer:
            "记成“桌底、床底、沙发底”这种贴底画面词：只要想到‘底面下面’，就优先 underneath。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of underneath?",
          answer:
            "Underneath means directly under, usually close to the underside of something.",
        },
        {
          question: "How is underneath different from under?",
          answer:
            "Under is neutral and broad. Underneath is more specific and vivid for underside position.",
        },
        {
          question: "How do I choose between underneath and below?",
          answer:
            "Use below for neutral lower level. Use underneath for concrete underside location.",
        },
        {
          question: "How is underneath different from beneath?",
          answer:
            "Beneath sounds formal; underneath is usually more conversational and everyday.",
        },
        {
          question: "What are common underneath collocations?",
          answer:
            "Common phrases include underneath the table, underneath the bed, right underneath, and look underneath.",
        },
        {
          question: "What mistakes do learners make with underneath?",
          answer:
            "Common issues are adding of (underneath of) and using underneath where below is better for neutral levels.",
        },
        {
          question: "Can underneath be abstract?",
          answer:
            "It can be, but its main strength is concrete physical location under an object.",
        },
        {
          question: "What is a quick memory rule for underneath?",
          answer:
            "Think 'underside picture': if you can imagine the lower face of an object, underneath is often the right choice.",
        },
      ],
    },
    scene: makeScene([0, -0.95, 0]),
  },
  {
    id: "within",
    word: "within",
    tags: ["space", "inside", "boundary"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之内（强调范围）",
        tips: ["强调在某个范围/边界之内。", "比 in 更正式。"],
      },
      en: {
        meaning: "within; inside boundaries",
        tips: ["Inside a limit or boundary.", "More formal than in."],
      },
    },
    examples: [
      {
        en: "Stay within the lines.",
        i18n: {
          "zh-CN": { translation: "保持在边线内。" },
          en: { translation: "Stay within the lines." },
        },
      },
      {
        en: "The shop is within the city walls.",
        i18n: {
          "zh-CN": { translation: "商店在城墙之内。" },
          en: { translation: "The shop is within the city walls." },
        },
      },
    ],
    scene: makeScene([0, 0, 0]),
  },
  {
    id: "without",
    word: "without",
    tags: ["space", "outside", "boundary"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之外（范围外）",
        tips: ["强调超出范围或边界。", "与 within 相对。"],
      },
      en: {
        meaning: "without; outside boundaries",
        tips: ["Outside a limit or boundary.", "Opposite of within."],
      },
    },
    examples: [
      {
        en: "The camp is without the city walls.",
        i18n: {
          "zh-CN": { translation: "营地在城墙之外。" },
          en: { translation: "The camp is without the city walls." },
        },
      },
      {
        en: "He waited without the gate.",
        i18n: {
          "zh-CN": { translation: "他在大门外等。" },
          en: { translation: "He waited without the gate." },
        },
      },
    ],
    scene: makeScene([1.3, 0, 0]),
  },
  {
    id: "past",
    word: "past",
    tags: ["space", "beyond", "movement"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "经过/越过……",
        tips: ["强调从旁边经过并越过。", "常用于路线经过。"],
      },
      en: {
        meaning: "past; beyond while passing",
        tips: ["Move beyond a point.", "Often for passing a place."],
      },
    },
    examples: [
      {
        en: "Walk past the school.",
        i18n: {
          "zh-CN": { translation: "从学校旁边走过去。" },
          en: { translation: "Walk past the school." },
        },
      },
      {
        en: "The bus went past the stop.",
        i18n: {
          "zh-CN": { translation: "公交车开过了站。" },
          en: { translation: "The bus went past the stop." },
        },
      },
    ],
    scene: makeScene([1.6, 0, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.6, 0, 0],
          [0.6, 0, 0.4],
          [-0.6, 0, 0.4],
          [-1.6, 0, 0],
          [1.6, 0, 0],
        ],
      },
    }),
  },
  {
    id: "toward",
    word: "toward",
    tags: ["space", "direction"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "朝向……",
        tips: ["强调方向，不一定到达。", "比 to 更弱。"],
      },
      en: {
        meaning: "toward; in the direction of",
        tips: ["Direction, not necessarily reaching.", "Weaker than to."],
      },
    },
    examples: [
      {
        en: "She ran toward the gate.",
        i18n: {
          "zh-CN": { translation: "她朝门口跑去。" },
          en: { translation: "She ran toward the gate." },
        },
      },
      {
        en: "The cat moved toward the window.",
        i18n: {
          "zh-CN": { translation: "猫朝窗户靠近。" },
          en: { translation: "The cat moved toward the window." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.1], {
      animation: {
        type: "path",
        duration: 2,
        from: [0, 0, 2.0],
        to: [0, 0, 1.1],
      },
    }),
  },
  {
    id: "across-from",
    word: "across from",
    tags: ["space", "opposite", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……对面",
        tips: ["强调隔着一条路/区域相对。", "常与街道、河流搭配。"],
      },
      en: {
        meaning: "across from; on the opposite side",
        tips: ["Opposite side across a space.", "Often across a street or river."],
      },
    },
    examples: [
      {
        en: "The bank is across from the mall.",
        i18n: {
          "zh-CN": { translation: "银行在商场对面。" },
          en: { translation: "The bank is across from the mall." },
        },
      },
      {
        en: "He lives across from the park.",
        i18n: {
          "zh-CN": { translation: "他住在公园对面。" },
          en: { translation: "He lives across from the park." },
        },
      },
    ],
    scene: makeScene([1.6, 0, 0]),
  },
  {
    id: "opposite",
    word: "opposite",
    tags: ["space", "opposite"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……对面/正对",
        tips: ["强调正对面的位置。", "常与 across from 类似。"],
      },
      en: {
        meaning: "opposite; facing across",
        tips: ["Facing directly across.", "Similar to across from."],
      },
    },
    examples: [
      {
        en: "The cafe is opposite the school.",
        i18n: {
          "zh-CN": { translation: "咖啡店在学校对面。" },
          en: { translation: "The cafe is opposite the school." },
        },
      },
      {
        en: "His seat is opposite mine.",
        i18n: {
          "zh-CN": { translation: "他的座位在我对面。" },
          en: { translation: "His seat is opposite mine." },
        },
      },
    ],
    scene: makeScene([-1.6, 0, 0]),
  },
  {
    id: "throughout",
    word: "throughout",
    tags: ["space", "spread"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "遍布于……/贯穿整个范围",
        tips: ["表示分布在整个空间。", "不是单一位置。"],
      },
      en: {
        meaning: "throughout; spread in the whole area",
        tips: ["Distributed across the entire space.", "Not a single point."],
      },
    },
    examples: [
      {
        en: "Lights are throughout the hall.",
        i18n: {
          "zh-CN": { translation: "大厅里到处都有灯。" },
          en: { translation: "Lights are throughout the hall." },
        },
      },
      {
        en: "Trees grow throughout the park.",
        i18n: {
          "zh-CN": { translation: "公园里到处是树。" },
          en: { translation: "Trees grow throughout the park." },
        },
      },
    ],
    scene: makeScene([0.2, 0, 0.1], {
      variant: "ringCubes",
    }),
  },
  {
    id: "amid",
    word: "amid",
    tags: ["space", "among"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之中（多者中）",
        tips: ["强调在一群/环境中间。", "语气较正式。"],
      },
      en: {
        meaning: "amid; in the middle of",
        tips: ["In the middle of a group.", "Slightly formal."],
      },
    },
    examples: [
      {
        en: "He stood amid the crowd.",
        i18n: {
          "zh-CN": { translation: "他站在人群之中。" },
          en: { translation: "He stood amid the crowd." },
        },
      },
      {
        en: "A house sits amid the trees.",
        i18n: {
          "zh-CN": { translation: "房子在树丛之中。" },
          en: { translation: "A house sits amid the trees." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "amidst",
    word: "amidst",
    tags: ["space", "among", "formal"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之中（同 amid）",
        tips: ["与 amid 意义相同，更书面。", "强调周围环绕。"],
      },
      en: {
        meaning: "amidst; same as amid",
        tips: ["Same meaning as amid, more formal.", "Surrounded by."],
      },
    },
    examples: [
      {
        en: "She danced amidst the lights.",
        i18n: {
          "zh-CN": { translation: "她在灯光之中起舞。" },
          en: { translation: "She danced amidst the lights." },
        },
      },
      {
        en: "The cabin stands amidst the woods.",
        i18n: {
          "zh-CN": { translation: "小屋坐落在树林中。" },
          en: { translation: "The cabin stands amidst the woods." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "alongside",
    word: "alongside",
    tags: ["space", "side"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "沿着/在……旁边（并行）",
        tips: ["强调并行在一侧。", "比 beside 更有“并行”的感觉。"],
      },
      en: {
        meaning: "alongside; at the side, parallel",
        tips: ["Parallel and beside.", "Stronger sense of alongside than beside."],
      },
    },
    examples: [
      {
        en: "A path runs alongside the river.",
        i18n: {
          "zh-CN": { translation: "小路沿着河边延伸。" },
          en: { translation: "A path runs alongside the river." },
        },
      },
      {
        en: "He walked alongside his friend.",
        i18n: {
          "zh-CN": { translation: "他和朋友并肩走。" },
          en: { translation: "He walked alongside his friend." },
        },
      },
    ],
    scene: makeScene([1.2, 0, 0], {
      animation: {
        type: "path",
        duration: 2.2,
        path: [
          [1.2, 0, 0],
          [1.2, 0, 0.8],
          [1.2, 0, 1.6],
          [1.2, 0, 0.8],
          [1.2, 0, 0],
        ],
      },
    }),
  },
  {
    id: "beyond",
    word: "beyond",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……更远处；超出（界限/范围）",
        tips: [
          "表示“超过某个点/界限，在更远处”：beyond the river / beyond the limit。",
          "对比 past：past 更像“经过/路过某点”；beyond 更像“在某点的更远那边”。",
          "常见抽象搭配：beyond control / beyond repair / beyond doubt。",
        ],
      },
      en: {
        meaning: "beyond; farther than, or outside a limit",
        tips: [
          "Farther than a point/edge: beyond the river, beyond the border.",
          "Past often means passing a point; beyond suggests farther on the far side.",
          "Common abstract use: beyond control / beyond repair / beyond doubt.",
        ],
      },
    },
    examples: [
      {
        en: "The hills are beyond the river.",
        i18n: {
          "zh-CN": { translation: "山丘在河的更远处。" },
          en: { translation: "The hills are beyond the river." },
        },
      },
      {
        en: "There is a town beyond the bridge.",
        i18n: {
          "zh-CN": { translation: "桥那边有个小镇。" },
          en: { translation: "There is a town beyond the bridge." },
        },
      },
    ],
    scene: makeScene([2.0, 0, 0]),
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "beyond 的核心是“超过某个点/界限，在更远那边”，既可用于具体空间距离，也常用于抽象“超出能力/范围”。",
          differences: [
            {
              term: "past",
              description:
                "past 更像“经过/越过某点”（路过）；beyond 更像“在那点的更远处”（位置更远）。",
              examples: [
                {
                  term: "past",
                  sentence: "Walk past the bridge and turn left.",
                  translation: "走过桥（路过桥）再左转。",
                },
                {
                  term: "beyond",
                  sentence: "There's a small village beyond the bridge.",
                  translation: "桥那边更远处有个小村庄。",
                },
              ],
            },
            {
              term: "outside",
              description:
                "outside 强调“在边界外”；beyond 强调“在某点/边界之外更远那边”。",
              examples: [
                {
                  term: "outside",
                  sentence: "Wait outside the gate.",
                  translation: "在门外等（边界外）。",
                },
                {
                  term: "beyond",
                  sentence: "The parking lot is beyond the gate.",
                  translation: "停车场在门那边更远处。",
                },
              ],
            },
            {
              term: "over",
              description:
                "over 常用于数量“超过”；beyond 更偏“超出界限/超出可接受范围”，抽象表达更常见。",
              examples: [
                {
                  term: "over",
                  sentence: "Over 100 people attended the meeting.",
                  translation: "有 100 多人参加了会议。",
                },
                {
                  term: "beyond",
                  sentence: "The cost is beyond our budget.",
                  translation: "成本超出了我们的预算。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            'Beyond means "farther than a point/edge" or "outside a limit". It is common in both distance and abstract-limit contexts.',
          differences: [
            {
              term: "past",
              description:
                "Past often means passing a point; beyond suggests farther on the far side of it.",
              examples: [
                { term: "past", sentence: "Walk past the bridge and turn left." },
                {
                  term: "beyond",
                  sentence: "There's a small village beyond the bridge.",
                },
              ],
            },
            {
              term: "outside",
              description:
                "Outside means not inside a boundary; beyond suggests farther than a point/boundary.",
              examples: [
                { term: "outside", sentence: "Wait outside the gate." },
                { term: "beyond", sentence: "The parking lot is beyond the gate." },
              ],
            },
            {
              term: "over",
              description:
                "Over is the common choice for numbers (over 100). Beyond is common for limits and abstract ideas (beyond control, beyond our budget).",
              examples: [
                { term: "over", sentence: "Over 100 people attended the meeting." },
                { term: "beyond", sentence: "The cost is beyond our budget." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "空间距离",
          items: [
            { phrase: "beyond the river", meaning: "在河那边更远处" },
            { phrase: "beyond the bridge", meaning: "在桥那边更远处" },
            { phrase: "beyond the mountains", meaning: "在群山那边" },
            { phrase: "beyond the border", meaning: "在边境线以外更远处" },
            { phrase: "beyond the gate", meaning: "在门那边更远处" },
            { phrase: "beyond the horizon", meaning: "在地平线之外" },
          ],
        },
        {
          title: "界限/范围",
          items: [
            { phrase: "beyond the limit", meaning: "超过上限" },
            { phrase: "beyond the scope", meaning: "超出范围" },
            { phrase: "beyond the rules", meaning: "不在规则内/越界" },
            { phrase: "beyond our budget", meaning: "超出预算" },
            { phrase: "beyond the boundary", meaning: "越过边界" },
            { phrase: "beyond the edge", meaning: "超出边缘" },
          ],
        },
        {
          title: "抽象表达",
          items: [
            { phrase: "beyond control", meaning: "失控/无法控制" },
            { phrase: "beyond repair", meaning: "无法修复" },
            { phrase: "beyond doubt", meaning: "毫无疑问" },
            { phrase: "beyond belief", meaning: "难以置信" },
            { phrase: "beyond recognition", meaning: "面目全非/难以辨认" },
            { phrase: "beyond words", meaning: "难以言表" },
          ],
        },
      ],
      en: [
        {
          title: "Distance",
          items: [
            "beyond the river",
            "beyond the bridge",
            "beyond the mountains",
            "beyond the border",
            "beyond the gate",
            "beyond the horizon",
          ],
        },
        {
          title: "Limits / range",
          items: [
            "beyond the limit",
            "beyond the scope",
            "beyond the rules",
            "beyond our budget",
            "beyond the boundary",
            "beyond the edge",
          ],
        },
        {
          title: "Abstract patterns",
          items: [
            "beyond control",
            "beyond repair",
            "beyond doubt",
            "beyond belief",
            "beyond recognition",
            "beyond words",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "Walk beyond the bridge and turn left.（想表达“走过桥就左转”）",
          correct: "Walk past the bridge and turn left.",
          reason:
            "“走过/路过某点”更常用 past；beyond 更像“在桥那边更远处”的位置描述。",
        },
        {
          wrong: "Beyond 100 people attended the meeting.",
          correct: "Over 100 people attended the meeting.",
          reason:
            "表达数量“超过”时，over 通常更自然；beyond 多用于“超出界限/能力/预算”等抽象限制。",
        },
        {
          wrong: "The cafe is beyond the street.（想表达“在街对面”）",
          correct: "The cafe is across the street.",
          reason:
            "across 表示“在对面/跨过”；beyond 是“更远那边”，不等同于对面。",
        },
        {
          wrong: "It's beyond of my control.",
          correct: "It's beyond my control.",
          reason: "beyond 后直接接名词短语：beyond my control（不要加 of）。",
        },
      ],
      en: [
        {
          wrong: "Walk beyond the bridge and turn left. (meaning: pass the bridge)",
          correct: "Walk past the bridge and turn left.",
          reason:
            "Past is the natural choice for passing a point. Beyond suggests farther on the far side.",
        },
        {
          wrong: "Beyond 100 people attended the meeting.",
          correct: "Over 100 people attended the meeting.",
          reason:
            "Over is the common choice for numbers. Beyond is more common for limits/abstract ideas (beyond our budget).",
        },
        {
          wrong: "The cafe is beyond the street. (meaning: on the other side)",
          correct: "The cafe is across the street.",
          reason: "Across means on the other side; beyond means farther than a point.",
        },
        {
          wrong: "It's beyond of my control.",
          correct: "It's beyond my control.",
          reason: "Beyond is followed directly by a noun phrase (no of).",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "选择正确的介词：There's a small village ___ the mountains.",
          options: ["beyond", "past", "outside", "over"],
          answer: "beyond",
          explanation: "表示“在群山那边更远处”，用 beyond。",
        },
        {
          prompt: "选择正确的介词：The cost is ___ our budget.",
          options: ["beyond", "over", "inside", "between"],
          answer: "beyond",
          explanation: "beyond + budget 表示“超出预算/界限”。",
        },
        {
          prompt: "选择正确的介词：It's ___ my control.",
          options: ["beyond", "without", "by", "near"],
          answer: "beyond",
          explanation: "固定高频表达：beyond my control（无法控制）。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: There's a small village ___ the mountains.",
          options: ["beyond", "past", "outside", "over"],
          answer: "beyond",
          explanation: "It means farther on the far side of the mountains.",
        },
        {
          prompt: "Choose the correct preposition: The cost is ___ our budget.",
          options: ["beyond", "over", "inside", "between"],
          answer: "beyond",
          explanation: 'Beyond + budget means "outside the limit".',
        },
        {
          prompt: "Choose the correct preposition: It's ___ my control.",
          options: ["beyond", "without", "by", "near"],
          answer: "beyond",
          explanation: 'Common pattern: "beyond my control" = not controllable.',
        },
      ],
    },
    faq: {
      en: [
        {
          question: 'What does "beyond" mean?',
          answer:
            'Beyond means "farther than a point/edge" or "outside a limit". Example: There is a town beyond the bridge.',
        },
        {
          question: 'What is the difference between "beyond" and "past"?',
          answer:
            'Past often means passing a point (walk past the bridge). Beyond suggests farther on the far side (a village beyond the bridge).',
        },
        {
          question: 'What is the difference between "beyond" and "outside"?',
          answer:
            'Outside means not inside a boundary (outside the gate). Beyond suggests farther than a point/boundary (the parking lot is beyond the gate).',
        },
        {
          question: 'When should I use "over" instead of "beyond"?',
          answer:
            "Use over for numbers (over 100 people). Use beyond for limits/abstract ideas (beyond our budget, beyond control).",
        },
        {
          question: 'What are common abstract expressions with "beyond"?',
          answer:
            "beyond control, beyond repair, beyond doubt, beyond belief, beyond recognition, beyond words.",
        },
        {
          question: 'Can "beyond" be used for time?',
          answer:
            'Sometimes, but it is not the main beginner time preposition. Example: beyond midnight = after midnight. In many cases, after/past is more common.',
        },
        {
          question: 'What are common collocations with "beyond"?',
          answer:
            "beyond the river, beyond the border, beyond the limit, beyond the scope, beyond my control, beyond doubt.",
        },
        {
          question: 'How can I remember "beyond" quickly?',
          answer:
            'Think "farther than that point". Point A is your reference; beyond A is on the far side, further away.',
        },
      ],
      "zh-CN": [
        {
          question: "beyond 是什么意思？",
          answer:
            "beyond 表示“在某个点/边界的更远那边”或“超出界限/范围”。例句：There is a town beyond the bridge.（桥那边更远处有个小镇。）",
        },
        {
          question: "beyond 和 past 的区别是什么？",
          answer:
            "past 更像“经过/路过某点”（走过去）；beyond 更像“在那点的更远处”（位置在更远那边）。",
        },
        {
          question: "beyond 和 outside 的区别是什么？",
          answer:
            "outside 强调“在边界外”；beyond 强调“在边界/某点之外更远那边”。outside the gate vs beyond the gate。",
        },
        {
          question: "beyond 和 over 的区别是什么？",
          answer:
            "over 常用于数量“超过”（over 100 people）。beyond 更常用于“超出界限/能力/预算”等抽象限制（beyond our budget / beyond control）。",
        },
        {
          question: "beyond 有哪些高频抽象搭配？",
          answer:
            "beyond control（失控）、beyond repair（无法修复）、beyond doubt（毫无疑问）、beyond words（难以言表）等。",
        },
        {
          question: "beyond 能用于时间吗？",
          answer:
            "有时可以（beyond midnight = 过了午夜之后），但入门阶段更常用 after/past 来表达时间顺序。",
        },
        {
          question: "beyond 的高频搭配有哪些？",
          answer:
            "beyond the river/bridge/mountains, beyond the border, beyond the limit/scope, beyond my control, beyond doubt。",
        },
        {
          question: "如何快速记住 beyond？",
          answer:
            "记成“比那个点更远”：先找参照点 A，beyond A 就是在 A 的那边、更远处。",
        },
      ],
    },
  },
  {
    id: "upon",
    word: "upon",
    tags: ["space", "on", "formal"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之上（较正式）；（upon + 名词/动名词）在……时/一……就",
        tips: [
          "upon 是 on 的较正式说法，通常表示接触表面。",
          "常见结构：upon + 名词/动名词，表示“在……时/一……就”（upon arrival / upon arriving）。",
          "口语里通常用 on / when / after；upon 更偏书面与固定搭配。",
        ],
      },
      en: {
        meaning: "upon; on (formal); (upon + noun) when/as soon as",
        tips: [
          "Formal alternative to on for surface contact.",
          'Common pattern: upon + noun/gerund = "when/as soon as" (upon arrival, upon hearing...).',
          "In everyday conversation, on/when is usually more natural.",
        ],
      },
    },
    examples: [
      createLocalizedExample("Snow fell upon the roof.", "雪落在屋顶上。"),
      createLocalizedExample("The letter lay upon the table.", "信放在桌上。"),
    ],
    examplesByCategory: {
      space: [
        createLocalizedExample("Snow fell upon the roof.", "雪落在屋顶上。"),
        createLocalizedExample("The letter lay upon the table.", "信放在桌上。"),
      ],
      time: [
        createLocalizedExample(
          "Upon arrival, please check in at the front desk.",
          "到达后请在前台登记。",
        ),
        createLocalizedExample(
          "Upon hearing the news, she called her mom.",
          "一听到消息，她就给妈妈打了电话。",
        ),
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "upon 是较正式的 on（接触表面），也常出现在 upon arrival 这类结构中表示“在……时/一……就”。学习时重点对比 on/onto/on top of。",
          differences: [
            {
              term: "on",
              description:
                "on 更中性、口语最常用；upon 更书面/文学化（含义常接近）。",
              examples: [
                {
                  term: "on",
                  sentence: "The book is on the table.",
                  translation: "书在桌子上。",
                },
                {
                  term: "upon",
                  sentence: "The book lay upon the table.",
                  translation: "书放在桌上（更书面）。",
                },
              ],
            },
            {
              term: "onto",
              description:
                "onto 强调“移动到表面并到达”；upon 通常描述已在表面上（或用于更正式的时间触发表达）。",
              examples: [
                {
                  term: "onto",
                  sentence: "He put the book onto the table.",
                  translation: "他把书放到桌子上（强调动作到达）。",
                },
                {
                  term: "upon",
                  sentence: "The book lay upon the table.",
                  translation: "书放在桌上（状态）。",
                },
              ],
            },
            {
              term: "on top of",
              description:
                "on top of 强调“在最上面/顶部”；upon 不强调“顶”，更多是书面版 on。",
              examples: [
                {
                  term: "on top of",
                  sentence: "The cat is on top of the box.",
                  translation: "猫在盒子顶部（强调最上面）。",
                },
                {
                  term: "upon",
                  sentence: "The cat sat upon the box.",
                  translation: "猫坐在盒子上（更书面）。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            'Upon is a more formal version of "on" (surface contact). It also appears in phrases like "upon arrival" to mean "when/as soon as". Compare it with on/onto/on top of.',
          differences: [
            {
              term: "on",
              description:
                "On is neutral and common in everyday speech; upon is more formal/literary (often similar in meaning).",
              examples: [
                { term: "on", sentence: "The book is on the table." },
                { term: "upon", sentence: "The book lay upon the table." },
              ],
            },
            {
              term: "onto",
              description:
                "Onto emphasizes movement to a surface; upon is usually a (formal) on-position or a formal time-trigger phrase.",
              examples: [
                { term: "onto", sentence: "He put the book onto the table." },
                { term: "upon", sentence: "The book lay upon the table." },
              ],
            },
            {
              term: "on top of",
              description:
                'On top of emphasizes the very top position; upon does not emphasize "top" and mainly signals formal style.',
              examples: [
                { term: "on top of", sentence: "The cat is on top of the box." },
                { term: "upon", sentence: "The cat sat upon the box." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "书面位置（≈ on）",
          items: [
            { phrase: "upon the table", meaning: "在桌面上（更书面）" },
            { phrase: "upon the roof", meaning: "在屋顶上" },
            { phrase: "upon the ground", meaning: "在地面上" },
            { phrase: "upon the desk", meaning: "在桌面/书桌上" },
            { phrase: "upon his shoulder", meaning: "在他的肩上" },
            { phrase: "upon the page", meaning: "在纸页上（书面）" },
          ],
        },
        {
          title: "upon + 事件（在……时/一……就）",
          items: [
            { phrase: "upon arrival", meaning: "到达后/一到就" },
            { phrase: "upon request", meaning: "应要求/按需" },
            { phrase: "upon completion", meaning: "完成后/一完成就" },
            { phrase: "upon entry", meaning: "进入时/入场时" },
            { phrase: "upon hearing", meaning: "一听到……就" },
            { phrase: "upon signing", meaning: "签署后/一签就" },
          ],
        },
        {
          title: "常见固定句式",
          items: [
            { phrase: "once upon a time", meaning: "从前/很久以前（故事开头）" },
            { phrase: "upon reflection", meaning: "仔细想想/回想之后" },
            { phrase: "upon closer inspection", meaning: "仔细一看" },
            { phrase: "upon further review", meaning: "进一步审查后" },
            { phrase: "upon consideration", meaning: "考虑之后" },
            { phrase: "upon inquiry", meaning: "询问/调查后（书面）" },
          ],
        },
      ],
      en: [
        {
          title: "Formal on (surface)",
          items: [
            "upon the table",
            "upon the roof",
            "upon the ground",
            "upon the desk",
            "upon his shoulder",
            "upon the page",
          ],
        },
        {
          title: "Upon + event",
          items: [
            "upon arrival",
            "upon request",
            "upon completion",
            "upon entry",
            "upon hearing",
            "upon signing",
          ],
        },
        {
          title: "Set phrases",
          items: [
            "once upon a time",
            "upon reflection",
            "upon closer inspection",
            "upon further review",
            "upon consideration",
            "upon inquiry",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "Upon I arrived, I called you.",
          correct: "Upon arriving, I called you.",
          reason:
            "upon 后接名词/动名词：upon arrival / upon arriving；完整从句更常用 when/after。",
        },
        {
          wrong: "I’ll see you upon Monday.",
          correct: "I’ll see you on Monday.",
          reason:
            "星期/日期一般用 on；upon 更书面且不常用于这类时间点表达。",
        },
        {
          wrong: "I put my keys upon the table. (everyday speech)",
          correct: "I put my keys on the table.",
          reason:
            "口语更自然的是 on；upon 多用于书面、文学或固定表达。",
        },
      ],
      en: [
        {
          wrong: "Upon I arrived, I called you.",
          correct: "Upon arriving, I called you.",
          reason:
            'Use a noun or gerund after upon (upon + noun/-ing). Use "when/after" for a full clause.',
        },
        {
          wrong: "I’ll see you upon Monday.",
          correct: "I’ll see you on Monday.",
          reason: "Use on with days and dates (on Monday, on July 1).",
        },
        {
          wrong: "I put my keys upon the table. (everyday speech)",
          correct: "I put my keys on the table.",
          reason:
            "Upon sounds formal/literary; on is usually more natural in daily speech.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Fixed phrase: Once ___ a time, there was a dragon.",
          options: ["upon", "on", "onto"],
          answer: "upon",
          explanation: "once upon a time 是固定搭配（常见故事开头）。",
        },
        {
          prompt: "Formal writing: The letter lay ___ the table.",
          options: ["upon", "on", "onto"],
          answer: "upon",
          explanation: "书面语里 upon 可作为更正式的 on（接触表面）。",
        },
        {
          prompt: "Formal notice: ___ arrival, please check in at the front desk.",
          options: ["upon", "on", "in"],
          answer: "upon",
          explanation:
            'upon + 名词 常表示“在……时/一……就”（如 upon arrival）。',
        },
      ],
      en: [
        {
          prompt: "Fixed phrase: Once ___ a time, there was a dragon.",
          options: ["upon", "on", "onto"],
          answer: "upon",
          explanation: '"Once upon a time" is a fixed story phrase.',
        },
        {
          prompt: "Formal writing: The letter lay ___ the table.",
          options: ["upon", "on", "onto"],
          answer: "upon",
          explanation: "Upon is a more formal alternative to on for surface contact.",
        },
        {
          prompt: "Formal notice: ___ arrival, please check in at the front desk.",
          options: ["upon", "on", "in"],
          answer: "upon",
          explanation: 'Upon + noun is a formal way to mean \"when/as soon as\".',
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "“upon”是什么意思？",
          answer:
            "upon 是 on 的较正式说法，常表示接触表面：upon the table。",
        },
        {
          question: "upon 和 on 有什么区别？",
          answer:
            "含义常接近，但 upon 更书面/文学；日常对话一般用 on 更自然。",
        },
        {
          question: "upon 可以表达时间吗？",
          answer:
            "可以，常见结构：upon + 名词/动名词 = “在……时/一……就”（upon arrival / upon arriving）。",
        },
        {
          question: "为什么不能说 “Upon I arrived”？",
          answer:
            "upon 后不直接接完整从句；用 upon arriving / upon my arrival，或改用 when/after（When I arrived...）。",
        },
        {
          question: "upon 和 onto 有什么区别？",
          answer:
            "onto 强调“移动到表面并到达”；upon 多为“在表面上（书面）/在……时（一……就）”。",
        },
        {
          question: "once upon a time 是什么意思？",
          answer: "固定故事开头：从前/很久以前。",
        },
        {
          question: "什么时候不建议用 upon？",
          answer:
            "日常对话更自然的是 on/when；upon 可能显得过于正式，建议只在书面或固定搭配中使用。",
        },
        {
          question: "如何快速记住 upon？",
          answer:
            "记两件事：1) formal on（接触表面）；2) upon + 名词/动名词 表示“在……时/一……就”（upon arrival）。",
        },
      ],
      en: [
        {
          question: 'What does \"upon\" mean?',
          answer:
            "Upon is a more formal version of on. It often means surface contact (upon the table).",
        },
        {
          question: "Upon vs on: what's the difference?",
          answer:
            "Meaning is often similar, but upon sounds formal/literary. In everyday conversation, on is more natural.",
        },
        {
          question: "Can \"upon\" be used for time?",
          answer:
            'Yes. In formal phrases, upon + noun/gerund can mean \"when/as soon as\": upon arrival, upon hearing the news.',
        },
        {
          question: 'Can I say \"Upon I arrived\"?',
          answer:
            'No. Use \"upon arriving\" / \"upon my arrival\", or use \"when/after\" with a full clause (When I arrived...).',
        },
        {
          question: "Upon vs onto: what's the difference?",
          answer:
            "Onto shows movement to a surface. Upon is (formal) on, or a formal time-trigger phrase. Example: He put the book onto the table. / The book lay upon the table.",
        },
        {
          question: "What is a common fixed phrase with \"upon\"?",
          answer: "Once upon a time is a fixed phrase used to start stories.",
        },
        {
          question: "Is \"upon\" common in modern English?",
          answer:
            "It is common in formal writing and set phrases, but less common in daily speech.",
        },
        {
          question: "Quick tip to remember \"upon\"?",
          answer:
            'Think: \"formal on\" + \"upon + noun/-ing\" for immediate time (upon arrival).',
        },
      ],
    },
    scene: makeScene([0, 0.75, 0]),
  },
  {
    id: "on-top-of",
    word: "on top of",
    tags: ["space", "surface", "top", "contact"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……顶部（接触最上方）",
        tips: [
          "on top of 强调“就在最上面”，通常有接触，位置感比 on 更强。",
          "如果只是一般“在表面上”，用 on 常更自然简洁。",
          "如果是“移动到顶部”，要用 onto，不用 on top of。",
        ],
      },
      en: {
        meaning: "on the highest surface of something, usually with contact",
        tips: [
          "On top of emphasizes the very top position with contact.",
          "Use on for neutral surface contact when top emphasis is not needed.",
          "Use onto for movement to the top, not static position.",
        ],
      },
    },
    examples: [
      {
        en: "The cat sits on top of the box.",
        i18n: {
          "zh-CN": { translation: "猫坐在盒子顶部。" },
          en: { translation: "The cat sits on top of the box." },
        },
      },
      {
        en: "Put the lamp on top of the bookcase.",
        i18n: {
          "zh-CN": { translation: "把台灯放在书柜顶部。" },
          en: { translation: "Put the lamp on top of the bookcase." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "The cat sits on top of the box.",
          i18n: {
            "zh-CN": { translation: "猫坐在盒子顶部。" },
            en: { translation: "The cat sits on top of the box." },
          },
        },
        {
          en: "Put the lamp on top of the bookcase.",
          i18n: {
            "zh-CN": { translation: "把台灯放在书柜顶部。" },
            en: { translation: "Put the lamp on top of the bookcase." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "on top of 的核心是“接触并处在最上方”。它比 on 更强调‘顶端位置’，但不是动作方向词。",
          differences: [
            {
              term: "on",
              description:
                "on 是一般表面接触；on top of 强调“就在顶部”，语义更具体。",
              examples: [
                {
                  term: "on",
                  sentence: "The keys are on the table.",
                  translation: "钥匙在桌子上。",
                },
                {
                  term: "on top of",
                  sentence: "The toy is on top of the wardrobe.",
                  translation: "玩具在衣柜顶上。",
                },
              ],
            },
            {
              term: "onto",
              description:
                "onto 表示“移动到顶部”这一过程；on top of 表示已经处在顶部的状态。",
              examples: [
                {
                  term: "onto",
                  sentence: "The cat jumped onto the box.",
                  translation: "猫跳到了盒子上。",
                },
                {
                  term: "on top of",
                  sentence: "The cat is on top of the box.",
                  translation: "猫在盒子顶部。",
                },
              ],
            },
            {
              term: "over",
              description:
                "over 常表示“在上方/跨过”且不一定接触；on top of 强调接触并位于最上面。",
              examples: [
                {
                  term: "over",
                  sentence: "A plane flew over the house.",
                  translation: "一架飞机从房子上空飞过。",
                },
                {
                  term: "on top of",
                  sentence: "There is snow on top of the house.",
                  translation: "房顶上有积雪。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "On top of means contact at the highest point. It is more specific than on, and it is not a movement preposition.",
          differences: [
            {
              term: "on",
              description:
                "On is neutral surface contact. On top of highlights the very top position.",
              examples: [
                { term: "on", sentence: "The keys are on the table." },
                { term: "on top of", sentence: "The toy is on top of the wardrobe." },
              ],
            },
            {
              term: "onto",
              description:
                "Onto expresses movement to the top; on top of expresses the final static position.",
              examples: [
                { term: "onto", sentence: "The cat jumped onto the box." },
                { term: "on top of", sentence: "The cat is on top of the box." },
              ],
            },
            {
              term: "over",
              description:
                "Over can mean above or crossing without contact. On top of requires contact at the top surface.",
              examples: [
                { term: "over", sentence: "A plane flew over the house." },
                { term: "on top of", sentence: "There is snow on top of the house." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "真实空间类",
          items: [
            { phrase: "on top of the box", meaning: "在盒子顶上" },
            { phrase: "on top of the shelf", meaning: "在架子顶上" },
            { phrase: "on top of the mountain", meaning: "在山顶上" },
            { phrase: "on top of the fridge", meaning: "在冰箱顶上" },
            { phrase: "on top of the table", meaning: "在桌面最上方" },
            { phrase: "on top of the building", meaning: "在楼顶上" },
          ],
        },
        {
          title: "课堂高频类",
          items: [
            { phrase: "put it on top of", meaning: "把它放在……上面" },
            { phrase: "stack on top of", meaning: "叠放在……上面" },
            { phrase: "sit on top of", meaning: "坐在……顶部" },
            { phrase: "stand on top of", meaning: "站在……顶部" },
            { phrase: "write on top of", meaning: "写在……上方位置" },
            { phrase: "place on top of", meaning: "放置在……顶上" },
          ],
        },
        {
          title: "引申表达类",
          items: [
            { phrase: "on top of that", meaning: "除此之外；更进一步" },
            { phrase: "on top of everything", meaning: "在各种问题之外还……" },
            { phrase: "on top of the list", meaning: "位居榜首" },
            { phrase: "on top of the news", meaning: "及时掌握信息" },
            { phrase: "stay on top of", meaning: "及时跟进并掌控" },
            { phrase: "get on top of", meaning: "把……控制住" },
          ],
        },
      ],
      en: [
        {
          title: "Physical top position",
          items: [
            "on top of the box",
            "on top of the shelf",
            "on top of the mountain",
            "on top of the fridge",
            "on top of the table",
            "on top of the building",
          ],
        },
        {
          title: "Classroom high-frequency",
          items: [
            "put it on top of",
            "stack on top of",
            "sit on top of",
            "stand on top of",
            "write on top of",
            "place on top of",
          ],
        },
        {
          title: "Extended usage",
          items: [
            "on top of that",
            "on top of everything",
            "on top of the list",
            "on top of the news",
            "stay on top of",
            "get on top of",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "The cat is on the wardrobe. (需要强调在顶端)",
          correct: "The cat is on top of the wardrobe.",
          reason: "当要强调“就在最上方”时，on top of 更准确。",
        },
        {
          wrong: "The cat jumped on top of the box.",
          correct: "The cat jumped onto the box.",
          reason: "jumped 表示动作过程，应用 onto。",
        },
        {
          wrong: "A plane flew on top of the city.",
          correct: "A plane flew over the city.",
          reason: "飞机与城市不接触，应使用 over。",
        },
      ],
      en: [
        {
          wrong: "The cat is on the wardrobe. (when top emphasis matters)",
          correct: "The cat is on top of the wardrobe.",
          reason: "Use on top of when you want explicit topmost-position emphasis.",
        },
        {
          wrong: "The cat jumped on top of the box.",
          correct: "The cat jumped onto the box.",
          reason: "Jumped expresses movement, so onto is the better form.",
        },
        {
          wrong: "A plane flew on top of the city.",
          correct: "A plane flew over the city.",
          reason: "No contact is implied, so over is correct.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "Choose the correct preposition: The vase is ___ the shelf.",
          options: ["on top of", "onto", "over"],
          answer: "on top of",
          explanation: "这是静态位置，且强调在顶部。",
        },
        {
          prompt: "Choose the correct preposition: The boy climbed ___ the wall.",
          options: ["onto", "on top of", "under"],
          answer: "onto",
          explanation: "climbed 表示移动到顶部，应用 onto。",
        },
        {
          prompt: "Choose the correct preposition: ___ that, we need more time.",
          options: ["On top of", "Inside", "Below"],
          answer: "On top of",
          explanation: "On top of that 是高频固定表达，意为“除此之外”。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: The vase is ___ the shelf.",
          options: ["on top of", "onto", "over"],
          answer: "on top of",
          explanation: "This is a static top position with clear top emphasis.",
        },
        {
          prompt: "Choose the correct preposition: The boy climbed ___ the wall.",
          options: ["onto", "on top of", "under"],
          answer: "onto",
          explanation: "Climbed shows motion to a destination, so onto fits better.",
        },
        {
          prompt: "Choose the correct preposition: ___ that, we need more time.",
          options: ["On top of", "Inside", "Below"],
          answer: "On top of",
          explanation: "On top of that is a common discourse connector.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "on top of 的核心意思是什么？",
          answer:
            "核心是“接触并位于最上方”。它比 on 更强调‘顶部位置’。",
        },
        {
          question: "on top of 和 on 有什么区别？",
          answer:
            "on 是一般表面接触；on top of 是“就在顶端”的更强表达。",
        },
        {
          question: "on top of 和 onto 怎么区分？",
          answer:
            "onto 表示移动到顶部；on top of 表示已经在顶部。",
        },
        {
          question: "on top of 和 over 的差异？",
          answer:
            "over 常不接触，表示上方或跨越；on top of 必须有接触且在顶部。",
        },
        {
          question: "on top of 能用于时间表达吗？",
          answer:
            "通常不用作时间介词核心表达，它主要是空间位置和引申短语。",
        },
        {
          question: "初学者常见错误是什么？",
          answer:
            "最常见是把动作句误用 on top of（应 onto），或把不接触场景误用 on top of（应 over）。",
        },
        {
          question: "有哪些高频搭配值得先记？",
          answer:
            "先记 on top of the box、on top of the shelf、on top of that、stay on top of。",
        },
        {
          question: "30 秒记忆法是什么？",
          answer:
            "记一个判据：要不要强调“最上面且接触”。需要就用 on top of。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of on top of?",
          answer:
            "It means being in contact at the highest surface, with explicit top-position emphasis.",
        },
        {
          question: "What is the difference between on top of and on?",
          answer:
            "On is neutral surface contact. On top of highlights the topmost location.",
        },
        {
          question: "How do I choose between on top of and onto?",
          answer:
            "Use onto for movement to the top; use on top of for the final static position.",
        },
        {
          question: "How is on top of different from over?",
          answer:
            "Over often has no contact and may express crossing. On top of requires contact on the top surface.",
        },
        {
          question: "Can on top of be used for time expressions?",
          answer:
            "Not as a core time preposition. It is mainly a spatial phrase plus some discourse patterns.",
        },
        {
          question: "What is a common learner mistake with on top of?",
          answer:
            "Learners often use on top of for motion (should be onto) or for no-contact scenes (should be over).",
        },
        {
          question: "What collocations should beginners memorize first?",
          answer:
            "Start with on top of the box, on top of the shelf, on top of that, and stay on top of.",
        },
        {
          question: "What is a 30-second memory rule for on top of?",
          answer:
            "Ask one question: do I need 'topmost + contact' emphasis? If yes, choose on top of.",
        },
      ],
    },
    scene: makeScene([0, 0.9, 0]),
  },
  {
    id: "in-the-middle-of",
    word: "in the middle of",
    tags: ["space", "center"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……中间/中央",
        tips: ["强调位于中心位置。", "可用于多个物体之间。"],
      },
      en: {
        meaning: "in the middle of; at the center",
        tips: ["At the central position.", "Between multiple things."],
      },
    },
    examples: [
      {
        en: "The tree is in the middle of the yard.",
        i18n: {
          "zh-CN": { translation: "树在院子中央。" },
          en: { translation: "The tree is in the middle of the yard." },
        },
      },
      {
        en: "He sat in the middle of the group.",
        i18n: {
          "zh-CN": { translation: "他坐在小组中间。" },
          en: { translation: "He sat in the middle of the group." },
        },
      },
    ],
    scene: makeScene([0, 0, 0], {
      variant: "ringCubes",
    }),
  },
  {
    id: "in-back-of",
    word: "in back of",
    tags: ["space", "back"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……后面（口语）",
        tips: ["与 behind 意义相近。", "更口语化。"],
      },
      en: {
        meaning: "in back of; behind (informal)",
        tips: ["Similar to behind.", "More informal usage."],
      },
    },
    examples: [
      {
        en: "The bike is in back of the house.",
        i18n: {
          "zh-CN": { translation: "自行车在房子后面。" },
          en: { translation: "The bike is in back of the house." },
        },
      },
      {
        en: "A garden is in back of the shop.",
        i18n: {
          "zh-CN": { translation: "商店后面有个花园。" },
          en: { translation: "A garden is in back of the shop." },
        },
      },
    ],
    scene: makeScene([0, 0, -1.4]),
  },
  {
    id: "ahead-of",
    word: "ahead of",
    tags: ["space", "front"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……前面（前方）",
        tips: ["强调在前方或更靠前。", "与 behind 相对。"],
      },
      en: {
        meaning: "ahead of; in front of",
        tips: ["In front of or further forward.", "Opposite of behind."],
      },
    },
    examples: [
      {
        en: "The car ahead of us turned left.",
        i18n: {
          "zh-CN": { translation: "前面的车左转了。" },
          en: { translation: "The car ahead of us turned left." },
        },
      },
      {
        en: "A sign stands ahead of the bridge.",
        i18n: {
          "zh-CN": { translation: "桥前方有个标志牌。" },
          en: { translation: "A sign stands ahead of the bridge." },
        },
      },
    ],
    scene: makeScene([0, 0, 1.4]),
  },
  {
    id: "close-to",
    word: "close to",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "靠近……；离……很近（强调很近）",
        tips: [
          "close to 强调“非常近”的距离感，常比 near 更强。",
          "若要表达“紧挨着/并排相邻”，优先 next to / beside。",
          "close 作为形容词时通常要接 to：close to + 名词/代词/动名词。",
        ],
      },
      en: {
        meaning: "very near; at a short distance from",
        tips: [
          "Close to emphasizes very short distance, often stronger than near.",
          "For strict adjacency (side-by-side), next to / beside is clearer.",
          "The common pattern is close to + noun/pronoun/gerund.",
        ],
      },
    },
    examples: [
      {
        en: "The lamp is close to the bed.",
        i18n: {
          "zh-CN": { translation: "灯离床很近。" },
          en: { translation: "The lamp is close to the bed." },
        },
      },
      {
        en: "We live close to the subway.",
        i18n: {
          "zh-CN": { translation: "我们住得离地铁很近。" },
          en: { translation: "We live close to the subway." },
        },
      },
    ],
    examplesByCategory: {
      space: [
        {
          en: "Stay close to the wall.",
          i18n: {
            "zh-CN": { translation: "靠墙走（离墙近点）。" },
            en: { translation: "Stay close to the wall." },
          },
        },
        {
          en: "We sat close to the stage.",
          i18n: {
            "zh-CN": { translation: "我们坐得离舞台很近。" },
            en: { translation: "We sat close to the stage." },
          },
        },
      ],
    },
    comparison: {
      i18n: {
        "zh-CN": {
          summary:
            "close to 侧重“非常近”的距离感；near 更中性更宽；next to/beside 更强调紧挨并排；far from 是反义“很远”。",
          differences: [
            {
              term: "near",
              description: "near 表示“离得不远”；close to 更强调“非常近”。",
              examples: [
                {
                  term: "near",
                  sentence: "We live near the subway.",
                  translation: "我们住得离地铁不远。",
                },
                {
                  term: "close to",
                  sentence: "We live close to the subway entrance.",
                  translation: "我们住得离地铁口很近。",
                },
              ],
            },
            {
              term: "next to",
              description: "next to 强调“紧挨着/相邻并排”；close to 只说“距离很近”。",
              examples: [
                {
                  term: "close to",
                  sentence: "Sit close to me.",
                  translation: "坐近一点。",
                },
                {
                  term: "next to",
                  sentence: "Sit next to me.",
                  translation: "坐我旁边（紧挨着）。",
                },
              ],
            },
            {
              term: "far from",
              description: "far from 与 close to 相反，表示“距离很远”。",
              examples: [
                {
                  term: "close to",
                  sentence: "The hotel is close to the beach.",
                  translation: "酒店离海滩很近。",
                },
                {
                  term: "far from",
                  sentence: "The hotel is far from the beach.",
                  translation: "酒店离海滩很远。",
                },
              ],
            },
          ],
        },
        en: {
          summary:
            "Close to emphasizes very short distance. Near is broader. Next to/beside is for strict adjacency. Far from is the opposite.",
          differences: [
            {
              term: "near",
              description:
                "Near means generally close; close to often sounds stronger for very short distance.",
              examples: [
                { term: "near", sentence: "We live near the subway." },
                { term: "close to", sentence: "We live close to the subway entrance." },
              ],
            },
            {
              term: "next to",
              description:
                "Next to signals immediate adjacency. Close to is about distance and can allow some gap and different directions.",
              examples: [
                { term: "close to", sentence: "Sit close to me." },
                { term: "next to", sentence: "Sit next to me." },
              ],
            },
            {
              term: "far from",
              description: "Far from is the opposite: large distance.",
              examples: [
                { term: "close to", sentence: "The hotel is close to the beach." },
                { term: "far from", sentence: "The hotel is far from the beach." },
              ],
            },
          ],
        },
      },
    },
    collocationGroups: {
      "zh-CN": [
        {
          title: "地点距离（很近）",
          items: [
            { phrase: "close to the station", meaning: "离车站很近" },
            { phrase: "close to the airport", meaning: "离机场很近" },
            { phrase: "close to the city center", meaning: "离市中心很近" },
            { phrase: "close to the subway", meaning: "离地铁很近" },
            { phrase: "close to the beach", meaning: "离海滩很近" },
            { phrase: "close to home", meaning: "离家很近" },
          ],
        },
        {
          title: "物体位置（贴近但不一定紧挨）",
          items: [
            { phrase: "close to the door", meaning: "靠近门" },
            { phrase: "close to the window", meaning: "靠近窗" },
            { phrase: "close to the wall", meaning: "靠近墙" },
            { phrase: "close to the edge", meaning: "靠近边缘" },
            { phrase: "close to the screen", meaning: "靠近屏幕" },
            { phrase: "close to the stage", meaning: "靠近舞台" },
          ],
        },
        {
          title: "近似含义（几乎、接近）",
          items: [
            { phrase: "close to 100", meaning: "接近 100（大约 100）" },
            { phrase: "close to midnight", meaning: "接近午夜" },
            { phrase: "close to the end", meaning: "接近尾声" },
            { phrase: "close to perfect", meaning: "几乎完美" },
            { phrase: "close to finishing", meaning: "快要完成" },
            { phrase: "close to zero", meaning: "接近 0" },
          ],
        },
      ],
      en: [
        {
          title: "Places (very near)",
          items: [
            "close to the station",
            "close to the airport",
            "close to the city center",
            "close to the subway",
            "close to the beach",
            "close to home",
          ],
        },
        {
          title: "Objects (very close)",
          items: [
            "close to the door",
            "close to the window",
            "close to the wall",
            "close to the edge",
            "close to the screen",
            "close to the stage",
          ],
        },
        {
          title: "Approximation (almost)",
          items: [
            "close to 100",
            "close to midnight",
            "close to the end",
            "close to perfect",
            "close to finishing",
            "close to zero",
          ],
        },
      ],
    },
    commonMistakes: {
      "zh-CN": [
        {
          wrong: "My house is close the station.",
          correct: "My house is close to the station.",
          reason: "close 作形容词表达距离时，通常需要 to：close to + 名词。",
        },
        {
          wrong: "Please sit close to me. (需要并排紧挨一起看书)",
          correct: "Please sit next to me.",
          reason: "需要“并排相邻”时，next to/beside 更清楚；close to 只强调距离近。",
        },
        {
          wrong: "I'm close to finish the report.",
          correct: "I'm close to finishing the report.",
          reason: "close to 后面常接名词或动名词（-ing），不直接接动词原形。",
        },
      ],
      en: [
        {
          wrong: "My house is close the station.",
          correct: "My house is close to the station.",
          reason: "For distance, the common pattern is close to + noun.",
        },
        {
          wrong: "Please sit close to me. (when side-by-side adjacency is required)",
          correct: "Please sit next to me.",
          reason: "Next to/beside is clearer for strict adjacency; close to is distance-focused.",
        },
        {
          wrong: "I'm close to finish the report.",
          correct: "I'm close to finishing the report.",
          reason: "Close to commonly takes a noun or gerund (-ing), not a bare verb.",
        },
      ],
    },
    quiz: {
      "zh-CN": [
        {
          prompt: "选择正确介词：Our hotel is ___ the beach (步行 5 分钟).",
          options: ["close to", "far from", "under"],
          answer: "close to",
          explanation: "强调“离海滩很近”，用 close to。",
        },
        {
          prompt: "更自然的表达：Please sit ___ me so we can share this book.",
          options: ["next to", "close to", "near"],
          answer: "next to",
          explanation: "需要并排紧挨时，next to 更准确；close to 只表示靠近。",
        },
        {
          prompt: "选择正确介词：The price is ___ $50 (大约 50 美元).",
          options: ["close to", "over", "between"],
          answer: "close to",
          explanation: "close to 可表示“接近/大约”，适用于数值近似。",
        },
      ],
      en: [
        {
          prompt: "Choose the correct preposition: Our hotel is ___ the beach (a 5-minute walk).",
          options: ["close to", "far from", "under"],
          answer: "close to",
          explanation: "Close to emphasizes very short distance.",
        },
        {
          prompt: "Choose the more natural option: Please sit ___ me so we can share this book.",
          options: ["next to", "close to", "near"],
          answer: "next to",
          explanation: "For strict side-by-side adjacency, next to is clearer than close to.",
        },
        {
          prompt: "Choose the correct phrase: The price is ___ $50 (about $50).",
          options: ["close to", "over", "between"],
          answer: "close to",
          explanation: "Close to can express approximation for numbers and amounts.",
        },
      ],
    },
    faq: {
      "zh-CN": [
        {
          question: "close to 的核心含义是什么？",
          answer:
            "close to 的核心是“非常近”。它强调短距离，常比 near 更强，适合表达“离某处很近、靠得很近”。",
        },
        {
          question: "close to 和 near 的区别是什么？",
          answer:
            "near 更中性、范围更宽；close to 更强调“非常近”。两者都对时，想突出“近得明显”用 close to 更合适。",
        },
        {
          question: "close to 和 next to 怎么选？",
          answer:
            "next to 更像“并排相邻/隔壁/紧挨着”，方向更明确；close to 只强调距离很近，可能在任意方向，不一定并排。",
        },
        {
          question: "close 后面一定要有 to 吗？",
          answer:
            "在距离表达里，常用 close to + 名词（close to the station）。不加 to（close the station）会变成“关闭车站”的动词结构。",
        },
        {
          question: "close to 可以表示“差不多/接近”吗？",
          answer:
            "可以，close to 常用于数值或时间的近似：close to 100、close to $50、close to midnight，意思是“接近/几乎”。",
        },
        {
          question: "close to 的常见语法结构有哪些？",
          answer:
            "常见结构是 close to + 名词/代词（close to me），以及 close to + 动名词（close to finishing）。",
        },
        {
          question: "初学者最常见错误是什么？",
          answer:
            "常见错是漏掉 to（close the station），或把 close to 当成 next to（需要并排时更自然的是 next to）。",
        },
        {
          question: "30 秒记忆法怎么做？",
          answer:
            "先问：是否要强调“很近/几乎”？是就 close to；若要表达“紧挨着并排”，改用 next to/beside；若只是“离得不远”，用 near。",
        },
      ],
      en: [
        {
          question: "What is the core meaning of close to?",
          answer:
            "Close to means very near. It emphasizes short distance and is often stronger than near.",
        },
        {
          question: "How is close to different from near?",
          answer:
            "Near is broader and more neutral. Close to often highlights very short distance more strongly.",
        },
        {
          question: "How do I choose between close to and next to?",
          answer:
            "Next to is strict adjacency (side-by-side). Close to is distance-focused and can be close in any direction, not necessarily adjacent.",
        },
        {
          question: "Do I need 'to' after close?",
          answer:
            "For distance, yes in the common pattern: close to + noun (close to the station). Without to, close becomes a verb (close the station).",
        },
        {
          question: "Can close to mean 'almost'?",
          answer:
            "Yes. It is common for approximations: close to 100, close to $50, close to midnight.",
        },
        {
          question: "What are common grammar patterns with close to?",
          answer:
            "Common patterns include close to + noun/pronoun (close to me) and close to + gerund (close to finishing).",
        },
        {
          question: "What is a common learner mistake with close to?",
          answer:
            "Common mistakes include dropping to and using close to where next to is needed for strict adjacency.",
        },
        {
          question: "What is a 30-second memory rule for close to?",
          answer:
            "If you want to emphasize very short distance, use close to. If you need strict adjacency, use next to/beside. If you only mean generally close, use near.",
        },
      ],
    },
    scene: makeScene([0.85, 0, 0]),
  },
  {
    id: "far-from",
    word: "far from",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "远离……",
        tips: ["强调距离很远。", "与 close to 相对。"],
      },
      en: {
        meaning: "far from; distant from",
        tips: ["Very far in distance.", "Opposite of close to."],
      },
    },
    examples: [
      {
        en: "The village is far from the city.",
        i18n: {
          "zh-CN": { translation: "村子离城市很远。" },
          en: { translation: "The village is far from the city." },
        },
      },
      {
        en: "His house is far from here.",
        i18n: {
          "zh-CN": { translation: "他的房子离这里很远。" },
          en: { translation: "His house is far from here." },
        },
      },
    ],
    scene: makeScene([2.2, 0, 0]),
  },
];

type TemporalSeedGroup = {
  titleEn: string;
  titleZh: string;
  meaningPrefixZh: string;
  items: string[];
};

type TemporalSeed = {
  focusEn: string;
  focusZh: string;
  contrasts: [string, string];
  groups: [TemporalSeedGroup, TemporalSeedGroup, TemporalSeedGroup];
};

const TEMPORAL_DETAIL_IDS = new Set([
  "at",
  "in",
  "on",
  "by",
  "between",
  "through",
  "over",
  "around",
  "from",
  "to",
  "past",
  "within",
  "throughout",
  "under",
  "ahead-of",
  "behind",
]);

const DYNAMIC_DETAIL_IDS = new Set([
  "across",
  "along",
  "into",
  "onto",
  "out-of",
  "up",
  "down",
  "off",
  "toward",
  "alongside",
]);

const TEMPORAL_DETAIL_SEEDS: Record<string, TemporalSeed> = {
  on: {
    focusEn: "days and specific calendar dates",
    focusZh: "星期与具体日期",
    contrasts: ["in", "at"],
    groups: [
      {
        titleEn: "Calendar days",
        titleZh: "日期类",
        meaningPrefixZh: "日期表达",
        items: [
          "on Monday",
          "on Tuesday",
          "on July 1",
          "on my birthday",
          "on New Year's Day",
          "on Monday morning",
        ],
      },
      {
        titleEn: "Schedule range",
        titleZh: "安排类",
        meaningPrefixZh: "时间安排",
        items: [
          "on the weekend",
          "on weekdays",
          "on the first day",
          "on the last day",
          "on that day",
          "on day one",
        ],
      },
      {
        titleEn: "Status & process",
        titleZh: "状态类",
        meaningPrefixZh: "进度状态",
        items: [
          "on time",
          "on schedule",
          "on arrival",
          "on departure",
          "on short notice",
          "on the dot",
        ],
      },
    ],
  },
  under: {
    focusEn: "a limit lower than a threshold",
    focusZh: "低于某个时间阈值",
    contrasts: ["over", "within"],
    groups: [
      {
        titleEn: "Duration limits",
        titleZh: "时长上限类",
        meaningPrefixZh: "时长上限",
        items: [
          "under an hour",
          "under two minutes",
          "under three days",
          "under a week",
          "under a month",
          "under a minute",
        ],
      },
      {
        titleEn: "Time pressure",
        titleZh: "时间压力类",
        meaningPrefixZh: "时间压力",
        items: [
          "under pressure",
          "under deadline pressure",
          "under a tight schedule",
          "under strict timing",
          "under time constraints",
          "under urgent timing",
        ],
      },
      {
        titleEn: "Progress status",
        titleZh: "过程状态类",
        meaningPrefixZh: "过程状态",
        items: [
          "under review",
          "under discussion",
          "under observation",
          "under negotiation",
          "under investigation",
          "under revision",
        ],
      },
    ],
  },
  over: {
    focusEn: "a duration that spans a period",
    focusZh: "跨越一段时间",
    contrasts: ["within", "under"],
    groups: [
      {
        titleEn: "Duration span",
        titleZh: "时间跨度类",
        meaningPrefixZh: "时间跨度",
        items: [
          "over the weekend",
          "over the night",
          "over three days",
          "over the next month",
          "over two semesters",
          "over lunch",
        ],
      },
      {
        titleEn: "Long-term change",
        titleZh: "长期变化类",
        meaningPrefixZh: "长期变化",
        items: [
          "over time",
          "over the years",
          "over the past year",
          "over the long term",
          "over several months",
          "over the course of the week",
        ],
      },
      {
        titleEn: "Seasonal windows",
        titleZh: "阶段时段类",
        meaningPrefixZh: "阶段时段",
        items: [
          "over the holidays",
          "over summer break",
          "over winter break",
          "over exam week",
          "over the break",
          "over this quarter",
        ],
      },
    ],
  },
  by: {
    focusEn: "a deadline no later than a point",
    focusZh: "不晚于某时间点",
    contrasts: ["at", "on"],
    groups: [
      {
        titleEn: "Deadlines",
        titleZh: "截止时间类",
        meaningPrefixZh: "截止时间",
        items: [
          "by Monday",
          "by noon",
          "by tomorrow",
          "by next week",
          "by 5 p.m.",
          "by the end of the month",
        ],
      },
      {
        titleEn: "Milestones",
        titleZh: "里程碑类",
        meaningPrefixZh: "阶段节点",
        items: [
          "by then",
          "by now",
          "by age 18",
          "by this point",
          "by the deadline",
          "by the second week",
        ],
      },
      {
        titleEn: "Day progression",
        titleZh: "日内进度类",
        meaningPrefixZh: "日内进度",
        items: [
          "by early morning",
          "by late afternoon",
          "by night",
          "by the end of class",
          "by break time",
          "by dinner time",
        ],
      },
    ],
  },
  behind: {
    focusEn: "later than planned progress",
    focusZh: "进度落后于计划",
    contrasts: ["ahead-of", "by"],
    groups: [
      {
        titleEn: "Schedule delay",
        titleZh: "进度落后类",
        meaningPrefixZh: "进度落后",
        items: [
          "behind schedule",
          "behind the plan",
          "behind the deadline",
          "behind the target date",
          "behind the timetable",
          "days behind",
        ],
      },
      {
        titleEn: "Work progress",
        titleZh: "学习工作类",
        meaningPrefixZh: "学习工作进度",
        items: [
          "behind in homework",
          "behind in reading",
          "behind in payments",
          "behind in updates",
          "behind in production",
          "behind in training",
        ],
      },
      {
        titleEn: "Catch-up language",
        titleZh: "追赶表达类",
        meaningPrefixZh: "追赶表达",
        items: [
          "fall behind",
          "get behind",
          "stay behind",
          "running behind",
          "months behind",
          "well behind",
        ],
      },
    ],
  },
  between: {
    focusEn: "a bounded interval with two endpoints",
    focusZh: "两个端点之间的时间区间",
    contrasts: ["from", "through"],
    groups: [
      {
        titleEn: "Clock and date ranges",
        titleZh: "时间区间类",
        meaningPrefixZh: "时间区间",
        items: [
          "between 2 and 3 p.m.",
          "between Monday and Friday",
          "between June and August",
          "between now and noon",
          "between 1990 and 2000",
          "between day and night",
        ],
      },
      {
        titleEn: "Task windows",
        titleZh: "任务窗口类",
        meaningPrefixZh: "任务窗口",
        items: [
          "between classes",
          "between meetings",
          "between two deadlines",
          "between two shifts",
          "between tasks",
          "between appointments",
        ],
      },
      {
        titleEn: "Process stages",
        titleZh: "流程阶段类",
        meaningPrefixZh: "流程阶段",
        items: [
          "between semesters",
          "between projects",
          "between start and finish",
          "between lunch and dinner",
          "between first and second term",
          "between then and now",
        ],
      },
    ],
  },
  around: {
    focusEn: "approximate time points or periods",
    focusZh: "大约时间点或时间段",
    contrasts: ["at", "by"],
    groups: [
      {
        titleEn: "Approximate points",
        titleZh: "大约时点类",
        meaningPrefixZh: "大约时点",
        items: [
          "around noon",
          "around 8:00",
          "around midnight",
          "around sunrise",
          "around lunchtime",
          "around this time",
        ],
      },
      {
        titleEn: "Approximate dates",
        titleZh: "大约日期类",
        meaningPrefixZh: "大约日期",
        items: [
          "around Monday",
          "around July",
          "around the end of May",
          "around the holidays",
          "around the weekend",
          "around the due date",
        ],
      },
      {
        titleEn: "Flexible planning",
        titleZh: "灵活安排类",
        meaningPrefixZh: "灵活安排",
        items: [
          "around then",
          "around one hour",
          "around two weeks",
          "around class time",
          "around early evening",
          "around the same period",
        ],
      },
    ],
  },
  through: {
    focusEn: "continuity from start to finish",
    focusZh: "从头到尾持续",
    contrasts: ["over", "throughout"],
    groups: [
      {
        titleEn: "Continuous periods",
        titleZh: "持续时段类",
        meaningPrefixZh: "持续时段",
        items: [
          "through the night",
          "through the day",
          "through the week",
          "through winter",
          "through the holiday",
          "through the year",
        ],
      },
      {
        titleEn: "Learning process",
        titleZh: "学习流程类",
        meaningPrefixZh: "学习流程",
        items: [
          "through the morning",
          "through the afternoon",
          "through the semester",
          "through the program",
          "through the process",
          "through every stage",
        ],
      },
      {
        titleEn: "Project phases",
        titleZh: "项目阶段类",
        meaningPrefixZh: "项目阶段",
        items: [
          "through exam season",
          "through the first quarter",
          "through the final phase",
          "through the deadline period",
          "through implementation",
          "through review cycles",
        ],
      },
    ],
  },
  at: {
    focusEn: "precise points in time",
    focusZh: "精确时间点",
    contrasts: ["on", "in"],
    groups: [
      {
        titleEn: "Exact points",
        titleZh: "精确时点类",
        meaningPrefixZh: "精确时点",
        items: [
          "at 7:00",
          "at noon",
          "at midnight",
          "at sunrise",
          "at lunchtime",
          "at the moment",
        ],
      },
      {
        titleEn: "Event timing",
        titleZh: "事件节点类",
        meaningPrefixZh: "事件节点",
        items: [
          "at the beginning",
          "at the end of the day",
          "at that time",
          "at first",
          "at last",
          "at the same time",
        ],
      },
      {
        titleEn: "Schedule moments",
        titleZh: "日程时刻类",
        meaningPrefixZh: "日程时刻",
        items: [
          "at short notice",
          "at peak time",
          "at break time",
          "at opening time",
          "at closing time",
          "at bedtime",
        ],
      },
    ],
  },
  to: {
    focusEn: "an endpoint or final limit",
    focusZh: "终点或结束界限",
    contrasts: ["from", "by"],
    groups: [
      {
        titleEn: "End points",
        titleZh: "终点时间类",
        meaningPrefixZh: "终点时间",
        items: [
          "to Monday",
          "to Friday",
          "to midnight",
          "to 5 p.m.",
          "to the end of June",
          "to date",
        ],
      },
      {
        titleEn: "Range patterns",
        titleZh: "范围搭配类",
        meaningPrefixZh: "范围搭配",
        items: [
          "from 9 to 5",
          "Monday to Friday",
          "from April to June",
          "10 to 12",
          "from start to finish",
          "from dawn to dusk",
        ],
      },
      {
        titleEn: "Clock expressions",
        titleZh: "报时表达类",
        meaningPrefixZh: "报时表达",
        items: [
          "five to ten",
          "ten to six",
          "quarter to nine",
          "twenty to eight",
          "one minute to midnight",
          "ten minutes to two",
        ],
      },
    ],
  },
  from: {
    focusEn: "the starting point in time",
    focusZh: "时间起点",
    contrasts: ["to", "since"],
    groups: [
      {
        titleEn: "Start points",
        titleZh: "起点时间类",
        meaningPrefixZh: "起点时间",
        items: [
          "from Monday",
          "from 9 a.m.",
          "from now on",
          "from childhood",
          "from that day",
          "from early morning",
        ],
      },
      {
        titleEn: "Range expressions",
        titleZh: "范围表达类",
        meaningPrefixZh: "范围表达",
        items: [
          "from Monday to Friday",
          "from April to June",
          "from 2010 to 2020",
          "from start to finish",
          "from dawn to dusk",
          "from day one",
        ],
      },
      {
        titleEn: "Continuation",
        titleZh: "延续表达类",
        meaningPrefixZh: "延续表达",
        items: [
          "from then on",
          "from this point forward",
          "from today onward",
          "from the first week",
          "from the beginning",
          "from the deadline date",
        ],
      },
    ],
  },
  within: {
    focusEn: "inside a time limit before it ends",
    focusZh: "在时限结束前",
    contrasts: ["in", "by"],
    groups: [
      {
        titleEn: "Time limits",
        titleZh: "时限表达类",
        meaningPrefixZh: "时限表达",
        items: [
          "within an hour",
          "within two days",
          "within a week",
          "within this month",
          "within minutes",
          "within one semester",
        ],
      },
      {
        titleEn: "Deadline windows",
        titleZh: "截止窗口类",
        meaningPrefixZh: "截止窗口",
        items: [
          "within the deadline",
          "within working hours",
          "within the first quarter",
          "within the next year",
          "within the allowed time",
          "within the time limit",
        ],
      },
      {
        titleEn: "Constraint language",
        titleZh: "约束表达类",
        meaningPrefixZh: "约束表达",
        items: [
          "within reason",
          "within reach",
          "within budget",
          "within the plan",
          "within scope",
          "within expectations",
        ],
      },
    ],
  },
  past: {
    focusEn: "later than a reference point on the clock",
    focusZh: "晚于某个参照时刻",
    contrasts: ["at", "beyond"],
    groups: [
      {
        titleEn: "Clock expressions",
        titleZh: "钟点表达类",
        meaningPrefixZh: "钟点表达",
        items: [
          "ten past six",
          "twenty past eight",
          "half past nine",
          "five past noon",
          "just past midnight",
          "a minute past ten",
        ],
      },
      {
        titleEn: "After a point",
        titleZh: "超过节点类",
        meaningPrefixZh: "超过节点",
        items: [
          "past Monday",
          "past the deadline",
          "past bedtime",
          "past lunch time",
          "past this week",
          "past due",
        ],
      },
      {
        titleEn: "Historical context",
        titleZh: "历史时间类",
        meaningPrefixZh: "历史时间",
        items: [
          "past years",
          "past records",
          "past events",
          "past performance",
          "past habits",
          "past experience",
        ],
      },
    ],
  },
  throughout: {
    focusEn: "all parts of an entire period",
    focusZh: "贯穿整个时间段",
    contrasts: ["through", "over"],
    groups: [
      {
        titleEn: "Whole-period coverage",
        titleZh: "全程覆盖类",
        meaningPrefixZh: "全程覆盖",
        items: [
          "throughout the day",
          "throughout the night",
          "throughout the week",
          "throughout the month",
          "throughout the year",
          "throughout the semester",
        ],
      },
      {
        titleEn: "Project coverage",
        titleZh: "项目覆盖类",
        meaningPrefixZh: "项目覆盖",
        items: [
          "throughout the process",
          "throughout the course",
          "throughout the project",
          "throughout training",
          "throughout the campaign",
          "throughout implementation",
        ],
      },
      {
        titleEn: "Life-stage coverage",
        titleZh: "人生阶段类",
        meaningPrefixZh: "人生阶段",
        items: [
          "throughout childhood",
          "throughout adulthood",
          "throughout exam season",
          "throughout office hours",
          "throughout class time",
          "throughout history",
        ],
      },
    ],
  },
  beyond: {
    focusEn: "later or further than an expected limit",
    focusZh: "超过预期时间界限",
    contrasts: ["past", "by"],
    groups: [
      {
        titleEn: "Beyond limits",
        titleZh: "超出界限类",
        meaningPrefixZh: "超出界限",
        items: [
          "beyond midnight",
          "beyond this year",
          "beyond the deadline",
          "beyond working hours",
          "beyond the due date",
          "beyond that point",
        ],
      },
      {
        titleEn: "Extended windows",
        titleZh: "延展时段类",
        meaningPrefixZh: "延展时段",
        items: [
          "beyond the first month",
          "beyond the second quarter",
          "beyond the trial period",
          "beyond the schedule",
          "beyond normal hours",
          "beyond retirement age",
        ],
      },
      {
        titleEn: "Abstract extension",
        titleZh: "抽象延展类",
        meaningPrefixZh: "抽象延展",
        items: [
          "beyond expectations",
          "beyond control",
          "beyond memory",
          "beyond measure",
          "beyond comparison",
          "beyond doubt",
        ],
      },
    ],
  },
  "ahead-of": {
    focusEn: "earlier than a schedule or expected time",
    focusZh: "早于计划时间",
    contrasts: ["behind", "by"],
    groups: [
      {
        titleEn: "Ahead status",
        titleZh: "提前状态类",
        meaningPrefixZh: "提前状态",
        items: [
          "ahead of schedule",
          "ahead of time",
          "ahead of the deadline",
          "ahead of launch",
          "ahead of the meeting",
          "ahead of exams",
        ],
      },
      {
        titleEn: "Lead amount",
        titleZh: "提前幅度类",
        meaningPrefixZh: "提前幅度",
        items: [
          "two weeks ahead of deadline",
          "days ahead of plan",
          "months ahead of release",
          "hours ahead of others",
          "ahead of target",
          "ahead of the curve",
        ],
      },
      {
        titleEn: "Preparation actions",
        titleZh: "提前动作类",
        meaningPrefixZh: "提前动作",
        items: [
          "plan ahead of time",
          "book ahead of time",
          "arrive ahead of schedule",
          "finish ahead of deadline",
          "submit ahead of due date",
          "start ahead of class",
        ],
      },
    ],
  },
};

const DYNAMIC_DETAIL_SEEDS: Record<string, TemporalSeed> = {
  across: {
    focusEn: "movement from one side to the other",
    focusZh: "从一侧到另一侧的横向穿越",
    contrasts: ["through", "along"],
    groups: [
      {
        titleEn: "Crossing paths",
        titleZh: "横穿路径类",
        meaningPrefixZh: "横穿路径",
        items: [
          "across the street",
          "across the bridge",
          "across the river",
          "across the room",
          "across the field",
          "across the road",
        ],
      },
      {
        titleEn: "Visual movement",
        titleZh: "视觉移动类",
        meaningPrefixZh: "视觉移动",
        items: [
          "across the screen",
          "across the page",
          "across the map",
          "across the board",
          "across the line",
          "across lanes",
        ],
      },
      {
        titleEn: "Route coverage",
        titleZh: "路线覆盖类",
        meaningPrefixZh: "路线覆盖",
        items: [
          "across the city",
          "across town",
          "across the campus",
          "across the park",
          "across the valley",
          "across the region",
        ],
      },
    ],
  },
  along: {
    focusEn: "movement following a line or edge",
    focusZh: "沿着线性边界持续移动",
    contrasts: ["across", "through"],
    groups: [
      {
        titleEn: "Linear routes",
        titleZh: "线性路线类",
        meaningPrefixZh: "线性路线",
        items: [
          "along the road",
          "along the river",
          "along the beach",
          "along the wall",
          "along the corridor",
          "along the street",
        ],
      },
      {
        titleEn: "Edges and borders",
        titleZh: "边缘边界类",
        meaningPrefixZh: "边缘边界",
        items: [
          "along the edge",
          "along the border",
          "along the line",
          "along the path",
          "along the coast",
          "along the fence",
        ],
      },
      {
        titleEn: "Abstract paths",
        titleZh: "抽象路径类",
        meaningPrefixZh: "抽象路径",
        items: [
          "along the timeline",
          "along the curve",
          "along the route",
          "along the track",
          "along the channel",
          "along the sequence",
        ],
      },
    ],
  },
  into: {
    focusEn: "movement from outside to inside",
    focusZh: "从外到内进入目标空间",
    contrasts: ["in", "onto"],
    groups: [
      {
        titleEn: "Entering spaces",
        titleZh: "进入空间类",
        meaningPrefixZh: "进入空间",
        items: [
          "into the room",
          "into the house",
          "into the classroom",
          "into the kitchen",
          "into the office",
          "into the hall",
        ],
      },
      {
        titleEn: "Entering containers",
        titleZh: "进入容器类",
        meaningPrefixZh: "进入容器",
        items: [
          "into the box",
          "into the bag",
          "into the bottle",
          "into the drawer",
          "into the basket",
          "into the pocket",
        ],
      },
      {
        titleEn: "Abstract transition",
        titleZh: "抽象转变类",
        meaningPrefixZh: "抽象转变",
        items: [
          "into focus",
          "into detail",
          "into action",
          "into use",
          "into view",
          "into trouble",
        ],
      },
    ],
  },
  onto: {
    focusEn: "movement to a surface",
    focusZh: "移动并落到表面上",
    contrasts: ["on", "into"],
    groups: [
      {
        titleEn: "Surface landing",
        titleZh: "落到表面类",
        meaningPrefixZh: "落到表面",
        items: [
          "onto the table",
          "onto the bed",
          "onto the shelf",
          "onto the roof",
          "onto the floor",
          "onto the stage",
        ],
      },
      {
        titleEn: "Platform movement",
        titleZh: "平台移动类",
        meaningPrefixZh: "平台移动",
        items: [
          "onto the platform",
          "onto the bridge",
          "onto the path",
          "onto the board",
          "onto the map",
          "onto the screen",
        ],
      },
      {
        titleEn: "Transport boarding",
        titleZh: "交通登上类",
        meaningPrefixZh: "交通登上",
        items: [
          "onto the bus",
          "onto the train",
          "onto the boat",
          "onto the bike",
          "onto the elevator",
          "onto the escalator",
        ],
      },
    ],
  },
  "out-of": {
    focusEn: "movement from inside to outside",
    focusZh: "从内部向外离开",
    contrasts: ["from", "into"],
    groups: [
      {
        titleEn: "Exiting spaces",
        titleZh: "离开空间类",
        meaningPrefixZh: "离开空间",
        items: [
          "out of the room",
          "out of the house",
          "out of the classroom",
          "out of the building",
          "out of the office",
          "out of the hall",
        ],
      },
      {
        titleEn: "Exiting containers",
        titleZh: "离开容器类",
        meaningPrefixZh: "离开容器",
        items: [
          "out of the box",
          "out of the bag",
          "out of the drawer",
          "out of the bottle",
          "out of the basket",
          "out of the car",
        ],
      },
      {
        titleEn: "State changes",
        titleZh: "状态变化类",
        meaningPrefixZh: "状态变化",
        items: [
          "out of danger",
          "out of trouble",
          "out of control",
          "out of patience",
          "out of energy",
          "out of time",
        ],
      },
    ],
  },
  up: {
    focusEn: "movement toward a higher position",
    focusZh: "朝更高位置向上移动",
    contrasts: ["down", "onto"],
    groups: [
      {
        titleEn: "Vertical paths",
        titleZh: "垂直上升类",
        meaningPrefixZh: "垂直上升",
        items: [
          "up the stairs",
          "up the ladder",
          "up the hill",
          "up the ramp",
          "up the escalator",
          "up the slope",
        ],
      },
      {
        titleEn: "Route progress",
        titleZh: "路线推进类",
        meaningPrefixZh: "路线推进",
        items: [
          "up the road",
          "up the street",
          "up the river",
          "up the path",
          "up the valley",
          "up the coast",
        ],
      },
      {
        titleEn: "Chart movement",
        titleZh: "图表上升类",
        meaningPrefixZh: "图表上升",
        items: [
          "up the chart",
          "up the ranking",
          "up the list",
          "up the timeline",
          "up the page",
          "up the screen",
        ],
      },
    ],
  },
  down: {
    focusEn: "movement toward a lower position",
    focusZh: "朝更低位置向下移动",
    contrasts: ["up", "off"],
    groups: [
      {
        titleEn: "Vertical descent",
        titleZh: "垂直下降类",
        meaningPrefixZh: "垂直下降",
        items: [
          "down the stairs",
          "down the ladder",
          "down the hill",
          "down the ramp",
          "down the escalator",
          "down the slope",
        ],
      },
      {
        titleEn: "Route descent",
        titleZh: "路线下行类",
        meaningPrefixZh: "路线下行",
        items: [
          "down the road",
          "down the street",
          "down the river",
          "down the path",
          "down the valley",
          "down the corridor",
        ],
      },
      {
        titleEn: "Chart movement",
        titleZh: "图表下降类",
        meaningPrefixZh: "图表下降",
        items: [
          "down the chart",
          "down the ranking",
          "down the list",
          "down the timeline",
          "down the page",
          "down the screen",
        ],
      },
    ],
  },
  off: {
    focusEn: "movement away from a surface or attachment",
    focusZh: "从表面或附着状态脱离",
    contrasts: ["on", "out-of"],
    groups: [
      {
        titleEn: "Leaving surfaces",
        titleZh: "离开表面类",
        meaningPrefixZh: "离开表面",
        items: [
          "off the table",
          "off the shelf",
          "off the bed",
          "off the roof",
          "off the platform",
          "off the stage",
        ],
      },
      {
        titleEn: "Transport movement",
        titleZh: "交通离开类",
        meaningPrefixZh: "交通离开",
        items: [
          "off the bus",
          "off the train",
          "off the bike",
          "off the plane",
          "off the boat",
          "off the elevator",
        ],
      },
      {
        titleEn: "State shifts",
        titleZh: "状态切换类",
        meaningPrefixZh: "状态切换",
        items: [
          "off schedule",
          "off duty",
          "off balance",
          "off track",
          "off line",
          "off guard",
        ],
      },
    ],
  },
  toward: {
    focusEn: "movement in the direction of a target",
    focusZh: "朝目标方向接近",
    contrasts: ["to", "past"],
    groups: [
      {
        titleEn: "Directional targets",
        titleZh: "方向目标类",
        meaningPrefixZh: "方向目标",
        items: [
          "toward the door",
          "toward the gate",
          "toward the station",
          "toward the bridge",
          "toward the exit",
          "toward the window",
        ],
      },
      {
        titleEn: "Goal progress",
        titleZh: "目标推进类",
        meaningPrefixZh: "目标推进",
        items: [
          "toward the goal",
          "toward the finish line",
          "toward the target",
          "toward the deadline",
          "toward the answer",
          "toward the solution",
        ],
      },
      {
        titleEn: "Route orientation",
        titleZh: "路线指向类",
        meaningPrefixZh: "路线指向",
        items: [
          "toward the north",
          "toward downtown",
          "toward the coast",
          "toward the checkpoint",
          "toward the main road",
          "toward the city center",
        ],
      },
    ],
  },
  alongside: {
    focusEn: "movement parallel and next to something",
    focusZh: "与参照物并行前进",
    contrasts: ["along", "beside"],
    groups: [
      {
        titleEn: "Parallel routes",
        titleZh: "并行路线类",
        meaningPrefixZh: "并行路线",
        items: [
          "alongside the road",
          "alongside the river",
          "alongside the wall",
          "alongside the path",
          "alongside the track",
          "alongside the coast",
        ],
      },
      {
        titleEn: "Moving with people",
        titleZh: "并肩移动类",
        meaningPrefixZh: "并肩移动",
        items: [
          "alongside the team",
          "alongside the coach",
          "alongside the teacher",
          "alongside the mentor",
          "alongside the partner",
          "alongside the guide",
        ],
      },
      {
        titleEn: "Process alignment",
        titleZh: "流程并行类",
        meaningPrefixZh: "流程并行",
        items: [
          "alongside the timeline",
          "alongside the plan",
          "alongside the process",
          "alongside the course",
          "alongside the project",
          "alongside the campaign",
        ],
      },
    ],
  },
};

const DYNAMIC_TIME_EXAMPLES: Record<
  string,
  {
    en: string;
    zh: string;
  }
> = {
  over: {
    en: "The trend moved over the target line during the quarter.",
    zh: "这个季度里，趋势线越过了目标线。",
  },
  around: {
    en: "Our meeting time moved around noon as plans changed.",
    zh: "随着计划变化，我们的会议时间在中午前后浮动。",
  },
  through: {
    en: "The team worked through the night to finish the release.",
    zh: "团队通宵工作完成了发布。",
  },
  to: {
    en: "The timeline shifted to next Monday after the update.",
    zh: "更新后，时间线调整到下周一。",
  },
  from: {
    en: "The workshop moved from Tuesday to Thursday.",
    zh: "研讨会从周二改到了周四。",
  },
  past: {
    en: "The call ran past midnight during testing.",
    zh: "测试期间，会议一直开到午夜之后。",
  },
};

function getTermWord(idOrWord: string) {
  const byId = PREPOSITIONS_BASE.find((entry) => entry.id === idOrWord);
  return byId?.word ?? idOrWord;
}

function getSeedPhrase(idOrWord: string) {
  const seed = TEMPORAL_DETAIL_SEEDS[idOrWord];
  if (seed) {
    return seed.groups[0].items[0] ?? `${getTermWord(idOrWord)} in context`;
  }
  return `${getTermWord(idOrWord)} in context`;
}

function getDynamicSeedPhrase(idOrWord: string) {
  const seed = DYNAMIC_DETAIL_SEEDS[idOrWord];
  if (seed) {
    return seed.groups[0].items[0] ?? `${getTermWord(idOrWord)} the route`;
  }
  return `${getTermWord(idOrWord)} the route`;
}

function replaceLeadingWord(phrase: string, word: string, replacement: string) {
  const source = `${word.toLowerCase()} `;
  if (phrase.toLowerCase().startsWith(source)) {
    return `${replacement}${phrase.slice(word.length)}`;
  }
  return phrase.replace(word, replacement);
}

function buildPromptFromPhrase(phrase: string, word: string) {
  const ensureTerminalPunctuation = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return trimmed;
    if (/[.!?。！？]$/.test(trimmed)) return trimmed;
    return `${trimmed}.`;
  };
  const source = `${word.toLowerCase()} `;
  if (phrase.toLowerCase().startsWith(source)) {
    const tail = phrase.slice(word.length).trim();
    return ensureTerminalPunctuation(`Choose the correct preposition: ___ ${tail}`);
  }
  return ensureTerminalPunctuation(`Choose the best preposition in this context: ${phrase}`);
}

function createLocalizedExample(en: string, zh: string): PrepositionExample {
  return {
    en,
    i18n: {
      "zh-CN": { translation: zh },
      en: { translation: en },
    },
  };
}

function getPhrase(
  item:
    | string
    | {
        phrase: string;
        meaning?: string;
      },
) {
  return typeof item === "string" ? item : item.phrase;
}

function pickTimePhrase(
  groups: Record<"zh-CN" | "en", PrepositionCollocationGroup[]> | undefined,
  fallback: string,
  groupIndex: number,
  itemIndex: number,
) {
  const enGroup = groups?.en?.[groupIndex];
  if (enGroup?.items?.[itemIndex]) {
    return getPhrase(enGroup.items[itemIndex]);
  }
  const zhGroup = groups?.["zh-CN"]?.[groupIndex];
  if (zhGroup?.items?.[itemIndex]) {
    return getPhrase(zhGroup.items[itemIndex]);
  }
  return fallback;
}

function buildTemporalCategoryExamples(
  entry: PrepositionEntryBase,
  groups: Record<"zh-CN" | "en", PrepositionCollocationGroup[]> | undefined,
): Partial<Record<LearningCategory, PrepositionExample[]>> {
  const phraseA = pickTimePhrase(
    groups,
    `${entry.word} this time`,
    1,
    0,
  );
  const phraseB = pickTimePhrase(
    groups,
    `${entry.word} this period`,
    1,
    1,
  );

  const timeExamples: PrepositionExample[] = [
    createLocalizedExample(
      `Practice this time expression: ${phraseA}.`,
      `练习这个时间表达：${phraseA}。`,
    ),
    createLocalizedExample(
      `Another common pattern is: ${phraseB}.`,
      `另一个常见表达是：${phraseB}。`,
    ),
  ];

  const result: Partial<Record<LearningCategory, PrepositionExample[]>> = {
    space: entry.examples.slice(0, 2),
    time: timeExamples,
  };

  if (entry.scene.animation) {
    const dynamic = DYNAMIC_TIME_EXAMPLES[entry.id];
    if (dynamic) {
      result.dynamic = [createLocalizedExample(dynamic.en, dynamic.zh)];
    } else {
      result.dynamic = [
        createLocalizedExample(
          `Track how the marker moves ${entry.word} the timeline.`,
          `观察标记如何沿着时间线 ${entry.word} 地移动。`,
        ),
      ];
    }
  }

  return result;
}

function buildDynamicCategoryExamples(
  entry: PrepositionEntryBase,
  groups: Record<"zh-CN" | "en", PrepositionCollocationGroup[]> | undefined,
): Partial<Record<LearningCategory, PrepositionExample[]>> {
  const phraseA = pickTimePhrase(
    groups,
    `${entry.word} the route`,
    0,
    0,
  );
  const phraseB = pickTimePhrase(
    groups,
    `${entry.word} the target`,
    1,
    0,
  );

  return {
    space: entry.examples.slice(0, 2),
    dynamic: [
      createLocalizedExample(
        `Watch the marker move ${phraseA}.`,
        `观察标记如何 ${phraseA} 地移动。`,
      ),
      createLocalizedExample(
        `Then trace a second path ${phraseB}.`,
        `然后再追踪一条 ${phraseB} 的路径。`,
      ),
    ],
  };
}

function buildTemporalCollocationGroups(
  seed: TemporalSeed,
): Record<"zh-CN" | "en", PrepositionCollocationGroup[]> {
  return {
    "zh-CN": seed.groups.map((group) => ({
      title: group.titleZh,
      items: group.items.map((phrase) => ({
        phrase,
        meaning: `${group.meaningPrefixZh}：${phrase}`,
      })),
    })),
    en: seed.groups.map((group) => ({
      title: group.titleEn,
      items: [...group.items],
    })),
  };
}

function buildDynamicCollocationGroups(
  seed: TemporalSeed,
): Record<"zh-CN" | "en", PrepositionCollocationGroup[]> {
  return {
    "zh-CN": seed.groups.map((group) => ({
      title: group.titleZh,
      items: group.items.map((phrase) => ({
        phrase,
        meaning: `${group.meaningPrefixZh}：${phrase}`,
      })),
    })),
    en: seed.groups.map((group) => ({
      title: group.titleEn,
      items: [...group.items],
    })),
  };
}

function buildTemporalComparison(
  entry: PrepositionEntryBase,
  seed: TemporalSeed,
): NonNullable<PrepositionEntryBase["comparison"]> {
  const [termAId, termBId] = seed.contrasts;
  const wordPhrase = seed.groups[0].items[0] ?? `${entry.word} in context`;
  const termAPhrase = getSeedPhrase(termAId);
  const termBPhrase = getSeedPhrase(termBId);
  const termAWord = getTermWord(termAId);
  const termBWord = getTermWord(termBId);
  return {
    i18n: {
      "zh-CN": {
        summary: `${entry.word} 在时间表达中更强调“${seed.focusZh}”，需要和相近介词区分语义边界。`,
        differences: [
          {
            term: termAWord,
            description: `${entry.word} 更强调“${seed.focusZh}”；${termAWord} 对应的是另一种时间关系。`,
            examples: [
              {
                term: termAWord,
                sentence: termAPhrase,
                translation: `示例表达：${termAPhrase}`,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
                translation: `示例表达：${wordPhrase}`,
              },
            ],
          },
          {
            term: termBWord,
            description: `${entry.word} 用于“${seed.focusZh}”；${termBWord} 的语义重点不同。`,
            examples: [
              {
                term: termBWord,
                sentence: termBPhrase,
                translation: `示例表达：${termBPhrase}`,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
                translation: `示例表达：${wordPhrase}`,
              },
            ],
          },
        ],
      },
      en: {
        summary: `${entry.word} in time usage mainly signals ${seed.focusEn}; compare it with close alternatives to avoid overlap.`,
        differences: [
          {
            term: termAWord,
            description: `${entry.word} focuses on ${seed.focusEn}, while ${termAWord} marks a different temporal relation.`,
            examples: [
              {
                term: termAWord,
                sentence: termAPhrase,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
              },
            ],
          },
          {
            term: termBWord,
            description: `${entry.word} is for ${seed.focusEn}; ${termBWord} usually serves another time function.`,
            examples: [
              {
                term: termBWord,
                sentence: termBPhrase,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
              },
            ],
          },
        ],
      },
    },
  };
}

function buildDynamicComparison(
  entry: PrepositionEntryBase,
  seed: TemporalSeed,
): NonNullable<PrepositionEntryBase["comparison"]> {
  const [termAId, termBId] = seed.contrasts;
  const wordPhrase = seed.groups[0].items[0] ?? `${entry.word} the route`;
  const termAPhrase = getDynamicSeedPhrase(termAId);
  const termBPhrase = getDynamicSeedPhrase(termBId);
  const termAWord = getTermWord(termAId);
  const termBWord = getTermWord(termBId);
  return {
    i18n: {
      "zh-CN": {
        summary: `${entry.word} 强调“${seed.focusZh}”，学习时要和近义动态介词区分路径关系。`,
        differences: [
          {
            term: termAWord,
            description: `${entry.word} 更强调“${seed.focusZh}”；${termAWord} 常表示不同路径关系。`,
            examples: [
              {
                term: termAWord,
                sentence: termAPhrase,
                translation: `示例表达：${termAPhrase}`,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
                translation: `示例表达：${wordPhrase}`,
              },
            ],
          },
          {
            term: termBWord,
            description: `${entry.word} 的重点是“${seed.focusZh}”；${termBWord} 的运动方向或终点不同。`,
            examples: [
              {
                term: termBWord,
                sentence: termBPhrase,
                translation: `示例表达：${termBPhrase}`,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
                translation: `示例表达：${wordPhrase}`,
              },
            ],
          },
        ],
      },
      en: {
        summary: `${entry.word} mainly shows ${seed.focusEn}; compare it with similar dynamic prepositions to avoid path confusion.`,
        differences: [
          {
            term: termAWord,
            description: `${entry.word} focuses on ${seed.focusEn}, while ${termAWord} usually marks a different path relation.`,
            examples: [
              {
                term: termAWord,
                sentence: termAPhrase,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
              },
            ],
          },
          {
            term: termBWord,
            description: `${entry.word} highlights ${seed.focusEn}; ${termBWord} often changes direction or endpoint meaning.`,
            examples: [
              {
                term: termBWord,
                sentence: termBPhrase,
              },
              {
                term: entry.word,
                sentence: wordPhrase,
              },
            ],
          },
        ],
      },
    },
  };
}

function buildTemporalMistakes(
  entry: PrepositionEntryBase,
  seed: TemporalSeed,
): Record<"zh-CN" | "en", PrepositionMistakeItem[]> {
  const [termAId, termBId] = seed.contrasts;
  const termAWord = getTermWord(termAId);
  const termBWord = getTermWord(termBId);
  const phraseA = seed.groups[0].items[0] ?? `${entry.word} in context`;
  const phraseB = seed.groups[0].items[1] ?? phraseA;
  const wrongA = replaceLeadingWord(phraseA, entry.word, termAWord);
  const wrongB = replaceLeadingWord(phraseB, entry.word, termBWord);
  return {
    "zh-CN": [
      {
        wrong: `We finish ${wrongA}.`,
        correct: `We finish ${phraseA}.`,
        reason: `表达“${seed.focusZh}”时优先用 ${entry.word}，而不是 ${termAWord}。`,
      },
      {
        wrong: `The class starts ${wrongB}.`,
        correct: `The class starts ${phraseB}.`,
        reason: `${entry.word} 的核心是“${seed.focusZh}”，${termBWord} 表达的时间关系不同。`,
      },
    ],
    en: [
      {
        wrong: `We finish ${wrongA}.`,
        correct: `We finish ${phraseA}.`,
        reason: `Use ${entry.word} when the meaning is ${seed.focusEn}; ${termAWord} signals a different relation.`,
      },
      {
        wrong: `The class starts ${wrongB}.`,
        correct: `The class starts ${phraseB}.`,
        reason: `${entry.word} focuses on ${seed.focusEn}; ${termBWord} is not the best fit here.`,
      },
    ],
  };
}

function buildDynamicMistakes(
  entry: PrepositionEntryBase,
  seed: TemporalSeed,
): Record<"zh-CN" | "en", PrepositionMistakeItem[]> {
  const [termAId, termBId] = seed.contrasts;
  const termAWord = getTermWord(termAId);
  const termBWord = getTermWord(termBId);
  const phraseA = seed.groups[0].items[0] ?? `${entry.word} the route`;
  const phraseB = seed.groups[0].items[1] ?? phraseA;
  const wrongA = replaceLeadingWord(phraseA, entry.word, termAWord);
  const wrongB = replaceLeadingWord(phraseB, entry.word, termBWord);
  return {
    "zh-CN": [
      {
        wrong: `The marker moved ${wrongA}.`,
        correct: `The marker moved ${phraseA}.`,
        reason: `这里要表达“${seed.focusZh}”，应用 ${entry.word}，而不是 ${termAWord}。`,
      },
      {
        wrong: `The ball rolled ${wrongB}.`,
        correct: `The ball rolled ${phraseB}.`,
        reason: `${entry.word} 更符合该路径关系；${termBWord} 会改变运动语义。`,
      },
    ],
    en: [
      {
        wrong: `The marker moved ${wrongA}.`,
        correct: `The marker moved ${phraseA}.`,
        reason: `Use ${entry.word} for ${seed.focusEn}; ${termAWord} changes the path relation.`,
      },
      {
        wrong: `The ball rolled ${wrongB}.`,
        correct: `The ball rolled ${phraseB}.`,
        reason: `${entry.word} matches the intended motion; ${termBWord} shifts direction or endpoint meaning.`,
      },
    ],
  };
}

function buildTemporalQuiz(
  entry: PrepositionEntryBase,
  seed: TemporalSeed,
): Record<"zh-CN" | "en", PrepositionQuizItem[]> {
  const [termAId, termBId] = seed.contrasts;
  const termAWord = getTermWord(termAId);
  const termBWord = getTermWord(termBId);
  const options = Array.from(new Set([entry.word, termAWord, termBWord]));
  const samples = [
    seed.groups[0].items[0] ?? `${entry.word} in context`,
    seed.groups[0].items[1] ?? `${entry.word} this period`,
    seed.groups[1].items[0] ?? `${entry.word} this stage`,
  ];
  return {
    "zh-CN": samples.map((phrase) => ({
      prompt: buildPromptFromPhrase(phrase, entry.word),
      options,
      answer: entry.word,
      explanation: `${entry.word} 在这里强调“${seed.focusZh}”，所以应选择 ${entry.word}。`,
    })),
    en: samples.map((phrase) => ({
      prompt: buildPromptFromPhrase(phrase, entry.word),
      options,
      answer: entry.word,
      explanation: `Choose ${entry.word} because this context needs ${seed.focusEn}.`,
    })),
  };
}

function buildDynamicQuiz(
  entry: PrepositionEntryBase,
  seed: TemporalSeed,
): Record<"zh-CN" | "en", PrepositionQuizItem[]> {
  const [termAId, termBId] = seed.contrasts;
  const termAWord = getTermWord(termAId);
  const termBWord = getTermWord(termBId);
  const options = Array.from(new Set([entry.word, termAWord, termBWord]));
  const samples = [
    seed.groups[0].items[0] ?? `${entry.word} the route`,
    seed.groups[0].items[1] ?? `${entry.word} the path`,
    seed.groups[1].items[0] ?? `${entry.word} the target`,
  ];
  return {
    "zh-CN": samples.map((phrase) => ({
      prompt: buildPromptFromPhrase(phrase, entry.word),
      options,
      answer: entry.word,
      explanation: `${entry.word} 在这里表达“${seed.focusZh}”，因此最准确。`,
    })),
    en: samples.map((phrase) => ({
      prompt: buildPromptFromPhrase(phrase, entry.word),
      options,
      answer: entry.word,
      explanation: `Choose ${entry.word} because this sentence needs ${seed.focusEn}.`,
    })),
  };
}

function getClosestTerms(entry: PrepositionEntryBase, limit = 2) {
  const scored = PREPOSITIONS_BASE.filter((candidate) => candidate.id !== entry.id)
    .map((candidate) => {
      const overlap = candidate.tags.filter((tag) => entry.tags.includes(tag)).length;
      const sameSense = candidate.sense === entry.sense ? 1 : 0;
      return {
        word: candidate.word,
        score: overlap * 10 + sameSense,
      };
    })
    .sort((left, right) => right.score - left.score);
  const unique: string[] = [];
  for (const candidate of scored) {
    if (!unique.includes(candidate.word)) {
      unique.push(candidate.word);
    }
    if (unique.length >= limit) break;
  }
  return unique;
}

function buildGenericPhrases(word: string) {
  const groupOneTargets = [
    "the room",
    "the table",
    "the box",
    "the wall",
    "the door",
    "the corner",
  ];
  const groupTwoTargets = [
    "the path",
    "the route",
    "the gate",
    "the bridge",
    "the center",
    "the line",
  ];
  const groupThreeTargets = [
    "the plan",
    "the process",
    "the result",
    "the idea",
    "the goal",
    "the problem",
  ];
  return {
    one: groupOneTargets.map((target) => `${word} ${target}`),
    two: groupTwoTargets.map((target) => `${word} ${target}`),
    three: groupThreeTargets.map((target) => `${word} ${target}`),
  };
}

function buildGenericCollocationGroups(
  entry: PrepositionEntryBase,
): Record<"zh-CN" | "en", PrepositionCollocationGroup[]> {
  const phrases = buildGenericPhrases(entry.word);
  return {
    "zh-CN": [
      {
        title: "空间场景类",
        items: phrases.one.map((phrase) => ({
          phrase,
          meaning: `练习搭配：${phrase}`,
        })),
      },
      {
        title: "路径位置类",
        items: phrases.two.map((phrase) => ({
          phrase,
          meaning: `练习搭配：${phrase}`,
        })),
      },
      {
        title: "抽象表达类",
        items: phrases.three.map((phrase) => ({
          phrase,
          meaning: `练习搭配：${phrase}`,
        })),
      },
    ],
    en: [
      { title: "Spatial contexts", items: phrases.one },
      { title: "Route positions", items: phrases.two },
      { title: "Abstract patterns", items: phrases.three },
    ],
  };
}

function buildGenericComparison(
  entry: PrepositionEntryBase,
): NonNullable<PrepositionEntryBase["comparison"]> {
  const terms = getClosestTerms(entry, 2);
  const termA = terms[0] ?? "in";
  const termB = terms[1] ?? "on";
  const entryPhrase = `${entry.word} the area`;
  const termAPhrase = `${termA} the area`;
  const termBPhrase = `${termB} the area`;
  return {
    i18n: {
      "zh-CN": {
        summary: `${entry.word} 的核心语义是“${entry.i18n["zh-CN"]?.meaning ?? entry.word}”，学习时要和近义介词对比。`,
        differences: [
          {
            term: termA,
            description: `${entry.word} 与 ${termA} 的空间关系焦点不同。`,
            examples: [
              {
                term: termA,
                sentence: termAPhrase,
                translation: `示例表达：${termAPhrase}`,
              },
              {
                term: entry.word,
                sentence: entryPhrase,
                translation: `示例表达：${entryPhrase}`,
              },
            ],
          },
          {
            term: termB,
            description: `${entry.word} 和 ${termB} 常被混淆，需要看接触、边界或方向。`,
            examples: [
              {
                term: termB,
                sentence: termBPhrase,
                translation: `示例表达：${termBPhrase}`,
              },
              {
                term: entry.word,
                sentence: entryPhrase,
                translation: `示例表达：${entryPhrase}`,
              },
            ],
          },
        ],
      },
      en: {
        summary: `${entry.word} focuses on "${entry.i18n.en?.meaning ?? entry.word}", so compare it with close alternatives for beginners.`,
        differences: [
          {
            term: termA,
            description: `${entry.word} and ${termA} emphasize different spatial relations.`,
            examples: [
              { term: termA, sentence: termAPhrase },
              { term: entry.word, sentence: entryPhrase },
            ],
          },
          {
            term: termB,
            description: `${entry.word} is often confused with ${termB}; check contact, boundary, or direction.`,
            examples: [
              { term: termB, sentence: termBPhrase },
              { term: entry.word, sentence: entryPhrase },
            ],
          },
        ],
      },
    },
  };
}

function buildGenericMistakes(
  entry: PrepositionEntryBase,
): Record<"zh-CN" | "en", PrepositionMistakeItem[]> {
  const [termA, termB] = getClosestTerms(entry, 2);
  const termOne = termA ?? "in";
  const termTwo = termB ?? "on";
  const correctA = `${entry.word} the box`;
  const correctB = `${entry.word} the table`;
  return {
    "zh-CN": [
      {
        wrong: `The ball is ${termOne} the box.`,
        correct: `The ball is ${correctA}.`,
        reason: `当前语义更符合 ${entry.word} 的用法，不是 ${termOne}。`,
      },
      {
        wrong: `The marker moved ${termTwo} the table.`,
        correct: `The marker moved ${correctB}.`,
        reason: `这里应保持 ${entry.word} 的关系表达，避免误换成 ${termTwo}。`,
      },
    ],
    en: [
      {
        wrong: `The ball is ${termOne} the box.`,
        correct: `The ball is ${correctA}.`,
        reason: `This context matches ${entry.word}, not ${termOne}.`,
      },
      {
        wrong: `The marker moved ${termTwo} the table.`,
        correct: `The marker moved ${correctB}.`,
        reason: `Keep ${entry.word} for this relation; ${termTwo} changes the meaning.`,
      },
    ],
  };
}

function buildGenericQuiz(
  entry: PrepositionEntryBase,
): Record<"zh-CN" | "en", PrepositionQuizItem[]> {
  const [termA, termB] = getClosestTerms(entry, 2);
  const options = Array.from(
    new Set([entry.word, termA ?? "in", termB ?? "on"]),
  );
  const prompts = [
    `___ the room`,
    `___ the path`,
    `___ the target area`,
  ];
  return {
    "zh-CN": prompts.map((prompt) => ({
      prompt: `Choose the correct preposition: ${prompt}.`,
      options,
      answer: entry.word,
      explanation: `本题的目标关系按该词页面规则应选择 ${entry.word}。`,
    })),
    en: prompts.map((prompt) => ({
      prompt: `Choose the correct preposition: ${prompt}.`,
      options,
      answer: entry.word,
      explanation: `Use ${entry.word} because it best matches this page's target relation.`,
    })),
  };
}

function enrichTemporalDetails(entry: PrepositionEntryBase): PrepositionEntryBase {
  if (!TEMPORAL_DETAIL_IDS.has(entry.id)) return entry;
  const seed = TEMPORAL_DETAIL_SEEDS[entry.id];
  const resolvedCollocationGroups =
    entry.collocationGroups ?? (seed ? buildTemporalCollocationGroups(seed) : undefined);
  const generatedExamplesByCategory = buildTemporalCategoryExamples(
    entry,
    resolvedCollocationGroups,
  );
  const mergedExamplesByCategory = {
    ...generatedExamplesByCategory,
    ...(entry.examplesByCategory ?? {}),
  };
  return {
    ...entry,
    comparison:
      entry.comparison ?? (seed ? buildTemporalComparison(entry, seed) : undefined),
    collocationGroups: resolvedCollocationGroups,
    commonMistakes:
      entry.commonMistakes ?? (seed ? buildTemporalMistakes(entry, seed) : undefined),
    quiz: entry.quiz ?? (seed ? buildTemporalQuiz(entry, seed) : undefined),
    examplesByCategory: mergedExamplesByCategory,
  };
}

function enrichDynamicDetails(entry: PrepositionEntryBase): PrepositionEntryBase {
  if (!DYNAMIC_DETAIL_IDS.has(entry.id)) return entry;
  const seed = DYNAMIC_DETAIL_SEEDS[entry.id];
  if (!seed) return entry;
  const resolvedCollocationGroups =
    entry.collocationGroups ?? buildDynamicCollocationGroups(seed);
  const generatedExamplesByCategory = buildDynamicCategoryExamples(
    entry,
    resolvedCollocationGroups,
  );
  const mergedExamplesByCategory = {
    ...generatedExamplesByCategory,
    ...(entry.examplesByCategory ?? {}),
  };
  return {
    ...entry,
    comparison: entry.comparison ?? buildDynamicComparison(entry, seed),
    collocationGroups: resolvedCollocationGroups,
    commonMistakes: entry.commonMistakes ?? buildDynamicMistakes(entry, seed),
    quiz: entry.quiz ?? buildDynamicQuiz(entry, seed),
    examplesByCategory: mergedExamplesByCategory,
  };
}

function enrichGenericDetails(entry: PrepositionEntryBase): PrepositionEntryBase {
  const resolvedCollocationGroups =
    entry.collocationGroups ?? buildGenericCollocationGroups(entry);
  return {
    ...entry,
    comparison: entry.comparison ?? buildGenericComparison(entry),
    collocationGroups: resolvedCollocationGroups,
    commonMistakes: entry.commonMistakes ?? buildGenericMistakes(entry),
    quiz: entry.quiz ?? buildGenericQuiz(entry),
  };
}

const PREPOSITIONS_DETAIL_READY = PREPOSITIONS_BASE.map(enrichTemporalDetails)
  .map(enrichDynamicDetails)
  .map(enrichGenericDetails);

const RELATED: Record<string, string[]> = {
  in: ["out-of", "into", "inside", "outside"],
  on: ["off", "onto", "on-top-of", "upon"],
  under: ["over", "below", "beneath", "underneath"],
  over: ["under", "above", "below", "on-top-of"],
  above: ["below", "over", "under", "beneath"],
  below: ["above", "under", "beneath", "underneath"],
  beside: ["next-to", "near", "by", "alongside"],
  "next-to": ["beside", "near", "close-to", "by"],
  near: ["close-to", "next-to", "beside", "far-from"],
  by: ["near", "beside", "next-to", "close-to"],
  behind: ["in-front-of", "in-back-of", "ahead-of", "opposite"],
  "in-front-of": ["behind", "ahead-of", "in-back-of", "opposite"],
  between: ["among", "in-the-middle-of", "around", "amid"],
  among: ["between", "around", "amid", "amidst"],
  around: ["between", "among", "in-the-middle-of", "throughout"],
  inside: ["outside", "in", "within", "out-of"],
  outside: ["inside", "within", "out-of", "in"],
  across: ["through", "past", "across-from", "opposite"],
  through: ["across", "into", "out-of", "past"],
  against: ["on", "beside", "next-to", "close-to"],
  along: ["alongside", "past", "toward", "across"],
  into: ["out-of", "in", "inside", "to"],
  onto: ["on", "off", "on-top-of", "into"],
  "out-of": ["into", "outside", "in", "from"],
  at: ["in", "on", "near", "by"],
  to: ["from", "toward", "into", "onto"],
  from: ["to", "out-of", "toward", "past"],
  up: ["down", "above", "over", "onto"],
  down: ["up", "below", "under", "off"],
  off: ["on", "onto", "down", "from"],
  beneath: ["above", "under", "below", "underneath"],
  underneath: ["under", "below", "beneath", "above"],
  within: ["without", "inside", "in", "outside"],
  without: ["within", "outside", "out-of", "in"],
  past: ["beyond", "across", "through", "toward"],
  toward: ["to", "from", "past", "across"],
  "across-from": ["opposite", "across", "near", "far-from"],
  opposite: ["across-from", "in-front-of", "across", "behind"],
  throughout: ["around", "among", "in-the-middle-of", "amid"],
  amid: ["among", "amidst", "in-the-middle-of", "between"],
  amidst: ["amid", "among", "in-the-middle-of", "around"],
  alongside: ["along", "beside", "next-to", "close-to"],
  beyond: ["past", "far-from", "across", "outside"],
  upon: ["on", "on-top-of", "onto", "over"],
  "on-top-of": ["on", "upon", "onto", "over"],
  "in-the-middle-of": ["between", "among", "around", "amid"],
  "in-back-of": ["behind", "in-front-of", "ahead-of", "opposite"],
  "ahead-of": ["in-front-of", "behind", "in-back-of", "opposite"],
  "close-to": ["near", "next-to", "beside", "by"],
  "far-from": ["near", "beyond", "across", "close-to"],
};

const FALLBACK_IDS = PREPOSITIONS_DETAIL_READY.map((entry) => entry.id);

function buildRelated(entryId: string) {
  const initial = RELATED[entryId] ?? [];
  const unique: string[] = [];
  initial.forEach((id) => {
    if (id !== entryId && !unique.includes(id)) {
      unique.push(id);
    }
  });
  for (const id of FALLBACK_IDS) {
    if (unique.length >= 4) break;
    if (id !== entryId && !unique.includes(id)) {
      unique.push(id);
    }
  }
  return unique.slice(0, 4);
}

export const PREPOSITIONS: PrepositionEntry[] = PREPOSITIONS_DETAIL_READY.map((entry) => ({
  ...entry,
  relatedIds: buildRelated(entry.id),
}));

const PREPOSITIONS_BY_ID = new Map(
  PREPOSITIONS.map((entry) => [entry.id, entry] as const),
);

export function getPrepositionById(id: string) {
  return PREPOSITIONS_BY_ID.get(id);
}

export function getPrepositionIndex(id: string) {
  return PREPOSITIONS.findIndex((entry) => entry.id === id);
}

export function getRelatedPrepositions(entryId: string, limit = 4) {
  const entry = getPrepositionById(entryId);
  if (!entry) return [];

  const safeLimit = Math.max(0, limit);
  const related: PrepositionEntry[] = [];
  const seen = new Set<string>();

  for (const relatedId of entry.relatedIds) {
    if (related.length >= safeLimit) break;
    if (seen.has(relatedId)) continue;
    const relatedEntry = getPrepositionById(relatedId);
    if (!relatedEntry || relatedEntry.id === entry.id) continue;
    seen.add(relatedEntry.id);
    related.push(relatedEntry);
  }

  return related;
}
