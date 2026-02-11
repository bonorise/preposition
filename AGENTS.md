# Communication

- 沟通语言：除非用户明确要求英文，否则所有回复使用简体中文。

# Project Workflow (Required)

## Source of Truth
- 需求文档：`docs/PRD.md`
- 进度清单：`docs/PROGRESS.md`（必须使用 Markdown checkbox：`[x]` / `[ ]`）

## Definition of Done (DoD) - MUST DO EVERY TASK
完成任何任务时，必须按顺序执行并在最终回复中体现结果：
1. 回读 `docs/PRD.md`，列出本次任务对应的需求条目（引用章节标题或编号）。
2. 自检是否满足对应条目的验收标准。
3. 更新 `docs/PROGRESS.md`：
   - 已完成项标记为 `[x]`
   - 未完成项保持 `[ ]`，并追加一行阻塞原因（1 句）
   - 新发现子任务追加为 `[ ]`（一行一个）
4. 在最终回复中固定输出：
   - 完成/未完成结论
   - 变更文件列表
   - 需要用户人工确认的点（如有）

## Execution Rule
- 若任务涉及实现、修复、重构、文案或配置变更，以上 DoD 不可省略。
- 若任务仅为信息查询且无代码或文档变更，也要明确说明“本次无需更新 `docs/PROGRESS.md`”。
