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
    // Obtener la URL actual y dividirla en partes
    const pathParts = window.location.pathname.split('/');
    
    // Buscar la parte que contiene 'capitulo-'
    let chapterPart = pathParts.find(part => part.startsWith('capitulo-'));
    
    // Extraer el número del capítulo
    let currentChapter = chapterPart ? parseInt(chapterPart.replace('capitulo-', '')) : 1;

    const previousChapterButton = document.getElementById('previous-chapter');
    const nextChapterButton = document.getElementById('next-chapter');

    // Definir la URL base (ajústala según la estructura de tu sitio)
    const baseURL = "/manga/capitulos/";

    // Lógica para Capítulo Anterior
    if (currentChapter > 1) {
        previousChapterButton.href = `${baseURL}capitulo-${currentChapter - 1}/`; // Enlace al capítulo anterior
        previousChapterButton.style.display = 'inline'; // Mostrar botón "Anterior"
    } else {
        previousChapterButton.style.display = 'none'; // Ocultar botón "Anterior" en el primer capítulo
    }

    // Lógica para Capítulo Siguiente
    if (currentChapter < 179) {  // Ajusta el número total de capítulos si es necesario
        nextChapterButton.href = `${baseURL}capitulo-${currentChapter + 1}/`; // Enlace al siguiente capítulo
        nextChapterButton.style.display = 'inline'; // Mostrar botón "Siguiente"
    } else {
        nextChapterButton.style.display = 'none'; // Ocultar botón "Siguiente" en el último capítulo
    }
});
