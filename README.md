# 🤖 大模型API广场

> 最全的AI大模型API信息汇总网站，为开发者提供全面的模型信息、价格对比和选型参考。

## 🌟 功能特性

- **35+ 主流大模型** - 覆盖 OpenAI、Anthropic、Google、DeepSeek 等海外厂商，以及百度、阿里、腾讯、字节等国产厂商
- **多维度筛选** - 按等级、厂商、价格、能力分类
- **智能搜索** - 支持模型名称、厂商、功能关键词搜索
- **模型对比** - 选择 2-3 个模型进行详细横向对比
- **价格透明** - 输入/输出价格清晰展示，单位：美元/千Token
- **直达链接** - 每个模型提供官方API入口

## 📊 收录模型

### 海外厂商
| 厂商 | 代表模型 |
|------|----------|
| OpenAI | GPT-5, o3, GPT-4.1, o4-mini |
| Anthropic | Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku |
| Google | Gemini 3.1 Pro, Gemini 2.5 Flash |
| DeepSeek | DeepSeek R1, DeepSeek V3.2 |
| Meta | Llama 3.3 70B |
| Mistral | Mistral Small 3.1 |
| xAI | Grok 3 |

### 国产厂商
| 厂商 | 代表模型 |
|------|----------|
| 智谱AI | GLM-4-Flash (永久免费), GLM-Z1-Flash |
| 月之暗面 | Kimi 256K |
| 阿里云 | 通义千问 Qwen3 系列 |
| 百度 | 文心一言 4.0 |
| 腾讯 | 混元 Pro |
| 字节跳动 | 豆包 Pro |
| 讯飞 | 星火大模型 4.0 |
| 上海AI Lab | InternVL3-78B |

### 免费API平台
- 硅基流动 - DeepSeek-R1 免费调用
- ModelScope魔搭 - 深度推理版、多模态API

## 🚀 快速部署

### 方式一：GitHub Pages（推荐）

1. Fork 本仓库
2. 进入 Settings → Pages
3. Source 选择 `main` 分支和 `/(root)` 目录
4. 点击 Save，等待部署完成
5. 访问 `https://yourusername.github.io/ai-model-api-hub`

### 方式二：Vercel

```bash
npm i -g vercel
vercel
```

### 方式三：Netlify

直接拖拽 `index.html` 所在文件夹到 Netlify Drop

## 🔄 数据更新

数据每 24 小时自动更新一次（通过 GitHub Actions）。

手动更新数据：
1. 编辑 `js/models.js` 文件中的 `models` 数组
2. 提交 PR 或直接 push

## 📝 数据格式

```javascript
{
    id: "model-id",
    name: "模型名称",
    provider: "厂商名称",
    providerKey: "厂商标识",
    tier: "tier1/tier2/tier3",
    inputPrice: 0.00,  // 输入价格（美元/千Token）
    outputPrice: 0.00, // 输出价格
    contextWindow: "128K",
    features: ["功能1", "功能2"],
    specialties: "核心优势描述",
    badges: ["new", "hot", "free", "opensource"],
    url: "官方API地址"
}
```

## 🤝 贡献

欢迎提交 Issue 或 PR 来帮助完善数据！

## 📄 License

MIT License

---

*数据更新时间：2026年4月 | 价格数据来源：各厂商官方文档*
