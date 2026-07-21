let qrTimer = null;
let secondsLeft = 60;
let currentQrType = '';

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

document.addEventListener('click', goFullscreen, { once: true });
document.addEventListener('touchstart', goFullscreen, { once: true });

// Invisible button handlers
function abrirMenu() {
  // TODO
}

function abrirQR() {
  showScreen('screen-verify');
}

function verDNI() {
  showScreen('screen-choose');
}

// Back buttons
document.getElementById('back-choose').addEventListener('click', () => showScreen('screen-main'));
document.getElementById('back-qr').addEventListener('click', () => {
  if (qrTimer) clearInterval(qrTimer);
  qrTimer = null;
  showScreen('screen-main');
});
document.getElementById('back-verify').addEventListener('click', () => showScreen('screen-main'));

// Choose DNI type
function generateQR(type, label) {
  currentQrType = type;
  document.getElementById('qr-label').textContent = label;
  document.getElementById('qr-box').innerHTML = `<svg width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#fff"/><rect x="10" y="10" width="30" height="30" fill="#000"/><rect x="50" y="10" width="100" height="30" fill="#000"/><rect x="10" y="50" width="30" height="100" fill="#000"/><rect x="50" y="50" width="60" height="60" fill="#fff"/><rect x="120" y="50" width="30" height="100" fill="#000"/><rect x="50" y="120" width="100" height="30" fill="#000"/><rect x="80" y="80" width="20" height="20" fill="#000"/><rect x="70" y="90" width="10" height="10" fill="#000"/><rect x="60" y="70" width="10" height="30" fill="#000"/><rect x="90" y="70" width="10" height="10" fill="#000"/><rect x="70" y="60" width="20" height="10" fill="#000"/></svg>`;
  secondsLeft = 60;
  document.getElementById('timer-seconds').textContent = secondsLeft;
  if (qrTimer) clearInterval(qrTimer);
  qrTimer = setInterval(() => {
    secondsLeft--;
    document.getElementById('timer-seconds').textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(qrTimer);
      qrTimer = null;
      document.getElementById('qr-box').innerHTML = '<span style="color:#999">Código expirado</span>';
    }
  }, 1000);
  showScreen('screen-qr');
}

document.getElementById('opt-edad').addEventListener('click', () => generateQR('edad', 'DNI edad'));
document.getElementById('opt-simple').addEventListener('click', () => generateQR('simple', 'DNI simple'));
document.getElementById('opt-completo').addEventListener('click', () => generateQR('completo', 'DNI completo'));
