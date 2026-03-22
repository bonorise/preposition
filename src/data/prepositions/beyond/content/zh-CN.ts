import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……更远处；超出（界限/范围）",
  "tips": [
    "表示“超过某个点/界限，在更远处”：beyond the river / beyond the limit。",
    "对比 past：past 更像“经过/路过某点”；beyond 更像“在某点的更远那边”。",
    "常见抽象搭配：beyond control / beyond repair / beyond doubt。"
  ],
  "examples": [
    {
      "en": "The hills are beyond the river.",
      "i18n": {
        "zh-CN": {
          "translation": "山丘在河的更远处。"
        },
        "en": {
          "translation": "The hills are beyond the river."
        }
      }
    },
    {
      "en": "There is a town beyond the bridge.",
      "i18n": {
        "zh-CN": {
          "translation": "桥那边有个小镇。"
        },
        "en": {
          "translation": "There is a town beyond the bridge."
        }
      }
    }
  ],
  "comparison": {
    "summary": "beyond 的核心是“超过某个点/界限，在更远那边”，既可用于具体空间距离，也常用于抽象“超出能力/范围”。",
    "differences": [
      {
        "term": "past",
        "description": "past 更像“经过/越过某点”（路过）；beyond 更像“在那点的更远处”（位置更远）。",
        "examples": [
          {
            "term": "past",
            "sentence": "Walk past the bridge and turn left.",
            "translation": "走过桥（路过桥）再左转。"
          },
          {
            "term": "beyond",
            "sentence": "There's a small village beyond the bridge.",
            "translation": "桥那边更远处有个小村庄。"
          }
        ]
      },
      {
        "term": "outside",
        "description": "outside 强调“在边界外”；beyond 强调“在某点/边界之外更远那边”。",
        "examples": [
          {
            "term": "outside",
            "sentence": "Wait outside the gate.",
            "translation": "在门外等（边界外）。"
          },
          {
            "term": "beyond",
            "sentence": "The parking lot is beyond the gate.",
            "translation": "停车场在门那边更远处。"
          }
        ]
      },
      {
        "term": "over",
        "description": "over 常用于数量“超过”；beyond 更偏“超出界限/超出可接受范围”，抽象表达更常见。",
        "examples": [
          {
            "term": "over",
            "sentence": "Over 100 people attended the meeting.",
            "translation": "有 100 多人参加了会议。"
          },
          {
            "term": "beyond",
            "sentence": "The cost is beyond our budget.",
            "translation": "成本超出了我们的预算。"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "空间距离",
      "items": [
        {
          "phrase": "beyond the river",
          "meaning": "在河那边更远处"
        },
        {
          "phrase": "beyond the bridge",
          "meaning": "在桥那边更远处"
        },
        {
          "phrase": "beyond the mountains",
          "meaning": "在群山那边"
        },
        {
          "phrase": "beyond the border",
          "meaning": "在边境线以外更远处"
        },
        {
          "phrase": "beyond the gate",
          "meaning": "在门那边更远处"
        },
        {
          "phrase": "beyond the horizon",
          "meaning": "在地平线之外"
        }
      ]
    },
    {
      "title": "界限/范围",
      "items": [
        {
          "phrase": "beyond the limit",
          "meaning": "超过上限"
        },
        {
          "phrase": "beyond the scope",
          "meaning": "超出范围"
        },
        {
          "phrase": "beyond the rules",
          "meaning": "不在规则内/越界"
        },
        {
          "phrase": "beyond our budget",
          "meaning": "超出预算"
        },
        {
          "phrase": "beyond the boundary",
          "meaning": "越过边界"
        },
        {
          "phrase": "beyond the edge",
          "meaning": "超出边缘"
        }
      ]
    },
    {
      "title": "抽象表达",
      "items": [
        {
          "phrase": "beyond control",
          "meaning": "失控/无法控制"
        },
        {
          "phrase": "beyond repair",
          "meaning": "无法修复"
        },
        {
          "phrase": "beyond doubt",
          "meaning": "毫无疑问"
        },
        {
          "phrase": "beyond belief",
          "meaning": "难以置信"
        },
        {
          "phrase": "beyond recognition",
          "meaning": "面目全非/难以辨认"
        },
        {
          "phrase": "beyond words",
          "meaning": "难以言表"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "Walk beyond the bridge and turn left.（想表达“走过桥就左转”）",
      "correct": "Walk past the bridge and turn left.",
      "reason": "“走过/路过某点”更常用 past；beyond 更像“在桥那边更远处”的位置描述。"
    },
    {
      "wrong": "Beyond 100 people attended the meeting.",
      "correct": "Over 100 people attended the meeting.",
      "reason": "表达数量“超过”时，over 通常更自然；beyond 多用于“超出界限/能力/预算”等抽象限制。"
    },
    {
      "wrong": "The cafe is beyond the street.（想表达“在街对面”）",
      "correct": "The cafe is across the street.",
      "reason": "across 表示“在对面/跨过”；beyond 是“更远那边”，不等同于对面。"
    },
    {
      "wrong": "It's beyond of my control.",
      "correct": "It's beyond my control.",
      "reason": "beyond 后直接接名词短语：beyond my control（不要加 of）。"
    }
  ],
  "quiz": [
    {
      "prompt": "选择正确的介词：There's a small village ___ the mountains.",
      "options": [
        "beyond",
        "past",
        "outside",
        "over"
      ],
      "answer": "beyond",
      "explanation": "表示“在群山那边更远处”，用 beyond。"
    },
    {
      "prompt": "选择正确的介词：The cost is ___ our budget.",
      "options": [
        "beyond",
        "over",
        "inside",
        "between"
      ],
      "answer": "beyond",
      "explanation": "beyond + budget 表示“超出预算/界限”。"
    },
    {
      "prompt": "选择正确的介词：It's ___ my control.",
      "options": [
        "beyond",
        "without",
        "by",
        "near"
      ],
      "answer": "beyond",
      "explanation": "固定高频表达：beyond my control（无法控制）。"
    }
  ],
  "faq": [
    {
      "question": "beyond 是什么意思？",
      "answer": "beyond 表示“在某个点/边界的更远那边”或“超出界限/范围”。例句：There is a town beyond the bridge.（桥那边更远处有个小镇。）"
    },
    {
      "question": "beyond 和 past 的区别是什么？",
      "answer": "past 更像“经过/路过某点”（走过去）；beyond 更像“在那点的更远处”（位置在更远那边）。"
    },
    {
      "question": "beyond 和 outside 的区别是什么？",
      "answer": "outside 强调“在边界外”；beyond 强调“在边界/某点之外更远那边”。outside the gate vs beyond the gate。"
    },
    {
      "question": "beyond 和 over 的区别是什么？",
      "answer": "over 常用于数量“超过”（over 100 people）。beyond 更常用于“超出界限/能力/预算”等抽象限制（beyond our budget / beyond control）。"
    },
    {
      "question": "beyond 有哪些高频抽象搭配？",
      "answer": "beyond control（失控）、beyond repair（无法修复）、beyond doubt（毫无疑问）、beyond words（难以言表）等。"
    },
    {
      "question": "beyond 能用于时间吗？",
      "answer": "有时可以（beyond midnight = 过了午夜之后），但入门阶段更常用 after/past 来表达时间顺序。"
    },
    {
      "question": "beyond 的高频搭配有哪些？",
      "answer": "beyond the river/bridge/mountains, beyond the border, beyond the limit/scope, beyond my control, beyond doubt。"
    },
    {
      "question": "如何快速记住 beyond？",
      "answer": "记成“比那个点更远”：先找参照点 A，beyond A 就是在 A 的那边、更远处。"
    }
  ]
};

export default content;
