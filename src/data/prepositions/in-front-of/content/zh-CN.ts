import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……前面（面对观察者）",
  "tips": [
    "通常指在外部的前方：in front of + 名词。",
    "若表示“在……里面的前部”，用 in the front of。",
    "若表示时间先后，用 before（不是 in front of）。"
  ],
  "examples": [
    {
      "en": "The ball is in front of the box.",
      "i18n": {
        "zh-CN": {
          "translation": "球在盒子前面（盒子外部）。"
        },
        "en": {
          "translation": "The ball is in front of the box."
        }
      }
    },
    {
      "en": "She stands in front of the mirror.",
      "i18n": {
        "zh-CN": {
          "translation": "她站在镜子前面（面对镜子）。"
        },
        "en": {
          "translation": "She stands in front of the mirror."
        }
      }
    }
  ],
  "comparison": {
    "summary": "in front of 表示“在……前面”（多指外部前方/视线前方）。不要和 in the front of（在……里面的前部）混淆；表示时间先后用 before。",
    "differences": [
      {
        "term": "in the front of（在里面靠前）",
        "description": "in front of 通常指在外部的前方；in the front of 指在内部的前部/靠前位置（车里/房间里）。",
        "examples": [
          {
            "term": "in the front of",
            "sentence": "I sat in the front of the bus.",
            "translation": "我坐在公交车的前面（车内靠前）。"
          },
          {
            "term": "in front of",
            "sentence": "We waited in front of the bus.",
            "translation": "我们在公交车前面等（车外）。"
          }
        ]
      },
      {
        "term": "before（时间先后）",
        "description": "表示“在……之前”的时间顺序，用 before；in front of 不用于时间先后关系。",
        "examples": [
          {
            "term": "before",
            "sentence": "Please finish your homework before dinner.",
            "translation": "请在晚饭前把作业写完。"
          },
          {
            "term": "in front of",
            "sentence": "The car is parked in front of the house.",
            "translation": "车停在房子前面（空间位置）。"
          }
        ]
      },
      {
        "term": "ahead of",
        "description": "ahead of 常表示“更靠前/领先”（队伍/路线/进度）；in front of 更像“正前方/面对”。",
        "examples": [
          {
            "term": "ahead of",
            "sentence": "He is ahead of me in line.",
            "translation": "他在队伍里排在我前面。"
          },
          {
            "term": "in front of",
            "sentence": "He is standing in front of me.",
            "translation": "他站在我前面（挡住视线）。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "地点（外部前方）",
      "items": [
        {
          "phrase": "in front of the house",
          "meaning": "在房子前面（外面）"
        },
        {
          "phrase": "in front of the school",
          "meaning": "在学校前面"
        },
        {
          "phrase": "in front of the store",
          "meaning": "在商店前面"
        },
        {
          "phrase": "in front of the door",
          "meaning": "在门前"
        },
        {
          "phrase": "in front of the building",
          "meaning": "在楼前"
        },
        {
          "phrase": "in front of the station",
          "meaning": "在车站前"
        }
      ]
    },
    {
      "title": "人群/注意力场景",
      "items": [
        {
          "phrase": "in front of the class",
          "meaning": "在全班面前"
        },
        {
          "phrase": "in front of the audience",
          "meaning": "在观众面前"
        },
        {
          "phrase": "in front of the camera",
          "meaning": "在镜头前"
        },
        {
          "phrase": "in front of the TV",
          "meaning": "在电视机前"
        },
        {
          "phrase": "in front of the screen",
          "meaning": "在屏幕前"
        },
        {
          "phrase": "in front of the crowd",
          "meaning": "在人群前"
        }
      ]
    },
    {
      "title": "常见动词搭配",
      "items": [
        {
          "phrase": "stand in front of",
          "meaning": "站在……前面"
        },
        {
          "phrase": "wait in front of",
          "meaning": "在……前面等"
        },
        {
          "phrase": "sit in front of",
          "meaning": "坐在……前面"
        },
        {
          "phrase": "park in front of",
          "meaning": "把车停在……前面"
        },
        {
          "phrase": "kneel in front of",
          "meaning": "跪在……面前"
        },
        {
          "phrase": "stop in front of",
          "meaning": "在……前停下"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "She stood in front the door.",
      "correct": "She stood in front of the door.",
      "reason": "固定搭配是 in front of + 名词，不能漏掉 of。"
    },
    {
      "wrong": "My bag is in front of the car. (inside)",
      "correct": "My bag is in the front of the car.",
      "reason": "如果你想表达“在车里前部（车内）”，用 in the front of；in front of 通常表示“在车外前方”。"
    },
    {
      "wrong": "Please arrive in front of the meeting.",
      "correct": "Please arrive before the meeting.",
      "reason": "时间先后关系用 before，不用 in front of。"
    }
  ],
  "quiz": [
    {
      "prompt": "（室外）选择正确：The statue is ___ the museum.",
      "options": [
        "in front of",
        "in the front of",
        "behind"
      ],
      "answer": "in front of",
      "explanation": "表示“在……前面（外部前方）”用 in front of。in the front of 表示“在……里面的前部”。"
    },
    {
      "prompt": "（车里）选择正确：I sat ___ the bus.（在车里靠前/靠近司机）",
      "options": [
        "in the front of",
        "in front of",
        "behind"
      ],
      "answer": "in the front of",
      "explanation": "在内部的“前部/靠前位置”用 in the front of（in the front of the bus）。"
    },
    {
      "prompt": "（时间）选择正确：Please finish your homework ___ dinner.",
      "options": [
        "before",
        "in front of",
        "in the front of"
      ],
      "answer": "before",
      "explanation": "时间先后用 before（在……之前）。in front of 不用于时间顺序。"
    }
  ],
  "faq": [
    {
      "question": "“in front of”是什么意思？",
      "answer": "表示“在……前面”（多指外部前方/视线前方）：The car is parked in front of the house.（车停在房子前面）。"
    },
    {
      "question": "什么时候该用“in front of”？",
      "answer": "当你描述“在某物外部的前方、面对观察者”时用它：She stood in front of the mirror.（她站在镜子前面）。"
    },
    {
      "question": "“in front of”和“in the front of”有什么区别？",
      "answer": "in front of 通常是“外部前方”；in the front of 是“在……里面的前部”。例：We waited in front of the bus.（车外） vs I sat in the front of the bus.（车内）。"
    },
    {
      "question": "“in front of”可以用于时间表达吗？",
      "answer": "不用于表示时间先后。要说“在……之前”，用 before：Please arrive before the meeting."
    },
    {
      "question": "“in front of”和“ahead of”有什么区别？",
      "answer": "ahead of 更常用于“领先/更靠前”（队伍/路线/进度）：ahead of me in line / ahead of schedule。in front of 更像“正前方/面对”。"
    },
    {
      "question": "使用“in front of”最常见的错误是什么？",
      "answer": "三类最常见：1）漏掉 of（in front the door ✗）；2）把 inside 场景误用成 in front of（应为 in the front of）；3）用它表达时间先后（应为 before）。"
    },
    {
      "question": "“in front of”有哪些高频搭配？",
      "answer": "高频搭配示例：in front of the house, in front of the school, in front of the door, in front of the camera, in front of the audience, stand/wait in front of。"
    },
    {
      "question": "如何快速记住“in front of”的用法？",
      "answer": "三分法记忆：outside 用 in front of；inside 前部用 in the front of；时间顺序用 before。"
    }
  ]
};

export default content;
