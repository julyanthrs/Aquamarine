/* ============ TIDE REVEAL ENGINE (direction-aware, staggered, varied per section) ============ */
function prepReveal(selector, cls, staggerStep){
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add(cls);
    if (staggerStep) el.style.setProperty('--d', (i % 6) * staggerStep + 's');
  });
}
// bento facility cards: gentle pop, staggered by grid order
prepReveal('.deck-card', 'tide-pop', 0.08);
// venue comparison rows: alternate left/right like a ledger filling in
document.querySelectorAll('.compare-row:not(.head)').forEach((row,i) => {
  row.classList.add(i % 2 === 0 ? 'tide-l' : 'tide-r');
  row.style.setProperty('--d', (i*0.07)+'s');
});
// hotel + court + ktv cards: pop with stagger
prepReveal('.room-card', 'tide-pop', 0.1);
prepReveal('.court-card', 'tide-pop', 0.08);
prepReveal('.ktv-card', 'tide-pop', 0.08);
// testimonials + gallery + section headers: rise
prepReveal('.testi-card', 'tide', 0.12);
prepReveal('.gal-item', 'tide', 0.05);
prepReveal('.section-head', 'tide', 0);
prepReveal('.menu-line', 'tide', 0.03);
prepReveal('.stat-strip .st', 'tide-pop', 0.07);

const tideEls = document.querySelectorAll('.tide, .tide-l, .tide-r, .tide-pop');
const tideIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting){
      en.target.classList.add('in');
      en.target.classList.remove('out-up', 'out-down');
    } else if (en.boundingClientRect.top < 0) {
      en.target.classList.remove('in', 'out-down');
      en.target.classList.add('out-up');
    } else {
      en.target.classList.remove('in', 'out-up');
      en.target.classList.add('out-down');
    }
  });
}, {threshold:0.14, rootMargin:'0px 0px -40px 0px'});
tideEls.forEach(el => tideIO.observe(el));

/* ============ COUNT-UP STATS ============ */
function countUp(el, target, suffix=''){
  const dur = 1400;
  const start = performance.now();
  function step(now){
    const p = Math.min((now-start)/dur, 1);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const statEls = document.querySelectorAll('.stat-strip .st b');
const statIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting){
      const raw = en.target.textContent.trim();
      const num = parseInt(raw.replace(/\D/g,''), 10);
      const suffix = raw.replace(/[\d]/g,'');
      if (!isNaN(num)) countUp(en.target, num, suffix);
    }
  });
}, {threshold:0.5});
statEls.forEach(el => statIO.observe(el));
