import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "within: inside a boundary, before a deadline, or within a limit",
  "cardMeaning": "within: inside a limit or boundary",
  "tips": [
    "Within means inside a boundary or before a deadline. Think of it as the opposite of beyond.",
    "It is more formal than in and is common in written English, especially for time limits.",
    "Within usually implies a maximum limit: complete it within an hour (not longer than an hour)."
  ],
  "examples": [
    {
      "en": "Stay within the lines.",
      "i18n": {
        "en": { "translation": "Stay within the lines." },
        "zh-CN": { "translation": "保持在边线内。" }
      }
    },
    {
      "en": "The shop is within the city walls.",
      "i18n": {
        "en": { "translation": "The shop is within the city walls." },
        "zh-CN": { "translation": "商店在城墙之内。" }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "Stay within the lines.",
        "i18n": {
          "en": { "translation": "Stay within the lines." },
          "zh-CN": { "translation": "保持在边线内。" }
        }
      },
      {
        "en": "The camp is within the protected zone.",
        "i18n": {
          "en": { "translation": "The camp is within the protected zone." },
          "zh-CN": { "translation": "营地在保护区范围内。" }
        }
      }
    ],
    "time": [
      {
        "en": "We must finish within three days.",
        "i18n": {
          "en": { "translation": "We must finish within three days." },
          "zh-CN": { "translation": "我们必须在三天内完成。" }
        }
      },
      {
        "en": "You have to return the book within two weeks.",
        "i18n": {
          "en": { "translation": "You have to return the book within two weeks." },
          "zh-CN": { "translation": "你需要在两周内归还这本书。" }
        }
      }
    ]
  },
  "comparison": {
    "summary": "within means inside a boundary or before a deadline. The key confusion is between within, in, and by for time limits.",
    "differences": [
      {
        "term": "in",
        "description": "in marks a different temporal or spatial relation. within specifically means inside a limit before it ends, and is more formal.",
        "examples": [
          {
            "term": "in",
            "sentence": "We will finish in three days. (at some point after three days)"
          },
          {
            "term": "within",
            "sentence": "We will finish within three days. (before three days pass)"
          }
        ]
      },
      {
        "term": "by",
        "description": "by means the deadline itself as the latest moment. within means inside the window before the deadline.",
        "examples": [
          {
            "term": "by",
            "sentence": "Finish by Monday. (Monday is the deadline)"
          },
          {
            "term": "within",
            "sentence": "Finish within three days. (any time before day three)"
          }
        ]
      },
      {
        "term": "inside",
        "description": "inside is more spatial and informal; within is more common for time limits and formal boundaries.",
        "examples": [
          {
            "term": "inside",
            "sentence": "The dog is inside the house."
          },
          {
            "term": "within",
            "sentence": "The project is within budget."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Time limits",
      "items": [
        "within an hour",
        "within two days",
        "within a week",
        "within this month",
        "within minutes",
        "within one semester"
      ]
    },
    {
      "title": "Deadline windows",
      "items": [
        "within the deadline",
        "within working hours",
        "within the first quarter",
        "within the next year",
        "within the allowed time",
        "within the time limit"
      ]
    },
    {
      "title": "Constraint language",
      "items": [
        "within reason",
        "within reach",
        "within budget",
        "within the plan",
        "within scope",
        "within expectations"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We will finish in an hour.",
      "correct": "We will finish within an hour.",
      "reason": "Use within to mean 'before a time limit ends'. in an hour means 'after one hour passes', which is different."
    },
    {
      "wrong": "The report is due by three days.",
      "correct": "The report is due within three days.",
      "reason": "Use by for the deadline itself (Monday is the deadline). Use within for the window before the deadline."
    }
  ],
  "quiz": [
    {
      "prompt": "You must complete the task ___ three days.",
      "options": ["within", "in", "by"],
      "answer": "within",
      "explanation": "Within three days means any time before three days pass, so within is correct here."
    },
    {
      "prompt": "The package will arrive ___ this week.",
      "options": ["within", "in", "by"],
      "answer": "in",
      "explanation": "in this week means during this week, which is a different relation from within's 'inside a limit' meaning."
    },
    {
      "prompt": "Finish your work ___ Friday.",
      "options": ["by", "within", "in"],
      "answer": "by",
      "explanation": "by Friday means Friday is the deadline. within Friday would be unusual since Friday is a specific point."
    }
  ],
  "faq": [
    {
      "question": "What is the core meaning of the preposition within?",
      "answer": "Within means inside a boundary, before a deadline, or within a limit. Think of it as the opposite of beyond and as a more formal version of inside when used for limits."
    },
    {
      "question": "What is the difference between within and in for time?",
      "answer": "We will finish within three days means you must finish before three days pass. We will finish in three days means at some point after three days. They are nearly opposite."
    },
    {
      "question": "What is the difference between within and by?",
      "answer": "by marks the deadline itself as the latest moment (finish by Monday = Monday is the deadline). within means any time inside the window before the deadline (finish within three days = before day three)."
    },
    {
      "question": "Can within be used for space as well as time?",
      "answer": "Yes. Within is commonly used for spatial boundaries (within the city walls, within the building) as well as time limits and budgets."
    },
    {
      "question": "What is a common learner mistake with within?",
      "answer": "Learners often use in instead of within for time limits. Remember: within always suggests a maximum limit that should not be exceeded."
    },
    {
      "question": "What are common collocations with within?",
      "answer": "High-frequency collocations include: within an hour, within the deadline, within budget, within reason, within reach, and within the time limit."
    },
    {
      "question": "Is within formal?",
      "answer": "Yes. Within is more formal than inside and is more common in written English, especially in business, legal, and administrative contexts."
    }
  ]
};

export default content;
