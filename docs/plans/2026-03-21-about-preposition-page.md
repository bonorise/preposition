# About Preposition Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 在现有介词详情页骨架下新增 `about` 词条页，用“围着中心打转”的核心图像解释 `about` 的空间、时间与抽象延伸义，并补齐 SEO/GEO、缩略图与内容模块。

**Architecture:** 实现保持数据驱动，不改详情页组件结构。核心工作集中在 `src/data/prepositions.ts` 新增 `about` 条目与分类映射，复用现有 `space / time / dynamic` 切换表达“在周围 / 大约 / 转圈”三条线，再通过 `generateMetadata` override 与缩略图生成脚本补足页面的 SEO/GEO 和列表卡片展示。

**Tech Stack:** Next.js 16, TypeScript, React 19, three.js, `tsx`, ESLint, 自定义内容 QA 脚本

---

### Task 1: 新增 `about` 词条基础数据与分类切换

**Files:**
- Create: `scripts/check-about-entry.ts`
- Modify: `src/data/prepositions.ts`
- Modify: `src/lib/prepositionCategory.ts`
- Verify: `src/components/PrepositionDetail.tsx`
- Verify: `src/components/PrepositionTextPanel.tsx`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { getPrepositionById } from "../src/data/prepositions";
import { getEntryCategories } from "../src/lib/prepositionCategory";

const entry = getPrepositionById("about");
assert.ok(entry, "about entry should exist");
assert.equal(entry?.word, "about");
assert.deepEqual(getEntryCategories(entry!), ["space", "time", "dynamic"]);
assert.equal(entry?.i18n["zh-CN"]?.tips?.length, 3);
assert.ok(entry?.examples.length && entry.examples.length >= 2);
assert.ok(entry?.examplesByCategory?.time?.length && entry.examplesByCategory.time.length >= 2);
assert.ok(entry?.scenesByCategory?.dynamic?.animation, "about should expose a looping dynamic scene");
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-about-entry.ts`
Expected: FAIL because `scripts/check-about-entry.ts` does not exist yet, and after creating it the assertions should still fail because `about` is not in `PREPOSITIONS`.

**Step 3: Write minimal implementation**

```ts
{
  id: "about",
  word: "about",
  tags: ["space", "around", "topic", "approximation"],
  sense: "space",
  i18n: {
    "zh-CN": {
      meaning:
        "about：原始感觉像围着一个人或事物转圈，所以它既能表示在周围、围绕着，也能引申成关于某事，还能表示大约、左右，好像在某个时间点或数字附近打转。",
      tips: [
        "围着具体东西转：在周围、在附近、在各处、围绕。",
        "围着话题转：关于、对于、涉及。",
        "围着数字或时间点转：大约、左右、差不多。",
      ],
    },
  },
  examples: [
    // 先放 2 条基础例句，后续任务再补足完整内容块
  ],
  examplesByCategory: {
    time: [
      // 至少 2 条“大约”例句
    ],
    dynamic: [
      // 至少 1 条“绕圈”动作例句
    ],
  },
  scene: makeScene([1.1, 0, 0], {
    variant: "ringCubes",
  }),
  scenesByCategory: {
    dynamic: makeScene([1.1, 0, 0], {
      variant: "singleCube",
      animation: {
        type: "path",
        duration: 3.2,
        closed: true,
        path: [
          [1.1, 0, 0],
          [0.78, 0, 0.78],
          [0, 0, 1.1],
          [-0.78, 0, 0.78],
          [-1.1, 0, 0],
          [-0.78, 0, -0.78],
          [0, 0, -1.1],
          [0.78, 0, -0.78],
        ],
      },
    }),
  },
}
```

实现要求：
- `about` 必须加入 `PREPOSITIONS_BASE`
- `about` 必须加入 `TEMPORAL_IDS`
- `about` 必须支持 `space / time / dynamic` 三类切换
- 首屏中文释义第一句必须体现“围着中心打转”

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-about-entry.ts`
Expected: PASS with no output

**Step 5: Commit**

```bash
git add scripts/check-about-entry.ts src/data/prepositions.ts src/lib/prepositionCategory.ts
git commit -m "feat: add about preposition entry scaffold"
```

### Task 2: 补齐 `about` 的内容模块与教学表达

**Files:**
- Modify: `src/data/prepositions.ts`
- Verify: `src/lib/prepositionFaq.ts`
- Verify: `scripts/qa-content.ts`

**Step 1: Write the failing test**

```bash
npm run qa:content
```

**Step 2: Run test to verify it fails**

Run: `npm run qa:content`
Expected: FAIL on `about`, usually in one or more of these rules:
- `R020-R025` comparison 不完整
- `R030-R035` collocationGroups 未补齐到 3 组 * 6 条
- `R040-R042` commonMistakes 不足
- `R050-R054` quiz 不是 3 题
- `R060-R061` FAQ 数量或内容不合规

**Step 3: Write minimal implementation**

```ts
comparison: {
  i18n: {
    "zh-CN": {
      summary:
        "about 的核心感觉是围着一个中心打转，所以它既能表示在周围，也能引申成关于和大约。主对比先抓 about vs around。",
      differences: [
        {
          term: "around",
          description:
            "around 更像看得见的空间绕圈或在某处周围移动；about 更容易进入“关于、涉及、情绪原因”等抽象义。",
          examples: [
            { term: "around", sentence: "We walked around the lake.", translation: "我们绕着湖走。" },
            { term: "about", sentence: "We talked about the lake.", translation: "我们在谈湖这件事。" },
          ],
        },
        {
          term: "on",
          description:
            "about 更像内容围绕某主题展开；on 在正式标题、讲座主题里更常见。",
          examples: [
            { term: "about", sentence: "This book is about space.", translation: "这本书是关于太空的。" },
            { term: "on", sentence: "She gave a lecture on space travel.", translation: "她做了一场关于太空旅行的讲座。" },
          ],
        },
      ],
    },
  },
},
collocationGroups: {
  "zh-CN": [
    // 3 组，每组 6 条；围绕话题、时间数量、情绪与状态三条线组织
  ],
  en: [
    // 3 组，每组 6 条
  ],
},
commonMistakes: {
  "zh-CN": [
    {
      wrong: "We discussed about the plan.",
      correct: "We discussed the plan. / We talked about the plan.",
      reason: "discuss 后面通常直接接宾语，不再加 about。",
    },
  ],
},
quiz: {
  "zh-CN": [
    // 精确补到 3 题，覆盖“关于 / 大约 / 围着转”
  ],
},
faq: {
  "zh-CN": [
    // 5-8 条，优先回答 why about = concerning + approximately
  ],
},
```

实现要求：
- 基础例句与分类例句都要服务“从具体到抽象”的教学顺序
- 对比必须以 `about vs around` 为主
- 易错点必须覆盖 `discuss about`
- FAQ 必须能回答“为什么 about 既能表示关于又能表示大约”

**Step 4: Run test to verify it passes**

Run: `npm run qa:content`
Expected: PASS；如果有 warning，确认不是 `about` 的结构缺失导致

**Step 5: Commit**

```bash
git add src/data/prepositions.ts
git commit -m "feat: complete about preposition learning content"
```

### Task 3: 补齐 SEO/GEO、相关词与缩略图，并做最终回归

**Files:**
- Create: `scripts/check-about-seo.ts`
- Modify: `src/app/[locale]/p/[id]/page.tsx`
- Modify: `src/data/prepositions.ts`
- Generate: `public/thumbnails/about.svg`
- Generate: `public/thumbnails/about--time.svg`
- Generate: `public/thumbnails/about--dynamic.svg`
- Generate: `public/thumbnails/about--time--en.svg`
- Generate: `public/thumbnails/about--time--zh-CN.svg`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { generateMetadata } from "../src/app/[locale]/p/[id]/page";

const zh = await generateMetadata({
  params: Promise.resolve({ locale: "zh", id: "about" }),
});

assert.match(String(zh.title), /about/);
assert.match(String(zh.title), /关于|大约|转圈/);
assert.match(String(zh.description), /关于|大约|围着/);
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-about-seo.ts`
Expected: FAIL because `scripts/check-about-seo.ts` does not exist yet, and after creating it the generated metadata should still be too generic or missing the intended `about` teaching/SEO wording.

**Step 3: Write minimal implementation**

```ts
const PRIMARY_SEO_CATEGORY_OVERRIDE: Partial<Record<string, LearningCategory>> = {
  behind: "space",
  around: "time",
  about: "time",
};

const SEO_METADATA_OVERRIDES = {
  about: {
    "zh-CN": {
      title: "about 介词用法：为什么它既表示“关于”也表示“大约”？｜Preposition Dino",
      description:
        "about 的核心感觉像围着一个中心打转，所以它能表示在周围、关于某事，也能表示大约、左右。页面含 3D 图解、例句、about vs around 对比、易错点与 FAQ。",
    },
    en: {
      title:
        "about (preposition): why it means concerning and approximately | Preposition Dino",
      description:
        "About originally feels like moving around a center, which helps explain its meanings: around/surrounding, concerning, and approximately. Includes 3D diagrams, examples, comparisons, quiz, and FAQ.",
    },
  },
};
```

同时完成：
- 在 `RELATED` 中为 `about` 指定 4 个更合理的相关词，优先考虑 `around / on / around / concerning-like neighbors` 中现有可选词，例如 `around`, `between`, `around` 不要重复；建议使用 `around`, `by`, `toward`, `throughout` 或更符合站内内容的 4 个词
- 运行 `npm run generate:thumbnails` 产出 `about` 相关缩略图

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-about-seo.ts`
Expected: PASS

Run: `ls public/thumbnails/about*.svg`
Expected: 至少包含 `about.svg`、`about--time.svg`、`about--dynamic.svg` 与两份 `about--time--<locale>.svg`

Run: `npm run build`
Expected: build succeeds

**Step 5: Commit**

```bash
git add scripts/check-about-seo.ts src/app/[locale]/p/[id]/page.tsx src/data/prepositions.ts public/thumbnails/about*.svg
git commit -m "feat: polish about preposition seo and thumbnails"
```
