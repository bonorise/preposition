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
