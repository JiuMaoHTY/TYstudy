---
title: "Redis 数据结构底层实现"
date: 2026-04-29
type: learning-note
zone: tech
domain: database
tags: [redis, data-structure, sds, ziplist, skiplist]
level: intermediate
---

# Redis 数据结构底层实现

## SDS (Simple Dynamic String)

对比 C 字符串的优势：
- **O(1) 求长度** — 存了 len 字段
- **二进制安全** — 不以 `\0` 判断结尾，可存图片等
- **预分配** — 扩容时多分配冗余空间，减少 realloc 次数

```
struct sdshdr {
    int len;      // 已用长度
    int free;     // 剩余空间
    char buf[];   // 字节数组
};
```

## 编码演进

| 数据类型 | 旧编码 (Redis 3.2-) | 新编码 (Redis 7+) |
|---------|-------------------|-------------------|
| List | ziplist / linkedlist | **quicklist** (ziplist 分段链表) |
| Hash | ziplist / hashtable | **listpack** / hashtable |
| Zset | ziplist / skiplist | **listpack** / skiplist |

## listpack vs ziplist

ziplist 有级联更新问题（插入/删除导致后续所有 entry 的 prevlen 需要重新计算）。
listpack 去掉了 prevlen，每个 entry 只记录自己的长度 → 无级联更新。

## Skiplist (跳表)

Zset 底层：dict（存 member→score 映射）+ skiplist（按 score 排序）

```
Level 3:  [1]------------------>[9]------------------>[17]
Level 2:  [1]------>[5]------->[9]------>[13]------->[17]
Level 1:  [1]->[3]->[5]->[7]->[9]->[11]->[13]->[15]->[17]
```

- 插入/删除/查找平均 O(logN)
- 实现比红黑树简单
- 支持范围查询（跳表链表可顺序遍历）

## 实操总结

- 用 `OBJECT ENCODING <key>` 查看 key 的实际编码
- 大量小 hash 用 ziplist/listpack 省内存
- Zset 的 skiplist 底层决定了 `ZRANGEBYSCORE` 的时间复杂度是 O(logN+M)
