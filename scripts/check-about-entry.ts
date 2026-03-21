import assert from "node:assert/strict";

import { getPrepositionById } from "../src/data/prepositions";
import { getEntryCategories } from "../src/lib/prepositionCategory";

const entry = getPrepositionById("about");

assert.ok(entry, "about entry should exist");
assert.equal(entry.word, "about");
assert.deepEqual(getEntryCategories(entry), ["space", "time", "dynamic"]);
assert.equal(entry.i18n["zh-CN"]?.tips?.length, 3);
assert.ok(entry.examples.length >= 2, "about should include at least 2 base examples");
assert.ok(
  (entry.examplesByCategory?.time?.length ?? 0) >= 2,
  "about should include at least 2 time examples",
);
assert.ok(
  entry.scenesByCategory?.dynamic?.animation,
  "about should expose a looping dynamic scene",
);
