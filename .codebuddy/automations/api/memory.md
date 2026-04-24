# 大模型API数据每日更新 - 执行记录

## 执行时间
2026-04-24 06:00

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: 0408c5d)
- ❌ Git push 失败 (GitHub连接超时，连续3次重试失败)

## 更新内容
- 版本更新: v2.2.5 → v2.3.0
- **DeepSeek V4**（新增加入tier1旗舰）：
  * 万亿参数MoE-v2架构，激活参数370B
  * $0.30/$0.50（百万tokens），约GPT-5的1/18
  * 256K上下文，原生Function Calling+JSON Mode
  * SWE-bench 58.2, HumanEval 93.5, MATH-500 96.1
  * 深度适配华为昇腾950PR，开源MIT协议
- **混元 Hy3 Preview**（4月23日发布，新增加入tier1旗舰）：
  * 姚顺雨领衔混元重建后首个模型
  * 295B总参数/21B激活，快慢思考融合MoE
  * 256K上下文，API定价¥1.2/¥4（0-16K）、¥1.6/¥6.4（16K-32K）、¥2/¥8（32K-256K）
  * Token Plan套餐最低28元/月，开源
- **Gemini 3.1 Flash-Lite**（新增加入tier3）：
  * Google称最具性价比模型
  * $0.25/$1.50，1M上下文，Batch/Flex半价
- **Claude Opus 4.7 特性更新**：
  * SWE-bench Pro 64.3%（4.6为53.4%），4月16日发布确认
  * 价格维持$5/$25不变
- **DeepSeek V3.2 价格修正**：输入$0.27→$0.28，输出$0.41→$0.42

## 价格验证结果
- OpenAI: GPT-6 $2.50/$12.00 无变动（4月14日发布确认）
- Anthropic: Claude Opus 4.7 $5/$25，Sonnet 4.6 $3/$15，Haiku 4.5 $1/$5 无变动
- Google: Gemini 3.1 Pro $2/$12，2.5 Pro $1.25/$10，2.5 Flash $0.30/$2.50 无变动
- DeepSeek: V3.2微调$0.28/$0.42，R1 $0.55/$2.19 无变动
- 月之暗面: Kimi K2.6, K2.5 价格无变动
- 阿里云、百度、讯飞、字节豆包：无重大变动

## 行业动态
- DeepSeek V4正式发布（4月下旬），万亿参数MoE-v2，深度适配华为昇腾950PR
- 腾讯混元3.0 (Hy3 preview) 4月23日发布，姚顺雨首秀，295B MoE开源
- Claude Opus 4.7 4月16日发布，SWE-bench Pro 64.3%编程新SOTA
- Google发布Gemini 3.1 Flash-Lite，称最具性价比模型
- 阿里云/百度智能云4月18日起算力涨价5%-34%
- DeepSeek正洽谈首轮外部融资（腾讯/阿里），估值超200亿美元

## 待处理
Git push 需手动重试或等待网络恢复
Commit ID: 0408c5d

---

## 执行时间
2026-04-23 06:00

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: ad7719c)
- ✅ Git push 成功

## 更新内容
- 版本更新: v2.2.4 → v2.2.5
- **智谱GLM-5.1**（4月8日发布）：新增为tier1旗舰模型
  * 全球首个验证8小时持续工作的开源模型
  * 编程能力达Claude Opus 4.6的94.6%，价格仅1/7
  * 200K上下文，SWE-bench长任务国产SOTA
  * 价格 $6.90/$22.90（百万tokens），约¥6.9/¥22.9

## 价格验证结果
- OpenAI: GPT-6, o3, o4-mini, GPT-4.1系列 无变动
- Anthropic: Claude Opus 4.7, Sonnet 4.6, Haiku 4.5 无变动
- Google: Gemini 3.1 Pro, 2.5系列 无变动（4月起Pro转付费，定价不变）
- DeepSeek: V3.2, R1 无变动（V4截至今日仍未正式发布）
- 月之暗面: Kimi K2.6, K2.5 价格无变动
- 腾讯混元3.0: 预计本周发布（截至今日尚未正式发布）
- 百度、讯飞、字节豆包：无重大变动

## 行业动态
- DeepSeek V4与腾讯混元3.0将于本周内同步发布（倒计时中）
- 智谱年内三度提价，累计涨幅超80%，国产模型集体放弃价格战
- DeepSeek据报道正洽谈首轮外部融资（腾讯/阿里），估值超200亿美元
- Gemini Pro系列4月1日起移出免费层，Flash保留免费配额

---

## 执行时间
2026-04-22 11:15

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: 059cd40)
- ✅ Git push 成功（同时推送上次积压commit）

## 更新内容
- 版本更新: v2.2.3 → v2.2.4
- **Kimi K2.6**（月之暗面 4月20日发布）：升级为tier1旗舰，价格涨58%（输入$0.95，输出$4.00），长程编码13小时，开源可商用，多项基准超GPT-5.4
- **Kimi K2.5**（原K2-Thinking）：保留tier2，新增原生多模态+Batch API说明
- **Qwen3.6-Max-Preview**（阿里云 4月20日发布）：替代Qwen3 Max，1万亿MoE参数，262K上下文，Agent编程SOTA

## 价格验证结果
- OpenAI: GPT-6, o3, o4-mini 价格无变动
- Anthropic: Claude Opus 4.7, Sonnet 4.6, Haiku 4.5 价格无变动
- Google: Gemini 3.1 Pro, 2.5系列价格无变动
- DeepSeek: V3.2, R1 无变动，V4尚未发布（预计本周内）
- 百度、腾讯、讯飞、智谱无重大变动

## 行业动态
- Kimi K2.6 & Qwen3.6-Max同日发布（4月20日），国产旗舰再度交锋
- 月之暗面首次上调旗舰定价，算力成本开始传导
- DeepSeek V4预计4月下旬发布（1.6万亿参数，国产芯片适配）

---

## 执行时间
2026-04-21 15:37

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: 7a3c6a9)
- ❌ Git push 失败 (网络连接问题 Empty reply / Connection reset)

## 更新内容
- 版本更新: v2.2.2 → v2.2.3
- GPT-5.4 → GPT-6 (2026-04-14正式发布，代号Spud)
  * 上下文窗口: 400K → **2M** (200万tokens)
  * 输出价格: $15 → **$12/百万tokens** (降价20%)
  * 新增特性: 性能暴涨40%、Symphony多模态架构、双系统推理、Super-Agent超级智能体
  * 标记为hot/new

## 价格验证结果
以下厂商价格无重大变动（与现有数据一致）：
- OpenAI: o3, o4-mini, GPT-4.1系列
- Anthropic: Claude Opus 4.7 ($5/$25，与4.6定价一致)
- Google: Gemini 2.5 Pro/Flash, Gemini 3.1 Pro
- DeepSeek: V3.2, R1（无降价）
- 国产: 智谱, Kimi, 通义, 豆包, 文心, 混元（无重大变动）

## 行业动态
- **GPT-6发布**: 2026-04-14，5万亿MoE参数，$2.5/$12，2M上下文，被视为"AGI最后一公里"
- DeepSeek V4预计4月下旬发布（梁文锋确认），参数规模1.6万亿，深度适配国产芯片
- 阿里云/百度智能云4月18日起涨价5%-34%
- MiniMax两月Token消耗增长6倍，行业算力紧张

## 待处理
Git push 需手动重试或等待网络恢复
Commit ID: 7a3c6a9

---

## 执行时间
2026-04-20 09:33

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: f25b237)
- ✅ Git push 完成

## 更新内容
- 版本更新: v2.2.1 → v2.2.2
- Claude Opus 4.6 升级为 Claude Opus 4.7 (2026-04-16正式发布)
  * 混合推理、自适应思考、自我纠错等新能力
  * 价格维持 $5/$25/M tokens不变
- Grok 3 升级为 Grok 4.20 (2026-03-31发布)
  * 上下文窗口从128K扩展至2M tokens
  * 价格从 $3/$15 降至 $2/$6/M tokens
  * 业界最低幻觉率、超强Agent工具调用

## 价格验证结果
以下厂商价格无重大变动：
- OpenAI: GPT-5.4, o3, o4-mini, GPT-4.1系列（价格稳定）
- Google: Gemini 2.5 Flash $0.30/$2.50（与现有数据一致）
- DeepSeek: V3.2, R1（无降价）
- 国产: 智谱, Kimi, 通义, 豆包, 文心, 混元（无重大变动）

## 行业动态
- 3月中国日均Token调用量突破140万亿，超越美国
- 阿里云/百度智能云算力产品4月18日起涨价5%-34%
- MiniMax两月Token消耗增长6倍，行业算力紧张

---

## 执行时间
2026-04-17 06:03

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: 89d92d4)
- ✅ Git push 完成

## 更新内容
- 版本更新: v2.2.0 → v2.2.1
- 日期更新: 2026-04-16 → 2026-04-17
- 修复models.js中的语法问题

## 价格验证结果
无重大价格变动，以下厂商价格与现有数据一致：
- OpenAI: GPT-5.4, o3, o4-mini, GPT-4.1系列
- Anthropic: Claude Opus/Sonnet/Haiku 4.6
- Google: Gemini 3.1/2.5系列
- 国产: DeepSeek, 智谱, Kimi, 通义, 豆包, 文心, 混元

## 本周动态
阿里一周连推三款重磅模型，智谱发布全球首个8小时持续工作开源模型

---

## 执行时间
2026-04-16 06:03

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: fa34bfc)
- ❌ Git push 失败 (网络连接问题)

## 更新内容
- 版本更新: v2.1.0 → v2.2.0
- Kimi: K2/K2-Thinking系列替代原256K型号
- 腾讯混元: Standard降价87.5%，新增混元Lite免费版
- 通义千问: 新增Qwen3 Plus/QwQ-Plus型号
- 豆包: Doubao-Seed-1.6-Lite厘计价
- 智谱AI: 新增GLM-4-Plus/GLM-4-FlashX型号

## 价格验证结果
以下厂商价格无变动：
- OpenAI: GPT-5.4, o3, o4-mini, GPT-4.1系列
- Anthropic: Claude Opus/Sonnet/Haiku 4.6
- Google: Gemini 3.1/2.5系列

## 待处理
Git push 需手动重试或等待网络恢复

---

## 执行时间
2026-04-15 06:03

## 执行结果
- ✅ 数据更新完成
- ✅ Git commit 完成 (commit: 67b94ce)
- ❌ Git push 失败 (网络连接问题)

## 更新内容
- 版本更新: v2.0.0 → v2.1.0
- 新增模型: GPT-5.4 Nano
- 日期更新: 2026-04-13 → 2026-04-15

## 价格验证结果
无重大价格变动，以下厂商价格与现有数据一致：
- OpenAI: GPT-5.4, o3, o4-mini, GPT-4.1系列
- Anthropic: Claude Opus/Sonnet/Haiku 4.6
- Google: Gemini 3.1/2.5系列
- 国产: DeepSeek, 智谱, Kimi, 通义, 豆包, 文心, 混元

## 待处理
Git push 需手动重试或等待网络恢复
