import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "down; downward or below",
  "tips": [
    "Direction or position downward.",
    "Contrast with up."
  ],
  "examples": [
    {
      "en": "The apple falls down.",
      "i18n": {
        "zh-CN": {
          "translation": "苹果向下掉。"
        },
        "en": {
          "translation": "The apple falls down."
        }
      }
    },
    {
      "en": "He went down the stairs.",
      "i18n": {
        "zh-CN": {
          "translation": "他下楼了。"
        },
        "en": {
          "translation": "He went down the stairs."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The apple falls down.",
        "i18n": {
          "zh-CN": {
            "translation": "苹果向下掉。"
          },
          "en": {
            "translation": "The apple falls down."
          }
        }
      },
      {
        "en": "He went down the stairs.",
        "i18n": {
          "zh-CN": {
            "translation": "他下楼了。"
          },
          "en": {
            "translation": "He went down the stairs."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move down the stairs.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 down the stairs 地移动。"
          },
          "en": {
            "translation": "Watch the marker move down the stairs."
          }
        }
      },
      {
        "en": "Then trace a second path down the road.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 down the road 的路径。"
          },
          "en": {
            "translation": "Then trace a second path down the road."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "down mainly shows movement toward a lower position; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "up",
        "description": "down focuses on movement toward a lower position, while up usually marks a different path relation.",
        "examples": [
          {
            "term": "up",
            "sentence": "up the stairs"
          },
          {
            "term": "down",
            "sentence": "down the stairs"
          }
        ]
      },
      {
        "term": "off",
        "description": "down highlights movement toward a lower position; off often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "off",
            "sentence": "off the table"
          },
          {
            "term": "down",
            "sentence": "down the stairs"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Vertical descent",
      "items": [
        "down the stairs",
        "down the ladder",
        "down the hill",
        "down the ramp",
        "down the escalator",
        "down the slope"
      ]
    },
    {
      "title": "Route descent",
      "items": [
        "down the road",
        "down the street",
        "down the river",
        "down the path",
        "down the valley",
        "down the corridor"
      ]
    },
    {
      "title": "Chart movement",
      "items": [
        "down the chart",
        "down the ranking",
        "down the list",
        "down the timeline",
        "down the page",
        "down the screen"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved up the stairs.",
      "correct": "The marker moved down the stairs.",
      "reason": "Use down for movement toward a lower position; up changes the path relation."
    },
    {
      "wrong": "The ball rolled off the ladder.",
      "correct": "The ball rolled down the ladder.",
      "reason": "down matches the intended motion; off shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the stairs.",
      "options": [
        "down",
        "up",
        "off"
      ],
      "answer": "down",
      "explanation": "Choose down because this sentence needs movement toward a lower position."
    },
    {
      "prompt": "Choose the correct preposition: ___ the ladder.",
      "options": [
        "down",
        "up",
        "off"
      ],
      "answer": "down",
      "explanation": "Choose down because this sentence needs movement toward a lower position."
    },
    {
      "prompt": "Choose the correct preposition: ___ the road.",
      "options": [
        "down",
        "up",
        "off"
      ],
      "answer": "down",
      "explanation": "Choose down because this sentence needs movement toward a lower position."
    }
  ]
};

export default content;
