# 大模型API调用汇总

## 项目概述
一个专业的AI大模型API信息汇总网站，为开发者提供全面的模型信息、价格对比和选型参考。

## 网站地址
- 主文件：`d:\大模型API调用汇总\index.html`

## 功能特性
- **模型卡片展示**：35+主流大模型API信息
- **多维度筛选**：按等级、厂商、价格、能力分类
- **搜索功能**：支持模型名称、厂商、功能搜索
- **对比模式**：选择2-3个模型进行详细对比
- **价格透明**：输入/输出价格清晰展示
- **跳转链接**：每个模型直达官方API入口

## 涵盖模型
### 海外厂商
- OpenAI: GPT-5.5, GPT-5.5 Pro, o3, GPT-4.1, o4-mini等
- Anthropic: Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5等
- Google: Gemini 3.1 Pro, Gemini 3.1 Flash-Lite, Gemini 2.5 Flash等
- DeepSeek: DeepSeek V4 Flash, DeepSeek V4 Pro, DeepSeek R1, DeepSeek V3.2
- Meta: Llama 3.3 70B
- Mistral: Mistral Small 3.1
- xAI: Grok 4.20, Grok 4.1 Fast, Grok Code Fast 1

### 国产厂商
- 智谱AI: GLM-5.1, GLM-4-Plus, GLM-4-FlashX, GLM-4-Flash(永久免费)
- 月之暗面: Kimi K2.6, Kimi K2.5
- 阿里云: 通义千问Qwen3.6 Max, Qwen3 Plus, QwQ-Plus
- 百度: 文心一言4.0
- 腾讯: 混元Hy3 Preview, 混元Standard, 混元Lite(免费)
- 字节跳动: 豆包Doubao-Seed-1.6-Lite
- 讯飞: 星火大模型4.0
- 上海AI Lab: InternVL3-78B

### 免费API平台
- 硅基流动: DeepSeek-R1免费调用
- ModelScope魔搭: 深度推理版、多模态API

## 技术栈
- 纯HTML/CSS/JavaScript单文件应用
- 响应式设计，支持移动端
- 数据独立文件 `js/models.js`，便于更新
- GitHub Actions 自动化部署

## 项目文件结构
```
大模型API调用汇总/
├── index.html          # 主页面
├── js/
│   └── models.js       # 模型数据（独立文件，便于更新）
├── .github/
│   └── workflows/
│       └── update-models.yml  # 自动更新工作流
├── README.md           # 项目说明
├── 部署指南.md         # 部署教程
└── .gitignore
```

## 部署状态
- GitHub 仓库：https://github.com/yjwhl/ai-model-api-hub.git
- GitHub Pages：已部署
- 数据更新：每天6:00自动化更新 + GitHub Actions

## 自动化任务
- **大模型API数据每日更新**：每天早上6:00自动执行，搜索最新价格并更新网站数据

## 更新记录
- 2026-04-10: 完成网站开发，包含35+模型数据
- 2026-04-10: 添加GitHub部署支持，创建自动化更新工作流
- 2026-04-10: 专业版v2.0重构
- 2026-04-15: 新增大模型资讯模块，支持按厂商筛选、加载更多
- 2026-04-26: v2.3.2 - DeepSeek V4拆分为Flash/Pro，xAI新增Grok 4.1 Fast和Code Fast 1
- 2026-04-25: v2.3.1 - GPT-5.5替换GPT-6，性能超Claude和Gemini
  - 能量条价格可视化
  - 场景化成本换算（100次对话、¥1可完成次数）
  - 能力星级评分体系
  - 国内访问标识
  - 成本计算器
  - 多维度筛选和排序
