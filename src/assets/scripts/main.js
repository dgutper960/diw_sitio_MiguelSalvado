function ocultarMenu() {
  var menuDesplegable = document.getElementById("menuDesplegable");
  var ocultarSpans = document.getElementById("clickDesplegarMenu");

  if (menuDesplegable.style.display !== "none") {
    menuDesplegable.style.display = "none";
    ocultarSpans.style.display = "flex";
  }
}

function desplegarMenu() {
  var menuDesplegable = document.getElementById("menuDesplegable");
  var ocultarSpans = document.getElementById("clickDesplegarMenu");

  if (menuDesplegable.style.display === "none") {
    menuDesplegable.style.display = "block";
    ocultarSpans.style.display = "none";
  }
}

document.getElementById("menuDesplegable").addEventListener("mouseleave", ocultarMenu);

document.getElementById("clickDesplegarMenu").addEventListener("click", desplegarMenu);

