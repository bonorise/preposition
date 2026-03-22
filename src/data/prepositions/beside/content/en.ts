import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "at the side of; next to, usually very close",
  "tips": [
    "Beside marks side-by-side position with short distance.",
    "It overlaps with next to, but often sounds slightly more formal.",
    "Use it for side relation only, not top/bottom/inside relations."
  ],
  "examples": [
    {
      "en": "She sits beside the window.",
      "i18n": {
        "zh-CN": {
          "translation": "她坐在窗边。"
        },
        "en": {
          "translation": "She sits beside the window."
        }
      }
    },
    {
      "en": "The bike is beside the door.",
      "i18n": {
        "zh-CN": {
          "translation": "自行车在门旁边。"
        },
        "en": {
          "translation": "The bike is beside the door."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Please sit beside me.",
        "i18n": {
          "zh-CN": {
            "translation": "请坐在我旁边。"
          },
          "en": {
            "translation": "Please sit beside me."
          }
        }
      },
      {
        "en": "A small table stands beside the sofa.",
        "i18n": {
          "zh-CN": {
            "translation": "沙发旁边放着一张小桌子。"
          },
          "en": {
            "translation": "A small table stands beside the sofa."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Beside means side-by-side and close. Learners often mix it with next to, by, and near. The key is whether you mean strict side relation or only general proximity.",
    "differences": [
      {
        "term": "next to",
        "description": "Next to is the tightest adjacency. Beside is also close, but can be slightly less strict.",
        "examples": [
          {
            "term": "next to",
            "sentence": "She sat next to me on the bus."
          },
          {
            "term": "beside",
            "sentence": "She sat beside me during the meeting."
          }
        ]
      },
      {
        "term": "by",
        "description": "By is broader and more conversational. Beside is more specific for side relation.",
        "examples": [
          {
            "term": "by",
            "sentence": "Wait by the door."
          },
          {
            "term": "beside",
            "sentence": "A lamp is beside the bed."
          }
        ]
      },
      {
        "term": "near",
        "description": "Near marks short distance only. Beside adds side-by-side orientation.",
        "examples": [
          {
            "term": "near",
            "sentence": "There is a cafe near the station."
          },
          {
            "term": "beside",
            "sentence": "There is a bench beside the station gate."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "People and Position",
      "items": [
        "sit beside me",
        "stand beside her",
        "walk beside him",
        "kneel beside the bed",
        "wait beside the door",
        "stay beside your child"
      ]
    },
    {
      "title": "Objects and Places",
      "items": [
        "beside the window",
        "beside the sofa",
        "beside the road",
        "beside the river",
        "beside the desk",
        "beside the gate"
      ]
    },
    {
      "title": "High-frequency Chunks",
      "items": [
        "right beside",
        "sit beside each other",
        "park beside the curb",
        "place it beside",
        "live beside the park",
        "work beside experienced teachers"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The cafe is beside the station. (when you only mean general proximity)",
      "correct": "The cafe is near the station.",
      "reason": "Use near for broad proximity; beside implies side relation."
    },
    {
      "wrong": "Put the cup beside the table. (when you mean on the surface)",
      "correct": "Put the cup on the table.",
      "reason": "Beside means at the side, not on the surface."
    },
    {
      "wrong": "He sat near me in a tight seating row.",
      "correct": "He sat beside me.",
      "reason": "For clear side-by-side adjacency, beside/next to is stronger than near."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: Please sit ___ me so we can read together.",
      "options": [
        "beside",
        "on",
        "under"
      ],
      "answer": "beside",
      "explanation": "Beside is used for side-by-side seating."
    },
    {
      "prompt": "Choose the correct preposition: The lamp is ___ the bed, not on it.",
      "options": [
        "beside",
        "on",
        "inside"
      ],
      "answer": "beside",
      "explanation": "The lamp is at the side of the bed, not on the surface."
    },
    {
      "prompt": "Choose the better word: The supermarket is ___ the station (general proximity only).",
      "options": [
        "near",
        "beside",
        "on"
      ],
      "answer": "near",
      "explanation": "Use near for broad proximity; beside implies stronger side relation."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of beside?",
      "answer": "Beside means at the side of something, usually with close side-by-side relation."
    },
    {
      "question": "What is the difference between beside and next to?",
      "answer": "Both can mean nearby at the side. Next to is often the tightest adjacency; beside can be slightly less strict and more neutral in tone."
    },
    {
      "question": "How is beside different from near?",
      "answer": "Near means close in distance only. Beside adds side orientation and clearer adjacency."
    },
    {
      "question": "How is beside different from by?",
      "answer": "By is broader and very conversational. Beside is more specific for side-by-side spatial relation."
    },
    {
      "question": "Can beside be used for time expressions?",
      "answer": "Not typically. For time, use prepositions such as at, in, on, and by."
    },
    {
      "question": "What is a common learner mistake with beside?",
      "answer": "Using beside for surface contact (should be on) or for broad proximity without side relation (often near)."
    },
    {
      "question": "What collocations should beginners memorize first?",
      "answer": "Useful starters: sit beside me, beside the window, beside the road, right beside."
    },
    {
      "question": "What is a 30-second memory rule for beside?",
      "answer": "Ask one question: Is it side-by-side and close? If yes, choose beside. If it is only nearby, use near."
    }
  ]
};

export default content;
