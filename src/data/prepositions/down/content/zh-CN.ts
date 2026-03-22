import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "向下/在下方",
  "tips": [
    "强调向下的方向或位置。",
    "可与 up 对比。"
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
    "summary": "down 强调“朝更低位置向下移动”，学习时要和近义动态介词区分路径关系。",
    "differences": [
      {
        "term": "up",
        "description": "down 更强调“朝更低位置向下移动”；up 常表示不同路径关系。",
        "examples": [
          {
            "term": "up",
            "sentence": "up the stairs",
            "translation": "示例表达：up the stairs"
          },
          {
            "term": "down",
            "sentence": "down the stairs",
            "translation": "示例表达：down the stairs"
          }
        ]
      },
      {
        "term": "off",
        "description": "down 的重点是“朝更低位置向下移动”；off 的运动方向或终点不同。",
        "examples": [
          {
            "term": "off",
            "sentence": "off the table",
            "translation": "示例表达：off the table"
          },
          {
            "term": "down",
            "sentence": "down the stairs",
            "translation": "示例表达：down the stairs"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "垂直下降类",
      "items": [
        {
          "phrase": "down the stairs",
          "meaning": "垂直下降：down the stairs"
        },
        {
          "phrase": "down the ladder",
          "meaning": "垂直下降：down the ladder"
        },
        {
          "phrase": "down the hill",
          "meaning": "垂直下降：down the hill"
        },
        {
          "phrase": "down the ramp",
          "meaning": "垂直下降：down the ramp"
        },
        {
          "phrase": "down the escalator",
          "meaning": "垂直下降：down the escalator"
        },
        {
          "phrase": "down the slope",
          "meaning": "垂直下降：down the slope"
        }
      ]
    },
    {
      "title": "路线下行类",
      "items": [
        {
          "phrase": "down the road",
          "meaning": "路线下行：down the road"
        },
        {
          "phrase": "down the street",
          "meaning": "路线下行：down the street"
        },
        {
          "phrase": "down the river",
          "meaning": "路线下行：down the river"
        },
        {
          "phrase": "down the path",
          "meaning": "路线下行：down the path"
        },
        {
          "phrase": "down the valley",
          "meaning": "路线下行：down the valley"
        },
        {
          "phrase": "down the corridor",
          "meaning": "路线下行：down the corridor"
        }
      ]
    },
    {
      "title": "图表下降类",
      "items": [
        {
          "phrase": "down the chart",
          "meaning": "图表下降：down the chart"
        },
        {
          "phrase": "down the ranking",
          "meaning": "图表下降：down the ranking"
        },
        {
          "phrase": "down the list",
          "meaning": "图表下降：down the list"
        },
        {
          "phrase": "down the timeline",
          "meaning": "图表下降：down the timeline"
        },
        {
          "phrase": "down the page",
          "meaning": "图表下降：down the page"
        },
        {
          "phrase": "down the screen",
          "meaning": "图表下降：down the screen"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved up the stairs.",
      "correct": "The marker moved down the stairs.",
      "reason": "这里要表达“朝更低位置向下移动”，应用 down，而不是 up。"
    },
    {
      "wrong": "The ball rolled off the ladder.",
      "correct": "The ball rolled down the ladder.",
      "reason": "down 更符合该路径关系；off 会改变运动语义。"
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
      "explanation": "down 在这里表达“朝更低位置向下移动”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the ladder.",
      "options": [
        "down",
        "up",
        "off"
      ],
      "answer": "down",
      "explanation": "down 在这里表达“朝更低位置向下移动”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the road.",
      "options": [
        "down",
        "up",
        "off"
      ],
      "answer": "down",
      "explanation": "down 在这里表达“朝更低位置向下移动”，因此最准确。"
    }
  ]
};

export default content;
