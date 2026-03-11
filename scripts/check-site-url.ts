import assert from "node:assert/strict";

import { getSiteUrl } from "../src/lib/seo";

delete process.env.NEXT_PUBLIC_SITE_URL;
assert.equal(getSiteUrl(), "https://preposition.worddino.com");

process.env.NEXT_PUBLIC_SITE_URL = "preposition.worddino.com/";
assert.equal(getSiteUrl(), "https://preposition.worddino.com");
