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
    directionFront: string;
    playgroundTitle: string;
    playgroundHint: string;
    playgroundModeStatic: string;
    playgroundModeDynamic: string;
    playgroundMotionHint: string;
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
    sectionEmpty: string;
    faqTitle: string;
    faqSubtitle: string;
    faqItems: Array<{ question: string; answer: string }>;
    metaTitle: string;
    metaDescription: string;
  }
> = {
  "zh-CN": {
    siteTitle: "Preposition 3D",
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
    headerTitle: "Preposition 3D",
    headerSubtitle: "可能是全世界最好的介词学习网站",
    headerHome: "首页",
    footerText: "用空间直觉高效理解英语介词。",
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
    directionFront: "前",
    playgroundTitle: "拖动小球识别介词",
    playgroundHint: "拖动紫色小球，观察它与立方体的相对位置。",
    playgroundModeStatic: "静态介词",
    playgroundModeDynamic: "动态介词",
    playgroundMotionHint: "切到动态介词后，沿虚线路径拖动小球，感受方向与过程。",
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
    sectionEmpty: "当前搜索下暂无该分类词条。",
    faqTitle: "FAQ · 英语介词学习",
    faqSubtitle: "常见问题",
    faqItems: [
      {
        question: "什么是英语介词学习？初学者该先学什么？",
        answer:
          "英语介词学习的核心是先建立空间关系直觉，再过渡到时间与动态用法。建议先学 in/on/under/behind 这类高频词。",
      },
      {
        question: "in、on、at 怎么快速区分？",
        answer:
          "先看语义层级：in 常用于内部或较大范围，on 常用于接触表面，at 常用于具体点位或时刻。",
      },
      {
        question: "空间介词为什么要配 3D 场景？",
        answer:
          "3D 场景能直观看到“接触、内外、前后、远近”，比只看文本更容易减少介词混淆。",
      },
      {
        question: "时间介词 in / on / at 的判断依据是什么？",
        answer:
          "按时间颗粒度判断：at 常对应具体时刻，on 常对应具体一天或日期，in 常对应月份、年份和更长时间段。",
      },
      {
        question: "为什么总把 on 和 over 用错？",
        answer:
          "关键区别是是否接触：on 强调接触表面，over 强调在上方，不一定接触。",
      },
      {
        question: "英语介词学习每天练多久更有效？",
        answer:
          "每天 15 分钟即可：看 3-5 个介词、读例句、做 3 题微测验，比一次性长时间学习更稳。",
      },
      {
        question: "如何把介词真正用到句子里？",
        answer:
          "优先练高频搭配（common collocations），再做“错误对比 + 纠正”，最后口头复述一个自己的句子。",
      },
      {
        question: "这个网站适合自学还是课堂教学？",
        answer:
          "两者都适合：自学可按分类逐个突破，课堂可用 3D 场景做快速演示和即时提问。",
      },
    ],
    metaTitle: "Preposition 3D｜英语介词 3D 空间学习站",
    metaDescription:
      "用 3D 空间直觉快速理解常见英语介词，支持搜索、旋转查看与中英例句。",
  },
  en: {
    siteTitle: "Preposition 3D",
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
    headerTitle: "Preposition 3D",
    headerSubtitle: "Possibly the best preposition learning website in the world",
    headerHome: "Home",
    footerText: "Build spatial intuition for English prepositions.",
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
    directionFront: "Front",
    playgroundTitle: "Drag the ball to learn prepositions",
    playgroundHint:
      "Drag the purple ball and watch the preposition update in real time.",
    playgroundModeStatic: "Static preps",
    playgroundModeDynamic: "Dynamic preps",
    playgroundMotionHint:
      "Switch to dynamic mode and drag the ball along the dashed path to feel direction and motion.",
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
    sectionEmpty: "No items in this section for the current query.",
    faqTitle: "FAQ · Preposition Learning",
    faqSubtitle: "Common questions",
    faqItems: [
      {
        question: "What are preposition words in English?",
        answer:
          "They show spatial or time relationships; this site visualizes them with 3D scenes.",
      },
      {
        question: "Where can I find clear preposition examples?",
        answer:
          "Each card includes short bilingual sentences focused on the most common spatial meaning.",
      },
      {
        question: "How do preposition words differ from each other?",
        answer:
          "We compare terms with a single cube and sphere so beginners can see contact, distance, and direction.",
      },
      {
        question: "Do you provide preposition examples for beginners?",
        answer:
          "Yes, every page has two short sentences with translations and tips for quick memory.",
      },
      {
        question: "Are these preposition words used for direction?",
        answer:
          "Some are directional, so the ball moves along a path to show into, across, through, or off.",
      },
      {
        question: "Can I practice with preposition examples every day?",
        answer:
          "Review a few daily; the short sentences help you build intuition fast.",
      },
      {
        question: "Why visualize preposition words in 3D?",
        answer:
          "Seeing them in 3D reduces confusion between on, over, under, and around.",
      },
      {
        question: "Do you add more preposition examples later?",
        answer:
          "We will expand with more examples and practice modes as the library grows.",
      },
    ],
    metaTitle: "Preposition 3D | Spatial learning for English prepositions",
    metaDescription:
      "Build spatial intuition for common English prepositions with 3D scenes, search, and bilingual examples.",
  },
};

export function getUiText(locale: Locale) {
  return UI_TEXT[locale] ?? UI_TEXT[DEFAULT_LOCALE];
}
