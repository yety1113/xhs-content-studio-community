# 小红书内容工作室 / XHS Content Studio

> 从真实来源到可发布图文的 Codex 工作流插件。  
> A Codex workflow plugin that turns real sources into publish-ready Xiaohongshu content.

## 这是什么？ / What is this?

这不是“随手生成一篇文案”的工具。它将账号理解、来源调研、选题确认、视觉定调、3:4 图文制作与发布包交付串成一条生产线。

This is not a one-click copywriting tool. It connects account understanding, source research, topic approval, visual direction, 3:4 carousel production, and a publish-ready handoff.

`账号理解 → 视觉输入 → 来源台账 → 3 个选题 → 用户确认 → 3:4 成品 → 手机端质检 → 发布包`

`Account brief → Visual intake → Source ledger → 3 topic cards → Approval → 3:4 assets → Mobile QA → Publish package`

## 它解决什么？ / What does it solve?

- 先基于真实来源和账号调性提选题，不编案例、数据或平台规则。  
  Proposes topics from traceable sources and the account's own identity—without invented cases, metrics, or platform rules.
- 生产前强制选择视觉路线：上传已有账号素材、提供竞品参考，或选择内置风格系统。  
  Requires a visual route before production: account assets, transformed references, or a built-in style system.
- 未经确认只交付选题卡；确认后才制作图文。  
  Stops at topic cards until the creator explicitly approves a direction.
- 默认生成 1080 × 1440、3:4、手机可读的图文；必须导出 PNG 和九宫格后才算交付。  
  Defaults to mobile-readable 1080 × 1440 (3:4) carousels and requires rendered PNGs plus a contact sheet before handoff.

## 内置视觉系统 / Built-in visual systems

| 编号 / Code | 风格 / System | 适用内容 / Best for |
|---|---|---|
| S01 | 蓝色手绘 IP / Blue Sketch IP | 原创角色、友好知识、社群系列 / original characters, friendly explainers, community series |
| S02 | 像素花园课 / Pixel Garden Lesson | 新手教程、陪伴式连载、AI 做游戏 / beginner lessons, serial learning, AI game-making |
| S03 | 霓虹拼贴实验室 / Neon Collage Lab | 创意工具、Skill、强视觉实验 / creative tools, skills, visual experiments |
| S04 | 深色研究板 / Dark Research Board | 游戏机制、技术分析、行业拆解 / game mechanics, technology, industry analysis |
| S05 | 黑橙评论台 / Black Amber Review | 热点观点、产品评测、视频评论 / commentary, product takes, video reviews |

风格库沉淀的是配色、层级与版式逻辑；不要复制参考账号的头像、IP、人物、标志、文案或完整构图。

The style library captures color, hierarchy, and layout logic only. Never copy a reference account's avatar, mascot, people, logo, wording, or complete composition.

## 安装 / Install

### 1. 克隆仓库 / Clone the repository

```powershell
git clone https://github.com/yety1113/xhs-content-studio-community.git
```

### 2. 在 Codex 终端安装 / Install from the Codex terminal

将下方路径替换为你刚克隆仓库的**本地绝对路径**。  
Replace the path with the **absolute local path** where you cloned this repository.

```powershell
codex plugin marketplace add <本仓库的本地绝对路径 / absolute local repository path>
codex plugin add xhs-content-studio@xhs-content-studio-community
```

### 3. 新开一个 Codex 任务 / Start a new Codex task

新任务才能加载最新插件。输入：  
Start a new task so Codex loads the plugin, then type:

```text
用 $xhs-content-studio 为我的账号做本周图文选题。
Use $xhs-content-studio to create this week's Xiaohongshu topic ideas for my account.
```

## 第一次使用 / First use

请提供以下任意一种视觉输入；没有视觉输入时，插件会先询问，不会擅自套模板。

Provide one visual input. Without it, the plugin asks first rather than silently applying a generic template.

1. 账号头像 + 3–6 张主页/旧笔记截图。  
   Account avatar + 3–6 screenshots of the profile or previous posts.
2. 3–5 个竞品/参考封面，并说明“借什么、不借什么”。  
   3–5 competitor or reference covers, plus what to borrow and what not to copy.
3. 选择 S01–S05 中的一个风格编号。  
   Select one built-in style code, S01–S05.

### 推荐提示词 / Recommended prompt

```text
用 $xhs-content-studio 为账号「账号名」做本周选题。
受众是……；来源是……；视觉选择 S04 深色研究板。
先只给我 3 个选题卡，等我确认后再做图。

Use $xhs-content-studio to plan this week's content for “Account Name”.
The audience is …; my sources are …; use S04 Dark Research Board.
Give me only 3 topic cards first. Do not create visual assets until I approve one.
```

## 更新 / Update

拉取仓库最新内容后，重新运行安装命令，并新开一个 Codex 任务。  
After pulling the latest repository changes, run the installation command again and start a new Codex task.

## 仓库结构 / Repository structure

```text
.agents/plugins/marketplace.json     # Codex community marketplace / Codex 社区插件市场
plugins/xhs-content-studio/          # Installable plugin source / 可安装插件源码
docs/                                # GitHub Pages landing page / GitHub Pages 落地页
```

## 发布者说明 / Maintainer note

GitHub Pages 通过 `.github/workflows/deploy-pages.yml` 自动部署 `docs/`。首次推送后，在仓库 **Settings → Pages** 选择 **GitHub Actions** 作为部署来源。

GitHub Pages deploys `docs/` through `.github/workflows/deploy-pages.yml`. After the first push, select **GitHub Actions** under **Settings → Pages**.
