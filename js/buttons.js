/* ============ BUTTON RIPPLE ============ */
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const dot = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  dot.className = 'ripple-dot';
  dot.style.width = dot.style.height = size + 'px';
  dot.style.left = (e.clientX - rect.left - size/2) + 'px';
  dot.style.top = (e.clientY - rect.top - size/2) + 'px';
  btn.appendChild(dot);
  setTimeout(() => dot.remove(), 700);
});

/* ============ CARD TILT (desktop mousemove) ============ */
if (window.matchMedia('(hover:hover)').matches) {
  document.querySelectorAll('.deck-card, .court-card, .ktv-card, .room-card, .testi-card, .sub-item-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${(-py*5).toFixed(2)}deg) rotateY(${(px*6).toFixed(2)}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}
