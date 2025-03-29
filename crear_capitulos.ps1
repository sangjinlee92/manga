# Configura la ruta base donde están tus capítulos
$basePath = "C:\Users\ariel\manga\capitulos"

# Asegúrate de que las carpetas para los capítulos existen
for ($i = 2; $i -le 179; $i++) {
    # Ruta de la carpeta de cada capítulo
    $chapterFolder = "$basePath\capitulo-$i"
    
    # Crea la carpeta para el capítulo si no existe
    if (-not (Test-Path $chapterFolder)) {
        New-Item -ItemType Directory -Force -Path $chapterFolder
    }

    # Crear la carpeta de imagenes dentro de cada capítulo
    $imagenesFolder = "$chapterFolder\imagenes"
    if (-not (Test-Path $imagenesFolder)) {
        New-Item -ItemType Directory -Force -Path $imagenesFolder
    }

    # Crear el archivo HTML para el capítulo
    $htmlContent = @"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <title>Capítulo $i - Solo Leveling</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="chapter-header">
        <h1>Capítulo $i</h1>
    </div>

    <div class="webtoon">
        <img src="imagenes/10001.webp" alt="Página 1">
        <img src="imagenes/10002.webp" alt="Página 2">
        <img src="imagenes/10003.webp" alt="Página 3">
        <img src="imagenes/10004.webp" alt="Página 4">
        <img src="imagenes/10005.webp" alt="Página 5">
        <img src="imagenes/10006.webp" alt="Página 6">
        <img src="imagenes/10007.webp" alt="Página 7">
        <img src="imagenes/10008.webp" alt="Página 8">
        <img src="imagenes/10009.webp" alt="Página 9">
        <img src="imagenes/10010.webp" alt="Página 10">
        <img src="imagenes/10011.webp" alt="Página 11">
        <img src="imagenes/10012.webp" alt="Página 12">
        <img src="imagenes/10013.webp" alt="Página 13">
        <img src="imagenes/10014.webp" alt="Página 14">
        <img src="imagenes/10015.webp" alt="Página 15">
        <img src="imagenes/10016.webp" alt="Página 16">
        <img src="imagenes/10017.webp" alt="Página 17">
    </div>

    <div class="navigation-buttons">
        <!-- Enlace al capítulo anterior (modificar según el capítulo actual) -->
        <a href="capitulo-$(($i - 1))" id="previous-chapter" class="button">⬅ Capítulo Anterior</a>
        <!-- Enlace a la lista de capítulos -->
        <a href="capitulos.html" class="button">Lista de Capítulos</a>
        <!-- Enlace al siguiente capítulo (modificar según el capítulo actual) -->
        <a href="capitulo-$(($i + 1))" id="next-chapter" class="button">Capítulo Siguiente ➡</a>
    </div>

    <a href="../index.html" class="back-link">⬅ Volver al inicio</a>
    <button id="scrollTopBtn">↑</button>
    <script src="script.js"></script>
</body>
</html>
"@
    # Crear el archivo HTML en la carpeta del capítulo
    $htmlFilePath = "$chapterFolder\index.html"
    Set-Content -Path $htmlFilePath -Value $htmlContent

    # Crear el archivo script.js dentro de la misma carpeta
    $scriptContent = @"
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
        let currentChapter = $i; // Cambia este valor según el capítulo que estés visualizando
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
        document.getElementById('previous-chapter').href = `capitulo-$(($i - 1))`.html;
        document.getElementById('next-chapter').href = `capitulo-$(($i + 1))`.html;
    });
"@
    # Crear el archivo script.js en la carpeta del capítulo
    $scriptFilePath = "$chapterFolder\script.js"
    Set-Content -Path $scriptFilePath -Value $scriptContent
}
