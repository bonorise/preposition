import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "经过/越过；（时间）几点过……",
  "tips": [
    "空间：从某个点/地方旁边经过，并继续往前（walk past the school）。",
    "时间：表示“超过某个时间点”（It's past 3 o'clock）或钟表读法“几点过几分”（ten past six）。"
  ],
  "examples": [
    {
      "en": "Walk past the school.",
      "i18n": {
        "zh-CN": {
          "translation": "从学校旁边走过去。"
        },
        "en": {
          "translation": "Walk past the school."
        }
      }
    },
    {
      "en": "The bus went past the stop.",
      "i18n": {
        "zh-CN": {
          "translation": "公交车开过了站。"
        },
        "en": {
          "translation": "The bus went past the stop."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Walk past the school.",
        "i18n": {
          "zh-CN": {
            "translation": "从学校旁边走过去。"
          },
          "en": {
            "translation": "Walk past the school."
          }
        }
      },
      {
        "en": "The bus went past the stop.",
        "i18n": {
          "zh-CN": {
            "translation": "公交车开过了站。"
          },
          "en": {
            "translation": "The bus went past the stop."
          }
        }
      }
    ],
    "time": [
      {
        "en": "It's ten past six.",
        "i18n": {
          "zh-CN": {
            "translation": "现在是六点十分。"
          },
          "en": {
            "translation": "It's ten past six."
          }
        }
      },
      {
        "en": "It's just past midnight.",
        "i18n": {
          "zh-CN": {
            "translation": "刚过午夜。"
          },
          "en": {
            "translation": "It's just past midnight."
          }
        }
      },
      {
        "en": "It's past 3 o'clock.",
        "i18n": {
          "zh-CN": {
            "translation": "已经三点多了（过三点了）。"
          },
          "en": {
            "translation": "It's past 3 o'clock."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Go past the bank and turn left.",
        "i18n": {
          "zh-CN": {
            "translation": "经过银行再左转。"
          },
          "en": {
            "translation": "Go past the bank and turn left."
          }
        }
      },
      {
        "en": "A car sped past us.",
        "i18n": {
          "zh-CN": {
            "translation": "一辆车从我们身边飞驰而过。"
          },
          "en": {
            "translation": "A car sped past us."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "past 的核心画面是“经过某点并继续往前”；在时间里它常表示“超过某时间点”，钟表读法里是“几点过几分”。初学者最常混的是 past vs to（钟表）以及 past vs after（时间顺序）。",
    "differences": [
      {
        "term": "to",
        "description": "钟表读法：past 表示“过了几点几分”；to 表示“差几分到几点”。",
        "examples": [
          {
            "term": "past",
            "sentence": "It's ten past six.",
            "translation": "六点十分（过六点 10 分）。"
          },
          {
            "term": "to",
            "sentence": "It's ten to six.",
            "translation": "五点五十（差 10 分到六点）。"
          }
        ]
      },
      {
        "term": "after",
        "description": "after 强调时间顺序“在……之后”（after class）；past 常用于“已经超过某时间点”（It's past midnight）或路线经过。",
        "examples": [
          {
            "term": "after",
            "sentence": "I'll call you after class.",
            "translation": "我下课后给你打电话。"
          },
          {
            "term": "past",
            "sentence": "It's past midnight.",
            "translation": "已经过了午夜。"
          }
        ]
      },
      {
        "term": "beyond",
        "description": "beyond 更像“在更远那边/超出界限”；past 更像“经过某点并继续”。",
        "examples": [
          {
            "term": "past",
            "sentence": "Walk past the school and you'll see the park.",
            "translation": "从学校旁边走过去，你会看到公园。"
          },
          {
            "term": "beyond",
            "sentence": "The park is beyond the school.",
            "translation": "公园在学校更远的那边。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "路线/经过（空间）",
      "items": [
        {
          "phrase": "walk past the school",
          "meaning": "从学校旁边走过去"
        },
        {
          "phrase": "go past the bank",
          "meaning": "经过银行继续走"
        },
        {
          "phrase": "drive past the station",
          "meaning": "开车驶过车站"
        },
        {
          "phrase": "run past me",
          "meaning": "从我身边跑过"
        },
        {
          "phrase": "past the stop",
          "meaning": "过站/驶过站点"
        },
        {
          "phrase": "past the entrance",
          "meaning": "经过入口往前"
        }
      ]
    },
    {
      "title": "钟表时间（几点过几分）",
      "items": [
        {
          "phrase": "ten past six",
          "meaning": "六点十分"
        },
        {
          "phrase": "half past seven",
          "meaning": "七点半"
        },
        {
          "phrase": "a quarter past five",
          "meaning": "五点一刻（五点十五）"
        },
        {
          "phrase": "just past midnight",
          "meaning": "刚过午夜"
        },
        {
          "phrase": "past noon",
          "meaning": "过了中午"
        },
        {
          "phrase": "past 3 o'clock",
          "meaning": "三点多/过三点"
        }
      ]
    },
    {
      "title": "超过某点/界限",
      "items": [
        {
          "phrase": "past the deadline",
          "meaning": "过了截止时间"
        },
        {
          "phrase": "past the end",
          "meaning": "超过末端/尽头"
        },
        {
          "phrase": "past the limit",
          "meaning": "超过上限/界限"
        },
        {
          "phrase": "past the point of no return",
          "meaning": "过了“不可回头”的点"
        },
        {
          "phrase": "past my bedtime",
          "meaning": "过了我睡觉时间"
        },
        {
          "phrase": "past the age of 60",
          "meaning": "超过 60 岁"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "It's ten past six. (when it is 5:50)",
      "correct": "It's ten to six.",
      "reason": "钟表里：past 是“过…点”；to 是“差…分到…点”。"
    },
    {
      "wrong": "The bus past the stop.",
      "correct": "The bus went past the stop.",
      "reason": "past 是介词，需要和动词搭配（go/walk/drive past）。"
    },
    {
      "wrong": "I saw him past week.",
      "correct": "I saw him last week.",
      "reason": "表达“上周/上个月”用 last；past 不这样直接修饰 week。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: It's ten ___ six.",
      "options": [
        "past",
        "to",
        "in"
      ],
      "answer": "past",
      "explanation": "钟表读法：ten past six = 六点十分。"
    },
    {
      "prompt": "Choose the correct preposition: Go ___ the bank and turn left.",
      "options": [
        "past",
        "behind",
        "inside"
      ],
      "answer": "past",
      "explanation": "强调“经过某处继续往前”，用 past。"
    },
    {
      "prompt": "Choose the correct preposition: We're already ___ the deadline.",
      "options": [
        "past",
        "between",
        "under"
      ],
      "answer": "past",
      "explanation": "past + 时间点/界限：表示“超过/过了”。"
    }
  ],
  "faq": [
    {
      "question": "past 的核心意思是什么？",
      "answer": "核心画面是“经过某点并继续往前”：walk past the school（从学校旁边走过去）。"
    },
    {
      "question": "past 可以表示时间吗？",
      "answer": "可以。它常表示“超过某时间点”：It's past 3 o'clock（过三点了）；也用于钟表读法：ten past six（六点十分）。"
    },
    {
      "question": "past 和 to（钟表）怎么区分？",
      "answer": "past 是“过…点”（分钟在 1–30 分）；to 是“差…分到…点”（通常 31–59 分）。例：6:10 ten past six；5:50 ten to six。"
    },
    {
      "question": "past 和 after 有什么区别？",
      "answer": "after 更通用，表示时间顺序“在……之后”：after class。past 更像“已经超过某时间点/界限”：It's past midnight / past the deadline。"
    },
    {
      "question": "past 和 beyond 有什么区别？",
      "answer": "past 强调“经过并越过”；beyond 强调“在更远那边/超出界限”。walk past the school（经过学校继续走） vs beyond the school（在学校更远处）。"
    },
    {
      "question": "past 可以单独用吗？",
      "answer": "作为介词时通常需要宾语：past the bank。作为形容词/名词时也常见：past experience, the past，但那不是介词用法。"
    },
    {
      "question": "学习 past 最常见错误是什么？",
      "answer": "最常见是把钟表里的 past/to 搞反，或把 past 当成动词用（应说 went past / walked past）。"
    },
    {
      "question": "30 秒记住 past 的方法？",
      "answer": "记两张图：1）路上“经过一个点继续往前”；2）钟表“过了…点几分”。看到 go/walk/drive 这种动词，优先想到 past。"
    }
  ]
};

export default content;
