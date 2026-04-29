---
title: "TCP 协议详解"
date: 2026-04-29
type: interview-qa
zone: interview
domain: backend
tags: [network, tcp, protocol]
level: intermediate
---

# TCP 协议详解

## 三次握手

```
CLOSED          LISTEN
SYN_SENT  <──  SYN=1,seq=x       SYN_RCVD
ESTABLISHED ──>  SYN=1,ACK=1,seq=y,ack=x+1  SYN_RCVD
ESTABLISHED <── ACK=1,seq=x+1,ack=y+1       ESTABLISHED
```

**为什么是三次不是两次？** 防止已失效的连接请求到达服务器。两次握手 → 服务器以为连接已建立，但客户端已超时重发 → 资源浪费。

**SYN Flood:** 攻击者发大量 SYN，不完成握手 → 服务器 SYN_RCVD 队列满 → 正常连接被拒。防御: SYN Cookie（用 cookie 替代半连接队列）。

## 四次挥手

```
ESTABLISHED  ──> FIN=1,seq=u        FIN_WAIT_1
CLOSE_WAIT   <── ACK=1,seq=v,ack=u+1  FIN_WAIT_2
（半关闭状态：服务器还能发数据）
LAST_ACK     ──> FIN=1,seq=w        TIME_WAIT
CLOSED       <── ACK=1,seq=u+1,ack=w+1 CLOSED
```

**TIME_WAIT 为什么是 2MSL？** 确保最后一次 ACK 到达对端。如果 ACK 丢了，对端重发 FIN → 本端重发 ACK。

## 流量控制（滑动窗口）

- 接收方告诉发送方自己的 `rwnd`（接收窗口大小）
- 发送方不能超过 `rwnd` 发送数据
- **窗口关闭:** 当 rwnd=0 时，发送方停止发送，但定期发零窗口探测

## 拥塞控制

1. **慢启动:** 每收到一个 ACK，cwnd += 1（指数增长），直到 ssthresh
2. **拥塞避免:** cwnd += 1/cwnd（线性增长），到丢包为止
3. **快重传:** 收到 3 个重复 ACK → 立即重传，不用等超时
4. **快恢复:** cwnd = ssthresh + 3，然后进入拥塞避免

## TCP vs UDP

| 特性 | TCP | UDP |
|------|-----|-----|
| 连接 | 面向连接 | 无连接 |
| 可靠 | 确认重传 | 尽力而为 |
| 有序 | 保证有序 | 不保证 |
| 头部 | 20-60 字节 | 8 字节 |
| 速度 | 慢（有拥塞控制） | 快 |
| 适用 | HTTP/HTTPS/SSH | DNS/视频流/游戏 |

## 实操总结

- `ss -tlnp` 查看 TCP 连接状态，观察 TIME_WAIT 数量
- 服务端大量 TIME_WAIT → 考虑开启 `tcp_tw_reuse`（Linux 4.12+ 自动启用）
- 首包延迟高 → 检查 TCP 快速打开 (TFO) 是否可用
- `tcpdump -i eth0 'tcp port 80' -w capture.pcap` 抓包后用 Wireshark 分析握手细节
