# PRD｜Preposition Dino（英语介词 3D 空间学习站）— MVP 需求文档（Codex Vibe Coding 上下文）

版本：v1.0（基于用户补充信息定稿）  
目标阶段：**MVP（第一阶段）**  
技术栈约束：**Next.js + Three.js + Tailwind CSS + shadcn/ui**  
部署优先：**Vercel**（备选 Cloudflare Pages）

---

## 0. 背景与目标（按阶段拆解）

### 阶段 1（MVP）目标：A 学习效果优先
- 让**零基础用户（小学 / 成人零基础）**通过 3D 空间直觉快速理解常见介词空间含义
- 用**极简线框 + 立体感**的 3D 立方体与球体进行示意
- 每个介词只呈现**最常见用法（空间义优先）**，避免认知负担

### 阶段 2（增长/内容）目标：B 可持续内容增长（SEO / 分享）
- 介词词条页 SEO 化（独立 URL、结构化内容、可分享）
- 增加练习模式（拖拽摆放 + 判定反馈）
- 引入账号与学习进度（可选：简化版 SRS）

### 长期目标：C 游戏化与商业化
- 游戏化关卡（方向 A：**拖拽摆放类**，逐步引入动态场景）
- 多语言扩展（字典驱动）
- 内容体系化（空间义 → 时间义 → 抽象义）

---

## 1. 用户画像与核心使用场景

### 1.1 用户画像
- 零基础学习者：
  - 不理解 “in/on/under/over…” 的空间差异
  - 需要**低门槛、强直觉**的学习方式
- 教师/家长：
  - 需要可投屏演示、快速切换、视觉清晰

### 1.2 核心场景
- 每天 3–5 分钟刷 5–10 个介词（碎片学习）
- 课堂投屏演示：旋转 3D 视角讲解差异
- 未来：练习模式（拖拽摆放纠错）

---

## 2. MVP 功能范围（必须实现）

### 2.1 内容范围（“越多越好，尽可能全”）
- 首发覆盖：**常见英语介词尽可能全**，但**只展示最常见空间用法**
- 必须包含（最低清单，后续可继续加）：
  - in, on, under, over, above, below
  - beside, next to, near, by
  - behind, in front of
  - between, among
  - around
  - inside, outside
  - across, through, against
  - along, along with（可选，若空间示意明确）
  - into, onto, out of（可选：空间“方向/进入离开”属于扩展，MVP 可先静态示意 + TODO 动画）

> 说明：MVP 的重点是“空间直觉”。对于空间难以用静态球位表达的介词（如 into/out of），MVP 可以先给“代表性静态位置 + 文字说明”，并标记 TODO 动画。

### 2.2 页面信息架构（IA）

#### 页面 1：Preposition Gallery（列表页）
- 介词卡片列表（可滚动）
- 每张卡片显示：
  - 英文介词（word）
  - 初学者友好中文释义（zh）
  - 标签（如：位置/接触/穿过/环绕，便于筛选）
- 交互：
  - 搜索（英文/中文）
  - 标签筛选（可选：MVP 可先做搜索）
  - 点击进入详情页

#### 页面 2：Preposition Detail（详情页）
- 3D 示意区（立方体 + 球体）
- 文本区：
  - 中文释义（初学者友好）
  - 最常见空间用法说明（短）
  - 例句 1–2 条（英文 + 中文）
- 导航：
  - 上一个 / 下一个
  - 返回列表

---

## 3. 3D 交互与视觉规范（MVP 强约束）

### 3.1 3D 交互（必须）
1. **鼠标拖拽旋转视角**（OrbitControls）
2. **滚轮缩放**（限制最小/最大距离，防止穿模丢失）
3. **一键重置视角**（恢复该介词默认 camera 位置/target）
4. 移动端：
   - 单指旋转
   - 双指缩放（必须可用）

### 3.2 3D 视觉（必须）
- 风格：**极简线框**，但要有基本立体感（深度可辨）
- 元素：
  - 立方体：线框（Edges/LineSegments）+ 轻微面透明（可选）增强空间感
  - 球体：实心高对比（便于观察），可加轻微阴影
  - 地面：可选淡灰平面 + 接触阴影（推荐，提升“在上/在下”的直觉）
- 光照：
  - 至少一个方向光 + 环境光，保证可读性
- 性能：
  - 禁止大贴图/复杂模型，全部用基础几何体与简单材质

### 3.3 坐标系统规范（必须统一）
- 立方体中心：`(0, 0, 0)`
- 立方体边长：`1`（默认）
- 地面平面：`y = -0.5`（与立方体下边缘对齐或略低）
- 球半径：`0.18 ~ 0.25`
- 每个介词必须能通过一组参数定义：
  - `ball.position`
  - 可选：`ball.rotation / offset`
  - `camera.position` 与 `camera.target`
- 目的：新增介词只改数据，不改渲染逻辑

---

## 4. 文本与例句规范（MVP 强约束）

### 4.1 释义风格（初学者友好）
- 中文释义不追求字典严谨，而追求“看得懂 + 好记”
- 示例：
  - “in：在……里面（被包住）”
  - “on：在……上面（接触表面）”
  - “over：在……正上方/跨过（通常不接触）”

### 4.2 例句（必须）
- 每个介词：**1–2 句**
- 每句包含：
  - 英文句子（简短，避免复杂从句）
  - 中文释义（贴合初学者）
- 后续扩展字段预留（MVP 不实现）：
  - 发音音频（tts_url）
  - 关键词高亮（tokens）
  - 可替换名词（templates）

---

## 5. 多语言架构（MVP 必须“提前做好字典”）

### 5.1 文案与释义必须字典化
- 不允许在组件中硬编码中文或英文解释
- 所有文本走 i18n 结构：
  - `locale`：`en`, `zh-CN`（MVP 默认 `zh-CN`）
  - 未来扩展：`ja`, `es`, `fr`…

### 5.2 数据结构必须支持多语言
- `word` 为英文固定字段
- `meaning` 与 `tips`、`examples` 走 `i18n` 字典
- 例句也按语言存储或映射：
  - `examples.en[]` + `examples['zh-CN'][]`
  - 或 `examples[]` 每条含 `en` + `zh-CN`

---

## 6. MVP 不做但必须预留（TODO/扩展点）

### 6.1 动画按钮（第二期）
- TODO：加入 “Play” 按钮
- 用于表达方向性更强的介词：
  - through（穿过）
  - into/out of（进入/出来）
  - across（跨过/穿越）
- 数据结构预留：
  - `scene.animation`：关键帧/路径/时长

### 6.2 拖拽摆放 + 判定（第二期）
- TODO：允许用户拖拽球体
- TODO：点击 “Check” 后判定正确/偏差
- 判定逻辑预留（距离/方向向量/容差）：
  - `expectedPosition`
  - `tolerance`
  - `feedbackHints`（如：更靠右/更靠近/更高）

### 6.3 账号与进度（第二期）
- TODO：登录、收藏、错题本、复习计划
- MVP 只需无状态浏览

### 6.4 时间义/抽象义（后续）
- TODO：同一介词支持多个“sense”
  - `senses[]`：space / time / abstract
- MVP 只实现 `space` sense

---

## 7. 技术方案（Codex 开发约束）

### 7.1 技术栈（固定）
- Next.js（App Router）
- Three.js（建议直接用原生 three + 控制器；如需更快开发可评估 R3F，但此 PRD 按 **Three.js** 为主）
- Tailwind CSS
- shadcn/ui（UI 组件：Button、Card、Tabs、Input 等）

### 7.2 目录结构建议（强烈建议按此组织）
- `/app`
  - `/page.tsx`：列表页
  - `/p/[id]/page.tsx`：详情页
- `/components`
  - `PrepositionCard.tsx`
  - `PrepositionViewer3D.tsx`（Canvas + three 初始化 + 控制器）
  - `PrepositionTextPanel.tsx`
  - `NavPrevNext.tsx`
- `/data`
  - `prepositions.ts`（核心数据源）
  - `i18n.ts`（字典/locale 配置）
- `/lib`
  - `scenePreset.ts`（相机预设、坐标 helper）
  - `search.ts`（搜索/筛选）
- `/styles`（如需扩展）

### 7.3 关键工程约束（必须）
- **数据驱动**：所有介词内容来自 `/data/prepositions.ts`，禁止散落硬编码
- **可扩展**：新增介词无需改 3D 渲染逻辑，只添加数据
- **移动端可用**：触控旋转与缩放必须工作
- **性能降级**：低端设备可关闭阴影（简单策略：开关配置）

---

## 8. 数据模型（MVP 定义）

### 8.1 TypeScript 类型（示意）
> Codex 需按此设计，字段可增不可删；MVP 必须用到 `scene` 与 `examples`

- `PrepositionEntry`
  - `id: string`（url slug，如 `in-front-of`）
  - `word: string`（英文介词/短语）
  - `tags: string[]`（如 `["space", "position", "contact"]`）
  - `sense: "space"`（MVP 固定）
  - `i18n: Record<Locale, { meaning: string; tips?: string[] }>`
  - `examples: Array<{ en: string; i18n: Record<Locale, { translation: string }> }>`
  - `scene:`
    - `cube: { size: number; position: [number, number, number] }`
    - `ball: { radius: number; position: [number, number, number] }`
    - `camera: { position: [number, number, number]; target: [number, number, number]; fov?: number }`
    - `render?: { showGround?: boolean; shadows?: boolean; wireframeStyle?: "edges" | "edges+faces" }`
    - `animation?: { type: "path" | "keyframes"; duration: number; ... }`（TODO，MVP 不用）

### 8.2 坐标样例（用于内置默认）
- in：ball 在立方体内部：`(0, 0, 0)`
- on：ball 在立方体上表面：`(0, 0.7, 0)`
- under：ball 在下方：`(0, -0.8, 0)`
- behind：ball 在后方：`(0, 0, -1.0)`（注意相机默认朝向保证“前后”直觉）
- in front of：`(0, 0, 1.0)`
- between：两立方体方案（MVP 可简化：仍单立方体 + 文字提示；或引入“双立方体模板”作为 scene variant）
  - 推荐：支持 `scene.variant`：
    - `singleCube`（默认）
    - `twoCubes`（between/among 更直观）
    - `ringCubes`（among/around 更直观）
  - MVP 可先做 `singleCube` 全覆盖，但对 between/among/around 建议尽早支持 variant

---

## 9. 交互细节与 UI 规范（MVP）

### 9.1 列表页 UI
- 顶部：
  - 站点标题 + 简短说明（可 i18n）
  - 搜索框（Input）
- 内容：
  - Card 网格（响应式：移动 1 列、桌面 3–4 列）
  - Card 内：word、meaning、tags（可选）
- 点击 Card → 详情页

### 9.2 详情页 UI
- 顶部：
  - 返回（Back）
  - word + meaning
- 主体：
  - 左/上：3D Viewer（固定高度，移动端优先）
  - 右/下：tips + examples
- 控件：
  - Reset Camera（按钮）
  - Prev / Next（按钮）
- 可选：
  - “复制例句”按钮（提升传播，MVP 可做）

---

## 10. SEO 与可分享（MVP 最小实现）
- 每个介词独立 URL：`/p/{id}`
- 页面 title/description 基于 i18n 文案生成（Next metadata）
- 列表页可被索引（基础）

> 阶段 2 再做系统化 SEO（结构化数据、内链、内容扩写）。

---

## 11. 验收标准（Acceptance Criteria）

### 11.1 功能验收
1. 列表页展示全部介词；搜索可用（至少按英文/中文 meaning 命中）
2. 详情页：
   - 3D 可旋转、可缩放、可重置视角
   - 球体位置与介词含义一致（通过数据驱动）
   - 例句 1–2 条英/中展示正确
3. Prev/Next 切换正确，无明显闪烁或状态错乱
4. 移动端手势可用

### 11.2 代码与扩展性验收
1. 新增介词只需改 `/data/prepositions.ts`，无需改组件逻辑
2. i18n 文案无硬编码（除必要 UI 通用字典）
3. 3D 渲染组件无业务数据耦合（只接收 entry）

---

## 12. 开发执行顺序（建议 Codex 按此迭代）

1. 建 Next.js 基础路由 + Tailwind + shadcn 初始化
2. 定义数据模型与 `/data/prepositions.ts`（先填 10–15 个验证）
3. 列表页：搜索 + 卡片跳转
4. 详情页：文本区 + Prev/Next
5. Three.js Viewer：OrbitControls + 渲染 cube/ball + Reset
6. 补齐介词数据（尽可能全）
7. 移动端适配与性能开关（阴影/地面可配置）
8. SEO metadata 最小实现
9. 部署到 Vercel（或 Cloudflare Pages）

---

## 13. 风险与决策记录

- “越多越好”会带来内容制作量与一致性问题：  
  - 决策：先用统一模板批量生成（数据驱动），后续逐步人工打磨高频词条
- 部分介词用静态位置表达不够（into/out of/across）：  
  - 决策：MVP 先静态 + tips，二期引入动画按钮增强表达
- between/among/around 的 3D 表达更适合多物体场景：  
  - 决策：MVP 预留 `scene.variant`，尽可能早支持 twoCubes/ringCubes 模板

---

## 14. 附：MVP 介词词条“内容产出规则”（用于批量扩充）
- 只写空间义最常见解释（1 条 meaning + 1–2 条 tips）
- 例句尽量使用：
  - 简短主谓宾
  - 高频名词（box, ball, table, room, school）
  - 中文译文直观，不炫技
- 对容易混淆的（over/above, beside/next to/near, between/among）：
  - tips 必须给“一句话区分点”
