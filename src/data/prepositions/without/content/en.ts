import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "without; outside boundaries",
  "tips": [
    "Outside a limit or boundary.",
    "Opposite of within."
  ],
  "examples": [
    {
      "en": "The camp is without the city walls.",
      "i18n": {
        "zh-CN": {
          "translation": "营地在城墙之外。"
        },
        "en": {
          "translation": "The camp is without the city walls."
        }
      }
    },
    {
      "en": "He waited without the gate.",
      "i18n": {
        "zh-CN": {
          "translation": "他在大门外等。"
        },
        "en": {
          "translation": "He waited without the gate."
        }
      }
    }
  ],
  "comparison": {
    "summary": "without focuses on \"without; outside boundaries\", so compare it with close alternatives for beginners.",
    "differences": [
      {
        "term": "outside",
        "description": "without and outside emphasize different spatial relations.",
        "examples": [
          {
            "term": "outside",
            "sentence": "outside the area"
          },
          {
            "term": "without",
            "sentence": "without the area"
          }
        ]
      },
      {
        "term": "within",
        "description": "without is often confused with within; check contact, boundary, or direction.",
        "examples": [
          {
            "term": "within",
            "sentence": "within the area"
          },
          {
            "term": "without",
            "sentence": "without the area"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Spatial contexts",
      "items": [
        "without the room",
        "without the table",
        "without the box",
        "without the wall",
        "without the door",
        "without the corner"
      ]
    },
    {
      "title": "Route positions",
      "items": [
        "without the path",
        "without the route",
        "without the gate",
        "without the bridge",
        "without the center",
        "without the line"
      ]
    },
    {
      "title": "Abstract patterns",
      "items": [
        "without the plan",
        "without the process",
        "without the result",
        "without the idea",
        "without the goal",
        "without the problem"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The ball is outside the box.",
      "correct": "The ball is without the box.",
      "reason": "This context matches without, not outside."
    },
    {
      "wrong": "The marker moved within the table.",
      "correct": "The marker moved without the table.",
      "reason": "Keep without for this relation; within changes the meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the room.",
      "options": [
        "without",
        "outside",
        "within"
      ],
      "answer": "without",
      "explanation": "Use without because it best matches this page's target relation."
    },
    {
      "prompt": "Choose the correct preposition: ___ the path.",
      "options": [
        "without",
        "outside",
        "within"
      ],
      "answer": "without",
      "explanation": "Use without because it best matches this page's target relation."
    },
    {
      "prompt": "Choose the correct preposition: ___ the target area.",
      "options": [
        "without",
        "outside",
        "within"
      ],
      "answer": "without",
      "explanation": "Use without because it best matches this page's target relation."
    }
  ]
};

export default content;
