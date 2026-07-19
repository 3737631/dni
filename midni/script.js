function goFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

document.addEventListener('click', goFullscreen, { once: true });
document.addEventListener('touchstart', goFullscreen, { once: true });
document.addEventListener('keydown', goFullscreen, { once: true });

setTimeout(() => {
  document.getElementById('slide1').classList.remove('active');
  document.getElementById('slide2').classList.add('active');
}, 1000);
