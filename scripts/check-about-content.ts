import assert from "node:assert/strict";

import { getPrepositionById } from "../src/data/prepositions";
import { getPrepositionFaqItems } from "../src/lib/prepositionFaq";

const entry = getPrepositionById("about");

assert.ok(entry, "about entry should exist");
assert.ok(
  entry.i18n["zh-CN"]?.meaning.includes("ab-") &&
    entry.i18n["zh-CN"]?.meaning.includes("out") &&
    entry.i18n["zh-CN"]?.meaning.includes("外围转圈"),
  "about zh meaning should keep the ab- / out / 外围转圈 breakdown",
);

const comparisonZh = entry.comparison?.i18n["zh-CN"];
assert.ok(comparisonZh, "about should define zh-CN comparison");
assert.deepEqual(
  comparisonZh?.differences.map((item) => item.term),
  ["around", "on"],
  "about comparison should focus on around and on",
);

const spaceExamples = entry.examplesByCategory?.space ?? [];
assert.ok(
  spaceExamples.length >= 2,
  "about should provide dedicated space examples instead of relying on fallback examples",
);
assert.ok(
  spaceExamples.some((item) => item.en.includes("scattered about the floor")),
  "about should include a natural beginner-friendly space example like 'scattered about the floor'",
);

const mistakesZh = entry.commonMistakes?.["zh-CN"] ?? [];
assert.ok(
  mistakesZh.some((item) => item.wrong.includes("discussed about")),
  "about should explicitly correct 'discuss about'",
);
assert.ok(
  !mistakesZh.some((item) => item.wrong.includes("about Monday")),
  "about mistakes should avoid ambiguous examples that can also mean '关于 Monday'",
);

const collocationsZh = entry.collocationGroups?.["zh-CN"] ?? [];
assert.ok(
  collocationsZh.some((group) =>
    group.items.some((item) =>
      typeof item === "string"
        ? item.includes("talk about")
        : item.phrase.includes("talk about"),
    ),
  ),
  "about collocations should include real talk-about patterns",
);

const quizZh = entry.quiz?.["zh-CN"] ?? [];
assert.ok(
  quizZh.some(
    (item) => item.prompt.includes("大约") || item.explanation.includes("大约"),
  ),
  "about quiz should include the 'approximately' sense",
);

const faqZh = getPrepositionFaqItems(entry, "zh-CN");
assert.ok(
  faqZh.some(
    (item) =>
      item.question.includes("为什么") &&
      item.question.includes("关于") &&
      item.question.includes("大约"),
  ),
  "about FAQ should explain why it can mean both '关于' and '大约'",
);
