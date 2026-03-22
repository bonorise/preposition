import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import NavPrevNext from "./NavPrevNext";
import type { PrepositionEntry } from "@/data/types";

const baseEntry: PrepositionEntry = {
  id: "about",
  word: "about",
  tags: [],
  sense: "space",
  i18n: {
    en: { meaning: "about" },
    "zh-CN": { meaning: "关于" },
  },
  examples: [],
  relatedIds: [],
  scene: {
    cube: { size: 1, position: [0, 0, 0] },
    ball: { radius: 0.2, position: [0, 0, 0] },
    camera: { position: [2, 2, 2], target: [0, 0, 0] },
  },
};

const prevEntry: PrepositionEntry = { ...baseEntry, id: "above", word: "above" };
const nextEntry: PrepositionEntry = { ...baseEntry, id: "across", word: "across" };

test("NavPrevNext renders Previous, Back to gallery, Next in one row order", () => {
  const markup = renderToStaticMarkup(
    <NavPrevNext prev={prevEntry} next={nextEntry} locale="en" />,
  );

  const prevIndex = markup.indexOf("Previous");
  const backIndex = markup.indexOf("Back to gallery");
  const nextIndex = markup.indexOf("Next");

  assert.notEqual(prevIndex, -1);
  assert.notEqual(backIndex, -1);
  assert.notEqual(nextIndex, -1);
  assert.ok(prevIndex < backIndex, "Previous should appear before Back to gallery");
  assert.ok(backIndex < nextIndex, "Back to gallery should appear before Next");
});

test("NavPrevNext keeps a disabled Previous placeholder on the first entry", () => {
  const markup = renderToStaticMarkup(
    <NavPrevNext next={nextEntry} locale="en" />,
  );

  assert.match(markup, /Previous/);
  assert.match(markup, /aria-disabled="true"/);
});

test("NavPrevNext uses lighter text weight and a shorter button height", () => {
  const markup = renderToStaticMarkup(
    <NavPrevNext prev={prevEntry} next={nextEntry} locale="en" />,
  );

  assert.match(markup, /font-normal/);
  assert.match(markup, /h-8/);
});
