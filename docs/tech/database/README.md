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
