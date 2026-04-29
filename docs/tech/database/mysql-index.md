---
title: "MySQL 索引原理"
date: 2026-04-29
type: learning-note
zone: tech
domain: database
tags: [mysql, index, bplus-tree]
level: intermediate
---

# MySQL 索引原理

## B+ 树数据结构

- 非叶子节点只存键值 + 指针，不存数据 → 单节点可存更多键 → 树更矮
- 叶子节点存完整记录（聚簇索引）或主键值（二级索引）
- 叶子节点双向链表连接 → 范围查询直接走链表

```
B+树 vs B树 核心区别：
B树: 非叶子节点也存数据 → 树更宽更矮
B+树: 只有叶子存数据 + 叶节点链表 → 范围查询 O(logN)→O(1)
```

## 聚簇索引 vs 二级索引

| 类型 | 叶子节点内容 | 特点 |
|------|-------------|------|
| 聚簇索引 | 整行数据 | InnoDB 表必有。主键或第一个 UNIQUE NOT NULL |
| 二级索引 | 主键值 | 查询需回表。覆盖索引可免回表 |

**实操:** `EXPLAIN` 观察 Using index（覆盖索引）vs Using where; Using index（回表）

## 最左前缀原则

联合索引 `(a, b, c)` 能匹配：
- ✅ `WHERE a=1` — 走索引
- ✅ `WHERE a=1 AND b=2` — 走索引
- ❌ `WHERE b=2` — 不走
- ❌ `WHERE a=1 ORDER BY c` — a 走索引，c 不能（跳过了 b）

## 索引下推 (ICP)

MySQL 5.6+，存储引擎层就用索引过滤，减少回表次数。

```sql
-- 索引 (zip, last_name)，查询：
SELECT * FROM user WHERE zip='100000' AND last_name LIKE '%张%';
-- 无 ICP: 用 zip 找到所有记录 → 回表 → 过滤 last_name
-- 有 ICP: 用 zip 找到后，引擎层直接过滤 last_name → 再回表
```

## 索引失效场景

- 索引列参与计算: `WHERE age + 1 = 20` → ❌
- 隐式类型转换: `WHERE phone = 123`（phone 是 varchar）→ ❌
- LIKE 前导通配: `WHERE name LIKE '%张'` → ❌（`WHERE name LIKE '张%'` ✅）
- OR 条件含非索引列 → ❌
- NOT IN / NOT EXISTS → ❌

## 实操总结

- 日常 EXPLAIN 关注: `type`（ref/range 合格, ALL 危险）、`rows`、`Extra`
- 联合索引字段顺序：区分度高的在前，等值条件在前
- 注意写多条 SQL 不要有隐式转换（参数传入的类型要和字段匹配）
