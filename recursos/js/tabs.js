function openTab(evt, tabId) {
  // Ocultar todos los contenidos de pestaña
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Desactivar todos los botones
  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }

  // Mostrar el contenido actual y añadir clase active al botón presionado
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
