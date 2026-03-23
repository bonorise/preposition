import assert from "node:assert/strict";

import { generateMetadata } from "../src/app/[locale]/p/[id]/page";
import { getPrepositionById } from "../src/data/prepositions";

async function main() {
  const entry = getPrepositionById("above");
  assert.ok(entry, "above entry should exist");

  assert.equal(
    entry?.i18n["zh-CN"].meaning,
    "在……上方（不接触）；高于、超过（数值/水平/能力范围）",
  );
  assert.match(
    entry?.i18n.en.meaning ?? "",
    /higher than something and not touching it/i,
  );
  assert.match(
    entry?.comparison?.i18n.en.summary ?? "",
    /If there is contact, use on/i,
  );

  const enMeta = await generateMetadata({
    params: Promise.resolve({ locale: "en", id: "above" }),
  });

  assert.match(String(enMeta.title), /above/i);
  assert.match(String(enMeta.title), /on/i);
  assert.match(String(enMeta.title), /over/i);
  assert.match(String(enMeta.description), /higher than/i);
  assert.match(String(enMeta.description), /above average/i);
}

void main();
