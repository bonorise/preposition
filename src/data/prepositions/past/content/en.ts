import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "past; beyond a point (passing it)",
  "tips": [
    "Space: pass a point/place and continue (walk past the school).",
    "Time: later than a time (It's past 3 o'clock) or clock-reading (ten past six)."
  ],
  "examples": [
    {
      "en": "Walk past the school.",
      "i18n": {
        "zh-CN": {
          "translation": "从学校旁边走过去。"
        },
        "en": {
          "translation": "Walk past the school."
        }
      }
    },
    {
      "en": "The bus went past the stop.",
      "i18n": {
        "zh-CN": {
          "translation": "公交车开过了站。"
        },
        "en": {
          "translation": "The bus went past the stop."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Walk past the school.",
        "i18n": {
          "zh-CN": {
            "translation": "从学校旁边走过去。"
          },
          "en": {
            "translation": "Walk past the school."
          }
        }
      },
      {
        "en": "The bus went past the stop.",
        "i18n": {
          "zh-CN": {
            "translation": "公交车开过了站。"
          },
          "en": {
            "translation": "The bus went past the stop."
          }
        }
      }
    ],
    "time": [
      {
        "en": "It's ten past six.",
        "i18n": {
          "zh-CN": {
            "translation": "现在是六点十分。"
          },
          "en": {
            "translation": "It's ten past six."
          }
        }
      },
      {
        "en": "It's just past midnight.",
        "i18n": {
          "zh-CN": {
            "translation": "刚过午夜。"
          },
          "en": {
            "translation": "It's just past midnight."
          }
        }
      },
      {
        "en": "It's past 3 o'clock.",
        "i18n": {
          "zh-CN": {
            "translation": "已经三点多了（过三点了）。"
          },
          "en": {
            "translation": "It's past 3 o'clock."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Go past the bank and turn left.",
        "i18n": {
          "zh-CN": {
            "translation": "经过银行再左转。"
          },
          "en": {
            "translation": "Go past the bank and turn left."
          }
        }
      },
      {
        "en": "A car sped past us.",
        "i18n": {
          "zh-CN": {
            "translation": "一辆车从我们身边飞驰而过。"
          },
          "en": {
            "translation": "A car sped past us."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Past mainly means \"passing a point and going beyond it\". In time, it can mean \"later than a time\" (It's past 3 o'clock) or clock-reading (ten past six). Learners often mix past vs to (clock) and past vs after (sequence).",
    "differences": [
      {
        "term": "to",
        "description": "Clock reading: past is minutes after the hour; to is minutes before the next hour.",
        "examples": [
          {
            "term": "past",
            "sentence": "It's ten past six."
          },
          {
            "term": "to",
            "sentence": "It's ten to six."
          }
        ]
      },
      {
        "term": "after",
        "description": "After is simple time order (after class). Past is common for later than a time (It's past midnight) or passing a place.",
        "examples": [
          {
            "term": "after",
            "sentence": "I'll call you after class."
          },
          {
            "term": "past",
            "sentence": "It's past midnight."
          }
        ]
      },
      {
        "term": "beyond",
        "description": "Beyond focuses on being farther than a point/limit. Past focuses on moving past a point and continuing.",
        "examples": [
          {
            "term": "past",
            "sentence": "Walk past the school and you'll see the park."
          },
          {
            "term": "beyond",
            "sentence": "The park is beyond the school."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Routes and passing (space)",
      "items": [
        "walk past the school",
        "go past the bank",
        "drive past the station",
        "run past me",
        "past the stop",
        "past the entrance"
      ]
    },
    {
      "title": "Clock time",
      "items": [
        "ten past six",
        "half past seven",
        "a quarter past five",
        "just past midnight",
        "past noon",
        "past 3 o'clock"
      ]
    },
    {
      "title": "Beyond a point/limit",
      "items": [
        "past the deadline",
        "past the end",
        "past the limit",
        "past the point of no return",
        "past my bedtime",
        "past the age of 60"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "It's ten past six. (when it is 5:50)",
      "correct": "It's ten to six.",
      "reason": "In clock time, past = minutes after; to = minutes before the next hour."
    },
    {
      "wrong": "The bus past the stop.",
      "correct": "The bus went past the stop.",
      "reason": "Past is a preposition, so it needs a verb phrase like go/walk/drive past."
    },
    {
      "wrong": "I saw him past week.",
      "correct": "I saw him last week.",
      "reason": "Use last for \"previous\" time periods (last week/month)."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: It's ten ___ six.",
      "options": [
        "past",
        "to",
        "in"
      ],
      "answer": "past",
      "explanation": "Ten past six means 6:10."
    },
    {
      "prompt": "Choose the correct preposition: Go ___ the bank and turn left.",
      "options": [
        "past",
        "behind",
        "inside"
      ],
      "answer": "past",
      "explanation": "Past fits the meaning: pass a point and continue."
    },
    {
      "prompt": "Choose the correct preposition: We're already ___ the deadline.",
      "options": [
        "past",
        "between",
        "under"
      ],
      "answer": "past",
      "explanation": "Past can mean beyond a time point or limit."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of past?",
      "answer": "Past means passing a point/place and going beyond it (walk past the school)."
    },
    {
      "question": "Can past be used for time?",
      "answer": "Yes. It can mean later than a time (It's past 3 o'clock) and it is common in clock reading (ten past six)."
    },
    {
      "question": "Past vs to in clock time?",
      "answer": "Past is minutes after the hour (usually 1–30). To is minutes before the next hour (usually 31–59)."
    },
    {
      "question": "Past vs after: what's the difference?",
      "answer": "After is general time order (after class). Past often means beyond a time point/limit (past midnight, past the deadline)."
    },
    {
      "question": "Past vs beyond: what's the difference?",
      "answer": "Past focuses on passing a point and continuing. Beyond focuses on being farther than a point or outside a limit."
    },
    {
      "question": "Do I need an object after past?",
      "answer": "As a preposition, yes: past + noun phrase (past the bank). Past can also be an adjective/noun (past experience, the past), but that is not the preposition use."
    },
    {
      "question": "What are common learner mistakes with past?",
      "answer": "Mixing up past vs to in clock time, and treating past like a verb (say went past / walked past)."
    },
    {
      "question": "A 30-second memory rule for past?",
      "answer": "Picture two scenes: (1) a path passing a point and continuing, (2) a clock with minutes past the hour. If there is motion (go/walk/drive), past is often the match."
    }
  ]
};

export default content;
