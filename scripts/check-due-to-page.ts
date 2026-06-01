import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

import { getPrepositionById } from "../src/data/prepositions";

const entry = getPrepositionById("due-to");
assert(entry, "due-to entry should exist");

const abstractScene = entry.scenesByCategory?.abstract ?? entry.scene;
const diagram = abstractScene.abstractDiagram;
assert(diagram, "due-to abstract scene should use abstractDiagram");

const cause = diagram.nodes.find((node) => node.id === "cause");
const result = diagram.nodes.find((node) => node.id === "result");

assert(cause, "cause node should exist");
assert(result, "result node should exist");
assert.equal(cause.shape, "cube");
assert.equal(result.shape, "cube");
assert.equal(cause.label?.en, "cause");
assert.equal(cause.label?.["zh-CN"], "原因");
assert.equal(result.label?.en, "result");
assert.equal(result.label?.["zh-CN"], "结果");
assert(
  diagram.arrows.some((arrow) => arrow.from === "cause" && arrow.to === "result"),
  "cause should point to result",
);

const expectedComparisonTerms = ["because of", "because", "according to"];
const enTerms =
  entry.comparison?.i18n.en.differences.map((difference) => difference.term) ?? [];
const zhTerms =
  entry.comparison?.i18n["zh-CN"].differences.map((difference) => difference.term) ?? [];

assert.deepEqual(enTerms, expectedComparisonTerms);
assert.deepEqual(zhTerms, expectedComparisonTerms);

const decisionTreeSource = readFileSync(
  "src/components/PrepositionDecisionTree.tsx",
  "utf8",
);
assert.match(decisionTreeSource, /word === "due to"/);
assert.match(decisionTreeSource, /noun phrase/);
assert.match(decisionTreeSource, /because/);
assert.match(decisionTreeSource, /because of/);
assert.match(decisionTreeSource, /according to/);
assert.match(decisionTreeSource, /due date/);

const thumbnailPath = "public/thumbnails/due-to.svg";
assert(existsSync(thumbnailPath), "due-to homepage thumbnail should exist");

const thumbnailSource = readFileSync(thumbnailPath, "utf8");
assert.match(thumbnailSource, /原因/);
assert.match(thumbnailSource, /结果/);
assert.match(thumbnailSource, /arrowhead/);
