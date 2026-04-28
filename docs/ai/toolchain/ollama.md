---
title: "Ollama 实操笔记"
date: 2026-04-29
type: learning-note
zone: ai
domain: llm
tags: [ollama, tool, llm]
level: intro
source: 个人实操
---

# Ollama 实操笔记

## 常用命令

```bash
ollama list                  # 已下载模型
ollama pull qwen2.5:7b       # 下载
ollama run qwen2.5:7b        # 交互
ollama serve                 # 启动 API 服务（默认 11434）
ollama rm <model>            # 删除
ollama show <model>          # 模型详情
```

## 我用过的模型

| 模型 | 大小 | 本地表现 |
|------|------|----------|
|      |      |          |

## Modelfile

```dockerfile
FROM qwen2.5:7b
SYSTEM """你是后端开发助手。回答简洁，带代码。"""
PARAMETER temperature 0.7
PARAMETER num_ctx 4096
```

```bash
ollama create my-assistant -f Modelfile
```

## 个人实操总结
-
