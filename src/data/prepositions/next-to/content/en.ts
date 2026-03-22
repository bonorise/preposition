import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "immediately beside; directly adjacent to",
  "tips": [
    "Next to signals the tightest side-by-side adjacency.",
    "It is stronger and more concrete than near.",
    "Use it for side relation only, not for on/in/under relations."
  ],
  "examples": [
    {
      "en": "The chair is next to the desk.",
      "i18n": {
        "zh-CN": {
          "translation": "椅子在桌子旁边。"
        },
        "en": {
          "translation": "The chair is next to the desk."
        }
      }
    },
    {
      "en": "The bus stop is next to the bank.",
      "i18n": {
        "zh-CN": {
          "translation": "公交站在银行旁边。"
        },
        "en": {
          "translation": "The bus stop is next to the bank."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Sit next to your partner.",
        "i18n": {
          "zh-CN": {
            "translation": "坐在你搭档旁边。"
          },
          "en": {
            "translation": "Sit next to your partner."
          }
        }
      },
      {
        "en": "The pharmacy is next to the supermarket.",
        "i18n": {
          "zh-CN": {
            "translation": "药店就在超市旁边。"
          },
          "en": {
            "translation": "The pharmacy is next to the supermarket."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Next to means immediate adjacency. It is very close to beside, but usually more conversational. The key contrast is with near: near is broad proximity, next to is direct side-by-side contact-level closeness.",
    "differences": [
      {
        "term": "beside",
        "description": "Both mean at the side. Next to is often more conversational; beside can sound slightly more formal.",
        "examples": [
          {
            "term": "next to",
            "sentence": "Sit next to me."
          },
          {
            "term": "beside",
            "sentence": "She stood beside her father."
          }
        ]
      },
      {
        "term": "near",
        "description": "Near marks short distance only. Next to requires direct adjacency.",
        "examples": [
          {
            "term": "near",
            "sentence": "There is a cafe near the station."
          },
          {
            "term": "next to",
            "sentence": "There is a cafe next to the station exit."
          }
        ]
      },
      {
        "term": "by",
        "description": "By is broad and flexible in speech. Next to is more precise for immediate adjacency.",
        "examples": [
          {
            "term": "by",
            "sentence": "Wait by the window."
          },
          {
            "term": "next to",
            "sentence": "The printer is next to the monitor."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "People and Seating",
      "items": [
        "sit next to me",
        "stand next to her",
        "walk next to him",
        "live next to my parents",
        "line up next to each other",
        "park next to the car"
      ]
    },
    {
      "title": "Places and Facilities",
      "items": [
        "next to the station",
        "next to the school",
        "next to the bank",
        "next to the office",
        "next to the elevator",
        "next to the entrance"
      ]
    },
    {
      "title": "High-frequency Chunks",
      "items": [
        "right next to",
        "next to each other",
        "put it next to",
        "move next to the wall",
        "next to impossible",
        "the room next to ours"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The hotel is next to the city center. (when you only mean generally close)",
      "correct": "The hotel is near the city center.",
      "reason": "Use near unless there is real immediate adjacency."
    },
    {
      "wrong": "Put the phone next to the table. (when you mean on the surface)",
      "correct": "Put the phone on the table.",
      "reason": "Next to means at the side, not on top."
    },
    {
      "wrong": "He sat near me in a fixed seat row.",
      "correct": "He sat next to me.",
      "reason": "In clear adjacent seating, next to is the better choice."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: Please sit ___ me.",
      "options": [
        "next to",
        "in",
        "under"
      ],
      "answer": "next to",
      "explanation": "For adjacent seating, use next to."
    },
    {
      "prompt": "Choose the correct preposition: The bakery is ___ the post office (the two stores are adjacent).",
      "options": [
        "next to",
        "near",
        "over"
      ],
      "answer": "next to",
      "explanation": "Immediate adjacency calls for next to."
    },
    {
      "prompt": "Choose the better word: My apartment is ___ downtown (general proximity only).",
      "options": [
        "near",
        "next to",
        "on"
      ],
      "answer": "near",
      "explanation": "For broad proximity, near is better than next to."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of next to?",
      "answer": "Next to means immediately adjacent, with little or no gap. Use it when side-by-side relation is explicit."
    },
    {
      "question": "Is next to very different from beside?",
      "answer": "They are close in meaning. For beginners, treat them as near-synonyms first: next to is more conversational, beside can sound slightly more formal."
    },
    {
      "question": "How do I quickly choose between next to and near?",
      "answer": "Ask one question: Is it directly adjacent? If yes, use next to. If it is only generally close, use near."
    },
    {
      "question": "Can next to be used for larger locations?",
      "answer": "Yes, but only when adjacency is real (for example, two neighboring towns). If you only mean close by, near is better."
    },
    {
      "question": "What are common sentence patterns with next to?",
      "answer": "The core pattern is next to + noun/pronoun (next to me, next to the station). Right next to is a very common intensifier."
    },
    {
      "question": "Can next to express an abstract meaning?",
      "answer": "Yes. In expressions like next to impossible, it means almost/nearly, not physical adjacency."
    },
    {
      "question": "What is a common learner mistake with next to?",
      "answer": "Learners overuse next to for general proximity (should be near) and misuse it where surface contact is needed (should be on)."
    },
    {
      "question": "What is a 30-second memory rule for next to?",
      "answer": "Use a two-step test: adjacent side-by-side -> next to; not adjacent -> choose near/on/in by relation type. Anchor it with sit next to me and right next to the door."
    }
  ]
};

export default content;
