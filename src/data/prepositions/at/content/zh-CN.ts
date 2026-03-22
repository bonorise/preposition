import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……（具体点/位置）",
  "tips": [
    "强调“点位”，不强调内部或表面。",
    "常用于地点或具体位置。"
  ],
  "examples": [
    {
      "en": "He is at the door.",
      "i18n": {
        "zh-CN": {
          "translation": "他在门口。"
        },
        "en": {
          "translation": "He is at the door."
        }
      }
    },
    {
      "en": "Meet me at the corner.",
      "i18n": {
        "zh-CN": {
          "translation": "在拐角处见我。"
        },
        "en": {
          "translation": "Meet me at the corner."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "He is at the door.",
        "i18n": {
          "zh-CN": {
            "translation": "他在门口。"
          },
          "en": {
            "translation": "He is at the door."
          }
        }
      },
      {
        "en": "Meet me at the corner.",
        "i18n": {
          "zh-CN": {
            "translation": "在拐角处见我。"
          },
          "en": {
            "translation": "Meet me at the corner."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Practice this time expression: at the beginning.",
        "i18n": {
          "zh-CN": {
            "translation": "练习这个时间表达：at the beginning。"
          },
          "en": {
            "translation": "Practice this time expression: at the beginning."
          }
        }
      },
      {
        "en": "Another common pattern is: at the end of the day.",
        "i18n": {
          "zh-CN": {
            "translation": "另一个常见表达是：at the end of the day。"
          },
          "en": {
            "translation": "Another common pattern is: at the end of the day."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "at 在时间表达中更强调“精确时间点”，需要和相近介词区分语义边界。",
    "differences": [
      {
        "term": "on",
        "description": "at 更强调“精确时间点”；on 对应的是另一种时间关系。",
        "examples": [
          {
            "term": "on",
            "sentence": "on Monday",
            "translation": "示例表达：on Monday"
          },
          {
            "term": "at",
            "sentence": "at 7:00",
            "translation": "示例表达：at 7:00"
          }
        ]
      },
      {
        "term": "in",
        "description": "at 用于“精确时间点”；in 的语义重点不同。",
        "examples": [
          {
            "term": "in",
            "sentence": "in in context",
            "translation": "示例表达：in in context"
          },
          {
            "term": "at",
            "sentence": "at 7:00",
            "translation": "示例表达：at 7:00"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "精确时点类",
      "items": [
        {
          "phrase": "at 7:00",
          "meaning": "精确时点：at 7:00"
        },
        {
          "phrase": "at noon",
          "meaning": "精确时点：at noon"
        },
        {
          "phrase": "at midnight",
          "meaning": "精确时点：at midnight"
        },
        {
          "phrase": "at sunrise",
          "meaning": "精确时点：at sunrise"
        },
        {
          "phrase": "at lunchtime",
          "meaning": "精确时点：at lunchtime"
        },
        {
          "phrase": "at the moment",
          "meaning": "精确时点：at the moment"
        }
      ]
    },
    {
      "title": "事件节点类",
      "items": [
        {
          "phrase": "at the beginning",
          "meaning": "事件节点：at the beginning"
        },
        {
          "phrase": "at the end of the day",
          "meaning": "事件节点：at the end of the day"
        },
        {
          "phrase": "at that time",
          "meaning": "事件节点：at that time"
        },
        {
          "phrase": "at first",
          "meaning": "事件节点：at first"
        },
        {
          "phrase": "at last",
          "meaning": "事件节点：at last"
        },
        {
          "phrase": "at the same time",
          "meaning": "事件节点：at the same time"
        }
      ]
    },
    {
      "title": "日程时刻类",
      "items": [
        {
          "phrase": "at short notice",
          "meaning": "日程时刻：at short notice"
        },
        {
          "phrase": "at peak time",
          "meaning": "日程时刻：at peak time"
        },
        {
          "phrase": "at break time",
          "meaning": "日程时刻：at break time"
        },
        {
          "phrase": "at opening time",
          "meaning": "日程时刻：at opening time"
        },
        {
          "phrase": "at closing time",
          "meaning": "日程时刻：at closing time"
        },
        {
          "phrase": "at bedtime",
          "meaning": "日程时刻：at bedtime"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish on 7:00.",
      "correct": "We finish at 7:00.",
      "reason": "表达“精确时间点”时优先用 at，而不是 on。"
    },
    {
      "wrong": "The class starts in noon.",
      "correct": "The class starts at noon.",
      "reason": "at 的核心是“精确时间点”，in 表达的时间关系不同。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ 7:00.",
      "options": [
        "at",
        "on",
        "in"
      ],
      "answer": "at",
      "explanation": "at 在这里强调“精确时间点”，所以应选择 at。"
    },
    {
      "prompt": "Choose the correct preposition: ___ noon.",
      "options": [
        "at",
        "on",
        "in"
      ],
      "answer": "at",
      "explanation": "at 在这里强调“精确时间点”，所以应选择 at。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the beginning.",
      "options": [
        "at",
        "on",
        "in"
      ],
      "answer": "at",
      "explanation": "at 在这里强调“精确时间点”，所以应选择 at。"
    }
  ]
};

export default content;
