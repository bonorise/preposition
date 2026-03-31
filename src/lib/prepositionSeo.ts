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
