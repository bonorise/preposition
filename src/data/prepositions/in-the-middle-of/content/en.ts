import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "in the middle of; at the center",
  "tips": [
    "Use it for the central position of an area, line, group, or process.",
    "It focuses on center point, unlike among which focuses on being within a group.",
    "Common pattern: in the middle of + place/event/activity."
  ],
  "examples": [
    {
      "en": "The tree is in the middle of the yard.",
      "i18n": {
        "zh-CN": {
          "translation": "树在院子中央。"
        },
        "en": {
          "translation": "The tree is in the middle of the yard."
        }
      }
    },
    {
      "en": "He sat in the middle of the group.",
      "i18n": {
        "zh-CN": {
          "translation": "他坐在小组中间。"
        },
        "en": {
          "translation": "He sat in the middle of the group."
        }
      }
    },
    {
      "en": "Sorry, I called you in the middle of your class.",
      "i18n": {
        "zh-CN": {
          "translation": "抱歉，我在你上课到一半时给你打了电话。"
        },
        "en": {
          "translation": "Sorry, I called you in the middle of your class."
        }
      }
    }
  ],
  "comparison": {
    "summary": "in the middle of focuses on \"in the middle of; at the center\", so compare it with close alternatives for beginners.",
    "differences": [
      {
        "term": "in",
        "description": "in the middle of and in emphasize different spatial relations.",
        "examples": [
          {
            "term": "in",
            "sentence": "in the area"
          },
          {
            "term": "in the middle of",
            "sentence": "in the middle of the area"
          }
        ]
      },
      {
        "term": "on",
        "description": "in the middle of is often confused with on; check contact, boundary, or direction.",
        "examples": [
          {
            "term": "on",
            "sentence": "on the area"
          },
          {
            "term": "in the middle of",
            "sentence": "in the middle of the area"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Spatial contexts",
      "items": [
        "in the middle of the room",
        "in the middle of the table",
        "in the middle of the box",
        "in the middle of the wall",
        "in the middle of the door",
        "in the middle of the corner"
      ]
    },
    {
      "title": "Route positions",
      "items": [
        "in the middle of the path",
        "in the middle of the route",
        "in the middle of the gate",
        "in the middle of the bridge",
        "in the middle of the center",
        "in the middle of the line"
      ]
    },
    {
      "title": "Abstract patterns",
      "items": [
        "in the middle of the plan",
        "in the middle of the process",
        "in the middle of the result",
        "in the middle of the idea",
        "in the middle of the goal",
        "in the middle of the problem"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The ball is in the box.",
      "correct": "The ball is in the middle of the box.",
      "reason": "This context matches in the middle of, not in."
    },
    {
      "wrong": "The marker moved on the table.",
      "correct": "The marker moved in the middle of the table.",
      "reason": "Keep in the middle of for this relation; on changes the meaning."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ the room.",
      "options": [
        "in the middle of",
        "in",
        "on"
      ],
      "answer": "in the middle of",
      "explanation": "Use in the middle of because it best matches this page's target relation."
    },
    {
      "prompt": "Choose the correct preposition: ___ the path.",
      "options": [
        "in the middle of",
        "in",
        "on"
      ],
      "answer": "in the middle of",
      "explanation": "Use in the middle of because it best matches this page's target relation."
    },
    {
      "prompt": "Choose the correct preposition: ___ the target area.",
      "options": [
        "in the middle of",
        "in",
        "on"
      ],
      "answer": "in the middle of",
      "explanation": "Use in the middle of because it best matches this page's target relation."
    }
  ]
};

export default content;
