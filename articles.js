// 个人学习知识库文章数据
const articlesData = [
  // ========== AI技术 ==========
  {
    id: 1,
    title: '深度学习入门：从感知机到神经网络',
    summary: '从感知机出发，理解神经网络的构建原理和工作机制',
    content: `
      <h2>引言</h2>
      <p>深度学习是人工智能领域最热门的技术方向。本文从最基础的概念开始，帮助你建立完整的知识体系。</p>
      
      <h2>感知机：神经网络的起点</h2>
      <p>感知机(Perceptron)由Frank Rosenblatt在1957年提出，是最简单的人工神经网络模型。</p>
      <p>感知机接收多个输入信号，通过加权求和后加上偏置，再通过激活函数产生输出。</p>
      
      <h2>多层感知机与反向传播</h2>
      <p>单层感知机只能处理线性可分问题。多层感知机(MLP)通过增加隐藏层解决非线性问题。</p>
      <p>反向传播算法(Backpropagation)是训练神经网络的核心方法，通过链式法则计算梯度。</p>
      
      <h2>激活函数</h2>
      <p>激活函数为神经网络引入非线性特性。常见激活函数：</p>
      <ul>
        <li><strong>ReLU</strong>：最常用的激活函数</li>
        <li><strong>Sigmoid</strong>：常用于二分类</li>
        <li><strong>Tanh</strong>：输出范围(-1, 1)</li>
      </ul>
    `,
    category: 'ai',
    categoryName: 'AI技术',
    date: '2026-04-20',
    readTime: '12分钟',
    icon: '🧠'
  },
  {
    id: 2,
    title: '机器学习基础：监督学习核心算法',
    summary: '线性回归、逻辑回归、支持向量机、决策树等经典算法',
    content: `
      <h2>监督学习概述</h2>
      <p>监督学习通过已有的输入-输出样本对，学习从输入到输出的映射函数。</p>
      
      <h2>回归算法</h2>
      <p><strong>线性回归</strong>：预测连续值输出</p>
      <p><strong>逻辑回归</strong>：名字带"回归"，实际是分类算法</p>
      
      <h2>分类算法</h2>
      <p><strong>支持向量机(SVM)</strong>：通过最大间隔分类超平面实现分类</p>
      <p><strong>决策树</strong>：通过树形结构进行决策，易于理解</p>
      <p><strong>随机森林</strong>：集成多棵决策树，提高泛化能力</p>
    `,
    category: 'ai',
    categoryName: 'AI技术',
    date: '2026-04-18',
    readTime: '15分钟',
    icon: '📊'
  },
  {
    id: 3,
    title: 'Transformer模型详解：注意力机制的革命',
    summary: '自注意力机制如何改变NLP领域',
    content: `
      <h2>Transformer的诞生</h2>
      <p>2017年Google论文《Attention Is All You Need》提出了Transformer架构。</p>
      
      <h2>自注意力机制</h2>
      <p>自注意力机制允许序列中每个位置关注所有其他位置，捕获长距离依赖。</p>
      <p>计算过程：Query、Key、Value线性变换 → 点积注意力权重 → 加权求和</p>
      
      <h2>应用发展</h2>
      <p>BERT、GPT等预训练模型基于Transformer，在NLP领域取得突破性进展。</p>
    `,
    category: 'ai',
    categoryName: 'AI技术',
    date: '2026-04-15',
    readTime: '18分钟',
    icon: '🔗'
  },
  {
    id: 4,
    title: 'AI Agent开发：从手写识别到智能助手',
    summary: 'AI Agent的核心概念与开发框架',
    content: `
      <h2>什么是AI Agent？</h2>
      <p>AI Agent是能够自主决策、执行任务、与环境交互的智能系统。</p>
      
      <h2>核心组件</h2>
      <ul>
        <li><strong>规划(Planning)</strong>：将复杂任务分解为子任务</li>
        <li><strong>记忆(Memory)</strong>：存储对话历史和关键信息</li>
        <li><strong>工具(Tools)</strong>：调用外部API、搜索、计算</li>
        <li><strong>行动(Action)</strong>：执行决策并评估结果</li>
      </ul>
      
      <h2>主流框架</h2>
      <p><strong>LangGraph</strong>：构建复杂多步骤Agent工作流</p>
      <p><strong>CrewAI</strong>：多Agent协作框架</p>
    `,
    category: 'ai',
    categoryName: 'AI技术',
    date: '2026-04-26',
    readTime: '18分钟',
    icon: '🤖'
  },
  {
    id: 5,
    title: '大模型微调：LoRA与QLoRA实战指南',
    summary: '低成本高效的大模型微调技术',
    content: `
      <h2>为什么需要微调？</h2>
      <p>预训练大模型具备通用能力，但针对特定领域，垂直微调能显著提升效果。</p>
      
      <h2>LoRA原理</h2>
      <p>Low-Rank Adaptation通过冻结原模型权重，只训练低秩矩阵：</p>
      <ul>
        <li>训练参数量减少100-1000倍</li>
        <li>显存需求大幅降低</li>
        <li>可动态切换不同任务适配器</li>
      </ul>
      
      <h2>实战工具</h2>
      <p><strong>Axolotl</strong> - 主流微调框架</p>
      <p><strong>LLaMA-Factory</strong> - 开源微调平台</p>
    `,
    category: 'ai',
    categoryName: 'AI技术',
    date: '2026-04-25',
    readTime: '15分钟',
    icon: '⚙️'
  },

  // ========== DevOps ==========
  {
    id: 6,
    title: 'Docker容器化：构建高效可移植的应用环境',
    summary: 'Docker核心概念，从镜像构建到容器编排',
    content: `
      <h2>Docker核心概念</h2>
      <p><strong>镜像(Image)</strong>：应用程序模板，只读</p>
      <p><strong>容器(Container)</strong>：镜像的运行实例</p>
      <p><strong>仓库(Registry)</strong>：存储和分发镜像的服务</p>
      
      <h2>常用命令</h2>
      <p><code>docker build</code> - 构建镜像</p>
      <p><code>docker run</code> - 运行容器</p>
      <p><code>docker ps</code> - 查看运行中的容器</p>
      
      <h2>最佳实践</h2>
      <ul>
        <li>使用多阶段构建减小镜像体积</li>
        <li>合理利用构建缓存</li>
        <li>非root用户运行容器</li>
      </ul>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-21',
    readTime: '14分钟',
    icon: '🐳'
  },
  {
    id: 7,
    title: 'Kubernetes入门：云原生应用部署与管理',
    summary: 'K8s核心概念，从Pod到Deployment',
    content: `
      <h2>为什么需要Kubernetes？</h2>
      <p>Kubernetes是容器编排的事实标准，提供自动化部署、扩展和管理能力。</p>
      
      <h2>核心概念</h2>
      <p><strong>Pod</strong>：K8s最小调度单位</p>
      <p><strong>Service</strong>：负载均衡和服务发现</p>
      <p><strong>Deployment</strong>：管理Pod副本数</p>
      <p><strong>Namespace</strong>：资源隔离</p>
      
      <h2>实用工具</h2>
      <p><strong>Lens</strong> - 强大的Kubernetes IDE</p>
      <p><strong>K9s</strong> - 终端Kubernetes管理工具</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-19',
    readTime: '16分钟',
    icon: '☸️'
  },
  {
    id: 8,
    title: 'Prometheus监控：云原生监控实践',
    summary: 'Prometheus+Grafana监控体系搭建',
    content: `
      <h2>Prometheus核心概念</h2>
      <p><strong>指标(Metrics)</strong>：带时间戳的数值数据</p>
      <p><strong>抓取(Scraping)</strong>：周期性拉取指标数据</p>
      <p><strong>PromQL</strong>：强大的指标查询语言</p>
      
      <h2>Exporter生态</h2>
      <ul>
        <li><strong>node_exporter</strong>：系统级指标</li>
        <li><strong>cadvisor</strong>：Docker容器监控</li>
        <li><strong>blackbox_exporter</strong>：HTTP/TCP探测</li>
      </ul>
      
      <h2>告警配置</h2>
      <p>使用AlertManager实现告警聚合，支持多渠道通知。</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-23',
    readTime: '16分钟',
    icon: '📊'
  },
  {
    id: 9,
    title: 'GitOps实践：ArgoCD声明式部署',
    summary: '用Git作为单一真相源，实现自动化部署',
    content: `
      <h2>GitOps核心思想</h2>
      <p>以Git仓库为唯一的配置和部署真相来源，通过自动同步保持集群状态一致。</p>
      
      <h2>ArgoCD特点</h2>
      <ul>
        <li>声明式应用定义</li>
        <li>可视化部署状态</li>
        <li>自动同步与回滚</li>
        <li>多集群管理</li>
      </ul>
      
      <h2>工作流程</h2>
      <p>开发者提交代码 → CI构建镜像 → 更新Yaml配置 → ArgoCD检测变更 → 自动部署</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-22',
    readTime: '14分钟',
    icon: '🔄'
  },

  // ========== 编程开发 ==========
  {
    id: 10,
    title: 'Python异步编程：asyncio高并发实战',
    summary: '掌握Python异步编程范式',
    content: `
      <h2>为什么需要异步？</h2>
      <p>在I/O密集型场景（网络请求、文件读写），异步编程能显著提升并发能力。</p>
      
      <h2>核心概念</h2>
      <p><strong>协程(Coroutine)</strong>：可在暂停和恢复间切换的函数</p>
      <p><strong>事件循环(Event Loop)</strong>：调度协程执行的引擎</p>
      <p><strong>Future/Task</strong>：协程的包装器</p>
      
      <h2>常用框架</h2>
      <p><strong>aiohttp</strong>：异步HTTP客户端</p>
      <p><strong>FastAPI</strong>：异步Web框架</p>
    `,
    category: 'coding',
    categoryName: '编程开发',
    date: '2026-04-21',
    readTime: '15分钟',
    icon: '🐍'
  },
  {
    id: 11,
    title: 'TypeScript类型体操：提升类型安全',
    summary: 'TypeScript高级类型技巧',
    content: `
      <h2>为什么要学类型体操？</h2>
      <p>类型体操让你在编译阶段发现更多错误，提高代码质量。</p>
      
      <h2>常用技巧</h2>
      <p><strong>泛型约束</strong>：限制类型变量的范围</p>
      <p><strong>条件类型</strong>：根据条件选择类型</p>
      <p><strong>映射类型</strong>：批量转换属性类型</p>
      <p><strong>模板字面量</strong>：构造字符串字面量类型</p>
      
      <h2>实用工具类型</h2>
      <p><code>Partial&lt;T&gt;</code>：所有属性可选</p>
      <p><code>Pick&lt;T, K&gt;</code>：选取部分属性</p>
      <p><code>Record&lt;K, V&gt;</code>：构造对象类型</p>
    `,
    category: 'coding',
    categoryName: '编程开发',
    date: '2026-04-17',
    readTime: '12分钟',
    icon: '📘'
  },
  {
    id: 12,
    title: 'Git工作流：从入门到精通',
    summary: 'Git命令与团队协作流程',
    content: `
      <h2>基础命令</h2>
      <p><code>git add</code> - 暂存文件</p>
      <p><code>git commit</code> - 提交更改</p>
      <p><code>git push</code> - 推送到远程</p>
      <p><code>git pull</code> - 拉取更新</p>
      
      <h2>分支管理</h2>
      <p><code>git branch</code> - 查看/创建分支</p>
      <p><code>git checkout</code> - 切换分支</p>
      <p><code>git merge</code> - 合并分支</p>
      
      <h2>团队协作流程</h2>
      <p>推荐使用Git Flow或Trunk Based Development工作流。</p>
    `,
    category: 'coding',
    categoryName: '编程开发',
    date: '2026-04-15',
    readTime: '10分钟',
    icon: '🔀'
  },

  // ========== 效率工具 ==========
  {
    id: 13,
    title: 'VS Code高效配置：从入门到定制',
    summary: 'VS Code配置与必备插件',
    content: `
      <h2>基础配置</h2>
      <p><strong>settings.json</strong>：用户设置</p>
      <p><strong>keybindings.json</strong>：快捷键绑定</p>
      <p><strong>extensions.json</strong>：推荐插件列表</p>
      
      <h2>必备插件</h2>
      <ul>
        <li><strong>GitLens</strong>：增强Git功能</li>
        <li><strong>Prettier</strong>：代码格式化</li>
        <li><strong>ESLint</strong>：代码检查</li>
        <li><strong>REST Client</strong>：API测试</li>
        <li><strong>Error Lens</strong>：错误高亮</li>
      </ul>
      
      <h2>效率技巧</h2>
      <p>善用Command Palette(Ctrl+Shift+P)、多光标编辑、终端集成。</p>
    `,
    category: 'tools',
    categoryName: '效率工具',
    date: '2026-04-13',
    readTime: '10分钟',
    icon: '⚡'
  },
  {
    id: 14,
    title: 'AI编程工具对比：Copilot vs Cursor vs Claude',
    summary: '主流AI编程助手深度对比',
    content: `
      <h2>GitHub Copilot</h2>
      <p><strong>优势</strong>：集成度高、实时补全</p>
      <p><strong>特点</strong>：基于OpenAI Codex模型</p>
      <p><strong>适合</strong>：习惯VS Code、需要快速补全</p>
      
      <h2>Cursor</h2>
      <p><strong>优势</strong>：对话式交互、代码库感知</p>
      <p><strong>特点</strong>：Composer多文件编辑</p>
      <p><strong>适合</strong>：重构、生成复杂功能</p>
      
      <h2>Claude</h2>
      <p><strong>优势</strong>：长上下文、分析能力强</p>
      <p><strong>适合</strong>：代码审查、架构设计</p>
      
      <h2>选型建议</h2>
      <p>日常补全用Copilot，复杂任务用Cursor，代码审查用Claude。结合使用效果更佳。</p>
    `,
    category: 'tools',
    categoryName: '效率工具',
    date: '2026-04-19',
    readTime: '12分钟',
    icon: '💻'
  },
  {
    id: 15,
    title: '终端效率：zsh与Oh My Zsh配置',
    summary: '打造高效的命令行环境',
    content: `
      <h2>为什么用zsh？</h2>
      <p>zsh提供更强大的自动补全、插件系统、主题定制。</p>
      
      <h2>Oh My Zsh</h2>
      <p>社区驱动的zsh配置框架，开箱即用的插件和主题。</p>
      
      <h2>必备插件</h2>
      <ul>
        <li><strong>git</strong>：git命令别名</li>
        <li><strong>z</strong>：目录跳转</li>
        <li><strong>docker</strong>：docker命令补全</li>
        <li><strong>kubectl</strong>：k8s命令补全</li>
      </ul>
      
      <h2>Powerlevel10k</h2>
      <p>现代化主题，快速渲染、丰富图标、分支状态显示。</p>
    `,
    category: 'tools',
    categoryName: '效率工具',
    date: '2026-04-11',
    readTime: '8分钟',
    icon: '⌨️'
  },

  // ========== 思维方法 ==========
  {
    id: 16,
    title: '费曼学习法：把知识讲给路人听',
    summary: '用输出倒逼输入的高效学习法',
    content: `
      <h2>核心原理</h2>
      <p>费曼学习法的核心是"用简单语言解释复杂概念"。如果你不能简洁地解释一件事，说明你还没真正理解。</p>
      
      <h2>四步学习法</h2>
      <ol>
        <li><strong>选择概念</strong>：选择一个你想学习的概念</li>
        <li><strong>假装教学</strong>：想象你要把这个概念教给一个小孩</li>
        <li><strong>查漏补缺</strong>：遇到卡顿，回到原始资料重新学习</li>
        <li><strong>简化语言</strong>：用更简洁的语言重新表述</li>
      </ol>
      
      <h2>实践应用</h2>
      <p>写博客、做分享、录制视频都是费曼学习法的实践形式。</p>
    `,
    category: 'thinking',
    categoryName: '思维方法',
    date: '2026-04-10',
    readTime: '8分钟',
    icon: '🎓'
  },
  {
    id: 17,
    title: '结构化思维：用MECE原则分析问题',
    summary: '金字塔原理与结构化分析方法',
    content: `
      <h2>什么是MECE？</h2>
      <p>MECE(Mutually Exclusive, Collectively Exhaustive)即"相互独立，完全穷尽"。</p>
      
      <h2>结构化分析步骤</h2>
      <ol>
        <li><strong>明确问题</strong>：清晰定义要解决的问题</li>
        <li><strong>分解问题</strong>：使用MECE原则分解问题</li>
        <li><strong>验证穷尽</strong>：确保覆盖所有可能性</li>
        <li><strong>制定方案</strong>：针对每个分支制定解决方案</li>
      </ol>
      
      <h2>金字塔原理</h2>
      <p>结论先行，以上统下，归纳分组，逻辑递进。</p>
    `,
    category: 'thinking',
    categoryName: '思维方法',
    date: '2026-04-08',
    readTime: '10分钟',
    icon: '🏗️'
  },
  {
    id: 18,
    title: '第一性原理：追溯问题的本质',
    summary: '从埃隆·马斯克学到的思维方法',
    content: `
      <h2>什么是第一性原理？</h2>
      <p>第一性原理是一种从问题的本质出发进行思考的方式，而不是从类比或经验出发。</p>
      
      <h2>如何运用？</h2>
      <ol>
        <li><strong>剥离假设</strong>：去掉所有想当然的假设</li>
        <li><strong>追溯本质</strong>：找到最基本的不可分割的事实</li>
        <li><strong>构建方案</strong>：从本质出发构建新方案</li>
      </ol>
      
      <h2>应用场景</h2>
      <p>产品设计、技术选型、职业规划...任何需要创新思考的场景。</p>
    `,
    category: 'thinking',
    categoryName: '思维方法',
    date: '2026-04-06',
    readTime: '8分钟',
    icon: '💡'
  },

  // ========== 项目实战 ==========
  {
    id: 19,
    title: 'RAG实战：检索增强生成智能问答',
    summary: '构建基于RAG的智能问答系统',
    content: `
      <h2>RAG概述</h2>
      <p>检索增强生成(Retrieval-Augmented Generation)结合检索系统和生成模型，解决大模型知识过时问题。</p>
      
      <h2>系统架构</h2>
      <p>文档处理 → 向量检索 → 生成回答</p>
      <p>文档首先被分块并转换为向量存储。查询时检索相关片段，由LLM生成回答。</p>
      
      <h2>关键优化</h2>
      <p>分块策略、检索算法、融合排序影响系统效果。</p>
      
      <h2>实战框架</h2>
      <p><strong>LangChain</strong>、<strong>LlamaIndex</strong>可快速搭建RAG系统。</p>
    `,
    category: 'project',
    categoryName: '项目实战',
    date: '2026-04-05',
    readTime: '20分钟',
    icon: '🔍'
  },
  {
    id: 20,
    title: 'SRE稳定性保障：SLI/SLO/SLA实践',
    summary: '用SRE方法论量化服务质量',
    content: `
      <h2>核心概念</h2>
      <p><strong>SLI</strong>：服务质量指标（延迟、可用率）</p>
      <p><strong>SLO</strong>：目标值（如99.9%可用）</p>
      <p><strong>SLA</strong>：对外承诺协议</p>
      
      <h2>关键指标</h2>
      <ul>
        <li><strong>延迟</strong>：P50/P90/P99响应时间</li>
        <li><strong>可用性</strong>：成功请求占比</li>
        <li><strong>吞吐量</strong>：QPS/TPS</li>
        <li><strong>错误率</strong>：5xx错误占比</li>
      </ul>
      
      <h2>Error Budget策略</h2>
      <p>用error budget替代严格SLO，留给团队创新空间。</p>
    `,
    category: 'project',
    categoryName: '项目实战',
    date: '2026-04-20',
    readTime: '13分钟',
    icon: '📈'
  }
];

// 导出文章数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { articlesData };
}