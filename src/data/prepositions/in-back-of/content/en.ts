import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "behind (informal AmE)",
  "tips": [
    "An informal American way to say behind (mostly physical location).",
    "In formal writing or figurative meanings, prefer behind.",
    "Don't confuse it with in the back of (= inside the rear part)."
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
    "summary": "in back of is an informal American variant of behind (mostly physical location). In formal writing and figurative meanings, behind is safer. Don't confuse it with in the back of (= inside the rear part).",
    "differences": [
      {
        "term": "behind",
        "description": "Mostly the same meaning. in back of sounds more casual/AmE; behind is the neutral default and works for figurative uses.",
        "examples": [
          {
            "term": "behind",
            "sentence": "The garage is behind the house."
          },
          {
            "term": "in back of",
            "sentence": "The garage is in back of the house."
          }
        ]
      },
      {
        "term": "in the back of",
        "description": "in back of = behind (outside). in the back of = inside the rear part of something (inside).",
        "examples": [
          {
            "term": "in the back of",
            "sentence": "My bag is in the back of the car."
          },
          {
            "term": "in back of",
            "sentence": "The bike is in back of the car."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Places & buildings",
      "items": [
        "in back of the house",
        "in back of the store",
        "in back of the school",
        "in back of the building",
        "in back of the restaurant",
        "in back of the garage"
      ]
    },
    {
      "title": "Everyday objects",
      "items": [
        "in back of the car",
        "in back of the bus",
        "in back of the truck",
        "in back of the box",
        "in back of the tree",
        "in back of the shed"
      ]
    },
    {
      "title": "People & positions",
      "items": [
        "in back of me",
        "in back of you",
        "in back of him",
        "in back of her",
        "in back of us",
        "in back of the line"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The garage is in back the house.",
      "correct": "The garage is in back of the house.",
      "reason": "The fixed phrase is in back of + noun. Don't drop of."
    },
    {
      "wrong": "My bag is in back of the car. (inside)",
      "correct": "My bag is in the back of the car.",
      "reason": "in back of means behind the car (outside). in the back of means inside the rear part."
    },
    {
      "wrong": "The reason is in back of the delay.",
      "correct": "The reason is behind the delay.",
      "reason": "For figurative meanings (reason/progress), behind is natural. in back of is mainly physical and informal."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the more casual American option: The garage is ___ the house.",
      "options": [
        "in back of",
        "behind",
        "in the back of"
      ],
      "answer": "in back of",
      "explanation": "For physical location, in back of and behind both work; in back of is the more informal American choice. in the back of means inside the rear part."
    },
    {
      "prompt": "Choose the best phrase: My backpack is ___ the car (inside, near the trunk).",
      "options": [
        "in the back of",
        "in back of",
        "behind"
      ],
      "answer": "in the back of",
      "explanation": "in the back of means inside the rear part. in back of/behind means behind the car (outside)."
    },
    {
      "prompt": "Choose the natural option: We're ___ schedule.",
      "options": [
        "behind",
        "in back of",
        "in the back of"
      ],
      "answer": "behind",
      "explanation": "Figurative uses like \"late\" or \"the reason\" use behind. in back of is mainly physical and informal."
    }
  ],
  "faq": [
    {
      "question": "What does \"in back of\" mean?",
      "answer": "It means behind (informal, mostly American English), usually for physical location."
    },
    {
      "question": "When should I use \"in back of\"?",
      "answer": "Use it in casual spoken American English to describe physical position behind something: The garage is in back of the house."
    },
    {
      "question": "What is the difference between \"in back of\" and \"behind\"?",
      "answer": "In most spatial situations they mean the same. in back of is more casual/AmE; behind is the neutral default and is also used in formal writing and figurative meanings (behind schedule, the reason behind...)."
    },
    {
      "question": "What is the difference between \"in back of\" and \"in the back of\"?",
      "answer": "in back of (≈ behind) usually means behind something outside. in the back of means inside the rear part. Example: My bag is in the back of the car (inside) vs The bike is in back of the car (outside)."
    },
    {
      "question": "Can \"in back of\" be used for time expressions?",
      "answer": "Mostly no. For progress/time language, behind is much more common (behind schedule)."
    },
    {
      "question": "What is a common mistake when using \"in back of\"?",
      "answer": "Two common mistakes: dropping of (in back the house ✗) and confusing in back of (outside) with in the back of (inside)."
    },
    {
      "question": "What are common collocations with \"in back of\"?",
      "answer": "High-frequency examples: in back of the house, in back of the store, in back of the school, in back of the building, in back of the car, in back of the line."
    },
    {
      "question": "How can I remember \"in back of\" quickly?",
      "answer": "Memorize one pair: in back of = behind (casual AmE, mostly physical). Then add the contrast: in the back of = inside the rear part."
    }
  ]
};

export default content;
