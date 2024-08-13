function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // pegar a tag img
    const img = document.querySelector("#profile img");

    // Substituir a imagem
    if (html.classList.contains("light")) {
        // Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.webp");
    } else {
        // Se tiver dark mode, adicionar a imagem dark
        img.setAttribute("src", "./assets/avatar.png");
        img.setAttribute(
          "alt",
          "Foto de Amanda Latorraca, foto de princesa./assets/avatar.png"
        );
    }
     
}