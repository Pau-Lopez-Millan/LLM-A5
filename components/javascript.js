const imgAmpliada = document.getElementById("imgAmpliada");
const miniatures = document.querySelectorAll(".miniatura");
const botoTancar = document.getElementById("tancar");

miniatures.forEach(img => {
  img.addEventListener("click", () => {
    // Carreguem la ruta i descripció de la imatge clicada
    imgAmpliada.src = img.src;
    imgAmpliada.alt = img.alt;
    
    // Mostrem la imatge i la creu de tancar a la dreta
    imgAmpliada.style.display = "block";
    tancar.style.display = "block";
  });
});

// En clicar la "X", tornem a deixar l'espai de la dreta buit
tancar.addEventListener("click", () => {
  imgAmpliada.style.display = "none";
  tancar.style.display = "none";
  imgAmpliada.src = "";
});
