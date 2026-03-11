# Preposition Worddino Domain Cutover Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将站点主域名统一切换为 `https://preposition.worddino.com`，并让旧 `prepositiondino.vercel.app` 永久跳转到新域名，同时保证 canonical、robots、sitemap 和结构化数据全部输出新域名。

**Architecture:** 站内 URL 真源继续集中在 `src/lib/seo.ts` 的 `getSiteUrl()`，通过一次性修正默认回退域名并在 Vercel 设置 `NEXT_PUBLIC_SITE_URL`，让 metadata、robots、sitemap 与结构化数据自动统一。平台侧由 Vercel Domains + Cloudflare CNAME 提供新主域接入，再通过 Vercel 域名/防火墙能力将旧 `vercel.app` 域名永久收口到新域名。

**Tech Stack:** Next.js 16, TypeScript, Vercel, Cloudflare DNS, `tsx`, `curl`

---

### Task 1: 锁定站内站点 URL 真源

**Files:**
- Create: `scripts/check-site-url.ts`
- Modify: `src/lib/seo.ts`
- Verify: `src/app/layout.tsx`
- Verify: `src/app/robots.ts`
- Verify: `src/app/sitemap.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { getSiteUrl } from "../src/lib/seo";

delete process.env.NEXT_PUBLIC_SITE_URL;
assert.equal(getSiteUrl(), "https://preposition.worddino.com");

process.env.NEXT_PUBLIC_SITE_URL = "preposition.worddino.com/";
assert.equal(getSiteUrl(), "https://preposition.worddino.com");
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-site-url.ts`
Expected: FAIL because `getSiteUrl()` currently falls back to `https://prepositiondino.vercel.app`

**Step 3: Write minimal implementation**

```ts
export function getSiteUrl() {
  const fallback = "https://preposition.worddino.com";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? fallback).trim();
  const withProtocol =
    raw.startsWith("http://") || raw.startsWith("https://")
      ? raw
      : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
}
```

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-site-url.ts`
Expected: PASS with no output

**Step 5: Commit**

```bash
git add scripts/check-site-url.ts src/lib/seo.ts
git commit -m "chore: switch site url default to worddino domain"
```

### Task 2: 清理旧域名残留并验证构建产物

**Files:**
- Modify: `src/lib/seo.ts`
- Verify: `src/app/layout.tsx`
- Verify: `src/app/page.tsx`
- Verify: `src/app/[locale]/page.tsx`
- Verify: `src/app/[locale]/p/[id]/page.tsx`
- Verify: `src/app/robots.ts`
- Verify: `src/app/sitemap.ts`

**Step 1: Write the failing test**

```bash
rg -n "prepositiondino\\.vercel\\.app" src
```

**Step 2: Run test to verify it fails**

Run: `rg -n "prepositiondino\\.vercel\\.app" src`
Expected: at least one hit in `src/lib/seo.ts`

**Step 3: Write minimal implementation**

```bash
rg -n "getSiteUrl\\(|absoluteUrl\\(" src/app src/lib
NEXT_PUBLIC_SITE_URL=https://preposition.worddino.com npm run build
```

实现要求：
- `src` 目录下不再保留旧生产域名字符串
- 本地构建成功
- `metadataBase`、robots、sitemap、structured data 继续通过 `getSiteUrl()` / `absoluteUrl()` 输出新域名

**Step 4: Run test to verify it passes**

Run: `rg -n "prepositiondino\\.vercel\\.app" src`
Expected: no matches

Run: `NEXT_PUBLIC_SITE_URL=https://preposition.worddino.com npm run build`
Expected: build succeeds

**Step 5: Commit**

```bash
git add src/lib/seo.ts
git commit -m "fix: remove old production domain references"
```

### Task 3: 配置 Vercel 新主域名与生产环境变量

**Files:**
- Verify: `docs/plans/2026-03-11-preposition-worddino-domain-design.md`
- Verify: `src/lib/seo.ts`

**Step 1: Write the failing test**

```bash
echo "Open Vercel project settings and confirm preposition.worddino.com is not active yet"
```

**Step 2: Run test to verify it fails**

在 Vercel 项目中检查：
- `Settings -> Domains` 里还没有 `preposition.worddino.com`，或者状态不是 Ready
- `Settings -> Environment Variables` 中还没有 `NEXT_PUBLIC_SITE_URL=https://preposition.worddino.com`

Expected: 当前至少缺少其一

**Step 3: Write minimal implementation**

在 Vercel 控制台执行：
1. 添加域名 `preposition.worddino.com`
2. 记录 Vercel 提供的专属 `CNAME` 目标值
3. 新增生产环境变量 `NEXT_PUBLIC_SITE_URL=https://preposition.worddino.com`
4. 触发一次 Production redeploy

**Step 4: Run test to verify it passes**

在 Vercel 项目中确认：
- `preposition.worddino.com` 状态为 Ready
- Production 环境变量已生效
- 最新一次 Production Deployment 成功

**Step 5: Commit**

```bash
git add docs/PROGRESS.md
git commit -m "docs: record worddino production domain cutover progress"
```

### Task 4: 配置 Cloudflare DNS 解析

**Files:**
- Verify: `docs/plans/2026-03-11-preposition-worddino-domain-design.md`

**Step 1: Write the failing test**

```bash
dig +short preposition.worddino.com
```

**Step 2: Run test to verify it fails**

Run: `dig +short preposition.worddino.com`
Expected: no answer, or answer does not match the Vercel-provided target chain

**Step 3: Write minimal implementation**

在 Cloudflare 的 `worddino.com` 区域添加：

```text
Type: CNAME
Name: preposition
Target: <Vercel Domains 页面给出的唯一目标>
TTL: Auto
Proxy status: DNS only
```

**Step 4: Run test to verify it passes**

Run: `dig +short preposition.worddino.com`
Expected: returns the Vercel target chain or resolves correctly after propagation

**Step 5: Commit**

```bash
git add docs/PROGRESS.md
git commit -m "docs: note cloudflare dns cutover step"
```

### Task 5: 将旧 vercel.app 域名永久跳转到新主域

**Files:**
- Modify: `docs/PROGRESS.md`
- Verify: `docs/plans/2026-03-11-preposition-worddino-domain-design.md`

**Step 1: Write the failing test**

```bash
curl -I https://prepositiondino.vercel.app/
curl -I "https://prepositiondino.vercel.app/en/p/in?ref=test"
```

**Step 2: Run test to verify it fails**

Expected: before rule is added, old domain still serves content directly or does not redirect to `https://preposition.worddino.com`

**Step 3: Write minimal implementation**

在 Vercel 中为旧域名添加永久跳转规则：
- Host: `prepositiondino.vercel.app`
- Destination host: `preposition.worddino.com`
- Preserve: path + query
- Status: permanent redirect

如平台提供 `X-Robots-Tag: noindex` 附加配置，一并启用。

**Step 4: Run test to verify it passes**

Run: `curl -I https://prepositiondino.vercel.app/`
Expected: `301` or `308` with `Location: https://preposition.worddino.com/`

Run: `curl -I "https://prepositiondino.vercel.app/en/p/in?ref=test"`
Expected: redirect to `https://preposition.worddino.com/en/p/in?ref=test`

**Step 5: Commit**

```bash
git add docs/PROGRESS.md
git commit -m "docs: record legacy vercel domain redirect"
```

### Task 6: 做最终 SEO 与访问验收

**Files:**
- Modify: `docs/PROGRESS.md`
- Verify: `src/app/robots.ts`
- Verify: `src/app/sitemap.ts`
- Verify: `src/app/layout.tsx`

**Step 1: Write the failing test**

```bash
curl -s https://preposition.worddino.com/robots.txt
curl -s https://preposition.worddino.com/sitemap.xml
curl -s https://preposition.worddino.com/ | rg -n "canonical|og:url|preposition.worddino.com"
```

**Step 2: Run test to verify it fails**

Expected: before all previous tasks are finished, at least one endpoint still returns old domain or missing new-domain signal

**Step 3: Write minimal implementation**

完成剩余修正并逐项确认：
- `robots.txt` 中的 `Host` 与 `Sitemap` 使用新域名
- `sitemap.xml` 中所有 URL 使用新域名
- 首页与详情页源码中 canonical / Open Graph URL 使用新域名
- 新域名首页与深路径返回 200

**Step 4: Run test to verify it passes**

Run: `curl -s https://preposition.worddino.com/robots.txt`
Expected: contains `Host: https://preposition.worddino.com` and `Sitemap: https://preposition.worddino.com/sitemap.xml`

Run: `curl -s https://preposition.worddino.com/sitemap.xml | rg "preposition\\.worddino\\.com"`
Expected: all listed URLs use the new host

Run: `curl -I https://preposition.worddino.com/`
Expected: `200 OK`

Run: `curl -I https://preposition.worddino.com/en/p/in`
Expected: `200 OK`

**Step 5: Commit**

```bash
git add docs/PROGRESS.md
git commit -m "docs: mark worddino domain cutover complete"
```
