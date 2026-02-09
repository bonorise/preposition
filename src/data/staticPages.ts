import type { Locale } from "@/data/types";
import { DEFAULT_LOCALE } from "@/data/i18n";

export const STATIC_PAGE_SLUGS = [
  "about",
  "privacy",
  "terms",
  "contact",
] as const;

export type StaticPageSlug = (typeof STATIC_PAGE_SLUGS)[number];

export type StaticPageSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type StaticPageContent = {
  title: string;
  description: string;
  updatedAt: string;
  sections: StaticPageSection[];
};

const UPDATED_AT = "2026-02-09";

const STATIC_PAGES: Record<Locale, Record<StaticPageSlug, StaticPageContent>> = {
  en: {
    about: {
      title: "About",
      description:
        "Why Preposition Dino exists and how it helps beginners build real preposition intuition.",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "Why we built Preposition Dino",
          body: [
            "I built this site because I have two kids (9 and 10). They were learning English at school and kept mixing up prepositions like in, inside, and into.",
            "That confusion is common for non-native learners worldwide, so I wanted a simpler way to learn prepositions that feels obvious, not memorized.",
          ],
        },
        {
          heading: "Mission and vision",
          body: [
            "Our mission is to help beginners learn English prepositions with less stress and fewer mistakes.",
            "Our vision is to become the easiest and most effective preposition learning website in the world.",
          ],
        },
        {
          heading: "How this site teaches prepositions",
          body: [
            "Prepositions are about relationships. A short definition is helpful, but what really sticks is a clear mental picture.",
            "We use a simple cube + a purple ball (and motion when needed) so learners can build a stable “world model” in their brain, remember it longer, and apply it better in writing, speaking, and tests.",
          ],
        },
        {
          heading: "Who it is for",
          bullets: [
            "K-12 students worldwide who are learning English as a second language",
            "Adult beginners who want a clear, visual explanation",
            "Teachers who need fast, reliable classroom demos",
          ],
        },
        {
          heading: "Feedback",
          body: [
            "If you find a confusing example or want a new feature, we would love to hear from you.",
            "You can reach us at bonorise@gmail.com.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "What we collect (and what we do not) when you use Preposition Dino.",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "Summary",
          bullets: [
            "No account is required.",
            "We do not ask you to submit personal information to learn prepositions.",
            "We do not sell your personal information.",
          ],
        },
        {
          heading: "Information we may collect",
          body: [
            "Like most websites, our hosting provider may automatically collect basic server logs for security and performance, such as IP address, device/browser type, and request time.",
            "These logs are used to keep the site reliable and secure.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Preposition Dino does not require cookies for core learning features. Your language is determined by the URL (for example, /en or /zh).",
            "Some infrastructure-level cookies may still be set by the hosting platform for security.",
          ],
        },
        {
          heading: "Children’s privacy",
          body: [
            "Our audience includes children learning English. We do not knowingly collect personal information from children.",
            "If you believe a child has shared personal information with us, contact us and we will help remove it.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For privacy questions or deletion requests, email bonorise@gmail.com.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "We may update this policy over time. The “Last updated” date at the top reflects the latest version.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description: "The basic terms for using Preposition Dino.",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "Educational content",
          body: [
            "Preposition Dino provides educational content. The site is provided “as is” without warranties.",
            "We do our best to keep examples correct and beginner-friendly, but we cannot guarantee the site will be error-free at all times.",
          ],
        },
        {
          heading: "Acceptable use",
          bullets: [
            "Use the site for personal learning or classroom teaching.",
            "Do not attempt to disrupt the site or overload it with automated traffic.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The site’s design, diagrams, and original content belong to Preposition Dino unless otherwise noted.",
            "You may share links to pages for learning and teaching. If you want to reuse content at scale, contact us.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions? Email bonorise@gmail.com."],
        },
        {
          heading: "Changes",
          body: [
            "We may update these terms. The “Last updated” date at the top reflects the latest version.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      description: "Feedback and support for Preposition Dino.",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "Email",
          body: ["bonorise@gmail.com"],
        },
        {
          heading: "What to include (so we can help faster)",
          bullets: [
            "Which preposition page you were on (for example, /en/p/in)",
            "The sentence you tried to write (if relevant)",
            "A screenshot if something looks wrong",
            "Your device and browser",
          ],
        },
      ],
    },
  },
  "zh-CN": {
    about: {
      title: "关于我们",
      description:
        "我们为什么做 Preposition Dino，以及它如何帮助初学者真正理解英语介词。",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "为什么做这个网站",
          body: [
            "我有两个孩子，一个 9 岁、一个 10 岁，上小学正在学英语。学习过程中，他们对 in / inside / into 这类近似介词的使用一直不够清晰。",
            "这种困惑对全球非英语母语的学习者都很普遍，所以我想做一个更直观、更符合初学者认知规律的介词学习网站。",
          ],
        },
        {
          heading: "愿景与使命",
          body: [
            "使命：让初学者用更轻松的方式学会介词，减少混淆与错误。",
            "愿景：成为全世界最好的、最轻松学懂英语介词的网站。",
          ],
        },
        {
          heading: "为什么用示意图和动态图",
          body: [
            "介词的本质是“关系”。只背定义往往记不牢，也不容易迁移到真实句子里。",
            "我们用一个立方体 + 紫色小球（必要时加入路径与动效）来帮助你快速建立大脑里的“世界模型”，直观区分近似介词，更牢固地记住并正确应用到写作、口语和考试中。",
          ],
        },
        {
          heading: "适用人群",
          bullets: [
            "全球非英语母语者学习英语的中小学生",
            "成年初学者（希望用更直观方式理解介词）",
            "教师（课堂投屏演示与快速讲解）",
          ],
        },
        {
          heading: "反馈与联系",
          body: [
            "如果你发现例句不够清晰、想要新增功能，欢迎随时联系。",
            "邮箱：bonorise@gmail.com。",
          ],
        },
      ],
    },
    privacy: {
      title: "隐私政策",
      description: "你使用 Preposition Dino 时，我们会收集什么信息，以及不会收集什么。",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "摘要",
          bullets: [
            "无需注册账号即可学习。",
            "我们不会要求你提交个人信息来学习介词。",
            "我们不会出售你的个人信息。",
          ],
        },
        {
          heading: "我们可能收集的信息",
          body: [
            "和大多数网站一样，托管平台可能会自动记录基础访问日志用于安全与性能，例如 IP、设备/浏览器类型、请求时间等。",
            "这些信息用于保障网站稳定与安全。",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Preposition Dino 的核心学习功能不依赖 Cookies。语言通过 URL 决定（例如 /en 或 /zh）。",
            "出于安全原因，托管平台仍可能设置部分基础 Cookies。",
          ],
        },
        {
          heading: "儿童隐私",
          body: [
            "本网站面向人群包含儿童。我们不会主动收集或要求儿童提交个人信息。",
            "若你认为儿童向我们提交了个人信息，请联系邮箱，我们会协助删除。",
          ],
        },
        {
          heading: "联系",
          body: ["隐私相关问题或删除请求，请联系：bonorise@gmail.com。"],
        },
        {
          heading: "更新",
          body: [
            "我们可能会更新本政策。页面顶部的“更新日期”表示最新版本时间。",
          ],
        },
      ],
    },
    terms: {
      title: "服务条款",
      description: "使用 Preposition Dino 的基本条款说明。",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "教育内容免责声明",
          body: [
            "Preposition Dino 提供教育学习内容，网站按“现状”提供，不作任何明示或暗示担保。",
            "我们会尽力确保内容准确与适合初学者，但无法保证网站始终完全无误或无中断。",
          ],
        },
        {
          heading: "合理使用",
          bullets: [
            "可用于个人学习或课堂教学演示。",
            "请勿通过自动化方式恶意刷流量、攻击或干扰网站。",
          ],
        },
        {
          heading: "知识产权",
          body: [
            "网站的设计、示意图与原创内容（如无特别标注）归 Preposition Dino 所有。",
            "你可以分享页面链接用于学习与教学。如需大规模复用内容，请联系我们。",
          ],
        },
        {
          heading: "联系",
          body: ["如有疑问，请联系：bonorise@gmail.com。"],
        },
        {
          heading: "更新",
          body: [
            "我们可能会更新服务条款。页面顶部的“更新日期”表示最新版本时间。",
          ],
        },
      ],
    },
    contact: {
      title: "联系",
      description: "反馈与支持入口。",
      updatedAt: UPDATED_AT,
      sections: [
        {
          heading: "邮箱",
          body: ["bonorise@gmail.com"],
        },
        {
          heading: "建议你在邮件中包含以下信息（便于更快处理）",
          bullets: [
            "你正在学习的介词页面（例如 /en/p/in）",
            "你想表达的句子（如相关）",
            "如出现展示问题，请附截图",
            "你的设备与浏览器信息",
          ],
        },
      ],
    },
  },
};

export function getStaticPageContent(locale: Locale, slug: StaticPageSlug) {
  const value = STATIC_PAGES[locale]?.[slug] ?? STATIC_PAGES[DEFAULT_LOCALE][slug];
  return value;
}

