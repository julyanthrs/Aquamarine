/* ============ MOBILE MENU ============ */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open'); mobileMenu.classList.remove('open');
}));

/* ============ DOT NAV: section tracking + click-to-scroll ============ */
const dotNav = document.getElementById('dotNav');
const dotItems = dotNav.querySelectorAll('.dn-item');
const darkSections = new Set(['venues','dining']); // sections with dark backgrounds, swap dot color
dotItems.forEach(dot => {
  dot.addEventListener('click', () => {
    const target = dot.dataset.target === 'top' ? document.body : document.getElementById(dot.dataset.target);
    const y = dot.dataset.target === 'top' ? 0 : target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({top:y, behavior:'smooth'});
  });
});
const sectionIds = ['deck','venues','recreation','dining','gallery','contact'];
const sectionEls = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
function syncDotNav(){
  const y = window.scrollY + window.innerHeight * 0.4;
  let current = 'top';
  sectionEls.forEach(sec => { if (sec.offsetTop <= y) current = sec.id; });
  dotItems.forEach(d => d.classList.toggle('active', d.dataset.target === current));
  dotNav.classList.toggle('on-dark', darkSections.has(current));
}
window.addEventListener('scroll', () => requestAnimationFrame(syncDotNav), {passive:true});
syncDotNav();

/* ============ SMOOTH ANCHOR OFFSET (account for fixed header) ============ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 86;
    window.scrollTo({top:y, behavior:'smooth'});
  });
});
