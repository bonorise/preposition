import type { LearningCategory, Locale, PrepositionEntry } from "@/data/types";
import { getEntryCategories, isDynamicPreposition, isSpatialPreposition, isTemporalPreposition } from "@/lib/prepositionCategory";

type SeoOverride = {
  title: string;
  description: string;
};

const SEO_CATEGORY_PRIORITY: LearningCategory[] = [
  "dynamic",
  "space",
  "time",
  "abstract",
];

const SEO_TEMPLATE: Record<
  Locale,
  Record<
    LearningCategory,
    {
      titleSuffix: string;
      ctrLead: string;
      ruleLabel: string;
      exampleLabel: string;
      actionLine: string;
    }
  >
> = {
  en: {
    space: {
      titleSuffix: "meaning, place use, and examples",
      ctrLead: "Start with the core place relationship first.",
      ruleLabel: "Core idea",
      exampleLabel: "Example",
      actionLine: "Clear explanation, natural examples, and quick comparisons for beginners.",
    },
    time: {
      titleSuffix: "meaning, time use, and examples",
      ctrLead: "Focus on the time point, range, or deadline it marks.",
      ruleLabel: "Core rule",
      exampleLabel: "Example",
      actionLine: "Clear explanation, natural examples, and quick comparisons for beginners.",
    },
    dynamic: {
      titleSuffix: "meaning, movement use, and examples",
      ctrLead: "Focus on the path, direction, or endpoint it marks.",
      ruleLabel: "Core rule",
      exampleLabel: "Example",
      actionLine: "Clear explanation, natural examples, and quick comparisons for beginners.",
    },
    abstract: {
      titleSuffix: "meaning, abstract use, and examples",
      ctrLead: "Focus on the method, basis, cause, or relationship it marks.",
      ruleLabel: "Core rule",
      exampleLabel: "Example",
      actionLine: "Clear explanation, natural examples, and quick comparisons for beginners.",
    },
  },
  "zh-CN": {
    space: {
      titleSuffix: "介词用法：位置关系、核心规则与例句",
      ctrLead: "先抓住它最核心的位置关系。",
      ruleLabel: "核心感觉",
      exampleLabel: "例句",
      actionLine: "适合初学者快速建立直觉，并配常见对比帮助辨析。",
    },
    time: {
      titleSuffix: "介词用法：时间关系、核心规则与例句",
      ctrLead: "重点理解它标记的时间点、时间范围或截止点。",
      ruleLabel: "核心规则",
      exampleLabel: "例句",
      actionLine: "适合初学者快速建立直觉，并配常见对比帮助辨析。",
    },
    dynamic: {
      titleSuffix: "介词用法：运动路径、核心规则与例句",
      ctrLead: "重点理解它标记的路径、方向或终点。",
      ruleLabel: "核心规则",
      exampleLabel: "例句",
      actionLine: "适合初学者快速建立直觉，并配常见对比帮助辨析。",
    },
    abstract: {
      titleSuffix: "介词用法：抽象关系、核心规则与例句",
      ctrLead: "重点理解它表达的方式、依据、原因或关系。",
      ruleLabel: "核心规则",
      exampleLabel: "例句",
      actionLine: "适合初学者快速建立直觉，并配常见对比帮助辨析。",
    },
  },
};

const SEO_KEYWORDS_BY_CATEGORY: Record<
  Locale,
  Record<LearningCategory, string[]>
> = {
  en: {
    space: ["spatial preposition", "location preposition", "place preposition"],
    time: ["time preposition", "preposition of time", "time expressions"],
    dynamic: ["movement preposition", "direction preposition", "path preposition"],
    abstract: [
      "abstract preposition",
      "relationship preposition",
      "logical relation preposition",
    ],
  },
  "zh-CN": {
    space: ["空间介词", "位置介词", "英语方位介词"],
    time: ["时间介词", "英语时间介词", "时间表达"],
    dynamic: ["动态介词", "运动介词", "方向介词"],
    abstract: ["抽象介词", "关系介词", "逻辑关系表达"],
  },
};

const PRIMARY_SEO_CATEGORY_OVERRIDE: Partial<Record<string, LearningCategory>> = {
  around: "time",
  about: "time",
};

const SEO_METADATA_OVERRIDES: Partial<
  Record<string, Partial<Record<Locale, SeoOverride>>>
> = {
  as: {
    en: {
      title:
        "as meaning: comparison, role, time, reason, and how the uses connect | Preposition Dino",
      description:
        "As starts from the ideas of sameness and accompanying relation. This page shows how that core meaning extends to as ... as, role and function, time (when/while), reason (because), and formal concession, with clear examples and comparisons.",
    },
    "zh-CN": {
      title:
        "as 的意思怎么串起来？比较、作为、时间、原因与让步用法总览 | Preposition Dino",
      description:
        "as 的底层感觉可以理解为“相似”和“相伴随”。本页讲清它如何从这个核心义延伸到 as ... as、作为/当作、当……时、因为和正式让步等常见用法，并配对比例句帮助理解。",
    },
  },
  by: {
    en: {
      title: "by: meaning, examples, and by vs near / beside | Preposition Dino",
      description:
        "By first means at the side of or close to something. From that core image, it also extends to deadlines (by Friday), method (by bus), basis (judge by the results), and change in amount (by 10%).",
    },
    "zh-CN": {
      title: "by 介词用法：在……旁边 / 靠着｜延伸到截止时间、方式、依据与增减幅度 | Preposition Dino",
      description:
        "by 的核心感觉是“在旁边、靠着”。从这个核心义，可以自然引申到“不晚于某时”（by Friday）、方式手段（by bus）、依据标准（judge by ...）以及变化幅度（by 10%）。",
    },
  },
  above: {
    en: {
      title: "above: meaning, examples, and above vs on vs over | Preposition Dino",
      description:
        "Above means higher than something without touching it. Learn above vs on vs over, see clear examples, and understand why we say above average.",
    },
    "zh-CN": {
      title: "above 介词用法：在……上方 vs on / over｜含义、例句与区别 | Preposition Dino",
      description:
        "above 表示“高于某物且不接触”。本页讲清 above vs on / over 的区别，并解释为什么会有 above average 这类“高于标准”的用法。",
    },
  },
  from: {
    en: {
      title:
        "from (preposition): meaning (origin, source, range) + examples | Preposition Dino",
      description:
        "Learn the preposition from: origin/source, key patterns (from A to B, from now on), common mistakes (since/out of), plus examples, quiz, and FAQ.",
    },
    "zh-CN": {
      title: "from 介词用法：来源/起点、from A to B（范围）＋例句｜Preposition Dino",
      description:
        "from 表示“从……（起点/来源）”。本页包含最常用结构（from A to B / from now on）、易混点（since/out of）、例句、易错点、小测验与 FAQ。",
    },
  },
  to: {
    en: {
      title:
        "to (preposition): meaning (destination, recipient, range) + examples | Preposition Dino",
      description:
        "The preposition to marks an endpoint: direction/destination (go to school), a recipient (give it to me), or a range limit (from 9 to 5). Includes quick to vs infinitive-to tips, examples, common mistakes, quiz, and FAQ.",
    },
    "zh-CN": {
      title: "to 介词用法：到/向、给/对、到…为止（范围终点）｜Preposition Dino",
      description:
        "to 作为介词表示“指向终点/目标”：去向终点（go to…）、受事/接受者（give to…）、范围终点（from…to…）。本页含 to vs 不定式 to 速辨、例句、易错点、小测验与 FAQ。",
    },
  },
  inside: {
    en: {
      title:
        "inside (preposition): A1/A2 rules, inside vs in/into, examples + quiz | Preposition Dino",
      description:
        "inside means within a boundary/enclosure (inside the box). Learn a simple A1/A2 choice rule (inside vs in vs into), see natural examples, avoid common mistakes, and take a short quiz.",
    },
    "zh-CN": {
      title: "inside 介词用法：A1/A2 快速规则 + inside vs in/into 对比｜Preposition Dino",
      description:
        "inside 表示在边界/容器的内部（inside the box），比 in 更强调“在里面/别越界”。包含 A1/A2 三选一规则（inside/in/into）、常见错误、对比例句与小测验。",
    },
  },
  around: {
    en: {
      title:
        "around (preposition): meaning (surrounding, approximately) + examples | Preposition Dino",
      description:
        "around means (1) surrounding/encircling (sit around the table) and (2) approximately with time or numbers (around 5 pm / around 20 people). Quick rules, natural examples, and common comparisons.",
    },
    "zh-CN": {
      title: "around 介词用法：在……周围 / 大约（约）＋例句 | Preposition Dino",
      description:
        "around 常用两大义项：（1）在……周围/环绕（sit around the table）；（2）表示“大约/差不多”，用于时间或数量（around 5 pm / around 20 people）。本页给出规则与自然例句，帮助快速上手。",
    },
  },
  about: {
    en: {
      title:
        "about (preposition): why it means concerning and approximately | Preposition Dino",
      description:
        "About originally feels like moving around a center, which helps explain its meanings: around/surrounding, concerning, and approximately. Includes 3D diagrams, examples, about vs around, common mistakes, quiz, and FAQ.",
    },
    "zh-CN": {
      title: "about 介词用法：为什么它既表示“关于”也表示“大约”？｜Preposition Dino",
      description:
        "about 的核心感觉像围着一个中心打转，所以它能表示在周围、关于某事，也能表示大约、左右。页面含 3D 图解、例句、about vs around 对比、易错点、小测验与 FAQ。",
    },
  },
  "across-from": {
    en: {
      title: "across from: meaning + examples (vs opposite, across) | Preposition Dino",
      description:
        "across from means ‘on the opposite side’ across a space (street, river, hall). Learn across from vs opposite vs across, with clear examples and common learner mistakes.",
    },
    "zh-CN": {
      title: "across from 用法：在……对面（对比 opposite/across）| Preposition Dino",
      description:
        "across from 表示“在……对面”（隔着街道、河流或空间）。本页讲清 across from vs opposite vs across 的区别，配自然例句与常见错误。",
    },
  },
  amid: {
    en: {
      title: "amid: meaning + examples (amid vs among) | Preposition Dino",
      description:
        "amid means ‘in the middle of/surrounded by,’ often in formal contexts (amid chaos, amid criticism). Compare amid vs among with practical examples and quick rules.",
    },
    "zh-CN": {
      title: "amid 用法：在……之中（书面）｜与 among 区别 | Preposition Dino",
      description:
        "amid 表示“在……之中/在……环境下”，语气较正式，常见于 amid chaos / amid criticism。含 amid vs among 对比、例句与易错点。",
    },
  },
  amidst: {
    en: {
      title: "amidst: meaning + examples (amidst vs amid) | Preposition Dino",
      description:
        "amidst has the same core meaning as amid (‘in the middle of’), but often sounds more literary. Learn when to use amidst, with examples and comparison to amid/among.",
    },
    "zh-CN": {
      title: "amidst 用法：在……之中（较文学/正式）｜与 amid 区别 | Preposition Dino",
      description:
        "amidst 与 amid 基本同义，表示“在……之中”，但语气更文学或正式。包含 amidst vs amid/among 区别、常见搭配与例句。",
    },
  },
  "in-the-middle-of": {
    en: {
      title:
        "in the middle of: meaning + examples (center position & process) | Preposition Dino",
      description:
        "in the middle of means at the center of a place/group or during a process (in the middle of class). Learn center-position vs among, with clear examples and quick checks.",
    },
    "zh-CN": {
      title: "in the middle of 用法：在……中间/在……过程中 | Preposition Dino",
      description:
        "in the middle of 表示“在中央位置”或“在进行到一半时”。本页对比 in the middle of 与 among，提供空间与过程两类高频例句。",
    },
  },
  "in-back-of": {
    en: {
      title: "in back of vs behind: meaning & examples | Preposition Dino",
      description:
        "in back of is informal AmE for behind (physical location). For figurative/formal uses, use behind. Not the same as in the back of (= inside). Example: The garage is in back of the house.",
    },
    "zh-CN": {
      title: "in back of：美式口语“在后面”（vs behind） | Preposition Dino",
      description:
        "in back of 表示“在……后面”（美式口语，≈ behind）。正式/书面与抽象义用 behind。不要和 in the back of（在……里面靠后）混淆。例句：The garage is in back of the house。",
    },
  },
  "in-front-of": {
    en: {
      title: "in front of vs in the front of: meaning & examples | Preposition Dino",
      description:
        "in front of is an outside position before something (often facing). in the front of is inside the front part. For time order, use before. Example: The car is parked in front of the house.",
    },
    "zh-CN": {
      title: "in front of vs in the front of：区别与例句 | Preposition Dino",
      description:
        "in front of 表示外部前方；in the front of 表示在……里面的前部。表示时间先后用 before。例句：The car is parked in front of the house。",
    },
  },
  between: {
    en: {
      title: "between preposition: meaning & examples | Preposition Dino",
      description:
        "between links two endpoints (A and B) in space or time. Pattern: between A and B (not between A to B). Example: Call me between 7 and 9 p.m.",
    },
    "zh-CN": {
      title: "between 介词用法：含义与例句 | Preposition Dino",
      description:
        "between 表示“两端点之间”的关系（空间/时间）。固定搭配：between A and B（不是 between A to B）。例句：Call me between 7 and 9 p.m.",
    },
  },
  among: {
    en: {
      title: "among: meaning + examples (among vs between) | Preposition Dino",
      description:
        "among means ‘within a group’ (people, objects, ideas). Use a quick 4-question rule to choose among vs between vs amid, plus real examples like among the best / among other things. Learn one clear pattern in 30 seconds.",
    },
    "zh-CN": {
      title: "among 用法：在……当中｜与 between/amid 区别＋例句 | Preposition Dino",
      description:
        "among 表示“在一群/多者当中”（人群、树丛、一堆物品、统计语境都常见）。本页用 4 个问题快速区分 among vs between vs amid，并配常见搭配与例句。用一个清晰模式，30秒建立介词直觉。",
    },
  },
  upon: {
    en: {
      title: "upon: meaning & examples (upon vs on) | Preposition Dino",
      description:
        'upon is a formal version of on for surface contact. Use upon + noun/gerund for "when/as soon as" (upon arrival). In daily speech, prefer on/when.',
    },
    "zh-CN": {
      title: "upon 介词用法：含义与例句（更正式的 on） | Preposition Dino",
      description:
        "upon 是较正式的 on（接触表面）。常见结构：upon + 名词/动名词，表示“在……时/一……就”（upon arrival / upon arriving）。口语多用 on/when。",
    },
  },
  outside: {
    en: {
      title: "outside vs out of: meaning & examples | Preposition Dino",
      description:
        "outside is a location preposition: not inside a boundary (outside the house). For leaving/movement, use out of (go out of the room). Don't confuse it with without (lacking).",
    },
    "zh-CN": {
      title: "outside 介词：含义与例句（对比 out of） | Preposition Dino",
      description:
        "outside 表示位置：在边界/房间/建筑外（outside the house）。若强调从里到外的动作，用 out of（go out of the room）。不要和 without（缺少/没带）混淆。",
    },
  },
  beyond: {
    en: {
      title: "beyond: meaning & examples (vs past, over) | Preposition Dino",
      description:
        'beyond means "farther than a point" or "outside a limit" (beyond the river, beyond our budget). Use past for passing a point, and over for numbers (over 100).',
    },
    "zh-CN": {
      title: "beyond 介词用法：含义与例句（对比 past/over） | Preposition Dino",
      description:
        "beyond 表示“在更远那边/超出界限”（beyond the river, beyond our budget）。past 更像“走过某点”，over 常用于数量“超过”（over 100）。",
    },
  },
  across: {
    en: {
      title: "across vs through: meaning & examples | Preposition Dino",
      description:
        'across means "from one side to the other" (across the street). through goes inside a space/passage (through the tunnel). Example: She ran across the street.',
    },
    "zh-CN": {
      title: "across 介词用法：含义与例句（对比 through） | Preposition Dino",
      description:
        "across 表示“到对面/横穿”（across the street）；through 表示“穿过内部/通道”（through the tunnel）。例句：She ran across the street。",
    },
  },
  through: {
    en: {
      title: "through vs across: meaning & examples | Preposition Dino",
      description:
        'through means passing inside a space/passage (through the tunnel). across crosses an area/surface (across the street). Example: The train went through the tunnel.',
    },
    "zh-CN": {
      title: "through 介词用法：含义与例句（对比 across） | Preposition Dino",
      description:
        "through 表示“穿过内部/通道”（through the tunnel）；across 表示“跨越表面/区域到另一侧”（across the street）。例句：The train went through the tunnel。",
    },
  },
  opposite: {
    en: {
      title: "opposite vs across from: meaning & examples | Preposition Dino",
      description:
        "opposite means directly facing on the other side (sit opposite me, the cafe is opposite the school). across from is very close in meaning and common in American English. Don't confuse opposite with in front of.",
    },
    "zh-CN": {
      title: "opposite 介词用法：含义与例句（对比 across from） | Preposition Dino",
      description:
        "opposite 表示“在对面/正对（面对面）”：sit opposite me / The cafe is opposite the school。across from 多数情况下近似（美式更常见）。不要把 opposite 和 in front of（同侧前方）混淆。",
    },
  },
  past: {
    en: {
      title: "past vs to (clock time): meaning & examples | Preposition Dino",
      description:
        "past means passing a point and going beyond it (walk past the school). In time it can mean later than a time (It's past 3 o'clock) and clock reading (ten past six). Contrast: ten past six vs ten to six.",
    },
    "zh-CN": {
      title: "past 介词用法：含义与例句（对比 to） | Preposition Dino",
      description:
        "past 的核心画面是“经过某点继续往前”：walk past the school。时间里可表示“超过某时间点”（It's past 3 o'clock）以及钟表读法（ten past six）。对比：ten past six（过六点十分）vs ten to six（差十分到六点）。",
    },
  },
  "far-from": {
    en: {
      title: "far from vs near: meaning & examples | Preposition Dino",
      description:
        'far from means a long distance away (far from home, far from here). Contrast: near/close to for short distance. Also common: "far from perfect" = not at all perfect.',
    },
    "zh-CN": {
      title: "far from 介词用法：含义与例句（对比 near） | Preposition Dino",
      description:
        "far from 表示“离……很远”：far from home / far from here。对比 near/close to 表示近。常见固定表达：far from perfect = 远非完美/一点也不完美。",
    },
  },
  against: {
    en: {
      title: "against vs on: meaning & examples | Preposition Dino",
      description:
        'against means touching a surface with pressure/support (against the wall). It can also mean opposed to (vote against) or in violation of a rule (against the rules), and it appears in the time phrase "against the clock". Compare: on is on top of a surface (on the table). Example: The ladder is against the wall.',
    },
    "zh-CN": {
      title: "against 介词用法：含义与例句（对比 on） | Preposition Dino",
      description:
        "against 表示“贴着/靠着”（against the wall），也可表示“反对/违反”（vote against / against the rules），以及固定短语 against the clock（争分夺秒）；on 表示“在表面上方并接触”（on the table）。例句：The ladder is against the wall。",
    },
  },
  in: {
    en: {
      title: "in (preposition): meaning (inside a boundary) + examples | Preposition Dino",
      description:
        "in means inside a boundary or enclosure. It is one of the most common English prepositions, used for location, time, and state. Examples: in the room, in the city, in the morning.",
    },
    "zh-CN": {
      title: "in: meaning, place use, and examples | Preposition Dino",
      description:
        "in 表示在某个范围或边界之内，是英语中最常用的介词之一。用于地点、时间和状态。例句：在房间里 in the room，在城市里 in the city。",
    },
  },
  on: {
    en: {
      title: "on (preposition): meaning (on a surface) + examples | Preposition Dino",
      description:
        "on means supported by or in contact with a surface. It is used for position, days, and topics. Examples: on the table, on Monday, on the topic.",
    },
    "zh-CN": {
      title: "on: meaning, place use, and examples | Preposition Dino",
      description:
        "on 表示在某一表面上（接触或支撑），用于位置、日期和话题。例句：在桌子上 on the table，在星期一 on Monday。",
    },
  },
  under: {
    en: {
      title: "under (preposition): meaning (below) + examples | Preposition Dino",
      description:
        "under means directly below, with possible contact or close proximity. It is the opposite of over. Examples: under the table, under the bridge, under pressure.",
    },
    "zh-CN": {
      title: "under: meaning, place use, and examples | Preposition Dino",
      description:
        "under 表示在正下方，可能接触或非常接近，是 over 的反义词。例句：在桌子下面 under the table，在桥下 under the bridge。",
    },
  },
  over: {
    en: {
      title: "over (preposition): meaning (above, across) + examples | Preposition Dino",
      description:
        "over means above in position, or moving across to the other side. It can also mean more than. Examples: over the mountain, over the bridge, over 100 people.",
    },
    "zh-CN": {
      title: "over: meaning, place use, and examples | Preposition Dino",
      description:
        "over 表示在上方位置，或移动到另一边，也可表示超过。例句：翻过山 over the mountain，在桥上 over the bridge，超过100人 over 100 people。",
    },
  },
  behind: {
    en: {
      title: "behind (preposition): meaning (at the back of) + examples | Preposition Dino",
      description:
        "behind means at the back of or posterior to something. It is the opposite of in front of. Examples: behind the door, behind the building.",
    },
    "zh-CN": {
      title: "behind: meaning, place use, and examples | Preposition Dino",
      description:
        "behind 表示在后面，与 in front of 相反。例句：在门后面 behind the door，在建筑物后面 behind the building。",
    },
  },
  below: {
    en: {
      title: "below (preposition): meaning (lower than) + examples | Preposition Dino",
      description:
        "below means at a lower level than something. It is not in contact. Examples: below the window, below the surface.",
    },
    "zh-CN": {
      title: "below: meaning, place use, and examples | Preposition Dino",
      description:
        "below 表示低于某物，不一定接触。例句：在窗户下面 below the window，在水面以下 below the surface。",
    },
  },
  beside: {
    en: {
      title: "beside (preposition): meaning (next to) + examples | Preposition Dino",
      description:
        "beside means immediately next to, at the side of. It is more precise than near. Examples: sit beside me, beside the window.",
    },
    "zh-CN": {
      title: "beside: meaning, place use, and examples | Preposition Dino",
      description:
        "beside 表示紧挨着，在旁边，比 near 更精确。例句：坐在我旁边 sit beside me，在窗户旁边 beside the window。",
    },
  },
  "next-to": {
    en: {
      title: "next to (preposition): meaning (adjacent to) + examples | Preposition Dino",
      description:
        "next to means immediately adjacent, in the closest position beside something. Examples: next to the door, next to the station.",
    },
    "zh-CN": {
      title: "next to: meaning, place use, and examples | Preposition Dino",
      description:
        "next to 表示紧邻，在隔壁，是最接近的相邻位置。例句：门旁边 next to the door，车站隔壁 next to the station。",
    },
  },
  near: {
    en: {
      title: "near (preposition): meaning (close to) + examples | Preposition Dino",
      description:
        "near means at a short distance from something, not exactly beside but within reach. Examples: near the park, near the school.",
    },
    "zh-CN": {
      title: "near: meaning, place use, and examples | Preposition Dino",
      description:
        "near 表示在附近，短距离内，不一定是正旁边但在可及范围内。例句：在公园附近 near the park，在学校附近 near the school。",
    },
  },
  off: {
    en: {
      title: "off (preposition): meaning (away from, detached from) + examples | Preposition Dino",
      description:
        "off means away from a surface or position, or detached from. It is the opposite of on. Examples: off the table, take off the shelf.",
    },
    "zh-CN": {
      title: "off: meaning, place use, and examples | Preposition Dino",
      description:
        "off 表示离开某个表面或位置，或脱离，是 on 的反义词。例句：从桌子上 off the table，从架子上取下 take off the shelf。",
    },
  },
  up: {
    en: {
      title: "up (preposition): meaning (along, upward) + examples | Preposition Dino",
      description:
        "up means toward a higher position or along a direction. It is the opposite of down. Examples: walk up the hill, go up the street.",
    },
    "zh-CN": {
      title: "up: meaning, place use, and examples | Preposition Dino",
      description:
        "up 表示朝向更高位置，或沿着某个方向，是 down 的反义词。例句：上山 walk up the hill，沿着街走 go up the street。",
    },
  },
  down: {
    en: {
      title: "down (preposition): meaning (along, downward) + examples | Preposition Dino",
      description:
        "down means toward a lower position or along a direction. It is the opposite of up. Examples: walk down the hill, go down the street.",
    },
    "zh-CN": {
      title: "down: meaning, place use, and examples | Preposition Dino",
      description:
        "down 表示朝向更低位置，或沿着某个方向，是 up 的反义词。例句：下山 walk down the hill，沿着街走 go down the street。",
    },
  },
  into: {
    en: {
      title: "into (preposition): meaning (entering) + examples | Preposition Dino",
      description:
        "into means moving from outside to inside, or changing state. Examples: go into the room, turn into a butterfly.",
    },
    "zh-CN": {
      title: "into: meaning, place use, and examples | Preposition Dino",
      description:
        "into 表示从外部进入内部，或状态转变。例句：进入房间 go into the room，变成蝴蝶 turn into a butterfly。",
    },
  },
  onto: {
    en: {
      title: "onto (preposition): meaning (moving onto a surface) + examples | Preposition Dino",
      description:
        "onto means moving to and making contact with a surface. Examples: jump onto the table, climb onto the roof.",
    },
    "zh-CN": {
      title: "onto: meaning, place use, and examples | Preposition Dino",
      description:
        "onto 表示移动到某表面上并接触。例句：跳到桌上 jump onto the table，爬到屋顶 climb onto the roof。",
    },
  },
  "out-of": {
    en: {
      title: "out of (preposition): meaning (from inside, exiting) + examples | Preposition Dino",
      description:
        "out of means moving from inside to outside, or away from. Examples: walk out of the room, get out of the car.",
    },
    "zh-CN": {
      title: "out of: meaning, place use, and examples | Preposition Dino",
      description:
        "out of 表示从内部到外部，或离开。例句：从房间走出来 walk out of the room，下车 get out of the car。",
    },
  },
  during: {
    en: {
      title: "during (preposition): meaning (throughout a period) + examples | Preposition Dino",
      description:
        "during means throughout the entire duration of a period. Examples: during the summer, during the meeting.",
    },
    "zh-CN": {
      title: "during: meaning, time use, and examples | Preposition Dino",
      description:
        "during 表示在某个时间段内从头到尾。例句：整个夏天 during the summer，会议期间 during the meeting。",
    },
  },
  until: {
    en: {
      title: "until (preposition): meaning (up to a point) + examples | Preposition Dino",
      description:
        "until means up to a particular point in time. Examples: wait until tomorrow, stay until 5pm.",
    },
    "zh-CN": {
      title: "until: meaning, time use, and examples | Preposition Dino",
      description:
        "until 表示直到某个时间点。例句：等到明天 wait until tomorrow，呆到下午5点 stay until 5pm。",
    },
  },
  toward: {
    en: {
      title: "toward (preposition): meaning (in the direction of) + examples | Preposition Dino",
      description:
        "toward means in the direction of, approaching but not necessarily reaching. Examples: walk toward the door, toward the future.",
    },
    "zh-CN": {
      title: "toward: meaning, place use, and examples | Preposition Dino",
      description:
        "toward 表示朝向，向着，接近但不一定到达。例句：朝门走去 walk toward the door，迈向未来 toward the future。",
    },
  },
  throughout: {
    en: {
      title: "throughout (preposition): meaning (in every part of) + examples | Preposition Dino",
      description:
        "throughout means in every part of, or from beginning to end of. Examples: throughout the country, throughout the day.",
    },
    "zh-CN": {
      title: "throughout: meaning, time use, and examples | Preposition Dino",
      description:
        "throughout 表示遍及每一部分，或从头到尾。例句：遍布全国 throughout the country，一整天 throughout the day。",
    },
  },
  via: {
    en: {
      title: "via (preposition): meaning (through, by way of) + examples | Preposition Dino",
      description:
        "via means by way of, through a place or method. Examples: fly via London, send via email.",
    },
    "zh-CN": {
      title: "via: meaning, place use, and examples | Preposition Dino",
      description:
        "via 表示经由，通过某个地方或方式。例句：经由伦敦飞 fly via London，通过邮件发送 send via email。",
    },
  },
  with: {
    en: {
      title: "with (preposition): meaning (accompanied by, using) + examples | Preposition Dino",
      description:
        "with means accompanied by, in the presence of, or using. It is one of the most common English prepositions. Examples: go with me, write with a pen.",
    },
    "zh-CN": {
      title: "with: meaning, place use, and examples | Preposition Dino",
      description:
        "with 表示和一起，有……存在，或使用工具，是最常用的介词之一。例句：和我一起去 go with me，用笔写 write with a pen。",
    },
  },
  within: {
    en: {
      title: "within (preposition): meaning (inside a limit) + examples | Preposition Dino",
      description:
        "within means inside a boundary or before a deadline, more formal than inside. Examples: within the city, within an hour.",
    },
    "zh-CN": {
      title: "within: meaning, place use, and examples | Preposition Dino",
      description:
        "within 表示在边界之内或截止时间之前，比 inside 更正式。例句：在城市范围内 within the city，一小时内 within an hour。",
    },
  },
  without: {
    en: {
      title: "without (preposition): meaning (outside boundaries) + examples | Preposition Dino",
      description:
        "without means outside a limit or boundary, opposite of within. Examples: without the city walls, without permission.",
    },
    "zh-CN": {
      title: "without: meaning, place use, and examples | Preposition Dino",
      description:
        "without 表示在范围或边界之外，是 within 的反义词。例句：在城墙之外 without the city walls，未经允许 without permission。",
    },
  },
  along: {
    en: {
      title: "along (preposition): meaning (on a line) + examples | Preposition Dino",
      description:
        "along means on a line or path, moving forward on something long. Examples: walk along the road, along the river.",
    },
    "zh-CN": {
      title: "along: meaning, place use, and examples | Preposition Dino",
      description:
        "along 表示沿着一条线或路径，在狭长的东西上移动。例句：沿着路走 walk along the road，沿着河走 along the river。",
    },
  },
  alongside: {
    en: {
      title: "alongside (preposition): meaning (next to, beside) + examples | Preposition Dino",
      description:
        "alongside means right next to, at the side of something long. Examples: park alongside the curb, sit alongside the wall.",
    },
    "zh-CN": {
      title: "alongside: meaning, place use, and examples | Preposition Dino",
      description:
        "alongside 表示紧挨着，在狭长物体的旁边。例句：靠着路边停车 park alongside the curb，靠墙坐着 sit alongside the wall。",
    },
  },
  "away-from": {
    en: {
      title: "away from (preposition): meaning (at a distance from) + examples | Preposition Dino",
      description:
        "away from means at a distance from, moving away. Examples: stay away from the fire, away from home.",
    },
    "zh-CN": {
      title: "away from: meaning, place use, and examples | Preposition Dino",
      description:
        "away from 表示远离，离开某物或某地。例句：远离火 stay away from the fire，离开家 away from home。",
    },
  },
  "due-to": {
    en: {
      title: "due to (preposition): meaning (because of) + examples | Preposition Dino",
      description:
        "due to means because of, caused by. It is often used to explain reasons. Examples: closed due to rain, late due to traffic.",
    },
    "zh-CN": {
      title: "due to: meaning, time use, and examples | Preposition Dino",
      description:
        "due to 表示因为，由于，用于解释原因。例句：因雨关闭 closed due to rain，因交通拥堵迟到 late due to traffic。",
    },
  },
  including: {
    en: {
      title: "including (preposition): meaning (containing, as part of) + examples | Preposition Dino",
      description:
        "including means containing, as part of a group. Examples: including you, including tax.",
    },
    "zh-CN": {
      title: "including: meaning, place use, and examples | Preposition Dino",
      description:
        "including 表示包括，包含，作为群体的一部分。例句：包括你 including you，含税 including tax。",
    },
  },
  "instead-of": {
    en: {
      title: "instead of (preposition): meaning (in place of) + examples | Preposition Dino",
      description:
        "instead of means in place of, as an alternative to. Examples: tea instead of coffee, instead of going.",
    },
    "zh-CN": {
      title: "instead of: meaning, place use, and examples | Preposition Dino",
      description:
        "instead of 表示代替，而不是，作为替代选择。例句：用茶代替咖啡 tea instead of coffee，不去 instead of going。",
    },
  },
  since: {
    en: {
      title: "since (preposition): meaning (from a past point until now) + examples | Preposition Dino",
      description:
        "since means from a past point in time until now. Examples: since 2020, since yesterday.",
    },
    "zh-CN": {
      title: "since: meaning, time use, and examples | Preposition Dino",
      description:
        "since 表示从过去某个时间点到现在。例句：自从2020年 since 2020，自从昨天 since yesterday。",
    },
  },
  "according-to": {
    en: {
      title: "according to (preposition): meaning (as stated by) + examples | Preposition Dino",
      description:
        "according to means as stated by or based on a source. Examples: according to the news, according to the map.",
    },
    "zh-CN": {
      title: "according to: meaning, place use, and examples | Preposition Dino",
      description:
        "according to 表示根据，按照，依据某个来源。例句：根据新闻 according to the news，根据地图 according to the map。",
    },
  },
  "ahead-of": {
    en: {
      title: "ahead of (preposition): meaning (in front of, before) + examples | Preposition Dino",
      description:
        "ahead of means in front of in space, or before in time. Examples: ahead of the car, ahead of schedule.",
    },
    "zh-CN": {
      title: "ahead of: meaning, place use, and examples | Preposition Dino",
      description:
        "ahead of 表示在空间上领先，或在时间上提前。例句：在车前面 ahead of the car，提前完成 ahead of schedule。",
    },
  },
  "apart-from": {
    en: {
      title: "apart from (preposition): meaning (except for, in addition to) + examples | Preposition Dino",
      description:
        "apart from means except for, or in addition to. Examples: apart from that, apart from the cost.",
    },
    "zh-CN": {
      title: "apart from: meaning, place use, and examples | Preposition Dino",
      description:
        "apart from 表示除了……还有，且别提。例句：除此之外 apart from that，且别提费用 apart from the cost。",
    },
  },
  before: {
    en: {
      title: "before (preposition): meaning (earlier than, in front of) + examples | Preposition Dino",
      description:
        "before means earlier than in time, or in front of in space. Examples: before noon, before the door.",
    },
    "zh-CN": {
      title: "before: meaning, time use, and examples | Preposition Dino",
      description:
        "before 表示在时间上更早，或在空间上在前。例句：中午之前 before noon，在门前 before the door。",
    },
  },
  beneath: {
    en: {
      title: "beneath (preposition): meaning (under, below) + examples | Preposition Dino",
      description:
        "beneath means under, at a lower position, often with a sense of being covered or hidden. Examples: beneath the surface, beneath the carpet.",
    },
    "zh-CN": {
      title: "beneath: meaning, place use, and examples | Preposition Dino",
      description:
        "beneath 表示在下面，处于较低位置，常有被覆盖或隐藏的感觉。例句：在表面下 beneath the surface，在地毯下 beneath the carpet。",
    },
  },
  underneath: {
    en: {
      title: "underneath (preposition): meaning (directly under, beneath) + examples | Preposition Dino",
      description:
        "underneath means directly under, with full coverage or concealment. Examples: underneath the table, underneath the paper.",
    },
    "zh-CN": {
      title: "underneath: meaning, place use, and examples | Preposition Dino",
      description:
        "underneath 表示在底下，完全覆盖或隐藏。例句：在桌子底下 underneath the table，在纸下面 underneath the paper。",
    },
  },
};

function getSeoCategories(entry: PrepositionEntry): LearningCategory[] {
  const categories: LearningCategory[] = [];
  if (isDynamicPreposition(entry)) categories.push("dynamic");
  if (isSpatialPreposition(entry)) categories.push("space");
  if (isTemporalPreposition(entry)) categories.push("time");
  if (getEntryCategories(entry).includes("abstract")) categories.push("abstract");
  return categories.length ? categories : ["space"];
}

export function getPrimarySeoCategory(entry: PrepositionEntry) {
  const override = PRIMARY_SEO_CATEGORY_OVERRIDE[entry.id];
  if (override) return override;

  const categories = getSeoCategories(entry);
  return (
    SEO_CATEGORY_PRIORITY.find((candidate) => categories.includes(candidate)) ?? "space"
  );
}

function getSeoTitle({
  word,
  locale,
  category,
}: {
  word: string;
  locale: Locale;
  category: LearningCategory;
}) {
  return `${word}: ${SEO_TEMPLATE[locale][category].titleSuffix} | Preposition Dino`;
}

function getSeoDescription({
  locale,
  category,
  meaning,
  tip,
  example,
}: {
  locale: Locale;
  category: LearningCategory;
  meaning: string;
  tip?: string;
  example?: string;
}) {
  const template = SEO_TEMPLATE[locale][category];
  const parts: string[] = [meaning, template.ctrLead];
  if (tip) {
    parts.push(`${template.ruleLabel}: ${tip}`);
  }
  if (example) {
    parts.push(`${template.exampleLabel}: ${example}`);
  }
  parts.push(template.actionLine);
  return parts.join(" ");
}

function getSeoKeywords({
  entry,
  locale,
  categories,
}: {
  entry: PrepositionEntry;
  locale: Locale;
  categories: LearningCategory[];
}) {
  const baseKeywords = [
    entry.word,
    ...entry.tags,
    "preposition",
    "preposition words",
    "preposition examples",
    "English learning",
    "3D",
    "meaning",
    "examples",
  ];
  const categoryKeywords = categories.flatMap(
    (category) => SEO_KEYWORDS_BY_CATEGORY[locale][category],
  );
  return Array.from(new Set([...baseKeywords, ...categoryKeywords]));
}

function resolveSeoExample({
  entry,
  locale,
  primaryCategory,
}: {
  entry: PrepositionEntry;
  locale: Locale;
  primaryCategory: LearningCategory;
}) {
  const categoryExample = entry.examplesByCategory?.[primaryCategory]?.[0];
  const fallbackExample = entry.examples[0];

  if (locale === "en") {
    return categoryExample?.en ?? fallbackExample?.en;
  }

  return (
    categoryExample?.i18n?.[locale]?.translation ??
    categoryExample?.en ??
    fallbackExample?.i18n?.[locale]?.translation ??
    fallbackExample?.en
  );
}

export function buildResolvedPrepositionSeo({
  entry,
  locale,
}: {
  entry: PrepositionEntry;
  locale: Locale;
}) {
  const localizedContent = entry.i18n[locale] ?? entry.i18n["zh-CN"];
  const meaning = localizedContent?.meaning ?? entry.word;
  const seoCategories = getSeoCategories(entry);
  const primaryCategory = getPrimarySeoCategory(entry);
  const tip = localizedContent?.tips?.[0];
  const example = resolveSeoExample({
    entry,
    locale,
    primaryCategory,
  });

  const generatedTitle = getSeoTitle({
    word: entry.word,
    locale,
    category: primaryCategory,
  });
  const generatedDescription = getSeoDescription({
    locale,
    category: primaryCategory,
    meaning,
    tip,
    example,
  });
  const overrides = SEO_METADATA_OVERRIDES[entry.id]?.[locale];

  return {
    primaryCategory,
    seoCategories,
    title: overrides?.title ?? generatedTitle,
    description: overrides?.description ?? generatedDescription,
    keywords: getSeoKeywords({
      entry,
      locale,
      categories: seoCategories,
    }),
  };
}
