import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "away from: at a distance from, or moving so the distance becomes greater.",
  cardMeaning: "away from: away from / keep distance from.",
  tips: [
    "Away from can describe position (farther from something) or movement (move farther from it).",
    "It is common in safety warnings: keep away from the edge / stay away from fire.",
    "Far from often sounds more static. Away from often feels more active or directional.",
  ],
  examples: [
    {
      en: "Keep the baby away from the stairs.",
      i18n: {
        en: { translation: "Keep the baby away from the stairs." },
        "zh-CN": { translation: "让宝宝远离楼梯。" },
      },
    },
    {
      en: "The dog ran away from the gate when it opened.",
      i18n: {
        en: { translation: "The dog ran away from the gate when it opened." },
        "zh-CN": { translation: "大门一开，狗就从门边跑开了。" },
      },
    },
  ],
  examplesByCategory: {
    space: [
      {
        en: "Please sit away from the door if you need quiet.",
        i18n: {
          en: { translation: "Please sit away from the door if you need quiet." },
          "zh-CN": { translation: "如果你想安静一点，请坐得离门远些。" },
        },
      },
      {
        en: "The house stands away from the main road.",
        i18n: {
          en: { translation: "The house stands away from the main road." },
          "zh-CN": { translation: "这栋房子离主路有一段距离。" },
        },
      },
    ],
    dynamic: [
      {
        en: "Step away from the platform edge.",
        i18n: {
          en: { translation: "Step away from the platform edge." },
          "zh-CN": { translation: "请从站台边缘往后退。" },
        },
      },
      {
        en: "She backed away from the hot pan.",
        i18n: {
          en: { translation: "She backed away from the hot pan." },
          "zh-CN": { translation: "她从热锅边往后退开了。" },
        },
      },
      {
        en: "The crowd moved away from the stage after the show.",
        i18n: {
          en: {
            translation:
              "The crowd moved away from the stage after the show.",
          },
          "zh-CN": { translation: "演出结束后，人群从舞台边散开了。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "Away from combines distance and separation. Learners often compare it with far from (static distance) and off (moving off a surface or contact point).",
    differences: [
      {
        term: "far from",
        description:
          "Far from emphasizes long distance. Away from often adds the idea of moving or keeping clear.",
        examples: [
          {
            term: "far from",
            sentence: "Our hotel is far from the airport.",
          },
          {
            term: "away from",
            sentence: "Move away from the airport fence.",
          },
        ],
      },
      {
        term: "off",
        description:
          "Off often means leaving a surface or contact point. Away from is more general and can describe stepping back or keeping clear.",
        examples: [
          {
            term: "off",
            sentence: "Take the cup off the table.",
          },
          {
            term: "away from",
            sentence: "Take the cup away from the edge of the table.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Safety and warning phrases",
      items: [
        "keep away from the fire",
        "stay away from the edge",
        "move away from the road",
        "back away from the machine",
        "keep children away from chemicals",
        "stand away from the glass",
      ],
    },
    {
      title: "Everyday distance phrases",
      items: [
        "sit away from the window",
        "park away from the gate",
        "live away from downtown",
        "place it away from heat",
        "stand away from the wall",
        "walk away from the crowd",
      ],
    },
    {
      title: "Useful sentence frames",
      items: [
        "away from home",
        "away from the center",
        "away from direct sunlight",
        "away from the camera",
        "away from the keyboard",
        "away from the noise",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "Keep the candles far from the table edge right now.",
      correct: "Keep the candles away from the table edge right now.",
      reason:
        "This is a safety instruction about keeping clear, so away from sounds more natural than far from.",
    },
    {
      wrong: "She moved off the stranger.",
      correct: "She moved away from the stranger.",
      reason:
        "Off usually needs a surface/contact idea. Away from is better for moving farther from a person.",
    },
    {
      wrong: "The house is away from very much from town.",
      correct: "The house is far from town. / The house is away from the main road.",
      reason:
        "Far from is better for neutral long distance. Away from usually needs a clearer separation context.",
    },
  ],
  quiz: [
    {
      prompt: "Please step ___ the edge.",
      options: ["away from", "instead of", "including"],
      answer: "away from",
      explanation:
        "This is a safety movement away from a dangerous boundary.",
    },
    {
      prompt: "The village is ___ the city center.",
      options: ["far from", "away from", "as"],
      answer: "far from",
      explanation:
        "This sentence only describes static distance, so far from is more natural.",
    },
    {
      prompt: "Keep the laptop ___ direct sunlight.",
      options: ["away from", "via", "during"],
      answer: "away from",
      explanation:
        "The instruction is about keeping the laptop clear of sunlight, so away from fits.",
    },
  ],
  faq: [
    {
      question: "What is the core meaning of away from?",
      answer:
        "It shows distance or increasing distance from something.",
    },
    {
      question: "Can away from describe both position and movement?",
      answer:
        "Yes. A thing can be away from something, and it can also move away from it.",
    },
    {
      question: "Why is away from common in warnings?",
      answer:
        "Because warnings often tell you to keep clear of danger, heat, edges, traffic, or chemicals.",
    },
    {
      question: "What is the difference between away from and far from?",
      answer:
        "Far from is more static and measures distance. Away from often adds direction, separation, or avoidance.",
    },
    {
      question: "What is the difference between away from and off?",
      answer:
        "Off often involves leaving a surface or contact point. Away from is broader and works for people, places, edges, and hazards.",
    },
  ],
};

export default content;
