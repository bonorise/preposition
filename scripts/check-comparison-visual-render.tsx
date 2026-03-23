import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import PrepositionComparisonVisual from "../src/components/PrepositionComparisonVisual";
import { getPrepositionById } from "../src/data/prepositions";

const entry = getPrepositionById("above");
assert.ok(entry?.comparisonVisual, "above comparison visual should exist");

const html = renderToStaticMarkup(
  <PrepositionComparisonVisual
    visual={entry.comparisonVisual}
    locale="en"
  />,
);

assert.match(html, /<svg/i);
assert.match(html, /See on \/ over \/ above \/ below in one picture/);
assert.match(html, /<text[^>]*>touching the surface<\/text>/);
assert.match(html, /<text[^>]*>higher than, not touching<\/text>/);
assert.doesNotMatch(html, /md:grid-cols-4/);
assert.match(html, /stroke-width="3\.5"/);
assert.match(html, /height="5"/);
assert.match(html, /class="[^"]*hidden[^"]*md:block/);
assert.match(html, /class="[^"]*md:hidden/);
