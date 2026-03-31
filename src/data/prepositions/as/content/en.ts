import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  meaning:
    "as: you can understand it through an old “all so / also” feeling. Its core feeling is sameness plus accompanying relation, which helps explain comparison, role, time, reason, and concession.",
  cardMeaning: "as: same way, as a role, when, because.",
  tips: [
    "Start from two core ideas: sameness and accompanying relation.",
    "From sameness, English gets as ... as and role/function uses such as work as a teacher.",
    "From accompanying relation, English gets time, reason, and formal concession patterns.",
  ],
  meaningMap: {
    title: "How the meanings of as connect",
    intro:
      "Do not memorize each use of as as a separate rule. It is easier to see one core idea first, then watch English extend it in several directions.",
    coreLabel: "Core idea",
    coreMeaning:
      "You can understand as through a teaching model close to “all so / also”: things are so in the same way, or so alongside one another. That gives two core feelings: sameness and accompanying relation.",
    branches: [
      {
        label: "Sameness -> comparison",
        description:
          "If two things are so in the same way, English can compare them on one scale with as ... as.",
        examples: [
          "as quiet as the library",
          "as carefully as she could",
        ],
      },
      {
        label: "Sameness -> role / function",
        description:
          "If something is treated in the same way as a role, type, or function, English uses as to mark that role.",
        examples: [
          "work as a teacher",
          "use the bench as a table",
        ],
      },
      {
        label: "Accompanying relation -> time",
        description:
          "When one situation unfolds alongside another, as can mean “when / while this is happening”.",
        examples: [
          "As I was leaving, the phone rang.",
          "As the sun went down, the air grew colder.",
        ],
      },
      {
        label: "Accompanying relation -> reason",
        description:
          "If one situation accompanies another and helps explain it, as can introduce a lighter background reason.",
        examples: [
          "As it was getting late, we took a taxi home.",
          "As no one objected, the plan went ahead.",
        ],
      },
      {
        label: "Accompanying relation -> concession",
        description:
          "In a formal pattern, a condition can be present alongside the main event, but the main result still happens: Tired as he was, ...",
        examples: [
          "Young as she is, she speaks with great confidence.",
          "Try as he might, he could not move it.",
        ],
      },
    ],
    note:
      "The “all so / also” explanation here is a learning model for remembering the network of meanings. It is meant to organize the page clearly for learners, not to replace full historical linguistics.",
  },
  examples: [
    {
      en: "This room is as quiet as the library.",
      i18n: {
        en: { translation: "This room is as quiet as the library." },
        "zh-CN": { translation: "这个房间和图书馆一样安静。" },
      },
    },
    {
      en: "She spoke as a parent, not as a manager.",
      i18n: {
        en: { translation: "She spoke as a parent, not as a manager." },
        "zh-CN": { translation: "她是以家长身份发言，不是以经理身份发言。" },
      },
    },
    {
      en: "As I was crossing the street, it started to rain.",
      i18n: {
        en: { translation: "As I was crossing the street, it started to rain." },
        "zh-CN": { translation: "我正过马路的时候，开始下雨了。" },
      },
    },
  ],
  examplesByCategory: {
    abstract: [
      {
        en: "This room is as quiet as the library.",
        i18n: {
          en: { translation: "This room is as quiet as the library." },
          "zh-CN": { translation: "这个房间和图书馆一样安静。" },
        },
      },
      {
        en: "We used the bench as a temporary table.",
        i18n: {
          en: { translation: "We used the bench as a temporary table." },
          "zh-CN": { translation: "我们把长凳当临时桌子用。" },
        },
      },
      {
        en: "As the children grew older, they became more independent.",
        i18n: {
          en: {
            translation:
              "As the children grew older, they became more independent.",
          },
          "zh-CN": {
            translation: "随着孩子们长大，他们变得更独立了。",
          },
        },
      },
      {
        en: "As it was already midnight, we went straight home.",
        i18n: {
          en: {
            translation: "As it was already midnight, we went straight home.",
          },
          "zh-CN": { translation: "因为已经是半夜了，我们就直接回家了。" },
        },
      },
      {
        en: "Tired as he was, he kept working.",
        i18n: {
          en: { translation: "Tired as he was, he kept working." },
          "zh-CN": { translation: "虽然他很累，他还是继续工作。" },
        },
      },
    ],
  },
  comparison: {
    summary:
      "The easiest way to learn as is to connect the uses instead of separating them too early. It can mark equality, role, accompanying time, lighter reason, and formal concession.",
    differences: [
      {
        term: "like",
        description:
          "Like points to resemblance. As can express equality in as ... as, or role/function in patterns such as work as a teacher and use it as a guide.",
        examples: [
          {
            term: "like",
            sentence: "She looks like her sister.",
          },
          {
            term: "as",
            sentence: "She works as her sister's assistant.",
          },
        ],
      },
      {
        term: "because",
        description:
          "Because gives a direct reason. As often gives a lighter background reason that explains the situation without sounding as forceful.",
        examples: [
          {
            term: "because",
            sentence: "We stayed inside because it was storming.",
          },
          {
            term: "as",
            sentence: "As it was storming, we stayed inside.",
          },
        ],
      },
      {
        term: "when / while",
        description:
          "When marks time more neutrally. While emphasizes two actions continuing together. As often presents one event unfolding alongside another.",
        examples: [
          {
            term: "when",
            sentence: "When I opened the door, the cat ran out.",
          },
          {
            term: "as",
            sentence: "As I opened the door, the cat ran out.",
          },
        ],
      },
      {
        term: "although / though",
        description:
          "Although and though are the ordinary way to show concession. As can do this too, but usually in a more formal inverted pattern: Tired as he was, ...",
        examples: [
          {
            term: "although",
            sentence: "Although he was tired, he kept working.",
          },
          {
            term: "as",
            sentence: "Tired as he was, he kept working.",
          },
        ],
      },
    ],
  },
  collocationGroups: [
    {
      title: "Comparison patterns",
      items: [
        "as soon as possible",
        "as carefully as possible",
        "as much as I can",
        "as far as I know",
        "as long as you like",
        "as good as new",
      ],
    },
    {
      title: "Role and function",
      items: [
        "work as a teacher",
        "serve as a reminder",
        "act as a guide",
        "use it as a tool",
        "see it as a chance",
        "describe him as calm",
      ],
    },
    {
      title: "Clause patterns",
      items: [
        "as I was leaving",
        "as the sun rose",
        "as it was late",
        "as no one objected",
        "tired as he was",
        "try as he might",
      ],
    },
  ],
  commonMistakes: [
    {
      wrong: "She is as her sister.",
      correct: "She is like her sister. / She is as tall as her sister.",
      reason:
        "Use like for simple resemblance. Use as when you mean equality on a scale (as tall as) or role/function (as a teacher).",
    },
    {
      wrong: "We used the bench like a table.",
      correct: "We used the bench as a table.",
      reason:
        "When something serves in a role or function, English usually uses as, not like.",
    },
    {
      wrong: "As he was tired, but he kept working.",
      correct: "Although he was tired, he kept working. / Tired as he was, he kept working.",
      reason:
        "Do not mix the causal as pattern with a second contrast marker. For concession, use although/though, or the formal inverted as pattern.",
    },
  ],
  quiz: [
    {
      prompt: "This bag is ___ heavy as the old one.",
      options: ["as", "like", "because"],
      answer: "as",
      explanation:
        "In equality patterns, English uses as ... as: as heavy as the old one.",
    },
    {
      prompt: "She worked ___ an interpreter during the meeting.",
      options: ["as", "like", "while"],
      answer: "as",
      explanation:
        "Interpreter is the role she had in the meeting, so as is correct.",
    },
    {
      prompt: "___ I was walking home, I saw the lights go out.",
      options: ["As", "Like", "Since"],
      answer: "As",
      explanation:
        "Here as introduces one event unfolding alongside another, so it means “when/while”.",
    },
  ],
  faq: [
    {
      question: "Is as a preposition or a conjunction?",
      answer:
        "Both. As can work in role/function patterns such as work as a teacher, and it can also introduce clauses for time, reason, and formal concession.",
    },
    {
      question: "What is the difference between as and like?",
      answer:
        "Like usually marks resemblance. As can mark equality in as ... as, or role/function in patterns such as use it as a guide and speak as a parent.",
    },
    {
      question: "Why can as mean because?",
      answer:
        "Because one situation can accompany another and also explain it. In that use, as often gives a lighter background reason than because.",
    },
    {
      question: "How does as express time?",
      answer:
        "As can mean “when / while” when one action happens alongside another: As I was leaving, the phone rang.",
    },
    {
      question: "How is as ... as connected to the core meaning of as?",
      answer:
        "It comes from the same idea of sameness. If two things are so in the same way, English can compare them with as ... as.",
    },
  ],
};

export default content;
