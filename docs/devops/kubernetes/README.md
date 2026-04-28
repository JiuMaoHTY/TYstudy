---
title: "Kubernetes 实战笔记索引"
date: 2026-04-29
type: learning-note
zone: devops
domain: devops
tags: [kubernetes, index]
level: advanced
---

# Kubernetes 实战笔记

## 核心资源
- [ ] **Pod**：生命周期、探针（liveness / readiness / startup）、QoS 类
- [ ] **Controller**：Deployment（滚动更新）、StatefulSet（有状态）、DaemonSet
- [ ] **Service**：ClusterIP → NodePort → LoadBalancer，kube-proxy（iptables/IPVS）
- [ ] **Ingress**：Nginx Ingress Controller + 注解
- [ ] **ConfigMap/Secret**：环境变量 / 挂载 / subPath
- [ ] **PV/PVC/StorageClass**：动态供给

## 常用命令（实操速查）

```bash
# 排查
kubectl describe pod <pod>
kubectl logs -f <pod> --previous
kubectl exec -it <pod> -- sh
kubectl top pod/node

# 调试
kubectl run debug --rm -it --image=busybox -- sh
kubectl port-forward svc/<svc> 8080:80
```

## 个人实操总结
-
