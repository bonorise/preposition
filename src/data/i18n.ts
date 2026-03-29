import type { Locale } from "@/data/types";

export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: Locale[] = ["zh-CN", "en"];

export function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

// Internal locales are BCP-47 (e.g. zh-CN), but URL segments stay short (e.g. /zh).
export function localeToPathSegment(locale: Locale): string {
  if (locale === "zh-CN") return "zh";
  return locale;
}

export function pathSegmentToLocale(segment: string): Locale | null {
  if (segment === "zh") return "zh-CN";
  if (isSupportedLocale(segment)) return segment;
  return null;
}

export const UI_TEXT: Record<
  Locale,
  {
    siteTitle: string;
    heroSloganZhLine1: string;
    heroSloganZhLine2: string;
    heroSloganEnLine1: string;
    heroSloganEnLine2: string;
    heroMasteryLine: string;
    siteTagline: string;
    siteSubtitle: string;
    galleryLabel: string;
    searchPlaceholder: string;
    searchHint: string;
    countLabel: string;
    headerTitle: string;
    headerSubtitle: string;
    headerHome: string;
    footerText: string;
    footerAbout: string;
    footerPrivacy: string;
    footerTerms: string;
    footerContact: string;
    pageUpdatedLabel: string;
    languageLabel: string;
    languageEnglish: string;
    languageChinese: string;
    emptyTitle: string;
    emptyBody: string;
    featureChips: string[];
    detailBack: string;
    detailExamplesTitle: string;
    detailControlsTitle: string;
    detailResetCamera: string;
    detailPlayAnimation: string;
    detailFullscreen: string;
    detailExitFullscreen: string;
    detailPrev: string;
    detailNext: string;
    detailViewerHint: string;
    detailViewerHelper: string;
    detailRelatedTitle: string;
    detailSceneCategoryLabel: string;
    detailSceneCategorySpace: string;
    detailSceneCategoryTime: string;
    detailSceneCategoryDynamic: string;
    detailSceneCategoryAbstract: string;
    detailExamplesAbstract: string;
    timeAxisLabelNow: string;
    timeAxisLabelStart: string;
    timeAxisLabelEnd: string;
    timeAxisLabelPoint: string;
    timeAxisLabelRange: string;
    timeAxisLabelDuration: string;
    timeAxisLabelDeadline: string;
    timeAxisLabelBeforeDeadline: string;
    timeAxisLabelWindow: string;
    timeAxisLabelLimit: string;
    timeAxisLabelAfter: string;
    timeAxisLabelDate: string;
    directionFront: string;
    playgroundTitle: string;
    playgroundHint: string;
    playgroundModeStatic: string;
    playgroundModeDynamic: string;
    playgroundMotionHint: string;
    playgroundViewDetail: string;
    detailComparisonTitle: string;
    detailComparisonPlaceholder: string;
    detailCollocationsTitle: string;
    detailCollocationsPlaceholder: string;
    detailMistakesTitle: string;
    detailMistakesPlaceholder: string;
    detailQuizTitle: string;
    detailQuizPlaceholder: string;
    detailFaqTitle: string;
    detailFaqPlaceholder: string;
    detailQuizPromptLabel: string;
    detailQuizChooseLabel: string;
    detailQuizCorrect: string;
    detailQuizIncorrect: string;
    detailQuizAnswerPrefix: string;
    detailQuizExplanationLabel: string;
    sectionSpaceTitle: string;
    sectionSpaceDesc: string;
    sectionTimeTitle: string;
    sectionTimeDesc: string;
    sectionDynamicTitle: string;
    sectionDynamicDesc: string;
    sectionAbstractTitle: string;
    sectionAbstractDesc: string;
    sectionEmpty: string;
    faqTitle: string;
    faqSubtitle: string;
    faqItems: Array<{ question: string; answer: string }>;
    metaTitle: string;
    metaDescription: string;
  }
> = {
  "zh-CN": {
    siteTitle: "Preposition Dino",
    heroSloganZhLine1: "让全世界的英语初学者",
    heroSloganZhLine2: "3 秒钟学懂一个介词",
    heroSloganEnLine1: "Help beginners around the world",
    heroSloganEnLine2: "learn one preposition in 3 seconds",
    heroMasteryLine: "1 天时间，轻松掌握 50 个介词",
    siteTagline: "英语介词 3D 空间学习站",
    siteSubtitle: "用极简线框与立体球体，建立最直观的空间记忆。",
    galleryLabel: "介词画廊",
    searchPlaceholder: "搜索介词 / 中文释义",
    searchHint: "支持英文或中文释义搜索",
    countLabel: "条介词",
    headerTitle: "Preposition Dino",
    headerSubtitle: "可能是全世界最好的介词学习网站",
    headerHome: "首页",
    footerText: "Help English beginners worldwide learn one preposition in 3 seconds",
    footerAbout: "关于我们",
    footerPrivacy: "隐私政策",
    footerTerms: "服务条款",
    footerContact: "联系",
    pageUpdatedLabel: "更新日期",
    languageLabel: "语言",
    languageEnglish: "English",
    languageChinese: "中文",
    emptyTitle: "没有匹配的介词",
    emptyBody: "尝试换一个关键词，或浏览全部列表。",
    featureChips: ["3D 拖拽旋转", "极简线框", "中英例句"],
    detailBack: "返回列表",
    detailExamplesTitle: "例句",
    detailControlsTitle: "视角控制",
    detailResetCamera: "重置视角",
    detailPlayAnimation: "播放动效",
    detailFullscreen: "全屏演示",
    detailExitFullscreen: "取消全屏",
    detailPrev: "上一个",
    detailNext: "下一个",
    detailViewerHint: "拖拽旋转 / 滚轮缩放 / 双指缩放",
    detailViewerHelper: "部分介词需要动态表达，MVP 先用静态位置 + 文字说明。",
    detailRelatedTitle: "相关介词",
    detailSceneCategoryLabel: "示意图类别",
    detailSceneCategorySpace: "空间",
    detailSceneCategoryTime: "时间",
    detailSceneCategoryDynamic: "动态",
    detailSceneCategoryAbstract: "抽象",
    detailExamplesAbstract: "抽象用法例句",
    timeAxisLabelNow: "现在",
    timeAxisLabelStart: "起点",
    timeAxisLabelEnd: "终点",
    timeAxisLabelPoint: "时间点",
    timeAxisLabelRange: "时间范围",
    timeAxisLabelDuration: "时间段",
    timeAxisLabelDeadline: "截止",
    timeAxisLabelBeforeDeadline: "截止前",
    timeAxisLabelWindow: "时限内",
    timeAxisLabelLimit: "阈值",
    timeAxisLabelAfter: "之后",
    timeAxisLabelDate: "具体日期",
    directionFront: "前",
    playgroundTitle: "拖动小球识别介词",
    playgroundHint: "拖动紫色小球，观察它与立方体的相对位置。",
    playgroundModeStatic: "静态介词",
    playgroundModeDynamic: "动态介词",
    playgroundMotionHint: "沿虚线路径拖动小球，感受方向与过程。",
    playgroundViewDetail: "查看详情",
    detailComparisonTitle: "差异解析",
    detailComparisonPlaceholder: "内容整理中，后续补充。",
    detailCollocationsTitle: "常见词组组合",
    detailCollocationsPlaceholder: "内容整理中，后续补充。",
    detailMistakesTitle: "常见错误",
    detailMistakesPlaceholder: "内容整理中，后续补充。",
    detailQuizTitle: "微测验",
    detailQuizPlaceholder: "题库整理中，后续补充。",
    detailFaqTitle: "高频问答",
    detailFaqPlaceholder: "问答整理中，后续补充。",
    detailQuizPromptLabel: "题目",
    detailQuizChooseLabel: "请选择答案",
    detailQuizCorrect: "回答正确",
    detailQuizIncorrect: "回答不正确",
    detailQuizAnswerPrefix: "正确答案：",
    detailQuizExplanationLabel: "讲解：",
    sectionSpaceTitle: "空间介词",
    sectionSpaceDesc: "聚焦位置关系：内外、上下、前后、远近。",
    sectionTimeTitle: "时间介词",
    sectionTimeDesc: "聚焦时间表达：时间点、时间段与时限。",
    sectionDynamicTitle: "动态介词",
    sectionDynamicDesc: "聚焦运动过程：路径、方向与起终点变化。",
    sectionAbstractTitle: "抽象关系",
    sectionAbstractDesc: "聚焦依据、替代、包含、原因与渠道等抽象关系。",
    sectionEmpty: "当前搜索下暂无该分类词条。",
    faqTitle: "FAQ · 这个网站如何帮助你学会介词",
    faqSubtitle: "学习方法问答",
    faqItems: [
      {
        question: "为什么介词这么容易学了又混？",
        answer:
          "因为介词描述的不是一个物体，而是物体之间的关系。名词容易靠“这是什么”记住，介词却要同时判断位置、边界、方向和视角，所以很多学习者会觉得自己好像懂了，一到真实句子里又不稳定。",
      },
      {
        question: "为什么只背中文意思还是会用错介词？",
        answer:
          "因为中文翻译通常只能给你一个大概意思，不能把真正决定选择的关系讲清楚。介词之间常常差在是否接触、是否越过边界、方向朝哪里、观察角度是什么。真正会用，不是记住一个中文标签，而是看清这个关系本身。",
      },
      {
        question: "为什么这个网站先从空间直觉开始教？",
        answer:
          "空间义通常是介词最具体、最容易形成画面的入口。先把空间关系看清楚，大脑就更容易建立稳定心像，后面再扩展到时间义和抽象义时，也不会觉得每一种用法都是零散的新规则。",
      },
      {
        question: "为什么这里先讲空间关系，而不是先讲语法术语？",
        answer:
          "语法术语可以给关系命名，但不能替代“把关系看见”这一步。对初学者来说，真正的障碍通常不是术语太少，而是关系本身还很模糊。先看清画面，再补规则，认知负担会小很多。",
      },
      {
        question: "为什么学习介词要用 3D 场景？",
        answer:
          "因为介词依赖位置、朝向和观察角度，平面的解释常常会把最关键的差异压扁。3D 场景能把接触、不接触、在内部、在外部、靠近还是跨过这些关系直接展开，让心像更稳定。",
      },
      {
        question: "为什么互动操作会让介词更容易记住？",
        answer:
          "当你拖动、旋转、观察变化时，大脑处理的就不只是文字，而是一个被主动感知过的模式。被动阅读容易留下模糊印象，主动操作更容易把关系变成可回忆、可复现的记忆。",
      },
      {
        question: "为什么对比学习比孤立记定义更有效？",
        answer:
          "很多介词的问题不是单独难，而是相邻的几个词边界太近。把相近词放在同一个参照系里比较，大脑更容易看见真正控制选择的那一个差异。对比能把模糊地带切开。",
      },
      {
        question: "为什么这里先讲最常见的意思？",
        answer:
          "因为初学者最需要的是先建立一个稳定中心，而不是一开始就把所有意思塞进来。如果一个词还没有形成清晰核心，就同时记很多延伸义，只会让它越来越散。先抓最常见义，后面的扩展才有落点。",
      },
      {
        question: "为什么这里的解释和例句都故意写得很短？",
        answer:
          "因为首页和词条页的首要目标不是展示复杂英语，而是让你快速把一个关系和一个场景绑在一起。句子越短，认知噪音越少，注意力越能集中在介词本身，而不是被长句结构拖走。",
      },
      {
        question: "为什么这个网站要保留中英双语？",
        answer:
          "双语的作用是降低理解摩擦，而不是替代思考。它能帮助初学者快速确认意思，把更多注意力放在关系、边界和画面上，而不是把时间耗在整句解码上。",
      },
      {
        question: "初学者应该怎么使用这个网站？",
        answer:
          "建议一次只学少量介词，先看场景，再看简短解释，再和相近关系做比较，最后用测验确认自己是否真的看懂。与其匆忙刷很多词，不如先把几个高频关系学得足够清楚。",
      },
      {
        question: "这个网站更适合自学还是课堂教学？",
        answer:
          "两者都适合。自学时它能帮助你一步一步建立空间直觉；课堂里它又能把原本抽象的关系直接可视化，减少老师和家长反复口头解释的负担。",
      },
      {
        question: "先学空间义，真的能帮助后面理解时间义和抽象义吗？",
        answer:
          "可以。很多时间义和抽象义并不是凭空出现的，而是从原来的空间关系一步步延伸出来的。空间核心越清楚，后面越容易看出这些用法之间的内在联系，而不会觉得它们只是需要死记硬背。",
      },
    ],
    metaTitle: "Preposition Dino｜英语介词 3D 空间学习站",
    metaDescription:
      "用 3D 空间直觉快速理解常见英语介词，支持搜索、旋转查看与中英例句。",
  },
  en: {
    siteTitle: "Preposition Dino",
    heroSloganZhLine1: "让全世界的英语初学者",
    heroSloganZhLine2: "3 秒钟学懂一个介词",
    heroSloganEnLine1: "Help English beginners worldwide",
    heroSloganEnLine2: "learn one preposition in 3 seconds",
    heroMasteryLine: "Master 50 prepositions in one day",
    siteTagline: "A 3D spatial learning station for English prepositions",
    siteSubtitle:
      "Minimal wireframes + a bold sphere to build fast spatial intuition.",
    galleryLabel: "Preposition Gallery",
    searchPlaceholder: "Search prepositions or meanings",
    searchHint: "Search by English word or meaning",
    countLabel: "prepositions",
    headerTitle: "Preposition Dino",
    headerSubtitle: "Possibly the best preposition learning website in the world",
    headerHome: "Home",
    footerText: "Help English beginners worldwide learn one preposition in 3 seconds",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerContact: "Contact",
    pageUpdatedLabel: "Last updated",
    languageLabel: "Language",
    languageEnglish: "English",
    languageChinese: "中文",
    emptyTitle: "No matches",
    emptyBody: "Try another keyword or browse the full list.",
    featureChips: ["3D Orbit", "Minimal Wireframe", "Bilingual Examples"],
    detailBack: "Back to gallery",
    detailExamplesTitle: "Examples",
    detailControlsTitle: "Controls",
    detailResetCamera: "Reset Camera",
    detailPlayAnimation: "Play motion",
    detailFullscreen: "Fullscreen",
    detailExitFullscreen: "Exit fullscreen",
    detailPrev: "Previous",
    detailNext: "Next",
    detailViewerHint: "Drag to rotate / Scroll to zoom / Pinch to zoom",
    detailViewerHelper:
      "Some prepositions need motion; MVP shows a static cue + notes.",
    detailRelatedTitle: "Related prepositions",
    detailSceneCategoryLabel: "Scene category",
    detailSceneCategorySpace: "Space",
    detailSceneCategoryTime: "Time",
    detailSceneCategoryDynamic: "Dynamic",
    detailSceneCategoryAbstract: "Abstract",
    detailExamplesAbstract: "Abstract examples",
    timeAxisLabelNow: "Now",
    timeAxisLabelStart: "Start",
    timeAxisLabelEnd: "End",
    timeAxisLabelPoint: "Point",
    timeAxisLabelRange: "Range",
    timeAxisLabelDuration: "Duration",
    timeAxisLabelDeadline: "Deadline",
    timeAxisLabelBeforeDeadline: "Before deadline",
    timeAxisLabelWindow: "Within window",
    timeAxisLabelLimit: "Limit",
    timeAxisLabelAfter: "After",
    timeAxisLabelDate: "Date",
    directionFront: "Front",
    playgroundTitle: "Drag the ball to learn prepositions",
    playgroundHint:
      "Drag the purple ball and watch the preposition update in real time.",
    playgroundModeStatic: "Static preps",
    playgroundModeDynamic: "Dynamic preps",
    playgroundMotionHint:
      "Drag the ball along the dashed path to feel direction and motion.",
    playgroundViewDetail: "View detail",
    detailComparisonTitle: "Key differences",
    detailComparisonPlaceholder: "Content coming soon.",
    detailCollocationsTitle: "Common collocations",
    detailCollocationsPlaceholder: "Content coming soon.",
    detailMistakesTitle: "Common mistakes",
    detailMistakesPlaceholder: "Content coming soon.",
    detailQuizTitle: "Mini quiz",
    detailQuizPlaceholder: "Quiz content coming soon.",
    detailFaqTitle: "Quick FAQ",
    detailFaqPlaceholder: "FAQ content coming soon.",
    detailQuizPromptLabel: "Question",
    detailQuizChooseLabel: "Choose an answer",
    detailQuizCorrect: "Correct",
    detailQuizIncorrect: "Not quite",
    detailQuizAnswerPrefix: "Answer:",
    detailQuizExplanationLabel: "Why:",
    sectionSpaceTitle: "Spatial prepositions",
    sectionSpaceDesc: "Focus on location relations: inside/outside, above/below, front/back, near/far.",
    sectionTimeTitle: "Time prepositions",
    sectionTimeDesc: "Focus on time points, durations, and deadlines.",
    sectionDynamicTitle: "Dynamic prepositions",
    sectionDynamicDesc: "Focus on movement paths, direction, and start-end transitions.",
    sectionAbstractTitle: "Abstract relations",
    sectionAbstractDesc:
      "Focus on basis, substitution, inclusion, cause, and channel relations.",
    sectionEmpty: "No items in this section for the current query.",
    faqTitle: "FAQ · How This Site Teaches Prepositions",
    faqSubtitle: "Method and learning questions",
    faqItems: [
      {
        question: "Why are prepositions so difficult to learn well?",
        answer:
          "Prepositions are difficult because they describe relationships rather than objects. A learner can name a thing quickly, but a relationship has to be seen, compared, and felt in context. That is why prepositions often seem simple at first and then become unstable in real use.",
      },
      {
        question: "Why do learners still misuse prepositions after memorizing the translation?",
        answer:
          "Because translation alone rarely captures the full relationship. Two prepositions may look similar in another language, yet differ in boundary, contact, direction, distance, or perspective. Real mastery begins when the learner can recognize the pattern underneath the label.",
      },
      {
        question: "Why does this website begin with spatial intuition?",
        answer:
          "Spatial meaning is usually the most concrete entry point into the system of prepositions. When the core image becomes clear, the word is easier to remember, compare, and extend. Many later uses in time and abstraction make more sense once that first spatial model is stable.",
      },
      {
        question: "Why teach prepositions through space instead of grammar first?",
        answer:
          "Grammar can name a pattern, but it does not always make the pattern visible. For beginners, the real obstacle is usually not terminology but vagueness. Space makes the relationship explicit, so the learner can understand first and formalize later.",
      },
      {
        question: "Why use 3D scenes on a preposition learning website?",
        answer:
          "Because prepositions depend on position, orientation, and viewpoint. A flat explanation often hides the very distinction a learner needs to notice. A simple 3D scene makes the relationship easier to inspect from different angles, which leads to a cleaner mental image.",
      },
      {
        question: "Why does interaction matter in this kind of learning?",
        answer:
          "A relationship becomes more memorable when the learner actively explores it. Dragging, rotating, and observing change turn a preposition from a sentence-level rule into an experienced pattern. Active attention usually creates stronger recall than passive reading alone.",
      },
      {
        question: "Why do comparisons matter so much when learning prepositions?",
        answer:
          "Because confusion usually lives in the gap between similar words. A learner does not struggle with one preposition in isolation as much as with the boundary between nearby choices. Comparison sharpens that boundary and helps the brain notice the one feature that actually controls the choice.",
      },
      {
        question: "Why focus on the most common meaning first?",
        answer:
          "Because depth is more useful than overload at the beginning. If learners meet too many meanings at once, the word becomes diffuse before it becomes clear. Starting with the most common and most teachable use gives the learner a stable center of gravity.",
      },
      {
        question: "Why are the explanations and examples intentionally short?",
        answer:
          "Because clarity matters more than verbal volume. The purpose of an example here is not to display complex English, but to anchor one preposition to one clear situation. Short explanations reduce cognitive load and leave more attention for the relationship itself.",
      },
      {
        question: "Why does the site use bilingual support?",
        answer:
          "Bilingual support lowers friction without replacing thinking. It helps beginners confirm meaning quickly, so they can spend less energy decoding and more energy noticing the structure of the preposition. The translation supports the image instead of competing with it.",
      },
      {
        question: "How should a beginner use this website well?",
        answer:
          "Move through it slowly and comparatively. Start with a small group of spatial prepositions, study the scene, read the explanation, compare nearby alternatives, and then test yourself. It is better to build a precise image of a few words than to rush through many without distinction.",
      },
      {
        question: "Is this website meant for self-study or for teaching?",
        answer:
          "Both. Individual learners can use it to build intuition step by step, while teachers and parents can use the visuals to explain quickly and concretely. The method is designed to reduce abstraction and make explanation easier in either setting.",
      },
      {
        question: "Can this approach support later learning beyond spatial meaning?",
        answer:
          "Yes. Once the spatial core is understood, many time-related and abstract uses feel less arbitrary. The learner begins to see how meanings expand from one relationship instead of memorizing each use as a disconnected rule.",
      },
    ],
    metaTitle: "Preposition Dino | Spatial learning for English prepositions",
    metaDescription:
      "Build spatial intuition for common English prepositions with 3D scenes, search, and bilingual examples.",
  },
};

export function getUiText(locale: Locale) {
  return UI_TEXT[locale] ?? UI_TEXT[DEFAULT_LOCALE];
}
