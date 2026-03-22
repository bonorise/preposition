import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "沿着/在……旁边（并行）",
  "tips": [
    "强调并行在一侧。",
    "比 beside 更有“并行”的感觉。"
  ],
  "examples": [
    {
      "en": "A path runs alongside the river.",
      "i18n": {
        "zh-CN": {
          "translation": "小路沿着河边延伸。"
        },
        "en": {
          "translation": "A path runs alongside the river."
        }
      }
    },
    {
      "en": "He walked alongside his friend.",
      "i18n": {
        "zh-CN": {
          "translation": "他和朋友并肩走。"
        },
        "en": {
          "translation": "He walked alongside his friend."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "A path runs alongside the river.",
        "i18n": {
          "zh-CN": {
            "translation": "小路沿着河边延伸。"
          },
          "en": {
            "translation": "A path runs alongside the river."
          }
        }
      },
      {
        "en": "He walked alongside his friend.",
        "i18n": {
          "zh-CN": {
            "translation": "他和朋友并肩走。"
          },
          "en": {
            "translation": "He walked alongside his friend."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move alongside the road.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 alongside the road 地移动。"
          },
          "en": {
            "translation": "Watch the marker move alongside the road."
          }
        }
      },
      {
        "en": "Then trace a second path alongside the team.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 alongside the team 的路径。"
          },
          "en": {
            "translation": "Then trace a second path alongside the team."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "alongside 强调“与参照物并行前进”，学习时要和近义动态介词区分路径关系。",
    "differences": [
      {
        "term": "along",
        "description": "alongside 更强调“与参照物并行前进”；along 常表示不同路径关系。",
        "examples": [
          {
            "term": "along",
            "sentence": "along the road",
            "translation": "示例表达：along the road"
          },
          {
            "term": "alongside",
            "sentence": "alongside the road",
            "translation": "示例表达：alongside the road"
          }
        ]
      },
      {
        "term": "beside",
        "description": "alongside 的重点是“与参照物并行前进”；beside 的运动方向或终点不同。",
        "examples": [
          {
            "term": "beside",
            "sentence": "beside the route",
            "translation": "示例表达：beside the route"
          },
          {
            "term": "alongside",
            "sentence": "alongside the road",
            "translation": "示例表达：alongside the road"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "并行路线类",
      "items": [
        {
          "phrase": "alongside the road",
          "meaning": "并行路线：alongside the road"
        },
        {
          "phrase": "alongside the river",
          "meaning": "并行路线：alongside the river"
        },
        {
          "phrase": "alongside the wall",
          "meaning": "并行路线：alongside the wall"
        },
        {
          "phrase": "alongside the path",
          "meaning": "并行路线：alongside the path"
        },
        {
          "phrase": "alongside the track",
          "meaning": "并行路线：alongside the track"
        },
        {
          "phrase": "alongside the coast",
          "meaning": "并行路线：alongside the coast"
        }
      ]
    },
    {
      "title": "并肩移动类",
      "items": [
        {
          "phrase": "alongside the team",
          "meaning": "并肩移动：alongside the team"
        },
        {
          "phrase": "alongside the coach",
          "meaning": "并肩移动：alongside the coach"
        },
        {
          "phrase": "alongside the teacher",
          "meaning": "并肩移动：alongside the teacher"
        },
        {
          "phrase": "alongside the mentor",
          "meaning": "并肩移动：alongside the mentor"
        },
        {
          "phrase": "alongside the partner",
          "meaning": "并肩移动：alongside the partner"
        },
        {
          "phrase": "alongside the guide",
          "meaning": "并肩移动：alongside the guide"
        }
      ]
    },
    {
      "title": "流程并行类",
      "items": [
        {
          "phrase": "alongside the timeline",
          "meaning": "流程并行：alongside the timeline"
        },
        {
          "phrase": "alongside the plan",
          "meaning": "流程并行：alongside the plan"
        },
        {
          "phrase": "alongside the process",
          "meaning": "流程并行：alongside the process"
        },
        {
          "phrase": "alongside the course",
          "meaning": "流程并行：alongside the course"
        },
        {
          "phrase": "alongside the project",
          "meaning": "流程并行：alongside the project"
        },
        {
          "phrase": "alongside the campaign",
          "meaning": "流程并行：alongside the campaign"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved along the road.",
      "correct": "The marker moved alongside the road.",
      "reason": "这里要表达“与参照物并行前进”，应用 alongside，而不是 along。"
    },
    {
      "wrong": "The ball rolled beside the river.",
      "correct": "The ball rolled alongside the river.",
      "reason": "alongside 更符合该路径关系；beside 会改变运动语义。"
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the road.",
      "options": [
        "alongside",
        "along",
        "beside"
      ],
      "answer": "alongside",
      "explanation": "alongside 在这里表达“与参照物并行前进”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the river.",
      "options": [
        "alongside",
        "along",
        "beside"
      ],
      "answer": "alongside",
      "explanation": "alongside 在这里表达“与参照物并行前进”，因此最准确。"
    },
    {
      "prompt": "Choose the correct preposition: ___ the team.",
      "options": [
        "alongside",
        "along",
        "beside"
      ],
      "answer": "alongside",
      "explanation": "alongside 在这里表达“与参照物并行前进”，因此最准确。"
    }
  ]
};

export default content;
