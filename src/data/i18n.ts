import type { Locale } from "@/data/types";

export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: Locale[] = ["zh-CN", "en"];

export const UI_TEXT: Record<
  Locale,
  {
    siteTitle: string;
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
    detailTipsTitle: string;
    detailExamplesTitle: string;
    detailControlsTitle: string;
    detailResetCamera: string;
    detailPlayAnimation: string;
    detailPrev: string;
    detailNext: string;
    detailViewerHint: string;
    detailViewerHelper: string;
    detailRelatedTitle: string;
    directionFront: string;
    faqTitle: string;
    faqSubtitle: string;
    faqItems: Array<{ question: string; answer: string }>;
    metaTitle: string;
    metaDescription: string;
  }
> = {
  "zh-CN": {
    siteTitle: "Preposition 3D",
    siteTagline: "英语介词 3D 空间学习站",
    siteSubtitle: "用极简线框与立体球体，建立最直观的空间记忆。",
    galleryLabel: "介词画廊",
    searchPlaceholder: "搜索介词 / 中文释义",
    searchHint: "支持英文或中文释义搜索",
    countLabel: "条介词",
    headerTitle: "Preposition 3D",
    headerSubtitle: "英语介词 3D 空间学习站",
    headerHome: "首页",
    footerText: "用空间直觉高效理解英语介词。",
    languageLabel: "语言",
    languageEnglish: "English",
    languageChinese: "中文",
    emptyTitle: "没有匹配的介词",
    emptyBody: "尝试换一个关键词，或浏览全部列表。",
    featureChips: ["3D 拖拽旋转", "极简线框", "中英例句"],
    detailBack: "返回列表",
    detailTipsTitle: "空间理解要点",
    detailExamplesTitle: "例句",
    detailControlsTitle: "视角控制",
    detailResetCamera: "重置视角",
    detailPlayAnimation: "播放动效",
    detailPrev: "上一个",
    detailNext: "下一个",
    detailViewerHint: "拖拽旋转 / 滚轮缩放 / 双指缩放",
    detailViewerHelper: "部分介词需要动态表达，MVP 先用静态位置 + 文字说明。",
    detailRelatedTitle: "相关介词",
    directionFront: "前",
    faqTitle: "FAQ · Preposition Learning",
    faqSubtitle: "常见问题",
    faqItems: [
      {
        question: "什么是 preposition words？",
        answer: "它们表示空间或时间关系，本站用 3D 场景帮助理解。",
      },
      {
        question: "哪里可以看到 preposition examples？",
        answer: "每张卡片都有简短双语句子，聚焦常见空间含义。",
      },
      {
        question: "不同的 preposition words 有何区别？",
        answer: "我们用一个立方体和球体对比接触、距离与方向。",
      },
      {
        question: "有适合初学者的 preposition examples 吗？",
        answer: "是的，每页两句，配翻译与提示，便于记忆。",
      },
      {
        question: "哪些 preposition words 带方向性？",
        answer: "方向性词会沿路径运动，展示 into、across、through、off 等。",
      },
      {
        question: "每天可以练习 preposition examples 吗？",
        answer: "建议每天复习几句，形成直觉。",
      },
      {
        question: "为什么要用 3D 展示 preposition words？",
        answer: "3D 能减少 on / over / under / around 的混淆。",
      },
      {
        question: "后续会增加更多 preposition examples 吗？",
        answer: "会持续扩充并加入练习模式。",
      },
    ],
    metaTitle: "Preposition 3D｜英语介词 3D 空间学习站",
    metaDescription:
      "用 3D 空间直觉快速理解常见英语介词，支持搜索、旋转查看与中英例句。",
  },
  en: {
    siteTitle: "Preposition 3D",
    siteTagline: "A 3D spatial learning station for English prepositions",
    siteSubtitle:
      "Minimal wireframes + a bold sphere to build fast spatial intuition.",
    galleryLabel: "Preposition Gallery",
    searchPlaceholder: "Search prepositions or meanings",
    searchHint: "Search by English word or meaning",
    countLabel: "prepositions",
    headerTitle: "Preposition 3D",
    headerSubtitle: "3D spatial learning for English prepositions",
    headerHome: "Home",
    footerText: "Build spatial intuition for English prepositions.",
    languageLabel: "Language",
    languageEnglish: "English",
    languageChinese: "中文",
    emptyTitle: "No matches",
    emptyBody: "Try another keyword or browse the full list.",
    featureChips: ["3D Orbit", "Minimal Wireframe", "Bilingual Examples"],
    detailBack: "Back to gallery",
    detailTipsTitle: "Spatial Tips",
    detailExamplesTitle: "Examples",
    detailControlsTitle: "Controls",
    detailResetCamera: "Reset Camera",
    detailPlayAnimation: "Play motion",
    detailPrev: "Previous",
    detailNext: "Next",
    detailViewerHint: "Drag to rotate / Scroll to zoom / Pinch to zoom",
    detailViewerHelper:
      "Some prepositions need motion; MVP shows a static cue + notes.",
    detailRelatedTitle: "Related prepositions",
    directionFront: "Front",
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
