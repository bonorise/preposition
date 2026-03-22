import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "向上/在上方",
  "tips": [
    "强调向上的方向或位置。",
    "可与 down 对比。"
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
    "summary": "up 强调“朝更高位置向上移动”，学习时要和近义动态介词区分路径关系。",
    "differences": [
      {
        "term": "down",
        "description": "up 更强调“朝更高位置向上移动”；down 常表示不同路径关系。",
        "examples": [
          {
            "term": "down",
            "sentence": "down the stairs",
            "translation": "示例表达：down the stairs"
          },
          {
            "term": "up",
            "sentence": "up the stairs",
            "translation": "示例表达：up the stairs"
          }
        ]
      },
      {
        "term": "onto",
        "description": "up 的重点是“朝更高位置向上移动”；onto 的运动方向或终点不同。",
        "examples": [
          {
            "term": "onto",
            "sentence": "onto the table",
            "translation": "示例表达：onto the table"
          },
          {
            "term": "up",
            "sentence": "up the stairs",
            "translation": "示例表达：up the stairs"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "垂直上升类",
      "items": [
        {
          "phrase": "up the stairs",
          "meaning": "垂直上升：up the stairs"
        },
        {
          "phrase": "up the ladder",
          "meaning": "垂直上升：up the ladder"
        },
        {
          "phrase": "up the hill",
          "meaning": "垂直上升：up the hill"
        },
        {
          "phrase": "up the ramp",
          "meaning": "垂直上升：up the ramp"
        },
        {
          "phrase": "up the escalator",
          "meaning": "垂直上升：up the escalator"
        },
        {
          "phrase": "up the slope",
          "meaning": "垂直上升：up the slope"
        }
      ]
    },
    {
      "title": "路线推进类",
      "items": [
        {
          "phrase": "up the road",
          "meaning": "路线推进：up the road"
        },
        {
          "phrase": "up the street",
          "meaning": "路线推进：up the street"
        },
        {
          "phrase": "up the river",
          "meaning": "路线推进：up the river"
        },
        {
          "phrase": "up the path",
          "meaning": "路线推进：up the path"
        },
        {
          "phrase": "up the valley",
          "meaning": "路线推进：up the valley"
        },
        {
          "phrase": "up the coast",
          "meaning": "路线推进：up the coast"
        }
      ]
    },
    {
      "title": "图表上升类",
      "items": [
        {
          "phrase": "up the chart",
          "meaning": "图表上升：up the chart"
        },
        {
          "phrase": "up the ranking",
          "meaning": "图表上升：up the ranking"
        },
        {
          "phrase": "up the list",
          "meaning": "图表上升：up the list"
        },
        {
          "phrase": "up the timeline",
          "meaning": "图表上升：up the timeline"
        },
        {
          "phrase": "up the page",
          "meaning": "图表上升：up the page"
        },
        {
          "phrase": "up the screen",
          "meaning": "图表上升：up the screen"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved down the stairs.",
      "correct": "The marker moved up the stairs.",
      "reason": "这里要表达“朝更高位置向上移动”，应用 up，而不是 down。"
    },
    {
      "wrong": "The ball rolled onto the ladder.",
      "correct": "The ball rolled up the ladder.",
      "reason": "up 更符合该路径关系；onto 会改变运动语义。"
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
      "explanation": "up 在这里表达“朝更高位置向上移动”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the ladder.",
      "options": [
        "up",
        "down",
        "onto"
      ],
      "answer": "up",
      "explanation": "up 在这里表达“朝更高位置向上移动”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the road.",
      "options": [
        "up",
        "down",
        "onto"
      ],
      "answer": "up",
      "explanation": "up 在这里表达“朝更高位置向上移动”，因此最准确。"
    }
  ]
};

export default content;
