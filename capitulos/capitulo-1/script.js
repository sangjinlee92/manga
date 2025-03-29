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
    
document.addEventListener('DOMContentLoaded', function () {
    // Aquí obtenemos el número del capítulo de la URL
    const urlParts = window.location.pathname.split('/');
    const chapterName = urlParts[urlParts.length - 1]; // Obtén el nombre del capítulo desde la URL, por ejemplo 'capitulo-1'

    // Extraemos el número del capítulo (de 'capitulo-1' a '1')
    const currentChapter = parseInt(chapterName.split('-')[1]);

    const totalChapters = 179; // Total de capítulos

    // Enlace al capítulo anterior
    const prevChapter = currentChapter > 1 ? `/manga/capitulos/capitulo-${currentChapter - 1}` : '';
    document.getElementById('previous-chapter').href = prevChapter;

    // Enlace al siguiente capítulo
    const nextChapter = currentChapter < totalChapters ? `/manga/capitulos/capitulo-${currentChapter + 1}` : '';
    document.getElementById('next-chapter').href = nextChapter;

    // Ocultar el botón de "Capítulo Anterior" si estamos en el primer capítulo
    if (currentChapter === 1) {
        document.getElementById('previous-chapter').style.display = 'none';
    }

    // Ocultar el botón de "Capítulo Siguiente" si estamos en el último capítulo
    if (currentChapter === totalChapters) {
        document.getElementById('next-chapter').style.display = 'none';
    }
});



