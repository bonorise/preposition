import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "ahead of; in front of",
  "tips": [
    "In front of or further forward.",
    "Opposite of behind."
  ],
  "examples": [
    {
      "en": "The car ahead of us turned left.",
      "i18n": {
        "zh-CN": {
          "translation": "前面的车左转了。"
        },
        "en": {
          "translation": "The car ahead of us turned left."
        }
      }
    },
    {
      "en": "A sign stands ahead of the bridge.",
      "i18n": {
        "zh-CN": {
          "translation": "桥前方有个标志牌。"
        },
        "en": {
          "translation": "A sign stands ahead of the bridge."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The car ahead of us turned left.",
        "i18n": {
          "zh-CN": {
            "translation": "前面的车左转了。"
          },
          "en": {
            "translation": "The car ahead of us turned left."
          }
        }
      },
      {
        "en": "A sign stands ahead of the bridge.",
        "i18n": {
          "zh-CN": {
            "translation": "桥前方有个标志牌。"
          },
          "en": {
            "translation": "A sign stands ahead of the bridge."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Practice this time expression: two weeks ahead of deadline.",
        "i18n": {
          "zh-CN": {
            "translation": "练习这个时间表达：two weeks ahead of deadline。"
          },
          "en": {
            "translation": "Practice this time expression: two weeks ahead of deadline."
          }
        }
      },
      {
        "en": "Another common pattern is: days ahead of plan.",
        "i18n": {
          "zh-CN": {
            "translation": "另一个常见表达是：days ahead of plan。"
          },
          "en": {
            "translation": "Another common pattern is: days ahead of plan."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "ahead of in time usage mainly signals earlier than a schedule or expected time; compare it with close alternatives to avoid overlap.",
    "differences": [
      {
        "term": "behind",
        "description": "ahead of focuses on earlier than a schedule or expected time, while behind marks a different temporal relation.",
        "examples": [
          {
            "term": "behind",
            "sentence": "behind schedule"
          },
          {
            "term": "ahead of",
            "sentence": "ahead of schedule"
          }
        ]
      },
      {
        "term": "by",
        "description": "ahead of is for earlier than a schedule or expected time; by usually serves another time function.",
        "examples": [
          {
            "term": "by",
            "sentence": "by Monday"
          },
          {
            "term": "ahead of",
            "sentence": "ahead of schedule"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Ahead status",
      "items": [
        "ahead of schedule",
        "ahead of time",
        "ahead of the deadline",
        "ahead of launch",
        "ahead of the meeting",
        "ahead of exams"
      ]
    },
    {
      "title": "Lead amount",
      "items": [
        "two weeks ahead of deadline",
        "days ahead of plan",
        "months ahead of release",
        "hours ahead of others",
        "ahead of target",
        "ahead of the curve"
      ]
    },
    {
      "title": "Preparation actions",
      "items": [
        "plan ahead of time",
        "book ahead of time",
        "arrive ahead of schedule",
        "finish ahead of deadline",
        "submit ahead of due date",
        "start ahead of class"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish behind schedule.",
      "correct": "We finish ahead of schedule.",
      "reason": "Use ahead of when the meaning is earlier than a schedule or expected time; behind signals a different relation."
    },
    {
      "wrong": "The class starts by time.",
      "correct": "The class starts ahead of time.",
      "reason": "ahead of focuses on earlier than a schedule or expected time; by is not the best fit here."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ schedule.",
      "options": [
        "ahead of",
        "behind",
        "by"
      ],
      "answer": "ahead of",
      "explanation": "Choose ahead of because this context needs earlier than a schedule or expected time."
    },
    {
      "prompt": "Choose the correct preposition: ___ time.",
      "options": [
        "ahead of",
        "behind",
        "by"
      ],
      "answer": "ahead of",
      "explanation": "Choose ahead of because this context needs earlier than a schedule or expected time."
    },
    {
      "prompt": "Choose the best preposition in this context: two weeks ahead of deadline.",
      "options": [
        "ahead of",
        "behind",
        "by"
      ],
      "answer": "ahead of",
      "explanation": "Choose ahead of because this context needs earlier than a schedule or expected time."
    }
  ]
};

export default content;
