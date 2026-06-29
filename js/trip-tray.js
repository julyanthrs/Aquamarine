/* ============ TRIP TRAY (saved items) ============ */
let tray = [];
const trayCountEl = document.getElementById('trayCount');
const tripTray = document.getElementById('tripTray');
const trayScrim = document.getElementById('trayScrim');
const trayBody = document.getElementById('trayBody');

function openTray(){ tripTray.classList.add('open'); trayScrim.classList.add('open'); }
function closeTray(){ tripTray.classList.remove('open'); trayScrim.classList.remove('open'); }
document.getElementById('trayToggleBtn').addEventListener('click', openTray);
document.getElementById('trayClose').addEventListener('click', closeTray);
trayScrim.addEventListener('click', closeTray);
const ctaOpenTray = document.getElementById('ctaOpenTray');
if (ctaOpenTray) ctaOpenTray.addEventListener('click', openTray);

function renderTray(){
  trayCountEl.textContent = tray.length;
  if (tray.length === 0){
    trayBody.innerHTML = `<div class="tray-empty"><div class="te-ic">🗒</div><p>Nothing saved yet. Tap the bookmark on any facility card to build your visit here.</p></div>`;
    return;
  }
  trayBody.innerHTML = tray.map(item => `
    <div class="tray-item">
      <img src="${item.img}" alt="${item.name}">
      <div style="flex:1"><div class="ti-name">${item.name}</div><div class="ti-cat">${item.cat}</div></div>
      <div class="ti-remove" data-remove="${item.key}">✕</div>
    </div>`).join('');
}

function toggleSave(key, name, cat, img, btnEl){
  const idx = tray.findIndex(t => t.key === key);
  if (idx > -1){
    tray.splice(idx,1);
    if (btnEl) btnEl.classList.remove('saved');
  } else {
    tray.push({key, name, cat, img});
    if (btnEl) btnEl.classList.add('saved');
    openTray();
  }
  renderTray();
}

document.addEventListener('click', e => {
  const saveBtn = e.target.closest('.dc-save, [data-save]');
  if (saveBtn){
    e.preventDefault();
    e.stopPropagation();
    const {save, name, cat, img} = saveBtn.dataset;
    toggleSave(save, name, cat, img, saveBtn.classList.contains('dc-save') ? saveBtn : null);
    // sync any other button referencing same key
    document.querySelectorAll(`.dc-save[data-save="${save}"]`).forEach(b => {
      b.classList.toggle('saved', tray.some(t=>t.key===save));
    });
    return;
  }
  const removeBtn = e.target.closest('[data-remove]');
  if (removeBtn){
    const key = removeBtn.dataset.remove;
    tray = tray.filter(t => t.key !== key);
    document.querySelectorAll(`.dc-save[data-save="${key}"]`).forEach(b => b.classList.remove('saved'));
    renderTray();
  }
});

document.getElementById('traySendBtn').addEventListener('click', () => {
  closeTray();
});
