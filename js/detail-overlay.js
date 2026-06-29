/* ============ DECK CARD EXPAND ============ */
const detailOverlay = document.getElementById('detailOverlay');
const detailCard = document.getElementById('detailCard');

function openFacility(slug){
  const f = FACILITIES[slug];
  if (!f) return;
  detailCard.classList.add('facility-mode');
  detailCard.innerHTML = `
    <div class="detail-close" id="detailCloseBtn">✕</div>
    <div class="facility-hero">
      <img src="${f.img}" alt="${f.name}">
      <div class="fh-tint"></div>
      <div class="fh-text"><span class="eyebrow">${f.tag}</span><h3>${f.name}</h3></div>
    </div>
    <div class="facility-body-wrap">
      <p class="dd">${f.desc}</p>
      <div class="sub-item-grid">
        ${f.items.map(it => `
          <div class="sub-item-card" data-detail="${it.key}">
            <div class="si-img"><img src="${it.img}" alt="${it.name}"></div>
            <div class="si-body"><span class="si-tag">${f.name}</span><h4>${it.name}</h4><span class="si-meta">${it.meta}</span></div>
          </div>`).join('')}
      </div>
    </div>`;
  detailOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('detailCloseBtn').addEventListener('click', closeDetail);
}

function openDetail(key){
  const d = DETAILS[key];
  if (!d) return;
  detailCard.classList.remove('facility-mode');
  detailCard.innerHTML = `
    <div class="detail-close" id="detailCloseBtn">✕</div>
    <div class="detail-img"><img src="${d.img}" alt="${d.name}"></div>
    <div class="detail-body">
      <span class="eyebrow">${d.cat}</span>
      <h3>${d.name}</h3>
      <p class="dd">${d.desc}</p>
      <div class="detail-meta-row">${d.meta.map(m=>`<div><b>${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div>
      <ul class="detail-list">${d.list.map(l=>`<li>${l}</li>`).join('')}</ul>
      <div class="detail-actions">
        <a href="${d.link}" target="_blank" class="btn btn-primary">${d.cta} →</a>
        <button class="btn btn-dark" data-save="${key}" data-name="${d.name}" data-cat="${d.cat}" data-img="${d.img}">Add to Visit Plan</button>
      </div>
    </div>`;
  detailOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('detailCloseBtn').addEventListener('click', closeDetail);
}
function closeDetail(){
  detailOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => {
  const facilityTrigger = e.target.closest('[data-facility]');
  if (facilityTrigger) {
    e.preventDefault();
    openFacility(facilityTrigger.dataset.facility);
    return;
  }
  const trigger = e.target.closest('[data-detail]');
  if (trigger && !e.target.closest('.dc-save')) {
    e.preventDefault();
    openDetail(trigger.dataset.detail);
  }
});
detailOverlay.addEventListener('click', e => { if (e.target === detailOverlay) closeDetail(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape'){ closeDetail(); closeTray(); closeLightbox(); }});
