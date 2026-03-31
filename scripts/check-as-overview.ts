import assert from "node:assert/strict";

import { getPrepositionById } from "@/data/prepositions";
import { getPrepositionFaqItems } from "@/lib/prepositionFaq";
import { buildResolvedPrepositionSeo } from "@/lib/prepositionSeo";

const entry = getPrepositionById("as");

assert.ok(entry, "Expected preposition entry 'as' to exist.");

const seo = buildResolvedPrepositionSeo({
  entry,
  locale: "en",
});

assert.ok(
  !/abstract use/i.test(seo.title),
  `Expected SEO title to drop the old abstract-use template, got: ${seo.title}`,
);

assert.ok(
  /comparison/i.test(seo.description),
  `Expected SEO description to mention comparison, got: ${seo.description}`,
);

assert.ok(
  /(time|when)/i.test(seo.description),
  `Expected SEO description to mention time/when usage, got: ${seo.description}`,
);

assert.ok(
  /(reason|because)/i.test(seo.description),
  `Expected SEO description to mention reason/because usage, got: ${seo.description}`,
);

const faqItems = getPrepositionFaqItems(entry, "en");

assert.ok(
  faqItems.some((item) => /difference between "as" and "like"|as and like/i.test(item.question)),
  `Expected FAQ to include an as vs like question, got: ${faqItems
    .map((item) => item.question)
    .join(" | ")}`,
);

assert.ok(
  faqItems.some((item) => /preposition or a conjunction/i.test(item.question)),
  `Expected FAQ to include a preposition/conjunction question, got: ${faqItems
    .map((item) => item.question)
    .join(" | ")}`,
);

console.log("check-as-overview: PASS");
