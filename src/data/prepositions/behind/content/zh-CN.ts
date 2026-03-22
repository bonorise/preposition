import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……后面（后方）",
  "tips": [
    "空间：在参照物的后方（与 in front of 相对）。",
    "进度：落后于计划或他人（behind schedule / behind in math / behind on rent）。",
    "搭配：behind + 名词；behind in + 学习/比赛进度；behind on + 任务/付款。"
  ],
  "examples": [
    {
      "en": "The ball is behind the box.",
      "i18n": {
        "zh-CN": {
          "translation": "球在盒子后面。"
        },
        "en": {
          "translation": "The ball is behind the box."
        }
      }
    },
    {
      "en": "The car is behind the bus.",
      "i18n": {
        "zh-CN": {
          "translation": "汽车在公交车后面。"
        },
        "en": {
          "translation": "The car is behind the bus."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The cat is behind the sofa.",
        "i18n": {
          "zh-CN": {
            "translation": "猫在沙发后面。"
          },
          "en": {
            "translation": "The cat is behind the sofa."
          }
        }
      },
      {
        "en": "Stand behind the line.",
        "i18n": {
          "zh-CN": {
            "translation": "站到线后面。"
          },
          "en": {
            "translation": "Stand behind the line."
          }
        }
      }
    ],
    "time": [
      {
        "en": "We're behind schedule.",
        "i18n": {
          "zh-CN": {
            "translation": "我们进度落后了。"
          },
          "en": {
            "translation": "We're behind schedule."
          }
        }
      },
      {
        "en": "I'm behind in math this semester.",
        "i18n": {
          "zh-CN": {
            "translation": "这学期我的数学进度落后了。"
          },
          "en": {
            "translation": "I'm behind in math this semester."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "behind 的核心是“在后方”。它还常引申表示“进度落后”（behind schedule / behind in/on）。若表达纯时间顺序“更晚”，通常用 after，而不是 behind。",
    "differences": [
      {
        "term": "in front of",
        "description": "in front of 是“在前面”；behind 是“在后面”。两者是最直接的一对反义空间关系。",
        "examples": [
          {
            "term": "in front of",
            "sentence": "The ball is in front of the box.",
            "translation": "球在盒子前面。"
          },
          {
            "term": "behind",
            "sentence": "The ball is behind the box.",
            "translation": "球在盒子后面。"
          }
        ]
      },
      {
        "term": "ahead of",
        "description": "ahead of 常表示“领先/提前”；behind 表示“落后/拖后”。在进度表达里它们很常成对出现。",
        "examples": [
          {
            "term": "ahead of",
            "sentence": "We're ahead of schedule.",
            "translation": "我们进度提前了。"
          },
          {
            "term": "behind",
            "sentence": "We're behind schedule.",
            "translation": "我们进度落后了。"
          }
        ]
      },
      {
        "term": "in back of",
        "description": "in back of 是较口语的美式表达，含义接近 behind；behind 更通用也更常见。",
        "examples": [
          {
            "term": "behind",
            "sentence": "The garage is behind the house.",
            "translation": "车库在房子后面。"
          },
          {
            "term": "in back of",
            "sentence": "The garage is in back of the house.",
            "translation": "车库在房子后面（口语/美式）。"
          }
        ]
      },
      {
        "term": "after",
        "description": "after 表示时间顺序“在……之后”；behind 更像“进度落后”，不等于“时间点更晚”。",
        "examples": [
          {
            "term": "after",
            "sentence": "The meeting is after 3 p.m.",
            "translation": "会议在下午三点之后。"
          },
          {
            "term": "behind",
            "sentence": "We're behind schedule.",
            "translation": "我们进度落后了。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "真实空间类",
      "items": [
        {
          "phrase": "behind the box",
          "meaning": "在盒子后面"
        },
        {
          "phrase": "behind the door",
          "meaning": "在门后面"
        },
        {
          "phrase": "behind the car",
          "meaning": "在车后面"
        },
        {
          "phrase": "behind the tree",
          "meaning": "在树后面"
        },
        {
          "phrase": "behind the curtain",
          "meaning": "在帘子后面"
        },
        {
          "phrase": "behind the building",
          "meaning": "在楼后面"
        }
      ]
    },
    {
      "title": "进度落后类",
      "items": [
        {
          "phrase": "behind schedule",
          "meaning": "进度落后"
        },
        {
          "phrase": "behind in math",
          "meaning": "数学进度落后"
        },
        {
          "phrase": "behind on rent",
          "meaning": "房租拖欠"
        },
        {
          "phrase": "behind on payments",
          "meaning": "付款/还款拖欠"
        },
        {
          "phrase": "behind on homework",
          "meaning": "作业没跟上"
        },
        {
          "phrase": "two weeks behind",
          "meaning": "落后两周"
        }
      ]
    },
    {
      "title": "高频固定表达类",
      "items": [
        {
          "phrase": "behind the scenes",
          "meaning": "在幕后；暗中"
        },
        {
          "phrase": "behind bars",
          "meaning": "在监狱里"
        },
        {
          "phrase": "behind closed doors",
          "meaning": "私下；不公开"
        },
        {
          "phrase": "behind your back",
          "meaning": "背着你；在你背后"
        },
        {
          "phrase": "behind the wheel",
          "meaning": "开车；在方向盘后"
        },
        {
          "phrase": "behind the times",
          "meaning": "落伍；跟不上时代"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The bag is behind of the chair.",
      "correct": "The bag is behind the chair.",
      "reason": "behind 后面不需要 of，直接 behind + 名词。"
    },
    {
      "wrong": "The meeting is behind 3 p.m.",
      "correct": "The meeting is after 3 p.m.",
      "reason": "表达时间顺序“在……之后”用 after，不用 behind。"
    },
    {
      "wrong": "I'm behind on math this week.",
      "correct": "I'm behind in math this week.",
      "reason": "学科/学习进度常用 behind in；任务/账单更常用 behind on。"
    }
  ],
  "quiz": [
    {
      "prompt": "选择正确介词：The cat is ___ the sofa.",
      "options": [
        "behind",
        "in front of",
        "under"
      ],
      "answer": "behind",
      "explanation": "在沙发后方的位置关系，用 behind。"
    },
    {
      "prompt": "选择正确介词：We're ___ schedule, so we need to speed up.",
      "options": [
        "behind",
        "over",
        "between"
      ],
      "answer": "behind",
      "explanation": "进度落后常用 behind schedule。"
    },
    {
      "prompt": "选择更自然的表达：The meeting is ___ 3 p.m.",
      "options": [
        "after",
        "behind",
        "by"
      ],
      "answer": "after",
      "explanation": "时间顺序“在……之后”用 after；behind 不表示具体时间点顺序。"
    }
  ],
  "faq": [
    {
      "question": "behind 的核心含义是什么？",
      "answer": "behind 的核心是“在后方”。空间上表示在某物后面；引申义常表示“进度落后”，如 behind schedule。"
    },
    {
      "question": "什么时候用 behind？",
      "answer": "当你要表达“在后面/后方”或“进度落后于计划”时用 behind。例：The car is behind the bus / We're behind schedule。"
    },
    {
      "question": "behind 和 in front of 有什么区别？",
      "answer": "它们是空间反义：in front of 在前面；behind 在后面。例：The ball is in front of the box vs behind the box。"
    },
    {
      "question": "behind 和 ahead of 有什么区别？",
      "answer": "在进度语境中，ahead of 表示领先/提前；behind 表示落后/拖后。例：ahead of schedule vs behind schedule。"
    },
    {
      "question": "behind 和 after 能互换吗？",
      "answer": "通常不能。after 表示时间顺序“在……之后”；behind 表示位置或进度落后。表达时间点顺序用 after。"
    },
    {
      "question": "behind in 和 behind on 怎么区分？",
      "answer": "behind in 常接学科/技能/进度（behind in math/reading）；behind on 常接任务/账单（behind on homework/rent/payments）。"
    },
    {
      "question": "初学者最常见错误是什么？",
      "answer": "最常见是误加 of（behind of ❌），正确是 behind + 名词。另一个常见是把 behind 当作时间顺序词（应 after）。"
    },
    {
      "question": "30 秒记住 behind 的方法？",
      "answer": "记两个锚点：空间画面“在后方”（behind the box）+ 进度表达“落后计划”（behind schedule）。遇到时间顺序就改用 after。"
    }
  ]
};

export default content;
