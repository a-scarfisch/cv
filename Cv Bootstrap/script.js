const btn = document.getElementById("btnArriba");

window.onscroll = function() {
  // Si bajamos más de 300px, el botón aparece
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
