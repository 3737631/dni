let qrTimer = null;
let secondsLeft = 60;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('back-home').addEventListener('click', () => {
  window.location.href = './index.html';
});

document.getElementById('back-choose').addEventListener('click', () => {
  if (qrTimer) clearInterval(qrTimer);
  qrTimer = null;
  showScreen('screen-choose');
});

function generateQR(type, label) {
  document.getElementById('qr-label').textContent = label;
  secondsLeft = 60;
  document.getElementById('timer-seconds').textContent = secondsLeft;
  if (qrTimer) clearInterval(qrTimer);
  qrTimer = setInterval(() => {
    secondsLeft--;
    document.getElementById('timer-seconds').textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(qrTimer);
      qrTimer = null;
      document.querySelector('#qr-box svg')?.remove();
      const span = document.createElement('span');
      span.style.cssText = 'color:#999';
      span.textContent = 'Código expirado';
      document.getElementById('qr-box').appendChild(span);
    }
  }, 1000);
  showScreen('screen-qr');
}

document.getElementById('opt-edad').addEventListener('click', () => generateQR('edad', 'DNI edad'));
document.getElementById('opt-simple').addEventListener('click', () => generateQR('simple', 'DNI simple'));
document.getElementById('opt-completo').addEventListener('click', () => generateQR('completo', 'DNI completo'));
