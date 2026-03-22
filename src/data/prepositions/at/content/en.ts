import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "at; a specific point or place",
  "tips": [
    "Focuses on a point, not inside or on a surface.",
    "Used for exact locations."
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
    "summary": "at in time usage mainly signals precise points in time; compare it with close alternatives to avoid overlap.",
    "differences": [
      {
        "term": "on",
        "description": "at focuses on precise points in time, while on marks a different temporal relation.",
        "examples": [
          {
            "term": "on",
            "sentence": "on Monday"
          },
          {
            "term": "at",
            "sentence": "at 7:00"
          }
        ]
      },
      {
        "term": "in",
        "description": "at is for precise points in time; in usually serves another time function.",
        "examples": [
          {
            "term": "in",
            "sentence": "in in context"
          },
          {
            "term": "at",
            "sentence": "at 7:00"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Exact points",
      "items": [
        "at 7:00",
        "at noon",
        "at midnight",
        "at sunrise",
        "at lunchtime",
        "at the moment"
      ]
    },
    {
      "title": "Event timing",
      "items": [
        "at the beginning",
        "at the end of the day",
        "at that time",
        "at first",
        "at last",
        "at the same time"
      ]
    },
    {
      "title": "Schedule moments",
      "items": [
        "at short notice",
        "at peak time",
        "at break time",
        "at opening time",
        "at closing time",
        "at bedtime"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish on 7:00.",
      "correct": "We finish at 7:00.",
      "reason": "Use at when the meaning is precise points in time; on signals a different relation."
    },
    {
      "wrong": "The class starts in noon.",
      "correct": "The class starts at noon.",
      "reason": "at focuses on precise points in time; in is not the best fit here."
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
      "explanation": "Choose at because this context needs precise points in time."
    },
    {
      "prompt": "Choose the correct preposition: ___ noon.",
      "options": [
        "at",
        "on",
        "in"
      ],
      "answer": "at",
      "explanation": "Choose at because this context needs precise points in time."
    },
    {
      "prompt": "Choose the correct preposition: ___ the beginning.",
      "options": [
        "at",
        "on",
        "in"
      ],
      "answer": "at",
      "explanation": "Choose at because this context needs precise points in time."
    }
  ]
};

export default content;
