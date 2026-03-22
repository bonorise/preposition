import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "later than; following in time",
  "tips": [
    "Use after for time order: later than a time or event.",
    "After usually takes an object: after dinner / after I finish.",
    "For duration from now, prefer in: \"in two hours\" (unless a clear reference event exists)."
  ],
  "examples": [
    {
      "en": "We went home after the movie.",
      "i18n": {
        "zh-CN": {
          "translation": "我们在电影结束后回家了。"
        },
        "en": {
          "translation": "We went home after the movie."
        }
      }
    },
    {
      "en": "Call me after 8 p.m.",
      "i18n": {
        "zh-CN": {
          "translation": "晚上 8 点以后给我打电话。"
        },
        "en": {
          "translation": "Call me after 8 p.m."
        }
      }
    }
  ],
  "examplesByCategory": {
    "time": [
      {
        "en": "I usually shower after work.",
        "i18n": {
          "zh-CN": {
            "translation": "我通常下班后洗澡。"
          },
          "en": {
            "translation": "I usually shower after work."
          }
        }
      },
      {
        "en": "Let's talk after class.",
        "i18n": {
          "zh-CN": {
            "translation": "我们下课后再聊。"
          },
          "en": {
            "translation": "Let's talk after class."
          }
        }
      }
    ],
    "space": [
      {
        "en": "The dog ran after the boy.",
        "i18n": {
          "zh-CN": {
            "translation": "狗追着男孩跑。"
          },
          "en": {
            "translation": "The dog ran after the boy."
          }
        }
      },
      {
        "en": "The runners came in after the leader.",
        "i18n": {
          "zh-CN": {
            "translation": "选手们在领跑者之后冲线。"
          },
          "en": {
            "translation": "The runners came in after the leader."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "After expresses time order \"later than...\". Common confusions: later/afterwards (adverbs), in (from now), and since (continuing from a starting point).",
    "differences": [
      {
        "term": "later",
        "description": "Later is an adverb and often has no object; after is a preposition that takes an object (time/event/clause).",
        "examples": [
          {
            "term": "later",
            "sentence": "I'll call you later."
          },
          {
            "term": "after",
            "sentence": "I'll call you after dinner."
          }
        ]
      },
      {
        "term": "afterwards",
        "description": "Afterwards is an adverb meaning then; after usually introduces a specific reference point.",
        "examples": [
          {
            "term": "afterwards",
            "sentence": "We ate dinner and went for a walk afterwards."
          },
          {
            "term": "after",
            "sentence": "We went for a walk after dinner."
          }
        ]
      },
      {
        "term": "in",
        "description": "In + duration is counted from now (\"in two hours\"); after + duration usually needs a reference event (\"after two hours of waiting\").",
        "examples": [
          {
            "term": "in",
            "sentence": "I'll be back in two hours."
          },
          {
            "term": "after",
            "sentence": "I'll leave after two hours of waiting."
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "After a time or event",
      "items": [
        "after school",
        "after work",
        "after class",
        "after dinner",
        "after the meeting",
        "after lunch"
      ]
    },
    {
      "title": "After + clause / -ing",
      "items": [
        "after I finish",
        "after you arrive",
        "after we get home",
        "after she left",
        "after finishing work",
        "after talking to him"
      ]
    },
    {
      "title": "Fixed phrases",
      "items": [
        "after all",
        "after a while",
        "after that",
        "after midnight",
        "after dark",
        "after the fact"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "I'll be home after two hours.",
      "correct": "I'll be home in two hours.",
      "reason": "Use in for duration counted from now. After two hours usually needs a reference event (after two hours of driving/waiting)."
    },
    {
      "wrong": "I'll call you later dinner.",
      "correct": "I'll call you after dinner.",
      "reason": "Later is an adverb and does not take an object; after can."
    },
    {
      "wrong": "After, we went home.",
      "correct": "Afterwards, we went home. / After dinner, we went home.",
      "reason": "After needs an object; without an object, use afterwards or add the reference."
    },
    {
      "wrong": "I haven't seen her after Monday.",
      "correct": "I haven't seen her since Monday.",
      "reason": "Since means starting then and continuing to now; after is only sequence."
    }
  ],
  "quiz": [
    {
      "prompt": "I'll call you ___ dinner.",
      "options": [
        "after",
        "later",
        "in"
      ],
      "answer": "after",
      "explanation": "Use after because it introduces a reference event: after dinner."
    },
    {
      "prompt": "I'll be back ___ two hours.",
      "options": [
        "in",
        "after",
        "since"
      ],
      "answer": "in",
      "explanation": "Use in for a duration counted from now: in two hours."
    },
    {
      "prompt": "We finished dinner and went for a walk ___.",
      "options": [
        "afterwards",
        "after",
        "since"
      ],
      "answer": "afterwards",
      "explanation": "Use afterwards when you mean then and have no object."
    }
  ],
  "faq": [
    {
      "question": "What does \"after\" mean?",
      "answer": "\"After\" expresses time order: later than a time or event. It usually introduces a reference point (after dinner, after 8 p.m.)."
    },
    {
      "question": "What can come after \"after\"?",
      "answer": "Three common patterns: a noun (after class), a time point (after 8 p.m.), or a clause (after I finish). As a preposition, after usually needs an object."
    },
    {
      "question": "After vs later: what is the difference?",
      "answer": "Later is an adverb and often has no object: \"I'll call you later.\" After is a preposition and needs an object: \"I'll call you after dinner.\""
    },
    {
      "question": "After vs afterwards: what is the difference?",
      "answer": "Afterwards is an adverb meaning then: \"We left afterwards.\" After needs an object: \"We left after dinner.\""
    },
    {
      "question": "After vs \"in two hours\": which one should I use?",
      "answer": "\"In two hours\" is counted from now: \"I'll be back in two hours.\" \"After two hours\" usually needs a reference event: \"after two hours of waiting/driving.\""
    },
    {
      "question": "After vs since: how do I choose?",
      "answer": "Since means starting then and continuing to now: \"I have lived here since 2020.\" After is only sequence: \"I moved here after 2020.\""
    },
    {
      "question": "What is a common beginner mistake with after?",
      "answer": "Using after for \"from now\" duration. In most cases you want \"in two hours\", not \"after two hours\" unless a reference event is explicit."
    },
    {
      "question": "What are common collocations with \"after\"?",
      "answer": "High-frequency examples: after school, after work, after class, after dinner, after the meeting, after a while."
    }
  ]
};

export default content;
