import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……上方（不接触）；高于（标准/数值）",
  "tips": [
    "above 强调“更高位置”，通常不涉及接触，也不强调跨越路径。",
    "表达数值/水平高于标准时也常用 above（above average, above zero）。",
    "若有表面接触用 on；若强调从上方跨过去常用 over。"
  ],
  "examples": [
    {
      "en": "The lamp is above the table.",
      "i18n": {
        "zh-CN": {
          "translation": "灯在桌子上方。"
        },
        "en": {
          "translation": "The lamp is above the table."
        }
      }
    },
    {
      "en": "Her score is above average.",
      "i18n": {
        "zh-CN": {
          "translation": "她的成绩高于平均水平。"
        },
        "en": {
          "translation": "Her score is above average."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The lamp is above the table.",
        "i18n": {
          "zh-CN": {
            "translation": "灯在桌子上方。"
          },
          "en": {
            "translation": "The lamp is above the table."
          }
        }
      },
      {
        "en": "The plane is above the clouds.",
        "i18n": {
          "zh-CN": {
            "translation": "飞机在云层上方。"
          },
          "en": {
            "translation": "The plane is above the clouds."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "above 的核心是“位置更高或水平更高”，不强调接触与跨越动作。先判断是否接触、是否跨越，再选 above。",
    "differences": [
      {
        "term": "over",
        "description": "above 偏静态“更高”；over 常带“从上方跨过/覆盖”的动态关系。",
        "examples": [
          {
            "term": "above",
            "sentence": "The clock is above the door.",
            "translation": "时钟在门上方。"
          },
          {
            "term": "over",
            "sentence": "A bird flew over the wall.",
            "translation": "一只鸟飞过了墙上方。"
          }
        ]
      },
      {
        "term": "on",
        "description": "on 强调接触表面；above 强调在上方且不接触。",
        "examples": [
          {
            "term": "on",
            "sentence": "The book is on the table.",
            "translation": "书在桌子上（接触）。"
          },
          {
            "term": "above",
            "sentence": "The lamp hangs above the table.",
            "translation": "灯悬挂在桌子上方（不接触）。"
          }
        ]
      },
      {
        "term": "below",
        "description": "below 与 above 方向相反：below 是低于，above 是高于。",
        "examples": [
          {
            "term": "below",
            "sentence": "The temperature is below zero.",
            "translation": "温度在零度以下。"
          },
          {
            "term": "above",
            "sentence": "The temperature is above zero.",
            "translation": "温度在零度以上。"
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
          "phrase": "above the table",
          "meaning": "在桌子上方"
        },
        {
          "phrase": "above the door",
          "meaning": "在门上方"
        },
        {
          "phrase": "above the clouds",
          "meaning": "在云层上方"
        },
        {
          "phrase": "above the roof",
          "meaning": "在屋顶上方"
        },
        {
          "phrase": "above the bed",
          "meaning": "在床上方"
        },
        {
          "phrase": "above the screen",
          "meaning": "在屏幕上方"
        }
      ]
    },
    {
      "title": "数值与标准类",
      "items": [
        {
          "phrase": "above average",
          "meaning": "高于平均水平"
        },
        {
          "phrase": "above zero",
          "meaning": "高于零"
        },
        {
          "phrase": "above sea level",
          "meaning": "高于海平面"
        },
        {
          "phrase": "above 90%",
          "meaning": "高于 90%"
        },
        {
          "phrase": "above the limit",
          "meaning": "高于上限"
        },
        {
          "phrase": "above the age of 18",
          "meaning": "超过 18 岁"
        }
      ]
    },
    {
      "title": "抽象表达类",
      "items": [
        {
          "phrase": "above all",
          "meaning": "最重要的是"
        },
        {
          "phrase": "above suspicion",
          "meaning": "无可怀疑"
        },
        {
          "phrase": "above criticism",
          "meaning": "无可指摘"
        },
        {
          "phrase": "rise above",
          "meaning": "超越（困难/情绪）"
        },
        {
          "phrase": "head and shoulders above",
          "meaning": "远胜于"
        },
        {
          "phrase": "above board",
          "meaning": "光明正大的"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The book is above the table. (book touching the table)",
      "correct": "The book is on the table.",
      "reason": "有接触关系时应用 on，不用 above。"
    },
    {
      "wrong": "The bird flew above the wall and crossed it.",
      "correct": "The bird flew over the wall.",
      "reason": "强调“跨越动作”时，over 比 above 更自然。"
    },
    {
      "wrong": "The score is over average.",
      "correct": "The score is above average.",
      "reason": "表示“高于平均值”的固定搭配是 above average。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The clock is ___ the door.",
      "options": [
        "above",
        "on",
        "through"
      ],
      "answer": "above",
      "explanation": "时钟在门上方且不接触门面，选 above。"
    },
    {
      "prompt": "Choose the correct preposition: Her score is ___ average.",
      "options": [
        "above",
        "over",
        "under"
      ],
      "answer": "above",
      "explanation": "固定搭配为 above average。"
    },
    {
      "prompt": "Choose the correct preposition: The helicopter hovered ___ the stadium.",
      "options": [
        "above",
        "inside",
        "under"
      ],
      "answer": "above",
      "explanation": "强调“在上方悬停”而非穿越动作，选 above。"
    }
  ],
  "faq": [
    {
      "question": "above 的核心意思是什么？",
      "answer": "above 表示“在更高位置”或“高于某标准”，通常不强调接触，也不强调跨越。"
    },
    {
      "question": "above 和 over 的区别是什么？",
      "answer": "above 更静态，表示高于；over 常带跨越或覆盖关系，尤其在运动场景中更常见。"
    },
    {
      "question": "above 和 on 如何区分？",
      "answer": "关键看接触：接触表面用 on，不接触且在上方用 above。"
    },
    {
      "question": "above 可以表示数值关系吗？",
      "answer": "可以，比如 above average、above zero、above 90%，都表示“高于某标准”。"
    },
    {
      "question": "above 可以用于时间表达吗？",
      "answer": "一般不作为时间介词核心用法；时间关系通常用 at/in/on/over 等词。"
    },
    {
      "question": "学习 above 最常见错误是什么？",
      "answer": "常见错是把接触关系误用 above（应 on），或把跨越动作场景误用 above（常应 over）。"
    },
    {
      "question": "above 的高频搭配有哪些？",
      "answer": "常见有 above the table、above average、above sea level、above all。"
    },
    {
      "question": "30 秒记住 above 的方法？",
      "answer": "记一个判据：只要是“更高但不接触”，优先想 above；再用 above average 强化数值义。"
    }
  ]
};

export default content;
