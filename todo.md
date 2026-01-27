# Preposition 3D 项目 Todo（分期）

> 说明：对照 PRD.md 与当前完成情况整理。标记 ✅ 已完成 / ⬜ 未完成。

## Phase 0｜已完成的基础 MVP
- ✅ Next.js App Router + Tailwind 基础工程
- ✅ 列表页：搜索、卡片网格、进入详情
- ✅ 详情页：3D 旋转/缩放/重置、文本说明与例句
- ✅ 数据驱动：i18n 结构、scene 参数、50 个介词条目
- ✅ Prev/Next 导航

## Phase 1｜结构组件化（基础提升）
- ✅ 新增 Header 组件（站点名/说明/返回首页入口）
- ✅ 新增 Footer 组件（版权/版本/简短说明）
- ✅ 在布局中统一挂载 Header/Footer（app layout）
- ✅ 补齐 Header/Footer i18n 文案

## Phase 2｜详情页相关画廊导航（核心新增需求）
- ✅ 为每个介词补充 relatedIds 关系数据（in → out/into/inside/outside）
- ✅ 新增相关画廊组件（4 张卡片）
- ✅ 复用首页卡片风格（PrepositionCard）
- ✅ 在 /p/[id] 页面底部插入相关画廊

## Phase 3｜PRD 扩展项（可选）
- ⬜ 列表页标签筛选（tags 过滤）
- ⬜ 例句“复制”按钮
- ⬜ 3D 视觉/性能开关（阴影、地面显示）
- ✅ SEO 完整化（结构化数据、扩展 meta）
- ✅ 动画按钮（directional prepositions）
- ⬜ 拖拽摆放 + 判定（练习模式）
- ⬜ 账号/学习进度（后续）
