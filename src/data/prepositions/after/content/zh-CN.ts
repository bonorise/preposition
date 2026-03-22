import type { LocalizedPrepositionContent } from "../../shared/types";

const content: LocalizedPrepositionContent = {
  "meaning": "在……之后（时间顺序）",
  "tips": [
    "表示时间顺序：在某个时间点/事件之后。",
    "after 后面通常接“事件/时间点/从句”：after dinner / after I finish。",
    "表示“从现在起多久之后”多用 in：in two hours（除非有明确参照事件）。"
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
    "summary": "after 用来表达时间顺序“在……之后”。最常见的混淆是：later/afterwards（副词不用宾语）、in（从现在起多久之后）、since（从某点持续到现在）。",
    "differences": [
      {
        "term": "later",
        "description": "later 是副词，常不接宾语；after 是介词，后面要跟时间/事件/从句。",
        "examples": [
          {
            "term": "later",
            "sentence": "I'll call you later.",
            "translation": "我晚点给你打电话。"
          },
          {
            "term": "after",
            "sentence": "I'll call you after dinner.",
            "translation": "我晚饭后给你打电话。"
          }
        ]
      },
      {
        "term": "afterwards",
        "description": "afterwards 也是副词，强调“那之后”（不需要具体宾语）；after 更常接具体参照。",
        "examples": [
          {
            "term": "afterwards",
            "sentence": "We ate dinner and went for a walk afterwards.",
            "translation": "我们吃完饭，之后去散步。"
          },
          {
            "term": "after",
            "sentence": "We went for a walk after dinner.",
            "translation": "我们吃完饭后去散步。"
          }
        ]
      },
      {
        "term": "in",
        "description": "in + 时间段表示“从现在起多久之后”；after + 时间段通常需要参照事件（after two hours of waiting）。",
        "examples": [
          {
            "term": "in",
            "sentence": "I'll be back in two hours.",
            "translation": "我两小时后回来。（从现在算）"
          },
          {
            "term": "after",
            "sentence": "I'll leave after two hours of waiting.",
            "translation": "我等了两小时后就走。（有参照：等待）"
          }
        ]
      }
    ]
  },
  "collocationGroups": [
    {
      "title": "时间点/事件之后",
      "items": [
        {
          "phrase": "after school",
          "meaning": "放学后"
        },
        {
          "phrase": "after work",
          "meaning": "下班后"
        },
        {
          "phrase": "after class",
          "meaning": "下课后"
        },
        {
          "phrase": "after dinner",
          "meaning": "晚饭后"
        },
        {
          "phrase": "after the meeting",
          "meaning": "会议后"
        },
        {
          "phrase": "after lunch",
          "meaning": "午饭后"
        }
      ]
    },
    {
      "title": "after + 从句/动作",
      "items": [
        {
          "phrase": "after I finish",
          "meaning": "在我完成之后"
        },
        {
          "phrase": "after you arrive",
          "meaning": "在你到达之后"
        },
        {
          "phrase": "after we get home",
          "meaning": "在我们到家之后"
        },
        {
          "phrase": "after she left",
          "meaning": "在她离开之后"
        },
        {
          "phrase": "after finishing work",
          "meaning": "完成工作之后"
        },
        {
          "phrase": "after talking to him",
          "meaning": "和他谈过之后"
        }
      ]
    },
    {
      "title": "固定搭配",
      "items": [
        {
          "phrase": "after all",
          "meaning": "毕竟；终究"
        },
        {
          "phrase": "after a while",
          "meaning": "过了一会儿"
        },
        {
          "phrase": "after that",
          "meaning": "在那之后"
        },
        {
          "phrase": "after midnight",
          "meaning": "午夜之后"
        },
        {
          "phrase": "after dark",
          "meaning": "天黑以后"
        },
        {
          "phrase": "after the fact",
          "meaning": "事后；事后看来"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "I'll be home after two hours.",
      "correct": "I'll be home in two hours.",
      "reason": "从“现在起过多久”通常用 in。after two hours 更需要参照事件（after two hours of driving/waiting）。"
    },
    {
      "wrong": "I'll call you later dinner.",
      "correct": "I'll call you after dinner.",
      "reason": "later 是副词，不能直接接宾语；after 后面可以接事件/时间点。"
    },
    {
      "wrong": "After, we went home.",
      "correct": "Afterwards, we went home. / After dinner, we went home.",
      "reason": "after 作为介词需要宾语；不带宾语时用 afterwards，或补上参照事件。"
    },
    {
      "wrong": "I haven't seen her after Monday.",
      "correct": "I haven't seen her since Monday.",
      "reason": "since 表示“从某个时间点持续到现在”；after 表示时间顺序，不表示持续。"
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
      "explanation": "after 需要接一个参照事件/时间点：after dinner。"
    },
    {
      "prompt": "I'll be back ___ two hours.",
      "options": [
        "in",
        "after",
        "since"
      ],
      "answer": "in",
      "explanation": "从现在起的时间段用 in：in two hours。"
    },
    {
      "prompt": "We finished dinner and went for a walk ___.",
      "options": [
        "afterwards",
        "after",
        "since"
      ],
      "answer": "afterwards",
      "explanation": "句尾不带宾语时用 afterwards（= then）。"
    }
  ],
  "faq": [
    {
      "question": "after 的核心含义是什么？",
      "answer": "after 表示时间顺序“在……之后”。它通常引出一个参照点：after dinner / after 8 p.m."
    },
    {
      "question": "after 后面接什么最常见？",
      "answer": "最常见三种：名词（after class）、时间点（after 8 p.m.）、从句（after I finish）。after 作为介词一般需要宾语。"
    },
    {
      "question": "after 和 later 的区别是什么？",
      "answer": "later 是副词，常不接宾语：I'll call you later. after 是介词，需要宾语：I'll call you after dinner."
    },
    {
      "question": "after 和 afterwards 的区别是什么？",
      "answer": "afterwards 是副词= then，常放句尾或句首：We left afterwards. after 需要宾语：We left after dinner."
    },
    {
      "question": "after 和 in two hours 怎么选？",
      "answer": "in two hours 通常从“现在”开始算：I'll be back in two hours. after two hours 多需要参照事件：after two hours of waiting/driving。"
    },
    {
      "question": "after 和 since 怎么快速区分？",
      "answer": "since 表示“从某点持续到现在”：I have lived here since 2020. after 只是顺序：I moved here after 2020.（= 2020 之后搬来）"
    },
    {
      "question": "初学者最常见的 after 错误是什么？",
      "answer": "把 after 当成“从现在起多久之后”。多数场景应说 in two hours，不说 after two hours（除非句子里有参照事件）。"
    },
    {
      "question": "after 的高频搭配有哪些？",
      "answer": "高频组合：after school, after work, after class, after dinner, after the meeting, after a while。"
    }
  ]
};

export default content;
