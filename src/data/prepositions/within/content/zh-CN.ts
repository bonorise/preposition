import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……之内（强调范围）",
  "tips": [
    "强调在某个范围/边界之内。",
    "比 in 更正式。"
  ],
  "examples": [
    {
      "en": "Stay within the lines.",
      "i18n": {
        "zh-CN": {
          "translation": "保持在边线内。"
        },
        "en": {
          "translation": "Stay within the lines."
        }
      }
    },
    {
      "en": "The shop is within the city walls.",
      "i18n": {
        "zh-CN": {
          "translation": "商店在城墙之内。"
        },
        "en": {
          "translation": "The shop is within the city walls."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Stay within the lines.",
        "i18n": {
          "zh-CN": {
            "translation": "保持在边线内。"
          },
          "en": {
            "translation": "Stay within the lines."
          }
        }
      },
      {
        "en": "The shop is within the city walls.",
        "i18n": {
          "zh-CN": {
            "translation": "商店在城墙之内。"
          },
          "en": {
            "translation": "The shop is within the city walls."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Practice this time expression: within the deadline.",
        "i18n": {
          "zh-CN": {
            "translation": "练习这个时间表达：within the deadline。"
          },
          "en": {
            "translation": "Practice this time expression: within the deadline."
          }
        }
      },
      {
        "en": "Another common pattern is: within working hours.",
        "i18n": {
          "zh-CN": {
            "translation": "另一个常见表达是：within working hours。"
          },
          "en": {
            "translation": "Another common pattern is: within working hours."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "within 在时间表达中更强调“在时限结束前”，需要和相近介词区分语义边界。",
    "differences": [
      {
        "term": "in",
        "description": "within 更强调“在时限结束前”；in 对应的是另一种时间关系。",
        "examples": [
          {
            "term": "in",
            "sentence": "in in context",
            "translation": "示例表达：in in context"
          },
          {
            "term": "within",
            "sentence": "within an hour",
            "translation": "示例表达：within an hour"
          }
        ]
      },
      {
        "term": "by",
        "description": "within 用于“在时限结束前”；by 的语义重点不同。",
        "examples": [
          {
            "term": "by",
            "sentence": "by Monday",
            "translation": "示例表达：by Monday"
          },
          {
            "term": "within",
            "sentence": "within an hour",
            "translation": "示例表达：within an hour"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "时限表达类",
      "items": [
        {
          "phrase": "within an hour",
          "meaning": "时限表达：within an hour"
        },
        {
          "phrase": "within two days",
          "meaning": "时限表达：within two days"
        },
        {
          "phrase": "within a week",
          "meaning": "时限表达：within a week"
        },
        {
          "phrase": "within this month",
          "meaning": "时限表达：within this month"
        },
        {
          "phrase": "within minutes",
          "meaning": "时限表达：within minutes"
        },
        {
          "phrase": "within one semester",
          "meaning": "时限表达：within one semester"
        }
      ]
    },
    {
      "title": "截止窗口类",
      "items": [
        {
          "phrase": "within the deadline",
          "meaning": "截止窗口：within the deadline"
        },
        {
          "phrase": "within working hours",
          "meaning": "截止窗口：within working hours"
        },
        {
          "phrase": "within the first quarter",
          "meaning": "截止窗口：within the first quarter"
        },
        {
          "phrase": "within the next year",
          "meaning": "截止窗口：within the next year"
        },
        {
          "phrase": "within the allowed time",
          "meaning": "截止窗口：within the allowed time"
        },
        {
          "phrase": "within the time limit",
          "meaning": "截止窗口：within the time limit"
        }
      ]
    },
    {
      "title": "约束表达类",
      "items": [
        {
          "phrase": "within reason",
          "meaning": "约束表达：within reason"
        },
        {
          "phrase": "within reach",
          "meaning": "约束表达：within reach"
        },
        {
          "phrase": "within budget",
          "meaning": "约束表达：within budget"
        },
        {
          "phrase": "within the plan",
          "meaning": "约束表达：within the plan"
        },
        {
          "phrase": "within scope",
          "meaning": "约束表达：within scope"
        },
        {
          "phrase": "within expectations",
          "meaning": "约束表达：within expectations"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish in an hour.",
      "correct": "We finish within an hour.",
      "reason": "表达“在时限结束前”时优先用 within，而不是 in。"
    },
    {
      "wrong": "The class starts by two days.",
      "correct": "The class starts within two days.",
      "reason": "within 的核心是“在时限结束前”，by 表达的时间关系不同。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ an hour.",
      "options": [
        "within",
        "in",
        "by"
      ],
      "answer": "within",
      "explanation": "within 在这里强调“在时限结束前”，所以应选择 within。"
    },
    {
      "prompt": "Choose the correct preposition: ___ two days.",
      "options": [
        "within",
        "in",
        "by"
      ],
      "answer": "within",
      "explanation": "within 在这里强调“在时限结束前”，所以应选择 within。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the deadline.",
      "options": [
        "within",
        "in",
        "by"
      ],
      "answer": "within",
      "explanation": "within 在这里强调“在时限结束前”，所以应选择 within。"
    }
  ]
};

export default content;
