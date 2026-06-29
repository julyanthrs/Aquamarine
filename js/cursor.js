/* ============ CUSTOM CURSOR ============ */
const cursorDot = document.getElementById('cursorDot');
if (window.matchMedia('(hover:hover)').matches) {
  window.addEventListener('mousemove', e => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .deck-card, .gal-item, .court-card, .ktv-card, .room-card, .sub-item-card')) {
      cursorDot.classList.add('grow');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .deck-card, .gal-item, .court-card, .ktv-card, .room-card, .sub-item-card')) {
      cursorDot.classList.remove('grow');
    }
  });
}
