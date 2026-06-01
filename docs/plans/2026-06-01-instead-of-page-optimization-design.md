# instead of 词条页面优化设计

## 背景

本次优化针对 `/p/instead-of` 与 `/zh-CN/p/instead-of`。用户明确要求：

- “差异解析”的对比单词和决策树必须根据 `instead of` 的实际含义提供内容。
- 详情页示意图模块需要使用一个极简 SVG 动态示意图，表达 `instead of = A replaces B / A in place of B`。
- 首页 `instead of` 卡片需要生成一个同风格静态封面图。
- 新 SVG 必须与网站已有示意图视觉风格保持一致，包括线条粗细、颜色、不透明度、极简白底和紫色高亮。

当前 `instead of` 已有基础内容，但详情页主视觉仍是通用 `twoCubes` 3D 场景，不能直观表达“替换”。差异解析已有 `as` 与 `without`，还缺少更常见的 `rather than` 判断轴；决策树目前会落入通用空间介词 fallback，不适合抽象替代关系。

## 对应 PRD

- `0. 背景与目标（按阶段拆解）`：学习效果优先，让零基础用户通过视觉直觉理解介词关系。
- `2.2 页面信息架构`：首页卡片与详情页需要提供清晰释义、示意和进入详情路径。
- `3.2 3D 视觉（必须）`：极简线框、基础立体感、低复杂度几何图形。
- `4.1 释义风格（初学者友好）`：中文释义追求“看得懂 + 好记”。
- `4.2 例句（必须）`：多义或易混点优先在现有文本模块中解释共享核心感觉，保持详情页结构稳定。
- `5.2 数据结构必须支持多语言`：中英文页面核心解释必须一致，不能出现互相冲突的语义主轴。
- `7.3 关键工程约束（必须）`：内容与视觉接入尽量复用现有数据和组件结构，避免扩散硬编码。

## 方案选择

采用方案 A：为 `instead of` 增加专属 SVG 视觉资源，并接入详情页主视觉模块。

具体范围：

- 更新 `instead-of` 中英文 `comparison` 数据，差异解析改为 `rather than`、`as`、`without` 三组。
- 在 `PrepositionDecisionTree` 中增加 `instead of` 专属判断分支。
- 新增 `public/thumbnails/instead-of.svg` 作为首页卡片静态封面。
- 新增详情页专属动态 SVG 资源，例如 `public/visuals/instead-of.svg`，并在详情页示意图模块中加载。
- 将现有 `including` 的专属静态示意图判断整理为更小的专属视觉映射，避免继续堆叠一次性硬编码。

不采用扩展 Three.js variant 的方案。替换关系需要两个对象同时运动、占位切换和字母标签，若用当前 `PrepositionViewer3D` 扩展，需要新增多对象动画、文本标签和状态同步，改动面较大；SVG 更稳定、可控，也更适合首页和详情页保持同一视觉语言。

## 内容设计

`instead of` 的语义主轴统一为：

> A replaces B：选择、使用或执行 A，而不是 B；A 占据 B 原本的位置或角色。

“差异解析”使用三组真实高频混淆：

1. `instead of` vs `rather than`
   - `instead of`：强调替换，A 取代 B。
   - `rather than`：强调偏好或对比选择，语气更像“宁愿/而不是”，不一定有实际替换动作。
2. `instead of` vs `as`
   - `instead of`：用 A 替代 B。
   - `as`：把 A 当作某种身份、角色或功能来用。
3. `instead of` vs `without`
   - `instead of`：有 A 替掉 B。
   - `without`：只是没有 B，不一定有替代物。

中英文版本保持同一判断轴：`replacement / role / absence / preference contrast`。

## 决策树设计

新增 `word === "instead of"` 专属分支，避免落入通用空间介词 fallback。

中文判断问句：

1. 是否是“选择/使用/做 A，而不是 B”，A 明确替代 B？
2. `instead of` 后面是否接名词词组或 `-ing` 动作？
3. 你只是表达偏好对比或“宁愿 A 而不是 B”吗？
4. 你是在说 A 充当某个角色或功能吗？
5. 你只是说“没有 B”，并没有 A 来替代吗？

英文判断问句与中文一一对应，保持 `instead of / rather than / as / without` 的核心辨析。

## 视觉设计

详情页主视觉使用一个专属动态 SVG，整体与现有 `including.svg` 和其他缩略图保持一致：

- 背景为白色或极浅灰。
- 画面横向排列一排 3 个白色半透明立方体，大小一致，细灰蓝描边，轻微 3D 透视。
- 中间白色立方体标注 `B`。
- 队列左侧外部放置一个同尺寸紫色立方体 `A`，使用站点高亮紫 `#7c3aed`，可带轻微浅紫高光。
- 动画循环：
  - 初始：A 在左侧队列外，B 在队列中间。
  - A 平滑向中间移动。
  - A 到达中间位置并占据 B 原位。
  - B 同步向右滑出队列，停在队列外侧。
  - 动画回到初始状态循环。
- 可加入一条很轻的灰色虚线轨迹或细箭头，辅助理解替换方向。
- 文字只保留 `A`、`B`，可选小标题 `instead of`；不加人物、复杂背景或装饰。

视觉参数需要贴合现有网站：

- 普通立方体填充：`#f8fafc` / `#ffffff`，不透明度约 `0.18` 到 `0.62`。
- 普通描边：`#94a3b8`、`#cbd5e1`，线宽约 `1.1` 到 `1.55`。
- 前景重点边：可用 `#334155` 或 `#0f172a`，不透明度约 `0.75` 到 `0.85`。
- 紫色立方体：`#7c3aed`，高光可用 `#a78bfa`、`#c4b5fd`。
- 动画时长约 `3s` 到 `4s`，使用 `ease-in-out`，保持教学节奏清楚。

首页封面使用 `public/thumbnails/instead-of.svg`，采用同一画法的静态关键帧。建议展示结束态：中间位置为紫色 `A`，`B` 被推出到右侧外部；这样在卡片尺寸下仍能一眼看出“替代”。

## 接入设计

详情页目前对 `including` 使用了 `usesStaticIncludingVisual` 特例。本次将它整理为一个小型专属视觉映射：

```ts
const staticVisualByEntryId = {
  including: { src: "/thumbnails/including.svg", alt: "including visual" },
  "instead-of": { src: "/visuals/instead-of.svg", alt: "instead of replacement visual" },
};
```

命名可以在实现时按现有代码风格微调。核心目标是让详情页示意图模块通过 entry id 选择专属 SVG，而不是继续增加单个布尔变量。

控制栏行为：

- 专属 SVG 视觉不显示 `Reset camera`。
- 保留全屏按钮。
- 控制栏标题和提示复用现有静态示意图文案，若需要可在 i18n 中改成更通用的“visual guide”文案。
- 动态 SVG 自循环播放，不需要播放按钮。

## 测试与验收

验收标准：

- `/zh-CN/p/instead-of` 或对应本地化路径的“差异解析”出现 `rather than`、`as`、`without` 三组对比。
- 英文页面差异解析与中文页面语义主轴一致。
- 决策树不再显示通用空间 fallback，而是显示 `instead of` 专属判断问句。
- 详情页示意图模块显示动态 SVG：A 从左侧进入中间位置，B 被推出到右侧队列外，循环播放。
- 动态 SVG 的颜色、线宽、不透明度与现有 `including.svg` 等站内示意图保持一致。
- 首页 `instead of` 卡片读取 `/thumbnails/instead-of.svg`，静态图表达“中间 A 替代 B，B 在队列外”。
- 不引入复杂背景、人物、外部图片或大体积资源。
- TypeScript、lint、内容校验或项目现有相关检查通过。
