// docs/ai-chat.js — AI 聊天界面

let chatHistory = [];
let isStreaming = false;

function toggleChat() {
  const panel = document.getElementById('ai-chat-panel');
  const toggle = document.getElementById('ai-chat-toggle');
  panel.classList.toggle('open');
  toggle.classList.toggle('hidden');
  if (panel.classList.contains('open')) {
    document.getElementById('ai-input').focus();
  }
}

function addMessage(role, content, streamingId) {
  const container = document.getElementById('ai-chat-messages');
  if (streamingId) {
    const existing = document.getElementById(streamingId);
    if (existing) {
      existing.innerHTML = content;
      container.scrollTop = container.scrollHeight;
      return;
    }
  }
  const div = document.createElement('div');
  div.className = `ai-message ai-${role}`;
  if (streamingId) div.id = streamingId;
  div.innerHTML = content;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

async function sendChat() {
  if (isStreaming) return;
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  addMessage('user', text);
  chatHistory.push({ role: 'user', content: text });

  isStreaming = true;
  let fullResponse = '';
  const msgId = 'ai-streaming-' + Date.now();
  addMessage('assistant', '🤔 思考中...', msgId);

  try {
    for await (const chunk of chatStream(chatHistory)) {
      fullResponse += chunk;
      addMessage('assistant', fullResponse + '<span class="ai-cursor">▌</span>', msgId);
    }
    addMessage('assistant', fullResponse, msgId);
    chatHistory.push({ role: 'assistant', content: fullResponse });
  } catch (err) {
    addMessage('assistant', `⚠️ 连接 Ollama 失败：${err.message}。请确认 Ollama 已启动。`, msgId);
  }
  isStreaming = false;

  if (chatHistory.length > 20) {
    chatHistory = chatHistory.slice(-20);
  }
}

// 获取当前可见的文章标题（供其他功能使用）
function getCurrentArticleTitle() {
  const h1 = document.querySelector('.article-detail h1');
  return h1 ? h1.textContent : '';
}

// 基于当前文章提问
function askAboutArticle(article) {
  const panel = document.getElementById('ai-chat-panel');
  if (!panel.classList.contains('open')) {
    toggleChat();
  }
  const contextPreamble = `基于以下知识库笔记回答我的问题。\n\n## 笔记标题: ${article.title}\n\n笔记摘要: ${article.summary}`;
  chatHistory = [
    { role: 'system', content: contextPreamble },
  ];
  const input = document.getElementById('ai-input');
  input.placeholder = '针对本文提问...';
  input.focus();
}

// AI 搜索
async function triggerAiSearch(query) {
  const articleList = articlesData.map(a => `- ${a.title}: ${a.summary}`).join('\n');
  const prompt = `知识库文章列表:\n${articleList}\n\n用户搜索: "${query}"\n请从以上文章中找出最相关的 3 篇，简短说明每篇为什么相关。`;

  const panel = document.getElementById('ai-chat-panel');
  if (!panel.classList.contains('open')) {
    toggleChat();
  }

  chatHistory = [
    { role: 'system', content: '你是知识库搜索助手，根据文章列表推荐最相关内容。回答简洁，中英文混合。' },
    { role: 'user', content: prompt }
  ];

  document.getElementById('ai-input').value = query;
  sendChat();
}
