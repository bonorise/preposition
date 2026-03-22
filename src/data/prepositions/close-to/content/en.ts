import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "very near; at a short distance from",
  "tips": [
    "Close to emphasizes very short distance, often stronger than near.",
    "For strict adjacency (side-by-side), next to / beside is clearer.",
    "The common pattern is close to + noun/pronoun/gerund."
  ],
  "examples": [
    {
      "en": "The lamp is close to the bed.",
      "i18n": {
        "zh-CN": {
          "translation": "灯离床很近。"
        },
        "en": {
          "translation": "The lamp is close to the bed."
        }
      }
    },
    {
      "en": "We live close to the subway.",
      "i18n": {
        "zh-CN": {
          "translation": "我们住得离地铁很近。"
        },
        "en": {
          "translation": "We live close to the subway."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Stay close to the wall.",
        "i18n": {
          "zh-CN": {
            "translation": "靠墙走（离墙近点）。"
          },
          "en": {
            "translation": "Stay close to the wall."
          }
        }
      },
      {
        "en": "We sat close to the stage.",
        "i18n": {
          "zh-CN": {
            "translation": "我们坐得离舞台很近。"
          },
          "en": {
            "translation": "We sat close to the stage."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Close to emphasizes very short distance. Near is broader. Next to/beside is for strict adjacency. Far from is the opposite.",
    "differences": [
      {
        "term": "near",
        "description": "Near means generally close; close to often sounds stronger for very short distance.",
        "examples": [
          {
            "term": "near",
            "sentence": "We live near the subway."
          },
          {
            "term": "close to",
            "sentence": "We live close to the subway entrance."
          }
        ]
      },
      {
        "term": "next to",
        "description": "Next to signals immediate adjacency. Close to is about distance and can allow some gap and different directions.",
        "examples": [
          {
            "term": "close to",
            "sentence": "Sit close to me."
          },
          {
            "term": "next to",
            "sentence": "Sit next to me."
          }
        ]
      },
      {
        "term": "far from",
        "description": "Far from is the opposite: large distance.",
        "examples": [
          {
            "term": "close to",
            "sentence": "The hotel is close to the beach."
          },
          {
            "term": "far from",
            "sentence": "The hotel is far from the beach."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Places (very near)",
      "items": [
        "close to the station",
        "close to the airport",
        "close to the city center",
        "close to the subway",
        "close to the beach",
        "close to home"
      ]
    },
    {
      "title": "Objects (very close)",
      "items": [
        "close to the door",
        "close to the window",
        "close to the wall",
        "close to the edge",
        "close to the screen",
        "close to the stage"
      ]
    },
    {
      "title": "Approximation (almost)",
      "items": [
        "close to 100",
        "close to midnight",
        "close to the end",
        "close to perfect",
        "close to finishing",
        "close to zero"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "My house is close the station.",
      "correct": "My house is close to the station.",
      "reason": "For distance, the common pattern is close to + noun."
    },
    {
      "wrong": "Please sit close to me. (when side-by-side adjacency is required)",
      "correct": "Please sit next to me.",
      "reason": "Next to/beside is clearer for strict adjacency; close to is distance-focused."
    },
    {
      "wrong": "I'm close to finish the report.",
      "correct": "I'm close to finishing the report.",
      "reason": "Close to commonly takes a noun or gerund (-ing), not a bare verb."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: Our hotel is ___ the beach (a 5-minute walk).",
      "options": [
        "close to",
        "far from",
        "under"
      ],
      "answer": "close to",
      "explanation": "Close to emphasizes very short distance."
    },
    {
      "prompt": "Choose the more natural option: Please sit ___ me so we can share this book.",
      "options": [
        "next to",
        "close to",
        "near"
      ],
      "answer": "next to",
      "explanation": "For strict side-by-side adjacency, next to is clearer than close to."
    },
    {
      "prompt": "Choose the correct phrase: The price is ___ $50 (about $50).",
      "options": [
        "close to",
        "over",
        "between"
      ],
      "answer": "close to",
      "explanation": "Close to can express approximation for numbers and amounts."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of close to?",
      "answer": "Close to means very near. It emphasizes short distance and is often stronger than near."
    },
    {
      "question": "How is close to different from near?",
      "answer": "Near is broader and more neutral. Close to often highlights very short distance more strongly."
    },
    {
      "question": "How do I choose between close to and next to?",
      "answer": "Next to is strict adjacency (side-by-side). Close to is distance-focused and can be close in any direction, not necessarily adjacent."
    },
    {
      "question": "Do I need 'to' after close?",
      "answer": "For distance, yes in the common pattern: close to + noun (close to the station). Without to, close becomes a verb (close the station)."
    },
    {
      "question": "Can close to mean 'almost'?",
      "answer": "Yes. It is common for approximations: close to 100, close to $50, close to midnight."
    },
    {
      "question": "What are common grammar patterns with close to?",
      "answer": "Common patterns include close to + noun/pronoun (close to me) and close to + gerund (close to finishing)."
    },
    {
      "question": "What is a common learner mistake with close to?",
      "answer": "Common mistakes include dropping to and using close to where next to is needed for strict adjacency."
    },
    {
      "question": "What is a 30-second memory rule for close to?",
      "answer": "If you want to emphasize very short distance, use close to. If you need strict adjacency, use next to/beside. If you only mean generally close, use near."
    }
  ]
};

export default content;
