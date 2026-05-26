import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import PrepositionCollocations from "./PrepositionCollocations";
import PrepositionDecisionTree from "./PrepositionDecisionTree";
import { getPrepositionById } from "@/data/prepositions";

function getSinceEntry() {
  const entry = getPrepositionById("since");
  assert.ok(entry, "since entry should exist");
  return entry;
}

function getApartFromEntry() {
  const entry = getPrepositionById("apart-from");
  assert.ok(entry, "apart-from entry should exist");
  return entry;
}

test("since decision tree explains both time-start and reason meanings in Chinese", () => {
  const entry = getSinceEntry();
  const markup = renderToStaticMarkup(
    <PrepositionDecisionTree entry={entry} locale="zh-CN" />,
  );

  assert.match(markup, /从过去某个时间点开始/);
  assert.match(markup, /因为\s*\/\s*既然|既然/);
  assert.match(markup, /from \.\.\. to|from A to B|from.*to/i);
});

test("since decision tree explains both time-start and reason meanings in English", () => {
  const entry = getSinceEntry();
  const markup = renderToStaticMarkup(
    <PrepositionDecisionTree entry={entry} locale="en" />,
  );

  assert.match(markup, /starting point in time/i);
  assert.match(markup, /because|given that/i);
  assert.match(markup, /from \.\.\. to|from A to B|range with both a start and an end/i);
});

test("since collocations highlight since itself instead of the first auxiliary verb", () => {
  const entry = getSinceEntry();
  const markup = renderToStaticMarkup(
    <PrepositionCollocations entry={entry} locale="en" />,
  );

  assert.match(markup, /font-semibold[^>]*>since</i);
  assert.doesNotMatch(markup, /font-semibold[^>]*>have</i);
  assert.doesNotMatch(markup, /font-semibold[^>]*>has</i);
});

test("apart from decision tree starts from separation and exclusion in Chinese", () => {
  const entry = getApartFromEntry();
  const markup = renderToStaticMarkup(
    <PrepositionDecisionTree entry={entry} locale="zh-CN" />,
  );

  assert.match(markup, /从整体里拿出来|分离/);
  assert.match(markup, /排除义|排除/);
  assert.match(markup, /including/);
  assert.doesNotMatch(markup, /物体是否接触某个表面/);
});

test("apart from decision tree starts from separation and exclusion in English", () => {
  const entry = getApartFromEntry();
  const markup = renderToStaticMarkup(
    <PrepositionDecisionTree entry={entry} locale="en" />,
  );

  assert.match(markup, /separated from the main group|take one item out/i);
  assert.match(markup, /exclude|exclusion/i);
  assert.match(markup, /including/i);
  assert.doesNotMatch(markup, /touching a surface/i);
});

test("apart from comparison has three representative differences", () => {
  const entry = getApartFromEntry();

  assert.equal(entry.comparison?.i18n.en.differences.length, 3);
  assert.equal(entry.comparison?.i18n["zh-CN"].differences.length, 3);
  assert.deepEqual(
    entry.comparison?.i18n.en.differences.map((item) => item.term),
    ["except for", "including", "besides / in addition to"],
  );
});
