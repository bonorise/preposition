import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "from (origin/start point; source)",
  "tips": [
    "Core idea: a starting point or source (where something begins/comes).",
    "Common pattern: from A to B (place or time range).",
    "Don’t mix up: since (start time + still true now) and out of (movement from inside)."
  ],
  "examples": [
    {
      "en": "She moved from Paris to Berlin.",
      "i18n": {
        "zh-CN": {
          "translation": "她从巴黎搬到柏林。"
        },
        "en": {
          "translation": "She moved from Paris to Berlin."
        }
      }
    },
    {
      "en": "The store is open from 9 a.m. to 6 p.m.",
      "i18n": {
        "zh-CN": {
          "translation": "这家店营业时间是上午 9 点到下午 6 点。"
        },
        "en": {
          "translation": "The store is open from 9 a.m. to 6 p.m."
        }
      }
    },
    {
      "en": "I got a message from my boss.",
      "i18n": {
        "zh-CN": {
          "translation": "我收到了老板发来的消息。"
        },
        "en": {
          "translation": "I got a message from my boss."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "She moved from Paris to Berlin.",
        "i18n": {
          "zh-CN": {
            "translation": "她从巴黎搬到柏林。"
          },
          "en": {
            "translation": "She moved from Paris to Berlin."
          }
        }
      },
      {
        "en": "The store is open from 9 a.m. to 6 p.m.",
        "i18n": {
          "zh-CN": {
            "translation": "这家店营业时间是上午 9 点到下午 6 点。"
          },
          "en": {
            "translation": "The store is open from 9 a.m. to 6 p.m."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Practice this time expression: from Monday to Friday.",
        "i18n": {
          "zh-CN": {
            "translation": "练习这个时间表达：from Monday to Friday。"
          },
          "en": {
            "translation": "Practice this time expression: from Monday to Friday."
          }
        }
      },
      {
        "en": "Another common pattern is: from 9 to 5.",
        "i18n": {
          "zh-CN": {
            "translation": "另一个常见表达是：from 9 to 5。"
          },
          "en": {
            "translation": "Another common pattern is: from 9 to 5."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "The workshop moved from Tuesday to Thursday.",
        "i18n": {
          "zh-CN": {
            "translation": "研讨会从周二改到了周四。"
          },
          "en": {
            "translation": "The workshop moved from Tuesday to Thursday."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "from marks an origin/source. For time, it often pairs with to for a range; since is used for a start time continuing to now; out of is movement from inside.",
    "differences": [
      {
        "term": "since",
        "description": "Use from for a start point in a range (often with to). Use since for a starting time when something continues to the present.",
        "examples": [
          {
            "term": "from",
            "sentence": "The cafe is open from 8 to 4."
          },
          {
            "term": "since",
            "sentence": "I have worked here since 2019."
          }
        ]
      },
      {
        "term": "out of",
        "description": "Use from for source/origin. Use out of for movement from inside an enclosed space to outside.",
        "examples": [
          {
            "term": "from",
            "sentence": "I got an email from my teacher."
          },
          {
            "term": "out of",
            "sentence": "She ran out of the room."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Origin / Source",
      "items": [
        "come from",
        "be from",
        "get … from …",
        "hear from",
        "borrow … from …",
        "learn … from …"
      ]
    },
    {
      "title": "Time / Range",
      "items": [
        "from Monday to Friday",
        "from 9 to 5",
        "from A to Z",
        "from now on",
        "from then on",
        "from start to finish"
      ]
    },
    {
      "title": "Distance / Separation",
      "items": [
        "far from",
        "away from",
        "different from",
        "separate … from …",
        "protect … from …",
        "stop … from …"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "I have lived here from 2019.",
      "correct": "I have lived here since 2019.",
      "reason": "With the present perfect for a situation continuing to now, use since + a start time, not from."
    },
    {
      "wrong": "The store is open from 9 until 6.",
      "correct": "The store is open from 9 to 6.",
      "reason": "For a clear range with two endpoints, the most common pattern is from A to B."
    },
    {
      "wrong": "He walked from of the room.",
      "correct": "He walked out of the room.",
      "reason": "Use out of for movement from inside an enclosed space. From focuses on the source/start point."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the best option: The shop is open ___ 9 a.m. to 6 p.m.",
      "options": [
        "from",
        "since",
        "out of"
      ],
      "answer": "from",
      "explanation": "Use from A to B to express a time range with two endpoints."
    },
    {
      "prompt": "Choose the best option: I have known her ___ 2020.",
      "options": [
        "from",
        "since",
        "between"
      ],
      "answer": "since",
      "explanation": "With present perfect for something continuing to now, use since + a start time."
    },
    {
      "prompt": "Choose the best option: She took the book ___ her bag.",
      "options": [
        "from",
        "out of",
        "to"
      ],
      "answer": "out of",
      "explanation": "Out of is used for movement from inside a container to outside."
    }
  ],
  "faq": [
    {
      "question": "What does \"from\" mean?",
      "answer": "From marks an origin or source: where something starts or where it comes from."
    },
    {
      "question": "How do I use \"from\" in a simple pattern?",
      "answer": "Use from + place/person/thing: from London, from my friend, from the internet."
    },
    {
      "question": "How do I talk about a time range with \"from\"?",
      "answer": "Use from A to B: The store is open from 9 a.m. to 6 p.m."
    },
    {
      "question": "From vs since: what's the difference?",
      "answer": "From often pairs with to for a range. Since is used for a start time continuing to now (I have lived here since 2019)."
    },
    {
      "question": "From vs out of: what's the difference?",
      "answer": "From is source/origin (a message from her). Out of is movement from inside to outside (out of the room)."
    },
    {
      "question": "What are common collocations with \"from\"?",
      "answer": "High-frequency: come from, be from, hear from, learn from, protect from, different from."
    }
  ]
};

export default content;
