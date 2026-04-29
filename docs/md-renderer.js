// docs/md-renderer.js — Markdown 渲染引擎

// 配置 marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (_) {}
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true
});

// 解析 frontmatter (--- 分隔的 YAML 头)
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };
  const meta = {};
  match[1].split('\n').forEach(line => {
    const sep = line.indexOf(': ');
    if (sep > 0) {
      const key = line.slice(0, sep).trim();
      let val = line.slice(sep + 2).trim();
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim().replace(/["']/g, ''));
      } else {
        val = val.replace(/^["']|["']$/g, '');
      }
      meta[key] = val;
    }
  });
  return { meta, content: match[2].trim() };
}

// 获取并渲染 MD 文件
async function renderMarkdownFile(path) {
  const raw = await fetch(path.startsWith('/') ? path : `/${path}`).then(r => {
    if (!r.ok) throw new Error(`Failed to load ${path}: ${r.status}`);
    return r.text();
  });
  const { meta, content } = parseFrontmatter(raw);
  const html = marked.parse(content);
  return { meta, html };
}

// 生成目录 (从渲染后的 HTML 提取 h2/h3)
function extractTocFromHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  const headings = div.querySelectorAll('h2, h3');
  return Array.from(headings).map(h => ({
    level: h.tagName.toLowerCase(),
    text: h.textContent,
    id: h.id || h.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w一-龥-]/g, '')
  }));
}
