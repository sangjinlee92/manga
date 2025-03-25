// Obtener el botón de volver arriba
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Mostrar el botón cuando el usuario haya desplazado 200px hacia abajo
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        // Agregar clase para animación
        scrollTopBtn.classList.add("show");
    } else {
        // Eliminar clase para animación
        scrollTopBtn.classList.remove("show");
    }
};

// Al hacer clic en el botón, desplazarse hacia arriba suavemente
scrollTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Desplazamiento suave
    });
};
