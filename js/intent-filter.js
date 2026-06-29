/* ============ INTENT FILTER ============ */
let activeIntent = null;
const intentRow = document.getElementById('intentRow');
const deckCards = document.querySelectorAll('.deck-card');
if (!intentRow) { /* intent dock removed */ }
else intentRow.addEventListener('click', e => {
  const chip = e.target.closest('.intent-chip');
  if (!chip) return;
  const val = chip.dataset.intent;
  if (activeIntent === val) {
    activeIntent = null;
    intentRow.querySelectorAll('.intent-chip').forEach(c => c.classList.remove('active'));
    deckCards.forEach(c => c.classList.remove('dimmed','highlight'));
    return;
  }
  activeIntent = val;
  intentRow.querySelectorAll('.intent-chip').forEach(c => c.classList.toggle('active', c === chip));
  deckCards.forEach(c => {
    const matches = (c.dataset.intent || '').split(',').includes(val);
    c.classList.toggle('dimmed', !matches);
    c.classList.toggle('highlight', matches);
  });
  document.getElementById('deck').scrollIntoView({behavior:'smooth', block:'start'});
});
