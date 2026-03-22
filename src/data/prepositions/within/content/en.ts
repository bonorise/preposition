import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "within; inside boundaries",
  "tips": [
    "Inside a limit or boundary.",
    "More formal than in."
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
    "summary": "within in time usage mainly signals inside a time limit before it ends; compare it with close alternatives to avoid overlap.",
    "differences": [
      {
        "term": "in",
        "description": "within focuses on inside a time limit before it ends, while in marks a different temporal relation.",
        "examples": [
          {
            "term": "in",
            "sentence": "in in context"
          },
          {
            "term": "within",
            "sentence": "within an hour"
          }
        ]
      },
      {
        "term": "by",
        "description": "within is for inside a time limit before it ends; by usually serves another time function.",
        "examples": [
          {
            "term": "by",
            "sentence": "by Monday"
          },
          {
            "term": "within",
            "sentence": "within an hour"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Time limits",
      "items": [
        "within an hour",
        "within two days",
        "within a week",
        "within this month",
        "within minutes",
        "within one semester"
      ]
    },
    {
      "title": "Deadline windows",
      "items": [
        "within the deadline",
        "within working hours",
        "within the first quarter",
        "within the next year",
        "within the allowed time",
        "within the time limit"
      ]
    },
    {
      "title": "Constraint language",
      "items": [
        "within reason",
        "within reach",
        "within budget",
        "within the plan",
        "within scope",
        "within expectations"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish in an hour.",
      "correct": "We finish within an hour.",
      "reason": "Use within when the meaning is inside a time limit before it ends; in signals a different relation."
    },
    {
      "wrong": "The class starts by two days.",
      "correct": "The class starts within two days.",
      "reason": "within focuses on inside a time limit before it ends; by is not the best fit here."
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
      "explanation": "Choose within because this context needs inside a time limit before it ends."
    },
    {
      "prompt": "Choose the correct preposition: ___ two days.",
      "options": [
        "within",
        "in",
        "by"
      ],
      "answer": "within",
      "explanation": "Choose within because this context needs inside a time limit before it ends."
    },
    {
      "prompt": "Choose the correct preposition: ___ the deadline.",
      "options": [
        "within",
        "in",
        "by"
      ],
      "answer": "within",
      "explanation": "Choose within because this context needs inside a time limit before it ends."
    }
  ]
};

export default content;
