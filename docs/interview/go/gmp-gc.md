---
title: "Go 并发模型与 GC 原理"
date: 2026-04-29
type: interview-qa
zone: interview
domain: backend
tags: [go, gmp, gc, goroutine]
level: advanced
---

# Go GMP 调度模型 & GC

## GMP 模型

- **G**: Goroutine — 轻量级线程（栈初始 2KB，可动态扩）
- **M**: Machine — OS 线程（线程数 = 实际并发数）
- **P**: Processor — 调度上下文（GOMAXPROCS 决定数量，默认 = CPU 核数）

### 调度流程

```
G 创建 → 放入 P 的本地队列 (runq, 256 上限)
→ P 从本地队列取 G → M 执行 G
→ G 阻塞 (syscall) → M 和 P 解绑 → 新 M 绑定 P 继续
→ G 就绪 → 放入全局队列 → P 从全局队列取
```

### 工作窃取

某个 P 本地队列空了 → 从其他 P 偷一半 G。
如果所有 P 都空 → 从全局队列取。

## GC: 三色标记 + 混合写屏障

### 三色标记

- 白色: 待扫描（开始时所有对象都是白色）
- 灰色: 已标记但子对象未扫描
- 黑色: 已标记且子对象已扫描

### 流程

1. **Mark Setup** (STW, <1ms): 开启写屏障
2. **Marking** (并发): 从 root 开始三色扫描。混合写屏障确保黑色不会直接引用白色
3. **Mark Termination** (STW, <1ms): 关闭写屏障，处理最后变化
4. **Sweeping** (并发): 回收白色对象

### 混合写屏障 (Go 1.8+)

```go
writePointer(slot, ptr) {
    shade(*slot)  // 标记旧指针
    shade(ptr)    // 标记新指针
}
```

## 实操总结

- `GOMAXPROCS` 默认等于 CPU 核数。IO 密集型可适当调高
- `go tool trace` 看 GMP 调度实况
- `GODEBUG=gctrace=1` 看 GC 日志：`gc 1 @0.003s 4%: 0.022+0.23+0.011 ms clock`
- 减少 GC 压力：对象池 (`sync.Pool`)、减少内存分配
