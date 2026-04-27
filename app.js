// AI学习博客应用逻辑

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initArticleCards();
  initFilters();
  initPathAnimation();
});

// ==================== 主题切换 ====================
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

// ==================== 页面导航 ====================
let currentPage = 'home';

function navigateTo(page, articleId = null) {
  // 移除所有页面的active状态
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // 更新导航链接状态
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navLink = document.querySelector(`.nav-links a[onclick*="${page}"]`);
  if (navLink) navLink.classList.add('active');
  
  // 显示目标页面
  const targetPage = document.getElementById(`${page}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = page;
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 如果是文章详情页
    if (page === 'article' && articleId) {
      renderArticleDetail(articleId);
    }
    
    // 如果是文章列表页
    if (page === 'articles') {
      renderArticleList();
    }
  }
  
  return false;
}

// ==================== 文章卡片渲染 ====================
function initArticleCards() {
  renderArticleGrid();
}

function renderArticleGrid() {
  const grid = document.getElementById('article-grid');
  if (!grid) return;
  
  // 只显示前6篇文章
  const featuredArticles = articlesData.slice(0, 6);
  
  grid.innerHTML = featuredArticles.map(article => `
    <div class="article-card" onclick="navigateTo('article', ${article.id})">
      <div class="article-card-image">${article.icon}</div>
      <div class="article-card-content">
        <span class="article-card-tag">${article.categoryName}</span>
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <div class="article-card-meta">
          <span>📅 ${article.date}</span>
          <span>⏱️ ${article.readTime}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderArticleList(category = 'all') {
  const list = document.getElementById('article-list');
  if (!list) return;
  
  const filteredArticles = category === 'all' 
    ? articlesData 
    : articlesData.filter(a => a.category === category);
  
  list.innerHTML = filteredArticles.map(article => `
    <div class="article-card" onclick="navigateTo('article', ${article.id})">
      <div class="article-card-image">${article.icon}</div>
      <div class="article-card-content">
        <span class="article-card-tag">${article.categoryName}</span>
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <div class="article-card-meta">
          <span>📅 ${article.date}</span>
          <span>⏱️ ${article.readTime}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==================== 筛选器 ====================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 更新激活状态
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 筛选文章
      const category = btn.dataset.category;
      renderArticleList(category);
    });
  });
}

// ==================== 文章详情 ====================
function renderArticleDetail(articleId) {
  const article = articlesData.find(a => a.id === articleId);
  const container = document.getElementById('article-detail');
  
  if (!article || !container) return;
  
  container.innerHTML = `
    <div class="article-header">
      <span class="article-detail-tag">${article.categoryName}</span>
      <h1>${article.title}</h1>
      <div class="article-detail-meta">
        <span>📅 ${article.date}</span>
        <span>⏱️ ${article.readTime}</span>
      </div>
    </div>
    <div class="article-cover">${article.icon}</div>
    <div class="article-body">
      ${article.content}
    </div>
  `;
}

// ==================== 学习路径动画 ====================
function initPathAnimation() {
  const pathItems = document.querySelectorAll('.path-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });
  
  pathItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(item);
  });
}

// ==================== 滚动动画 ====================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.category-card, .article-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

// 初始化滚动动画
initScrollAnimations();