document.addEventListener("DOMContentLoaded", () => {
  const dniScreen = document.getElementById("dniScreen");
  const openMenu = document.getElementById("openMenu");
  const openQr = document.getElementById("openQr");
  const openDni = document.getElementById("openDni");
  const menuBackdrop = document.getElementById("menuBackdrop");

  if (!dniScreen || !openMenu || !openQr || !openDni) {
    console.error("No se han encontrado los botones invisibles");
    return;
  }

  openMenu.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dniScreen.classList.add("menu-open");
  });

  const closeMenu = document.getElementById("closeMenu");
  if (closeMenu) {
    closeMenu.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      dniScreen.classList.remove("menu-open");
    });
  }

  menuBackdrop.addEventListener("click", () => {
    dniScreen.classList.remove("menu-open");
  });

  openQr.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = "./qr.html";
  });

  openDni.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = "./dni.html";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dniScreen.classList.remove("menu-open");
    }
  });
});
