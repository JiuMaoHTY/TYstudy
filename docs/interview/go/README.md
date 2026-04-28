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
