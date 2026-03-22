import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……旁边",
  "tips": [
    "口语常用，含义接近 near/beside。",
    "可表示紧靠在一旁。"
  ],
  "examples": [
    {
      "en": "Stand by the door.",
      "i18n": {
        "zh-CN": {
          "translation": "站在门旁边。"
        },
        "en": {
          "translation": "Stand by the door."
        }
      }
    },
    {
      "en": "The lamp is by the bed.",
      "i18n": {
        "zh-CN": {
          "translation": "灯在床边。"
        },
        "en": {
          "translation": "The lamp is by the bed."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Stand by the door.",
        "i18n": {
          "zh-CN": {
            "translation": "站在门旁边。"
          },
          "en": {
            "translation": "Stand by the door."
          }
        }
      },
      {
        "en": "The lamp is by the bed.",
        "i18n": {
          "zh-CN": {
            "translation": "灯在床边。"
          },
          "en": {
            "translation": "The lamp is by the bed."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Practice this time expression: by then.",
        "i18n": {
          "zh-CN": {
            "translation": "练习这个时间表达：by then。"
          },
          "en": {
            "translation": "Practice this time expression: by then."
          }
        }
      },
      {
        "en": "Another common pattern is: by now.",
        "i18n": {
          "zh-CN": {
            "translation": "另一个常见表达是：by now。"
          },
          "en": {
            "translation": "Another common pattern is: by now."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "by 在时间表达中更强调“不晚于某时间点”，需要和相近介词区分语义边界。",
    "differences": [
      {
        "term": "at",
        "description": "by 更强调“不晚于某时间点”；at 对应的是另一种时间关系。",
        "examples": [
          {
            "term": "at",
            "sentence": "at 7:00",
            "translation": "示例表达：at 7:00"
          },
          {
            "term": "by",
            "sentence": "by Monday",
            "translation": "示例表达：by Monday"
          }
        ]
      },
      {
        "term": "on",
        "description": "by 用于“不晚于某时间点”；on 的语义重点不同。",
        "examples": [
          {
            "term": "on",
            "sentence": "on Monday",
            "translation": "示例表达：on Monday"
          },
          {
            "term": "by",
            "sentence": "by Monday",
            "translation": "示例表达：by Monday"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "截止时间类",
      "items": [
        {
          "phrase": "by Monday",
          "meaning": "截止时间：by Monday"
        },
        {
          "phrase": "by noon",
          "meaning": "截止时间：by noon"
        },
        {
          "phrase": "by tomorrow",
          "meaning": "截止时间：by tomorrow"
        },
        {
          "phrase": "by next week",
          "meaning": "截止时间：by next week"
        },
        {
          "phrase": "by 5 p.m.",
          "meaning": "截止时间：by 5 p.m."
        },
        {
          "phrase": "by the end of the month",
          "meaning": "截止时间：by the end of the month"
        }
      ]
    },
    {
      "title": "里程碑类",
      "items": [
        {
          "phrase": "by then",
          "meaning": "阶段节点：by then"
        },
        {
          "phrase": "by now",
          "meaning": "阶段节点：by now"
        },
        {
          "phrase": "by age 18",
          "meaning": "阶段节点：by age 18"
        },
        {
          "phrase": "by this point",
          "meaning": "阶段节点：by this point"
        },
        {
          "phrase": "by the deadline",
          "meaning": "阶段节点：by the deadline"
        },
        {
          "phrase": "by the second week",
          "meaning": "阶段节点：by the second week"
        }
      ]
    },
    {
      "title": "日内进度类",
      "items": [
        {
          "phrase": "by early morning",
          "meaning": "日内进度：by early morning"
        },
        {
          "phrase": "by late afternoon",
          "meaning": "日内进度：by late afternoon"
        },
        {
          "phrase": "by night",
          "meaning": "日内进度：by night"
        },
        {
          "phrase": "by the end of class",
          "meaning": "日内进度：by the end of class"
        },
        {
          "phrase": "by break time",
          "meaning": "日内进度：by break time"
        },
        {
          "phrase": "by dinner time",
          "meaning": "日内进度：by dinner time"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish at Monday.",
      "correct": "We finish by Monday.",
      "reason": "表达“不晚于某时间点”时优先用 by，而不是 at。"
    },
    {
      "wrong": "The class starts on noon.",
      "correct": "The class starts by noon.",
      "reason": "by 的核心是“不晚于某时间点”，on 表达的时间关系不同。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ Monday.",
      "options": [
        "by",
        "at",
        "on"
      ],
      "answer": "by",
      "explanation": "by 在这里强调“不晚于某时间点”，所以应选择 by。"
    },
    {
      "prompt": "Choose the correct preposition: ___ noon.",
      "options": [
        "by",
        "at",
        "on"
      ],
      "answer": "by",
      "explanation": "by 在这里强调“不晚于某时间点”，所以应选择 by。"
    },
    {
      "prompt": "Choose the correct preposition: ___ then.",
      "options": [
        "by",
        "at",
        "on"
      ],
      "answer": "by",
      "explanation": "by 在这里强调“不晚于某时间点”，所以应选择 by。"
    }
  ]
};

export default content;
