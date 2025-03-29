# Configura la ruta base donde están tus capítulos
$basePath = "C:\Users\ariel\manga\capitulos"

# Recorrer los capítulos desde 2 hasta 179
for ($i = 2; $i -le 179; $i++) {
    # Ruta de la carpeta de cada capítulo
    $chapterFolder = "$basePath\capitulo-$i"
    
    # Verificar si la carpeta del capítulo existe
    if (Test-Path $chapterFolder) {
        # Ruta del archivo index.html para el capítulo
        $htmlFilePath = "$chapterFolder\capitulo-$i.html"
        
        # Eliminar el archivo index.html si existe
        if (Test-Path $htmlFilePath) {
            Remove-Item $htmlFilePath -Force
            Write-Host "Archivo index.html del Capítulo $i eliminado."
        } else {
            Write-Host "No se encontró el archivo index.html para el Capítulo $i."
        }
    } else {
        Write-Host "No se encontró la carpeta para el Capítulo $i."
    }
}
