import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "到……上面（方向）",
  "tips": [
    "表示向上、到表面的运动。",
    "静态位置用 on。"
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
    "summary": "onto 强调“移动并落到表面上”，学习时要和近义动态介词区分路径关系。",
    "differences": [
      {
        "term": "on",
        "description": "onto 更强调“移动并落到表面上”；on 常表示不同路径关系。",
        "examples": [
          {
            "term": "on",
            "sentence": "on the route",
            "translation": "示例表达：on the route"
          },
          {
            "term": "onto",
            "sentence": "onto the table",
            "translation": "示例表达：onto the table"
          }
        ]
      },
      {
        "term": "into",
        "description": "onto 的重点是“移动并落到表面上”；into 的运动方向或终点不同。",
        "examples": [
          {
            "term": "into",
            "sentence": "into the room",
            "translation": "示例表达：into the room"
          },
          {
            "term": "onto",
            "sentence": "onto the table",
            "translation": "示例表达：onto the table"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "落到表面类",
      "items": [
        {
          "phrase": "onto the table",
          "meaning": "落到表面：onto the table"
        },
        {
          "phrase": "onto the bed",
          "meaning": "落到表面：onto the bed"
        },
        {
          "phrase": "onto the shelf",
          "meaning": "落到表面：onto the shelf"
        },
        {
          "phrase": "onto the roof",
          "meaning": "落到表面：onto the roof"
        },
        {
          "phrase": "onto the floor",
          "meaning": "落到表面：onto the floor"
        },
        {
          "phrase": "onto the stage",
          "meaning": "落到表面：onto the stage"
        }
      ]
    },
    {
      "title": "平台移动类",
      "items": [
        {
          "phrase": "onto the platform",
          "meaning": "平台移动：onto the platform"
        },
        {
          "phrase": "onto the bridge",
          "meaning": "平台移动：onto the bridge"
        },
        {
          "phrase": "onto the path",
          "meaning": "平台移动：onto the path"
        },
        {
          "phrase": "onto the board",
          "meaning": "平台移动：onto the board"
        },
        {
          "phrase": "onto the map",
          "meaning": "平台移动：onto the map"
        },
        {
          "phrase": "onto the screen",
          "meaning": "平台移动：onto the screen"
        }
      ]
    },
    {
      "title": "交通登上类",
      "items": [
        {
          "phrase": "onto the bus",
          "meaning": "交通登上：onto the bus"
        },
        {
          "phrase": "onto the train",
          "meaning": "交通登上：onto the train"
        },
        {
          "phrase": "onto the boat",
          "meaning": "交通登上：onto the boat"
        },
        {
          "phrase": "onto the bike",
          "meaning": "交通登上：onto the bike"
        },
        {
          "phrase": "onto the elevator",
          "meaning": "交通登上：onto the elevator"
        },
        {
          "phrase": "onto the escalator",
          "meaning": "交通登上：onto the escalator"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved on the table.",
      "correct": "The marker moved onto the table.",
      "reason": "这里要表达“移动并落到表面上”，应用 onto，而不是 on。"
    },
    {
      "wrong": "The ball rolled into the bed.",
      "correct": "The ball rolled onto the bed.",
      "reason": "onto 更符合该路径关系；into 会改变运动语义。"
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
      "explanation": "onto 在这里表达“移动并落到表面上”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the bed.",
      "options": [
        "onto",
        "on",
        "into"
      ],
      "answer": "onto",
      "explanation": "onto 在这里表达“移动并落到表面上”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the platform.",
      "options": [
        "onto",
        "on",
        "into"
      ],
      "answer": "onto",
      "explanation": "onto 在这里表达“移动并落到表面上”，因此最准确。"
    }
  ]
};

export default content;
