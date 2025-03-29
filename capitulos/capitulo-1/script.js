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
    // Obtener el número del capítulo actual de la URL
    let currentChapter = window.location.pathname.split('/').pop().split('-')[1];

    // Total de capítulos
    const totalChapters = 179; // Cambia este número según el total de capítulos

    // Enlaces de los botones
    const previousChapterButton = document.getElementById('previous-chapter');
    const nextChapterButton = document.getElementById('next-chapter');

    // Definir el enlace del capítulo anterior
    if (currentChapter > 1) {
        previousChapterButton.href = `capitulo-${parseInt(currentChapter) - 1}`;
    } else {
        previousChapterButton.style.display = 'none'; // Si estamos en el capítulo 1, ocultar "Capítulo Anterior"
    }

    // Definir el enlace del siguiente capítulo
    if (currentChapter < totalChapters) {
        nextChapterButton.href = `capitulo-${parseInt(currentChapter) + 1}`;
    } else {
        nextChapterButton.style.display = 'none'; // Si estamos en el último capítulo, ocultar "Capítulo Siguiente"
    }
});


