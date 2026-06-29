/* ============ GALLERY KEYBOARD NAV ============ */
document.querySelectorAll('.gal-item').forEach(item => item.setAttribute('tabindex','0'));


/* ============ GALLERY LIGHTBOX ============ */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
document.getElementById('galGrid').addEventListener('click', e => {
  const item = e.target.closest('.gal-item');
  if (!item) return;
  const img = item.querySelector('img');
  lbImg.src = img.src.replace(/w=\d+/, 'w=1600');
  lbImg.alt = img.alt;
  lightbox.classList.add('open');
});
function closeLightbox(){ lightbox.classList.remove('open'); }
document.getElementById('lbClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
