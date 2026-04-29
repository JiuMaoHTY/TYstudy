---
title: "InnoDB 架构详解"
date: 2026-04-29
type: learning-note
zone: tech
domain: database
tags: [mysql, innodb, buffer-pool, wal]
level: intermediate
---

# InnoDB 架构详解

## Buffer Pool

内存中的页缓存，减少磁盘 IO。关键参数 `innodb_buffer_pool_size`（通常设为物理内存 70%）。

### 页面淘汰: 改良 LRU

传统 LRU 的问题：一次全表扫描会把热数据刷出去。

InnoDB LRU 分两段：
- **young sublist** (前 5/8): 热数据
- **old sublist** (后 3/8): 新读入的页

新页先放 old 头，再次访问才升到 young → 全表扫描不会污染热数据。

## Change Buffer

对二级索引的变更不立即写磁盘 → 先缓存，等读的时候再 merge。

条件: 二级索引、非唯一（唯一索引要立即检查冲突）

## Double Write Buffer

**问题:** MySQL page 16KB，磁盘 write 4KB → 写一半断电 = 损坏的 page

**解决:** 写数据页前先写 Double Write Buffer（顺序写，2MB）→ crash recovery 可用副本修复

## Redo Log (WAL)

- WAL: 先写日志，再写数据页
- redo log 记录"做了什么修改"，**物理日志**（page-level）
- `innodb_flush_log_at_trx_commit`:
  - 1: 每次事务提交都刷盘 ✅ 安全但慢
  - 2: 每秒刷盘 ⚠️ OS 挂了丢 1s
  - 0: 不主动刷 ⚠️ 最不安全

## Undo Log

- 记录"修改前的数据"，**逻辑日志**
- 用于 MVCC（ReadView 构造旧版本）+ 事务回滚
- 存储在 system tablespace 或独立 undo tablespace

## 实操总结

- Buffer Pool 监控: `SHOW ENGINE INNODB STATUS\G` 看 `Buffer pool hit rate`
- 如果 hit rate < 95% → 需要加大 `innodb_buffer_pool_size`
- Double Write 默认开启，在 SSD 上可考虑关闭（`innodb_doublewrite=0`）, 但一般不关
- redo log 文件大小: `innodb_log_file_size` 建议 1-2GB，太小会导致频繁 checkpoint
