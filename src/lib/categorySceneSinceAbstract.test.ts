import test from "node:test";
import assert from "node:assert/strict";

import { getPrepositionById } from "@/data/prepositions";
import { getSceneForCategory } from "@/lib/categoryScene";

function getSinceEntry() {
  const entry = getPrepositionById("since");
  assert.ok(entry, "since entry should exist");
  return entry;
}

test("since abstract scene uses a cause-to-result node diagram with the ball on the cause node", () => {
  const entry = getSinceEntry();
  const scene = getSceneForCategory(entry, "abstract", "zh-CN");

  assert.ok(scene.abstractDiagram, "since abstract scene should define an abstract diagram");
  assert.equal(scene.render?.showGround, false);
  assert.equal(scene.abstractDiagram?.ballNodeId, "cause");
  assert.equal(scene.abstractDiagram?.nodes.length, 2);
  assert.deepEqual(
    scene.abstractDiagram?.nodes.map((node) => node.label?.["zh-CN"]),
    ["原因", "结果"],
  );
  assert.deepEqual(
    scene.abstractDiagram?.nodes.map((node) => node.fillColor),
    ["#f5f3ff", "#f5f3ff"],
  );
  assert.deepEqual(
    scene.abstractDiagram?.arrows.map((arrow) => [arrow.from, arrow.to]),
    [["cause", "result"]],
  );
});
