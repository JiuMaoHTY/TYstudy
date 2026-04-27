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
  }
];

// 导出文章数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { articlesData };
}