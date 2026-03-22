import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "around: surrounding; approximately",
  "tips": [
    "Surrounding or encircling: sit/stand/gather around + noun.",
    "around + time/number = approximately: around 5 pm / around 20 people.",
    "Compare: about is more neutral for numbers; round is common BrE for space."
  ],
  "examples": [
    {
      "en": "The kids sit around the table.",
      "i18n": {
        "zh-CN": {
          "translation": "孩子们围着桌子坐。"
        },
        "en": {
          "translation": "The kids sit around the table."
        }
      }
    },
    {
      "en": "Trees grow around the house.",
      "i18n": {
        "zh-CN": {
          "translation": "树长在房子周围。"
        },
        "en": {
          "translation": "Trees grow around the house."
        }
      }
    }
  ],
  "examplesByCategory": {
    "space": [
      {
        "en": "The kids sit around the table.",
        "i18n": {
          "zh-CN": {
            "translation": "孩子们围着桌子坐。"
          },
          "en": {
            "translation": "The kids sit around the table."
          }
        }
      },
      {
        "en": "Trees grow around the house.",
        "i18n": {
          "zh-CN": {
            "translation": "树长在房子周围。"
          },
          "en": {
            "translation": "Trees grow around the house."
          }
        }
      }
    ],
    "time": [
      {
        "en": "Let’s meet around 5 pm.",
        "i18n": {
          "zh-CN": {
            "translation": "我们大约下午5点见。"
          },
          "en": {
            "translation": "Let’s meet around 5 pm."
          }
        }
      },
      {
        "en": "The package should arrive around Tuesday.",
        "i18n": {
          "zh-CN": {
            "translation": "包裹预计周二左右到。"
          },
          "en": {
            "translation": "The package should arrive around Tuesday."
          }
        }
      },
      {
        "en": "It took around 10 minutes.",
        "i18n": {
          "zh-CN": {
            "translation": "大约花了10分钟。"
          },
          "en": {
            "translation": "It took around 10 minutes."
          }
        }
      },
      {
        "en": "There were around 20 people at the meeting.",
        "i18n": {
          "zh-CN": {
            "translation": "会议上大约有20个人。"
          },
          "en": {
            "translation": "There were around 20 people at the meeting."
          }
        }
      },
      {
        "en": "The coffee was around $10.",
        "i18n": {
          "zh-CN": {
            "translation": "这杯咖啡大概10美元。"
          },
          "en": {
            "translation": "The coffee was around $10."
          }
        }
      }
    ],
    "dynamic": [
      {
        "en": "We walked around the park.",
        "i18n": {
          "zh-CN": {
            "translation": "我们绕着公园走了一圈。"
          },
          "en": {
            "translation": "We walked around the park."
          }
        }
      },
      {
        "en": "She drove around the city before dinner.",
        "i18n": {
          "zh-CN": {
            "translation": "晚饭前她开车在城里转了转。"
          },
          "en": {
            "translation": "She drove around the city before dinner."
          }
        }
      }
    ]
  },
  "comparison": {
    "summary": "around in time usage mainly signals approximate time points or periods; compare it with close alternatives to avoid overlap.",
    "differences": [
      {
        "term": "at",
        "description": "around focuses on approximate time points or periods, while at marks a different temporal relation.",
        "examples": [
          {
            "term": "at",
            "sentence": "at 7:00"
          },
          {
            "term": "around",
            "sentence": "around noon"
          }
        ]
      },
      {
        "term": "by",
        "description": "around is for approximate time points or periods; by usually serves another time function.",
        "examples": [
          {
            "term": "by",
            "sentence": "by Monday"
          },
          {
            "term": "around",
            "sentence": "around noon"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "Approximate points",
      "items": [
        "around noon",
        "around 8:00",
        "around midnight",
        "around sunrise",
        "around lunchtime",
        "around this time"
      ]
    },
    {
      "title": "Approximate dates",
      "items": [
        "around Monday",
        "around July",
        "around the end of May",
        "around the holidays",
        "around the weekend",
        "around the due date"
      ]
    },
    {
      "title": "Flexible planning",
      "items": [
        "around then",
        "around one hour",
        "around two weeks",
        "around class time",
        "around early evening",
        "around the same period"
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "We finish at noon.",
      "correct": "We finish around noon.",
      "reason": "Use around when the meaning is approximate time points or periods; at signals a different relation."
    },
    {
      "wrong": "The class starts by 8:00.",
      "correct": "The class starts around 8:00.",
      "reason": "around focuses on approximate time points or periods; by is not the best fit here."
    }
  ],
  "quiz": [
    {
      "prompt": "Choose the correct preposition: ___ noon.",
      "options": [
        "around",
        "at",
        "by"
      ],
      "answer": "around",
      "explanation": "Choose around because this context needs approximate time points or periods."
    },
    {
      "prompt": "Choose the correct preposition: ___ 8:00.",
      "options": [
        "around",
        "at",
        "by"
      ],
      "answer": "around",
      "explanation": "Choose around because this context needs approximate time points or periods."
    },
    {
      "prompt": "Choose the correct preposition: ___ Monday.",
      "options": [
        "around",
        "at",
        "by"
      ],
      "answer": "around",
      "explanation": "Choose around because this context needs approximate time points or periods."
    }
  ]
};

export default content;
