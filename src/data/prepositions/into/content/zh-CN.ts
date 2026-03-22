import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "进入……里面（方向）",
  "tips": [
    "表示从外到内的运动方向。",
    "静态位置用 in。"
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
    "summary": "into 强调“从外到内进入目标空间”，学习时要和近义动态介词区分路径关系。",
    "differences": [
      {
        "term": "in",
        "description": "into 更强调“从外到内进入目标空间”；in 常表示不同路径关系。",
        "examples": [
          {
            "term": "in",
            "sentence": "in the route",
            "translation": "示例表达：in the route"
          },
          {
            "term": "into",
            "sentence": "into the room",
            "translation": "示例表达：into the room"
          }
        ]
      },
      {
        "term": "onto",
        "description": "into 的重点是“从外到内进入目标空间”；onto 的运动方向或终点不同。",
        "examples": [
          {
            "term": "onto",
            "sentence": "onto the table",
            "translation": "示例表达：onto the table"
          },
          {
            "term": "into",
            "sentence": "into the room",
            "translation": "示例表达：into the room"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "进入空间类",
      "items": [
        {
          "phrase": "into the room",
          "meaning": "进入空间：into the room"
        },
        {
          "phrase": "into the house",
          "meaning": "进入空间：into the house"
        },
        {
          "phrase": "into the classroom",
          "meaning": "进入空间：into the classroom"
        },
        {
          "phrase": "into the kitchen",
          "meaning": "进入空间：into the kitchen"
        },
        {
          "phrase": "into the office",
          "meaning": "进入空间：into the office"
        },
        {
          "phrase": "into the hall",
          "meaning": "进入空间：into the hall"
        }
      ]
    },
    {
      "title": "进入容器类",
      "items": [
        {
          "phrase": "into the box",
          "meaning": "进入容器：into the box"
        },
        {
          "phrase": "into the bag",
          "meaning": "进入容器：into the bag"
        },
        {
          "phrase": "into the bottle",
          "meaning": "进入容器：into the bottle"
        },
        {
          "phrase": "into the drawer",
          "meaning": "进入容器：into the drawer"
        },
        {
          "phrase": "into the basket",
          "meaning": "进入容器：into the basket"
        },
        {
          "phrase": "into the pocket",
          "meaning": "进入容器：into the pocket"
        }
      ]
    },
    {
      "title": "抽象转变类",
      "items": [
        {
          "phrase": "into focus",
          "meaning": "抽象转变：into focus"
        },
        {
          "phrase": "into detail",
          "meaning": "抽象转变：into detail"
        },
        {
          "phrase": "into action",
          "meaning": "抽象转变：into action"
        },
        {
          "phrase": "into use",
          "meaning": "抽象转变：into use"
        },
        {
          "phrase": "into view",
          "meaning": "抽象转变：into view"
        },
        {
          "phrase": "into trouble",
          "meaning": "抽象转变：into trouble"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved in the room.",
      "correct": "The marker moved into the room.",
      "reason": "这里要表达“从外到内进入目标空间”，应用 into，而不是 in。"
    },
    {
      "wrong": "The ball rolled onto the house.",
      "correct": "The ball rolled into the house.",
      "reason": "into 更符合该路径关系；onto 会改变运动语义。"
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
      "explanation": "into 在这里表达“从外到内进入目标空间”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the house.",
      "options": [
        "into",
        "in",
        "onto"
      ],
      "answer": "into",
      "explanation": "into 在这里表达“从外到内进入目标空间”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the box.",
      "options": [
        "into",
        "in",
        "onto"
      ],
      "answer": "into",
      "explanation": "into 在这里表达“从外到内进入目标空间”，因此最准确。"
    }
  ]
};

export default content;
