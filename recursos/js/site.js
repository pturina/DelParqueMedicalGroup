
window.onscroll = function() {
  var btn = document.getElementById("go-top");
  var navInfo = document.querySelector(".header-info");
  var pageFooter = document.getElementById("page-footer"); // Tu etiqueta <footer>

  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
  // Lógica de Go-Top y Header Info (Se mantiene igual)
  if (scrollTop > 100) {
    btn.style.display = "flex";
    navInfo.classList.add('is-hidden');    
  } else {
    btn.style.display = "none";
    navInfo.classList.remove('is-hidden');
  }

  // --- NUEVA LÓGICA DE SCROLL COMPORTAMIENTO FOOTER ---
  var totalHeight = document.documentElement.scrollHeight;
  var viewportHeight = window.innerHeight;
  var footerHeight = pageFooter.offsetHeight;

  var distanceToBottom = totalHeight - (scrollTop + viewportHeight);

  if (distanceToBottom <= footerHeight) {
    pageFooter.style.transform = `translateY(${distanceToBottom}px)`;
    pageFooter.style.opacity = "1";
    pageFooter.style.pointerEvents = "auto"; // 🔥 PERMITE CLICKS cuando es visible
  } else {
    pageFooter.style.transform = `translateY(${footerHeight}px)`;
    pageFooter.style.opacity = "0";
    pageFooter.style.pointerEvents = "none"; // 🔥 DESACTIVA CLICKS cuando está oculto
  }
};

// Función para subir arriba
function volverArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Desplazamiento suave
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("go-top");
  if (btn) {
    btn.addEventListener("click", volverArriba);
  }
});