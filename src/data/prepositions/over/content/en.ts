import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "above and across; during a period; more than a number",
  "tips": [
    "For space, over often means above with crossing, usually without contact.",
    "For time, over means during a span (over the weekend, over time).",
    "For quantity, over means more than a threshold (over $50, over 100 people)."
  ],
  "examples": [
    {
      "en": "A bird flew over the wall.",
      "i18n": {
        "zh-CN": {
          "translation": "一只鸟飞过了墙上方。"
        },
        "en": {
          "translation": "A bird flew over the wall."
        }
      }
    },
    {
      "en": "We worked on the report over the weekend.",
      "i18n": {
        "zh-CN": {
          "translation": "我们在周末期间完成了报告。"
        },
        "en": {
          "translation": "We worked on the report over the weekend."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "A bird flew over the wall.",
        "i18n": {
          "zh-CN": {
            "translation": "一只鸟飞过了墙上方。"
          },
          "en": {
            "translation": "A bird flew over the wall."
          }
        }
      },
      {
        "en": "There is a bridge over the river.",
        "i18n": {
          "zh-CN": {
            "translation": "河上有一座桥。"
          },
          "en": {
            "translation": "There is a bridge over the river."
          }
        }
      }
    ],
    "time": [
      {
        "en": "We worked on the report over the weekend.",
        "i18n": {
          "zh-CN": {
            "translation": "我们在周末期间完成了报告。"
          },
          "en": {
            "translation": "We worked on the report over the weekend."
          }
        }
      },
      {
        "en": "Sales improved over the past year.",
        "i18n": {
          "zh-CN": {
            "translation": "过去一年里销售额有所提升。"
          },
          "en": {
            "translation": "Sales improved over the past year."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "The drone passed over the stadium.",
        "i18n": {
          "zh-CN": {
            "translation": "无人机从体育场上空飞过。"
          },
          "en": {
            "translation": "The drone passed over the stadium."
          }
        }
      },
      {
        "en": "She jumped over the puddle.",
        "i18n": {
          "zh-CN": {
            "translation": "她跳过了水坑。"
          },
          "en": {
            "translation": "She jumped over the puddle."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Over is not only 'above'. It often adds crossing, duration, or quantity-over-threshold meaning, so choosing the right contrast is key.",
    "differences": [
      {
        "term": "above",
        "description": "Above is pure higher position. Over often carries crossing or covering nuance in addition to being above.",
        "examples": [
          {
            "term": "above",
            "sentence": "The clock is above the door."
          },
          {
            "term": "over",
            "sentence": "A plane flew over the city."
          }
        ]
      },
      {
        "term": "across",
        "description": "Across emphasizes side-to-side movement on a surface/area. Over emphasizes movement above something.",
        "examples": [
          {
            "term": "across",
            "sentence": "She walked across the street."
          },
          {
            "term": "over",
            "sentence": "She jumped over the fence."
          }
        ]
      },
      {
        "term": "through",
        "description": "Through means moving inside an enclosed space; over means passing above it.",
        "examples": [
          {
            "term": "through",
            "sentence": "The train went through the tunnel."
          },
          {
            "term": "over",
            "sentence": "The train went over the bridge."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Space and crossing",
      "items": [
        "over the wall",
        "over the bridge",
        "over the river",
        "over the fence",
        "over the roof",
        "over the city"
      ]
    },
    {
      "title": "Time span",
      "items": [
        "over the weekend",
        "over time",
        "over the years",
        "over the past month",
        "over the holidays",
        "over three days"
      ]
    },
    {
      "title": "More than",
      "items": [
        "over $50",
        "over 100 people",
        "over 20%",
        "over 18",
        "over 10 miles",
        "over the limit"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The book is over the table. (when it is touching)",
      "correct": "The book is on the table.",
      "reason": "Use on for surface contact. Over usually does not express direct contact."
    },
    {
      "wrong": "The train went over the tunnel.",
      "correct": "The train went through the tunnel.",
      "reason": "A tunnel is an inside path, so through is the correct relation."
    },
    {
      "wrong": "I will finish it in the weekend.",
      "correct": "I will finish it over the weekend.",
      "reason": "For duration during the weekend, over the weekend is a strong default in American usage."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The cat jumped ___ the fence.",
      "options": [
        "over",
        "through",
        "on"
      ],
      "answer": "over",
      "explanation": "Over is used for crossing above a barrier."
    },
    {
      "prompt": "Choose the correct preposition: We talked about it ___ the weekend.",
      "options": [
        "over",
        "at",
        "through"
      ],
      "answer": "over",
      "explanation": "Over the weekend expresses duration during that period."
    },
    {
      "prompt": "Choose the correct preposition: The ticket costs ___ $50.",
      "options": [
        "over",
        "on",
        "inside"
      ],
      "answer": "over",
      "explanation": "Over marks a value greater than a threshold."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of over?",
      "answer": "Over mainly means above with crossing. It also expresses duration across a period and values greater than a threshold."
    },
    {
      "question": "What is the difference between over and above?",
      "answer": "Above is pure higher position. Over often adds crossing or covering relation."
    },
    {
      "question": "What is the difference between over and across?",
      "answer": "Across is side-to-side across an area; over is movement above something."
    },
    {
      "question": "How do I choose between over and through?",
      "answer": "Use through for movement inside an enclosed space; use over for movement above it."
    },
    {
      "question": "Can over be used for time expressions?",
      "answer": "Yes. Over the weekend, over time, and over the years all express duration during a period."
    },
    {
      "question": "Can over mean more than a number?",
      "answer": "Yes. It is common for quantities: over $50, over 100 people, over 20%."
    },
    {
      "question": "What is a common learner mistake with over?",
      "answer": "Learners often use over where contact is intended (use on) or where internal movement is intended (use through)."
    },
    {
      "question": "What is a 30-second memory rule for over?",
      "answer": "Memorize three cues: above-and-crossing, time span, and more-than quantity."
    }
  ]
};

export default content;
