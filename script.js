let current = 1;
const total = 2;
let autoTimer = null;
let hintHidden = false;

function showSlide(n) {
  document.querySelectorAll('.slide').forEach(el => el.classList.remove('active'));
  document.getElementById('slide' + n).classList.add('active');
  current = n;
}

function nextSlide() {
  const next = current >= total ? 1 : current + 1;
  showSlide(next);
}

function hideHint() {
  if (!hintHidden) {
    const hint = document.querySelector('.hint');
    if (hint) {
      hint.style.transition = 'opacity 0.5s';
      hint.style.opacity = '0';
      setTimeout(() => hint.remove(), 500);
    }
    hintHidden = true;
  }
}

function advance() {
  hideHint();
  nextSlide();
  resetAutoTimer();
}

function resetAutoTimer() {
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(nextSlide, 5000);
}

document.addEventListener('click', advance);
document.addEventListener('keydown', advance);

resetAutoTimer();
