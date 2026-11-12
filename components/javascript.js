const modal = document.getElementById("modalZoom");
const imgAmpliada = document.getElementById("imgAmpliada");
const miniatura = document.querySelectorAll("miniatura");
const cerrar = document.querySelector("tancar");

miniatura.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    imgAmpliada.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});