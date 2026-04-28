---
title: "Linux 实战笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [linux, index, troubleshooting]
level: intermediate
---

# Linux 实战笔记

## 性能诊断（必会）

```bash
# CPU
top -Hp <pid>         # 线程级
perf top               # 热点函数

# 内存
free -h
vmstat 1

# 磁盘
iostat -x 1
iotop

# 网络
ss -tlnp
tcpdump -i eth0 port 80 -w capture.pcap
```

## Shell 模板

```bash
#!/bin/bash
set -euo pipefail
LOG_FILE="/var/log/myapp.log"

log() { echo "[$(date +'%F %T')] $*"; }
die()  { log "ERROR: $*"; exit 1; }

log "Starting..."
trap 'log "Cleaning up..."' EXIT
```

## 个人实操总结
-
