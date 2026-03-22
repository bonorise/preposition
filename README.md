# Preposition Dino

Preposition Dino 是一个面向英语初学者的介词可视化学习站。项目通过极简 3D 场景、双语释义、例句、对比、测验与 FAQ，帮助用户更快建立 `in / on / under / over` 等介词的空间直觉，并逐步扩展到时间义和动态义。

生产域名：
- [preposition.worddino.com](https://preposition.worddino.com)

## 项目目标

项目目标来自 [`docs/PRD.md`](./docs/PRD.md)：

- 阶段 1：优先服务零基础学习者，用 3D 场景快速讲清常见介词
- 阶段 2：增强 SEO、内容增长与练习闭环
- 长期：支持多语言、游戏化和更体系化的内容表达

当前仓库重点已经覆盖：

- 介词列表页与详情页
- 中英双语内容
- 3D 旋转 / 缩放 / 动效演示
- 相关词、对比、常用搭配、易错点、测验、FAQ
- about / privacy / terms / contact 等静态页
- 数据模块化与内容校验流程

## 用户与场景

目标用户：

- 零基础英语学习者
- 需要投屏讲解的教师与家长
- 需要快速区分近义介词的内容编辑或教研人员

典型使用场景：

- 每天 3–5 分钟快速刷词
- 课堂演示介词差异
- SEO / 内容扩展时持续补全词条

## 技术栈

- Next.js 16（App Router）
- React 19
- TypeScript
- Three.js
- Tailwind CSS
- shadcn/ui 基础组件

## 主要能力

- 列表页支持搜索与分组展示
- 详情页支持空间 / 时间 / 动态场景切换
- 详情页提供：
  - 释义与关键提示
  - 例句
  - 对比解析
  - 常见搭配
  - 常见错误
  - 微测验
  - FAQ
  - 相关介词导航
- 静态页支持中英多语言路由
- sitemap / robots / SEO metadata 已接入

## 路由结构

主要页面入口：

```text
/
/[locale]
/[locale]/p/[id]
/[locale]/about
/[locale]/privacy
/[locale]/terms
/[locale]/contact
```

关键文件：

- [`src/app/page.tsx`](./src/app/page.tsx)
- [`src/app/[locale]/page.tsx`](./src/app/[locale]/page.tsx)
- [`src/app/[locale]/p/[id]/page.tsx`](./src/app/[locale]/p/[id]/page.tsx)
- [`src/app/[locale]/about/page.tsx`](./src/app/[locale]/about/page.tsx)

## 目录说明

```text
src/
  app/                App Router 页面
  components/         页面与业务组件
  data/               介词数据、多语言文案、静态页数据
  lib/                搜索、SEO、场景分类、缩略图等辅助逻辑
scripts/              数据检查、缩略图、SEO 与内容脚本
docs/                 PRD、进度、设计与实施计划
```

重要目录：

- [`src/components`](./src/components)
  - `PrepositionGallery.tsx`：列表页内容
  - `PrepositionDetail.tsx`：详情页骨架
  - `PrepositionViewer3D.tsx`：Three.js 可视化
  - `SpatialPlayground.tsx`：拖动演示区
- [`src/lib`](./src/lib)
  - `prepositionCategory.ts`：空间 / 时间 / 动态分类
  - `categoryScene.ts`：按分类选择场景
  - `scenePreset.ts`：默认场景参数
  - `search.ts`：列表页搜索
  - `seo.ts`：metadata / canonical / hreflang 工具

## 数据架构

介词内容已从单文件重构为按词条拆分的模块结构：

```text
src/data/prepositions/
  in/
    meta.ts
    scene.ts
    content/
      en.ts
      zh-CN.ts
    index.ts
  ...
  shared/
    order.ts
    registry.ts
    assemble.ts
    types.ts
  index.ts
```

职责说明：

- `meta.ts`
  - 跨语言共享字段
  - 如 `id`、`word`、`tags`、`relatedIds`
- `scene.ts`
  - 3D / 时间轴 / 动画参数
- `content/en.ts`、`content/zh-CN.ts`
  - 释义、例句、对比、搭配、FAQ、测验等语言内容
  - 如需卡片短摘要，可额外提供 `cardMeaning`
- `shared/order.ts`
  - 词条顺序真源
- `shared/registry.ts`
  - 由脚本自动生成的模块注册表
- `shared/assemble.ts`
  - 将模块装配为运行时使用的 `PrepositionEntry`
- `index.ts`
  - 对外统一导出 `PREPOSITIONS`、`getPrepositionById`、`getRelatedPrepositions` 等 API

## 多语言规则

当前正式支持：

- `en`
- `zh-CN`

约束：

- 不在组件中硬编码中英解释
- UI 文案走 [`src/data/i18n.ts`](./src/data/i18n.ts)
- 静态页文案走 [`src/data/staticPages.ts`](./src/data/staticPages.ts)
- 介词页内容走 `src/data/prepositions/<id>/content/<locale>.ts`

## 开发启动

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

默认访问：

- [http://localhost:3000](http://localhost:3000)

## 常用命令

```bash
npm run dev
npm run generate:preposition-registry
npm run check:prepositions
npm run qa:content
npm run build
npm run generate:thumbnails
npm run capture:thumbnails
```

说明：

- `generate:preposition-registry`
  - 根据 `shared/order.ts` 自动生成 `shared/registry.ts`
- `check:prepositions`
  - 校验目录结构、`meta.id`、顺序、必填语言、`relatedIds`
- `qa:content`
  - 校验词条内容完整性与规则
- `build`
  - 完整构建与 TypeScript 校验

## 新增或修改词条流程

1. 在 `src/data/prepositions/<id>/` 下创建或修改：
   - `meta.ts`
   - `scene.ts`
   - `content/en.ts`
   - `content/zh-CN.ts`
2. 在 [`src/data/prepositions/shared/order.ts`](./src/data/prepositions/shared/order.ts) 中加入或调整该词条 id
3. 运行：

```bash
npm run generate:preposition-registry
npm run check:prepositions
npm run qa:content
npm run build
```

4. 如果词条涉及缩略图或详情页 SEO，需要再视情况运行：

```bash
npm run generate:thumbnails
```

## 内容与质量约束

介词数据需要满足以下原则：

- 数据驱动，不散落硬编码
- 新增词条尽量只改数据，不改组件逻辑
- 场景参数与文本内容分层
- 中英内容保持可校验、可扩展
- 封面卡片简介优先使用单句核心含义；如需与详情页释义分开，使用 `cardMeaning`
- 封面卡片简介的目标展示高度是不超过 3 行
- 构建前至少通过：
  - `npm run check:prepositions`
  - `npm run qa:content`
  - `npm run build`

## 文档真源

项目协作与执行以以下文档为准：

- 需求真源：[`docs/PRD.md`](./docs/PRD.md)
- 进度真源：[`docs/PROGRESS.md`](./docs/PROGRESS.md)
- 设计 / 计划：[`docs/plans`](./docs/plans)

## 当前进度

进度请直接看 [`docs/PROGRESS.md`](./docs/PROGRESS.md)。

当前已经完成的重要基础设施包括：

- 介词数据目录化
- 聚合层兼容导出
- 数据结构校验脚本
- registry 自动生成机制

## 部署说明

部署目标以 Vercel 为主。SEO 相关入口包括：

- [`src/app/sitemap.ts`](./src/app/sitemap.ts)
- [`src/app/robots.ts`](./src/app/robots.ts)
- [`src/lib/seo.ts`](./src/lib/seo.ts)

当前生产站点：

- [https://preposition.worddino.com](https://preposition.worddino.com)

## 后续重点

根据 PRD，后续高优先级方向包括：

- 标签筛选
- 拖拽摆放 + 判定反馈
- 动态介词更强的过程控制
- 多语言扩展
- 教学模式与分享能力
