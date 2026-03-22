import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "at a higher level or position; higher than a standard",
  "tips": [
    "Above marks higher position without contact.",
    "It also works for levels and standards (above average, above zero).",
    "Use on for contact; use over when crossing movement is central."
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
      "en": "Her score is above average.",
      "i18n": {
        "zh-CN": {
          "translation": "她的成绩高于平均水平。"
        },
        "en": {
          "translation": "Her score is above average."
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
        "en": "The plane is above the clouds.",
        "i18n": {
          "zh-CN": {
            "translation": "飞机在云层上方。"
          },
          "en": {
            "translation": "The plane is above the clouds."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Above means higher position or higher level, without contact and without necessary crossing movement.",
    "differences": [
      {
        "term": "over",
        "description": "Above is usually static higher position; over often adds crossing or covering meaning.",
        "examples": [
          {
            "term": "above",
            "sentence": "The clock is above the door."
          },
          {
            "term": "over",
            "sentence": "A bird flew over the wall."
          }
        ]
      },
      {
        "term": "on",
        "description": "On requires surface contact. Above means higher than without touching.",
        "examples": [
          {
            "term": "on",
            "sentence": "The book is on the table."
          },
          {
            "term": "above",
            "sentence": "The lamp hangs above the table."
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
  "collocationGroups": [
    {
      "title": "Spatial position",
      "items": [
        "above the table",
        "above the door",
        "above the clouds",
        "above the roof",
        "above the bed",
        "above the screen"
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
      "title": "Abstract expressions",
      "items": [
        "above all",
        "above suspicion",
        "above criticism",
        "rise above",
        "head and shoulders above",
        "above board"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The book is above the table. (when touching)",
      "correct": "The book is on the table.",
      "reason": "Use on for surface contact; above means no contact."
    },
    {
      "wrong": "The bird flew above the wall and crossed it.",
      "correct": "The bird flew over the wall.",
      "reason": "When crossing movement is central, over is usually the better choice."
    },
    {
      "wrong": "The score is over average.",
      "correct": "The score is above average.",
      "reason": "The standard collocation is above average."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The clock is ___ the door.",
      "options": [
        "above",
        "on",
        "through"
      ],
      "answer": "above",
      "explanation": "The relation is higher position without contact."
    },
    {
      "prompt": "Choose the correct preposition: Her score is ___ average.",
      "options": [
        "above",
        "over",
        "under"
      ],
      "answer": "above",
      "explanation": "The standard expression is above average."
    },
    {
      "prompt": "Choose the correct preposition: The helicopter hovered ___ the stadium.",
      "options": [
        "above",
        "inside",
        "under"
      ],
      "answer": "above",
      "explanation": "This is static higher position, not internal movement or lower position."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of above?",
      "answer": "Above means higher position or higher level than a reference point, usually without contact."
    },
    {
      "question": "What is the difference between above and over?",
      "answer": "Above is usually static higher position; over often adds crossing or covering meaning."
    },
    {
      "question": "How is above different from on?",
      "answer": "On requires contact with a surface. Above means higher than without touching."
    },
    {
      "question": "Can above express numeric meaning?",
      "answer": "Yes. It is common in level expressions such as above average, above zero, and above 90%."
    },
    {
      "question": "Can above be used for time expressions?",
      "answer": "Not as a core time preposition in most beginner contexts. Use at/in/on/over for time relations."
    },
    {
      "question": "What is a common learner mistake with above?",
      "answer": "Learners often use above where contact is intended (use on) or where crossing movement is intended (use over)."
    },
    {
      "question": "What are common collocations with above?",
      "answer": "High-frequency collocations include above the table, above average, above sea level, and above all."
    },
    {
      "question": "What is a quick memory rule for above?",
      "answer": "Use one test: higher but not touching. Then anchor it with a level phrase like above average."
    }
  ]
};

export default content;
