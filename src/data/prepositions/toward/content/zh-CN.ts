import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "朝向……",
  "tips": [
    "强调方向，不一定到达。",
    "比 to 更弱。"
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
    "summary": "toward 强调“朝目标方向接近”，学习时要和近义动态介词区分路径关系。",
    "differences": [
      {
        "term": "to",
        "description": "toward 更强调“朝目标方向接近”；to 常表示不同路径关系。",
        "examples": [
          {
            "term": "to",
            "sentence": "to the route",
            "translation": "示例表达：to the route"
          },
          {
            "term": "toward",
            "sentence": "toward the door",
            "translation": "示例表达：toward the door"
          }
        ]
      },
      {
        "term": "past",
        "description": "toward 的重点是“朝目标方向接近”；past 的运动方向或终点不同。",
        "examples": [
          {
            "term": "past",
            "sentence": "past the route",
            "translation": "示例表达：past the route"
          },
          {
            "term": "toward",
            "sentence": "toward the door",
            "translation": "示例表达：toward the door"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "方向目标类",
      "items": [
        {
          "phrase": "toward the door",
          "meaning": "方向目标：toward the door"
        },
        {
          "phrase": "toward the gate",
          "meaning": "方向目标：toward the gate"
        },
        {
          "phrase": "toward the station",
          "meaning": "方向目标：toward the station"
        },
        {
          "phrase": "toward the bridge",
          "meaning": "方向目标：toward the bridge"
        },
        {
          "phrase": "toward the exit",
          "meaning": "方向目标：toward the exit"
        },
        {
          "phrase": "toward the window",
          "meaning": "方向目标：toward the window"
        }
      ]
    },
    {
      "title": "目标推进类",
      "items": [
        {
          "phrase": "toward the goal",
          "meaning": "目标推进：toward the goal"
        },
        {
          "phrase": "toward the finish line",
          "meaning": "目标推进：toward the finish line"
        },
        {
          "phrase": "toward the target",
          "meaning": "目标推进：toward the target"
        },
        {
          "phrase": "toward the deadline",
          "meaning": "目标推进：toward the deadline"
        },
        {
          "phrase": "toward the answer",
          "meaning": "目标推进：toward the answer"
        },
        {
          "phrase": "toward the solution",
          "meaning": "目标推进：toward the solution"
        }
      ]
    },
    {
      "title": "路线指向类",
      "items": [
        {
          "phrase": "toward the north",
          "meaning": "路线指向：toward the north"
        },
        {
          "phrase": "toward downtown",
          "meaning": "路线指向：toward downtown"
        },
        {
          "phrase": "toward the coast",
          "meaning": "路线指向：toward the coast"
        },
        {
          "phrase": "toward the checkpoint",
          "meaning": "路线指向：toward the checkpoint"
        },
        {
          "phrase": "toward the main road",
          "meaning": "路线指向：toward the main road"
        },
        {
          "phrase": "toward the city center",
          "meaning": "路线指向：toward the city center"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved to the door.",
      "correct": "The marker moved toward the door.",
      "reason": "这里要表达“朝目标方向接近”，应用 toward，而不是 to。"
    },
    {
      "wrong": "The ball rolled past the gate.",
      "correct": "The ball rolled toward the gate.",
      "reason": "toward 更符合该路径关系；past 会改变运动语义。"
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
      "explanation": "toward 在这里表达“朝目标方向接近”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the gate.",
      "options": [
        "toward",
        "to",
        "past"
      ],
      "answer": "toward",
      "explanation": "toward 在这里表达“朝目标方向接近”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the goal.",
      "options": [
        "toward",
        "to",
        "past"
      ],
      "answer": "toward",
      "explanation": "toward 在这里表达“朝目标方向接近”，因此最准确。"
    }
  ]
};

export default content;
