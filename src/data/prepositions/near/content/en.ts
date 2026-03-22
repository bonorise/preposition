import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "near; close in distance (not necessarily adjacent)",
  "tips": [
    "Near means close in distance, not necessarily side-by-side.",
    "For immediate adjacency, use next to / beside.",
    "For very short distance emphasis, close to is often stronger."
  ],
  "examples": [
    {
      "en": "The school is near the park.",
      "i18n": {
        "zh-CN": {
          "translation": "学校在公园附近。"
        },
        "en": {
          "translation": "The school is near the park."
        }
      }
    },
    {
      "en": "A shop is near the station.",
      "i18n": {
        "zh-CN": {
          "translation": "商店在车站附近。"
        },
        "en": {
          "translation": "A shop is near the station."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Meet me near the entrance.",
        "i18n": {
          "zh-CN": {
            "translation": "在入口附近见。"
          },
          "en": {
            "translation": "Meet me near the entrance."
          }
        }
      },
      {
        "en": "I live near the airport.",
        "i18n": {
          "zh-CN": {
            "translation": "我住在机场附近。"
          },
          "en": {
            "translation": "I live near the airport."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Near means close in distance and is less strict than next to/beside. For stronger closeness, close to is common; for the opposite, far from.",
    "differences": [
      {
        "term": "next to",
        "description": "Next to is immediate adjacency. Near is broad closeness and does not require side-by-side contact-level distance.",
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
        "term": "close to",
        "description": "Close to often emphasizes very short distance. Near is more neutral.",
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
        "term": "far from",
        "description": "Far from is the opposite of near: long distance.",
        "examples": [
          {
            "term": "near",
            "sentence": "The hotel is near the beach."
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
      "title": "Places and Facilities",
      "items": [
        "near the station",
        "near the airport",
        "near the entrance",
        "near the exit",
        "near my house",
        "near the city center"
      ]
    },
    {
      "title": "Nature and Landmarks",
      "items": [
        "near the beach",
        "near the river",
        "near the park",
        "near the lake",
        "near the mountain",
        "near the border"
      ]
    },
    {
      "title": "High-frequency Patterns",
      "items": [
        "near here",
        "near me",
        "somewhere near",
        "near the corner",
        "near the end of",
        "near midnight"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "Sit near me. (when you need side-by-side seating to share a book)",
      "correct": "Sit next to me.",
      "reason": "Use next to/beside for immediate adjacency; near can allow a gap."
    },
    {
      "wrong": "My home is near to the school.",
      "correct": "My home is near the school.",
      "reason": "As a preposition, near usually does not take to in modern everyday usage."
    },
    {
      "wrong": "Put the cup near the table. (when the cup is on the table)",
      "correct": "Put the cup on the table.",
      "reason": "Near means close by, not surface contact."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: There is a convenience store ___ my home (a 3-minute walk).",
      "options": [
        "near",
        "next to",
        "on"
      ],
      "answer": "near",
      "explanation": "Near is used for general closeness in distance."
    },
    {
      "prompt": "Choose the correct preposition: Please sit ___ me. We need to share this book.",
      "options": [
        "next to",
        "near",
        "under"
      ],
      "answer": "next to",
      "explanation": "When side-by-side adjacency is required, next to is clearer than near."
    },
    {
      "prompt": "Choose the better phrase: We live ___ the subway entrance (very close).",
      "options": [
        "close to",
        "near",
        "far from"
      ],
      "answer": "close to",
      "explanation": "Close to often emphasizes very short distance."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of near?",
      "answer": "Near means close in distance. It does not require immediate adjacency or a specific side orientation."
    },
    {
      "question": "How do I quickly choose between near and next to?",
      "answer": "Ask one question: Do you need direct adjacency (side-by-side, no gap)? If yes, use next to/beside. If you only mean close by, use near."
    },
    {
      "question": "What is the difference between near and close to?",
      "answer": "Close to often emphasizes very short distance. Near is more neutral and broad."
    },
    {
      "question": "How is near related to beside/by?",
      "answer": "Beside/by often suggests being at the side. Near focuses on distance only. If direction is not important, near is a safe choice."
    },
    {
      "question": "Do I need 'to' after near?",
      "answer": "In everyday modern usage, near usually works as near + noun (near the station). Near to exists but is less common for beginners."
    },
    {
      "question": "Can near be used for time?",
      "answer": "Yes. It can mean close to a time point or stage (near midnight, near the end of the month). Treat it as an extension after mastering space usage."
    },
    {
      "question": "What are common patterns with near?",
      "answer": "The main pattern is near + place/person (near the park, near me). Near here and somewhere near are also high-frequency."
    },
    {
      "question": "What is a common learner mistake with near?",
      "answer": "Using near when strict adjacency is needed (use next to) or when surface contact is intended (use on)."
    }
  ]
};

export default content;
