import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "从……上脱离/离开表面",
  "tips": [
    "强调离开表面，不再接触。",
    "与 on 相对。"
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
    "summary": "off 强调“从表面或附着状态脱离”，学习时要和近义动态介词区分路径关系。",
    "differences": [
      {
        "term": "on",
        "description": "off 更强调“从表面或附着状态脱离”；on 常表示不同路径关系。",
        "examples": [
          {
            "term": "on",
            "sentence": "on the route",
            "translation": "示例表达：on the route"
          },
          {
            "term": "off",
            "sentence": "off the table",
            "translation": "示例表达：off the table"
          }
        ]
      },
      {
        "term": "out of",
        "description": "off 的重点是“从表面或附着状态脱离”；out of 的运动方向或终点不同。",
        "examples": [
          {
            "term": "out of",
            "sentence": "out of the room",
            "translation": "示例表达：out of the room"
          },
          {
            "term": "off",
            "sentence": "off the table",
            "translation": "示例表达：off the table"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "离开表面类",
      "items": [
        {
          "phrase": "off the table",
          "meaning": "离开表面：off the table"
        },
        {
          "phrase": "off the shelf",
          "meaning": "离开表面：off the shelf"
        },
        {
          "phrase": "off the bed",
          "meaning": "离开表面：off the bed"
        },
        {
          "phrase": "off the roof",
          "meaning": "离开表面：off the roof"
        },
        {
          "phrase": "off the platform",
          "meaning": "离开表面：off the platform"
        },
        {
          "phrase": "off the stage",
          "meaning": "离开表面：off the stage"
        }
      ]
    },
    {
      "title": "交通离开类",
      "items": [
        {
          "phrase": "off the bus",
          "meaning": "交通离开：off the bus"
        },
        {
          "phrase": "off the train",
          "meaning": "交通离开：off the train"
        },
        {
          "phrase": "off the bike",
          "meaning": "交通离开：off the bike"
        },
        {
          "phrase": "off the plane",
          "meaning": "交通离开：off the plane"
        },
        {
          "phrase": "off the boat",
          "meaning": "交通离开：off the boat"
        },
        {
          "phrase": "off the elevator",
          "meaning": "交通离开：off the elevator"
        }
      ]
    },
    {
      "title": "状态切换类",
      "items": [
        {
          "phrase": "off schedule",
          "meaning": "状态切换：off schedule"
        },
        {
          "phrase": "off duty",
          "meaning": "状态切换：off duty"
        },
        {
          "phrase": "off balance",
          "meaning": "状态切换：off balance"
        },
        {
          "phrase": "off track",
          "meaning": "状态切换：off track"
        },
        {
          "phrase": "off line",
          "meaning": "状态切换：off line"
        },
        {
          "phrase": "off guard",
          "meaning": "状态切换：off guard"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved on the table.",
      "correct": "The marker moved off the table.",
      "reason": "这里要表达“从表面或附着状态脱离”，应用 off，而不是 on。"
    },
    {
      "wrong": "The ball rolled out of the shelf.",
      "correct": "The ball rolled off the shelf.",
      "reason": "off 更符合该路径关系；out of 会改变运动语义。"
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
      "explanation": "off 在这里表达“从表面或附着状态脱离”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the shelf.",
      "options": [
        "off",
        "on",
        "out of"
      ],
      "answer": "off",
      "explanation": "off 在这里表达“从表面或附着状态脱离”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the bus.",
      "options": [
        "off",
        "on",
        "out of"
      ],
      "answer": "off",
      "explanation": "off 在这里表达“从表面或附着状态脱离”，因此最准确。"
    }
  ]
};

export default content;
