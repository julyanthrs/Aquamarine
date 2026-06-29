/* ============ RECREATION TABS ============ */
document.getElementById('recTabs').addEventListener('click', e => {
  const tab = e.target.closest('.rec-tab');
  if (!tab) return;
  document.querySelectorAll('.rec-tab').forEach(t => t.classList.toggle('active', t===tab));
  document.querySelectorAll('.rec-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('rec-'+tab.dataset.rec).classList.add('active');
});

/* ============ MENU CATEGORY TABS ============ */
document.getElementById('menuCatRow').addEventListener('click', e => {
  const cat = e.target.closest('.menu-cat');
  if (!cat) return;
  document.querySelectorAll('.menu-cat').forEach(c => c.classList.toggle('active', c===cat));
  document.querySelectorAll('.menu-panel2').forEach(p => p.classList.remove('active'));
  document.getElementById('menu-'+cat.dataset.cat).classList.add('active');
});
