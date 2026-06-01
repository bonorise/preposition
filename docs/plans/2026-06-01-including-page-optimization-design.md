# including 词条页面优化设计

## 背景

本次优化针对 `/p/including` 词条。用户明确要求：

- “差异解析”的对比单词和决策树必须根据 `including` 的实际含义提供内容。
- 示意图使用极简 3D 教学插画风格：白色背景、细线框、半透明；一个大透明立方体容器代表整体 group，内部有 3 个浅灰半透明立方体和 1 个醒目的紫色立方体，表达“这个对象已经被算进整体里，而不是额外在外面”。
- 首页 `including` 卡片封面与该视觉保持一致，并遵循项目现有卡片缩略图逻辑。
- 不改通用组件。

## 对应 PRD

- `0. 背景与目标`：学习效果优先，让零基础用户通过视觉直觉理解介词关系。
- `2.2 页面信息架构`：首页卡片与详情页需要提供清晰释义、示意和进入详情路径。
- `3.2 3D 视觉`：极简线框、基础立体感、低复杂度几何图形。
- `4. 文本与例句规范`：释义和例句必须初学者友好；多义或易混点优先在现有文本模块中解释。
- `5. 多语言架构`：中英文解释必须保持同一语义主轴，不能冲突。

## 方案选择

采用方案 A：只做 `including` 专属改动，不修改通用组件。

具体范围：

- 更新 `including` 中英文 `comparison` 数据。
- 在 `PrepositionDecisionTree` 中增加 `including` 专属判断分支。
- 新增或替换 `public/thumbnails/including.svg`，让首页卡片按现有 `PrepositionCard` 逻辑自动使用该封面。
- 仅微调 `including/scene.ts` 的专属参数，让详情页 3D scene 的位置关系更贴近“在集合内部”；不扩展 `SceneVariant`，不改 `PrepositionViewer3D`。

## 内容设计

`including` 的语义主轴统一为：

> 点名某项，并明确它已经算进整体里；它不是额外放在外面，也不是被排除。

“差异解析”使用三组真实高频混淆：

1. `including` vs `apart from`
   - `including`：把某项算进整体。
   - `apart from`：多数情况下把某项拿出去、排除或单独分开看。
2. `including` vs `except for`
   - `including`：这项也算。
   - `except for`：除了这项不算，其他成立。
3. `including` vs `among`
   - `including`：点名列出某成员属于整体。
   - `among`：强调处在一群人或事物之中，不一定强调“列名并计入总数”。

中英文版本保持一致的判断轴：`inside the set / counted in the whole`。

## 决策树设计

新增 `word === "including"` 专属分支，避免落入通用空间介词 fallback。

中文判断问句：

1. 这项是否被算进总数、费用、名单或范围？
2. 你是否在点名举出整体中的一个成员、例子或附加项目？
3. 你是否想表达“除了这项不算 / 排除这项”？
4. 你只是说某人或某物处在一群之中吗？
5. `including` 后面是否误加了 `of`？

英文判断问句与中文一一对应，保持 `including / apart from / except for / among / including of` 的核心辨析。

## 视觉设计

首页封面使用 `public/thumbnails/including.svg`，因为现有 `PrepositionCard` 会优先读取 `/thumbnails/{entry.id}.svg`。这样首页与词条视觉仍然走同一套资源约定，不需要为首页添加额外逻辑。

SVG 画面要求：

- 白色背景。
- 一个大透明线框立方体容器，代表整体 `group`。
- 容器内部放置 4 个同尺寸小立方体。
- 其中 3 个为浅灰色半透明，1 个为紫色半透明并更醒目。
- 紫色立方体必须在大容器内部，而不是外部或边界外。
- 不加人物、不加复杂背景、不加装饰图案。

详情页 3D scene 保持现有 `ringCubes` 能力，不追求把主 3D 改成大容器包小立方体。实现时只允许调整 `including/scene.ts` 的专属参数，使紫色球体/高亮关系更像“位于集合之中”。

## 测试与验收

验收标准：

- `/zh-CN/p/including` 或对应本地化路径的“差异解析”出现 `apart from`、`except for`、`among` 三组对比。
- 决策树不再显示通用空间 fallback，而是显示 `including` 专属判断问句。
- 首页 `including` 卡片封面读取 `/thumbnails/including.svg`，图像表达为“大容器内部包含紫色对象”。
- 不修改通用 3D 组件、不新增通用 scene variant。
- 中英文内容主轴一致：`including` 表示把某项算进整体。

