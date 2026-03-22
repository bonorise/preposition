import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "beyond; farther than, or outside a limit",
  "tips": [
    "Farther than a point/edge: beyond the river, beyond the border.",
    "Past often means passing a point; beyond suggests farther on the far side.",
    "Common abstract use: beyond control / beyond repair / beyond doubt."
  ],
  "examples": [
    {
      "en": "The hills are beyond the river.",
      "i18n": {
        "zh-CN": {
          "translation": "山丘在河的更远处。"
        },
        "en": {
          "translation": "The hills are beyond the river."
        }
      }
    },
    {
      "en": "There is a town beyond the bridge.",
      "i18n": {
        "zh-CN": {
          "translation": "桥那边有个小镇。"
        },
        "en": {
          "translation": "There is a town beyond the bridge."
        }
      }
    }
  ],
  "comparison": {
    "summary": "Beyond means \"farther than a point/edge\" or \"outside a limit\". It is common in both distance and abstract-limit contexts.",
    "differences": [
      {
        "term": "past",
        "description": "Past often means passing a point; beyond suggests farther on the far side of it.",
        "examples": [
          {
            "term": "past",
            "sentence": "Walk past the bridge and turn left."
          },
          {
            "term": "beyond",
            "sentence": "There's a small village beyond the bridge."
          }
        ]
      },
      {
        "term": "outside",
        "description": "Outside means not inside a boundary; beyond suggests farther than a point/boundary.",
        "examples": [
          {
            "term": "outside",
            "sentence": "Wait outside the gate."
          },
          {
            "term": "beyond",
            "sentence": "The parking lot is beyond the gate."
          }
        ]
      },
      {
        "term": "over",
        "description": "Over is the common choice for numbers (over 100). Beyond is common for limits and abstract ideas (beyond control, beyond our budget).",
        "examples": [
          {
            "term": "over",
            "sentence": "Over 100 people attended the meeting."
          },
          {
            "term": "beyond",
            "sentence": "The cost is beyond our budget."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Distance",
      "items": [
        "beyond the river",
        "beyond the bridge",
        "beyond the mountains",
        "beyond the border",
        "beyond the gate",
        "beyond the horizon"
      ]
    },
    {
      "title": "Limits / range",
      "items": [
        "beyond the limit",
        "beyond the scope",
        "beyond the rules",
        "beyond our budget",
        "beyond the boundary",
        "beyond the edge"
      ]
    },
    {
      "title": "Abstract patterns",
      "items": [
        "beyond control",
        "beyond repair",
        "beyond doubt",
        "beyond belief",
        "beyond recognition",
        "beyond words"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "Walk beyond the bridge and turn left. (meaning: pass the bridge)",
      "correct": "Walk past the bridge and turn left.",
      "reason": "Past is the natural choice for passing a point. Beyond suggests farther on the far side."
    },
    {
      "wrong": "Beyond 100 people attended the meeting.",
      "correct": "Over 100 people attended the meeting.",
      "reason": "Over is the common choice for numbers. Beyond is more common for limits/abstract ideas (beyond our budget)."
    },
    {
      "wrong": "The cafe is beyond the street. (meaning: on the other side)",
      "correct": "The cafe is across the street.",
      "reason": "Across means on the other side; beyond means farther than a point."
    },
    {
      "wrong": "It's beyond of my control.",
      "correct": "It's beyond my control.",
      "reason": "Beyond is followed directly by a noun phrase (no of)."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: There's a small village ___ the mountains.",
      "options": [
        "beyond",
        "past",
        "outside",
        "over"
      ],
      "answer": "beyond",
      "explanation": "It means farther on the far side of the mountains."
    },
    {
      "prompt": "Choose the correct preposition: The cost is ___ our budget.",
      "options": [
        "beyond",
        "over",
        "inside",
        "between"
      ],
      "answer": "beyond",
      "explanation": "Beyond + budget means \"outside the limit\"."
    },
    {
      "prompt": "Choose the correct preposition: It's ___ my control.",
      "options": [
        "beyond",
        "without",
        "by",
        "near"
      ],
      "answer": "beyond",
      "explanation": "Common pattern: \"beyond my control\" = not controllable."
    }
  ],
  "faq": [
    {
      "question": "What does \"beyond\" mean?",
      "answer": "Beyond means \"farther than a point/edge\" or \"outside a limit\". Example: There is a town beyond the bridge."
    },
    {
      "question": "What is the difference between \"beyond\" and \"past\"?",
      "answer": "Past often means passing a point (walk past the bridge). Beyond suggests farther on the far side (a village beyond the bridge)."
    },
    {
      "question": "What is the difference between \"beyond\" and \"outside\"?",
      "answer": "Outside means not inside a boundary (outside the gate). Beyond suggests farther than a point/boundary (the parking lot is beyond the gate)."
    },
    {
      "question": "When should I use \"over\" instead of \"beyond\"?",
      "answer": "Use over for numbers (over 100 people). Use beyond for limits/abstract ideas (beyond our budget, beyond control)."
    },
    {
      "question": "What are common abstract expressions with \"beyond\"?",
      "answer": "beyond control, beyond repair, beyond doubt, beyond belief, beyond recognition, beyond words."
    },
    {
      "question": "Can \"beyond\" be used for time?",
      "answer": "Sometimes, but it is not the main beginner time preposition. Example: beyond midnight = after midnight. In many cases, after/past is more common."
    },
    {
      "question": "What are common collocations with \"beyond\"?",
      "answer": "beyond the river, beyond the border, beyond the limit, beyond the scope, beyond my control, beyond doubt."
    },
    {
      "question": "How can I remember \"beyond\" quickly?",
      "answer": "Think \"farther than that point\". Point A is your reference; beyond A is on the far side, further away."
    }
  ]
};

export default content;
