import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……上方（不接触）；高于、超过（数值/水平/能力范围）",
  "tips": [
    "先记一句话：above = higher than, not touching。",
    "on 表示“在上面并接触表面”；above 表示“在上方但不接触”。",
    "当后面是 average、zero、your level 这类标准或范围时，above 表示“高于、超过”。"
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
      "en": "A small window is above the bed.",
      "i18n": {
        "zh-CN": {
          "translation": "床上方有一扇小窗。"
        },
        "en": {
          "translation": "A small window is above the bed."
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
        "en": "A small window is above the bed.",
        "i18n": {
          "zh-CN": {
            "translation": "床上方有一扇小窗。"
          },
          "en": {
            "translation": "A small window is above the bed."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "above 的核心不是“正上方”，而是“高于某物”。它通常不接触，也不强调跨越；如果有接触，多用 on；如果强调从上方跨过去，多用 over。",
    "differences": [
      {
        "term": "on",
        "description": "on 强调接触表面；above 强调在更高位置且不接触。",
        "examples": [
          {
            "term": "on",
            "sentence": "The book is on the table.",
            "translation": "书在桌子上（接触）。"
          },
          {
            "term": "above",
            "sentence": "The lamp is above the table.",
            "translation": "灯在桌子上方（不接触）。"
          }
        ]
      },
      {
        "term": "over",
        "description": "over 常带“跨过/罩在上方”的感觉；above 只强调高于，不一定正好在中心正上方。",
        "examples": [
          {
            "term": "over",
            "sentence": "A bird flew over the wall.",
            "translation": "一只鸟飞过墙上方。"
          },
          {
            "term": "above",
            "sentence": "The clock is above the door.",
            "translation": "时钟在门上方。"
          }
        ]
      },
      {
        "term": "below",
        "description": "below 与 above 方向相反：below 表示低于，above 表示高于。",
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
  "comparisonVisual": {
    "type": "vertical-range",
    "title": "一张图看懂 on / over / above / below",
    "caption": "虚线矩形代表参照物。对比是否接触、是否跨越，以及高于/低于的适用范围。",
    "items": [
      {
        "term": "on",
        "xRange": [
          0.08,
          0.22
        ],
        "yRange": [
          0.5,
          0.5
        ],
        "marker": "contact",
        "note": "接触表面"
      },
      {
        "term": "over",
        "xRange": [
          0.3,
          0.48
        ],
        "yRange": [
          0.28,
          0.58
        ],
        "marker": "crossing",
        "note": "在上方并跨过"
      },
      {
        "term": "above",
        "xRange": [
          0.56,
          0.72
        ],
        "yRange": [
          0.16,
          0.32
        ],
        "marker": "hover",
        "note": "高于，不接触"
      },
      {
        "term": "below",
        "xRange": [
          0.8,
          0.94
        ],
        "yRange": [
          0.7,
          0.86
        ],
        "marker": "below",
        "note": "低于"
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
          "phrase": "above the bed",
          "meaning": "在床上方"
        },
        {
          "phrase": "above the roof",
          "meaning": "在屋顶上方"
        },
        {
          "phrase": "above the screen",
          "meaning": "在屏幕上方"
        },
        {
          "phrase": "above the clouds",
          "meaning": "在云层上方"
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
      "title": "能力与抽象范围类",
      "items": [
        {
          "phrase": "above my level",
          "meaning": "超出我的水平"
        },
        {
          "phrase": "above my level of understanding",
          "meaning": "超出我的理解能力"
        },
        {
          "phrase": "rise above",
          "meaning": "超越（困难/情绪）"
        },
        {
          "phrase": "above suspicion",
          "meaning": "无可怀疑"
        },
        {
          "phrase": "above all",
          "meaning": "最重要的是"
        },
        {
          "phrase": "head and shoulders above",
          "meaning": "远胜于"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The book is above the table. (when the book is touching the table)",
      "correct": "The book is on the table.",
      "reason": "有接触时用 on；above 表示“在更高处且不接触”。"
    },
    {
      "wrong": "The bird flew above the wall and crossed it.",
      "correct": "The bird flew over the wall.",
      "reason": "强调“跨越路径”时，over 通常比 above 更自然。"
    },
    {
      "wrong": "The score is over average.",
      "correct": "The score is above average.",
      "reason": "比较标准、数值或水平时，固定搭配通常是 above average。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The lamp is ___ the table.",
      "options": [
        "above",
        "on",
        "through"
      ],
      "answer": "above",
      "explanation": "灯在桌子更高的位置，而且不接触桌面，选 above。"
    },
    {
      "prompt": "Choose the correct preposition: Her score is ___ average.",
      "options": [
        "above",
        "over",
        "under"
      ],
      "answer": "above",
      "explanation": "表示“高于平均水平”的固定表达是 above average。"
    },
    {
      "prompt": "Choose the correct preposition: A bird flew ___ the wall.",
      "options": [
        "over",
        "above",
        "inside"
      ],
      "answer": "over",
      "explanation": "这里强调“飞过”这条跨越路径，所以用 over。"
    }
  ],
  "faq": [
    {
      "question": "above 的核心意思是什么？",
      "answer": "above 的核心是“高于某物”，而且通常不接触它。"
    },
    {
      "question": "above 和 on 如何区分？",
      "answer": "on 表示接触表面；above 表示在更高位置，但不接触表面。"
    },
    {
      "question": "above 和 over 的区别是什么？",
      "answer": "above 只强调“更高”；over 常带“跨过”或“罩在上方”的感觉。"
    },
    {
      "question": "为什么说 above average，而不是 over average？",
      "answer": "因为 above 是比较水平、数值和标准时最常用的词，所以会说 above average、above zero、above the limit。"
    },
    {
      "question": "above 一定是正好在正上方吗？",
      "answer": "不一定。above 的重点是“高于”，可以略微偏左或偏右，不一定正好居中。"
    },
    {
      "question": "above 可以表示数值和能力范围吗？",
      "answer": "可以。常见有 above average、above zero、above sea level、above my level。"
    },
    {
      "question": "如何快速记住 above？",
      "answer": "记住一句话：higher than, not touching。再用 above average 这个搭配把“高于标准”的意思一起记住。"
    }
  ]
};

export default content;
