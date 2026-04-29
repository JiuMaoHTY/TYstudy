---
title: "Docker 实战笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [docker, index, container]
level: intermediate
---

# Docker 实战笔记

## 核心原理
- [ ] **UnionFS 分层**：image → container（RO 层 + RW 层）
- [ ] **Namespace 隔离**：PID / NET / MNT / UTS / IPC / User（6 种）
- [ ] **Cgroups 限制**：cpu.shares / memory.limit_in_bytes

## 常用命令（实操速查）

```bash
# 清理
docker system prune -a --volumes

# 调试
docker logs -f --tail 100 <container>
docker exec -it <container> sh
docker inspect <container> | jq .

# 网络
docker network ls
docker network inspect bridge
```

## Dockerfile 最佳实践
1. **多阶段构建**：build → runtime，减小体积
2. **层合并**：RUN 用 && 连接，减少层数
3. **非 root 运行**：USER 1000
4. **健康检查**：HEALTHCHECK 指令
5. **`.dockerignore`**：排除 node_modules / .git

## 个人实操总结

- `docker inspect` 看 `LowerDir` / `UpperDir` / `MergedDir` 理解分层
- 多阶段构建是减少镜像大小的最有效手段
- `.dockerignore` 一定要设，避免发送不必要的 context
