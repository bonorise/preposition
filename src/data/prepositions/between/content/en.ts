import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "between; in the middle of two",
  "tips": [
    "Between links two endpoints (people/things, or a time range with A and B).",
    "Among means inside a group; but between can also work with 3+ when the endpoints/relationships are clear.",
    "Pattern: between A and B (not between A to B)."
  ],
  "examples": [
    {
      "en": "The ball is between the boxes.",
      "i18n": {
        "zh-CN": {
          "translation": "球在两个盒子之间。"
        },
        "en": {
          "translation": "The ball is between the boxes."
        }
      }
    },
    {
      "en": "The cafe is between the bank and the bookstore.",
      "i18n": {
        "zh-CN": {
          "translation": "咖啡店在银行和书店之间。"
        },
        "en": {
          "translation": "The cafe is between the bank and the bookstore."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The ball is between the boxes.",
        "i18n": {
          "zh-CN": {
            "translation": "球在两个盒子之间。"
          },
          "en": {
            "translation": "The ball is between the boxes."
          }
        }
      },
      {
        "en": "The cafe is between the bank and the bookstore.",
        "i18n": {
          "zh-CN": {
            "translation": "咖啡店在银行和书店之间。"
          },
          "en": {
            "translation": "The cafe is between the bank and the bookstore."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Call me between 7 and 9 p.m.",
        "i18n": {
          "zh-CN": {
            "translation": "请在晚上 7 点到 9 点之间给我打电话。"
          },
          "en": {
            "translation": "Call me between 7 and 9 p.m."
          }
        }
      },
      {
        "en": "I grabbed a coffee between classes.",
        "i18n": {
          "zh-CN": {
            "translation": "我在两节课之间去买了杯咖啡。"
          },
          "en": {
            "translation": "I grabbed a coffee between classes."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Between links endpoints (space or time ranges). Compare it with among/from/through to avoid overlap.",
    "differences": [
      {
        "term": "among",
        "description": "Among means inside a group; between links endpoints or one-to-one relationships.",
        "examples": [
          {
            "term": "among",
            "sentence": "He sat among his friends."
          },
          {
            "term": "between",
            "sentence": "Keep this between you and me."
          }
        ]
      },
      {
        "term": "from",
        "description": "Between is a range with two endpoints; from marks the starting point (often paired with to/until).",
        "examples": [
          {
            "term": "between",
            "sentence": "I’m free between 2 and 3 p.m."
          },
          {
            "term": "from",
            "sentence": "I’m free from 2 to 3 p.m."
          }
        ]
      },
      {
        "term": "through",
        "description": "Between is a bounded interval; through emphasizes continuous coverage until an end.",
        "examples": [
          {
            "term": "between",
            "sentence": "The office is closed between 12 and 1 p.m."
          },
          {
            "term": "through",
            "sentence": "The office stayed open through the afternoon."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Clock and date ranges",
      "items": [
        "between 2 and 3 p.m.",
        "between Monday and Friday",
        "between June and August",
        "between now and noon",
        "between 1990 and 2000",
        "between day and night"
      ]
    },
    {
      "title": "Task windows",
      "items": [
        "between classes",
        "between meetings",
        "between two deadlines",
        "between two shifts",
        "between tasks",
        "between appointments"
      ]
    },
    {
      "title": "Process stages",
      "items": [
        "between semesters",
        "between projects",
        "between start and finish",
        "between lunch and dinner",
        "between first and second term",
        "between then and now"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "Call me between 7 to 9 p.m.",
      "correct": "Call me between 7 and 9 p.m.",
      "reason": "Use \"between A and B\" (not \"between A to B\")."
    },
    {
      "wrong": "Between you and I, this is hard.",
      "correct": "Between you and me, this is hard.",
      "reason": "Use object pronouns after a preposition (me, him, her, us, them)."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ 2 and 3 p.m.",
      "options": [
        "between",
        "from",
        "through"
      ],
      "answer": "between",
      "explanation": "Choose between because this context needs a bounded interval with two endpoints."
    },
    {
      "prompt": "Choose the correct preposition: ___ Monday and Friday.",
      "options": [
        "between",
        "from",
        "through"
      ],
      "answer": "between",
      "explanation": "Choose between because this context needs a bounded interval with two endpoints."
    },
    {
      "prompt": "Choose the correct preposition: ___ classes.",
      "options": [
        "between",
        "from",
        "through"
      ],
      "answer": "between",
      "explanation": "Choose between because this context needs a bounded interval with two endpoints."
    }
  ]
};

export default content;
