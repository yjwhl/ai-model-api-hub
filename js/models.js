// 大模型API数据 - 专业版 v2.4.2
// 换算标准：1000 Token ≈ 750 汉字
// 价格单位：国外模型=美元/百万Tokens，国内模型=人民币/百万Tokens

const MODELS_DATA = {
    version: "2.4.2",
    lastUpdate: "2026-05-15",
    tokenStandard: {
        tokensPerThousand: 1000,
        chineseCharsPerThousand: 750,
        description: "1000 Token ≈ 750 汉字"
    },
    models: [
        // ========== 顶级旗舰模型 ==========
        {
            id: "claude-opus-4-7",
            name: "Claude Opus 4.7",
            provider: "Anthropic",
            providerKey: "anthropic",
            providerLogo: "A",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 5.00,
            outputPrice: 25.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["代码能力最强", "SWE-bench Pro 64.3%", "混合推理", "自我验证输出"],
            specialties: "2026年4月16日发布，高级软件工程能力大幅提升，SWE-bench Pro 64.3%（4.6为53.4%），视觉增强，指令执行更精准，最大输出128K tokens",
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
            badges: ["new", "hot"],
            category: ["tier1", "coding", "reasoning"],
            url: "https://www.anthropic.com/api",
            chinaAccessible: false
        },
        {
            id: "deepseek-v4-flash",
            name: "DeepSeek V4 Flash",
            provider: "DeepSeek",
            providerKey: "deepseek",
            providerLogo: "D",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 0.14,
            outputPrice: 0.28,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["1M超长上下文", "缓存$0.028/M", "万亿参数MoE", "华为昇腾适配"],
            specialties: "万亿参数MoE-v2架构，原V4更名为V4 Flash，上下文从256K扩展至1M，缓存命中仅$0.028/M，最大输出384K tokens，旧chat/reasoner接口已映射至此",
            scenarios: ["代码生成", "复杂推理", "数学计算", "超长文档"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 4,
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
            badges: ["new", "hot", "china", "opensource"],
            category: ["tier1", "china", "coding", "reasoning", "opensource", "longcontext"],
            url: "https://platform.deepseek.com",
            chinaAccessible: true
        },
        {
            id: "deepseek-v4-pro",
            name: "DeepSeek V4 Pro",
            provider: "DeepSeek",
            providerKey: "deepseek",
            providerLogo: "D",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 3.00,
            outputPrice: 6.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["1M超长上下文", "性能旗舰", "⏳优惠5月31日到期", "原价¥12/¥24"],
            specialties: "DeepSeek最强性能旗舰，⏳2.5折限时优惠截至2026年5月31日23:59，当前折扣价¥3/¥6（非缓存输入/输出，百万tokens）。到期后恢复原价¥12/¥24。缓存命中价格维持¥0.025/M（降至首发价1/10，永久降价）。输出成本仅为GPT-5.5的1/15，1M上下文+384K输出，是高价值任务的高性价比选择",
            scenarios: ["企业级推理", "超长文档分析", "复杂代码生成", "高价值任务"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 4,
                speed: 4,
                stability: 4
            },
            实测数据: {
                响应速度: "较快",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china", "hot"],
            category: ["tier1", "china", "coding", "reasoning", "longcontext"],
            url: "https://platform.deepseek.com",
            chinaAccessible: true
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
            id: "gpt-5-5",
            name: "GPT-5.5",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 5.00,
            outputPrice: 30.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["GPT-6两倍定价", "Terminal-Bench 82.7%", "GDPVal 84.9%", "首个完全重训练模型", "Agentic Coding"],
            specialties: "2026年4月23日发布，OpenAI最智能模型，性能超Claude Opus 4.7和Gemini 3.1 Pro，Terminal-Bench 2.0得分82.7%，GDPVal得分84.9%，首个完全重训练的基础模型，代号Spud，专注复杂专业工作负载",
            scenarios: ["复杂推理", "代码生成", "科研分析", "企业级Agent", "网络安全"],
            capabilities: {
                coding: 5,
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
            badges: ["hot", "new"],
            category: ["tier1", "multimodal", "coding", "reasoning", "longcontext"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "gpt-5-5-pro",
            name: "GPT-5.5 Pro",
            provider: "OpenAI",
            providerKey: "openai",
            providerLogo: "O",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 30.00,
            outputPrice: 180.00,
            contextWindow: 1100000,
            contextLabel: "1.1M",
            features: ["最高精度旗舰", "深度推理专用", "Agent循环优化", "1.1M超长上下文"],
            specialties: "GPT-5.5旗舰高精度版，$30/$180（百万tokens），1.1M上下文窗口，专为深度推理和高精度Agentic任务设计，延迟与GPT-5.4相当，全球最贵API之一",
            scenarios: ["复杂推理", "高精度Agent任务", "科研分析", "企业旗舰场景"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 4,
                multimodal: 5,
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
            category: ["tier1", "multimodal", "coding", "reasoning", "longcontext"],
            url: "https://platform.openai.com",
            chinaAccessible: false
        },
        {
            id: "grok-4-1-fast",
            name: "Grok 4.1 Fast",
            provider: "xAI",
            providerKey: "xai",
            providerLogo: "X",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.20,
            outputPrice: 0.50,
            contextWindow: 2000000,
            contextLabel: "2M",
            features: ["2M超长上下文", "极速响应", "缓存75%折扣", "实时信息", "⛔已停止服务"],
            specialties: "⛔已停止服务：此模型已于2026年5月15日12:00 PT正式退役（xAI官方通知），API调用返回错误，请迁移至Grok 4.3（$1.25/$2.50，1M上下文，性能大幅提升）。原定价：$0.20/$0.50（百万tokens），2M超长上下文，缓存命中仅$0.05/M",
            scenarios: ["长文档分析", "实时问答", "高并发任务"],
            capabilities: {
                coding: 4,
                reasoning: 4,
                chinese: 3,
                multimodal: 3,
                speed: 5,
                stability: 4
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["deprecated"],
            category: ["tier3", "longcontext", "value"],
            url: "https://x.ai/api",
            chinaAccessible: false
        },
        {
            id: "grok-4-3",
            name: "Grok 4.3",
            provider: "xAI",
            providerKey: "xai",
            providerLogo: "X",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 1.25,
            outputPrice: 2.50,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["原生视频输入", "16智能体并行", "最低幻觉率", "207tps超高速", "原生PDF/PPTX输出"],
            specialties: "2026年4月30日正式发布，xAI新一代旗舰推理模型。价格大幅下调（vs Grok 4.20输入-58%），1M上下文，207tps超高速输出，新增原生视频输入、PDF/XLSX/PPTX文档生成，支持16智能体并行重度模式，内置网页搜索/X搜索/代码执行工具，缓存命中仅$0.31/M",
            scenarios: ["实时问答", "长文档分析", "Agent任务", "视频理解"],
            capabilities: {
                coding: 4,
                reasoning: 5,
                chinese: 3,
                multimodal: 5,
                speed: 5,
                stability: 4
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["new", "hot"],
            category: ["tier1", "reasoning", "multimodal", "longcontext"],
            url: "https://x.ai/api",
            chinaAccessible: false
        },
        {
            id: "grok-code-fast-1",
            name: "Grok Code Fast 1",
            provider: "xAI",
            providerKey: "xai",
            providerLogo: "X",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.20,
            outputPrice: 1.50,
            contextWindow: 256000,
            contextLabel: "256K",
            features: ["Agent编程专用", "缓存90%折扣", "代码审查优化", "CI流水线", "⛔已停止服务"],
            specialties: "⛔已停止服务：此模型已于2026年5月15日正式退役（xAI官方通知），API调用返回错误，建议迁移至Grok 4.3（$1.25/$2.50，1M上下文，内置代码执行工具）。xAI专为智能体编程打造，原$0.20/$1.50（百万tokens），256K上下文，缓存命中仅$0.02/M，针对大型代码库和CI流水线优化",
            scenarios: ["智能体编程", "代码审查", "CI流水线", "大规模代码库"],
            capabilities: {
                coding: 5,
                reasoning: 4,
                chinese: 3,
                multimodal: 2,
                speed: 5,
                stability: 4
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "稳定",
                国内访问: "需代理",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["deprecated"],
            category: ["tier2", "coding", "value"],
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
            inputPrice: 0.28,
            outputPrice: 0.42,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["中文性价比极高", "开源", "代码能力强", "快速生成"],
            specialties: "中文场景性价比最高，开源可商用，缓存命中仅$0.028/M tokens，¥2/¥3（百万tokens）",
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
            id: "gemini-3-1-flash-lite",
            name: "Gemini 3.1 Flash-Lite",
            provider: "Google",
            providerKey: "google",
            providerLogo: "G",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.25,
            outputPrice: 1.50,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["Google最具性价比", "百万上下文", "极速响应", "Flash系列"],
            specialties: "Google称其最具性价比模型，$0.25/$1.50，百万上下文，Batch/Flex半价",
            scenarios: ["批量处理", "高并发", "成本敏感"],
            capabilities: {
                coding: 3,
                reasoning: 3,
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
            badges: ["new"],
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
            id: "glm-5-1",
            name: "GLM-5.1",
            provider: "智谱AI",
            providerKey: "zhipuai",
            providerLogo: "智",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 6.00,
            outputPrice: 24.00,
            contextWindow: 200000,
            contextLabel: "200K",
            features: ["8小时持续工作", "编程媲美Claude Opus", "开源", "长程Agent任务", "阶梯定价"],
            specialties: "4月8日发布，全球首个验证8小时持续工作的开源模型。官方定价：0-32K输入¥6/百万tokens、输出¥24；32K以上输入¥8、输出¥28。编程能力达Claude Opus 4.6的94.6%，SWE-bench长任务国产SOTA",
            scenarios: ["长程编码", "复杂Agent任务", "代码生成", "长文档处理"],
            capabilities: {
                coding: 5,
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
            badges: ["china", "hot", "new", "opensource"],
            category: ["tier1", "china", "coding", "reasoning", "opensource"],
            url: "https://open.bigmodel.cn",
            chinaAccessible: true
        },
        {
            id: "glm-4-plus",
            name: "GLM-4-Plus",
            provider: "智谱AI",
            providerKey: "zhipuai",
            providerLogo: "智",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.50,
            outputPrice: 0.50,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["输入输出同价", "高性能", "代码能力强", "中文优化"],
            specialties: "GLM-4-Plus输入输出同价0.5元/百万tokens，PPO推理优化",
            scenarios: ["日常对话", "代码生成", "内容创作"],
            capabilities: {
                coding: 5,
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
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china", "new"],
            category: ["tier2", "china", "value"],
            url: "https://open.bigmodel.cn",
            chinaAccessible: true
        },
        {
            id: "glm-4-flashx",
            name: "GLM-4-FlashX",
            provider: "智谱AI",
            providerKey: "zhipuai",
            providerLogo: "智",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.10,
            outputPrice: 0.10,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["高速低价", "输入输出同价", "128K上下文", "大规模调用"],
            specialties: "GLM-4-FlashX仅0.1元/百万tokens，输入输出同价，高性价比",
            scenarios: ["高频任务", "批量处理", "大规模调用"],
            capabilities: {
                coding: 4,
                reasoning: 3,
                chinese: 5,
                multimodal: 3,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china", "value"],
            category: ["tier3", "china", "value"],
            url: "https://open.bigmodel.cn",
            chinaAccessible: true
        },
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
            id: "kimi-k2-6",
            name: "Kimi K2.6",
            provider: "月之暗面",
            providerKey: "moonshot",
            providerLogo: "月",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 0.95,
            outputPrice: 4.00,
            contextWindow: 262144,
            contextLabel: "256K",
            features: ["长程编码13小时", "超越GPT-5.4代码", "Agent集群调度", "开源可商用"],
            specialties: "4月20日发布，最强代码Agent模型，可不间断编码13小时，多项基准超越GPT-5.4和Claude Opus 4.6，$0.95/$4.00（百万tokens），缓存命中仅$0.16/M，开源可商用。月之暗面已完成20亿美元融资（美团龙珠领投），投后估值超200亿美元；下一代Kimi K3预计Q3 2026发布，参数规模2.5万亿（K2翻倍），上下文1M+，国产新旗舰值得关注",
            scenarios: ["长程编码", "复杂Agent任务", "代码生成", "系统级开发"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 4,
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
            badges: ["china", "hot", "new", "opensource"],
            category: ["tier1", "longcontext", "china", "coding", "reasoning"],
            url: "https://platform.moonshot.cn",
            chinaAccessible: true
        },
        {
            id: "kimi-k2-5",
            name: "Kimi K2.5",
            provider: "月之暗面",
            providerKey: "moonshot",
            providerLogo: "月",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 4.38,
            outputPrice: 21.90,
            contextWindow: 256000,
            contextLabel: "256K",
            features: ["原生多模态", "256K超长上下文", "视觉智能体", "Batch API"],
            specialties: "K2.5原生视觉智能体，同时支持思考与非思考模式，支持Batch API批量调用",
            scenarios: ["长文档处理", "视觉分析", "Batch批量任务", "复杂推理"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 5,
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
            badges: ["china", "new"],
            category: ["tier2", "longcontext", "china", "reasoning", "multimodal"],
            url: "https://platform.moonshot.cn",
            chinaAccessible: true
        },
        {
            id: "qwen3-max",
            name: "通义千问 Qwen3-Max",
            provider: "阿里云",
            providerKey: "aliyun",
            providerLogo: "阿",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 2.50,
            outputPrice: 10.00,
            contextWindow: 131072,
            contextLabel: "131K",
            features: ["万亿参数", "阶梯定价", "131K上下文", "Agent编程SOTA"],
            specialties: "阿里云通义千问旗舰模型，阶梯定价：0-32K输入¥2.5/百万tokens、输出¥10；32K-128K输入¥4、输出¥16；128K-252K输入¥7、输出¥28",
            scenarios: ["复杂推理", "代码生成", "智能体任务", "长文档"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 4,
                speed: 3,
                stability: 5
            },
            实测数据: {
                响应速度: "中等",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china", "hot"],
            category: ["tier1", "china", "coding", "reasoning"],
            url: "https://bailian.console.aliyun.com",
            chinaAccessible: true
        },
        {
            id: "qwen3-6-max-preview",
            name: "通义千问 Qwen3.6-Max-Preview",
            provider: "阿里云",
            providerKey: "aliyun",
            providerLogo: "阿",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 18.37,
            outputPrice: 73.50,
            contextWindow: 262144,
            contextLabel: "262K",
            features: ["1万亿MoE参数", "Preview测试版", "262K上下文", "Agent编程SOTA"],
            specialties: "4月20日发布Preview版，1万亿MoE参数，Agent编程能力超越前代，SWE-Bench Pro得分57.30，综合实力居国产前列，正式版待发布。5月13日：通义千问原负责人林俊旸宣布离职创业，首轮估值超20亿美元（约130亿人民币），模型技术路线延续性待观察",
            scenarios: ["复杂推理", "代码生成", "智能体任务", "长文档"],
            capabilities: {
                coding: 5,
                reasoning: 5,
                chinese: 5,
                multimodal: 4,
                speed: 3,
                stability: 4
            },
            实测数据: {
                响应速度: "中等",
                稳定性: "稳定",
                国内访问: "直连",
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["china", "hot", "new"],
            category: ["tier1", "china", "coding", "reasoning"],
            url: "https://bailian.console.aliyun.com",
            chinaAccessible: true
        },
        {
            id: "qwen3-plus",
            name: "通义千问 Qwen3 Plus",
            provider: "阿里云",
            providerKey: "aliyun",
            providerLogo: "阿",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.80,
            outputPrice: 2.00,
            contextWindow: 1000000,
            contextLabel: "1M",
            features: ["百万上下文", "开源可商用", "高性价比", "1M超长上下文"],
            specialties: "Qwen3 Plus支持百万上下文，1M tokens超长文档处理",
            scenarios: ["长文档处理", "代码生成", "内容创作"],
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
            badges: ["opensource", "china", "hot"],
            category: ["tier2", "opensource", "china", "longcontext"],
            url: "https://bailian.console.aliyun.com",
            chinaAccessible: true
        },
        {
            id: "qwen-qwq-plus",
            name: "通义千问 QwQ-Plus",
            provider: "阿里云",
            providerKey: "aliyun",
            providerLogo: "阿",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 1.60,
            outputPrice: 4.00,
            contextWindow: 256000,
            contextLabel: "256K",
            features: ["深度推理", "QwQ思维链", "复杂问题", "数学代码"],
            specialties: "QwQ系列推理增强版，专注复杂推理和数学代码问题",
            scenarios: ["复杂推理", "数学计算", "代码生成"],
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
                并发支持: "高"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["opensource", "china", "reasoning"],
            category: ["tier2", "opensource", "china", "reasoning"],
            url: "https://bailian.console.aliyun.com",
            chinaAccessible: true
        },
        {
            id: "doubao-seed-2.0-pro",
            name: "豆包 Doubao-Seed-2.0-Pro",
            provider: "字节跳动",
            providerKey: "bytedance",
            providerLogo: "豆",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 3.20,
            outputPrice: 16.00,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["Seed 2.0系列", "128K上下文", "缓存命中¥0.8", "Batch 45%折扣"],
            specialties: "字节跳动最新旗舰，¥3.2/¥16（百万tokens），128K上下文，缓存命中¥0.8/M，Batch调用45%折扣，综合性能匹敌GPT-5.2和Gemini 3 Pro",
            scenarios: ["多模态对话", "代码生成", "长文档分析", "复杂推理"],
            capabilities: {
                coding: 5,
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
            id: "doubao-seed-2-0-lite",
            name: "豆包 Doubao-Seed-2.0-Lite",
            provider: "字节跳动",
            providerKey: "bytedance",
            providerLogo: "豆",
            tier: 3,
            tierLabel: "经济实惠",
            inputPrice: 0.60,
            outputPrice: 3.66,
            contextWindow: 64000,
            contextLabel: "64K",
            features: ["全模态理解升级", "视频/图像/音频/文本", "64K上下文", "缓存命中¥0.15", "Batch 50%折扣"],
            specialties: "2026年5月6日升级为豆包家族首款全模态理解模型，原生支持视频、图像、音频、文本四大模态统一理解，Agent/Coding/GUI能力同步升级，同等算力成本下多模态理解超越前代Pro版本。¥0.6/¥3.66（百万tokens），64K上下文，缓存命中¥0.15/M，Batch调用50%折扣，性价比极高",
            scenarios: ["日常对话", "内容创作", "高频任务"],
            capabilities: {
                coding: 4,
                reasoning: 3,
                chinese: 5,
                multimodal: 3,
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
            badges: ["china", "value", "new"],
            category: ["tier3", "china", "value"],
            url: "https://www.volcengine.com/product/doubao",
            chinaAccessible: true
        },
        {
            id: "wenxin-5-1",
            name: "文心大模型 5.1",
            provider: "百度",
            providerKey: "baidu",
            providerLogo: "百",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 4.00,
            outputPrice: 18.00,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["Arena搜索国内第一", "Agent能力超DeepSeek V4 Pro", "推理AIME26得分99.6", "预训练成本仅业界6%"],
            specialties: "2026年5月9日发布。预训练成本仅同规模模型的6%，总参数压缩至文心5.0的1/3，Arena搜索榜全球第4、国内第1。Agent能力超越DeepSeek-V4-Pro，推理AIME26得分99.6（仅次Gemini 3.1 Pro）。API定价（千帆平台）：输入≤32K为¥4/百万tokens，输出¥18/百万tokens；32K-128K输入¥6、输出¥22。阶梯计费",
            scenarios: ["企业应用", "搜索增强", "Agent任务", "创意写作"],
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
            badges: ["china", "new", "hot"],
            category: ["tier1", "china", "reasoning"],
            url: "https://cloud.baidu.com",
            chinaAccessible: true
        },
        {
            id: "hunyuan-hy3",
            name: "混元 Hy3 Preview",
            provider: "腾讯",
            providerKey: "tencent",
            providerLogo: "腾",
            tier: 1,
            tierLabel: "顶级旗舰",
            inputPrice: 3.98,
            outputPrice: 15.90,
            contextWindow: 256000,
            contextLabel: "256K",
            features: ["快慢思考融合", "295B MoE架构", "Agent能力突出", "开源", "HY 2.0 Think"],
            specialties: "4月23日发布，姚顺雨领衔重建后首个模型。官方API定价已更新为HY 2.0 Think价格：0-32K输入¥3.975/百万tokens、输出¥15.9；32K-128K输入¥5.3、输出¥21.2。295B总参数/21B激活，快慢思考融合MoE",
            scenarios: ["复杂推理", "智能体任务", "代码生成", "指令遵循"],
            capabilities: {
                coding: 5,
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
            badges: ["china", "hot", "new", "opensource"],
            category: ["tier1", "china", "coding", "reasoning"],
            url: "https://console.cloud.tencent.com/tokenhub/text?modelId=hy3-preview",
            chinaAccessible: true
        },
        {
            id: "hunyuan-pro",
            name: "混元 Standard",
            provider: "腾讯",
            providerKey: "tencent",
            providerLogo: "腾",
            tier: 2,
            tierLabel: "性价比首选",
            inputPrice: 0.125,
            outputPrice: 0.625,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["大幅降价87.5%", "腾讯生态", "多模态", "实时交互"],
            specialties: "腾讯2026年降价87.5%，¥0.125/¥0.625（百万tokens），与腾讯生态深度整合",
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
            badges: ["china", "new", "hot"],
            category: ["tier2", "multimodal", "china", "value"],
            url: "https://cloud.tencent.com",
            chinaAccessible: true
        },
        {
            id: "hunyuan-lite",
            name: "混元 Lite",
            provider: "腾讯",
            providerKey: "tencent",
            providerLogo: "腾",
            tier: 3,
            tierLabel: "免费使用",
            inputPrice: 0,
            outputPrice: 0,
            contextWindow: 128000,
            contextLabel: "128K",
            features: ["完全免费", "腾讯生态", "快速响应", "轻量级"],
            specialties: "混元Lite版完全免费，适合测试验证和小规模应用",
            scenarios: ["测试验证", "轻量对话", "腾讯生态"],
            capabilities: {
                coding: 3,
                reasoning: 3,
                chinese: 5,
                multimodal: 3,
                speed: 5,
                stability: 5
            },
            实测数据: {
                响应速度: "极快",
                稳定性: "极稳定",
                国内访问: "直连",
                并发支持: "中"
            },
            supports: {
                streaming: true,
                functionCall: true,
                rag: true
            },
            badges: ["free", "china"],
            category: ["free", "china", "value"],
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
