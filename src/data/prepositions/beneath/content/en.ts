import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "under; below in a formal or literary tone",
  "tips": [
    "Beneath is more formal than under in many contexts.",
    "It often highlights directly under in a descriptive or literary style.",
    "It also appears in abstract status expressions like beneath his dignity."
  ],
  "examples": [
    {
      "en": "The treasure is beneath the floor.",
      "i18n": {
        "zh-CN": {
          "translation": "宝藏在地板下面。"
        },
        "en": {
          "translation": "The treasure is beneath the floor."
        }
      }
    },
    {
      "en": "Such behavior is beneath him.",
      "i18n": {
        "zh-CN": {
          "translation": "这种行为有失他的身份。"
        },
        "en": {
          "translation": "Such behavior is beneath him."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The treasure is beneath the floor.",
        "i18n": {
          "zh-CN": {
            "translation": "宝藏在地板下面。"
          },
          "en": {
            "translation": "The treasure is beneath the floor."
          }
        }
      },
      {
        "en": "Shadows gathered beneath the trees.",
        "i18n": {
          "zh-CN": {
            "translation": "树下聚起了阴影。"
          },
          "en": {
            "translation": "Shadows gathered beneath the trees."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Beneath shares core meaning with under, but it carries a more formal or literary tone and supports abstract status meaning.",
    "differences": [
      {
        "term": "under",
        "description": "Under is the everyday default. Beneath is a stylistic upgrade for formal writing or narrative tone.",
        "examples": [
          {
            "term": "under",
            "sentence": "The cat is under the table."
          },
          {
            "term": "beneath",
            "sentence": "The vault lies beneath the city."
          }
        ]
      },
      {
        "term": "below",
        "description": "Below is neutral for levels and numbers; beneath is not usually the first choice for numeric thresholds.",
        "examples": [
          {
            "term": "below",
            "sentence": "The temperature is below zero."
          },
          {
            "term": "beneath",
            "sentence": "A river runs beneath the bridge."
          }
        ]
      },
      {
        "term": "underneath",
        "description": "Underneath is more conversational and often physical. Beneath sounds more formal and literary.",
        "examples": [
          {
            "term": "underneath",
            "sentence": "The label is underneath the box."
          },
          {
            "term": "beneath",
            "sentence": "The roots spread beneath the soil."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Spatial position",
      "items": [
        "beneath the bridge",
        "beneath the floor",
        "beneath the surface",
        "beneath the trees",
        "beneath the ground",
        "beneath the waves"
      ]
    },
    {
      "title": "Formal style",
      "items": [
        "beneath notice",
        "beneath contempt",
        "beneath the dignity of",
        "beneath criticism",
        "beneath the city",
        "beneath the soil"
      ]
    },
    {
      "title": "Abstract meaning",
      "items": [
        "beneath him",
        "beneath her",
        "beneath me",
        "beneath our standards",
        "beneath expectation",
        "beneath the minimum"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The treasure is beneath of the floor.",
      "correct": "The treasure is beneath the floor.",
      "reason": "Beneath takes a noun directly; do not add of."
    },
    {
      "wrong": "The temperature is beneath zero.",
      "correct": "The temperature is below zero.",
      "reason": "For numbers and temperatures, below is the natural high-frequency form."
    },
    {
      "wrong": "This job is under my dignity.",
      "correct": "This job is beneath my dignity.",
      "reason": "The fixed abstract expression is beneath one's dignity."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: A tunnel runs ___ the old town.",
      "options": [
        "beneath",
        "below",
        "under"
      ],
      "answer": "beneath",
      "explanation": "Beneath is a strong formal option for 'under' in descriptive writing."
    },
    {
      "prompt": "Choose the correct preposition: Such behavior is ___ her dignity.",
      "options": [
        "beneath",
        "under",
        "below"
      ],
      "answer": "beneath",
      "explanation": "The fixed phrase is beneath someone's dignity."
    },
    {
      "prompt": "Choose the correct preposition: The roots spread ___ the soil.",
      "options": [
        "beneath",
        "on",
        "over"
      ],
      "answer": "beneath",
      "explanation": "The meaning is physically under the soil layer."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of beneath?",
      "answer": "Beneath means under, with a more formal or literary tone than under."
    },
    {
      "question": "How is beneath different from under?",
      "answer": "Under is everyday and neutral. Beneath is stylistic, often used in formal or descriptive writing."
    },
    {
      "question": "How is beneath different from below?",
      "answer": "Below is usually better for neutral level and number comparisons. Beneath is more stylistic for spatial or abstract tone."
    },
    {
      "question": "Can beneath carry abstract meaning?",
      "answer": "Yes. A common pattern is beneath someone's dignity, meaning unworthy or beneath status."
    },
    {
      "question": "What are common beneath collocations?",
      "answer": "Common collocations include beneath the bridge, beneath the surface, beneath notice, and beneath contempt."
    },
    {
      "question": "What mistakes do learners make with beneath?",
      "answer": "Common errors include adding of (beneath of) and using beneath where below is expected for numbers or temperature."
    },
    {
      "question": "When should I avoid beneath?",
      "answer": "In plain everyday speech, under or below is often more natural and frequent."
    },
    {
      "question": "What is a quick memory rule for beneath?",
      "answer": "Think 'formal under.' Use it when you want a refined tone or abstract status nuance."
    }
  ]
};

export default content;
