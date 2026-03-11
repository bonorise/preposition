# preposition.worddino.com 主域切换设计

日期：2026-03-11
状态：已确认

## 1. 背景

当前线上站点主地址仍以 `https://prepositiondino.vercel.app` 为默认真源，但该域名并不归项目所有。用户已明确要求后续统一使用自有二级域名 `https://preposition.worddino.com`，并让旧 `vercel.app` 地址永久跳转到新域名。

项目代码中存在站点 URL 真源逻辑：`src/lib/seo.ts` 的 `getSiteUrl()` 提供默认站点地址，`src/app/layout.tsx`、`src/app/robots.ts`、`src/app/sitemap.ts` 及多处 metadata/structured data 均依赖该真源生成 canonical、Open Graph、robots 和 sitemap 链接。因此这次不能只做平台绑定，必须连同站内 SEO 真源一起切换。

## 2. 决策摘要

- 新唯一主域名：`https://preposition.worddino.com`
- 旧生产地址：`https://prepositiondino.vercel.app`
- 旧地址处理方式：对所有路径执行永久重定向到新域名，并保留 path 与 query
- 站内 SEO 真源：统一改为 `https://preposition.worddino.com`
- 解析平台：Cloudflare
- 托管平台：Vercel

## 3. 架构与流量路径

### 3.1 新域名接入

- 在当前 Vercel 项目的 `Settings -> Domains` 中添加 `preposition.worddino.com`
- 以 Vercel 提供的专属目标值为准，在 Cloudflare 添加 `CNAME`
  - `Type`: `CNAME`
  - `Name`: `preposition`
  - `Target`: Vercel Domains 页面显示的唯一目标
  - `TTL`: `Auto`
  - `Proxy status`: 初次接入建议先使用 `DNS only`

### 3.2 旧域名收口

- 保留 Vercel 默认分配的 `prepositiondino.vercel.app`
- 不再将其作为公开主域名
- 在 Vercel 侧为旧域名添加永久重定向规则，将所有请求收口到 `https://preposition.worddino.com`
- 旧域名不再输出正式 SEO 信号；若平台能力允许，同时补 `noindex` 作为兜底

## 4. 代码改动范围

### 4.1 真源配置

- 修改 `src/lib/seo.ts`
  - 将 `getSiteUrl()` 的默认回退值从 `https://prepositiondino.vercel.app` 改为 `https://preposition.worddino.com`
  - 保留对 `NEXT_PUBLIC_SITE_URL` 的协议补全与尾部斜杠清理逻辑

### 4.2 受影响输出

以下能力不需要逐页重写，只需保持依赖 `getSiteUrl()`：

- `src/app/layout.tsx` 的 `metadataBase`
- `src/app/robots.ts` 的 `host` 与 `sitemap`
- `src/app/sitemap.ts` 生成的所有绝对 URL
- 首页、列表页、详情页中引用 `absoluteUrl()` 与 `getSiteUrl()` 的 structured data / metadata

### 4.3 环境变量

- 在 Vercel 生产环境设置：
  - `NEXT_PUBLIC_SITE_URL=https://preposition.worddino.com`
- 推荐同时在 Preview 环境也设置相同值，避免预览构建回退到默认旧域名

## 5. 平台实施步骤

1. 在 Vercel 项目添加 `preposition.worddino.com`
2. 复制 Vercel 返回的 `CNAME` 目标值
3. 在 Cloudflare 新增 `preposition` 的 `CNAME` 记录，先使用 `DNS only`
4. 等待 Vercel 验证域名并签发证书
5. 在 Vercel 配置 `NEXT_PUBLIC_SITE_URL`
6. 重新部署 Production
7. 为 `prepositiondino.vercel.app` 配置永久重定向至 `https://preposition.worddino.com`
8. 验证新域名访问、旧域名跳转与站内 SEO 输出

## 6. 验收标准

以下 5 条全部满足视为切换完成：

1. `https://preposition.worddino.com/` 首页返回 200
2. `https://preposition.worddino.com/en/p/in` 等深路径返回 200
3. `https://prepositiondino.vercel.app/` 与深路径均永久跳转到新域名对应路径
4. 页面源码中的 canonical、Open Graph URL、`robots.txt`、`sitemap.xml` 均使用 `https://preposition.worddino.com`
5. 仓库默认站点 URL 与 Vercel 生产环境变量一致，不再回退到旧域名

## 7. 风险与回滚

### 7.1 风险

- Cloudflare 若过早启用代理，可能影响 Vercel 域名验证
- 若仅绑定新域名但未更新代码与环境变量，SEO 输出仍会混出旧域名
- 若旧域名未做永久跳转，仅依赖 canonical，仍可能造成重复收录

### 7.2 回滚

- 若新域名验证失败或证书未就绪，先撤销旧域名重定向，继续由 `prepositiondino.vercel.app` 提供服务
- 待 `preposition.worddino.com` 在 Vercel 中显示 Ready 后，再重新开启旧域名跳转

## 8. 非目标

本次不包含以下内容：

- 迁移到新的 Vercel 项目或新的 DNS 提供商
- 新增多域名语言站点策略
- Search Console、Analytics 或广告平台侧的后续运营配置
