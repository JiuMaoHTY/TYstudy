# 个人专属知识库 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 从零搭建一套高度个性化的终身知识库，Markdown 文件系统 + Git 版本管理 + Web 浏览层，覆盖 7 个专属分区。

**Architecture:** `docs/` 为根目录，按用户 7 大分区组织——`tech/`(技术学习)、`devops/`(运维笔记)、`ai/`(AI本地部署)、`thesis/`(毕设归档)、`interview/`(求职面试)、`life/`(生活杂记)、`games/`(游戏存档)。YAML frontmatter 做元数据，templates/ 驱动快速创建，`.validate.sh` 做格式检查。现有 Web 应用逐步适配。

**Tech Stack:** Markdown + YAML frontmatter, Git, Bash（验证脚本）, VS Code, 现有 HTML/CSS/JS（Web 层）

**文风铁律:** 简洁干货 · 重点加粗 · 自带命令/代码 · 每篇必含「个人实操总结」· 单文件单一主题 · 拒绝通用废话

---

## 文件结构总览

```
docs/
├── README.md                  # 知识库总导航
├── .schema.yaml               # 元数据规范（所有笔记的前置字段定义）
├── .validate.sh               # Frontmatter 格式验证脚本
├── templates/                 # 笔记模板（5种，全部含「个人实操总结」section）
│   ├── daily-log.md           #   日报模板
│   ├── learning-note.md       #   技术学习/运维笔记模板
│   ├── project-doc.md         #   毕设/项目归档模板
│   ├── interview-qa.md        #   面试题解模板
│   └── research-note.md       #   AI部署/研究笔记模板
├── tech/                      # ① 技术学习（后端/分布式/DB/架构）
├── devops/                    # ② 运维笔记（Docker/K8s/Linux/CICD）
├── ai/                        # ③ AI本地部署（LLM工具链/推理/项目）
├── thesis/                    # ④ 毕设归档（开题→实验→答辩）
├── interview/                 # ⑤ 求职面试（八股/算法/面经）
├── life/                      # ⑥ 生活杂记（日报/周记/随想）
├── games/                     # ⑦ 游戏存档（攻略/记录）
└── assets/                    # 静态资源
```

### 分区与用户身份的对应

| 分区目录 | 用户定义 | 专注内容 |
|----------|----------|----------|
| `tech/` | 技术学习 | Go/Java 后端、分布式理论、数据库内核、架构设计 |
| `devops/` | 运维笔记 | Docker 实战、K8s 编排、Linux 诊断、CI/CD 流水线 |
| `ai/` | AI本地部署 | Ollama 模型管理、推理优化、本地 RAG、Prompt 工程 |
| `thesis/` | 毕设归档 | 开题报告、文献笔记、实验数据、答辩 PPT |
| `interview/` | 求职面试 | 八股题库、算法模板、面经复盘、简历版本 |
| `life/` | 生活杂记 | 日报/周记、读书笔记、工具推荐、效率记录 |
| `games/` | 游戏存档 | 游戏攻略、通关心得、配置备份 |

---

### Task 1: 创建核心目录结构

**Files:**
- Create: 全部 7 个分区目录 + templates + assets（约 35 个目录）

- [ ] **Step 1: 批量创建所有目录**

```bash
# 根层级
mkdir -p docs/{templates,assets/{images,diagrams}}

# ① 技术学习
mkdir -p docs/tech/{go,java,python,database,distributed,message-queue,architecture}

# ② 运维笔记
mkdir -p docs/devops/{linux,docker,kubernetes,cicd,monitoring,networking}

# ③ AI本地部署
mkdir -p docs/ai/{model-eval,toolchain,inference-opt,prompt-engineering,projects}

# ④ 毕设归档
mkdir -p docs/thesis/{proposal,literature,implementation,experiments,defense}

# ⑤ 求职面试
mkdir -p docs/interview/{os,network,database,go,java,system-design,algorithm,companies,resume}

# ⑥ 生活杂记
mkdir -p docs/life/2026/04

# ⑦ 游戏存档
mkdir -p docs/games/notes
```

- [ ] **Step 2: 验证所有目录**

```bash
expected_dirs=(
  "docs/tech/go" "docs/tech/database" "docs/tech/distributed"
  "docs/devops/docker" "docs/devops/kubernetes" "docs/devops/linux"
  "docs/ai/toolchain" "docs/ai/projects"
  "docs/thesis/proposal" "docs/thesis/experiments"
  "docs/interview/os" "docs/interview/go" "docs/interview/system-design"
  "docs/life/2026/04"
  "docs/games/notes"
)
failures=0
for d in "${expected_dirs[@]}"; do
  test -d "$d" && echo "PASS: $d" || { echo "FAIL: $d"; failures=$((failures+1)); }
done
echo "Failures: $failures"
```
Expected: Failures: 0

- [ ] **Step 3: 占位文件**

```bash
touch docs/assets/images/.gitkeep
touch docs/assets/diagrams/.gitkeep
```

- [ ] **Step 4: Commit**

```bash
git add docs/
git commit -m "feat: 创建知识库核心目录结构，7个专属分区就位

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 2: 定义元数据规范（.schema.yaml）

**Files:**
- Create: `docs/.schema.yaml`
- Create: `docs/.validate.sh`

- [ ] **Step 1: 编写元数据规范**

`docs/.schema.yaml`：

```yaml
# 个人知识库 · 元数据规范 v1.0
# 所有 .md 笔记必须包含 YAML frontmatter，字段约束如下

types:
  daily-log:
    required: [date, type, zone, tags]
    optional: [mood, energy, summary]
    description: 日报/周记

  learning-note:
    required: [title, date, type, zone, domain, tags, level]
    optional: [source, repo, related]
    description: 技术学习/运维笔记

  project-doc:
    required: [title, date, type, zone, project_name, status, tags]
    optional: [deadline, repo, summary]
    description: 毕设/项目归档

  interview-qa:
    required: [title, date, type, zone, category, difficulty, tags]
    optional: [company, source]
    description: 面试题解

  research-note:
    required: [title, date, type, zone, field, tags]
    optional: [paper_title, paper_url, model_name, key_insight]
    description: AI部署/研究笔记

# ── 字段约束 ──
fields:
  title:         { type: string, max: 80 }
  date:          { type: date,   format: YYYY-MM-DD }
  type:          { enum: [daily-log, learning-note, project-doc, interview-qa, research-note] }
  zone:          { enum: [tech, devops, ai, thesis, interview, life, games] }
  domain:        { enum: [backend, devops, llm, cs-fundamental, architecture, tool, other] }
  category:      { enum: [os, network, database, go, java, python, system-design,
                          algorithm, linux, docker, k8s, cicd, monitoring,
                          llm-theory, llm-inference, prompt-eng, llm-tool] }
  difficulty:    { enum: [easy, medium, hard] }
  level:         { enum: [intro, intermediate, advanced, expert] }
  status:        { enum: [draft, in-progress, done, archived] }
  project_name:  { type: string }
  tags:          { type: list, max_items: 10 }
  mood:          { type: string, max: 20 }
  energy:        { type: int, range: [1, 5] }
```

- [ ] **Step 2: 编写验证脚本**

`docs/.validate.sh`：

```bash
#!/bin/bash
# 验证 docs/ 下所有 .md 文件的 frontmatter 格式
# 用法: bash docs/.validate.sh

errors=0
total=0

for md in $(find docs -name "*.md" -not -path "*/templates/*" -not -path "docs/README.md"); do
  total=$((total + 1))

  # 检查 frontmatter 分隔符
  if ! head -1 "$md" | grep -q "^---$"; then
    echo "  MISSING FRONTMATTER: $md"
    errors=$((errors + 1))
    continue
  fi

  # 检查必填字段
  for field in type zone tags date; do
    if ! head -20 "$md" | grep -q "^${field}:"; then
      echo "  MISSING '$field': $md"
      errors=$((errors + 1))
    fi
  done
done

echo ""
echo "Checked $total files, $errors error(s)"
[ $errors -eq 0 ] && echo "ALL PASS" || echo "FIX REQUIRED"
```

- [ ] **Step 3: 运行验证（此时无 .md 文件，应通过）**

```bash
bash docs/.validate.sh
```
Expected: `Checked 0 files, 0 error(s)` → `ALL PASS`

- [ ] **Step 4: Commit**

```bash
git add docs/.schema.yaml docs/.validate.sh
git commit -m "feat: 定义元数据规范 + frontmatter 验证脚本

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 3: 创建笔记模板（全部含「个人实操总结」section）

**Files:**
- Create: `docs/templates/daily-log.md`
- Create: `docs/templates/learning-note.md`
- Create: `docs/templates/project-doc.md`
- Create: `docs/templates/interview-qa.md`
- Create: `docs/templates/research-note.md`

- [ ] **Step 1: 日报模板** — `docs/templates/daily-log.md`

```markdown
---
date: {{date}}
type: daily-log
zone: life
tags: [{{tags}}]
mood: {{mood}}
energy: {{energy}}
---

# {{date}} 日报

## 今日重点
- 

## 学习记录
### 技术学习
- 

### 运维
- 

## 项目进展
### 毕设
- 

## 遇到的问题 & 解决
| 问题 | 原因 | 解决 |
|------|------|------|
|      |      |      |

## 明日计划
- [ ] 

## 个人实操总结
<!-- 今天亲手做了哪些事？敲了什么命令？踩了什么坑？ -->
-
```

- [ ] **Step 2: 技术/运维笔记模板** — `docs/templates/learning-note.md`

```markdown
---
title: "{{title}}"
date: {{date}}
type: learning-note
zone: {{zone}}
domain: {{domain}}
tags: [{{tags}}]
level: {{level}}
source: {{source}}
---

# {{title}}

## 一句话总结
> 

## 核心概念
- **要点1**：
- **要点2**：

## 实操命令

```bash
# {{命令说明}}

```

## 关键配置

```yaml
# {{配置说明}}

```

## 踩坑记录
| 现象 | 原因 | 解决 |
|------|------|------|
|      |      |      |

## 延伸
- 

## 个人实操总结
<!-- 亲手跑过的命令、验证过的结论、踩过的坑 -->
-
```

- [ ] **Step 3: 毕设/项目模板** — `docs/templates/project-doc.md`

```markdown
---
title: "{{title}}"
date: {{date}}
type: project-doc
zone: {{zone}}
project_name: {{project_name}}
status: {{status}}
tags: [{{tags}}]
deadline: {{deadline}}
repo: {{repo}}
---

# {{title}}

## 项目概述
- **目标**：
- **技术栈**：

## 架构

```
{{架构图 ASCII 或 mermaid}}
```

## 进度

| 日期 | 进展 | 阻碍 | 解决方案 |
|------|------|------|----------|
|      |      |      |          |

## 关键决策记录
| 决策 | 原因 | 影响 |
|------|------|------|
|      |      |      |

## 个人实操总结
<!-- 这个阶段学到了什么？哪些是网上没有的？ -->
-
```

- [ ] **Step 4: 面试题解模板** — `docs/templates/interview-qa.md`

```markdown
---
title: "{{title}}"
date: {{date}}
type: interview-qa
zone: interview
category: {{category}}
difficulty: {{difficulty}}
tags: [{{tags}}]
company: {{company}}
---

# {{title}}

## 题目
> 

## 一句话答案
> 

## 展开
### 核心要点
1. **要点1** —
2. **要点2** —

### 代码示例

```{{lang}}

```

## 追问 & 变形
- **追问1**：？
- **追问2**：？

## 关联题目
- 

## 个人实操总结
<!-- 这道题我面试真被问过吗？当时怎么答的？现在会怎么答？ -->
-
```

- [ ] **Step 5: AI/研究笔记模板** — `docs/templates/research-note.md`

```markdown
---
title: "{{title}}"
date: {{date}}
type: research-note
zone: {{zone}}
field: {{field}}
tags: [{{tags}}]
paper_title: {{paper_title}}
model_name: {{model_name}}
---

# {{title}}

## 背景
> 

## 核心方法/结论
- **发现1**：
- **发现2**：

## 部署/复现

```bash
# 模型拉取

# 推理测试

```

## 评测数据
| 指标 | 值 | 我的环境 |
|------|-----|----------|
|      |     |          |

## 个人实操总结
<!-- 这个模型/工具在我本地跑起来了吗？效果怎么样？和官方宣称的有区别吗？ -->
-
```

- [ ] **Step 6: 验证模板 frontmatter 完整性**

```bash
for f in docs/templates/*.md; do
  head -1 "$f" | grep -q "^---$" && echo "PASS: $f" || echo "FAIL: $f"
done
```
Expected: All 5 PASS

- [ ] **Step 7: Commit**

```bash
git add docs/templates/
git commit -m "feat: 创建5种笔记模板，全部含个人实操总结section

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 4: 创建知识库总导航 README

**Files:**
- Create: `docs/README.md`

- [ ] **Step 1: 编写总导航**

`docs/README.md`：

```markdown
---
title: "知识库总导航"
date: 2026-04-29
type: project-doc
zone: life
project_name: knowledge-base
status: in-progress
tags: [meta, navigation]
---

# 个人知识库

> 计算机科本 · 后端+云原生运维 · 本地大模型玩家 · 毕设+求职进行中

## 7 大专区

| # | 专区 | 路径 | 核心内容 |
|---|------|------|----------|
| ① | 技术学习 | [tech/](tech/) | Go / Java / 数据库 / 分布式 / 架构 |
| ② | 运维笔记 | [devops/](devops/) | Docker / K8s / Linux / CI/CD / 监控 |
| ③ | AI本地部署 | [ai/](ai/) | Ollama / 推理优化 / 本地RAG / Prompt |
| ④ | 毕设归档 | [thesis/](thesis/) | 开题 → 文献 → 实验 → 答辩 |
| ⑤ | 求职面试 | [interview/](interview/) | 八股题库 / 算法模板 / 面经复盘 |
| ⑥ | 生活杂记 | [life/](life/) | 日报 / 周记 / 读书 / 效率工具 |
| ⑦ | 游戏存档 | [games/](games/) | 攻略 / 通关记录 / 配置备份 |

## 使用方式

1. **新建笔记**：从 [templates/](templates/) 复制模板 → 填 frontmatter → 放入对应分区
2. **验证格式**：`bash docs/.validate.sh`
3. **更新索引**：在分区 README 中添加新条目

## 文风约定

- **简洁干货**，不写废话
- **重点加粗**，方便扫读
- **自带命令/代码片段**，可直接复制执行
- **每篇必含「个人实操总结」**，不是网上复制的内容
```

- [ ] **Step 2: 验证链接正确性**

```bash
grep -oP '\[.*?\]\(\K[^)]+' docs/README.md | grep -v '^http' | while read link; do
  target="docs/$link"
  if [ -e "$target" ]; then
    echo "PASS: $link"
  else
    echo "FAIL: $link"
  fi
done
```
Expected: All PASS

- [ ] **Step 3: Commit**

```bash
git add docs/README.md
git commit -m "feat: 知识库总导航 README，7个专属分区入口

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 5: 搭建 ① 技术学习 + ② 运维笔记分区

**Files:**
- Create: `docs/tech/README.md`
- Create: `docs/tech/database/README.md`
- Create: `docs/tech/distributed/README.md`
- Create: `docs/tech/message-queue/README.md`
- Create: `docs/tech/architecture/README.md`
- Create: `docs/tech/go/.gitkeep`
- Create: `docs/tech/java/.gitkeep`
- Create: `docs/tech/python/.gitkeep`
- Create: `docs/devops/README.md`
- Create: `docs/devops/linux/README.md`
- Create: `docs/devops/docker/README.md`
- Create: `docs/devops/kubernetes/README.md`
- Create: `docs/devops/cicd/README.md`
- Create: `docs/devops/monitoring/README.md`
- Create: `docs/devops/networking/README.md`

- [ ] **Step 1: 技术学习导航** — `docs/tech/README.md`

```markdown
---
title: "技术学习"
date: 2026-04-29
type: learning-note
zone: tech
domain: backend
tags: [meta, backend]
level: intermediate
---

# 技术学习

> 后端开发 + 分布式 + 数据库，Go 主力、Java 辅助、Python 工具

## 索引

| 模块 | 路径 | 状态 |
|------|------|------|
| Go | [go/](go/) | ⬜ |
| Java | [java/](java/) | ⬜ |
| Python | [python/](python/) | ⬜ |
| 数据库 | [database/](database/) | 📋 有提纲 |
| 分布式 | [distributed/](distributed/) | 📋 有提纲 |
| 消息队列 | [message-queue/](message-queue/) | 📋 有提纲 |
| 架构设计 | [architecture/](architecture/) | 📋 有提纲 |
```

- [ ] **Step 2: 数据库子模块** — `docs/tech/database/README.md`

```markdown
---
title: "数据库学习索引"
date: 2026-04-29
type: learning-note
zone: tech
domain: backend
tags: [database, index, mysql, redis]
level: intermediate
---

# 数据库

## MySQL

### 必知必会
- [ ] **InnoDB 架构**：Buffer Pool / Change Buffer / Double Write
- [ ] **索引**：B+树原理、聚簇索引 vs 二级索引、覆盖索引、索引下推
- [ ] **锁**：行锁（Record / Gap / Next-Key）、意向锁、MDL
- [ ] **事务**：MVCC（ReadView + Undo Log）、隔离级别实现
- [ ] **日志**：redo log（WAL）、undo log、binlog（ROW vs STATEMENT）
- [ ] **SQL 优化**：EXPLAIN 解读、慢查询分析、索引失效场景
- [ ] **主从复制**：binlog 同步、并行复制、GTID

### 实操清单
- [ ] `EXPLAIN SELECT ...` 逐字段解读笔记
- [ ] 模拟死锁 + `SHOW ENGINE INNODB STATUS` 排查
- [ ] 自建主从复制环境（Docker Compose）

## Redis

### 必知必会
- [ ] **数据结构底层**：SDS / ziplist / listpack / skiplist / hashtable
- [ ] **持久化**：RDB vs AOF vs 混合持久化、BGSAVE 原理
- [ ] **缓存策略**：穿透（布隆过滤器）、击穿（互斥锁/永不过期）、雪崩（随机TTL/多级缓存）
- [ ] **分布式锁**：SETNX + Lua 解锁 → Redlock → Redisson 看门狗
- [ ] **集群**：主从 → 哨兵 → Cluster（hash slot 16384）

### 实操清单
- [ ] `redis-benchmark` 本地压测
- [ ] 哨兵模式 Docker Compose 搭建
- [ ] 用 `redis-cli --bigkeys` 扫一次
```

- [ ] **Step 3: 分布式子模块** — `docs/tech/distributed/README.md`

```markdown
---
title: "分布式系统学习索引"
date: 2026-04-29
type: learning-note
zone: tech
domain: backend
tags: [distributed, index, cap, raft]
level: advanced
---

# 分布式系统

## 理论基石
- [ ] **CAP**：为什么三者不可兼得？实际取舍案例
- [ ] **BASE**：Basically Available + Soft State + Eventually Consistent
- [ ] **一致性模型**：强一致性 / 顺序一致性 / 最终一致性 / 因果一致性

## 共识算法
- [ ] **Raft**：Leader Election + Log Replication + Safety
  - 可视化：<https://raft.github.io/>
  - 动手：写一个 mini-Raft 或 etcd-raft 读源码

## 分布式事务
- [ ] **2PC / 3PC**：流程 & 缺点（同步阻塞、协调者单点）
- [ ] **TCC**：Try → Confirm → Cancel
- [ ] **Saga**：编排式 vs 控制式
- [ ] **本地消息表** + 定时任务 → RocketMQ 事务消息

## 服务治理
- [ ] **服务发现**：注册中心对比（Nacos / Consul / etcd）
- [ ] **负载均衡**：一致性哈希、加权轮询、最少连接
- [ ] **熔断**：熔断器状态机、Hystrix / Sentinel
- [ ] **限流**：计数器 / 滑动窗口 / 令牌桶 / 漏桶
```

- [ ] **Step 4: 消息队列子模块** — `docs/tech/message-queue/README.md`

```markdown
---
title: "消息队列学习索引"
date: 2026-04-29
type: learning-note
zone: tech
domain: backend
tags: [message-queue, kafka, index]
level: intermediate
---

# 消息队列

## 基础
- [ ] **为什么用 MQ**：解耦 / 异步 / 削峰，利弊分析
- [ ] **消息模型**：点对点（Queue）vs 发布订阅（Topic）
- [ ] **可靠性**：生产确认 → Broker 持久化 → 消费确认 + 重试 + 死信

## Kafka（主学）

### 架构
- **Producer** → **Broker**（Topic → Partition → Segment）→ **Consumer Group**
- ZK / KRaft 元数据管理

### 高性能设计
- **顺序写**（追加写 Segment 文件）
- **零拷贝**（sendfile → Page Cache → 网卡）
- **批处理** + 压缩（gzip / snappy / lz4）

### 实操清单
- [ ] Docker Compose 起 Kafka + KafkaUI
- [ ] 用 `kafka-producer-perf-test` 做压测
- [ ] 模拟消费者 Rebalance

## RocketMQ（顺带了解）
- [ ] 架构：NameServer → Broker → Producer/Consumer
- [ ] 事务消息：半消息 + 回查
```

- [ ] **Step 5: 架构设计子模块** — `docs/tech/architecture/README.md`

```markdown
---
title: "架构设计学习索引"
date: 2026-04-29
type: learning-note
zone: tech
domain: architecture
tags: [architecture, design-patterns, microservices]
level: advanced
---

# 架构设计

## 设计模式
- [ ] **单例**：双重检查锁、枚举实现
- [ ] **工厂** vs **抽象工厂**
- [ ] **策略** + **模板方法**：支付/通知场景
- [ ] **责任链**：网关 Filter、审批流
- [ ] **观察者** → **事件驱动**：Spring Event / MQ

## 微服务
- [ ] **拆分原则**：DDD 限界上下文、康威定律
- [ ] **通信**：REST vs gRPC vs 异步消息
- [ ] **API 网关**：认证 / 限流 / 路由 / 聚合
- [ ] **配置中心**：Nacos / Apollo
- [ ] **链路追踪**：OpenTelemetry + Jaeger

## 高并发三板斧
1. **缓存**：多级缓存（本地 Caffeine → Redis → DB），Cache-Aside 模式
2. **异步**：MQ 解耦 + 线程池隔离
3. **分库分表**：ShardingSphere，垂直拆分 → 水平拆分
```

- [ ] **Step 6: 运维笔记导航** — `docs/devops/README.md`

```markdown
---
title: "运维笔记"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [meta, devops, docker, kubernetes]
level: intermediate
---

# 运维笔记

> Docker/K8s 实战为主，Linux 诊断为基础，CI/CD + 监控为生产必备

## 索引

| 模块 | 路径 | 重点 |
|------|------|------|
| Linux | [linux/](linux/) | 性能诊断 + Shell 脚本 |
| Docker | [docker/](docker/) | 容器化 + Dockerfile + Compose |
| Kubernetes | [kubernetes/](kubernetes/) | 编排 + 网络 + 存储 |
| CI/CD | [cicd/](cicd/) | 流水线 + GitOps |
| 监控 | [monitoring/](monitoring/) | Prometheus + Grafana |
| 网络 | [networking/](networking/) | TCP/IP 深入 + 抓包分析 |
```

- [ ] **Step 7: 运维子模块（Docker + K8s + Linux 为核心）**

`docs/devops/docker/README.md`：

```markdown
---
title: "Docker 实战笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [docker, index, container]
level: intermediate
---

# Docker 实战笔记

## 核心原理
- [ ] **UnionFS 分层**：image → container（RO 层 + RW 层）
- [ ] **Namespace 隔离**：PID / NET / MNT / UTS / IPC / User（6 种）
- [ ] **Cgroups 限制**：cpu.shares / memory.limit_in_bytes

## 常用命令（实操速查）

```bash
# 清理
docker system prune -a --volumes

# 调试
docker logs -f --tail 100 <container>
docker exec -it <container> sh
docker inspect <container> | jq .

# 网络
docker network ls
docker network inspect bridge
```

## Dockerfile 最佳实践
1. **多阶段构建**：build → runtime，减小体积
2. **层合并**：RUN 用 && 连接，减少层数
3. **非 root 运行**：USER 1000
4. **健康检查**：HEALTHCHECK 指令
5. **`.dockerignore`**：排除 node_modules / .git

## 个人实操总结
-
```

`docs/devops/kubernetes/README.md`：

```markdown
---
title: "Kubernetes 实战笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [kubernetes, index]
level: advanced
---

# Kubernetes 实战笔记

## 核心资源
- [ ] **Pod**：生命周期、探针（liveness / readiness / startup）、QoS 类
- [ ] **Controller**：Deployment（滚动更新）、StatefulSet（有状态）、DaemonSet
- [ ] **Service**：ClusterIP → NodePort → LoadBalancer，kube-proxy（iptables/IPVS）
- [ ] **Ingress**：Nginx Ingress Controller + 注解
- [ ] **ConfigMap/Secret**：环境变量 / 挂载 / subPath
- [ ] **PV/PVC/StorageClass**：动态供给

## 常用命令（实操速查）

```bash
# 排查
kubectl describe pod <pod>
kubectl logs -f <pod> --previous
kubectl exec -it <pod> -- sh
kubectl top pod/node

# 调试
kubectl run debug --rm -it --image=busybox -- sh
kubectl port-forward svc/<svc> 8080:80
```

## 个人实操总结
-
```

`docs/devops/linux/README.md`：

```markdown
---
title: "Linux 实战笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [linux, index, troubleshooting]
level: intermediate
---

# Linux 实战笔记

## 性能诊断（必会）

```bash
# CPU
top -Hp <pid>         # 线程级
perf top               # 热点函数

# 内存
free -h
vmstat 1

# 磁盘
iostat -x 1
iotop

# 网络
ss -tlnp
tcpdump -i eth0 port 80 -w capture.pcap
```

## Shell 模板

```bash
#!/bin/bash
set -euo pipefail
LOG_FILE="/var/log/myapp.log"

log() { echo "[$(date +'%F %T')] $*"; }
die()  { log "ERROR: $*"; exit 1; }

log "Starting..."
trap 'log "Cleaning up..."' EXIT
```

## 个人实操总结
-
```

- [ ] **Step 8: 其余运维子模块（CI/CD + 监控 + 网络）简述**

`docs/devops/cicd/README.md`：

```markdown
---
title: "CI/CD 笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [cicd, github-actions, gitops]
level: intermediate
---

# CI/CD

- [ ] **GitHub Actions**：workflow 语法、matrix build、cache
- [ ] **GitOps**：ArgoCD 部署原理（Application + 自动同步）
- [ ] **发布策略**：蓝绿 vs 滚动 vs 金丝雀

## 个人实操总结
-
```

`docs/devops/monitoring/README.md`：

```markdown
---
title: "监控笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [monitoring, prometheus, grafana]
level: intermediate
---

# 监控 & 可观测性

- [ ] **Prometheus**：Pull 模型、PromQL、Alertmanager
- [ ] **Grafana**：面板设计、变量、告警
- [ ] **日志**：Loki + Promtail
- [ ] **链路**：OpenTelemetry + Jaeger

## 个人实操总结
-
```

`docs/devops/networking/README.md`：

```markdown
---
title: "网络深入笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [networking, tcp, tcpdump, wireshark]
level: advanced
---

# 网络深入

- [ ] **TCP 深入**：拥塞控制（BBR）、TIME_WAIT 优化、Keep-Alive
- [ ] **TLS 1.3**：1-RTT 握手、0-RTT 恢复
- [ ] **抓包**：tcpdump + Wireshark 实战

## 个人实操总结
-
```

- [ ] **Step 9: 创建占位文件**

```bash
touch docs/tech/{go,java,python}/.gitkeep
```

- [ ] **Step 10: Commit**

```bash
git add docs/tech/ docs/devops/
git commit -m "feat: 搭建技术学习 + 运维笔记分区，含实操索引和命令速查

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 6: 搭建 ③ AI本地部署 + ④ 毕设归档分区

**Files:**
- Create: `docs/ai/README.md`, `docs/ai/toolchain/ollama.md`, `docs/ai/toolchain/open-webui.md`, `docs/ai/projects/README.md`
- Create: `docs/ai/model-eval/.gitkeep`, `docs/ai/inference-opt/.gitkeep`, `docs/ai/prompt-engineering/.gitkeep`
- Create: `docs/thesis/README.md`, `docs/thesis/proposal/.gitkeep`, `docs/thesis/literature/.gitkeep`, `docs/thesis/implementation/.gitkeep`, `docs/thesis/experiments/.gitkeep`, `docs/thesis/defense/.gitkeep`

- [ ] **Step 1: AI本地部署导航** — `docs/ai/README.md`

```markdown
---
title: "AI本地部署"
date: 2026-04-29
type: learning-note
zone: ai
domain: llm
tags: [meta, llm, ollama, local]
level: intermediate
---

# AI本地部署

> 本地大模型玩家，Ollama + Open WebUI + 推理优化 + 本地 RAG

## 当前本地环境

| 组件 | 路径/说明 |
|------|-----------|
| Ollama | 模型管理 & 推理 |
| Open WebUI | `openclaw/docker-compose.yml` |
| CLAW | Claude Code 本地代理 |

## 索引

| 模块 | 路径 | 状态 |
|------|------|------|
| 工具链 | [toolchain/](toolchain/) | ✅ 有笔记 |
| 模型评测 | [model-eval/](model-eval/) | ⬜ |
| 推理优化 | [inference-opt/](inference-opt/) | ⬜ |
| Prompt 工程 | [prompt-engineering/](prompt-engineering/) | ⬜ |
| 项目实战 | [projects/](projects/) | 📋 有想法 |
```

- [ ] **Step 2: Ollama 笔记** — `docs/ai/toolchain/ollama.md`

```markdown
---
title: "Ollama 实操笔记"
date: 2026-04-29
type: learning-note
zone: ai
domain: llm
tags: [ollama, tool, llm]
level: intro
source: 个人实操
---

# Ollama 实操笔记

## 常用命令

```bash
ollama list                  # 已下载模型
ollama pull qwen2.5:7b       # 下载
ollama run qwen2.5:7b        # 交互
ollama serve                 # 启动 API 服务（默认 11434）
ollama rm <model>            # 删除
ollama show <model>          # 模型详情
```

## 我用过的模型

| 模型 | 大小 | 本地表现 |
|------|------|----------|
|      |      |          |

## Modelfile

```dockerfile
FROM qwen2.5:7b
SYSTEM """你是后端开发助手。回答简洁，带代码。"""
PARAMETER temperature 0.7
PARAMETER num_ctx 4096
```

```bash
ollama create my-assistant -f Modelfile
```

## 个人实操总结
-
```

- [ ] **Step 3: Open WebUI 笔记** — `docs/ai/toolchain/open-webui.md`

```markdown
---
title: "Open WebUI 配置笔记"
date: 2026-04-29
type: learning-note
zone: ai
domain: llm
tags: [open-webui, docker, llm]
level: intro
source: 个人实操
---

# Open WebUI 配置笔记

## 部署

```bash
cd openclaw
docker compose up -d
```

## 功能清单
- 多模型切换
- 对话历史导出
- 文档上传 → RAG
- 模型管理（拉取/删除）

## 配置要点
- Web 搜索需 API Key
- 图片生成需对接 Stable Diffusion
- TTS 需配置语音模型

## 个人实操总结
-
```

- [ ] **Step 4: AI 项目想法** — `docs/ai/projects/README.md`

```markdown
---
title: "AI 项目实战"
date: 2026-04-29
type: project-doc
zone: ai
project_name: llm-projects
status: draft
tags: [llm, projects, rag, agent]
---

# AI 项目想法

## 待实现

- [ ] **知识库 RAG 问答**：基于 docs/ 内容，本地检索 + Ollama 回答
- [ ] **简历优化 Agent**：输入 JD + 简历 → 输出优化建议
- [ ] **面试模拟器**：本地 LLM 驱动，分方向（Go/Java/运维）出题追问

## 个人实操总结
-
```

- [ ] **Step 5: 毕设归档导航** — `docs/thesis/README.md`

```markdown
---
title: "毕设归档"
date: 2026-04-29
type: project-doc
zone: thesis
project_name: graduation-thesis
status: in-progress
tags: [meta, graduation]
---

# 毕设归档

## 流程节点

| 阶段 | 目录 | 状态 |
|------|------|------|
| 开题报告 | [proposal/](proposal/) | ⬜ |
| 文献研究 | [literature/](literature/) | ⬜ |
| 系统实现 | [implementation/](implementation/) | ⬜ |
| 实验数据 | [experiments/](experiments/) | ⬜ |
| 答辩准备 | [defense/](defense/) | ⬜ |

## 关键日期

| 节点 | 日期 | 备注 |
|------|------|------|
| 开题 | TBD | |
| 中期 | TBD | |
| 初稿 | TBD | |
| 答辩 | TBD | |
```

- [ ] **Step 6: 占位文件**

```bash
touch docs/ai/{model-eval,inference-opt,prompt-engineering}/.gitkeep
touch docs/thesis/{proposal,literature,implementation,experiments,defense}/.gitkeep
```

- [ ] **Step 7: Commit**

```bash
git add docs/ai/ docs/thesis/
git commit -m "feat: 搭建AI本地部署 + 毕设归档分区

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 7: 搭建 ⑤ 求职面试 + ⑥ 生活杂记 + ⑦ 游戏存档

**Files:**
- Create: `docs/interview/README.md` + 10 个子模块 README
- Create: `docs/life/README.md`
- Create: `docs/games/README.md`

- [ ] **Step 1: 求职面试导航** — `docs/interview/README.md`

```markdown
---
title: "求职面试"
date: 2026-04-29
type: learning-note
zone: interview
domain: cs-fundamental
tags: [meta, interview]
level: intermediate
---

# 求职面试

> 后端+运维方向，Go 主力、Java 辅助，目标中厂及以上

## 八股题库

| 科目 | 路径 | 完成度 |
|------|------|--------|
| 操作系统 | [os/](os/) | 0% |
| 计算机网络 | [network/](network/) | 0% |
| 数据库 | [database/](database/) | 0% |
| Go | [go/](go/) | 0% |
| Java | [java/](java/) | 0% |
| 系统设计 | [system-design/](system-design/) | 0% |

## 其他

| 模块 | 路径 |
|------|------|
| 算法刷题 | [algorithm/](algorithm/) |
| 面经复盘 | [companies/](companies/) |
| 简历 | [resume/](resume/) |
```

- [ ] **Step 2: 各八股子模块提纲（用 checklist 形式）**

`docs/interview/os/README.md`：

```markdown
---
title: "操作系统八股"
date: 2026-04-29
type: learning-note
zone: interview
domain: cs-fundamental
tags: [os, interview]
level: intermediate
---

# 操作系统八股

## 进程 & 线程
- [ ] 进程 vs 线程 vs 协程：区别、切换开销
- [ ] 进程间通信（IPC）：管道 / 共享内存 / 消息队列 / Socket / 信号
- [ ] 孤儿进程 & 僵尸进程：产生原因 & 处理方法
- [ ] 用户态 vs 内核态：系统调用过程

## 内存管理
- [ ] 虚拟内存：页表、TLB
- [ ] 分页 vs 分段
- [ ] 页面置换：LRU / LFU / Clock
- [ ] 内存映射：mmap

## 并发同步
- [ ] 死锁四条件 & 银行家算法
- [ ] 锁：互斥锁 / 读写锁 / 自旋锁 / RCU
- [ ] CAS 原理 & ABA 问题

## IO
- [ ] IO 模型：阻塞 / 非阻塞 / IO 多路复用 / AIO
- [ ] select / poll / epoll：原理 & 对比
- [ ] 零拷贝：sendfile / splice / mmap

## 个人实操总结
-
```

`docs/interview/go/README.md`：

```markdown
---
title: "Go 八股"
date: 2026-04-29
type: learning-note
zone: interview
domain: backend
tags: [go, interview]
level: intermediate
---

# Go 八股

## 语言基础
- [ ] slice vs array：底层结构、扩容机制
- [ ] map：底层哈希表、扩容（evacuate）、并发不安全
- [ ] defer：LIFO 执行、参数预计算
- [ ] interface：iface vs eface、类型断言
- [ ] nil：nil interface ≠ nil（type + value 双字段）

## 并发
- [ ] **Goroutine**：GMP 调度模型（G/M/P）、工作窃取
- [ ] **Channel**：hchan 结构、环形队列、send/recv 阻塞条件
- [ ] **select**：随机性、default non-blocking
- [ ] **Mutex**：正常模式 + 饥饿模式、自旋优化
- [ ] **Context**：树形传递、cancel / deadline / timeout

## 运行时
- [ ] **GC**：三色标记 + 混合写屏障、STW 阶段
- [ ] **内存分配**：TCMalloc 模型（mcache → mcentral → mheap）
- [ ] **逃逸分析**：常见逃逸场景

## 个人实操总结
-
```

`docs/interview/java/README.md`：

```markdown
---
title: "Java 八股"
date: 2026-04-29
type: learning-note
zone: interview
domain: backend
tags: [java, interview]
level: intermediate
---

# Java 八股

## 基础
- [ ] == vs equals、hashCode 约定
- [ ] HashMap：数组+链表+红黑树、put 流程、扩容（1.7→1.8）
- [ ] ConcurrentHashMap：1.7 分段锁 → 1.8 CAS+synchronized
- [ ] ArrayList vs LinkedList
- [ ] 动态代理：JDK vs CGLIB

## JVM
- [ ] **内存模型**：堆 / 栈 / 元空间 / 直接内存
- [ ] **类加载**：双亲委派、打破（Tomcat / SPI）
- [ ] **GC**：Serial / Parallel / CMS / G1 / ZGC
- [ ] **JMM**：volatile、happens-before

## Spring Boot
- [ ] **IoC**：容器启动流程、Bean 生命周期、循环依赖（三级缓存）
- [ ] **AOP**：JDK 动态代理 vs CGLIB
- [ ] **自动配置**：@SpringBootApplication、EnableAutoConfiguration
- [ ] **事务**：@Transactional 失效场景

## 个人实操总结
-
```

`docs/interview/database/README.md`、`docs/interview/network/README.md`、`docs/interview/system-design/README.md`：

```markdown
---
title: "数据库面试八股"
date: 2026-04-29
type: learning-note
zone: interview
domain: backend
tags: [database, interview]
level: intermediate
---

# 数据库面试八股

## MySQL
- [ ] 索引：B+树、聚簇/非聚簇、最左前缀、覆盖索引、索引下推
- [ ] 事务：隔离级别实现（RU / RC / RR / Serializable）
- [ ] MVCC：ReadView + Undo Log
- [ ] 锁：Record Lock / Gap Lock / Next-Key Lock、死锁检测
- [ ] 日志：redo log（WAL + crash recovery）、binlog（ROW vs STATEMENT）
- [ ] 主从：binlog 同步、并行复制（MySQL 8.0 WRITESET）

## Redis
- [ ] 数据结构底层（SDS / ziplist / skiplist）
- [ ] 持久化（RDB fork + COW vs AOF fsync 策略）
- [ ] 缓存问题（穿透 / 击穿 / 雪崩）
- [ ] 分布式锁（SETNX → Redlock → Redisson）
- [ ] 集群（Cluster 16384 slot、MOVED/ASK 重定向）

## 个人实操总结
-
```

- [ ] **Step 3: 生活杂记 + 游戏存档**

`docs/life/README.md`：

```markdown
---
title: "生活杂记"
date: 2026-04-29
type: daily-log
zone: life
tags: [meta, daily]
---

# 生活杂记

## 使用方式
1. 从 `templates/daily-log.md` 复制模板
2. 放入 `life/YYYY/MM/` 目录，按日期命名
3. 每周日做一次周回顾

## 月索引
- [2026年4月](2026/04/)
```

`docs/games/README.md`：

```markdown
---
title: "游戏存档"
date: 2026-04-29
type: project-doc
zone: games
project_name: game-archive
status: draft
tags: [gaming, meta]
---

# 游戏存档

## 在玩

| 游戏 | 平台 | 进度 |
|------|------|------|
|      |      |      |

## 已通关

| 游戏 | 时长 | 评价 |
|------|------|------|
|      |      |      |

## 笔记
见 [notes/](notes/)
```

- [ ] **Step 4: 创建占位文件**

```bash
touch docs/interview/{algorithm,companies,resume}/.gitkeep
touch docs/games/notes/.gitkeep
```

- [ ] **Step 5: 验证所有分区 README 已创建**

```bash
for zone in tech devops ai thesis interview life games; do
  test -f "docs/$zone/README.md" && echo "PASS: docs/$zone/README.md" || echo "FAIL: docs/$zone/README.md"
done
```
Expected: All 7 PASS

- [ ] **Step 6: Commit**

```bash
git add docs/interview/ docs/life/ docs/games/
git commit -m "feat: 搭建求职面试 + 生活杂记 + 游戏存档分区

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 8: 添加 VS Code 工作区配置

**Files:**
- Create: `dayday.code-workspace`

- [ ] **Step 1: 编写工作区文件**

```json
{
  "folders": [
    { "path": ".", "name": "个人知识库" }
  ],
  "settings": {
    "files.exclude": {
      ".claude": true,
      ".git": true
    },
    "editor.wordWrap": "on",
    "markdown.preview.breaks": true,
    "[markdown]": {
      "editor.defaultFormatter": "yzhang.markdown-all-in-one",
      "editor.formatOnSave": true,
      "editor.tabSize": 2
    }
  },
  "extensions": {
    "recommendations": [
      "yzhang.markdown-all-in-one",
      "bierner.markdown-mermaid",
      "shd101wyy.markdown-preview-enhanced",
      "redhat.vscode-yaml",
      "davidanson.vscode-markdownlint"
    ]
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add dayday.code-workspace
git commit -m "feat: 添加 VS Code 工作区配置

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 9: 创建第一篇示例日报

**Files:**
- Create: `docs/life/2026/04/2026-04-29.md`

- [ ] **Step 1: 用模板创建第一篇日报**

```markdown
---
date: 2026-04-29
type: daily-log
zone: life
tags: [knowledge-base, init]
mood: focused
energy: 5
---

# 2026-04-29 日报

## 今日重点
- **从零搭建个人知识库**，7 个专属分区全部就位
- 敲定 Markdown + YAML frontmatter + Git 的技术方案
- 输出 5 种笔记模板，全部含「个人实操总结」section

## 学习记录
### 技术学习
- 重新梳理了 MySQL 八股提纲：InnoDB 架构 → 索引 → 锁 → MVCC → 日志，按这个顺序学最顺
- 分布式系统重点锁定 Raft 共识算法，计划用 etcd-raft 源码辅助理解

### 运维
- Docker UnionFS 分层原理回顾，多阶段构建的镜像体积对比待实操验证

## 项目进展
### 知识库
- [x] 目录结构创建 → Task 1 完成
- [x] 元数据规范 + 验证脚本 → Task 2 完成
- [x] 5 种模板 → Task 3 完成
- [x] 总导航 README → Task 4 完成
- [x] 技术学习 + 运维笔记分区 → Task 5 完成
- [x] AI本地部署 + 毕设归档分区 → Task 6 完成
- [x] 求职面试 + 生活杂记 + 游戏存档 → Task 7 完成

## 遇到的问题 & 解决
| 问题 | 原因 | 解决 |
|------|------|------|
| - | - | - |

## 明日计划
- [ ] 运行完整结构验证
- [ ] 开始填充 MySQL 索引笔记（第一份正式学习笔记）

## 个人实操总结
- 今天从 0 设计了整个知识库结构，核心原则：**文件系统即数据库、模板驱动创建、每篇必含实操总结**。
- 避免陷入「搭框架搭一个月、一篇笔记没写」的陷阱——框架只需一次到位，核心是**持续填充**。
```

- [ ] **Step 2: 运行验证**

```bash
bash docs/.validate.sh
```
Expected: `Checked 1 files, 0 error(s)` → `ALL PASS`

- [ ] **Step 3: Commit**

```bash
git add docs/life/2026/04/2026-04-29.md
git commit -m "docs: 第一篇日报——知识库搭建完成

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 10: 全量结构验证

- [ ] **Step 1: 运行完整性检查**

```bash
#!/bin/bash
echo "=== 目录结构 ==="
dirs=(
  "docs/tech/go" "docs/tech/database" "docs/tech/distributed"
  "docs/devops/docker" "docs/devops/kubernetes" "docs/devops/linux"
  "docs/ai/toolchain"
  "docs/thesis/proposal" "docs/thesis/experiments"
  "docs/interview/os" "docs/interview/go" "docs/interview/system-design"
  "docs/life/2026/04"
  "docs/games/notes"
)
fails=0
for d in "${dirs[@]}"; do
  test -d "$d" && echo "  PASS: $d" || { echo "  FAIL: $d"; fails=$((fails+1)); }
done

echo ""
echo "=== README 文件 ==="
readmes=(
  "docs/README.md"
  "docs/tech/README.md" "docs/tech/database/README.md"
  "docs/tech/distributed/README.md" "docs/tech/message-queue/README.md"
  "docs/tech/architecture/README.md"
  "docs/devops/README.md" "docs/devops/linux/README.md"
  "docs/devops/docker/README.md" "docs/devops/kubernetes/README.md"
  "docs/devops/cicd/README.md" "docs/devops/monitoring/README.md"
  "docs/devops/networking/README.md"
  "docs/ai/README.md" "docs/ai/toolchain/ollama.md"
  "docs/ai/toolchain/open-webui.md" "docs/ai/projects/README.md"
  "docs/thesis/README.md"
  "docs/interview/README.md" "docs/interview/os/README.md"
  "docs/interview/go/README.md" "docs/interview/java/README.md"
  "docs/interview/database/README.md"
  "docs/life/README.md" "docs/life/2026/04/2026-04-29.md"
  "docs/games/README.md"
)
for f in "${readmes[@]}"; do
  test -f "$f" && echo "  PASS: $f" || { echo "  FAIL: $f"; fails=$((fails+1)); }
done

echo ""
echo "=== 模板文件 ==="
for t in daily-log learning-note project-doc interview-qa research-note; do
  test -f "docs/templates/${t}.md" && echo "  PASS: ${t}.md" || { echo "  FAIL: ${t}.md"; fails=$((fails+1)); }
done

echo ""
echo "=== Frontmatter 验证 ==="
bash docs/.validate.sh

echo ""
[ $fails -eq 0 ] && echo "ALL CHECKS PASSED" || echo "$fails FAILURE(S)"
```
Expected: ALL CHECKS PASSED

- [ ] **Step 2: 文件统计**

```bash
echo "Markdown 文件数: $(find docs -name '*.md' | wc -l)"
echo "模板数: $(find docs/templates -name '*.md' | wc -l)"
echo "目录数: $(find docs -type d | wc -l)"
```

---

## 知识库维护 SOP

### 每日
1. 如果当天有学习/实操，从模板复制创建日报 → `life/YYYY/MM/`
2. 新建的技术笔记放对应分区，**必须含 frontmatter 和个人实操总结**
3. 验证：`bash docs/.validate.sh`

### 每周（周日）
1. 回顾本周笔记，在对应分区 README 中打勾标记完成
2. 更新 `docs/README.md` 中「最近更新」列表
3. 清理草稿状态的半成品笔记

### 每月（月初）
1. 对照各分区 README 的 checklist，勾选已完成项
2. 调整下月学习计划优先级
3. Commit 本月所有变更：`git add docs/ && git commit -m "monthly: YYYY-MM 知识库归档"`
