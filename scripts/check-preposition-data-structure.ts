import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

import { PREPOSITIONS } from "../src/data/prepositions";
import { PREPOSITION_IDS } from "../src/data/prepositions/shared/order";

const root = join(process.cwd(), "src/data/prepositions");
const entries = readdirSync(root, { withFileTypes: true }).filter(
  (entry) => entry.isDirectory() && entry.name !== "shared",
);

async function main() {
  assert.ok(entries.length > 0, "preposition directories should exist");

  const idsFromDirs = new Set<string>();
  const orderedIds = new Set<string>(PREPOSITION_IDS);

  for (const entry of entries) {
    const dir = join(root, entry.name);
    assert.ok(existsSync(join(dir, "meta.ts")), `${entry.name} missing meta.ts`);
    assert.ok(existsSync(join(dir, "scene.ts")), `${entry.name} missing scene.ts`);
    assert.ok(existsSync(join(dir, "index.ts")), `${entry.name} missing index.ts`);
    assert.ok(
      existsSync(join(dir, "content", "en.ts")),
      `${entry.name} missing content/en.ts`,
    );
    assert.ok(
      existsSync(join(dir, "content", "zh-CN.ts")),
      `${entry.name} missing content/zh-CN.ts`,
    );

    const metaModule = await import(pathToFileURL(join(dir, "meta.ts")).href);
    const meta = metaModule.default;
    assert.ok(meta, `${entry.name} should default export meta`);
    assert.equal(meta.id, entry.name, `${entry.name} directory should match meta.id`);
    assert.ok(!idsFromDirs.has(meta.id), `duplicate meta.id found: ${meta.id}`);
    idsFromDirs.add(meta.id);
  }

  assert.equal(
    PREPOSITIONS.length,
    entries.length,
    "assembled PREPOSITIONS should match directory count",
  );
  assert.equal(
    PREPOSITION_IDS.length,
    entries.length,
    "shared/order.ts should list every preposition directory exactly once",
  );
  assert.equal(
    new Set(PREPOSITION_IDS).size,
    PREPOSITION_IDS.length,
    "shared/order.ts should not contain duplicate ids",
  );

  const assembledIds = new Set(PREPOSITIONS.map((entry) => entry.id));

  for (const dirId of idsFromDirs) {
    assert.ok(
      assembledIds.has(dirId),
      `${dirId} exists on disk but not in assembled PREPOSITIONS`,
    );
    assert.ok(
      orderedIds.has(dirId),
      `${dirId} exists on disk but is missing from shared/order.ts`,
    );
  }

  for (const entry of PREPOSITIONS) {
    assert.ok(entry.i18n.en?.meaning, `${entry.id} missing en meaning`);
    assert.ok(entry.i18n["zh-CN"]?.meaning, `${entry.id} missing zh-CN meaning`);
    assert.ok(entry.examples.length > 0, `${entry.id} missing examples`);
    for (const relatedId of entry.relatedIds) {
      assert.ok(
        assembledIds.has(relatedId),
        `${entry.id} has broken relatedId ${relatedId}`,
      );
    }
  }

  assert.deepEqual(
    PREPOSITIONS.map((entry) => entry.id),
    [...PREPOSITION_IDS],
    "assembled PREPOSITIONS order should stay in sync with shared/order.ts",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
