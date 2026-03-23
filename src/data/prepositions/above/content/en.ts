import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "higher than something and not touching it; also higher than a level, number, or standard",
  "tips": [
    "Start with one rule: above means higher than something without touching it.",
    "On means touching the surface. Above means higher than it, without contact.",
    "When the noun is a level or standard, above means higher than that level: above average, above zero, above your level."
  ],
  "examples": [
    {
      "en": "The lamp is above the table.",
      "i18n": {
        "zh-CN": {
          "translation": "灯在桌子上方。"
        },
        "en": {
          "translation": "The lamp is above the table."
        }
      }
    },
    {
      "en": "A small window is above the bed.",
      "i18n": {
        "zh-CN": {
          "translation": "床上方有一扇小窗。"
        },
        "en": {
          "translation": "A small window is above the bed."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The lamp is above the table.",
        "i18n": {
          "zh-CN": {
            "translation": "灯在桌子上方。"
          },
          "en": {
            "translation": "The lamp is above the table."
          }
        }
      },
      {
        "en": "A small window is above the bed.",
        "i18n": {
          "zh-CN": {
            "translation": "床上方有一扇小窗。"
          },
          "en": {
            "translation": "A small window is above the bed."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Above does not mainly mean directly over the center. Its core idea is higher than something. It usually does not involve contact or crossing. If there is contact, use on. If crossing is central, use over.",
    "differences": [
      {
        "term": "on",
        "description": "On is for surface contact. Above is for a higher position without touching.",
        "examples": [
          {
            "term": "on",
            "sentence": "The book is on the table."
          },
          {
            "term": "above",
            "sentence": "The lamp is above the table."
          }
        ]
      },
      {
        "term": "over",
        "description": "Over often adds a crossing or covering idea. Above only says that something is higher.",
        "examples": [
          {
            "term": "over",
            "sentence": "A bird flew over the wall."
          },
          {
            "term": "above",
            "sentence": "The clock is above the door."
          }
        ]
      },
      {
        "term": "below",
        "description": "Below is the opposite direction. Above means higher than; below means lower than.",
        "examples": [
          {
            "term": "below",
            "sentence": "The temperature is below zero."
          },
          {
            "term": "above",
            "sentence": "The temperature is above zero."
          }
        ]
      }
    ]
  },
  "comparisonVisual": {
    "type": "vertical-range",
    "title": "See on / over / above / below in one picture",
    "caption": "The dashed rectangle is the reference object. Compare contact, crossing, and higher/lower range.",
    "items": [
      {
        "term": "on",
        "xRange": [
          0.08,
          0.22
        ],
        "yRange": [
          0.5,
          0.5
        ],
        "marker": "contact",
        "note": "touching the surface"
      },
      {
        "term": "over",
        "xRange": [
          0.3,
          0.48
        ],
        "yRange": [
          0.28,
          0.58
        ],
        "marker": "crossing",
        "note": "above and crossing"
      },
      {
        "term": "above",
        "xRange": [
          0.56,
          0.72
        ],
        "yRange": [
          0.16,
          0.32
        ],
        "marker": "hover",
        "note": "higher than, not touching"
      },
      {
        "term": "below",
        "xRange": [
          0.8,
          0.94
        ],
        "yRange": [
          0.7,
          0.86
        ],
        "marker": "below",
        "note": "lower than"
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Spatial position",
      "items": [
        "above the table",
        "above the door",
        "above the bed",
        "above the roof",
        "above the screen",
        "above the clouds"
      ]
    },
    {
      "title": "Numbers and standards",
      "items": [
        "above average",
        "above zero",
        "above sea level",
        "above 90%",
        "above the limit",
        "above the age of 18"
      ]
    },
    {
      "title": "Ability and abstract range",
      "items": [
        "above my level",
        "above my level of understanding",
        "rise above",
        "above suspicion",
        "above all",
        "head and shoulders above"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The book is above the table. (when the book is touching the table)",
      "correct": "The book is on the table.",
      "reason": "Use on for surface contact. Above means higher than something without touching it."
    },
    {
      "wrong": "The bird flew above the wall and crossed it.",
      "correct": "The bird flew over the wall.",
      "reason": "When the crossing path matters, over is usually the better choice."
    },
    {
      "wrong": "The score is over average.",
      "correct": "The score is above average.",
      "reason": "The standard collocation is above average when you compare with a level or standard."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The lamp is ___ the table.",
      "options": [
        "above",
        "on",
        "through"
      ],
      "answer": "above",
      "explanation": "The lamp is higher than the table and not touching it."
    },
    {
      "prompt": "Choose the correct preposition: Her score is ___ average.",
      "options": [
        "above",
        "over",
        "under"
      ],
      "answer": "above",
      "explanation": "Above average is the standard expression for a level or standard."
    },
    {
      "prompt": "Choose the correct preposition: A bird flew ___ the wall.",
      "options": [
        "over",
        "above",
        "inside"
      ],
      "answer": "over",
      "explanation": "Use over when the crossing movement is central."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of above?",
      "answer": "Above means higher than something, usually without touching it."
    },
    {
      "question": "What is the difference between above and on?",
      "answer": "On means contact with a surface. Above means a higher position without contact."
    },
    {
      "question": "What is the difference between above and over?",
      "answer": "Above focuses on higher position. Over often adds crossing or covering meaning."
    },
    {
      "question": "Why do we say above average, not over average?",
      "answer": "Because above is the standard word for being higher than a level, number, or standard such as average, zero, or the limit."
    },
    {
      "question": "Can above mean not exactly straight over the center?",
      "answer": "Yes. Above means higher than something. It does not have to be exactly centered over it."
    },
    {
      "question": "Can above be used for numbers and levels?",
      "answer": "Yes. Common patterns include above average, above zero, above sea level, and above your level."
    },
    {
      "question": "What is a quick memory rule for above?",
      "answer": "Think: higher than, not touching. Then anchor it with a phrase like above average."
    }
  ]
};

export default content;
