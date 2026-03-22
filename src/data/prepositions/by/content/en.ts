import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "by; close to",
  "tips": [
    "Casual, similar to near/beside.",
    "Often implies very close."
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
    "summary": "by in time usage mainly signals a deadline no later than a point; compare it with close alternatives to avoid overlap.",
    "differences": [
      {
        "term": "at",
        "description": "by focuses on a deadline no later than a point, while at marks a different temporal relation.",
        "examples": [
          {
            "term": "at",
            "sentence": "at 7:00"
          },
          {
            "term": "by",
            "sentence": "by Monday"
          }
        ]
      },
      {
        "term": "on",
        "description": "by is for a deadline no later than a point; on usually serves another time function.",
        "examples": [
          {
            "term": "on",
            "sentence": "on Monday"
          },
          {
            "term": "by",
            "sentence": "by Monday"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Deadlines",
      "items": [
        "by Monday",
        "by noon",
        "by tomorrow",
        "by next week",
        "by 5 p.m.",
        "by the end of the month"
      ]
    },
    {
      "title": "Milestones",
      "items": [
        "by then",
        "by now",
        "by age 18",
        "by this point",
        "by the deadline",
        "by the second week"
      ]
    },
    {
      "title": "Day progression",
      "items": [
        "by early morning",
        "by late afternoon",
        "by night",
        "by the end of class",
        "by break time",
        "by dinner time"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish at Monday.",
      "correct": "We finish by Monday.",
      "reason": "Use by when the meaning is a deadline no later than a point; at signals a different relation."
    },
    {
      "wrong": "The class starts on noon.",
      "correct": "The class starts by noon.",
      "reason": "by focuses on a deadline no later than a point; on is not the best fit here."
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
      "explanation": "Choose by because this context needs a deadline no later than a point."
    },
    {
      "prompt": "Choose the correct preposition: ___ noon.",
      "options": [
        "by",
        "at",
        "on"
      ],
      "answer": "by",
      "explanation": "Choose by because this context needs a deadline no later than a point."
    },
    {
      "prompt": "Choose the correct preposition: ___ then.",
      "options": [
        "by",
        "at",
        "on"
      ],
      "answer": "by",
      "explanation": "Choose by because this context needs a deadline no later than a point."
    }
  ]
};

export default content;
