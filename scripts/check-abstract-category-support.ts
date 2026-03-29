import assert from "node:assert/strict";

import { getUiText } from "../src/data/i18n";
import { getPrepositionById } from "../src/data/prepositions";
import type { LearningCategory } from "../src/data/types";
import { getEntryCategories } from "../src/lib/prepositionCategory";

function assertCategory(value: LearningCategory) {
  assert.equal(value, "abstract");
}

function main() {
  const zh = getUiText("zh-CN");
  const en = getUiText("en");

  assertCategory("abstract");

  assert.ok(zh.sectionAbstractTitle, "zh sectionAbstractTitle should exist");
  assert.ok(en.sectionAbstractTitle, "en sectionAbstractTitle should exist");
  assert.ok(
    zh.detailSceneCategoryAbstract,
    "zh detailSceneCategoryAbstract should exist",
  );
  assert.ok(
    en.detailSceneCategoryAbstract,
    "en detailSceneCategoryAbstract should exist",
  );
  assert.ok(zh.detailExamplesAbstract, "zh detailExamplesAbstract should exist");
  assert.ok(en.detailExamplesAbstract, "en detailExamplesAbstract should exist");

  const about = getPrepositionById("about");
  assert.ok(about, "about should exist");
  assert.ok(
    getEntryCategories(about).includes("abstract"),
    "about should expose abstract as a category after the upgrade",
  );
}

main();
