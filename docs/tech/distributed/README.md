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
