/* ============ SCROLL DIRECTION + PROGRESS RAIL + HEADER ============ */
const header = document.getElementById('siteHeader');
const totop = document.getElementById('totop');
const scrollRail = document.getElementById('scrollRail');
const heroBg = document.querySelector('.hero-bg');
const heroTop = document.querySelector('.hero-top');
const heroEl = document.querySelector('.hero');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lastY = window.scrollY;
let scrollTicking = false;

function onScrollFrame(){
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (y / max) * 100 : 0;
  scrollRail.style.width = pct + '%';

  header.classList.toggle('scrolled', y > 60);
  totop.classList.toggle('show', y > 700);

  // hero parallax + fade, capped to hero height so it never drifts past the section
  if (heroEl && !reduceMotion) {
    const heroH = heroEl.offsetHeight;
    if (y < heroH) {
      const p = y / heroH;
      heroBg.style.transform = `translateY(${y * 0.35}px) scale(${1.1 - p*0.08})`;
      heroTop.style.opacity = String(Math.max(1 - p*1.6, 0));
      heroTop.style.transform = `translateY(${p*40}px)`;
    }
  }

  const goingDown = y > lastY;
  document.body.classList.toggle('scroll-down', goingDown && y > 10);
  document.body.classList.toggle('scroll-up', !goingDown);
  lastY = y;
  scrollTicking = false;
}
window.addEventListener('scroll', () => {
  if (!scrollTicking){ requestAnimationFrame(onScrollFrame); scrollTicking = true; }
}, {passive:true});
totop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
