/* ============ INQUIRY FORM ============ */
document.getElementById('inquiryForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Sent ✓';
  setTimeout(() => { btn.textContent = original; e.target.reset(); }, 2200);
});
