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
