const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';

function validateDNI(dni) {
  dni = dni.toUpperCase().trim();
  if (!/^\d{8}[A-Z]$/.test(dni)) return { valid: false, msg: 'Formato inválido. Debe ser 8 dígitos + 1 letra.' };

  const num = parseInt(dni.slice(0, 8), 10);
  const letter = dni.slice(8);
  const expected = LETTERS[num % 23];

  if (letter !== expected) return { valid: false, msg: `Letra incorrecta. Debería ser: ${expected}` };
  return { valid: true, msg: 'DNI válido' };
}

const input = document.getElementById('dniInput');
const btn = document.getElementById('checkBtn');
const result = document.getElementById('result');

function check() {
  const res = validateDNI(input.value);
  result.textContent = res.msg;
  result.className = 'result ' + (res.valid ? 'valid' : 'invalid');
}

btn.addEventListener('click', check);
input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
