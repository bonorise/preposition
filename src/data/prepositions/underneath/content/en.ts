import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "directly under, often close to the underside",
  "tips": [
    "Underneath is often more vivid than under for direct underside position.",
    "It is common in conversational descriptions of hidden lower parts.",
    "Use below when you only need neutral lower-level meaning."
  ],
  "examples": [
    {
      "en": "There is a sticker underneath the lid.",
      "i18n": {
        "zh-CN": {
          "translation": "盖子底下有一张贴纸。"
        },
        "en": {
          "translation": "There is a sticker underneath the lid."
        }
      }
    },
    {
      "en": "He taped the note underneath the desk.",
      "i18n": {
        "zh-CN": {
          "translation": "他把便条贴在了书桌底面。"
        },
        "en": {
          "translation": "He taped the note underneath the desk."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "There is a sticker underneath the lid.",
        "i18n": {
          "zh-CN": {
            "translation": "盖子底下有一张贴纸。"
          },
          "en": {
            "translation": "There is a sticker underneath the lid."
          }
        }
      },
      {
        "en": "He taped the note underneath the desk.",
        "i18n": {
          "zh-CN": {
            "translation": "他把便条贴在了书桌底面。"
          },
          "en": {
            "translation": "He taped the note underneath the desk."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "Underneath highlights direct position under a surface, often with a vivid everyday tone. It is more concrete than below.",
    "differences": [
      {
        "term": "under",
        "description": "Under is broader and neutral; underneath is more specific to underside location.",
        "examples": [
          {
            "term": "under",
            "sentence": "The cat is under the table."
          },
          {
            "term": "underneath",
            "sentence": "The label is underneath the table."
          }
        ]
      },
      {
        "term": "below",
        "description": "Below only marks lower level. Underneath adds close underside relation.",
        "examples": [
          {
            "term": "below",
            "sentence": "The village is below the mountain."
          },
          {
            "term": "underneath",
            "sentence": "There is dust underneath the bed."
          }
        ]
      },
      {
        "term": "beneath",
        "description": "Beneath sounds formal; underneath is usually more conversational.",
        "examples": [
          {
            "term": "beneath",
            "sentence": "A river flows beneath the bridge."
          },
          {
            "term": "underneath",
            "sentence": "My keys were underneath the sofa."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Underside position",
      "items": [
        "underneath the table",
        "underneath the bed",
        "underneath the sofa",
        "underneath the lid",
        "underneath the sink",
        "underneath the stairs"
      ]
    },
    {
      "title": "Hiding and storage",
      "items": [
        "hide underneath",
        "store underneath",
        "tape underneath",
        "look underneath",
        "crawl underneath",
        "slide underneath"
      ]
    },
    {
      "title": "Everyday phrasing",
      "items": [
        "right underneath",
        "just underneath",
        "underneath it",
        "underneath here",
        "underneath there",
        "underneath the surface"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The label is underneath of the box.",
      "correct": "The label is underneath the box.",
      "reason": "Underneath takes a noun directly, without of."
    },
    {
      "wrong": "The village is underneath the mountain.",
      "correct": "The village is below the mountain.",
      "reason": "For neutral geographic level relations, below is usually more natural."
    },
    {
      "wrong": "The cat is below the table leg.",
      "correct": "The cat is underneath the table.",
      "reason": "When you mean a concrete underside location, underneath gives the clearer picture."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: There is dust ___ the bed.",
      "options": [
        "underneath",
        "below",
        "over"
      ],
      "answer": "underneath",
      "explanation": "The sentence describes a concrete underside location under the bed."
    },
    {
      "prompt": "Choose the correct preposition: He taped the note ___ the desk.",
      "options": [
        "underneath",
        "below",
        "on"
      ],
      "answer": "underneath",
      "explanation": "Underneath fits a physical note attached to the underside of a desk."
    },
    {
      "prompt": "Choose the correct preposition: My keys were right ___ the sofa.",
      "options": [
        "underneath",
        "at",
        "into"
      ],
      "answer": "underneath",
      "explanation": "Right underneath is a common phrase for immediate lower position."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of underneath?",
      "answer": "Underneath means directly under, usually close to the underside of something."
    },
    {
      "question": "How is underneath different from under?",
      "answer": "Under is neutral and broad. Underneath is more specific and vivid for underside position."
    },
    {
      "question": "How do I choose between underneath and below?",
      "answer": "Use below for neutral lower level. Use underneath for concrete underside location."
    },
    {
      "question": "How is underneath different from beneath?",
      "answer": "Beneath sounds formal; underneath is usually more conversational and everyday."
    },
    {
      "question": "What are common underneath collocations?",
      "answer": "Common phrases include underneath the table, underneath the bed, right underneath, and look underneath."
    },
    {
      "question": "What mistakes do learners make with underneath?",
      "answer": "Common issues are adding of (underneath of) and using underneath where below is better for neutral levels."
    },
    {
      "question": "Can underneath be abstract?",
      "answer": "It can be, but its main strength is concrete physical location under an object."
    },
    {
      "question": "What is a quick memory rule for underneath?",
      "answer": "Think 'underside picture': if you can imagine the lower face of an object, underneath is often the right choice."
    }
  ]
};

export default content;
