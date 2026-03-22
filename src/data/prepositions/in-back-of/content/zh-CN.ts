import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……后面（美式口语）",
  "tips": [
    "≈ behind（更口语、更偏美式，主要用于具体位置）。",
    "正式/书面或抽象含义通常用 behind。",
    "不要和 in the back of（在……里面靠后）混淆。"
  ],
  "examples": [
    {
      "en": "The garage is in back of the house.",
      "i18n": {
        "zh-CN": {
          "translation": "车库在房子后面（更口语/美式）。"
        },
        "en": {
          "translation": "The garage is in back of the house."
        }
      }
    },
    {
      "en": "A garden is in back of the shop.",
      "i18n": {
        "zh-CN": {
          "translation": "商店后面有个花园。"
        },
        "en": {
          "translation": "A garden is in back of the shop."
        }
      }
    }
  ],
  "comparison": {
    "summary": "in back of 是较口语的美式表达，含义≈ behind（多用于具体位置）。正式/书面与抽象义通常用 behind；不要和 in the back of（在……里面靠后）混淆。",
    "differences": [
      {
        "term": "behind",
        "description": "两者多为近义：in back of 更口语/更偏美式；behind 更通用，也能用于书面与抽象义（behind schedule / the reason behind...）。",
        "examples": [
          {
            "term": "behind",
            "sentence": "The garage is behind the house.",
            "translation": "车库在房子后面。"
          },
          {
            "term": "in back of",
            "sentence": "The garage is in back of the house.",
            "translation": "车库在房子后面（更口语/美式）。"
          }
        ]
      },
      {
        "term": "in the back of",
        "description": "in back of = 在……后面（通常在外部）；in the back of = 在……里面的后部/靠后位置（在内部）。",
        "examples": [
          {
            "term": "in the back of",
            "sentence": "My bag is in the back of the car.",
            "translation": "我的包在车里后面（车内）。"
          },
          {
            "term": "in back of",
            "sentence": "The bike is in back of the car.",
            "translation": "自行车在车后面（车外）。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "地点/建筑",
      "items": [
        {
          "phrase": "in back of the house",
          "meaning": "在房子后面（房子外部）"
        },
        {
          "phrase": "in back of the store",
          "meaning": "在商店后面"
        },
        {
          "phrase": "in back of the school",
          "meaning": "在学校后面"
        },
        {
          "phrase": "in back of the building",
          "meaning": "在楼后面"
        },
        {
          "phrase": "in back of the restaurant",
          "meaning": "在餐馆后面"
        },
        {
          "phrase": "in back of the garage",
          "meaning": "在车库后面"
        }
      ]
    },
    {
      "title": "日常物体",
      "items": [
        {
          "phrase": "in back of the car",
          "meaning": "在车后面（车外）"
        },
        {
          "phrase": "in back of the bus",
          "meaning": "在公交车后面（车外）"
        },
        {
          "phrase": "in back of the truck",
          "meaning": "在卡车后面（车外）"
        },
        {
          "phrase": "in back of the box",
          "meaning": "在盒子后面"
        },
        {
          "phrase": "in back of the tree",
          "meaning": "在树后面"
        },
        {
          "phrase": "in back of the shed",
          "meaning": "在小棚子后面"
        }
      ]
    },
    {
      "title": "人/队伍位置",
      "items": [
        {
          "phrase": "in back of me",
          "meaning": "在我后面"
        },
        {
          "phrase": "in back of you",
          "meaning": "在你后面"
        },
        {
          "phrase": "in back of him",
          "meaning": "在他后面"
        },
        {
          "phrase": "in back of her",
          "meaning": "在她后面"
        },
        {
          "phrase": "in back of us",
          "meaning": "在我们后面"
        },
        {
          "phrase": "in back of the line",
          "meaning": "在队伍后面（更口语）"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The garage is in back the house.",
      "correct": "The garage is in back of the house.",
      "reason": "固定搭配是 in back of + 名词，不能漏掉 of。"
    },
    {
      "wrong": "My bag is in back of the car. (inside)",
      "correct": "My bag is in the back of the car.",
      "reason": "in back of 表示“在车后面（车外）”；in the back of 表示“在车里靠后（车内）”。"
    },
    {
      "wrong": "The reason is in back of the delay.",
      "correct": "The reason is behind the delay.",
      "reason": "抽象含义（原因/进度落后）通常用 behind；in back of 主要用于具体位置且更口语。"
    }
  ],
  "quiz": [
    {
      "prompt": "选择更口语的美式说法：The garage is ___ the house.",
      "options": [
        "in back of",
        "behind",
        "in the back of"
      ],
      "answer": "in back of",
      "explanation": "表示具体“在……后面”时，in back of 与 behind 多数都能用；in back of 更口语、更偏美式。in the back of 表示“在……里面靠后”。"
    },
    {
      "prompt": "选择更合适的短语：My backpack is ___ the car.（在车里靠后）",
      "options": [
        "in the back of",
        "in back of",
        "behind"
      ],
      "answer": "in the back of",
      "explanation": "in the back of 表示在内部的后部位置（车内/房间内）；in back of/behind 表示在外部的后方。"
    },
    {
      "prompt": "选择更自然的表达：We're ___ schedule.",
      "options": [
        "behind",
        "in back of",
        "in the back of"
      ],
      "answer": "behind",
      "explanation": "进度落后、原因等抽象表达用 behind（behind schedule / behind in math）。in back of 主要用于具体位置。"
    }
  ],
  "faq": [
    {
      "question": "“in back of”是什么意思？",
      "answer": "表示“在……后面”（多用于具体位置），属于较口语、偏美式的说法，含义≈ behind。"
    },
    {
      "question": "什么时候该用“in back of”？",
      "answer": "日常口语里描述具体位置“在后面”时可用：The garage is in back of the house.（更口语/美式）。"
    },
    {
      "question": "“in back of”和“behind”有什么区别？",
      "answer": "大多数空间场景近义。in back of 更口语/更偏美式；behind 更通用、也更适合书面，并且可用于抽象义（behind schedule / the reason behind...）。"
    },
    {
      "question": "“in back of”和“in the back of”有什么区别？",
      "answer": "in back of（≈ behind）通常表示在外部的后方；in the back of 表示在内部的后部（车里/房间里靠后）。例：My bag is in the back of the car.（车内） vs The bike is in back of the car.（车外）。"
    },
    {
      "question": "“in back of”可以用于时间表达吗？",
      "answer": "通常不用于时间核心表达。进度/时间语境更常用 behind（behind schedule）。"
    },
    {
      "question": "使用“in back of”最常见的错误是什么？",
      "answer": "两类最常见：1）漏掉 of（in back the house ✗）；2）把 in back of（车外后方）和 in the back of（车内靠后）混淆。"
    },
    {
      "question": "“in back of”有哪些高频搭配？",
      "answer": "高频搭配示例：in back of the house, in back of the store, in back of the school, in back of the building, in back of the car, in back of the line。"
    },
    {
      "question": "如何快速记住“in back of”的用法？",
      "answer": "记成一句话：in back of = behind（更口语/美式，偏具体位置）。再补一个对比：in the back of = 在里面靠后。"
    }
  ]
};

export default content;
