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
