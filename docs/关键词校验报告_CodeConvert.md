# CodeConvert 关键词校验报告

> 校验日期：2026-01-14
>
> 项目名称：CodeConvert (mu-code-convert)
>
> 校验依据：关键词研究 SOP（工具站版）v1.0

---

## 一、校验概述

### 1.1 项目信息

| 项目 | 内容 |
|:--|:--|
| 目标站点 | codeconvert.com |
| 站点类型 | 编码转换工具站 |
| 目标用户 | 程序员、学生、密码学爱好者 |
| 工具数量 | 7个转换工具 |
| 主要语言 | 英文 |

### 1.2 校验范围

- 首页关键词配置
- 7个工具页面关键词配置
- URL结构
- 页面元素（Title、Description、Keywords）
- 关键词覆盖度评估

---

## 二、第一步：核心关键词校验

### 2.1 当前核心关键词清单

根据 `src/lib/seo.ts` 配置，提取当前各页面的核心关键词：

| 页面 | 当前主关键词 | Keywords配置 |
|:--|:--|:--|
| 首页 | encoder, decoder, converter | encoder, decoder, converter, morse code, base64, binary, hex |
| 摩斯密码 | morse code translator | morse code translator, morse code converter, text to morse, morse to text, morse code audio |
| Base64 | base64 encoder | base64 encoder, base64 decoder, base64 converter, encode base64, decode base64 |
| 二进制 | binary converter | binary converter, text to binary, binary to text, binary translator, binary code |
| 十六进制 | hex converter | hex converter, text to hex, hex to text, hexadecimal converter |
| URL编码 | url encoder | url encoder, url decoder, encode url, decode url, urlencode |
| 凯撒密码 | caesar cipher | caesar cipher, rot13, caesar cipher decoder, caesar cipher encoder |
| HTML实体 | html entities | html entities, html encoder, html decoder, html escape |

### 2.2 核心词评估（按SOP标准）

| 核心关键词 | 相关性 | 商业价值 | 可实现性 | 评估 |
|:--|:--|:--|:--|:--|
| morse code translator | ⭐⭐⭐⭐⭐ 强相关 | 中等 | 中等 | ✅ 合格 |
| base64 encoder | ⭐⭐⭐⭐⭐ 强相关 | 中等 | 中等 | ✅ 合格 |
| binary converter | ⭐⭐⭐⭐⭐ 强相关 | 低 | 较易 | ✅ 合格 |
| hex converter | ⭐⭐⭐⭐⭐ 强相关 | 低 | 较易 | ✅ 合格 |
| url encoder | ⭐⭐⭐⭐⭐ 强相关 | 中等 | 中等 | ✅ 合格 |
| caesar cipher | ⭐⭐⭐⭐⭐ 强相关 | 低 | 较易 | ✅ 合格 |
| html entities | ⭐⭐⭐⭐⭐ 强相关 | 低 | 较易 | ✅ 合格 |

### 2.3 核心词问题与建议

#### ✅ 优点
1. 核心词选择准确，与产品功能高度匹配
2. URL结构合理，包含完整关键词（如 `/morse-code-translator`）
3. 每个工具都有明确的核心词定位

#### ⚠️ 问题与改进建议

| 问题 | 当前情况 | 建议改进 |
|:--|:--|:--|
| 首页核心词过于泛化 | "encoder, decoder, converter" | 添加更具体的词如 "online encoder decoder", "free text converter" |
| 缺少 "online" 修饰词 | 部分标题缺少 | 建议 Title 统一添加 "Online" 强化搜索意图匹配 |
| 缺少 "free" 修饰词 | 仅在 Description 中出现 | 可在 Title 中适当添加 "Free" |

---

## 三、第二步：长尾关键词校验

### 3.1 当前长尾词覆盖情况

#### 摩斯密码 (morse-code-translator)

| 维度 | 已覆盖 | 缺失 |
|:--|:--|:--|
| 功能 | text to morse, morse to text, morse code audio | morse code decoder, morse code generator |
| 场景 | - | morse code online free, morse code beep |
| 设备 | - | morse code translator online, morse code app |
| 问题 | - | how to read morse code, what is morse code |

#### Base64 (base64-encoder)

| 维度 | 已覆盖 | 缺失 |
|:--|:--|:--|
| 功能 | base64 encoder, base64 decoder, encode base64 | base64 encode string, base64 decode online |
| 场景 | - | base64 image encoder, base64 file encoder |
| 设备 | - | base64 online tool, base64 converter online |
| 问题 | - | what is base64, how to decode base64 |

#### 二进制 (binary-converter)

| 维度 | 已覆盖 | 缺失 |
|:--|:--|:--|
| 功能 | text to binary, binary to text | binary translator online, ascii to binary |
| 场景 | - | binary code translator, binary string converter |
| 问题 | - | how to convert text to binary, what is binary code |

#### 十六进制 (hex-converter)

| 维度 | 已覆盖 | 缺失 |
|:--|:--|:--|
| 功能 | text to hex, hex to text | hex to ascii, ascii to hex |
| 场景 | - | hex converter online, hex to text online |
| 问题 | - | how to convert hex to text |

#### URL编码 (url-encoder)

| 维度 | 已覆盖 | 缺失 |
|:--|:--|:--|
| 功能 | url encoder, url decoder, urlencode | url encode online, percent encoding |
| 场景 | - | url encode special characters, encode url string |
| 问题 | - | what is url encoding, how to encode url |

#### 凯撒密码 (caesar-cipher)

| 维度 | 已覆盖 | 缺失 |
|:--|:--|:--|
| 功能 | caesar cipher decoder, caesar cipher encoder, rot13 | caesar cipher solver, caesar shift cipher |
| 场景 | - | caesar cipher online, caesar cipher brute force |
| 问题 | - | how does caesar cipher work, what is rot13 |

#### HTML实体 (html-entities)

| 维度 | 已覆盖 | 缺失 |
|:--|:--|:--|
| 功能 | html encoder, html decoder, html escape | html entity encoder, html special characters |
| 场景 | - | html encode online, escape html characters |
| 问题 | - | what are html entities, how to encode html |

### 3.2 长尾词覆盖度评分

| 页面 | 当前覆盖 | 建议覆盖 | 覆盖率 | 评级 |
|:--|:--|:--|:--|:--|
| 摩斯密码 | 5个 | 12个 | 42% | ⚠️ 待改进 |
| Base64 | 5个 | 12个 | 42% | ⚠️ 待改进 |
| 二进制 | 5个 | 10个 | 50% | ⚠️ 待改进 |
| 十六进制 | 4个 | 10个 | 40% | ⚠️ 待改进 |
| URL编码 | 5个 | 10个 | 50% | ⚠️ 待改进 |
| 凯撒密码 | 4个 | 10个 | 40% | ⚠️ 待改进 |
| HTML实体 | 4个 | 10个 | 40% | ⚠️ 待改进 |

**总体长尾词覆盖度：约 43%，需要补充**

---

## 四、第三步：竞品关键词分析（建议执行）

### 4.1 主要竞品识别

| 竞品 | 类型 | 特点 |
|:--|:--|:--|
| rapidtables.com | 综合转换平台 | 工具齐全，DR高 |
| convertstring.com | 字符串转换 | 专注度高 |
| onlinetexttools.com | 在线文本工具 | 长尾词覆盖好 |
| codebeautify.org | 代码美化工具集 | 功能丰富 |
| morsecode.world | 摩斯密码专站 | 细分领域深耕 |

### 4.2 竞品分析建议

**建议使用以下工具进行竞品关键词分析：**

1. **免费工具**：
   - Google Search Console（自己网站数据）
   - Ubersuggest（3次/天免费）
   - AnswerThePublic（问题类词汇）

2. **分析维度**：
   - 竞品排名词
   - 竞品未覆盖词（差异化机会）
   - 内容结构对比

---

## 五、第四步：关键词分类与筛选

### 5.1 按搜索意图分类

#### 导航型（找工具）
- ✅ 已覆盖：morse code translator, base64 encoder, binary converter, hex converter, url encoder
- ❌ 缺失：online encoder tools, free converter website

#### 信息型（想了解）
- ❌ 缺失（需通过博客覆盖）：
  - what is morse code
  - how to read binary
  - what is base64 encoding
  - caesar cipher explained

#### 交易型（想完成）
- ✅ 已覆盖：text to morse, encode base64, convert to binary
- ⚠️ 可补充：convert text online free, decode now

#### 商业型（比较选择）
- ❌ 缺失（可通过博客覆盖）：
  - best morse code translator
  - base64 vs hex
  - online converter comparison

### 5.2 按漏斗阶段分类

```
认知阶段（顶部）- 需要博客内容支撑
├── what is morse code
├── why use base64 encoding
└── binary code explained

考虑阶段（中部）- 需要对比文章
├── best online encoder
├── morse code vs semaphore
└── encoding format comparison

决策阶段（底部）- 当前已覆盖 ✅
├── morse code translator
├── base64 encoder online
└── convert text to binary
```

---

## 六、第五步：优先级排序

### 6.1 SEO关键词优先级矩阵

```
                    搜索量
                 高         低
            ┌─────────┬─────────┐
        低  │ P0 优先  │ P2 内容  │
  竞争度    │morse code│what is  │
            │translator│morse    │
            ├─────────┼─────────┤
        高  │ P1 长期  │ P3 观望  │
            │base64   │encoding │
            │encoder  │tools    │
            └─────────┴─────────┘
```

### 6.2 执行优先级清单

#### P0 - 立即优化（本周）

| 关键词 | 当前状态 | 优化动作 |
|:--|:--|:--|
| morse code translator online | 未覆盖 | 添加到 Title/Description |
| base64 encoder decoder online | 未覆盖 | 添加到 Title/Description |
| binary converter online free | 未覆盖 | 添加到 Keywords |
| hex to text converter | 部分覆盖 | 强化 Description |
| url encoder online | 未覆盖 | 添加到 Title |
| caesar cipher decoder online | 未覆盖 | 添加到 Keywords |
| html entity encoder online | 未覆盖 | 添加到 Keywords |

#### P1 - 计划优化（2周内）

| 关键词 | 优化方式 |
|:--|:--|
| text to morse code audio | 页面内容优化 |
| ascii to binary converter | 添加到 Keywords |
| rot13 decoder online | 添加到 Keywords |
| percent encoding decoder | 添加到 Keywords |

#### P2 - 内容创作（1月内）

建议创建博客文章覆盖以下信息型关键词：

| 关键词 | 建议文章标题 |
|:--|:--|
| what is morse code | "Morse Code Guide: History, Usage, and How to Learn" |
| how to decode base64 | "Base64 Encoding Explained: A Complete Beginner's Guide" |
| binary code for beginners | "Understanding Binary Code: From Basics to Practice" |
| caesar cipher history | "The History of Caesar Cipher and How It Works" |

---

## 七、第六步：落地策略建议

### 7.1 页面-关键词映射优化

#### 首页 (/)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | CodeConvert - Free Online Encoding & Decoding Tools | CodeConvert - Free Online Encoder Decoder Tools |
| Description | Free online tools to convert... | 保持，可加 "instant" |
| Keywords | encoder, decoder, converter... | 添加 "online tools", "text converter", "code translator" |
| H1 | CodeConvert | 保持 |

#### 摩斯密码页 (/morse-code-translator)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | Morse Code Translator - Convert Text to Morse Code Online | ✅ 已包含 "Online"，保持 |
| Description | Free online Morse code translator... | 添加 "instant", "no download" |
| Keywords | 5个 | 添加 "morse code decoder", "morse code audio player", "sos morse code" |

#### Base64页 (/base64-encoder)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | Base64 Encoder/Decoder - Encode & Decode Base64 Online | ✅ 保持 |
| Keywords | 5个 | 添加 "base64 string encoder", "base64 online tool", "base64 decode string" |

#### 二进制页 (/binary-converter)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | Binary Converter - Text to Binary & Binary to Text | 添加 "Online Free" |
| Keywords | 5个 | 添加 "ascii to binary", "binary code generator", "8-bit binary converter" |

#### 十六进制页 (/hex-converter)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | Hex Converter - Text to Hexadecimal & Hex to Text | 添加 "Online" |
| Keywords | 4个 | 添加 "hex to ascii", "hexadecimal encoder", "hex string converter" |

#### URL编码页 (/url-encoder)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | URL Encoder/Decoder - Encode & Decode URLs Online | ✅ 保持 |
| Keywords | 5个 | 添加 "percent encoding", "url escape", "url encode special characters" |

#### 凯撒密码页 (/caesar-cipher)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | Caesar Cipher Decoder - ROT13 & Caesar Cipher Tool | 添加 "Online" |
| Keywords | 4个 | 添加 "caesar cipher solver", "rot13 translator", "caesar shift decoder" |

#### HTML实体页 (/html-entities)

| 元素 | 当前 | 建议优化 |
|:--|:--|:--|
| Title | HTML Entities Encoder/Decoder - Encode HTML Characters | 添加 "Online" |
| Keywords | 4个 | 添加 "html special characters encoder", "escape html online", "html entity converter" |

### 7.2 On-Page SEO 检查清单

| 页面 | Title含主词 | Description含主词 | H1含主词 | URL含主词 | 首段含主词 |
|:--|:--|:--|:--|:--|:--|
| 首页 | ✅ | ✅ | ✅ | - | ✅ |
| 摩斯密码 | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base64 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 二进制 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 十六进制 | ✅ | ✅ | ✅ | ✅ | ✅ |
| URL编码 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 凯撒密码 | ✅ | ✅ | ✅ | ✅ | ✅ |
| HTML实体 | ✅ | ✅ | ✅ | ✅ | ✅ |

**基础 On-Page SEO 配置良好！**

---

## 八、校验总结与行动计划

### 8.1 总体评估

| 评估维度 | 得分 | 说明 |
|:--|:--|:--|
| 核心词定位 | ⭐⭐⭐⭐ 80分 | 核心词选择准确，URL结构好 |
| 长尾词覆盖 | ⭐⭐⭐ 43分 | 覆盖不足，需要补充 |
| Title/Description | ⭐⭐⭐⭐ 75分 | 基本合格，可优化 |
| 关键词多样性 | ⭐⭐⭐ 60分 | 每页4-5个词，可扩展 |
| 搜索意图匹配 | ⭐⭐⭐⭐ 80分 | 交易型意图覆盖好 |
| 内容型关键词 | ⭐⭐ 20分 | 缺少博客/内容支撑 |

**综合评分：60分 - 基础合格，有较大提升空间**

### 8.2 立即行动项（Quick Wins）

#### 高优先级（本周完成）

1. **优化 Title 标签**
   - 二进制页：添加 "Online Free"
   - 十六进制页：添加 "Online"
   - 凯撒密码页：添加 "Online"
   - HTML实体页：添加 "Online"

2. **扩展 Keywords 配置**
   - 每个页面从当前 4-5 个扩展到 8-10 个
   - 添加 "online", "free", "instant" 等修饰词组合

3. **优化 Description**
   - 添加 "instant", "no registration", "no download" 等卖点词

#### 中优先级（2周内）

1. **页面内容优化**
   - 在页面增加 FAQ 区块，覆盖问题类长尾词
   - 添加工具使用说明，自然包含长尾关键词

2. **内部链接优化**
   - 工具间相互推荐
   - 添加 "Related Tools" 区块

#### 长期规划（1-3月）

1. **博客内容建设**
   - 创建 `/blog` 目录
   - 每周发布 1-2 篇信息型内容
   - 覆盖 "what is", "how to", "vs" 类关键词

2. **新页面/功能规划**
   - 考虑添加更多转换工具扩展关键词覆盖
   - 如：ASCII Art Generator, Unicode Converter 等

---

## 九、下一步建议

### 9.1 即时执行

1. 修改 `src/lib/seo.ts`，扩展各页面关键词配置
2. 优化部分页面 Title，添加 "Online" 修饰词
3. 丰富 Description，添加差异化卖点

### 9.2 短期执行

1. 使用 Ubersuggest/AnswerThePublic 挖掘更多长尾词
2. 分析 Google Search Console 数据（上线后）
3. 对标竞品 rapidtables.com 进行关键词差距分析

### 9.3 持续监控

| 监控项 | 工具 | 频率 |
|:--|:--|:--|
| 关键词排名 | Google Search Console | 每周 |
| 自然流量 | Google Analytics | 每周 |
| 竞品动态 | Ubersuggest | 每月 |
| 新关键词机会 | AnswerThePublic | 每月 |

---

## 十、附录：建议补充的关键词完整清单

### 摩斯密码页

```
主词：morse code translator
扩展词：
- morse code translator online
- morse code translator online free
- morse code decoder
- morse code encoder
- text to morse code
- morse to text
- morse code audio player
- morse code sound
- sos morse code
- learn morse code
- morse code alphabet
- morse code beep sound
```

### Base64页

```
主词：base64 encoder
扩展词：
- base64 encoder decoder
- base64 encode online
- base64 decode online
- base64 string encoder
- base64 text encoder
- base64 to text
- text to base64
- base64 converter online
- decode base64 string
- base64 encoding tool
```

### 二进制页

```
主词：binary converter
扩展词：
- binary converter online
- text to binary converter
- binary to text converter
- binary translator
- ascii to binary
- binary to ascii
- binary code converter
- 8-bit binary converter
- binary text decoder
- convert text to binary online
```

### 十六进制页

```
主词：hex converter
扩展词：
- hex converter online
- hex to text converter
- text to hex converter
- hexadecimal converter
- hex to ascii
- ascii to hex
- hex string converter
- hexadecimal encoder
- hex decoder online
- convert hex to text
```

### URL编码页

```
主词：url encoder
扩展词：
- url encoder online
- url encoder decoder
- url encode online
- url decode online
- percent encoding
- url escape
- encode url string
- url encode special characters
- urlencode online
- decode url online
```

### 凯撒密码页

```
主词：caesar cipher
扩展词：
- caesar cipher decoder
- caesar cipher encoder
- caesar cipher online
- caesar cipher solver
- rot13 decoder
- rot13 encoder
- rot13 translator
- caesar shift cipher
- caesar cipher brute force
- caesar cipher decryptor
```

### HTML实体页

```
主词：html entities
扩展词：
- html entities encoder
- html entities decoder
- html entity converter
- html special characters encoder
- escape html online
- html encode online
- html escape tool
- encode html characters
- html entity decoder online
- unescape html
```

---

> 报告生成时间：2026-01-14
>
> 校验人：Claude AI
>
> 下次校验建议时间：上线后 2 周
