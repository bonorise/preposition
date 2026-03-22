import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……下面；低于（时间/数量上限）",
  "tips": [
    "空间里：under 常表示在某物正下方，带“被上方覆盖/遮挡”的感觉。",
    "时间或数量里：under 表示“少于、低于某上限”（如 under an hour）。",
    "和 below 比：below 更中性，只表示更低，不一定有覆盖关系。"
  ],
  "examples": [
    {
      "en": "The cat is under the table.",
      "i18n": {
        "zh-CN": {
          "translation": "猫在桌子下面。"
        },
        "en": {
          "translation": "The cat is under the table."
        }
      }
    },
    {
      "en": "The repair took under an hour.",
      "i18n": {
        "zh-CN": {
          "translation": "维修不到一小时就完成了。"
        },
        "en": {
          "translation": "The repair took under an hour."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The cat is under the table.",
        "i18n": {
          "zh-CN": {
            "translation": "猫在桌子下面。"
          },
          "en": {
            "translation": "The cat is under the table."
          }
        }
      },
      {
        "en": "We found the note under the pillow.",
        "i18n": {
          "zh-CN": {
            "translation": "我们在枕头下面找到了那张纸条。"
          },
          "en": {
            "translation": "We found the note under the pillow."
          }
        }
      }
    ],
    "time": [
      {
        "en": "The repair took under an hour.",
        "i18n": {
          "zh-CN": {
            "translation": "维修不到一小时就完成了。"
          },
          "en": {
            "translation": "The repair took under an hour."
          }
        }
      },
      {
        "en": "Children under five can enter for free.",
        "i18n": {
          "zh-CN": {
            "translation": "五岁以下儿童可免费入场。"
          },
          "en": {
            "translation": "Children under five can enter for free."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "under 既能表示空间中的“在下方（常有遮挡感）”，也能表示“低于上限”。学习时先判断是空间关系还是“少于”关系。",
    "differences": [
      {
        "term": "below",
        "description": "below 仅表示更低的位置；under 更强调正下方、覆盖或压在下面。",
        "examples": [
          {
            "term": "below",
            "sentence": "The temperature is below zero.",
            "translation": "温度在零度以下。"
          },
          {
            "term": "under",
            "sentence": "The cat is under the table.",
            "translation": "猫在桌子下面。"
          }
        ]
      },
      {
        "term": "underneath",
        "description": "underneath 更强调“正下方”且语气更口语；under 更常用、更中性。",
        "examples": [
          {
            "term": "underneath",
            "sentence": "The toy is underneath the sofa.",
            "translation": "玩具在沙发正下方。"
          },
          {
            "term": "under",
            "sentence": "The toy is under the sofa.",
            "translation": "玩具在沙发下面。"
          }
        ]
      },
      {
        "term": "within",
        "description": "within 强调“在某期限之内完成”；under 强调“少于某时长/数量上限”。",
        "examples": [
          {
            "term": "within",
            "sentence": "Please reply within an hour.",
            "translation": "请在一小时内回复。"
          },
          {
            "term": "under",
            "sentence": "We finished in under an hour.",
            "translation": "我们用不到一小时就完成了。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "空间位置类",
      "items": [
        {
          "phrase": "under the table",
          "meaning": "在桌子下面"
        },
        {
          "phrase": "under the bed",
          "meaning": "在床下面"
        },
        {
          "phrase": "under the chair",
          "meaning": "在椅子下面"
        },
        {
          "phrase": "under the bridge",
          "meaning": "在桥下"
        },
        {
          "phrase": "under the tree",
          "meaning": "在树下"
        },
        {
          "phrase": "under the blanket",
          "meaning": "在毯子下面"
        }
      ]
    },
    {
      "title": "时间/数量上限类",
      "items": [
        {
          "phrase": "under an hour",
          "meaning": "不到一小时"
        },
        {
          "phrase": "under 30 minutes",
          "meaning": "不到 30 分钟"
        },
        {
          "phrase": "under a week",
          "meaning": "不到一周"
        },
        {
          "phrase": "under $50",
          "meaning": "低于 50 美元"
        },
        {
          "phrase": "under 10 people",
          "meaning": "少于 10 人"
        },
        {
          "phrase": "under five years old",
          "meaning": "五岁以下"
        }
      ]
    },
    {
      "title": "状态与过程类",
      "items": [
        {
          "phrase": "under pressure",
          "meaning": "在压力之下"
        },
        {
          "phrase": "under control",
          "meaning": "处于可控状态"
        },
        {
          "phrase": "under review",
          "meaning": "在审核中"
        },
        {
          "phrase": "under construction",
          "meaning": "在建设中"
        },
        {
          "phrase": "under discussion",
          "meaning": "在讨论中"
        },
        {
          "phrase": "under investigation",
          "meaning": "在调查中"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The cat is below the table.",
      "correct": "The cat is under the table.",
      "reason": "表示“在桌子正下方”时，under 更自然；below 在这里语气偏中性、距离感更强。"
    },
    {
      "wrong": "The project took below two hours.",
      "correct": "The project took under two hours.",
      "reason": "表示“少于某时长”时用 under，不用 below。"
    },
    {
      "wrong": "Please finish under an hour.",
      "correct": "Please finish within an hour.",
      "reason": "如果强调“在截止时间内完成”，within 更合适；under 更像“总时长少于”。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The shoes are ___ the bed.",
      "options": [
        "under",
        "below",
        "on"
      ],
      "answer": "under",
      "explanation": "这里是具体物体在床正下方，under 最自然。"
    },
    {
      "prompt": "Choose the correct preposition: The task took ___ an hour.",
      "options": [
        "under",
        "within",
        "over"
      ],
      "answer": "under",
      "explanation": "表达“不到一小时”时，under 表示低于该时长上限。"
    },
    {
      "prompt": "Choose the correct preposition: The report is still ___ review.",
      "options": [
        "under",
        "on",
        "in"
      ],
      "answer": "under",
      "explanation": "固定搭配是 under review。"
    }
  ],
  "faq": [
    {
      "question": "“under”作为介词最核心的意思是什么？",
      "answer": "核心有两层：空间里表示“在……下面（常有覆盖感）”；时间/数量里表示“低于某上限”（如 under an hour）。"
    },
    {
      "question": "under 和 below 的区别是什么？",
      "answer": "under 更像“正下方、被上方覆盖”；below 更中性，只表示更低的位置。比如 under the table 更自然。"
    },
    {
      "question": "under 和 underneath 如何区分？",
      "answer": "under 更常见更中性；underneath 更强调“正下方”，口语里更有画面感。"
    },
    {
      "question": "under 可以用于时间表达吗？",
      "answer": "可以。常用于“少于某时长/上限”：under an hour, under 30 minutes。"
    },
    {
      "question": "under 和 within 在时间上怎么选？",
      "answer": "under 强调总量少于上限；within 强调在截止窗口内完成。对比：in under an hour vs within an hour。"
    },
    {
      "question": "under 的高频搭配有哪些？",
      "answer": "常见有 under the table, under pressure, under review, under control, under construction。"
    },
    {
      "question": "学习 under 最容易犯什么错？",
      "answer": "常见错是把“少于时长”写成 below two hours，或把“截止时间内”误写成 under an hour。"
    },
    {
      "question": "30 秒记住 under 的方法是什么？",
      "answer": "记两条：空间=在下方（有覆盖感）；时间/数量=低于上限。再用两个句子各造一遍即可。"
    }
  ]
};

export default content;
