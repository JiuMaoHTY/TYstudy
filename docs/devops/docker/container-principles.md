---
title: "Docker 容器核心原理"
date: 2026-04-29
type: learning-note
zone: devops
domain: cloud-native
tags: [docker, namespace, cgroups, unionfs]
level: intermediate
---

# Docker 容器核心原理

## Namespace (隔离)

| Namespace | 隔离内容 | 系统调用参数 |
|-----------|---------|-------------|
| PID | 进程编号 | CLONE_NEWPID |
| NET | 网络栈 (接口/路由/iptables) | CLONE_NEWNET |
| MNT | 挂载点 | CLONE_NEWNS |
| UTS | 主机名/域名 | CLONE_NEWUTS |
| IPC | System V IPC / POSIX 消息队列 | CLONE_NEWIPC |
| User | 用户和 UID | CLONE_NEWUSER |

**实操:** `ls -l /proc/<pid>/ns/` 查看进程的 Namespace 列表

## Cgroups (资源限制)

```bash
# CPU 限制 (100000 = 1 核)
echo 50000 > /sys/fs/cgroup/cpu/docker/cpu.cfs_quota_us

# 内存限制
echo 512M > /sys/fs/cgroup/memory/docker/memory.limit_in_bytes

# 磁盘 IO
echo "8:0 1048576" > /sys/fs/cgroup/blkio/docker/blkio.throttle.read_bps_device
```

## UnionFS (分层)

Docker 使用 overlay2：
- **lowerdir**: 镜像层（只读）
- **upperdir**: 容器层（可写）
- **merged**: 最终视图

写时复制 (CoW): 修改下层文件 → 复制到上层再修改

## 实操总结

- `docker inspect` 看 `LowerDir` / `UpperDir` / `MergedDir` 理解分层
- 多阶段构建是减少镜像大小的最有效手段
- `.dockerignore` 一定要设，避免发送不必要的 context
