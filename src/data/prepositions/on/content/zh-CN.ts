import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……上面（接触表面）；（时间）用于星期/日期",
  "tips": [
    "接触表面 -> 用 on。",
    "星期/具体日期 -> 用 on（on Monday / on July 1）。",
    "不接触仅在上方 -> above/over；有“落到表面”的动作 -> onto。"
  ],
  "examples": [
    {
      "en": "The ball is on the box.",
      "i18n": {
        "zh-CN": {
          "translation": "球在盒子上面。"
        },
        "en": {
          "translation": "The ball is on the box."
        }
      }
    },
    {
      "en": "The book is on the table.",
      "i18n": {
        "zh-CN": {
          "translation": "书在桌子上。"
        },
        "en": {
          "translation": "The book is on the table."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The book is on the table.",
        "i18n": {
          "zh-CN": {
            "translation": "书在桌子上。"
          },
          "en": {
            "translation": "The book is on the table."
          }
        }
      },
      {
        "en": "A sticker is on the box.",
        "i18n": {
          "zh-CN": {
            "translation": "贴纸在盒子上。"
          },
          "en": {
            "translation": "A sticker is on the box."
          }
        }
      }
    ],
    "time": [
      {
        "en": "We have class on Monday.",
        "i18n": {
          "zh-CN": {
            "translation": "我们在星期一上课。"
          },
          "en": {
            "translation": "We have class on Monday."
          }
        }
      },
      {
        "en": "My birthday is on July 1.",
        "i18n": {
          "zh-CN": {
            "translation": "我的生日在 7 月 1 日。"
          },
          "en": {
            "translation": "My birthday is on July 1."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "on 的核心是“接触表面”；在时间表达中常用于星期与具体日期。常与 in/onto/over 混淆。",
    "differences": [
      {
        "term": "in",
        "description": "in 表示在内部；on 表示接触表面。",
        "examples": [
          {
            "term": "in",
            "sentence": "The keys are in the box.",
            "translation": "钥匙在盒子里。"
          },
          {
            "term": "on",
            "sentence": "The keys are on the box.",
            "translation": "钥匙在盒子上。"
          }
        ]
      },
      {
        "term": "onto",
        "description": "onto 表示移动到表面；on 表示已在表面上。",
        "examples": [
          {
            "term": "onto",
            "sentence": "He climbed onto the box.",
            "translation": "他爬到盒子上。"
          },
          {
            "term": "on",
            "sentence": "He is on the box.",
            "translation": "他在盒子上。"
          }
        ]
      },
      {
        "term": "over",
        "description": "over 在上方不一定接触；on 必须接触。",
        "examples": [
          {
            "term": "over",
            "sentence": "A lamp hangs over the table.",
            "translation": "灯悬挂在桌子上方。"
          },
          {
            "term": "on",
            "sentence": "A lamp is on the table.",
            "translation": "灯在桌子上。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "表面/接触类",
      "items": [
        {
          "phrase": "on the table",
          "meaning": "在桌子上"
        },
        {
          "phrase": "on the wall",
          "meaning": "在墙上"
        },
        {
          "phrase": "on the floor",
          "meaning": "在地板上"
        },
        {
          "phrase": "on the roof",
          "meaning": "在屋顶上"
        },
        {
          "phrase": "on the screen",
          "meaning": "在屏幕上"
        },
        {
          "phrase": "on the left",
          "meaning": "在左边"
        }
      ]
    },
    {
      "title": "时间类",
      "items": [
        {
          "phrase": "on Monday",
          "meaning": "在星期一"
        },
        {
          "phrase": "on Tuesday",
          "meaning": "在星期二"
        },
        {
          "phrase": "on July 1",
          "meaning": "在 7 月 1 日"
        },
        {
          "phrase": "on my birthday",
          "meaning": "在我生日那天"
        },
        {
          "phrase": "on the weekend",
          "meaning": "在周末"
        },
        {
          "phrase": "on Monday morning",
          "meaning": "在周一早上"
        }
      ]
    },
    {
      "title": "抽象/常用表达",
      "items": [
        {
          "phrase": "on time",
          "meaning": "准时"
        },
        {
          "phrase": "on schedule",
          "meaning": "按计划"
        },
        {
          "phrase": "on duty",
          "meaning": "值班/在岗"
        },
        {
          "phrase": "on sale",
          "meaning": "在打折"
        },
        {
          "phrase": "on the phone",
          "meaning": "在打电话/电话里"
        },
        {
          "phrase": "on the internet",
          "meaning": "在网上"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The book is in the table.",
      "correct": "The book is on the table.",
      "reason": "table 是表面，强调接触时用 on，不用 in。"
    },
    {
      "wrong": "I will see you in Monday.",
      "correct": "I will see you on Monday.",
      "reason": "具体到星期几一般用 on；in 多用于月份、年份或较长时间段。"
    },
    {
      "wrong": "I was born on 2010.",
      "correct": "I was born in 2010.",
      "reason": "年份通常用 in（in 2010），而不是 on。"
    },
    {
      "wrong": "I am on a taxi.",
      "correct": "I am in a taxi.",
      "reason": "taxi/car 这类封闭空间通常用 in；on 更常用于 bus/train/bike 这类“平台式”交通工具。"
    }
  ],
  "quiz": [
    {
      "prompt": "The picture is ___ the wall.",
      "options": [
        "on",
        "in",
        "under"
      ],
      "answer": "on",
      "explanation": "墙是表面，图片贴在表面上，用 on。"
    },
    {
      "prompt": "We have class ___ Monday.",
      "options": [
        "on",
        "in",
        "at"
      ],
      "answer": "on",
      "explanation": "星期几用 on：on Monday。"
    },
    {
      "prompt": "He climbed ___ the roof.",
      "options": [
        "on",
        "onto",
        "into"
      ],
      "answer": "onto",
      "explanation": "climbed 表示移动到表面上，用 onto；到达后才是 on。"
    }
  ],
  "faq": [
    {
      "question": "介词 on 的核心含义是什么？",
      "answer": "on 的核心是“接触表面”。物体与表面接触时用 on。时间表达里，on 也常用于星期与具体日期。例：on the table / on Monday。"
    },
    {
      "question": "on 和 in 怎么快速区分？",
      "answer": "先问“是否接触表面”。接触表面用 on；在容器/空间内部用 in。例：on the box（表面）vs in the box（内部）。"
    },
    {
      "question": "on 和 onto 有什么区别？",
      "answer": "on 描述位置（已经在表面上）；onto 描述动作（移动到表面上）。例：He climbed onto the roof. / He is on the roof."
    },
    {
      "question": "on 和 over/above 的区别是什么？",
      "answer": "on 必须接触；over/above 可以只在上方不接触。例：A lamp hangs over the table（悬挂）vs A lamp is on the table（放在桌上）。"
    },
    {
      "question": "on 在时间表达里怎么用？",
      "answer": "on 常用于星期与具体日期：on Monday, on July 1。时间点用 at（at 7:00），月份/年份/早中晚等时间段用 in（in July / in 2026 / in the morning）。"
    },
    {
      "question": "为什么是 on the bus，但 in the car？",
      "answer": "初学者可先用“平台感”记忆：bus/train/bike 更像站在平台上 -> on；car/taxi 更像封闭空间 -> in。实际用法也会随语境变化，但这是好用的入门规则。"
    },
    {
      "question": "初学者用 on 最常见的错误有哪些？",
      "answer": "最常见是把 on 用错到年份/月份（应 in 2010 / in July），或把 in 用错到星期/日期（应 on Monday / on July 1），以及把 taxi/car 误用成 on。"
    },
    {
      "question": "如何在 30 秒内记住 on？",
      "answer": "记两条：touching a surface -> on；days/dates -> on。然后复述一对对比：on the box（表面）/ in the box（内部）。"
    }
  ]
};

export default content;
