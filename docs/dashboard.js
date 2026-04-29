// docs/dashboard.js — 学习仪表盘

function renderDashboard() {
  const grid = document.getElementById('dashboard-grid');
  if (!grid) return;

  const progress = getProgress();

  grid.innerHTML = progress.map(zone => {
    const done = zone.items.filter(i => i.done).length;
    const total = zone.items.length;
    const pct = total > 0 ? Math.round(done / total * 100) : 0;
    return `
      <div class="dashboard-card" data-zone="${zone.id}">
        <div class="dashboard-card-header">
          <span class="dashboard-icon">${zone.icon}</span>
          <h3>${zone.name}</h3>
          <span class="dashboard-stat">${done}/${total}</span>
        </div>
        <div class="dashboard-bar">
          <div class="dashboard-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="dashboard-items">
          ${zone.items.map((item, i) => `
            <label class="dashboard-item">
              <input type="checkbox" ${item.done ? 'checked' : ''}
                onchange="toggleItem('${zone.id}', ${i})">
              <span class="${item.done ? 'done' : ''}">${item.label}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// 总统计
function updateDashboardStats() {
  const progress = getProgress();
  let total = 0, done = 0;
  progress.forEach(zone => {
    zone.items.forEach(item => {
      total++;
      if (item.done) done++;
    });
  });
  const pct = total > 0 ? Math.round(done / total * 100) : 0;

  const el = id => document.getElementById(id);
  if (el('dstat-total')) el('dstat-total').textContent = total;
  if (el('dstat-progress')) el('dstat-progress').textContent = pct + '%';
}

// 打卡系统
function initCheckin() {
  const today = new Date().toISOString().slice(0, 10);
  const checkins = JSON.parse(localStorage.getItem('kb_checkins') || '[]');

  let streak = 0;
  const sorted = [...new Set(checkins)].sort().reverse();
  for (let i = 0; i < sorted.length; i++) {
    const expected = new Date();
    expected.setDate(expected.getDate() - i);
    if (sorted[i] === expected.toISOString().slice(0, 10)) streak++;
    else break;
  }

  const streakEl = document.getElementById('dstat-streak');
  if (streakEl) streakEl.textContent = streak;

  const btn = document.getElementById('dstat-checkin');
  if (btn) {
    if (checkins.includes(today)) {
      btn.textContent = '✅';
    } else {
      btn.textContent = '📝';
      btn.onclick = () => {
        checkins.push(today);
        localStorage.setItem('kb_checkins', JSON.stringify(checkins));
        btn.textContent = '✅';
        btn.onclick = null;
        const newStreak = streak + 1;
        if (streakEl) streakEl.textContent = newStreak;
      };
    }
  }
}

// 合并初始化
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  updateDashboardStats();
  initCheckin();
});
