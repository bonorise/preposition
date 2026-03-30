import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "by: at the side of or close to something. From this core idea, by also extends to deadlines, methods, standards, and changes in amount.",
  cardMeaning:
    "by: at the side of; also used for deadlines, method, basis, and amount.",
  tips: [
    "Core image: one thing is at the side of another or leaning on it.",
    "Time: by + time means no later than that point.",
    "Abstract uses: by can show method, basis, or amount of change."
  ],
  examples: [
    {
      en: "Stand by the door.",
      i18n: {
        "zh-CN": {
          translation: "站在门旁边。"
        },
        en: {
          translation: "Stand by the door."
        }
      }
    },
    {
      en: "Please send the form by noon.",
      i18n: {
        "zh-CN": {
          translation: "请在中午前把表格发来。"
        },
        en: {
          translation: "Please send the form by noon."
        }
      }
    },
    {
      en: "We traveled by bus.",
      i18n: {
        "zh-CN": {
          translation: "我们是坐公交去的。"
        },
        en: {
          translation: "We traveled by bus."
        }
      }
    }
  ],
  examplesByCategory: {
    space: [
      {
        en: "Stand by the door.",
        i18n: {
          "zh-CN": {
            translation: "站在门旁边。"
          },
          en: {
            translation: "Stand by the door."
          }
        }
      },
      {
        en: "There is a small cafe by the station.",
        i18n: {
          "zh-CN": {
            translation: "车站旁边有一家小咖啡馆。"
          },
          en: {
            translation: "There is a small cafe by the station."
          }
        }
      },
      {
        en: "A lamp stood by the bed all night.",
        i18n: {
          "zh-CN": {
            translation: "一盏灯整晚都放在床边。"
          },
          en: {
            translation: "A lamp stood by the bed all night."
          }
        }
      }
    ],
    time: [
      {
        en: "Please send the form by noon.",
        i18n: {
          "zh-CN": {
            translation: "请在中午前把表格发来。"
          },
          en: {
            translation: "Please send the form by noon."
          }
        }
      },
      {
        en: "Be home by ten tonight.",
        i18n: {
          "zh-CN": {
            translation: "今晚十点前到家。"
          },
          en: {
            translation: "Be home by ten tonight."
          }
        }
      },
      {
        en: "By Friday, we need a final answer.",
        i18n: {
          "zh-CN": {
            translation: "到周五前，我们需要一个最终答复。"
          },
          en: {
            translation: "By Friday, we need a final answer."
          }
        }
      }
    ],
    abstract: [
      {
        en: "We traveled by bus.",
        i18n: {
          "zh-CN": {
            translation: "我们是坐公交去的。"
          },
          en: {
            translation: "We traveled by bus."
          }
        }
      },
      {
        en: "Judge the plan by its results, not by its promises.",
        i18n: {
          "zh-CN": {
            translation: "判断一个计划，要看结果，而不是口头承诺。"
          },
          en: {
            translation: "Judge the plan by its results, not by its promises."
          }
        }
      },
      {
        en: "Prices went up by 10 percent this year.",
        i18n: {
          "zh-CN": {
            translation: "今年价格上涨了 10%。"
          },
          en: {
            translation: "Prices went up by 10 percent this year."
          }
        }
      }
    ]
  },
  comparison: {
    summary:
      "Start with the spatial picture: by puts something at the side of another thing. From there it extends to time limits, method, basis, and amount, so compare it with near, next to, and until instead of memorizing one loose translation.",
    differences: [
      {
        term: "near",
        description:
          "Near is a broad idea of closeness. By usually sounds more anchored to the side of something and often feels a little closer.",
        examples: [
          {
            term: "near",
            sentence: "We live near the park."
          },
          {
            term: "by",
            sentence: "There is a bench by the park gate."
          }
        ]
      },
      {
        term: "next to",
        description:
          "Next to is stricter side-by-side contact or direct adjacency. By is looser and more natural when you only need the idea of being at the side of something.",
        examples: [
          {
            term: "next to",
            sentence: "Please sit next to me."
          },
          {
            term: "by",
            sentence: "Please wait by me for a minute."
          }
        ]
      },
      {
        term: "until",
        description:
          "By + time means no later than that time. Until + time means something continues up to that time.",
        examples: [
          {
            term: "by",
            sentence: "Finish the work by Friday."
          },
          {
            term: "until",
            sentence: "Stay here until Friday."
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "Place and position",
      items: [
        "by the door",
        "by the window",
        "by the river",
        "by the station",
        "by the bed",
        "sit by me"
      ]
    },
    {
      title: "Deadlines and time points",
      items: [
        "by noon",
        "by Friday",
        "by tomorrow morning",
        "by the deadline",
        "by the end of class",
        "by ten tonight"
      ]
    },
    {
      title: "Method, basis, and amount",
      items: [
        "by bus",
        "by email",
        "by hand",
        "by the rules",
        "by experience",
        "by 10 percent"
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "We went with bus.",
      correct: "We went by bus.",
      reason: "Use by to show the method of transport in common travel expressions."
    },
    {
      wrong: "Please finish it until Friday.",
      correct: "Please finish it by Friday.",
      reason: "By Friday means no later than Friday. Until Friday means something continues up to Friday."
    },
    {
      wrong: "The lamp is next the bed.",
      correct: "The lamp is by the bed. / The lamp is next to the bed.",
      reason: "English needs by or next to here. Next the bed is not a natural phrase."
    }
  ],
  quiz: [
    {
      prompt: "Choose the correct preposition: There is a chair ___ the window.",
      options: ["by", "under", "through"],
      answer: "by",
      explanation: "By fits because the chair is at the side of the window."
    },
    {
      prompt: "Choose the correct preposition: Please send it ___ noon.",
      options: ["by", "until", "during"],
      answer: "by",
      explanation: "By noon means no later than noon."
    },
    {
      prompt: "Choose the correct preposition: We traveled ___ train.",
      options: ["by", "with", "from"],
      answer: "by",
      explanation: "By + transport is the common way to show method."
    }
  ],
  faq: [
    {
      question: 'What is the core meaning of "by"?',
      answer:
        'The core idea of by is "at the side of" or "close to." Picture one thing next to another thing, often almost touching it.'
    },
    {
      question: 'How is "by" different from "near"?',
      answer:
        "Near is a broad idea of closeness. By often feels more anchored to the side of something and can sound slightly closer or more exact."
    },
    {
      question: 'How is "by" different from "beside" or "next to"?',
      answer:
        "Beside and next to are stronger for direct side-by-side adjacency. By is more flexible and natural when you only need the idea of being at the side of something."
    },
    {
      question: 'Can "by" be used for time?',
      answer:
        "Yes. By + time means no later than that point: by noon, by Friday, by the end of class."
    },
    {
      question: 'What does "by bus" mean?',
      answer:
        'By bus shows method or means. It means "using the bus as the way to travel," just like by train or by email.'
    },
    {
      question: 'What does "judge by" mean?',
      answer:
        'Judge by means "use something as the basis or standard." For example, judge the plan by its results.'
    },
    {
      question: 'What does "by 10 percent" mean?',
      answer:
        'By 10 percent shows the amount of change. Prices rose by 10 percent means the increase was 10 percent.'
    },
    {
      question: 'How can I remember "by" quickly?',
      answer:
        'Start with one image: something is by your side. Then extend it: close to a place, close to a time point, or relying on a method or standard.'
    }
  ]
};

export default content;
