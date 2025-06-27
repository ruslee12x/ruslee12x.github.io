const qrImage = document.getElementById("qrImage");
const zoomOverlay = document.getElementById("zoomOverlay");
const zoomedImage = document.getElementById("zoomedImage");

qrImage.addEventListener("click", () => {
  zoomOverlay.style.display = "flex";
});

zoomOverlay.addEventListener("click", () => {
  zoomOverlay.style.display = "none";
});

function setTheme(theme) {
  document.body.className = `theme-${theme}`;
  localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "white";
  document.body.className = `theme-${savedTheme}`;
});
