import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "onto; moving to a surface",
  "tips": [
    "Movement onto a surface.",
    "Use on for a static position."
  ],
  "examples": [
    {
      "en": "The cat jumped onto the chair.",
      "i18n": {
        "zh-CN": {
          "translation": "猫跳到椅子上。"
        },
        "en": {
          "translation": "The cat jumped onto the chair."
        }
      }
    },
    {
      "en": "He put the cup onto the table.",
      "i18n": {
        "zh-CN": {
          "translation": "他把杯子放到桌上。"
        },
        "en": {
          "translation": "He put the cup onto the table."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The cat jumped onto the chair.",
        "i18n": {
          "zh-CN": {
            "translation": "猫跳到椅子上。"
          },
          "en": {
            "translation": "The cat jumped onto the chair."
          }
        }
      },
      {
        "en": "He put the cup onto the table.",
        "i18n": {
          "zh-CN": {
            "translation": "他把杯子放到桌上。"
          },
          "en": {
            "translation": "He put the cup onto the table."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move onto the table.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 onto the table 地移动。"
          },
          "en": {
            "translation": "Watch the marker move onto the table."
          }
        }
      },
      {
        "en": "Then trace a second path onto the platform.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 onto the platform 的路径。"
          },
          "en": {
            "translation": "Then trace a second path onto the platform."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "onto mainly shows movement to a surface; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "on",
        "description": "onto focuses on movement to a surface, while on usually marks a different path relation.",
        "examples": [
          {
            "term": "on",
            "sentence": "on the route"
          },
          {
            "term": "onto",
            "sentence": "onto the table"
          }
        ]
      },
      {
        "term": "into",
        "description": "onto highlights movement to a surface; into often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "into",
            "sentence": "into the room"
          },
          {
            "term": "onto",
            "sentence": "onto the table"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Surface landing",
      "items": [
        "onto the table",
        "onto the bed",
        "onto the shelf",
        "onto the roof",
        "onto the floor",
        "onto the stage"
      ]
    },
    {
      "title": "Platform movement",
      "items": [
        "onto the platform",
        "onto the bridge",
        "onto the path",
        "onto the board",
        "onto the map",
        "onto the screen"
      ]
    },
    {
      "title": "Transport boarding",
      "items": [
        "onto the bus",
        "onto the train",
        "onto the boat",
        "onto the bike",
        "onto the elevator",
        "onto the escalator"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved on the table.",
      "correct": "The marker moved onto the table.",
      "reason": "Use onto for movement to a surface; on changes the path relation."
    },
    {
      "wrong": "The ball rolled into the bed.",
      "correct": "The ball rolled onto the bed.",
      "reason": "onto matches the intended motion; into shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the table.",
      "options": [
        "onto",
        "on",
        "into"
      ],
      "answer": "onto",
      "explanation": "Choose onto because this sentence needs movement to a surface."
    },
    {
      "prompt": "Choose the correct preposition: ___ the bed.",
      "options": [
        "onto",
        "on",
        "into"
      ],
      "answer": "onto",
      "explanation": "Choose onto because this sentence needs movement to a surface."
    },
    {
      "prompt": "Choose the correct preposition: ___ the platform.",
      "options": [
        "onto",
        "on",
        "into"
      ],
      "answer": "onto",
      "explanation": "Choose onto because this sentence needs movement to a surface."
    }
  ]
};

export default content;
