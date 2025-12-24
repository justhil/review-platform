# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```powershell
npm run dev      # 启动开发服务器 (localhost:5173)
npm run build    # 生产构建
npm run preview  # 预览生产构建
```

## 架构概览

多科目复习平台，基于 React + TypeScript + Vite。支持题库训练、知识点卡片、公式背诵、大题背诵、错题本、模拟考试等功能。

### 科目隔离机制

- 路由隔离：`/:subjectId/practice`、`/:subjectId/exams` 等
- 存储隔离：`review-{subjectId}-progress`、`review-{subjectId}-exams`
- SubjectContext 根据 URL 参数切换科目数据和进度

### 核心数据流

```
SubjectProvider (context/SubjectContext.tsx)
    ↓ 提供 subjectId、config、data
    ↓
useProgress (hooks/useProgress.ts) → localStorage 持久化
useExams (hooks/useExams.ts) → 试卷生成与管理
useWeakPoints (hooks/useWeakPoints.ts) → 薄弱点计算（艾宾浩斯遗忘曲线）
useQuestions (hooks/useQuestions.ts) → 题目筛选
```

### 添加新科目

1. `src/data/subjects.ts` 添加 SubjectConfig（含 chapters）
2. 创建 `src/data/{subjectId}/` 文件夹，包含：
   - `questions.ts` - 题目数据
   - `knowledgePoints.ts` - 知识点
   - `formulas.ts` - 公式
   - `bigQuestions.ts` - 大题背诵
   - `index.ts` - 导出
3. `subjectDataMap` 添加对应 SubjectData

### ID 命名规范

| 类型 | 格式 | 示例 |
|------|------|------|
| 题目 | `{prefix}-{year}{paper}-{type}-{num}` | `phy-2019a-fill-01` |
| 知识点 | `{prefix}-kp-{chapter}` | `phy-kp-01` |
| 公式 | `{prefix}-f-{num}` | `phy-f-01` |

题目的 `kp` 字段引用知识点 ID，用于关联和筛选。

### 关键类型 (src/types/index.ts)

- `QuestionType`: 'fill' | 'single' | 'truefalse' | 'short' | 'calc'
- `MasteryState`: 'known' | 'unsure' | 'unknown'
- `SubjectConfig`: 科目配置（id、name、chapters）
- `SubjectData`: 科目数据（questions、knowledgePoints、formulas、bigQuestions）

### localStorage 键名

| Key | 内容 |
|-----|------|
| `review-{subjectId}-progress` | 用户学习进度 |
| `review-{subjectId}-exams` | 试卷列表 |
| `review-{subjectId}-used-questions` | 已用题目 ID |
| `exam-answers-{examId}` | 单场考试答案 |
| `review-bq-revealed-{subjectId}` | 大题背诵进度 |

## 技术栈

- React 18 + TypeScript + Vite
- react-router-dom v7（路由）
- ECharts（图表）
- KaTeX（LaTeX 渲染，题目 stem 中使用 `$...$` 包裹公式）
- Canvas + Pointer Events（手写画板）
