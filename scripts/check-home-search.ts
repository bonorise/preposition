import assert from "node:assert/strict";

import { PREPOSITIONS } from "../src/data/prepositions";
import { filterPrepositions } from "../src/lib/search";

const all = filterPrepositions(PREPOSITIONS, "", "en");
assert.equal(all.matchMode, "word");
assert.equal(
  all.results.length,
  PREPOSITIONS.length,
  "empty query should return all prepositions",
);

const englishWordMatch = filterPrepositions(PREPOSITIONS, "under", "en");
assert.equal(englishWordMatch.matchMode, "word");
assert.ok(
  englishWordMatch.results.some((entry) => entry.id === "under"),
  "english query should match the preposition word",
);

const englishMeaningMatch = filterPrepositions(PREPOSITIONS, "下面", "en");
assert.equal(englishMeaningMatch.matchMode, "word");
assert.equal(
  englishMeaningMatch.results.length,
  0,
  "english locale should not fall back to localized meaning matches",
);

const chineseWordMatch = filterPrepositions(PREPOSITIONS, "under", "zh-CN");
assert.equal(chineseWordMatch.matchMode, "word");
assert.ok(
  chineseWordMatch.results.some((entry) => entry.id === "under"),
  "non-english locale should still prioritize word matches",
);

const chineseMeaningFallback = filterPrepositions(PREPOSITIONS, "下面", "zh-CN");
assert.equal(chineseMeaningFallback.matchMode, "fallback-meaning");
assert.ok(
  chineseMeaningFallback.results.some((entry) => entry.id === "under"),
  "chinese locale should fall back to meaning matches when no word matches exist",
);

const multiWordMatch = filterPrepositions(PREPOSITIONS, "infrontof", "en");
assert.equal(multiWordMatch.matchMode, "word");
assert.ok(
  multiWordMatch.results.some((entry) => entry.id === "in-front-of"),
  "word matching should ignore whitespace for multi-word prepositions",
);

console.log("check-home-search: ok");
