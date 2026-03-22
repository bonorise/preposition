import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "off; away from a surface",
  "tips": [
    "Separated from a surface.",
    "Opposite of on."
  ],
  "examples": [
    {
      "en": "The book fell off the table.",
      "i18n": {
        "zh-CN": {
          "translation": "书从桌子上掉下来了。"
        },
        "en": {
          "translation": "The book fell off the table."
        }
      }
    },
    {
      "en": "He jumped off the box.",
      "i18n": {
        "zh-CN": {
          "translation": "他从盒子上跳下来。"
        },
        "en": {
          "translation": "He jumped off the box."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The book fell off the table.",
        "i18n": {
          "zh-CN": {
            "translation": "书从桌子上掉下来了。"
          },
          "en": {
            "translation": "The book fell off the table."
          }
        }
      },
      {
        "en": "He jumped off the box.",
        "i18n": {
          "zh-CN": {
            "translation": "他从盒子上跳下来。"
          },
          "en": {
            "translation": "He jumped off the box."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move off the table.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 off the table 地移动。"
          },
          "en": {
            "translation": "Watch the marker move off the table."
          }
        }
      },
      {
        "en": "Then trace a second path off the bus.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 off the bus 的路径。"
          },
          "en": {
            "translation": "Then trace a second path off the bus."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "off mainly shows movement away from a surface or attachment; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "on",
        "description": "off focuses on movement away from a surface or attachment, while on usually marks a different path relation.",
        "examples": [
          {
            "term": "on",
            "sentence": "on the route"
          },
          {
            "term": "off",
            "sentence": "off the table"
          }
        ]
      },
      {
        "term": "out of",
        "description": "off highlights movement away from a surface or attachment; out of often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "out of",
            "sentence": "out of the room"
          },
          {
            "term": "off",
            "sentence": "off the table"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Leaving surfaces",
      "items": [
        "off the table",
        "off the shelf",
        "off the bed",
        "off the roof",
        "off the platform",
        "off the stage"
      ]
    },
    {
      "title": "Transport movement",
      "items": [
        "off the bus",
        "off the train",
        "off the bike",
        "off the plane",
        "off the boat",
        "off the elevator"
      ]
    },
    {
      "title": "State shifts",
      "items": [
        "off schedule",
        "off duty",
        "off balance",
        "off track",
        "off line",
        "off guard"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved on the table.",
      "correct": "The marker moved off the table.",
      "reason": "Use off for movement away from a surface or attachment; on changes the path relation."
    },
    {
      "wrong": "The ball rolled out of the shelf.",
      "correct": "The ball rolled off the shelf.",
      "reason": "off matches the intended motion; out of shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the table.",
      "options": [
        "off",
        "on",
        "out of"
      ],
      "answer": "off",
      "explanation": "Choose off because this sentence needs movement away from a surface or attachment."
    },
    {
      "prompt": "Choose the correct preposition: ___ the shelf.",
      "options": [
        "off",
        "on",
        "out of"
      ],
      "answer": "off",
      "explanation": "Choose off because this sentence needs movement away from a surface or attachment."
    },
    {
      "prompt": "Choose the correct preposition: ___ the bus.",
      "options": [
        "off",
        "on",
        "out of"
      ],
      "answer": "off",
      "explanation": "Choose off because this sentence needs movement away from a surface or attachment."
    }
  ]
};

export default content;
