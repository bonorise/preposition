import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "into; moving inside",
  "tips": [
    "Movement from outside to inside.",
    "Use in for a static position."
  ],
  "examples": [
    {
      "en": "The ball rolls into the box.",
      "i18n": {
        "zh-CN": {
          "translation": "球滚进盒子里。"
        },
        "en": {
          "translation": "The ball rolls into the box."
        }
      }
    },
    {
      "en": "She went into the room.",
      "i18n": {
        "zh-CN": {
          "translation": "她走进房间。"
        },
        "en": {
          "translation": "She went into the room."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The ball rolls into the box.",
        "i18n": {
          "zh-CN": {
            "translation": "球滚进盒子里。"
          },
          "en": {
            "translation": "The ball rolls into the box."
          }
        }
      },
      {
        "en": "She went into the room.",
        "i18n": {
          "zh-CN": {
            "translation": "她走进房间。"
          },
          "en": {
            "translation": "She went into the room."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move into the room.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 into the room 地移动。"
          },
          "en": {
            "translation": "Watch the marker move into the room."
          }
        }
      },
      {
        "en": "Then trace a second path into the box.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 into the box 的路径。"
          },
          "en": {
            "translation": "Then trace a second path into the box."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "into mainly shows movement from outside to inside; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "in",
        "description": "into focuses on movement from outside to inside, while in usually marks a different path relation.",
        "examples": [
          {
            "term": "in",
            "sentence": "in the route"
          },
          {
            "term": "into",
            "sentence": "into the room"
          }
        ]
      },
      {
        "term": "onto",
        "description": "into highlights movement from outside to inside; onto often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "onto",
            "sentence": "onto the table"
          },
          {
            "term": "into",
            "sentence": "into the room"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Entering spaces",
      "items": [
        "into the room",
        "into the house",
        "into the classroom",
        "into the kitchen",
        "into the office",
        "into the hall"
      ]
    },
    {
      "title": "Entering containers",
      "items": [
        "into the box",
        "into the bag",
        "into the bottle",
        "into the drawer",
        "into the basket",
        "into the pocket"
      ]
    },
    {
      "title": "Abstract transition",
      "items": [
        "into focus",
        "into detail",
        "into action",
        "into use",
        "into view",
        "into trouble"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved in the room.",
      "correct": "The marker moved into the room.",
      "reason": "Use into for movement from outside to inside; in changes the path relation."
    },
    {
      "wrong": "The ball rolled onto the house.",
      "correct": "The ball rolled into the house.",
      "reason": "into matches the intended motion; onto shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the room.",
      "options": [
        "into",
        "in",
        "onto"
      ],
      "answer": "into",
      "explanation": "Choose into because this sentence needs movement from outside to inside."
    },
    {
      "prompt": "Choose the correct preposition: ___ the house.",
      "options": [
        "into",
        "in",
        "onto"
      ],
      "answer": "into",
      "explanation": "Choose into because this sentence needs movement from outside to inside."
    },
    {
      "prompt": "Choose the correct preposition: ___ the box.",
      "options": [
        "into",
        "in",
        "onto"
      ],
      "answer": "into",
      "explanation": "Choose into because this sentence needs movement from outside to inside."
    }
  ]
};

export default content;
