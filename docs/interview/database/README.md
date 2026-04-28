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
