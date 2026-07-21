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

  const tap = (el, fn) => {
    el.addEventListener("click", fn);
    el.addEventListener("touchend", (e) => { e.preventDefault(); fn(e); });
  };

  tap(openMenu, (event) => {
    event.stopPropagation();
    dniScreen.classList.add("menu-open");
  });

  const closeMenu = document.getElementById("closeMenu");
  if (closeMenu) {
    tap(closeMenu, (event) => {
      event.stopPropagation();
      dniScreen.classList.remove("menu-open");
    });
  }

  tap(menuBackdrop, () => {
    dniScreen.classList.remove("menu-open");
  });

  tap(openQr, (event) => {
    event.stopPropagation();
    window.location.href = "./qr.html";
  });

  tap(openDni, (event) => {
    event.stopPropagation();
    window.location.href = "./dni.html";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dniScreen.classList.remove("menu-open");
    }
  });
});
