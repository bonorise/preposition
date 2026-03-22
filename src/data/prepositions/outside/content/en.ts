import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "outside; not inside a place or boundary",
  "tips": [
    "Opposite of inside: outside a boundary/building/room.",
    "Outside is location; for leaving (movement), use out of.",
    "It can also mean beyond a range: outside the scope / outside office hours."
  ],
  "examples": [
    {
      "en": "The dog is outside the house.",
      "i18n": {
        "zh-CN": {
          "translation": "狗在房子外面。"
        },
        "en": {
          "translation": "The dog is outside the house."
        }
      }
    },
    {
      "en": "He waits outside the room.",
      "i18n": {
        "zh-CN": {
          "translation": "他在房间外等。"
        },
        "en": {
          "translation": "He waits outside the room."
        }
      }
    }
  ],
  "comparison": {
    "summary": "Outside means not inside a boundary (a location). Beginners often confuse it with out of (movement) and without (lack).",
    "differences": [
      {
        "term": "inside",
        "description": "Inside means within the boundary; outside means not within it.",
        "examples": [
          {
            "term": "inside",
            "sentence": "The dog is inside the house."
          },
          {
            "term": "outside",
            "sentence": "The dog is outside the house."
          }
        ]
      },
      {
        "term": "out of",
        "description": "Out of emphasizes leaving (movement) from inside to outside; outside is a static location.",
        "examples": [
          {
            "term": "out of",
            "sentence": "He went out of the room."
          },
          {
            "term": "outside",
            "sentence": "He is waiting outside the room."
          }
        ]
      },
      {
        "term": "without",
        "description": "Without means \"lacking / not having\"; outside is about location or being beyond a range.",
        "examples": [
          {
            "term": "without",
            "sentence": "I left home without my keys."
          },
          {
            "term": "outside",
            "sentence": "Please wait outside the office."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Places",
      "items": [
        "outside the house",
        "outside the door",
        "outside the room",
        "outside the school",
        "outside the city",
        "outside the window"
      ]
    },
    {
      "title": "Verbs + outside",
      "items": [
        "wait outside",
        "stand outside",
        "meet outside",
        "be outside",
        "go outside",
        "sit outside"
      ]
    },
    {
      "title": "Abstract / idioms",
      "items": [
        "outside the box",
        "outside the scope",
        "outside the rules",
        "outside normal hours",
        "outside my comfort zone",
        "outside the system"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "He went outside the room.",
      "correct": "He went out of the room.",
      "reason": "Outside is location; out of is movement leaving a place."
    },
    {
      "wrong": "I left home outside my keys.",
      "correct": "I left home without my keys.",
      "reason": "Without means \"lacking / not having\"; outside is not used for that."
    },
    {
      "wrong": "The chair is outside the table.",
      "correct": "The chair is next to the table.",
      "reason": "Outside is about a boundary; next to is side-by-side adjacency."
    },
    {
      "wrong": "He is outside of.",
      "correct": "He is outside.",
      "reason": "Outside can be an adverb on its own. Don't add of unless you need outside of + noun (often unnecessary)."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: The kids are playing ___ the house.",
      "options": [
        "outside",
        "inside",
        "out of",
        "without"
      ],
      "answer": "outside",
      "explanation": "It describes a location: not inside the house."
    },
    {
      "prompt": "Choose the correct preposition: Please wait ___ the room.",
      "options": [
        "outside",
        "out of",
        "inside",
        "without"
      ],
      "answer": "outside",
      "explanation": "Wait is a static situation; outside marks the location."
    },
    {
      "prompt": "Choose the correct preposition: This topic is ___ the scope of today's lesson.",
      "options": [
        "outside",
        "inside",
        "between",
        "without"
      ],
      "answer": "outside",
      "explanation": "Outside + scope means \"beyond the range\"."
    }
  ],
  "faq": [
    {
      "question": "What does \"outside\" mean?",
      "answer": "Outside means \"not inside a boundary\" (a location). Example: The dog is outside the house."
    },
    {
      "question": "When do I use \"outside\" vs \"out of\"?",
      "answer": "Use outside for location (wait outside the room). Use out of for movement leaving a place (go out of the room)."
    },
    {
      "question": "Is \"outside\" a preposition or an adverb?",
      "answer": "Both. Preposition: outside + noun (outside the door). Adverb: go outside / He is outside (no object)."
    },
    {
      "question": "What is the difference between \"outside\" and \"without\"?",
      "answer": "Outside is about location or being beyond a range (outside the city, outside the scope). Without means \"lacking / not having\" (without money, without my keys)."
    },
    {
      "question": "Can I say \"outside of\"?",
      "answer": "For basic location, outside is usually enough (outside the house). Outside of is common in some styles and can also mean \"except for\", but beginners can often omit of."
    },
    {
      "question": "How do I use \"outside\" for abstract meaning (scope/rules/hours)?",
      "answer": "Use outside + noun to mean \"beyond\": outside the scope, outside the rules, outside office hours."
    },
    {
      "question": "What are common collocations with \"outside\"?",
      "answer": "outside the house, outside the door, wait outside, go outside, outside the box, outside the scope."
    },
    {
      "question": "How can I remember \"outside\" quickly?",
      "answer": "Picture a box boundary: not inside = outside. Leaving the box (movement) = out of."
    }
  ]
};

export default content;
