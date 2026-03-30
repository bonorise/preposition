import assert from "node:assert/strict";

import { getPrepositionById } from "../src/data/prepositions";
import { getEntryCategories, getHomeCategory } from "../src/lib/prepositionCategory";
import {
  buildResolvedPrepositionSeo,
  getPrimarySeoCategory,
} from "../src/lib/prepositionSeo";

const by = getPrepositionById("by");
assert.ok(by, "by should exist");

const byCategories = getEntryCategories(by);
assert.ok(byCategories.includes("space"), "by should include space");
assert.ok(byCategories.includes("time"), "by should include time");
assert.ok(byCategories.includes("abstract"), "by should include abstract");

assert.equal(
  getPrimarySeoCategory(by),
  "space",
  "by should use the spatial core meaning as the primary SEO category",
);
assert.equal(
  getHomeCategory(by),
  "space",
  "by should be grouped into the homepage spatial module by its core meaning",
);

const bySeo = buildResolvedPrepositionSeo({
  entry: by,
  locale: "en",
});

assert.ok(
  !/time preposition/i.test(bySeo.title),
  `by title should not lead with a time-preposition framing: ${bySeo.title}`,
);
assert.match(
  bySeo.description,
  /at the side of|close to/i,
  `by description should explain the core spatial meaning: ${bySeo.description}`,
);

const around = getPrepositionById("around");
assert.ok(around, "around should exist");
assert.equal(
  getPrimarySeoCategory(around),
  "time",
  "around should keep its time-led SEO override",
);

console.log("check-by-seo: ok");
