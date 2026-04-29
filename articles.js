// 个人知识库数据 — 映射到 docs/ 下的 7 个分区
const articlesData = [
  // ========== ① 技术学习 ==========
  {
    id: 1,
    title: '技术学习索引',
    summary: 'Go / Java / 数据库 / 分布式 / 消息队列 / 架构设计',
    content: `
      <h2>技术学习</h2>
      <p>后端开发为主，Go 主力、Java 辅助、Python 为工具。</p>
      <h3>数据库</h3>
      <ul>
        <li><strong>MySQL</strong>：InnoDB 架构、索引原理、MVCC、锁机制、主从复制</li>
        <li><strong>Redis</strong>：底层数据结构、持久化、缓存策略、分布式锁、集群</li>
      </ul>
      <h3>分布式</h3>
      <ul>
        <li><strong>理论</strong>：CAP、BASE、一致性模型</li>
        <li><strong>共识</strong>：Raft（Leader Election + Log Replication）</li>
        <li><strong>事务</strong>：2PC / TCC / Saga</li>
        <li><strong>治理</strong>：服务发现、负载均衡、熔断限流</li>
      </ul>
      <h3>更多</h3>
      <p>消息队列（Kafka）、架构设计（微服务 + 高并发）</p>
      <p>👉 <a href="docs/tech/README.md" target="_blank">进入技术学习专区 →</a></p>
    `,
    category: 'tech',
    categoryName: '技术学习',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '💻'
  },
  {
    id: 2,
    title: 'MySQL 学习提纲',
    summary: 'InnoDB → 索引 → 锁 → MVCC → 日志 → 主从复制',
    content: `
      <h2>MySQL 必知必会</h2>
      <ul>
        <li><strong>InnoDB 架构</strong>：Buffer Pool / Change Buffer / Double Write</li>
        <li><strong>索引</strong>：B+树、聚簇 vs 二级、覆盖索引、索引下推</li>
        <li><strong>锁</strong>：Record / Gap / Next-Key Lock、意向锁、MDL</li>
        <li><strong>事务</strong>：MVCC（ReadView + Undo Log）、隔离级别实现</li>
        <li><strong>日志</strong>：redo log（WAL）、undo log、binlog（ROW vs STATEMENT）</li>
        <li><strong>主从</strong>：binlog 同步、并行复制、GTID</li>
      </ul>
      <p>👉 <a href="docs/tech/database/README.md" target="_blank">查看完整提纲 →</a></p>
    `,
    category: 'tech',
    categoryName: '技术学习',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🗄️',
    fromMd: true,
    mdPath: 'docs/tech/database/README.md'
  },
  {
    id: 3,
    title: 'Redis 学习提纲',
    summary: '数据结构底层 · 持久化 · 缓存策略 · 分布式锁 · 集群',
    content: `
      <h2>Redis 必知必会</h2>
      <ul>
        <li><strong>数据结构底层</strong>：SDS / ziplist / listpack / skiplist / hashtable</li>
        <li><strong>持久化</strong>：RDB vs AOF vs 混合持久化、BGSAVE 原理</li>
        <li><strong>缓存策略</strong>：穿透（布隆过滤器）、击穿、雪崩</li>
        <li><strong>分布式锁</strong>：SETNX + Lua → Redlock → Redisson</li>
        <li><strong>集群</strong>：主从 → 哨兵 → Cluster（hash slot 16384）</li>
      </ul>
      <p>👉 <a href="docs/tech/database/README.md" target="_blank">查看完整提纲 →</a></p>
    `,
    category: 'tech',
    categoryName: '技术学习',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '⚡',
    fromMd: true,
    mdPath: 'docs/tech/database/README.md'
  },

  // ========== ② 运维笔记 ==========
  {
    id: 4,
    title: 'Docker 实战笔记',
    summary: 'UnionFS · Namespace · Cgroups · Dockerfile 最佳实践',
    content: `
      <h2>Docker 核心原理</h2>
      <ul>
        <li><strong>UnionFS 分层</strong>：image → container（RO 层 + RW 层）</li>
        <li><strong>Namespace 隔离</strong>：PID / NET / MNT / UTS / IPC / User</li>
        <li><strong>Cgroups 限制</strong>：cpu.shares / memory.limit_in_bytes</li>
      </ul>
      <h2>常用命令速查</h2>
      <pre><code>docker system prune -a --volumes
docker logs -f --tail 100 &lt;container&gt;
docker exec -it &lt;container&gt; sh
docker inspect &lt;container&gt; | jq .</code></pre>
      <h2>Dockerfile 最佳实践</h2>
      <ol>
        <li>多阶段构建：build → runtime</li>
        <li>层合并：RUN 用 && 连接</li>
        <li>非 root 运行：USER 1000</li>
        <li>健康检查：HEALTHCHECK 指令</li>
        <li>.dockerignore 排除无用文件</li>
      </ol>
      <p>👉 <a href="docs/devops/docker/README.md" target="_blank">查看完整笔记 →</a></p>
    `,
    category: 'devops',
    categoryName: '运维笔记',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🐳',
    fromMd: true,
    mdPath: 'docs/devops/docker/README.md'
  },
  {
    id: 5,
    title: 'Kubernetes 实战笔记',
    summary: 'Pod · Controller · Service · Ingress · 存储 · 排查命令',
    content: `
      <h2>K8s 核心资源</h2>
      <ul>
        <li><strong>Pod</strong>：生命周期、探针（liveness / readiness / startup）、QoS 类</li>
        <li><strong>Controller</strong>：Deployment（滚动更新）、StatefulSet、DaemonSet</li>
        <li><strong>Service</strong>：ClusterIP → NodePort → LoadBalancer，kube-proxy</li>
        <li><strong>Ingress</strong>：Nginx Ingress Controller</li>
        <li><strong>PV/PVC/StorageClass</strong>：动态供给</li>
      </ul>
      <h2>排查命令速查</h2>
      <pre><code>kubectl describe pod &lt;pod&gt;
kubectl logs -f &lt;pod&gt; --previous
kubectl exec -it &lt;pod&gt; -- sh
kubectl top pod/node
kubectl run debug --rm -it --image=busybox -- sh</code></pre>
      <p>👉 <a href="docs/devops/kubernetes/README.md" target="_blank">查看完整笔记 →</a></p>
    `,
    category: 'devops',
    categoryName: '运维笔记',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '☸️',
    fromMd: true,
    mdPath: 'docs/devops/kubernetes/README.md'
  },
  {
    id: 6,
    title: 'Linux 诊断速查',
    summary: 'CPU / 内存 / 磁盘 / 网络 四大维度性能排查命令',
    content: `
      <h2>性能诊断命令</h2>
      <pre><code># CPU
top -Hp &lt;pid&gt;         # 线程级
perf top               # 热点函数

# 内存
free -h
vmstat 1

# 磁盘
iostat -x 1
iotop

# 网络
ss -tlnp
tcpdump -i eth0 port 80 -w capture.pcap</code></pre>
      <p>👉 <a href="docs/devops/linux/README.md" target="_blank">查看完整笔记 →</a></p>
    `,
    category: 'devops',
    categoryName: '运维笔记',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🐧',
    fromMd: true,
    mdPath: 'docs/devops/linux/README.md'
  },

  // ========== ③ AI本地部署 ==========
  {
    id: 7,
    title: 'Ollama 实操笔记',
    summary: '模型管理 · 推理 · Modelfile 定制',
    content: `
      <h2>常用命令</h2>
      <pre><code>ollama list                  # 已下载模型
ollama pull qwen2.5:7b       # 下载
ollama run qwen2.5:7b        # 交互
ollama serve                 # 启动 API（默认 11434）
ollama rm &lt;model&gt;            # 删除
ollama show &lt;model&gt;          # 模型详情</code></pre>
      <h2>Modelfile 定制</h2>
      <pre><code>FROM qwen2.5:7b
SYSTEM """你是后端开发助手。回答简洁，带代码。"""
PARAMETER temperature 0.7
PARAMETER num_ctx 4096</code></pre>
      <p>👉 <a href="docs/ai/toolchain/ollama.md" target="_blank">查看完整笔记 →</a></p>
    `,
    category: 'ai',
    categoryName: 'AI本地部署',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🤖',
    fromMd: true,
    mdPath: 'docs/ai/toolchain/ollama.md'
  },
  {
    id: 8,
    title: 'Open WebUI 配置',
    summary: 'Docker 部署 · RAG · 多模型切换',
    content: `
      <h2>部署</h2>
      <pre><code>cd openclaw
docker compose up -d</code></pre>
      <h2>功能</h2>
      <ul>
        <li>多模型切换</li>
        <li>对话历史导出</li>
        <li>文档上传 → RAG</li>
        <li>模型管理（拉取/删除）</li>
      </ul>
      <p>👉 <a href="docs/ai/toolchain/open-webui.md" target="_blank">查看完整笔记 →</a></p>
    `,
    category: 'ai',
    categoryName: 'AI本地部署',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🌐',
    fromMd: true,
    mdPath: 'docs/ai/toolchain/open-webui.md'
  },

  // ========== ④ 毕设归档 ==========
  {
    id: 9,
    title: '毕设归档总览',
    summary: '开题 → 文献 → 实现 → 实验 → 答辩 全流程',
    content: `
      <h2>毕设流程</h2>
      <table>
        <tr><th>阶段</th><th>状态</th></tr>
        <tr><td>开题报告</td><td>⬜</td></tr>
        <tr><td>文献研究</td><td>⬜</td></tr>
        <tr><td>系统实现</td><td>⬜</td></tr>
        <tr><td>实验数据</td><td>⬜</td></tr>
        <tr><td>答辩准备</td><td>⬜</td></tr>
      </table>
      <p>👉 <a href="docs/thesis/README.md" target="_blank">进入毕设专区 →</a></p>
    `,
    category: 'thesis',
    categoryName: '毕设归档',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🎓',
    fromMd: true,
    mdPath: 'docs/thesis/README.md'
  },

  // ========== ⑤ 求职面试 ==========
  {
    id: 10,
    title: '操作系统八股',
    summary: '进程线程 · 内存管理 · 并发同步 · IO 模型',
    content: `
      <h2>进程 & 线程</h2>
      <ul>
        <li>进程 vs 线程 vs 协程：区别、切换开销</li>
        <li>IPC：管道 / 共享内存 / 消息队列 / Socket / 信号</li>
        <li>孤儿 & 僵尸进程</li>
      </ul>
      <h2>内存管理</h2>
      <ul>
        <li>虚拟内存、页表、TLB</li>
        <li>页面置换：LRU / LFU / Clock</li>
      </ul>
      <h2>IO</h2>
      <ul>
        <li>IO 模型：阻塞 / 非阻塞 / 多路复用 / AIO</li>
        <li>select / poll / epoll</li>
        <li>零拷贝：sendfile / splice / mmap</li>
      </ul>
      <p>👉 <a href="docs/interview/os/README.md" target="_blank">查看完整提纲 →</a></p>
    `,
    category: 'interview',
    categoryName: '求职面试',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🎯',
    fromMd: true,
    mdPath: 'docs/interview/os/README.md'
  },
  {
    id: 11,
    title: 'Go 八股',
    summary: 'GMP · Channel · GC · slice · map · defer · interface',
    content: `
      <h2>语言基础</h2>
      <ul>
        <li>slice vs array：底层结构、扩容机制</li>
        <li>map：底层哈希表、扩容、并发不安全</li>
        <li>defer：LIFO 执行、参数预计算</li>
        <li>interface：iface vs eface、nil interface</li>
      </ul>
      <h2>并发</h2>
      <ul>
        <li><strong>GMP 调度模型</strong>：G/M/P、工作窃取</li>
        <li><strong>Channel</strong>：hchan 结构、环形队列</li>
        <li><strong>Mutex</strong>：正常模式 + 饥饿模式</li>
      </ul>
      <h2>运行时</h2>
      <ul>
        <li><strong>GC</strong>：三色标记 + 混合写屏障</li>
        <li><strong>逃逸分析</strong>：常见逃逸场景</li>
      </ul>
      <p>👉 <a href="docs/interview/go/README.md" target="_blank">查看完整提纲 →</a></p>
    `,
    category: 'interview',
    categoryName: '求职面试',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🔷',
    fromMd: true,
    mdPath: 'docs/interview/go/README.md'
  },
  {
    id: 12,
    title: 'Java 八股',
    summary: 'HashMap · JVM · GC · Spring Boot · 并发',
    content: `
      <h2>基础</h2>
      <ul>
        <li>HashMap：数组+链表+红黑树、put 流程、扩容</li>
        <li>ConcurrentHashMap：1.7 分段锁 → 1.8 CAS+synchronized</li>
      </ul>
      <h2>JVM</h2>
      <ul>
        <li><strong>内存模型</strong>：堆 / 栈 / 元空间</li>
        <li><strong>GC</strong>：CMS / G1 / ZGC</li>
        <li><strong>类加载</strong>：双亲委派、打破（Tomcat / SPI）</li>
      </ul>
      <h2>Spring Boot</h2>
      <ul>
        <li>IoC：Bean 生命周期、循环依赖（三级缓存）</li>
        <li>@Transactional 失效场景</li>
      </ul>
      <p>👉 <a href="docs/interview/java/README.md" target="_blank">查看完整提纲 →</a></p>
    `,
    category: 'interview',
    categoryName: '求职面试',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🍃',
    fromMd: true,
    mdPath: 'docs/interview/java/README.md'
  },

  // ========== ⑥ 生活杂记 ==========
  {
    id: 13,
    title: '2026-04-29 日报',
    summary: '知识库搭建完成，7 个专属分区全部就位',
    content: `
      <h2>今日重点</h2>
      <p>从零搭建个人知识库，7 个专属分区全部就位。</p>
      <p>敲定 Markdown + YAML frontmatter + Git 的技术方案。</p>
      <p>输出 5 种笔记模板，全部含「个人实操总结」section。</p>
      <h2>明日计划</h2>
      <ul>
        <li>运行完整结构验证</li>
        <li>开始填充 MySQL 索引笔记（第一份正式学习笔记）</li>
      </ul>
      <p>👉 <a href="docs/life/2026/04/2026-04-29.md" target="_blank">查看完整日报 →</a></p>
    `,
    category: 'life',
    categoryName: '生活杂记',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '📝',
    fromMd: true,
    mdPath: 'docs/life/2026/04/2026-04-29.md'
  },

  // ========== ⑦ 游戏存档 ==========
  {
    id: 14,
    title: '游戏存档总览',
    summary: '在玩 · 已通关 · 游戏笔记',
    content: `
      <h2>游戏存档</h2>
      <p>记录游玩的游戏，包含攻略、通关心得、配置备份。</p>
      <p>👉 <a href="docs/games/README.md" target="_blank">进入游戏存档 →</a></p>
    `,
    category: 'games',
    categoryName: '游戏存档',
    date: '2026-04-29',
    readTime: '持续更新',
    icon: '🎮',
    fromMd: true,
    mdPath: 'docs/games/README.md'
  }
];

// 导出文章数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { articlesData };
}
