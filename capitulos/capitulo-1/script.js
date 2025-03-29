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

    // Comprobar si el capítulo actual es válido (mayor que 0)
    if (!currentChapter || isNaN(currentChapter) || currentChapter <= 0) {
        console.error("Número de capítulo no válido.");
        return; // Salir si el capítulo actual no es válido
    }

    // Definir el enlace del capítulo anterior
    if (currentChapter > 1) {
        previousChapterButton.href = `capitulo-${parseInt(currentChapter) - 1}`;
        previousChapterButton.style.display = 'inline'; // Asegurarse de que esté visible
    } else {
        previousChapterButton.style.display = 'none'; // Si estamos en el capítulo 1, ocultar "Capítulo Anterior"
    }

    // Definir el enlace del siguiente capítulo
    if (currentChapter < totalChapters) {
        nextChapterButton.href = `capitulo-${parseInt(currentChapter) + 1}`;
        nextChapterButton.style.display = 'inline'; // Asegurarse de que esté visible
    } else {
        nextChapterButton.style.display = 'none'; // Si estamos en el último capítulo, ocultar "Capítulo Siguiente"
    }
});


