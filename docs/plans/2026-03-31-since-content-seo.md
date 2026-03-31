# Since Content SEO Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 在不改变详情页总结构的前提下，补齐 `since` 词条的双义内容与双语 SEO 权重，并把“多义词条优先用现有文本模块解释共同核心”的规则写入项目文档。

**Architecture:** 继续复用现有详情页数据驱动结构，只修改 `since` 词条内容数据、少量 SEO 文案生成逻辑和项目文档。英文页维持时间义 SEO 主轴，中文页加强双义解释，但两种语言共享“起点”这一核心概念。

**Tech Stack:** Next.js App Router、TypeScript、词条数据目录、SEO metadata 生成逻辑、Markdown 项目文档

---

### Task 1: 校对 `since` 当前渲染链路与文案入口

**Files:**
- Inspect: `src/data/prepositions/since/content/en.ts`
- Inspect: `src/data/prepositions/since/content/zh-CN.ts`
- Inspect: `src/data/prepositions/since/meta.ts`
- Inspect: `src/lib/prepositionSeo.ts`
- Inspect: `src/app/[locale]/p/[id]/page.tsx`

**Step 1: 确认 `since` 页面当前字段来源**

Run: `sed -n '1,260p' src/data/prepositions/since/content/en.ts`

Expected: 能看到 `meaning`、`tips`、`comparison`、`faq` 等字段。

**Step 2: 确认 `sense` 与 SEO 主轴是否一致**

Run: `sed -n '1,120p' src/data/prepositions/since/meta.ts`

Expected: 看到当前 `sense` 值，并记录是否与页面主题不一致。

**Step 3: 记录 metadata 输出路径**

Run: `sed -n '1,260p' src/lib/prepositionSeo.ts`

Expected: 能定位 `buildResolvedPrepositionSeo` 的输入与 override 机制。

**Step 4: 提交前不改代码，仅确认修改面**

Expected: 形成最小改动集，不触碰详情页组件骨架。

### Task 2: 改写 `since` 英文内容，使时间义主打但补足原因义

**Files:**
- Modify: `src/data/prepositions/since/content/en.ts`

**Step 1: 写出要替换的 `meaning` 与 `tips` 文案**

Expected:
- `meaning` 明确 `starting point`
- 保留时间义主句
- 补一小句说明原因义

**Step 2: 扩展 examples / examplesByCategory**

Expected:
- 保留时间例句
- 新增 2 条原因义例句
- 不改页面结构

**Step 3: 扩展 comparison 与 FAQ**

Expected:
- 新增 `since vs because`
- FAQ 覆盖 `Can since mean because?`

**Step 4: 自检英文 SEO 聚焦**

Check:
- 英文首段仍可服务时间查询
- 原因义是补充，不抢主轴

**Step 5: Commit**

```bash
git add src/data/prepositions/since/content/en.ts
git commit -m "feat: enrich since english content"
```

### Task 3: 改写 `since` 中文内容，突出“双起点”解释

**Files:**
- Modify: `src/data/prepositions/since/content/zh-CN.ts`

**Step 1: 改写 `meaning`**

Expected:
- 明确写出 `since` 核心是“起点”
- 点出“自从……以来”和“因为 / 既然”
- 说明两者内在一致

**Step 2: 改写 `tips`**

Expected:
- 一条写时间起点
- 一条写原因起点
- 一条写和现在完成时/语气差别相关的学习提示

**Step 3: 扩展 comparison / FAQ / quiz 或 examples**

Expected:
- 中文读者能直接看懂两个义项的差别
- 原因义不只是提一句，而是有例句与辨析支撑

**Step 4: Commit**

```bash
git add src/data/prepositions/since/content/zh-CN.ts
git commit -m "feat: enrich since chinese explanation"
```

### Task 4: 修正 `since` 的元数据分类与 SEO 输出

**Files:**
- Modify: `src/data/prepositions/since/meta.ts`
- Modify: `src/lib/prepositionSeo.ts`

**Step 1: 修正 `sense`**

Expected: 不再使用 `"space"`，改为与 `since` 页面主题一致的类别。

**Step 2: 如有必要增加 `since` 的 metadata override**

Expected:
- 英文 description 仍以时间义为主
- 中文 description 能体现双义解释

**Step 3: 检查结构化数据描述来源**

Run: `curl -s http://localhost:3000/en/p/since | rg 'application/ld\\+json|since:|starting point' -n`

Expected: 页面输出的结构化数据与更新后的释义一致。

**Step 4: Commit**

```bash
git add src/data/prepositions/since/meta.ts src/lib/prepositionSeo.ts
git commit -m "fix: align since seo category and metadata"
```

### Task 5: 把“详情页结构稳定 + 多义词条文本优先承接”写入项目文档

**Files:**
- Modify: `docs/PRD.md`

**Step 1: 在详情页内容规范附近新增规则**

Expected:
- 明确多义词条优先用现有文本模块解释共同核心
- 明确不得为单个词条破坏详情页总结构
- 明确中英文可调权重但不可冲突

**Step 2: 自检是否与现有 PRD 风格一致**

Expected: 语言保持规范、简洁、可执行。

**Step 3: Commit**

```bash
git add docs/PRD.md
git commit -m "docs: add stable detail-page rules for multi-sense entries"
```

### Task 6: 验证页面输出与项目进度文档

**Files:**
- Modify: `docs/PROGRESS.md`
- Verify: `src/data/prepositions/since/content/en.ts`
- Verify: `src/data/prepositions/since/content/zh-CN.ts`
- Verify: `src/lib/prepositionSeo.ts`
- Verify: `docs/PRD.md`

**Step 1: 本地检查页面头部**

Run: `curl -s http://localhost:3000/en/p/since | sed -n '1,120p'`

Expected:
- title / description / canonical 正常
- FAQ schema 存在

**Step 2: 如有中文路由，同步检查**

Run: `curl -s http://localhost:3000/zh/p/since | sed -n '1,120p'`

Expected:
- 中文 description 能体现双义

**Step 3: 回写 `docs/PROGRESS.md`**

Expected:
- 设计文档与实施计划勾选为完成
- 若实施未开始，新增待办项保持 `[ ]`

**Step 4: 最终提交**

```bash
git add docs/PROGRESS.md
git commit -m "docs: track since seo and content stabilization work"
```
