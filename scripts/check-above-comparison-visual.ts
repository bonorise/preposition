import assert from "node:assert/strict";

import { getPrepositionById } from "../src/data/prepositions";

const entry = getPrepositionById("above");
assert.ok(entry, "above entry should exist");

const visual = (entry as { comparisonVisual?: unknown } | undefined)?.comparisonVisual as
  | {
      type?: string;
      i18n?: Record<string, { title?: string }>;
      items?: Array<{ term?: string; note?: Record<string, string> }>;
    }
  | undefined;

assert.ok(visual, "above should expose comparisonVisual");
assert.equal(visual?.type, "vertical-range");
assert.equal(visual?.items?.length, 4);

const terms = visual?.items?.map((item) => item.term);
assert.deepEqual(terms, ["on", "over", "above", "below"]);

assert.equal(
  visual?.i18n?.["zh-CN"]?.title,
  "一张图看懂 on / over / above / below",
);
assert.match(
  visual?.items?.find((item) => item.term === "above")?.note?.["en"] ?? "",
  /higher than, not touching/i,
);
