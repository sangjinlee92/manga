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
    
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el número del capítulo actual desde la URL
    const currentChapter = parseInt(window.location.pathname.split('-')[1]);

    // Total de capítulos disponibles
    const totalChapters = 179; // Cambia este número según la cantidad total de capítulos

    // Enlaces de los botones
    const previousChapterButton = document.getElementById('previous-chapter');
    const nextChapterButton = document.getElementById('next-chapter');

    // Verificar si estamos en el primer capítulo
    if (currentChapter > 1) {
        previousChapterButton.href = `capitulo-${currentChapter - 1}`;
        previousChapterButton.style.display = 'inline'; // Mostrar el botón de "Capítulo Anterior"
    } else {
        previousChapterButton.style.display = 'none'; // Ocultar el botón de "Capítulo Anterior" en el primer capítulo
    }

    // Verificar si estamos en el último capítulo
    if (currentChapter < totalChapters) {
        nextChapterButton.href = `capitulo-${currentChapter + 1}/index.html`;
        nextChapterButton.style.display = 'inline'; // Mostrar el botón de "Capítulo Siguiente"
    } else {
        nextChapterButton.style.display = 'none'; // Ocultar el botón de "Capítulo Siguiente" en el último capítulo
    }
});


