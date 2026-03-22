import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "far from; distant from",
  "tips": [
    "A long distance away (far from the city, far from here).",
    "Opposite of near / close to.",
    "Common fixed phrase: \"far from perfect\" = not at all perfect (not spatial)."
  ],
  "examples": [
    {
      "en": "The village is far from the city.",
      "i18n": {
        "zh-CN": {
          "translation": "村子离城市很远。"
        },
        "en": {
          "translation": "The village is far from the city."
        }
      }
    },
    {
      "en": "His house is far from here.",
      "i18n": {
        "zh-CN": {
          "translation": "他的房子离这里很远。"
        },
        "en": {
          "translation": "His house is far from here."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The hotel is far from the beach.",
        "i18n": {
          "zh-CN": {
            "translation": "这家酒店离海滩很远。"
          },
          "en": {
            "translation": "The hotel is far from the beach."
          }
        }
      },
      {
        "en": "Our office is far from the station.",
        "i18n": {
          "zh-CN": {
            "translation": "我们办公室离车站很远。"
          },
          "en": {
            "translation": "Our office is far from the station."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Far from means a long distance away. It contrasts most often with near/close to. If you want a movement/direction idea (keep your distance), away from is common.",
    "differences": [
      {
        "term": "near",
        "description": "Near means close in distance; far from means a long distance away.",
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
      },
      {
        "term": "close to",
        "description": "Close to often emphasizes very short distance; far from emphasizes very long distance.",
        "examples": [
          {
            "term": "close to",
            "sentence": "We live close to the subway entrance."
          },
          {
            "term": "far from",
            "sentence": "We live far from the subway."
          }
        ]
      },
      {
        "term": "away from",
        "description": "Away from often carries a 'keep your distance / move away' feeling; far from is more of a static distance description.",
        "examples": [
          {
            "term": "away from",
            "sentence": "Please stand away from the edge."
          },
          {
            "term": "far from",
            "sentence": "The edge is far from here."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Places and distance",
      "items": [
        "far from the city",
        "far from here",
        "far from home",
        "far from the station",
        "far from the city center",
        "far from the beach"
      ]
    },
    {
      "title": "Patterns",
      "items": [
        "be far from",
        "live far from",
        "work far from",
        "far from any shops",
        "far from everything",
        "not far from"
      ]
    },
    {
      "title": "Fixed phrases (not mainly spatial)",
      "items": [
        "far from perfect",
        "far from ideal",
        "far from easy",
        "far from the truth",
        "far from certain",
        "far from finished"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The cafe is far from the street. (meaning: on the other side)",
      "correct": "The cafe is across the street / across from the school.",
      "reason": "Far from is about distance. Opposite/across is about the other side."
    },
    {
      "wrong": "He is far the station from here.",
      "correct": "The station is far from here.",
      "reason": "Use the common pattern: far from + place (The station is far from here)."
    },
    {
      "wrong": "Stand far from the edge! (as a safety instruction)",
      "correct": "Stand away from the edge.",
      "reason": "Away from is more natural for instructions about keeping distance."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The hotel is ___ the beach.",
      "options": [
        "far from",
        "near",
        "on"
      ],
      "answer": "far from",
      "explanation": "Far from means a long distance away."
    },
    {
      "prompt": "Choose the correct preposition: Please stand ___ the edge.",
      "options": [
        "away from",
        "far from",
        "between"
      ],
      "answer": "away from",
      "explanation": "Away from is more natural for keep-distance instructions."
    },
    {
      "prompt": "Choose the correct preposition: His answer is ___ the truth.",
      "options": [
        "far from",
        "near",
        "across"
      ],
      "answer": "far from",
      "explanation": "Far from the truth means \"not true at all\"."
    }
  ],
  "faq": [
    {
      "question": "What does \"far from\" mean?",
      "answer": "Far from means a long distance away: The village is far from the city."
    },
    {
      "question": "When should I use \"far from\"?",
      "answer": "Use far from when you simply describe long distance: far from here, far from home, far from the station."
    },
    {
      "question": "Far from vs near: what's the difference?",
      "answer": "Near means close; far from means a long distance away. Compare: The hotel is near the beach vs far from the beach."
    },
    {
      "question": "Far from vs close to: what's the difference?",
      "answer": "Close to often emphasizes very short distance; far from emphasizes very long distance."
    },
    {
      "question": "Far from vs away from: what's the difference?",
      "answer": "Away from often sounds more natural for instructions (Stand away from the edge). Far from is more like a static distance description (The edge is far from here)."
    },
    {
      "question": "What does \"far from perfect\" mean?",
      "answer": "It is a fixed phrase meaning not at all perfect: The plan is far from perfect."
    },
    {
      "question": "Far away vs far from?",
      "answer": "Far away can stand alone (It's far away). Far from commonly takes an object (far from home)."
    },
    {
      "question": "A 30-second memory rule for \"far from\"?",
      "answer": "Think in pairs: near/close to = close; far from = far. Then remember far from perfect = not perfect at all."
    }
  ]
};

export default content;
