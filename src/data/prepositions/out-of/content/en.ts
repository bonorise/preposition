import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "out of; moving outside",
  "tips": [
    "Movement from inside to outside.",
    "Leaving an interior space."
  ],
  "examples": [
    {
      "en": "The bird flew out of the cage.",
      "i18n": {
        "zh-CN": {
          "translation": "鸟飞出了笼子。"
        },
        "en": {
          "translation": "The bird flew out of the cage."
        }
      }
    },
    {
      "en": "Take the book out of the bag.",
      "i18n": {
        "zh-CN": {
          "translation": "把书从包里拿出来。"
        },
        "en": {
          "translation": "Take the book out of the bag."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The bird flew out of the cage.",
        "i18n": {
          "zh-CN": {
            "translation": "鸟飞出了笼子。"
          },
          "en": {
            "translation": "The bird flew out of the cage."
          }
        }
      },
      {
        "en": "Take the book out of the bag.",
        "i18n": {
          "zh-CN": {
            "translation": "把书从包里拿出来。"
          },
          "en": {
            "translation": "Take the book out of the bag."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move out of the room.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 out of the room 地移动。"
          },
          "en": {
            "translation": "Watch the marker move out of the room."
          }
        }
      },
      {
        "en": "Then trace a second path out of the box.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 out of the box 的路径。"
          },
          "en": {
            "translation": "Then trace a second path out of the box."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "out of mainly shows movement from inside to outside; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "from",
        "description": "out of focuses on movement from inside to outside, while from usually marks a different path relation.",
        "examples": [
          {
            "term": "from",
            "sentence": "from the route"
          },
          {
            "term": "out of",
            "sentence": "out of the room"
          }
        ]
      },
      {
        "term": "into",
        "description": "out of highlights movement from inside to outside; into often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "into",
            "sentence": "into the room"
          },
          {
            "term": "out of",
            "sentence": "out of the room"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Exiting spaces",
      "items": [
        "out of the room",
        "out of the house",
        "out of the classroom",
        "out of the building",
        "out of the office",
        "out of the hall"
      ]
    },
    {
      "title": "Exiting containers",
      "items": [
        "out of the box",
        "out of the bag",
        "out of the drawer",
        "out of the bottle",
        "out of the basket",
        "out of the car"
      ]
    },
    {
      "title": "State changes",
      "items": [
        "out of danger",
        "out of trouble",
        "out of control",
        "out of patience",
        "out of energy",
        "out of time"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved from the room.",
      "correct": "The marker moved out of the room.",
      "reason": "Use out of for movement from inside to outside; from changes the path relation."
    },
    {
      "wrong": "The ball rolled into the house.",
      "correct": "The ball rolled out of the house.",
      "reason": "out of matches the intended motion; into shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the room.",
      "options": [
        "out of",
        "from",
        "into"
      ],
      "answer": "out of",
      "explanation": "Choose out of because this sentence needs movement from inside to outside."
    },
    {
      "prompt": "Choose the correct preposition: ___ the house.",
      "options": [
        "out of",
        "from",
        "into"
      ],
      "answer": "out of",
      "explanation": "Choose out of because this sentence needs movement from inside to outside."
    },
    {
      "prompt": "Choose the correct preposition: ___ the box.",
      "options": [
        "out of",
        "from",
        "into"
      ],
      "answer": "out of",
      "explanation": "Choose out of because this sentence needs movement from inside to outside."
    }
  ]
};

export default content;
