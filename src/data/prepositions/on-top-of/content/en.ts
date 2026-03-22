import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "on the highest surface of something, usually with contact",
  "tips": [
    "On top of emphasizes the very top position with contact.",
    "Use on for neutral surface contact when top emphasis is not needed.",
    "Use onto for movement to the top, not static position."
  ],
  "examples": [
    {
      "en": "The cat sits on top of the box.",
      "i18n": {
        "zh-CN": {
          "translation": "猫坐在盒子顶部。"
        },
        "en": {
          "translation": "The cat sits on top of the box."
        }
      }
    },
    {
      "en": "Put the lamp on top of the bookcase.",
      "i18n": {
        "zh-CN": {
          "translation": "把台灯放在书柜顶部。"
        },
        "en": {
          "translation": "Put the lamp on top of the bookcase."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The cat sits on top of the box.",
        "i18n": {
          "zh-CN": {
            "translation": "猫坐在盒子顶部。"
          },
          "en": {
            "translation": "The cat sits on top of the box."
          }
        }
      },
      {
        "en": "Put the lamp on top of the bookcase.",
        "i18n": {
          "zh-CN": {
            "translation": "把台灯放在书柜顶部。"
          },
          "en": {
            "translation": "Put the lamp on top of the bookcase."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "On top of means contact at the highest point. It is more specific than on, and it is not a movement preposition.",
    "differences": [
      {
        "term": "on",
        "description": "On is neutral surface contact. On top of highlights the very top position.",
        "examples": [
          {
            "term": "on",
            "sentence": "The keys are on the table."
          },
          {
            "term": "on top of",
            "sentence": "The toy is on top of the wardrobe."
          }
        ]
      },
      {
        "term": "onto",
        "description": "Onto expresses movement to the top; on top of expresses the final static position.",
        "examples": [
          {
            "term": "onto",
            "sentence": "The cat jumped onto the box."
          },
          {
            "term": "on top of",
            "sentence": "The cat is on top of the box."
          }
        ]
      },
      {
        "term": "over",
        "description": "Over can mean above or crossing without contact. On top of requires contact at the top surface.",
        "examples": [
          {
            "term": "over",
            "sentence": "A plane flew over the house."
          },
          {
            "term": "on top of",
            "sentence": "There is snow on top of the house."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Physical top position",
      "items": [
        "on top of the box",
        "on top of the shelf",
        "on top of the mountain",
        "on top of the fridge",
        "on top of the table",
        "on top of the building"
      ]
    },
    {
      "title": "Classroom high-frequency",
      "items": [
        "put it on top of",
        "stack on top of",
        "sit on top of",
        "stand on top of",
        "write on top of",
        "place on top of"
      ]
    },
    {
      "title": "Extended usage",
      "items": [
        "on top of that",
        "on top of everything",
        "on top of the list",
        "on top of the news",
        "stay on top of",
        "get on top of"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The cat is on the wardrobe. (when top emphasis matters)",
      "correct": "The cat is on top of the wardrobe.",
      "reason": "Use on top of when you want explicit topmost-position emphasis."
    },
    {
      "wrong": "The cat jumped on top of the box.",
      "correct": "The cat jumped onto the box.",
      "reason": "Jumped expresses movement, so onto is the better form."
    },
    {
      "wrong": "A plane flew on top of the city.",
      "correct": "A plane flew over the city.",
      "reason": "No contact is implied, so over is correct."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The vase is ___ the shelf.",
      "options": [
        "on top of",
        "onto",
        "over"
      ],
      "answer": "on top of",
      "explanation": "This is a static top position with clear top emphasis."
    },
    {
      "prompt": "Choose the correct preposition: The boy climbed ___ the wall.",
      "options": [
        "onto",
        "on top of",
        "under"
      ],
      "answer": "onto",
      "explanation": "Climbed shows motion to a destination, so onto fits better."
    },
    {
      "prompt": "Choose the correct preposition: ___ that, we need more time.",
      "options": [
        "On top of",
        "Inside",
        "Below"
      ],
      "answer": "On top of",
      "explanation": "On top of that is a common discourse connector."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of on top of?",
      "answer": "It means being in contact at the highest surface, with explicit top-position emphasis."
    },
    {
      "question": "What is the difference between on top of and on?",
      "answer": "On is neutral surface contact. On top of highlights the topmost location."
    },
    {
      "question": "How do I choose between on top of and onto?",
      "answer": "Use onto for movement to the top; use on top of for the final static position."
    },
    {
      "question": "How is on top of different from over?",
      "answer": "Over often has no contact and may express crossing. On top of requires contact on the top surface."
    },
    {
      "question": "Can on top of be used for time expressions?",
      "answer": "Not as a core time preposition. It is mainly a spatial phrase plus some discourse patterns."
    },
    {
      "question": "What is a common learner mistake with on top of?",
      "answer": "Learners often use on top of for motion (should be onto) or for no-contact scenes (should be over)."
    },
    {
      "question": "What collocations should beginners memorize first?",
      "answer": "Start with on top of the box, on top of the shelf, on top of that, and stay on top of."
    },
    {
      "question": "What is a 30-second memory rule for on top of?",
      "answer": "Ask one question: do I need 'topmost + contact' emphasis? If yes, choose on top of."
    }
  ]
};

export default content;
