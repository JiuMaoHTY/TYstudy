// docs/progress-data.js — 学习进度数据模型

const ZONE_PROGRESS = [
  {
    id: 'tech',
    name: '技术学习',
    icon: '💻',
    items: [
      { label: 'MySQL 索引', done: false },
      { label: 'InnoDB 架构', done: false },
      { label: 'Redis 数据结构', done: false },
      { label: 'MySQL 锁机制', done: false },
      { label: 'MySQL 事务/MVCC', done: false },
      { label: 'MySQL 日志', done: false },
      { label: 'SQL 优化', done: false },
      { label: 'MySQL 实操 3 项', done: false },
      { label: 'Redis 持久化', done: false },
      { label: 'Redis 缓存策略', done: false },
      { label: 'Redis 分布式锁', done: false },
      { label: 'Redis 集群', done: false },
      { label: 'Redis 实操 3 项', done: false },
      { label: 'CAP / BASE', done: false },
      { label: 'Raft 共识算法', done: false },
      { label: '2PC/TCC/Saga', done: false },
      { label: '服务治理', done: false },
      { label: 'Kafka 架构', done: false },
      { label: '设计模式', done: false },
      { label: '微服务设计', done: false },
      { label: '高并发三板斧', done: false },
    ]
  },
  {
    id: 'devops',
    name: '运维笔记',
    icon: '⚙️',
    items: [
      { label: 'Docker 原理', done: false },
      { label: 'Dockerfile 最佳实践', done: false },
      { label: 'Docker Compose', done: false },
      { label: 'K8s Pod 生命周期', done: false },
      { label: 'K8s Controller', done: false },
      { label: 'K8s Service/Ingress', done: false },
      { label: 'K8s 存储', done: false },
      { label: 'K8s 排查命令', done: false },
      { label: 'Linux CPU 诊断', done: false },
      { label: 'Linux 内存/磁盘/网络', done: false },
      { label: 'CI/CD 流水线', done: false },
      { label: 'Prometheus + Grafana', done: false },
      { label: 'TCP/TLS 深入', done: false },
    ]
  },
  {
    id: 'ai',
    name: 'AI本地部署',
    icon: '🤖',
    items: [
      { label: 'Ollama 模型管理', done: false },
      { label: 'Modelfile 定制', done: false },
      { label: 'Open WebUI 部署', done: false },
      { label: 'RAG 功能', done: false },
      { label: '模型评测', done: false },
      { label: '推理优化', done: false },
      { label: 'Prompt Engineering', done: false },
      { label: 'RAG 问答项目', done: false },
      { label: '简历优化 Agent', done: false },
    ]
  },
  {
    id: 'thesis',
    name: '毕设归档',
    icon: '🎓',
    items: [
      { label: '开题报告', done: false },
      { label: '文献研究', done: false },
      { label: '系统实现', done: false },
      { label: '实验数据', done: false },
      { label: '答辩准备', done: false },
    ]
  },
  {
    id: 'interview',
    name: '求职面试',
    icon: '🎯',
    items: [
      { label: 'OS 八股', done: false },
      { label: '网络八股', done: false },
      { label: '数据库八股', done: false },
      { label: 'Go 八股', done: false },
      { label: 'Java 八股', done: false },
      { label: '系统设计', done: false },
      { label: '算法刷题', done: false },
      { label: '面经复盘', done: false },
      { label: '简历', done: false },
    ]
  },
  {
    id: 'life',
    name: '生活杂记',
    icon: '📝',
    items: [
      { label: '日报', done: false },
      { label: '周记', done: false },
      { label: '读书笔记', done: false },
      { label: '效率工具', done: false },
    ]
  },
  {
    id: 'games',
    name: '游戏存档',
    icon: '🎮',
    items: [
      { label: '在玩游戏记录', done: false },
      { label: '已通关记录', done: false },
      { label: '游戏笔记', done: false },
      { label: '配置备份', done: false },
    ]
  },
];

function getProgress() {
  const saved = localStorage.getItem('kb_progress');
  if (saved) {
    const parsed = JSON.parse(saved);
    return ZONE_PROGRESS.map(zone => {
      const savedZone = parsed.find(p => p.id === zone.id);
      if (savedZone) {
        zone.items.forEach((item, i) => {
          if (savedZone.items[i] !== undefined) {
            item.done = savedZone.items[i].done;
          }
        });
      }
      return zone;
    });
  }
  return JSON.parse(JSON.stringify(ZONE_PROGRESS));
}

function saveProgress(progress) {
  localStorage.setItem('kb_progress', JSON.stringify(progress));
}

function toggleItem(zoneId, itemIndex) {
  const progress = getProgress();
  const zone = progress.find(z => z.id === zoneId);
  if (zone && zone.items[itemIndex]) {
    zone.items[itemIndex].done = !zone.items[itemIndex].done;
    saveProgress(progress);
    if (typeof renderDashboard === 'function') renderDashboard();
  }
}
