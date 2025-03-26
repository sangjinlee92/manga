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
    document.addEventListener('DOMContentLoaded', function() {
        // Suponiendo que tienes un mecanismo para identificar el capítulo actual.
        let currentChapter = 159; // Cambia este valor según el capítulo que estés visualizando
        let totalChapters = 179; // Total de capítulos

        // Ocultar el botón de "Capítulo Anterior" si estamos en el Capítulo 1
        if (currentChapter === 1) {
            document.getElementById('previous-chapter').style.display = 'none';
        }

        // Ocultar el botón de "Capítulo Siguiente" si estamos en el último capítulo
        if (currentChapter === totalChapters) {
            document.getElementById('next-chapter').style.display = 'none';
        }

        // Actualizar los enlaces de "Capítulo Anterior" y "Capítulo Siguiente"
        document.getElementById('previous-chapter').href = capitulo-158.html;
        document.getElementById('next-chapter').href = capitulo-160.html;
    });
