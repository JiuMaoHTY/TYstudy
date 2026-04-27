// AI学习博客文章数据
const articlesData = [
  {
    id: 1,
    title: '深度学习入门：从感知机到神经网络',
    summary: '本文带你从最基础的感知机出发，逐步理解神经网络的构建原理和工作机制。',
    content: `
      <h2>引言</h2>
      <p>深度学习已经成为人工智能领域最热门的技术方向之一。但要想真正理解深度学习，我们需要从最基础的概念开始，一步一步构建知识体系。</p>
      
      <h2>感知机：神经网络的起点</h2>
      <p>感知机(Perceptron)是最简单的人工神经网络模型，由Frank Rosenblatt在1957年提出。它是理解更复杂神经网络的基础。</p>
      <p>感知机接收多个输入信号，通过加权求和后加上偏置，再通过激活函数产生输出。这种结构启发了后来神经元模型的设计。</p>
      
      <h2>多层感知机与反向传播</h2>
      <p>单层感知机只能处理线性可分问题。为了解决非线性问题，我们需要多层感知机(MLP)。</p>
      <p>反向传播算法(Backpropagation)是训练多层神经网络的核心方法。它通过链式法则计算梯度，逐层调整网络参数。</p>
      
      <h2>激活函数</h2>
      <p>激活函数为神经网络引入了非线性特性。常见的激活函数包括：</p>
      <ul>
        <li><strong>ReLU</strong>：Rectified Linear Unit，目前最常用的激活函数</li>
        <li><strong>Sigmoid</strong>：常用于二分类问题</li>
        <li><strong>Tanh</strong>：输出范围为(-1, 1)</li>
      </ul>
      
      <h2>总结</h2>
      <p>本文介绍了深度学习的基础知识，从感知机到多层神经网络。理解这些概念对于后续学习卷积神经网络、循环神经网络等更复杂的模型至关重要。</p>
    `,
    category: 'dl',
    categoryName: '深度学习',
    date: '2026-04-20',
    readTime: '12分钟',
    icon: '🧠'
  },
  {
    id: 2,
    title: '机器学习基础：掌握监督学习的核心算法',
    summary: '深入��析监督学习的核心算法，包括线性回归、逻辑回归、支持向量机等经典模型。',
    content: `
      <h2>什么是监督学习？</h2>
      <p>监督学习是机器学习中最常见的学习范式。其核心思想是：通过已有的输入-输出样本对，学习一个从输入到输出的映射函数。</p>
      
      <h2>线性回归与逻辑回归</h2>
      <p>线性回归用于预测连续值输出，是最基础的回归算法。而逻辑回归虽然名字带"回归"，实际上是一个分类算法。</p>
      <p>两者都使用梯度下降法进行参数优化，区别在于损失函数的选择。</p>
      
      <h2>支持向量机(SVM)</h2>
      <p>SVM通过寻找最大间隔分类超平面来实现分类。它在小样本数据集上表现优异，核技巧使其能够处理非线性问题。</p>
      
      <h2>决策树与随机森林</h2>
      <p>决策树通过构建树形结构进行决策，易于理解和解释。随机森林通过集成多棵决策树，提高了模型的泛化能力。</p>
      
      <h2>实践建议</h2>
      <p>在实际项目中，选择算法时需要考虑：数据规模、特征维度、可解释性要求、训练时间等因素。没有万能的最佳算法，只有最适合的算法。</p>
    `,
    category: 'ml',
    categoryName: '机器学习',
    date: '2026-04-18',
    readTime: '15分钟',
    icon: '🤖'
  },
  {
    id: 3,
    title: 'Transformer模型详解：注意力机制的革命',
    summary: '全面解析Transformer架构的核心原理，理解自注意力机制如何改变NLP领域。',
    content: `
      <h2>Transformer的诞生</h2>
      <p>2017年，Google在论文《Attention Is All You Need》中提出了Transformer架构，彻底改变了自然语言处理领域。</p>
      
      <h2>自注意力机制</h2>
      <p>自注意力机制(Self-Attention)是Transformer的核心。它允许序列中的每个位置关注序列中的所有其他位置，从而捕获长距离依赖。</p>
      <p>计算过程包括：Query、Key、Value的线性变换，点积注意力权重计算，以及加权求和。</p>
      
      <h2>多头注意力</h2>
      <p>通过多个注意力头并行计算，模型可以从不同角度关注不同类型的信息，增强了模型的表达能力。</p>
      
      <h2>位置编码</h2>
      <p>由于Transformer没有循环结构，需要通过位置编码注入序列位置信息。正弦和余弦函数构造的位置编码是常用方法。</p>
      
      <h2>应用与发展</h2>
      <p>基于Transformer的预训练模型，如BERT、GPT等，在各项NLP任务上取得了突破性进展。GPT-4、Claude等大语言模型更是将这一技术推向了新的高度。</p>
    `,
    category: 'nlp',
    categoryName: '自然语言处理',
    date: '2026-04-15',
    readTime: '18分钟',
    icon: '📝'
  },
  {
    id: 4,
    title: '计算机视觉实战：用CNN进行图像分类',
    summary: '从理论到实践，详细介绍卷积神经网络在图像分类任务中的应用。',
    content: `
      <h2>卷积神经网络概述</h2>
      <p>卷积神经网络(CNN)是计算机视觉领域最成功的模型架构。它通过局部连接和权重共享，高效处理图像数据。</p>
      
      <h2>CNN核心组件</h2>
      <p>一个典型的CNN包含以下组件：</p>
      <ul>
        <li><strong>卷积层</strong>：提取图像特征</li>
        <li><strong>池化层</strong>：降维和增强平移不变性</li>
        <li><strong>全连接层</strong>：输出分类结果</li>
      </ul>
      
      <h2>经典架构演进</h2>
      <p>从LeNet到ResNet，CNN架构不断进化：</p>
      <p>ResNet引入残差连接，解决了深层网络训练困难的问题，成为现代视觉模型的基础。</p>
      
      <h2>实战项目</h2>
      <p>使用PyTorch或TensorFlow，可以快速搭建图像分类模型。迁移学习利用预训练模型，能够在少量数据上取得良好效果。</p>
    `,
    category: 'cv',
    categoryName: '计算机视觉',
    date: '2026-04-12',
    readTime: '14分钟',
    icon: '👁️'
  },
  {
    id: 5,
    title: '大模型Prompt工程：解锁AI的无限可能',
    summary: '掌握Prompt Engineering的核心技巧，让大语言模型输出更精准、更有价值的内容。',
    content: `
      <h2>什么是Prompt工程？</h2>
      <p>Prompt工程是设计与优化输入提示的技术，旨在引导大语言模型产生更准确、更有用的输出。</p>
      
      <h2>基础技巧</h2>
      <p><strong>清晰明确</strong>：明确指定任务目标和格式要求</p>
      <p><strong>上下文注入</strong>：提供必要的背景信息</p>
      <p><strong>Few-shot示例</strong>：通过示例帮助模型理解任务</p>
      
      <h2>进阶策略</h2>
      <p>链式思考(Chain-of-Thought)引导模型分步骤思考，显著提高推理能力。</p>
      <p>思维树(Tree-of-Thought)探索多种解决方案，适合复杂问题。</p>
      
      <h2>安全与伦理</h2>
      <p>注意避免Prompt注入攻击，对输出进行安全审核，确保AI应用符合伦理规范。</p>
    `,
    category: 'project',
    categoryName: '项目实战',
    date: '2026-04-10',
    readTime: '10分钟',
    icon: '⚡'
  },
  {
    id: 6,
    title: 'DevOps学习路线：从零构建DevOps能力体系',
    summary: '基于roadmap.sh梳理DevOps工程师必备技能，从基础到进阶的完整学习路径。',
    content: `
      <h2>DevOps是什么？</h2>
      <p>DevOps是开发(Development)与运维(Operations)的结合，强调开发团队和运维团队紧密协作，实现快速、高质量的软件交付。</p>
      
      <h2>核心技能路线</h2>
      <p><strong>第一阶段：基础技能</strong></p>
      <ul>
        <li>Linux基础：命令行操作、系统管理、网络配置</li>
        <li>Git版本控制：分支策略、代码合并、冲突解决</li>
        <li>编程基础：Shell脚本、Python自动化</li>
      </ul>
      
      <p><strong>第二阶段：核心工具</strong></p>
      <ul>
        <li>容器化：Docker容器、镜像制作、Dockerfile编写</li>
        <li>容器编排：Kubernetes集群管理、服务部署</li>
        <li>CI/CD：Jenkins、GitLab CI、ArgoCD</li>
      </ul>
      
      <p><strong>第三阶段：监控运维</strong></p>
      <ul>
        <li>监控体系：Prometheus、Grafana监控面板</li>
        <li>日志管理：ELK Stack日志收集分析</li>
        <li>基础设施即代码：Terraform、Ansible</li>
      </ul>
      
      <h2>学习资源推荐</h2>
      <p>推荐使用roadmap.sh的DevOps路线图进行系统学习，它提供了交互式的学习路径和详细的学习资源。</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-25',
    readTime: '15分钟',
    icon: '🚀'
  },
  {
    id: 7,
    title: 'AI工程师学习路线：成为AI时代的开发者',
    summary: '从基础到实战，完整的AI工程师技能图谱与学习路径规划。',
    content: `
      <h2>AI工程师定义</h2>
      <p>AI工程师是将AI能力落地的关键角色，需要同时具备软件工程能力和AI专业知识。</p>
      
      <h2>技能图谱</h2>
      <p><strong>数学基础</strong></p>
      <ul>
        <li>线性代数：矩阵运算、特征值分解</li>
        <li>概率统计：概率分布、假设检验</li>
        <li>微积分：梯度、导数、偏导数</li>
      </ul>
      
      <p><strong>机器学习</strong></p>
      <ul>
        <li>监督学习：回归、分类算法</li>
        <li>无监督学习：聚类、降维</li>
        <li>模型评估：交叉验证、指标选择</li>
      </ul>
      
      <p><strong>深度学习</strong></p>
      <ul>
        <li>神经网络基础：感知机、激活函数</li>
        <li>CNN/RNN/Transformer架构</li>
        <li>预训练模型微调(Fine-tuning)</li>
      </ul>
      
      <p><strong>AI应用开发</strong></p>
      <ul>
        <li>LangChain/LlamaIndex应用框架</li>
        <li>向量数据库：Pinecone、Milvus</li>
        <li>Prompt Engineering实战</li>
      </ul>
      
      <h2>学习路线图</h2>
      <p>推荐使用roadmap.sh的AI Engineer路线图进行系统化学习，它涵盖了从基础到高级的完整路径。</p>
    `,
    category: 'ai',
    categoryName: 'AI工程师',
    date: '2026-04-24',
    readTime: '18分钟',
    icon: '🤖'
  },
  {
    id: 8,
    title: '运维工具精选：Awesome-Ops实用工具推荐',
    summary: '从awesome-ops精选最实用的运维工具，提升运维效率。',
    content: `
      <h2>CICD工具推荐</h2>
      <p><strong>Jenkins</strong> - 领先的开源自动化服务器，拥有1800+插件生态</p>
      <p><strong>ArgoCD</strong> - Kubernetes声明式持续部署工具，支持GitOps</p>
      <p><strong>Woodpecker</strong> - 轻量级CI/CD引擎，简单而强大</p>
      
      <h2>容器管理工具</h2>
      <p><strong>Portainer</strong> - Docker和Kubernetes的可视化管理界面</p>
      <p><strong>Dockge</strong> - 现代化的docker-compose管理工具</p>
      <p><strong>Dozzle</strong> - 实时监控Docker容器日志的轻量工具</p>
      
      <h2>监控告警工具</h2>
      <p><strong>Prometheus</strong> - 云原生监控事实标准</p>
      <p><strong>Grafana</strong> - 可视化监控面板</p>
      <p><strong>UptimeKuma</strong> - 自托管监控工具，支持多种通知方式</p>
      
      <h2>备份恢复工具</h2>
      <p><strong>Restic</strong> - 快速、高效、安全的跨平台备份工具</p>
      <p><strong>Gobackup</strong> - 专为应用服务器设计的备份工具</p>
      
      <h2>数据库管理工具</h2>
      <p><strong>ClickVisual</strong> - 轻量级日志分析平台，基于ClickHouse</p>
      <p><strong>CKibana</strong> - 原生Kibana查询ClickHouse的服务</p>
      
      <h2>更多资源</h2>
      <p>Awesome-Ops项目收录了82个运维分类、652个优秀运维项目，是运维工程师的必备书签。</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-23',
    readTime: '12分钟',
    icon: '🛠️'
  },
  {
    id: 9,
    title: 'Docker容器化：构建高效可移植的应用环境',
    summary: '掌握Docker核心概念，从镜像构建到容器编排的完整指南。',
    content: `
      <h2>Docker核心概念</h2>
      <p><strong>镜像(Image)</strong> - 应用程序模板，只读模板</p>
      <p><strong>容器(Container)</strong> - 镜像的运行实例</p>
      <p><strong>仓库(Registry)</strong> - 存储和分发镜像的服务</p>
      
      <h2>常用命令</h2>
      <p><code>docker build</code> - 构建镜像</p>
      <p><code>docker run</code> - 运行容器</p>
      <p><code>docker ps</code> - 查看运行中的容器</p>
      <p><code>docker logs</code> - 查看容器日志</p>
      
      <h2>Dockerfile最佳实践</h2>
      <ul>
        <li>使用多阶段构建减小镜像体积</li>
        <li>合理利用构建缓存</li>
        <li>使用.dockerignore排除无关文件</li>
        <li>非root用户运行容器</li>
      </ul>
      
      <h2>实用工具推荐</h2>
      <p><strong>Dive</strong> - 分析Docker镜像分层内容，发现镜像优化空间</p>
      <p><strong>Lazydocker</strong> - Docker终端UI工具</p>
      <p><strong>Slim</strong> - 镜像体积优化工具，可缩小30倍</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-21',
    readTime: '14分钟',
    icon: '🐳'
  },
  {
    id: 10,
    title: 'Kubernetes入门：云原生应用部署与管理',
    summary: 'K8s核心概念解析，从Pod到Deployment的完整指南。',
    content: `
      <h2>为什么需要Kubernetes？</h2>
      <p>Kubernetes(K8s)是容器编排的事实标准，提供了自动化部署、扩展和管理容器化应用的能力。</p>
      
      <h2>核心概念</h2>
      <p><strong>Pod</strong> - K8s最小调度单位，一个Pod包含一个或多个容器</p>
      <p><strong>Service</strong> - 负载均衡和服务发现</p>
      <p><strong>Deployment</strong> - 管理Pod副本数和更新策略</p>
      <p><strong>Namespace</strong> - 资源隔离和命名空间划分</p>
      
      <h2>核心组件</h2>
      <ul>
        <li><strong>API Server</strong> - 集群统一入口</li>
        <li><strong>etcd</strong> - 分布式键值存储</li>
        <li><strong>Scheduler</strong> - Pod调度器</li>
        <li><strong>Kubelet</strong> - 节点代理</li>
      </ul>
      
      <h2>常用工具推荐</h2>
      <p><strong>Lens</strong> - 强大的Kubernetes IDE</p>
      <p><strong>Octant</strong> - 可视化Kubernetes资源浏览器</p>
      <p><strong>K9s</strong> - 终端Kubernetes管理工具</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-19',
    readTime: '16分钟',
    icon: '☸️'
  },
  {
    id: 11,
    title: '扩散模型原理：如何让AI创造图像',
    summary: '深入解析扩散模型的工作原理，理解Stable Diffusion等AI绘图工具的核心技术。',
    content: `
      <h2>扩散模型基础</h2>
      <p>扩散模型通过逐步加噪和去噪的过程生成数据。它包含前向过程(加噪)和反向过程(去噪)两部分。</p>
      
      <h2>前向扩散</h2>
      <p>前向过程向真实数据逐步添加高斯噪声，最终变为纯噪声分布。这个过程不包含可学习参数。</p>
      
      <h2>反向去噪</h2>
      <p>反向过程训练神经网络预测噪声，逐步去除噪声恢复数据。UNet架构是常用的噪声预测网络。</p>
      
      <h2>条件扩散</h2>
      <p>通过交叉注意力机制，扩散模型可以接受文本、图像等条件输入，实现可控生成。</p>
      
      <h2>应用前沿</h2>
      <p>Stable Diffusion、DALL-E、Midjourney等工具将扩散模型带入大众视野。视频生成、运动控制等方向正在快速发展。</p>
    `,
    category: 'dl',
    categoryName: '深度学习',
    date: '2026-04-02',
    readTime: '22分钟',
    icon: '🎨'
  },
  {
    id: 12,
    title: 'RAG实战：用检索增强生成构建智能问答',
    summary: '手把手教你构建基于RAG的智能问答系统，结合知识库与大模型能力。',
    content: `
      <h2>RAG概述</h2>
      <p>检索增强生成(Retrieval-Augmented Generation)结合了检索系统和生成模型的优势，有效解决大模型知识过时的问题。</p>
      
      <h2>系统架构</h2>
      <p>RAG系统包含三个核心模块：文档处理、向量检索、生成回答。</p>
      <p>文档首先被分块并转换为向量存储。查询时，检索最相关的文档片段，最后由LLM生成回答。</p>
      
      <h2>关键优化</h2>
      <p>分块策略、检索算法、融合排序等环节都影响系统效果。HyDE等先进检索技术可以提升检索精度。</p>
      
      <h2>实战建议</h2>
      <p>使用LangChain、LlamaIndex等框架可以快速搭建RAG系统。针对具体场景进行调优，才能达到最佳效果。</p>
    `,
    category: 'project',
    categoryName: '项目实战',
    date: '2026-04-05',
    readTime: '20分钟',
    icon: '🔍'
  },
  {
    id: 13,
    title: 'AI Agent开发：从手写识别到智能助手',
    summary: '深入理解AI Agent的核心概念与开发框架，构建自主决策的智能系统。',
    content: `
      <h2>什么是AI Agent？</h2>
      <p>AI Agent是能够自主决策、执行任务、与环境交互的智能系统。它不仅能回答问题，还能规划行动、调用工具、完成复杂任务。</p>
      
      <h2>核心组件</h2>
      <ul>
        <li><strong>规划(Planning)</strong>：将复杂任务分解为可执行的子任务</li>
        <li><strong>记忆(Memory)</strong>：存储对话历史和关键信息</li>
        <li><strong>工具(Tools)</strong>：调用外部API、搜索、计算等</li>
        <li><strong>行动(Action)</strong>：执行决策并评估结果</li>
      </ul>
      
      <h2>主流框架</h2>
      <p><strong>LangGraph</strong> - 构建复杂多步骤Agent工作流</p>
      <p><strong>AutoGPT</strong> - 自主任务分解与执行</p>
      <p><strong>CrewAI</strong> - 多Agent协作框架</p>
      
      <h2>应用场景</h2>
      <p>个人助手、代码助手、数据分析、客服机器人自动化工作流</p>
    `,
    category: 'ai',
    categoryName: 'AI工程师',
    date: '2026-04-26',
    readTime: '18分钟',
    icon: '🤖'
  },
  {
    id: 14,
    title: '大模型微调：LoRA与QLoRA实战指南',
    summary: '掌握低成本高效的大模型微调技术，让模型适配特定领域任务。',
    content: `
      <h2>为什么需要微调？</h2>
      <p>预训练大模型具备通用能力，但针对特定领域任务，垂直微调能显著提升效果。</p>
      
      <h2>LoRA原理</h2>
      <p>Low-Rank Adaptation通过冻结原模型权重，只训练低秩矩阵，大幅减少参数量。</p>
      <ul>
        <li>训练参数量减少100-1000倍</li>
        <li>显存需求大幅降低</li>
        <li>可动态切换不同任务适配器</li>
      </ul>
      
      <h2>QLoRA优化</h2>
      <p>量化+LoRA组合，在4-bit量化基础上进行微调，单卡即可微调70B模型。</p>
      
      <h2>实战工具</h2>
      <p><strong>Axolotl</strong> - 主流微调框架</p>
      <p><strong>Unsloth</strong> - 加速微调工具，2倍速</p>
      <p><strong>LLaMA-Factory</strong> - 开源微调平台</p>
    `,
    category: 'ai',
    categoryName: 'AI工程师',
    date: '2026-04-25',
    readTime: '15分钟',
    icon: '⚙️'
  },
  {
    id: 15,
    title: '向量数据库：AI应用的记忆存储',
    summary: '主流向量数据库对比与选型，构建高效的语义检索系统。',
    content: `
      <h2>向量数据库的作用</h2>
      <p>存储嵌入向量，支持高效相似度搜索，是RAG系统和AI应用的核心基础设施。</p>
      
      <h2>主流产品对比</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><th style="border:1px solid #333;padding:8px;">数据库</th><th style="border:1px solid #333;padding:8px;">特点</th></tr>
        <tr><td style="border:1px solid #333;padding:8px;">Milvus</td><td style="border:1px solid #333;padding:8px;">开源、可扩展、成熟</td></tr>
        <tr><td style="border:1px solid #333;padding:8px;">Pinecone</td><td style="border:1px solid #333;padding:8px;">云原生、免运维</td></tr>
        <tr><td style="border:1px solid #333;padding:8px;">Qdrant</td><td style="border:1px solid #333;padding:8px;">Rust实现、高性能</td></tr>
        <tr><td style="border:1px solid #333;padding:8px;">Weaviate</td><td style="border:1px solid #333;padding:8px;">内置向量化功能</td></tr>
      </table>
      
      <h2>选型建议</h2>
      <p>小规模场景用Chroma本地存储，生产环境推荐Milvus或Qdrant，云服务选Pinecone。</p>
    `,
    category: 'ai',
    categoryName: 'AI工程师',
    date: '2026-04-24',
    readTime: '12分钟',
    icon: '🗄️'
  },
  {
    id: 16,
    title: 'Prometheus监控：云原生时代的监控实践',
    summary: '从零搭建Prometheus+Grafana监控体系，掌握指标采集与告警配置。',
    content: `
      <h2>Prometheus核心概念</h2>
      <p><strong>指标(Metrics)</strong> - 带时间戳的数值数据</p>
      <p><strong>抓取(Scraping)</strong> - 周期性拉取指标数据</p>
      <p><strong>PromQL</strong> - 强大的指标查询语言</p>
      
      <h2>Exporter生态</h2>
      <ul>
        <li><strong>node_exporter</strong> - 系统级指标(CPU、内存、磁盘)</li>
        <li><strong>cadvisor</strong> - Docker容器监控</li>
        <li><strong>blackbox_exporter</strong> - HTTP/TCP探测</li>
        <li><strong>mysqld_exporter</strong> - 数据库指标</li>
      </ul>
      
      <h2>Grafana可视化</h2>
      <p>Grafana提供丰富的图表类型和模板，支持从Prometheus等多种数据源获取数据。</p>
      
      <h2>告警配置</h2>
      <p>使用AlertManager实现告警聚合、去重和路由，支持邮件、钉钉、Slack等多渠道通知。</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-23',
    readTime: '16分钟',
    icon: '📊'
  },
  {
    id: 17,
    title: 'GitOps实践：ArgoCD实现声明式部署',
    summary: '用Git作为单一真相源，实现Kubernetes集群的自动化部署。',
    content: `
      <h2>GitOps核心思想</h2>
      <p>以Git仓库为唯一的配置和部署真相来源，通过自动同步机制保持集群状��与Git定义一致。</p>
      
      <h2>ArgoCD特点</h2>
      <ul>
        <li>声明式应用定义</li>
        <li>可视化部署状态</li>
        <li>自动同步与回滚</li>
        <li>多集群管理</li>
      </ul>
      
      <h2>工作流程</h2>
      <p>开发者提交代码 → CI构建镜像 → 更新Yaml配置 → ArgoCD检测变更 → 自动部署到集群</p>
      
      <h2>最佳实践</h2>
      <p><strong>应用(Application)</strong>：定义要部署的应用和目标集群</p>
      <p><strong>应用集(ApplicationSet)</strong>：批量创建应用的自动化工具</p>
      <p><strong>Rollout</strong>：支持金丝雀发布、蓝绿部署等高级策略</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-22',
    readTime: '14分钟',
    icon: '🔄'
  },
  {
    id: 18,
    title: 'Python异步编程：asyncio高并发实战',
    summary: '掌握Python异步编程范式，提升I/O密集型任务性能。',
    content: `
      <h2>为什么需要异步？</h2>
      <p>在I/O密集型场景（如网络请求、文件读写），异步编程能显著提升并发能力和资源利用率。</p>
      
      <h2>核心概念</h2>
      <p><strong>协程(Coroutine)</strong>：可在暂停和恢复间切换的函数</p>
      <p><strong>事件循环(Event Loop)</strong>：调度协程执行的引擎</p>
      <p><strong>Future/Task</strong>：协程的包装器，代表未来结果</p>
      
      <h2>实战示例</h2>
      <pre><code>import asyncio

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

async def main():
    tasks = [fetch(url) for url in urls]
    results = await asyncio.gather(*tasks)

asyncio.run(main())</code></pre>
      
      <h2>常用框架</h2>
      <p><strong>aiohttp</strong>：异步HTTP客户端</p>
      <p><strong>FastAPI</strong>：异步Web框架</p>
      <p><strong>SQLAlchemy async</strong>：异步ORM</p>
    `,
    category: 'project',
    categoryName: '项目实战',
    date: '2026-04-21',
    readTime: '15分钟',
    icon: '🐍'
  },
  {
    id: 19,
    title: 'SRE稳定性保障：SLI/SLO/SLA实践指南',
    summary: '用SRE方法论量化服务质量，建立可观测性体系。',
    content: `
      <h2>核心概念</h2>
      <p><strong>SLI (Service Level Indicator)</strong>：服务质量指标，如延迟、可用率</p>
      <p><strong>SLO (Service Level Objective)</strong>：目标值，如99.9%可用</p>
      <p><strong>SLA (Service Level Agreement)</strong>：对外承诺协议</p>
      
      <h2>关键指标选择</h2>
      <ul>
        <li><strong>延迟</strong>：P50/P90/P99响应时间</li>
        <li><strong>可用性</strong>：成功请求占比</li>
        <li><strong>吞吐量</strong>：QPS/TPS</li>
        <li><strong>错误率</strong>：5xx错误占比</li>
      </ul>
      
      <h2>Error Budget策略</h2>
      <p>用error budget替代严格SLO，留给团队创新空间。当预算耗尽时暂停新功能，专注稳定性。</p>
      
      <h2>可观测性三要素</h2>
      <p><strong>指标(Metrics)</strong>：聚合数值 → Prometheus</p>
      <p><strong>日志(Logs)</strong>：事件记录 → Loki/ELK</p>
      <p><strong>链路(Traces)</strong>：调用链路 → Jaeger</p>
    `,
    category: 'devops',
    categoryName: 'DevOps',
    date: '2026-04-20',
    readTime: '13分钟',
    icon: '📈'
  },
  {
    id: 20,
    title: 'AI编程工具对比：Copilot vs Cursor vs Claude',
    summary: '主流AI编程助手深度对比，找到最适合你的代码搭档。',
    content: `
      <h2>GitHub Copilot</h2>
      <p><strong>优势</strong>：集成度高、实时补全、上下文理解</p>
      <p><strong>特点</strong>：基于OpenAI Codex模型，支持多语言</p>
      <p><strong>适合</strong>：习惯VS Code、需要快速补全的开发者</p>
      
      <h2>Cursor</h2>
      <p><strong>优势</strong>：对话式交互、代码库感知、Composer多文件编辑</p>
      <p><strong>特点</strong>：深度集成GPT-4/Claude，自研模型优化</p>
      <p><strong>适合</strong>：需要重构、生成复杂功能的场景</p>
      
      <h2>Claude ( Anthropic )</h2>
      <p><strong>优势</strong>：长上下文、分析能力强、安全性高</p>
      <p><strong>特点</strong>：100K上下文窗口，适合大型项目</p>
      <p><strong>适合</strong>：代码审查、架构设计、长文件编辑</p>
      
      <h2>选型建议</h2>
      <p>日常补全用Copilot，复杂任务用Cursor，代码审查用Claude。结合使用效果更佳。</p>
    `,
    category: 'project',
    categoryName: '项目实战',
    date: '2026-04-19',
    readTime: '12分钟',
    icon: '💻'
  }
];

// 导出文章数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { articlesData };
}