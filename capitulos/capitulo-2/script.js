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

    // Funcionalidad para los botones de navegación entre capítulos
document.addEventListener('DOMContentLoaded', function () {
    // Obtener la parte de la URL que indica el capítulo
    const pathParts = window.location.pathname.split('/');
    const chapterPart = pathParts.find(part => part.startsWith('capitulo-'));

    // Extraer el número del capítulo
    const currentChapter = chapterPart ? parseInt(chapterPart.replace('capitulo-', '')) : 1;

    const previousChapterButton = document.getElementById('previous-chapter');
    const nextChapterButton = document.getElementById('next-chapter');

    // Lógica para Capítulo Anterior
    if (currentChapter > 1) {
        previousChapterButton.href = `/manga/capitulos/capitulo-${currentChapter - 1}/`; // Enlace al capítulo anterior
        previousChapterButton.style.display = 'inline'; // Mostrar botón "Anterior"
    } else {
        previousChapterButton.style.display = 'none'; // Ocultar botón "Anterior" si estamos en el primer capítulo
    }

    // Lógica para Capítulo Siguiente
    if (currentChapter < 179) {  // Ajusta el número total de capítulos si es necesario
        nextChapterButton.href = `/manga/capitulos/capitulo-${currentChapter + 1}/`; // Enlace al siguiente capítulo
        nextChapterButton.style.display = 'inline'; // Mostrar botón "Siguiente"
    } else {
        nextChapterButton.style.display = 'none'; // Ocultar botón "Siguiente" si estamos en el último capítulo
    }
});
