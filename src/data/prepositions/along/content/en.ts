import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "along; following a line",
  "tips": [
    "Following a path or edge.",
    "Often with roads or rivers."
  ],
  "examples": [
    {
      "en": "We walked along the river.",
      "i18n": {
        "zh-CN": {
          "translation": "我们沿着河边走。"
        },
        "en": {
          "translation": "We walked along the river."
        }
      }
    },
    {
      "en": "The lamp posts line up along the street.",
      "i18n": {
        "zh-CN": {
          "translation": "路灯沿街排开。"
        },
        "en": {
          "translation": "The lamp posts line up along the street."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "We walked along the river.",
        "i18n": {
          "zh-CN": {
            "translation": "我们沿着河边走。"
          },
          "en": {
            "translation": "We walked along the river."
          }
        }
      },
      {
        "en": "The lamp posts line up along the street.",
        "i18n": {
          "zh-CN": {
            "translation": "路灯沿街排开。"
          },
          "en": {
            "translation": "The lamp posts line up along the street."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "Watch the marker move along the road.",
        "i18n": {
          "zh-CN": {
            "translation": "观察标记如何 along the road 地移动。"
          },
          "en": {
            "translation": "Watch the marker move along the road."
          }
        }
      },
      {
        "en": "Then trace a second path along the edge.",
        "i18n": {
          "zh-CN": {
            "translation": "然后再追踪一条 along the edge 的路径。"
          },
          "en": {
            "translation": "Then trace a second path along the edge."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "along mainly shows movement following a line or edge; compare it with similar dynamic prepositions to avoid path confusion.",
    "differences": [
      {
        "term": "across",
        "description": "along focuses on movement following a line or edge, while across usually marks a different path relation.",
        "examples": [
          {
            "term": "across",
            "sentence": "across the street"
          },
          {
            "term": "along",
            "sentence": "along the road"
          }
        ]
      },
      {
        "term": "through",
        "description": "along highlights movement following a line or edge; through often changes direction or endpoint meaning.",
        "examples": [
          {
            "term": "through",
            "sentence": "through the route"
          },
          {
            "term": "along",
            "sentence": "along the road"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Linear routes",
      "items": [
        "along the road",
        "along the river",
        "along the beach",
        "along the wall",
        "along the corridor",
        "along the street"
      ]
    },
    {
      "title": "Edges and borders",
      "items": [
        "along the edge",
        "along the border",
        "along the line",
        "along the path",
        "along the coast",
        "along the fence"
      ]
    },
    {
      "title": "Abstract paths",
      "items": [
        "along the timeline",
        "along the curve",
        "along the route",
        "along the track",
        "along the channel",
        "along the sequence"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The marker moved across the road.",
      "correct": "The marker moved along the road.",
      "reason": "Use along for movement following a line or edge; across changes the path relation."
    },
    {
      "wrong": "The ball rolled through the river.",
      "correct": "The ball rolled along the river.",
      "reason": "along matches the intended motion; through shifts direction or endpoint meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the road.",
      "options": [
        "along",
        "across",
        "through"
      ],
      "answer": "along",
      "explanation": "Choose along because this sentence needs movement following a line or edge."
    },
    {
      "prompt": "Choose the correct preposition: ___ the river.",
      "options": [
        "along",
        "across",
        "through"
      ],
      "answer": "along",
      "explanation": "Choose along because this sentence needs movement following a line or edge."
    },
    {
      "prompt": "Choose the correct preposition: ___ the edge.",
      "options": [
        "along",
        "across",
        "through"
      ],
      "answer": "along",
      "explanation": "Choose along because this sentence needs movement following a line or edge."
    }
  ]
};

export default content;
