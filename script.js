setTimeout(() => {
  document.querySelectorAll('.slide').forEach(el => el.classList.remove('active'));
  document.getElementById('slide2').classList.add('active');
  const hint = document.querySelector('.hint');
  if (hint) { hint.style.transition = 'opacity 0.5s'; hint.style.opacity = '0'; setTimeout(() => hint.remove(), 500); }
}, 1000);
