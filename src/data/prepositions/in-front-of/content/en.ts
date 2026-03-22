import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "in front of (outside; facing)",
  "tips": [
    "Usually an outside position before something: in front of + noun.",
    "For the inside front part, use in the front of.",
    "For time order, use before (not in front of)."
  ],
  "examples": [
    {
      "en": "The ball is in front of the box.",
      "i18n": {
        "zh-CN": {
          "translation": "球在盒子前面（盒子外部）。"
        },
        "en": {
          "translation": "The ball is in front of the box."
        }
      }
    },
    {
      "en": "She stands in front of the mirror.",
      "i18n": {
        "zh-CN": {
          "translation": "她站在镜子前面（面对镜子）。"
        },
        "en": {
          "translation": "She stands in front of the mirror."
        }
      }
    }
  ],
  "comparison": {
    "summary": "in front of describes an outside position before something (often in your view). Don't confuse it with in the front of (= inside the front part). For time order, use before.",
    "differences": [
      {
        "term": "in the front of (inside)",
        "description": "in front of is usually outside. in the front of is inside the front part of something (in a car/room/bus).",
        "examples": [
          {
            "term": "in the front of",
            "sentence": "I sat in the front of the bus."
          },
          {
            "term": "in front of",
            "sentence": "We waited in front of the bus."
          }
        ]
      },
      {
        "term": "before (time order)",
        "description": "Use before for time order (earlier than). in front of is not used for time sequence.",
        "examples": [
          {
            "term": "before",
            "sentence": "Please finish your homework before dinner."
          },
          {
            "term": "in front of",
            "sentence": "The car is parked in front of the house."
          }
        ]
      },
      {
        "term": "ahead of",
        "description": "ahead of often means further forward/leading (line, route, schedule). in front of is a facing/position idea.",
        "examples": [
          {
            "term": "ahead of",
            "sentence": "He is ahead of me in line."
          },
          {
            "term": "in front of",
            "sentence": "He is standing in front of me."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Places (outside)",
      "items": [
        "in front of the house",
        "in front of the school",
        "in front of the store",
        "in front of the door",
        "in front of the building",
        "in front of the station"
      ]
    },
    {
      "title": "People & attention",
      "items": [
        "in front of the class",
        "in front of the audience",
        "in front of the camera",
        "in front of the TV",
        "in front of the screen",
        "in front of the crowd"
      ]
    },
    {
      "title": "Common verbs",
      "items": [
        "stand in front of",
        "wait in front of",
        "sit in front of",
        "park in front of",
        "kneel in front of",
        "stop in front of"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "She stood in front the door.",
      "correct": "She stood in front of the door.",
      "reason": "The fixed phrase is in front of + noun. Don't drop of."
    },
    {
      "wrong": "My bag is in front of the car. (inside)",
      "correct": "My bag is in the front of the car.",
      "reason": "If you mean inside the car's front part, use in the front of. in front of is usually outside in front of it."
    },
    {
      "wrong": "Please arrive in front of the meeting.",
      "correct": "Please arrive before the meeting.",
      "reason": "Use before for time order. in front of is not for time sequence."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the best phrase: The statue is ___ the museum (outside).",
      "options": [
        "in front of",
        "in the front of",
        "behind"
      ],
      "answer": "in front of",
      "explanation": "Use in front of for an outside position before something. in the front of means inside the front part."
    },
    {
      "prompt": "Choose the best phrase: I sat ___ the bus (inside, near the driver).",
      "options": [
        "in the front of",
        "in front of",
        "behind"
      ],
      "answer": "in the front of",
      "explanation": "Inside the front part uses in the front of (in the front of the bus)."
    },
    {
      "prompt": "Choose the correct option: Please finish your homework ___ dinner.",
      "options": [
        "before",
        "in front of",
        "in the front of"
      ],
      "answer": "before",
      "explanation": "Use before for time order. in front of is a spatial phrase, not a time-order phrase."
    }
  ],
  "faq": [
    {
      "question": "What does \"in front of\" mean?",
      "answer": "It means an outside position before something (often facing you): \"The car is parked in front of the house.\""
    },
    {
      "question": "When should I use \"in front of\"?",
      "answer": "Use it for an outside, visible front position: She stood in front of the mirror."
    },
    {
      "question": "What is the difference between \"in front of\" and \"in the front of\"?",
      "answer": "in front of is usually outside. in the front of is inside the front part. Example: We waited in front of the bus (outside) vs I sat in the front of the bus (inside)."
    },
    {
      "question": "Can \"in front of\" be used for time expressions?",
      "answer": "No for time order. Use before: Please arrive before the meeting."
    },
    {
      "question": "What is the difference between \"in front of\" and \"ahead of\"?",
      "answer": "ahead of often means \"leading/further forward\" (ahead of me in line, ahead of schedule). in front of is a facing/position idea."
    },
    {
      "question": "What is a common mistake when using \"in front of\"?",
      "answer": "Common mistakes include dropping of (in front the door ✗), mixing it up with in the front of (inside), and using it for time order (use before)."
    },
    {
      "question": "What are common collocations with \"in front of\"?",
      "answer": "High-frequency examples: in front of the house, in front of the school, in front of the door, in front of the camera, in front of the audience, stand/wait in front of."
    },
    {
      "question": "How can I remember \"in front of\" quickly?",
      "answer": "Use the 3-way rule: outside = in front of; inside front part = in the front of; time order = before."
    }
  ]
};

export default content;
