import test from "node:test";
import assert from "node:assert/strict";

import { getPrepositionById } from "@/data/prepositions";
import { getPrepositionFaqItems } from "@/lib/prepositionFaq";
import { buildResolvedPrepositionSeo } from "@/lib/prepositionSeo";

function getSinceEntry() {
  const entry = getPrepositionById("since");
  assert.ok(entry, "since entry should exist");
  return entry;
}

test("since uses time as its primary sense", () => {
  const entry = getSinceEntry();

  assert.equal(entry.sense, "time");
});

test("since chinese meaning explains both time and reason starting points", () => {
  const entry = getSinceEntry();
  const meaning = entry.i18n["zh-CN"]?.meaning ?? "";

  assert.match(meaning, /起点/);
  assert.match(meaning, /自从/);
  assert.match(meaning, /因为|既然/);
});

test("since english seo description keeps time intent and mentions reason extension", () => {
  const entry = getSinceEntry();
  const seo = buildResolvedPrepositionSeo({ entry, locale: "en" });

  assert.equal(seo.primaryCategory, "time");
  assert.match(seo.description, /starting point/i);
  assert.match(seo.description, /present perfect|time/i);
  assert.match(seo.description, /reason|because/i);
});

test("since faq explicitly answers whether it can mean because", () => {
  const entry = getSinceEntry();
  const faqItems = getPrepositionFaqItems(entry, "en");

  assert.ok(
    faqItems.some(
      (item) =>
        /since.*because|because.*since/i.test(item.question) ||
        /since.*because|because.*since/i.test(item.answer),
    ),
    "FAQ should explain the relation between since and because",
  );
});
