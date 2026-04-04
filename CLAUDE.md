# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Preposition Dino 是一个面向英语初学者的介词可视化学习站，使用 Next.js 16 + React 19 + Three.js 构建。生产域名：https://preposition.worddino.com

## Development Commands

```bash
npm run dev          # 启动开发服务器 (localhost:3000)
npm run build        # 完整构建 + TypeScript 校验
npm run lint         # ESLint 检查
npm run generate:preposition-registry  # 根据 order.ts 自动生成 registry.ts
npm run check:prepositions              # 校验介词目录结构、必填字段、顺序
npm run qa:content                     # 校验介词内容完整性与规则
npm run generate:thumbnails             # 生成介词封面缩略图
npm run capture:thumbnails             # 截图采集
```

## Architecture

### 路由结构
```
/                          # 首页
/[locale]                  # 列表页 (en | zh-CN)
/[locale]/p/[id]          # 介词详情页
/[locale]/about|privacy|terms|contact  # 静态页
```

### 核心数据 (src/data/prepositions/)
每个介词是独立模块，结构如下：
```
<id>/
  meta.ts          # 跨语言字段：id, word, tags, relatedIds
  scene.ts         # 3D/时间轴/动画参数
  content/
    en.ts          # 英文内容
    zh-CN.ts       # 中文内容
  index.ts
shared/
  order.ts         # 词条顺序真源（需手动维护）
  registry.ts      # 自动生成
  assemble.ts      # 装配为运行时 PrepositionEntry
  types.ts
```

### 关键组件
- `PrepositionGallery.tsx` - 列表页
- `PrepositionDetail.tsx` - 详情页骨架
- `PrepositionViewer3D.tsx` - Three.js 可视化
- `SpatialPlayground.tsx` - 拖动演示区

### 关键 lib
- `prepositionCategory.ts` - 空间/时间/动态分类
- `categoryScene.ts` - 按分类选择场景
- `search.ts` - 列表页搜索
- `seo.ts` - metadata/canonical/hreflang 工具

## Required Workflow (from AGENTS.md)

**Source of Truth:**
- 需求文档：`docs/PRD.md`
- 进度清单：`docs/PROGRESS.md`

**Definition of Done:**
1. 回读 `docs/PRD.md`，列出本次任务对应的需求条目
2. 自检是否满足对应条目的验收标准
3. 更新 `docs/PROGRESS.md`（完成项标记 `[x]`，未完成项保持 `[ ]` 并追加阻塞原因）
4. 最终回复输出：完成/未完成结论 + 变更文件列表 + 需要用户确认的点

## Adding/Modifying Prepositions

1. 在 `src/data/prepositions/<id>/` 创建或修改模块
2. 在 `shared/order.ts` 中加入或调整该词条 id
3. 运行校验：
   ```bash
   npm run generate:preposition-registry && npm run check:prepositions && npm run qa:content && npm run build
   ```

## i18n Rules

- UI 文案： `src/data/i18n.ts`
- 静态页文案： `src/data/staticPages.ts`
- 介词内容： `src/data/prepositions/<id>/content/<locale>.ts`
- 不在组件中硬编码中英解释
