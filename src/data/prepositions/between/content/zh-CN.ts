import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……之间（两个物体）",
  "tips": [
    "between 强调“两端点之间”的关系（人/物/时间范围）。",
    "among 强调“在一群里”；但如果是清晰的端点/对应关系，三个及以上也可用 between。",
    "固定搭配：between A and B（不是 between A to B）。"
  ],
  "examples": [
    {
      "en": "The ball is between the boxes.",
      "i18n": {
        "zh-CN": {
          "translation": "球在两个盒子之间。"
        },
        "en": {
          "translation": "The ball is between the boxes."
        }
      }
    },
    {
      "en": "The cafe is between the bank and the bookstore.",
      "i18n": {
        "zh-CN": {
          "translation": "咖啡店在银行和书店之间。"
        },
        "en": {
          "translation": "The cafe is between the bank and the bookstore."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The ball is between the boxes.",
        "i18n": {
          "zh-CN": {
            "translation": "球在两个盒子之间。"
          },
          "en": {
            "translation": "The ball is between the boxes."
          }
        }
      },
      {
        "en": "The cafe is between the bank and the bookstore.",
        "i18n": {
          "zh-CN": {
            "translation": "咖啡店在银行和书店之间。"
          },
          "en": {
            "translation": "The cafe is between the bank and the bookstore."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Call me between 7 and 9 p.m.",
        "i18n": {
          "zh-CN": {
            "translation": "请在晚上 7 点到 9 点之间给我打电话。"
          },
          "en": {
            "translation": "Call me between 7 and 9 p.m."
          }
        }
      },
      {
        "en": "I grabbed a coffee between classes.",
        "i18n": {
          "zh-CN": {
            "translation": "我在两节课之间去买了杯咖啡。"
          },
          "en": {
            "translation": "I grabbed a coffee between classes."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "between 强调“两端点之间”的关系（空间/时间范围）；和 among/from/through 对比能更快避免混用。",
    "differences": [
      {
        "term": "among",
        "description": "among 表示“在一群里/群体之中”；between 表示“端点之间/两方之间”的关系。",
        "examples": [
          {
            "term": "among",
            "sentence": "He sat among his friends.",
            "translation": "他坐在朋友们中间（在一群人里）。"
          },
          {
            "term": "between",
            "sentence": "Keep this between you and me.",
            "translation": "这件事只在你我之间保密。"
          }
        ]
      },
      {
        "term": "from",
        "description": "between 表示有两个端点的范围；from 表示起点，常和 to/until 搭配说明终点。",
        "examples": [
          {
            "term": "between",
            "sentence": "I’m free between 2 and 3 p.m.",
            "translation": "我 2 点到 3 点之间有空。"
          },
          {
            "term": "from",
            "sentence": "I’m free from 2 to 3 p.m.",
            "translation": "我从 2 点到 3 点有空。"
          }
        ]
      },
      {
        "term": "through",
        "description": "between 表示被两个端点“夹住”的区间；through 强调从开始到结束“持续不断”。",
        "examples": [
          {
            "term": "between",
            "sentence": "The office is closed between 12 and 1 p.m.",
            "translation": "办公室在 12 点到 1 点之间关闭。"
          },
          {
            "term": "through",
            "sentence": "The office stayed open through the afternoon.",
            "translation": "办公室整个下午都保持开放。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "时间区间类",
      "items": [
        {
          "phrase": "between 2 and 3 p.m.",
          "meaning": "时间区间：between 2 and 3 p.m."
        },
        {
          "phrase": "between Monday and Friday",
          "meaning": "时间区间：between Monday and Friday"
        },
        {
          "phrase": "between June and August",
          "meaning": "时间区间：between June and August"
        },
        {
          "phrase": "between now and noon",
          "meaning": "时间区间：between now and noon"
        },
        {
          "phrase": "between 1990 and 2000",
          "meaning": "时间区间：between 1990 and 2000"
        },
        {
          "phrase": "between day and night",
          "meaning": "时间区间：between day and night"
        }
      ]
    },
    {
      "title": "任务窗口类",
      "items": [
        {
          "phrase": "between classes",
          "meaning": "任务窗口：between classes"
        },
        {
          "phrase": "between meetings",
          "meaning": "任务窗口：between meetings"
        },
        {
          "phrase": "between two deadlines",
          "meaning": "任务窗口：between two deadlines"
        },
        {
          "phrase": "between two shifts",
          "meaning": "任务窗口：between two shifts"
        },
        {
          "phrase": "between tasks",
          "meaning": "任务窗口：between tasks"
        },
        {
          "phrase": "between appointments",
          "meaning": "任务窗口：between appointments"
        }
      ]
    },
    {
      "title": "流程阶段类",
      "items": [
        {
          "phrase": "between semesters",
          "meaning": "流程阶段：between semesters"
        },
        {
          "phrase": "between projects",
          "meaning": "流程阶段：between projects"
        },
        {
          "phrase": "between start and finish",
          "meaning": "流程阶段：between start and finish"
        },
        {
          "phrase": "between lunch and dinner",
          "meaning": "流程阶段：between lunch and dinner"
        },
        {
          "phrase": "between first and second term",
          "meaning": "流程阶段：between first and second term"
        },
        {
          "phrase": "between then and now",
          "meaning": "流程阶段：between then and now"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "Call me between 7 to 9 p.m.",
      "correct": "Call me between 7 and 9 p.m.",
      "reason": "固定结构是 between A and B；不要用 between A to B。"
    },
    {
      "wrong": "Between you and I, this is hard.",
      "correct": "Between you and me, this is hard.",
      "reason": "介词后用宾格：between you and me（不是 between you and I）。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ 2 and 3 p.m.",
      "options": [
        "between",
        "from",
        "through"
      ],
      "answer": "between",
      "explanation": "between 在这里强调“两个端点之间的时间区间”，所以应选择 between。"
    },
    {
      "prompt": "Choose the correct preposition: ___ Monday and Friday.",
      "options": [
        "between",
        "from",
        "through"
      ],
      "answer": "between",
      "explanation": "between 在这里强调“两个端点之间的时间区间”，所以应选择 between。"
    },
    {
      "prompt": "Choose the correct preposition: ___ classes.",
      "options": [
        "between",
        "from",
        "through"
      ],
      "answer": "between",
      "explanation": "between 在这里强调“两个端点之间的时间区间”，所以应选择 between。"
    }
  ]
};

export default content;
