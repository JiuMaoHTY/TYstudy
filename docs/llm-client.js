// docs/llm-client.js — Ollama API 客户端

const OLLAMA_ENDPOINT = 'http://localhost:11434/api/chat';
const DEFAULT_MODEL = 'qwen2.5:7b';

async function checkOllamaStatus() {
  try {
    const res = await fetch('http://localhost:11434/api/tags');
    if (!res.ok) return false;
    const data = await res.json();
    return data.models && data.models.length > 0;
  } catch {
    return false;
  }
}

async function* chatStream(messages, options = {}) {
  const res = await fetch(OLLAMA_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: options.model || DEFAULT_MODEL,
      messages,
      stream: true,
      options: {
        temperature: options.temperature ?? 0.7,
        num_ctx: options.num_ctx || 4096
      }
    })
  });

  if (!res.ok) throw new Error(`Ollama API error: ${res.status}`);

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const parsed = JSON.parse(line);
        yield parsed.message?.content || '';
        if (parsed.done) return;
      } catch {}
    }
  }
}

async function chat(messages, options = {}) {
  let result = '';
  for await (const chunk of chatStream(messages, options)) {
    result += chunk;
  }
  return result;
}
