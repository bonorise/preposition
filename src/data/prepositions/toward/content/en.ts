import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "toward; in the direction of",
  "tips": [
    "Direction, not necessarily reaching.",
    "Weaker than to."
  ],
  "examples": [
    {
      "en": "She ran toward the gate.",
      "i18n": {
        "zh-CN": {
          "translation": "她朝门口跑去。"
        },
        "en": {
          "translation": "She ran toward the gate."
        }
      }
    },
    {
      "en": "The cat moved toward the window.",
      "i18n": {
        "zh-CN": {
          "translation": "猫朝窗户靠近。"
        },
        "en": {
          "translation": "The cat moved toward the window."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "She ran toward the gate.",
        "i18n": {
          "zh-CN": {
            "translation": "她朝门口跑去。"
          },
          "en": {
            "translation": "She ran toward the gate."
          }
        }
      },
      {
        "en": "The cat moved toward the window.",
        "i18n": {
          "zh-CN": {
            "translation": "猫朝窗户靠近。"
          },
          "en": {
            "translation": "The cat moved toward the window."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move toward the door.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 toward the door 地移动。"
          },
          "en": {
            "translation": "Watch the marker move toward the door."
          }
        }
      },
      {
        "en": "Then trace a second path toward the goal.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 toward the goal 的路径。"
          },
          "en": {
            "translation": "Then trace a second path toward the goal."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "toward mainly shows movement in the direction of a target; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "to",
        "description": "toward focuses on movement in the direction of a target, while to usually marks a different path relation.",
        "examples": [
          {
            "term": "to",
            "sentence": "to the route"
          },
          {
            "term": "toward",
            "sentence": "toward the door"
          }
        ]
      },
      {
        "term": "past",
        "description": "toward highlights movement in the direction of a target; past often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "past",
            "sentence": "past the route"
          },
          {
            "term": "toward",
            "sentence": "toward the door"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Directional targets",
      "items": [
        "toward the door",
        "toward the gate",
        "toward the station",
        "toward the bridge",
        "toward the exit",
        "toward the window"
      ]
    },
    {
      "title": "Goal progress",
      "items": [
        "toward the goal",
        "toward the finish line",
        "toward the target",
        "toward the deadline",
        "toward the answer",
        "toward the solution"
      ]
    },
    {
      "title": "Route orientation",
      "items": [
        "toward the north",
        "toward downtown",
        "toward the coast",
        "toward the checkpoint",
        "toward the main road",
        "toward the city center"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved to the door.",
      "correct": "The marker moved toward the door.",
      "reason": "Use toward for movement in the direction of a target; to changes the path relation."
    },
    {
      "wrong": "The ball rolled past the gate.",
      "correct": "The ball rolled toward the gate.",
      "reason": "toward matches the intended motion; past shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the door.",
      "options": [
        "toward",
        "to",
        "past"
      ],
      "answer": "toward",
      "explanation": "Choose toward because this sentence needs movement in the direction of a target."
    },
    {
      "prompt": "Choose the correct preposition: ___ the gate.",
      "options": [
        "toward",
        "to",
        "past"
      ],
      "answer": "toward",
      "explanation": "Choose toward because this sentence needs movement in the direction of a target."
    },
    {
      "prompt": "Choose the correct preposition: ___ the goal.",
      "options": [
        "toward",
        "to",
        "past"
      ],
      "answer": "toward",
      "explanation": "Choose toward because this sentence needs movement in the direction of a target."
    }
  ]
};

export default content;
