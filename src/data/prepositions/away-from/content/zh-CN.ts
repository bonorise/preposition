import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning: "away from：离开……、远离……；或者朝着更远的方向移动。",
  cardMeaning: "away from：远离…… / 从……离开。",
  tips: [
    "away from 既可以表示位置上的距离，也可以表示动态地离开、退开。",
    "它很常见于安全提示：keep away from the edge / stay away from fire。",
    "far from 更像静态的“很远”；away from 往往更有“离开、避开”的过程感。",
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
      "away from 兼有距离和分离感。最常见的对比是 far from（静态距离）和 off（从接触面/表面离开）。",
    differences: [
      {
        term: "far from",
        description: "far from 更强调“距离很远”；away from 更常带有“离开、避开”的方向感。",
        examples: [
          {
            term: "far from",
            sentence: "Our hotel is far from the airport.",
            translation: "我们的酒店离机场很远。"
          },
          {
            term: "away from",
            sentence: "Move away from the airport fence.",
            translation: "请离机场围栏远一点。"
          }
        ]
      },
      {
        term: "off",
        description: "off 常表示离开某个表面或接触点；away from 更泛，可表示退开、远离人或危险物。",
        examples: [
          {
            term: "off",
            sentence: "Take the cup off the table.",
            translation: "把杯子从桌上拿开。"
          },
          {
            term: "away from",
            sentence: "Take the cup away from the edge of the table.",
            translation: "把杯子从桌边挪远一点。"
          }
        ]
      }
    ]
  },
  collocationGroups: [
    {
      title: "安全提示类",
      items: [
        { phrase: "keep away from the fire", meaning: "远离火源" },
        { phrase: "stay away from the edge", meaning: "远离边缘" },
        { phrase: "move away from the road", meaning: "离开道路边" },
        { phrase: "back away from the machine", meaning: "从机器旁退开" },
        { phrase: "keep children away from chemicals", meaning: "让孩子远离化学品" },
        { phrase: "stand away from the glass", meaning: "离玻璃远一点站" }
      ]
    },
    {
      title: "日常距离表达",
      items: [
        { phrase: "sit away from the window", meaning: "坐得离窗户远些" },
        { phrase: "park away from the gate", meaning: "把车停得离门口远些" },
        { phrase: "live away from downtown", meaning: "住得离市中心较远" },
        { phrase: "place it away from heat", meaning: "把它放在远离热源的地方" },
        { phrase: "stand away from the wall", meaning: "离墙站开一点" },
        { phrase: "walk away from the crowd", meaning: "从人群边走开" }
      ]
    },
    {
      title: "常用句型",
      items: [
        { phrase: "away from home", meaning: "离家在外" },
        { phrase: "away from the center", meaning: "远离中心" },
        { phrase: "away from direct sunlight", meaning: "远离直射阳光" },
        { phrase: "away from the camera", meaning: "离镜头远一点" },
        { phrase: "away from the keyboard", meaning: "离开键盘 / 暂时不在电脑前" },
        { phrase: "away from the noise", meaning: "远离噪音" }
      ]
    }
  ],
  commonMistakes: [
    {
      wrong: "Keep the candles far from the table edge right now.",
      correct: "Keep the candles away from the table edge right now.",
      reason: "这是带有即时安全指令的“避开”语境，away from 比 far from 更自然。"
    },
    {
      wrong: "She moved off the stranger.",
      correct: "She moved away from the stranger.",
      reason: "off 更常和表面/接触点有关；从一个人身边退开更自然的是 away from。"
    },
    {
      wrong: "The house is away from very much from town.",
      correct: "The house is far from town. / The house is away from the main road.",
      reason: "纯粹说“距离很远”时更常用 far from；away from 更适合有分离语境的对象。"
    }
  ],
  quiz: [
    {
      prompt: "Please step ___ the edge.",
      options: ["away from", "instead of", "including"],
      answer: "away from",
      explanation: "这里是安全提示，要往危险边界外退开，所以用 away from。"
    },
    {
      prompt: "The village is ___ the city center.",
      options: ["far from", "away from", "as"],
      answer: "far from",
      explanation: "这里只是静态距离描述，far from 更自然。"
    },
    {
      prompt: "Keep the laptop ___ direct sunlight.",
      options: ["away from", "via", "during"],
      answer: "away from",
      explanation: "这里表示“远离直射阳光”，所以用 away from。"
    }
  ],
  faq: [
    {
      question: "away from 的核心意思是什么？",
      answer: "它表示“和某物保持距离”或“往离它更远的方向移动”。"
    },
    {
      question: "away from 可以同时表示位置和动作吗？",
      answer: "可以。它既能表示位置上离得远，也能表示动态地退开、走开。"
    },
    {
      question: "为什么 away from 常见于警示语？",
      answer: "因为警示语常要求人远离危险、边缘、车流、热源或化学品。"
    },
    {
      question: "away from 和 far from 的区别是什么？",
      answer: "far from 更偏静态距离；away from 往往更带方向感、分离感或避开感。"
    },
    {
      question: "away from 和 off 的区别是什么？",
      answer: "off 常涉及从表面/接触点离开；away from 的使用范围更广，适用于人、地方、边缘和危险物。"
    }
  ]
};

export default content;
