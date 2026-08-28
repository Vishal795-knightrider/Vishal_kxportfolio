const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  const filterBtns = document.querySelectorAll('#filters button');
  const cards = document.querySelectorAll('.proj-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => { card.style.display = (f === 'all' || card.dataset.cat.includes(f)) ? '' : 'none'; });
    });
  });

  const skillBtns = document.querySelectorAll('#skillFilters button');
  const skillPills = document.querySelectorAll('#skillPanel .pill');
  skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const s = btn.dataset.skill;
      skillPills.forEach(p => { p.style.display = (s === 'all' || p.dataset.cat === s) ? '' : 'none'; });
    });
  });

  function tick(){
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    document.getElementById('clock').textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  tick(); setInterval(tick, 1000);

  const themeBtn = document.getElementById('themeBtn');
  themeBtn.addEventListener('click', () => document.body.classList.toggle('light'));

  // ---- GitHub Activity: real, live-fetched data only. No invented numbers. ----
  async function loadGithubActivity(){
    const container = document.getElementById('ghActivity');
    const username = 'Vishal795-knightrider';
    try {
      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
      if(!res.ok) throw new Error('bad response: ' + res.status);
      const data = await res.json();
      const days = Array.isArray(data.contributions) ? data.contributions : [];
      if(!days.length) throw new Error('no contribution data returned');
      renderGithubCalendar(container, days, username);
    } catch (err){
      container.innerHTML = `
        <div class="gh-fallback">
          Couldn't load live activity data just now — see the real, up-to-date graph directly on
          <a href="https://github.com/${username}" target="_blank">github.com/${username} ↗</a>.
        </div>`;
    }
  }

  function renderGithubCalendar(container, days, username){
    const total = days.reduce((sum, d) => sum + (d.count || 0), 0);
    const first = new Date(days[0].date + 'T00:00:00');
    const firstDow = first.getDay(); // 0 = Sunday

    const cells = [];
    for (let i = 0; i < firstDow; i++) cells.push(null);
    days.forEach(d => cells.push(d));

    const totalCols = Math.ceil(cells.length / 7);
    let gridHTML = '';
    for (let c = 0; c < totalCols; c++) {
      for (let r = 0; r < 7; r++) {
        const d = cells[c * 7 + r];
        if (!d) { gridHTML += `<div class="gh-cell"></div>`; continue; }
        const level = Math.max(0, Math.min(4, d.level || 0));
        const label = `${d.count} contribution${d.count === 1 ? '' : 's'} on ${d.date}`;
        gridHTML += `<div class="gh-cell l${level}" title="${label}"></div>`;
      }
    }

    let monthHTML = '';
    let lastMonth = -1;
    for (let c = 0; c < totalCols; c++) {
      const colDays = cells.slice(c * 7, c * 7 + 7).filter(Boolean);
      const d = colDays[0];
      let label = '';
      if (d) {
        const dt = new Date(d.date + 'T00:00:00');
        if (dt.getMonth() !== lastMonth) {
          label = dt.toLocaleString('en-US', { month: 'short' });
          lastMonth = dt.getMonth();
        }
      }
      monthHTML += `<div class="gh-month-label">${label}</div>`;
    }

    container.innerHTML = `
      <div class="gh-calendar-wrap">
        <div class="gh-weekday-labels">
          <span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span>
        </div>
        <div class="gh-cal-main">
          <div class="gh-months">${monthHTML}</div>
          <div class="gh-grid">${gridHTML}</div>
        </div>
      </div>
      <div class="gh-summary">
        <span>${total.toLocaleString()} contributions in the last year — <a href="https://github.com/${username}" target="_blank" style="color:var(--text-secondary);">view on GitHub ↗</a></span>
        <span class="gh-legend">Less
          <span class="gh-cell"></span><span class="gh-cell l1"></span><span class="gh-cell l2"></span><span class="gh-cell l3"></span><span class="gh-cell l4"></span>
        More</span>
      </div>
    `;
  }

  loadGithubActivity();
