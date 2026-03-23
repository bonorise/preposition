import { getUiText } from "../src/data/i18n";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const zh = getUiText("zh-CN");
const en = getUiText("en");

assert(
  zh.faqTitle === "FAQ · 这个网站如何帮助你学会介词",
  `Unexpected zh-CN faqTitle: ${zh.faqTitle}`,
);
assert(
  en.faqTitle === "FAQ · How This Site Teaches Prepositions",
  `Unexpected en faqTitle: ${en.faqTitle}`,
);

assert(
  zh.faqItems.length >= 12,
  `Expected >=12 zh-CN FAQ items, got ${zh.faqItems.length}`,
);
assert(
  en.faqItems.length >= 12,
  `Expected >=12 en FAQ items, got ${en.faqItems.length}`,
);

assert(
  zh.faqItems.some((item) => item.question.includes("为什么只背中文意思还是会用错")),
  "Missing zh-CN method-oriented translation question",
);
assert(
  en.faqItems.some((item) =>
    item.question.includes("Why do learners still misuse prepositions"),
  ),
  "Missing en method-oriented translation question",
);
assert(
  zh.faqItems.some((item) => item.answer.includes("关系")),
  "Missing zh-CN relationship-oriented answer language",
);
assert(
  en.faqItems.some((item) => item.answer.includes("relationship")),
  "Missing en relationship-oriented answer language",
);

console.log("Homepage FAQ checks passed.");
