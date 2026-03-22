import assert from "node:assert/strict";

import {
  PREPOSITIONS,
  getPrepositionById,
  getPrepositionIndex,
} from "../src/data/prepositions";

assert.equal(PREPOSITIONS.length, 52, "all prepositions should be exported");
assert.ok(getPrepositionById("in"), "getPrepositionById should still work");
assert.ok(getPrepositionIndex("in") >= 0, "getPrepositionIndex should still work");

for (const id of [
  "in",
  "on",
  "under",
  "about",
  "through",
  "across-from",
  "in-front-of",
  "without",
]) {
  const entry = getPrepositionById(id);
  assert.ok(entry, `${id} should exist`);
  assert.ok(entry.i18n.en?.meaning, `${id} should expose English meaning`);
  assert.ok(entry.i18n["zh-CN"]?.meaning, `${id} should expose Chinese meaning`);
  assert.ok(entry.scene, `${id} should expose scene config`);
}
