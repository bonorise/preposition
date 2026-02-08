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
    tags: ["space", "above", "movement"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……正上方/跨过（通常不接触）",
        tips: ["强调高度或跨越，不一定接触。", "over 有“跨过/覆盖”感觉，above 只表示位置。"],
      },
      en: {
        meaning: "above or moving across",
        tips: ["Not necessarily touching; can imply movement.", "Over suggests crossing; above is just position."],
      },
    },
    examples: [
      {
        en: "A bird flies over the box.",
        i18n: {
          "zh-CN": { translation: "鸟飞过盒子上方。" },
          en: { translation: "A bird flies over the box." },
        },
      },
      {
        en: "The bridge goes over the river.",
        i18n: {
          "zh-CN": { translation: "桥跨过河。" },
          en: { translation: "The bridge goes over the river." },
        },
      },
    ],
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
    tags: ["space", "above"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……上方（强调高度）",
        tips: ["只强调位置高，不强调跨越。", "above 不含经过或覆盖。"],
      },
      en: {
        meaning: "higher than; vertically above",
        tips: ["Focuses on height, not movement.", "No crossing or covering implied."],
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
        en: "The plane is above the clouds.",
        i18n: {
          "zh-CN": { translation: "飞机在云上方。" },
          en: { translation: "The plane is above the clouds." },
        },
      },
    ],
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
        meaning: "在……旁边（紧挨着）",
        tips: ["强调就在一侧，距离近。", "比 near 更贴近。"],
      },
      en: {
        meaning: "beside; right at the side",
        tips: ["Very close at the side.", "Closer than near."],
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
    scene: makeScene([1.05, 0, 0]),
  },
  {
    id: "next-to",
    word: "next to",
    tags: ["space", "side", "near"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "紧挨着……旁边",
        tips: ["强调紧邻。", "几乎是贴着的一侧。"],
      },
      en: {
        meaning: "next to; adjacent",
        tips: ["Directly adjacent.", "Implies very close proximity."],
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
    scene: makeScene([0.95, 0, 0]),
  },
  {
    id: "near",
    word: "near",
    tags: ["space", "distance"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……附近（不一定接触）",
        tips: ["强调距离近，但不是贴着。", "可有一定距离。"],
      },
      en: {
        meaning: "near; at a short distance",
        tips: ["Close, but not touching.", "Some distance is acceptable."],
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
    scene: makeScene([0.75, 0, 0]),
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
        meaning: "在……后面（从观察者视角）",
        tips: ["强调在视线的后方。", "与 in front of 相对。"],
      },
      en: {
        meaning: "behind; at the back",
        tips: ["Located at the back from the viewer.", "Opposite of in front of."],
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
        tips: ["通常是两个之间。", "多于两个通常用 among。"],
      },
      en: {
        meaning: "between; in the middle of two",
        tips: ["Usually between two things.", "Use among for three or more."],
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
        tips: ["与 inside 相对，在外部。", "outside 是位置，不是离开的动作。"],
      },
      en: {
        meaning: "outside; not within",
        tips: ["Opposite of inside.", "Outside is location, not movement."],
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
        meaning: "在……更远处/超过",
        tips: ["强调超出某个位置。", "比 past 更远。"],
      },
      en: {
        meaning: "beyond; farther than",
        tips: ["Farther than a point.", "Farther than past."],
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
  },
  {
    id: "upon",
    word: "upon",
    tags: ["space", "on", "formal"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……之上（较正式）",
        tips: ["意义接近 on。", "常用于书面或固定表达。"],
      },
      en: {
        meaning: "upon; on (formal)",
        tips: ["Similar to on.", "More formal or literary."],
      },
    },
    examples: [
      {
        en: "Snow fell upon the roof.",
        i18n: {
          "zh-CN": { translation: "雪落在屋顶上。" },
          en: { translation: "Snow fell upon the roof." },
        },
      },
      {
        en: "The letter lay upon the table.",
        i18n: {
          "zh-CN": { translation: "信放在桌上。" },
          en: { translation: "The letter lay upon the table." },
        },
      },
    ],
    scene: makeScene([0, 0.75, 0]),
  },
  {
    id: "on-top-of",
    word: "on top of",
    tags: ["space", "surface", "position"],
    sense: "space",
    i18n: {
      "zh-CN": {
        meaning: "在……顶部",
        tips: ["强调“在顶上”的位置。", "比 on 更强调顶部。"],
      },
      en: {
        meaning: "on top of; at the top surface",
        tips: ["Emphasizes the top area.", "Stronger than on."],
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
        en: "There is a hat on top of the shelf.",
        i18n: {
          "zh-CN": { translation: "架子顶上有顶帽子。" },
          en: { translation: "There is a hat on top of the shelf." },
        },
      },
    ],
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
        meaning: "靠近……（很近）",
        tips: ["强调距离很近。", "比 near 更近。"],
      },
      en: {
        meaning: "close to; very near",
        tips: ["Very near in distance.", "Closer than near."],
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
  "beyond",
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
  const source = `${word.toLowerCase()} `;
  if (phrase.toLowerCase().startsWith(source)) {
    const tail = phrase.slice(word.length).trim();
    return `Choose the correct preposition: ___ ${tail}.`;
  }
  return `Choose the best preposition in this context: ${phrase}.`;
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

export function getPrepositionById(id: string) {
  return PREPOSITIONS.find((entry) => entry.id === id);
}

export function getPrepositionIndex(id: string) {
  return PREPOSITIONS.findIndex((entry) => entry.id === id);
}
