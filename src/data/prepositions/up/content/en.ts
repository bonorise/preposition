import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "up; upward or above",
  "tips": [
    "Direction or position upward.",
    "Contrast with down."
  ],
  "examples": [
    {
      "en": "Look up at the sky.",
      "i18n": {
        "zh-CN": {
          "translation": "抬头看天空。"
        },
        "en": {
          "translation": "Look up at the sky."
        }
      }
    },
    {
      "en": "The balloon floats up.",
      "i18n": {
        "zh-CN": {
          "translation": "气球向上飘。"
        },
        "en": {
          "translation": "The balloon floats up."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Look up at the sky.",
        "i18n": {
          "zh-CN": {
            "translation": "抬头看天空。"
          },
          "en": {
            "translation": "Look up at the sky."
          }
        }
      },
      {
        "en": "The balloon floats up.",
        "i18n": {
          "zh-CN": {
            "translation": "气球向上飘。"
          },
          "en": {
            "translation": "The balloon floats up."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move up the stairs.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 up the stairs 地移动。"
          },
          "en": {
            "translation": "Watch the marker move up the stairs."
          }
        }
      },
      {
        "en": "Then trace a second path up the road.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 up the road 的路径。"
          },
          "en": {
            "translation": "Then trace a second path up the road."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "up mainly shows movement toward a higher position; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "down",
        "description": "up focuses on movement toward a higher position, while down usually marks a different path relation.",
        "examples": [
          {
            "term": "down",
            "sentence": "down the stairs"
          },
          {
            "term": "up",
            "sentence": "up the stairs"
          }
        ]
      },
      {
        "term": "onto",
        "description": "up highlights movement toward a higher position; onto often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "onto",
            "sentence": "onto the table"
          },
          {
            "term": "up",
            "sentence": "up the stairs"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Vertical paths",
      "items": [
        "up the stairs",
        "up the ladder",
        "up the hill",
        "up the ramp",
        "up the escalator",
        "up the slope"
      ]
    },
    {
      "title": "Route progress",
      "items": [
        "up the road",
        "up the street",
        "up the river",
        "up the path",
        "up the valley",
        "up the coast"
      ]
    },
    {
      "title": "Chart movement",
      "items": [
        "up the chart",
        "up the ranking",
        "up the list",
        "up the timeline",
        "up the page",
        "up the screen"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved down the stairs.",
      "correct": "The marker moved up the stairs.",
      "reason": "Use up for movement toward a higher position; down changes the path relation."
    },
    {
      "wrong": "The ball rolled onto the ladder.",
      "correct": "The ball rolled up the ladder.",
      "reason": "up matches the intended motion; onto shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the stairs.",
      "options": [
        "up",
        "down",
        "onto"
      ],
      "answer": "up",
      "explanation": "Choose up because this sentence needs movement toward a higher position."
    },
    {
      "prompt": "Choose the correct preposition: ___ the ladder.",
      "options": [
        "up",
        "down",
        "onto"
      ],
      "answer": "up",
      "explanation": "Choose up because this sentence needs movement toward a higher position."
    },
    {
      "prompt": "Choose the correct preposition: ___ the road.",
      "options": [
        "up",
        "down",
        "onto"
      ],
      "answer": "up",
      "explanation": "Choose up because this sentence needs movement toward a higher position."
    }
  ]
};

export default content;
