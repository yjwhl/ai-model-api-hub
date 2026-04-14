// 大模型API数据 - 专业版 v2.0
// 换算标准：1000 Token ≈ 750 汉字
// 价格单位：美元/千Token

const MODELS_DATA = {
    version: "2.1.0",
    lastUpdate: "2026-04-15",
    tokenStandard: {
        tokensPerThousand: 1000,
        chineseCharsPerThousand: 750,
        description: "1000 Token ≈ 750 汉字"
    },
    models: [
        // ========== 顶级旗舰模型 ==========
        {
            id: "claude-opus-4-6",
            name: "Claude Opus 4.6",
            provider: "Anthropic",
            providerKey: "anthropic",
            providerLogo: "A",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 5.00,
            outputPrice: 25.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["代码能力最强", "SWE-bench 80.8%", "深度推理", "安全对齐"],
            specialties: "编程能力业界最强，SWE-bench测试中创下SOTA，最大输出128K tokens",
            scenarios: ["代码生成", "复杂推理", "长文档分析"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 4,
                multimodal: 4,
                speed: 3,
                stability: 5
            },
           实测数据: {
                响应速度: "中等",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new"],
            category: ["tier1", "coding", "reasoning"],
            url: "https://www.anthropic.com/api",
            chinaAccessible: false
        },
        {
            id: "gemini-3-1-pro",
            name: "Gemini 3.1 Pro",
            provider: "Google",
            providerKey: "google",
            providerLogo: "G",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 2.00,
            outputPrice: 12.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["ARC-AGI-2 77.1%", "原生视频理解", "超长上下文", "多模态"],
            specialties: "ARC-AGI-2得分77.1%，视频理解能力领先",
            scenarios: ["多模态", "长文本处理", "视频理解"],
            capabilities: {
                coding: 4,
                reasoning: 5,
                chinese: 4,
                multimodal: 5,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "需代理",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new"],
            category: ["tier1", "multimodal", "reasoning"],
            url: "https://ai.google.dev",
            chinaAccessible: false
        },
        {
            id: "gpt-5-4",
            name: "GPT-5.4",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 2.50,
            outputPrice: 15.00,
            contextWindow: 400000,
            contextLabel: "400K",
            features: ["综合能力均衡", "多模态", "Function Calling", "GPTs生态"],
            specialties: "综合能力最强，生态最成熟，GPT-5系列最新版",
            scenarios: ["通用对话", "代码生成", "多模态"],
            capabilities: {
                coding: 5,
                reasoning: 4,
                chinese: 4,
                multimodal: 5,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["hot", "new"],
            category: ["tier1", "multimodal", "coding"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "grok-3",
            name: "Grok 3",
            provider: "xAI",
            providerKey: "xai",
            providerLogo: "X",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 3.00,
            outputPrice: 15.00,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["强推理", "实时信息", "幽默风格", "X平台整合"],
            specialties: "实时获取X平台信息，回复风格独特",
            scenarios: ["实时问答", "社交媒体分析"],
            capabilities: {
                coding: 4,
                reasoning: 5,
                chinese: 3,
                multimodal: 3,
                speed: 4,
                stability: 4
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "需代理",
                并发支持: "中"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: [],
            category: ["tier1", "reasoning"],
            url: "https://x.ai/api",
            chinaAccessible: false
        },
        {
            id: "o3",
            name: "o3",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 2.00,
            outputPrice: 8.00,
            contextWindow: 200000,
            contextLabel: "200K",
            features: ["专注推理", "ARC-AGI高分", "复杂问题", "STEM强"],
            specialties: "推理任务专用，ARC-AGI基准测试最高分",
            scenarios: ["复杂推理", "数学解题", "科学计算"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 4,
                multimodal: 3,
                speed: 3,
                stability: 5
            },
            实测数据: {
                响应速度: "较慢",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "中"
            },
            supports: {
                streaming: true,
                functionCall: false,
                rag: true
            },
            badges: ["hot"],
            category: ["tier1", "reasoning", "coding"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },

        // ========== 性价比模型 ==========
        {
            id: "o4-mini",
            name: "o4-mini",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 1.10,
            outputPrice: 4.40,
            contextWindow: 200000,
            contextLabel: "200K",
            features: ["最强性价比推理", "STEM专长", "复杂问题", "速度快"],
            specialties: "o系列最具性价比推理模型，比o3便宜50%，数学代码表现优异",
            scenarios: ["复杂推理", "数学计算", "代码优化"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 4,
                multimodal: 3,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "较快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new", "hot"],
            category: ["tier2", "reasoning", "coding"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "claude-sonnet-4-6",
            name: "Claude Sonnet 4.6",
            provider: "Anthropic",
            providerKey: "anthropic",
            providerLogo: "A",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 3.00,
            outputPrice: 15.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["最佳性价比", "SWE-bench 79.6%", "代码能力强", "快速响应"],
            specialties: "编程能力接近Opus，价格更实惠，最大输出64K tokens",
            scenarios: ["代码生成", "日常对话", "长文档"],
            capabilities: {
                coding: 5,
                reasoning: 4,
                chinese: 4,
                multimodal: 4,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new"],
            category: ["tier2", "coding", "value"],
            url: "https://www.anthropic.com/api",
            chinaAccessible: false
        },
        {
            id: "claude-haiku-4-5",
            name: "Claude Haiku 4.5",
            provider: "Anthropic",
            providerKey: "anthropic",
            providerLogo: "A",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 1.00,
            outputPrice: 5.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["高吞吐低成本", "快速响应", "百万上下文", "Agent任务"],
            specialties: "Claude系列最经济款，高并发场景首选，最大输出8K tokens",
            scenarios: ["高频任务", "批量处理", "简单对话"],
            capabilities: {
                coding: 4,
                reasoning: 3,
                chinese: 4,
                multimodal: 3,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new"],
            category: ["tier3", "value"],
            url: "https://www.anthropic.com/api",
            chinaAccessible: false
        },
        {
            id: "gpt-5-4-mini",
            name: "GPT-5.4 mini",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.75,
            outputPrice: 4.50,
            contextWindow: 200000,
            contextLabel: "200K",
            features: ["GPT-5级别智能", "速度快", "性价比强", "多模态支持"],
            specialties: "GPT-5.4 mini：旗舰智能的性价比版本，比Claude Sonnet便宜4倍",
            scenarios: ["日常对话", "代码生成", "内容创作"],
            capabilities: {
                coding: 5,
                reasoning: 4,
                chinese: 4,
                multimodal: 4,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new", "hot"],
            category: ["tier2", "coding", "value"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "gpt-4-1",
            name: "GPT-4.1",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 2.00,
            outputPrice: 8.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["百万上下文", "指令遵循", "长文本处理", "多语言"],
            specialties: "百万级上下文，支持超长文档处理",
            scenarios: ["长文档处理", "多语言", "指令遵循"],
            capabilities: {
                coding: 4,
                reasoning: 4,
                chinese: 4,
                multimodal: 3,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: [],
            category: ["tier2", "longcontext"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "gpt-4o",
            name: "GPT-4o",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 2.50,
            outputPrice: 10.00,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["多模态", "实时语音", "图像理解", "极速响应"],
            specialties: "原生多模态支持，实时语音对话能力",
            scenarios: ["多模态对话", "图像分析", "语音交互"],
            capabilities: {
                coding: 4,
                reasoning: 4,
                chinese: 4,
                multimodal: 5,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: [],
            category: ["tier2", "multimodal", "value"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "deepseek-r1",
            name: "DeepSeek R1",
            provider: "DeepSeek",
            providerKey: "deepseek",
            providerLogo: "D",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.55,
            outputPrice: 2.19,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["推理价格之王", "开源", "长思维链", "数学能力强"],
            specialties: "推理场景性价比之王，底层V3.2思考模式，最大输出64K tokens",
            scenarios: ["推理分析", "数学计算", "代码生成"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 3,
                speed: 4,
                stability: 4
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["hot", "china"],
            category: ["tier2", "reasoning", "china", "opensource", "value"],
            url: "https://platform.deepseek.com",
            chinaAccessible: true
        },

        // ========== 经济实惠模型 ==========
        {
            id: "deepseek-v3-2",
            name: "DeepSeek V3.2",
            provider: "DeepSeek",
            providerKey: "deepseek",
            providerLogo: "D",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.27,
            outputPrice: 0.41,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["中文性价比极高", "开源", "代码能力强", "快速生成"],
            specialties: "中文场景性价比最高，开源可商用，缓存命中仅$0.028/M tokens",
            scenarios: ["日常对话", "内容创作", "代码生成"],
            capabilities: {
                coding: 4,
                reasoning: 4,
                chinese: 5,
                multimodal: 3,
                speed: 5,
                stability: 4
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new", "hot", "china"],
            category: ["tier3", "china", "opensource", "value"],
            url: "https://platform.deepseek.com",
            chinaAccessible: true
        },
        {
            id: "llama-3-3-70b",
            name: "Llama 3.3 70B",
            provider: "Meta",
            providerKey: "meta",
            providerLogo: "M",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.88,
            outputPrice: 0.88,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["开源最强", "输入输出同价", "指令遵循", "多语言"],
            specialties: "开源Llama系列最强，输入输出同价",
            scenarios: ["高吞吐处理", "开源部署", "多语言"],
            capabilities: {
                coding: 4,
                reasoning: 3,
                chinese: 3,
                multimodal: 2,
                speed: 4,
                stability: 4
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["opensource"],
            category: ["tier3", "opensource", "value"],
            url: "https://ai.meta.com",
            chinaAccessible: false
        },
        {
            id: "gemini-2-5-pro",
            name: "Gemini 2.5 Pro",
            provider: "Google",
            providerKey: "google",
            providerLogo: "G",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 1.25,
            outputPrice: 10.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["生产就绪", "百万上下文", "深度推理", "多模态"],
            specialties: "Google最强生产就绪模型，百万上下文，推理能力强劲",
            scenarios: ["复杂推理", "长文档", "代码生成"],
            capabilities: {
                coding: 4,
                reasoning: 5,
                chinese: 4,
                multimodal: 5,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["hot"],
            category: ["tier2", "multimodal", "reasoning", "longcontext"],
            url: "https://ai.google.dev",
            chinaAccessible: false
        },
        {
            id: "gemini-2-5-flash",
            name: "Gemini 2.5 Flash",
            provider: "Google",
            providerKey: "google",
            providerLogo: "G",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.30,
            outputPrice: 2.50,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["高速处理", "百万上下文", "批量任务", "极速响应"],
            specialties: "高速+百万上下文，性价比极高，每天免费1000次请求",
            scenarios: ["批量处理", "长文档", "高并发"],
            capabilities: {
                coding: 3,
                reasoning: 4,
                chinese: 4,
                multimodal: 4,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["hot"],
            category: ["tier3", "longcontext", "value"],
            url: "https://ai.google.dev",
            chinaAccessible: false
        },
        {
            id: "gpt-4-1-nano",
            name: "GPT-4.1 Nano",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.10,
            outputPrice: 0.40,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["最低价GPT", "百万上下文", "快速响应", "分类提取"],
            specialties: "最低价GPT模型，百万级上下文，缓存折扣可低至$0.025/M",
            scenarios: ["简单任务", "批量处理", "文本分类"],
            capabilities: {
                coding: 3,
                reasoning: 3,
                chinese: 4,
                multimodal: 2,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: [],
            category: ["tier3", "value"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "gpt-5-4-nano",
            name: "GPT-5.4 Nano",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.20,
            outputPrice: 1.25,
            contextWindow: 270000,
            contextLabel: "270K",
            features: ["最新入门级", "270K上下文", "极速响应", "缓存折扣大"],
            specialties: "GPT-5.4 Nano：最新入门级GPT模型，270K上下文，缓存输入仅$0.02/M",
            scenarios: ["简单任务", "批量处理", "文本分类"],
            capabilities: {
                coding: 3,
                reasoning: 3,
                chinese: 4,
                multimodal: 2,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "需代理",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new"],
            category: ["tier3", "value"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "mistral-small-3-1",
            name: "Mistral Small 3.1",
            provider: "Mistral",
            providerKey: "mistral",
            providerLogo: "Ms",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.20,
            outputPrice: 0.60,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["欧洲合规", "便宜好用", "多语言", "代码能力"],
            specialties: "欧洲合规认证，多语言支持好",
            scenarios: ["欧洲业务", "多语言", "成本控制"],
            capabilities: {
                coding: 3,
                reasoning: 3,
                chinese: 3,
                multimodal: 2,
                speed: 5,
                stability: 4
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: [],
            category: ["tier3", "value"],
            url: "https://mistral.ai",
            chinaAccessible: false
        },

        // ========== 国产免费模型 ==========
        {
            id: "glm-4-flash",
            name: "GLM-4-Flash",
            provider: "智谱AI",
            providerKey: "zhipuai",
            providerLogo: "智",
            tier: 3,
            tierLabel: "免费使用",
            inputPrice: 0,
            outputPrice: 0,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["完全免费", "永久有效", "代码生成", "中文优化"],
            specialties: "永久免费无Token限制（30并发），长期稳定兜底首选",
            scenarios: ["日常对话", "内容创作", "代码生成"],
            capabilities: {
                coding: 4,
                reasoning: 3,
                chinese: 5,
                multimodal: 3,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "30"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["free", "hot", "china"],
            category: ["free", "china", "value"],
            url: "https://open.bigmodel.cn",
            chinaAccessible: true
        },
        {
            id: "glm-z1-flash",
            name: "GLM-Z1-Flash",
            provider: "智谱AI",
            providerKey: "zhipuai",
            providerLogo: "智",
            tier: 3,
            tierLabel: "免费使用",
            inputPrice: 0,
            outputPrice: 0,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["永久免费", "推理增强", "快速响应", "中文优化"],
            specialties: "智谱永久免费系列，推理能力增强版",
            scenarios: ["日常对话", "推理分析"],
            capabilities: {
                coding: 4,
                reasoning: 4,
                chinese: 5,
                multimodal: 3,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "30"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["free", "new", "china"],
            category: ["free", "china", "reasoning"],
            url: "https://open.bigmodel.cn",
            chinaAccessible: true
        },
        {
            id: "kimi-256k",
            name: "Kimi 256K",
            provider: "月之暗面",
            providerKey: "moonshot",
            providerLogo: "月",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.50,
            outputPrice: 1.50,
            contextWindow: 256000,
            contextLabel: "256K",
            features: ["超长上下文256K", "免费额度", "长文本处理", "文档摘要"],
            specialties: "256K超长上下文，免费额度充足",
            scenarios: ["长文档处理", "书籍摘要", "合同分析"],
            capabilities: {
                coding: 4,
                reasoning: 4,
                chinese: 5,
                multimodal: 3,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["free", "china", "hot"],
            category: ["tier2", "longcontext", "china", "free"],
            url: "https://platform.moonshot.cn",
            chinaAccessible: true
        },
        {
            id: "qwen3-series",
            name: "通义千问 Qwen3 Max",
            provider: "阿里云",
            providerKey: "aliyun",
            providerLogo: "阿",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.50,
            outputPrice: 2.00,
            contextWindow: 256000,
            contextLabel: "256K",
            features: ["开源可商用", "多尺寸", "代码能力强", "中文优化"],
            specialties: "阿里最强模型，Qwen3 Max支持思维链，Qwen Plus性价比极高（$0.12/$0.29）",
            scenarios: ["日常对话", "代码生成", "内容创作"],
            capabilities: {
                coding: 5,
                reasoning: 4,
                chinese: 5,
                multimodal: 4,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["opensource", "china", "hot", "new"],
            category: ["tier2", "opensource", "china", "coding"],
            url: "https://bailian.console.aliyun.com",
            chinaAccessible: true
        },
        {
            id: "doubao-pro",
            name: "豆包 Pro",
            provider: "字节跳动",
            providerKey: "bytedance",
            providerLogo: "豆",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.04,
            outputPrice: 0.12,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["国内最低价", "多模态", "字节生态", "高并发"],
            specialties: "国内最便宜大模型API，¥0.0008/¥0.002（百万tokens），多模态能力强",
            scenarios: ["多模态对话", "内容创作", "高并发"],
            capabilities: {
                coding: 4,
                reasoning: 4,
                chinese: 5,
                multimodal: 5,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "极高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china", "hot", "value", "new"],
            category: ["tier2", "multimodal", "china", "value"],
            url: "https://www.volcengine.com/product/doubao",
            chinaAccessible: true
        },
        {
            id: "wenxin-4-0",
            name: "文心一言 4.0",
            provider: "百度",
            providerKey: "baidu",
            providerLogo: "百",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.80,
            outputPrice: 2.00,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["数理逻辑强", "行业覆盖广", "企业级", "中文理解"],
            specialties: "数理逻辑准确率92%+，企业级AI能力",
            scenarios: ["企业应用", "行业分析", "数理推理"],
            capabilities: {
                coding: 4,
                reasoning: 5,
                chinese: 5,
                multimodal: 4,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china"],
            category: ["tier2", "china", "reasoning"],
            url: "https://cloud.baidu.com",
            chinaAccessible: true
        },
        {
            id: "hunyuan-pro",
            name: "混元 Pro",
            provider: "腾讯",
            providerKey: "tencent",
            providerLogo: "腾",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.014,
            outputPrice: 0.069,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["大幅降价", "腾讯生态", "多模态", "实时交互"],
            specialties: "腾讯大幅降价，¥0.1/¥0.5（百万tokens），与腾讯生态深度整合",
            scenarios: ["腾讯生态", "数学计算", "多模态"],
            capabilities: {
                coding: 4,
                reasoning: 5,
                chinese: 5,
                multimodal: 5,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china", "new"],
            category: ["tier2", "multimodal", "china"],
            url: "https://cloud.tencent.com",
            chinaAccessible: true
        },
        {
            id: "spark-4-0",
            name: "星火大模型 4.0",
            provider: "讯飞",
            providerKey: "iflytek",
            providerLogo: "讯",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.50,
            outputPrice: 1.50,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["语音交互强", "AI绘图", "联网搜索", "长文档"],
            specialties: "语音交互强，一体化综合应用",
            scenarios: ["语音交互", "AI绘图", "联网搜索"],
            capabilities: {
                coding: 3,
                reasoning: 4,
                chinese: 5,
                multimodal: 5,
                speed: 4,
                stability: 4
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china"],
            category: ["tier2", "multimodal", "china"],
            url: "https://xinghuo.xfyun.cn",
            chinaAccessible: true
        },
        {
            id: "internvl3-78b",
            name: "InternVL3-78B",
            provider: "上海AI Lab",
            providerKey: "intern",
            providerLogo: "上",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 0,
            outputPrice: 0,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["免费API", "视觉能力极强", "开源", "书生·浦语"],
            specialties: "书生·浦语开源系列，视觉理解能力极强",
            scenarios: ["视觉理解", "多模态分析"],
            capabilities: {
                coding: 3,
                reasoning: 4,
                chinese: 5,
                multimodal: 5,
                speed: 3,
                stability: 4
            },
            实测数据: {
                响应速度: "较慢",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "10 RPM"
            },
            supports: {
                streaming: true,
                functionCall: false,
                rag: true
            },
            badges: ["free", "opensource", "china", "new"],
            category: ["tier1", "multimodal", "free", "opensource", "china"],
            url: "https://intern-ai.org.cn",
            chinaAccessible: true
        },

        // ========== 免费聚合平台 ==========
        {
            id: "siliconflow-r1",
            name: "硅基流动 DeepSeek-R1",
            provider: "硅基流动",
            providerKey: "siliconflow",
            providerLogo: "硅",
            tier: 3,
            tierLabel: "免费使用",
            inputPrice: 0,
            outputPrice: 0,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["免费API", "1000 RPM", "DeepSeek-R1", "聚合平台"],
            specialties: "聚合平台免费调用DeepSeek-R1，1000 RPM限制",
            scenarios: ["深度推理", "代码生成"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 3,
                speed: 4,
                stability: 4
            },
            实测数据: {
                响应速度: "快",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "1000 RPM"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["free", "china"],
            category: ["free", "reasoning", "china", "value"],
            url: "https://siliconflow.cn",
            chinaAccessible: true
        },
        {
            id: "modelscope-r1",
            name: "魔搭 DeepSeek-R1",
            provider: "ModelScope魔搭",
            providerKey: "aliyun",
            providerLogo: "魔",
            tier: 3,
            tierLabel: "免费使用",
            inputPrice: 0,
            outputPrice: 0,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["免费API", "每天200次", "深度推理", "阿里达摩院"],
            specialties: "阿里达摩院ModelScope，深度推理版，每天200次",
            scenarios: ["深度推理", "复杂分析"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 3,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "200次/天"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["free", "china"],
            category: ["free", "reasoning", "china"],
            url: "https://modelscope.cn",
            chinaAccessible: true
        },
        {
            id: "modelscope-image",
            name: "魔搭图像生成",
            provider: "ModelScope魔搭",
            providerKey: "aliyun",
            providerLogo: "魔",
            tier: 3,
            tierLabel: "免费使用",
            inputPrice: 0,
            outputPrice: 0,
            contextWindow: 0,
            contextLabel: "-",
            features: ["免费API", "每天2000次", "Flux.1文生图", "QWen多模态"],
            specialties: "阿里免费图像生成API，每天2000次调用",
            scenarios: ["图像生成", "多模态创作"],
            capabilities: {
                coding: 1,
                reasoning: 2,
                chinese: 4,
                multimodal: 5,
                speed: 4,
                stability: 5
            },
            实测数据: {
                响应速度: "快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "2000次/天"
            },
            supports: {
                streaming: false,
                functionCall: false,
                rag: false
            },
            badges: ["free", "china"],
            category: ["free", "multimodal", "china"],
            url: "https://modelscope.cn",
            chinaAccessible: true
        }
    ]
};

// 导出供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODELS_DATA;
}
