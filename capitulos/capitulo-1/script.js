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
    
        // Función para actualizar los enlaces de navegación
document.addEventListener('DOMContentLoaded', function () {
    const currentChapter = 1; // Cambia este valor al número del capítulo actual
    const totalChapters = 179; // Total de capítulos disponibles
    
    // Establecer enlace para el capítulo anterior
    const prevChapter = currentChapter > 1 ? `../capitulos/capitulo-${currentChapter - 1}` : '';
    document.getElementById('previous-chapter').href = prevChapter;

    // Establecer enlace para el siguiente capítulo
    const nextChapter = currentChapter < totalChapters ? `../capitulos/capitulo-${currentChapter + 1}` : '';
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


