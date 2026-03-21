import assert from "node:assert/strict";

import { generateMetadata } from "../src/app/[locale]/p/[id]/page";

async function main() {
  const zh = await generateMetadata({
    params: Promise.resolve({ locale: "zh", id: "about" }),
  });

  assert.match(
    String(zh.title),
    /为什么它既表示“关于”也表示“大约”/,
    "about zh title should explain the two core extensions",
  );
  assert.match(
    String(zh.description),
    /围着一个中心打转/,
    "about zh description should preserve the circling-core explanation",
  );
}

void main();
