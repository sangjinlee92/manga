// Botón "Volver arriba"
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Efecto al pasar el mouse sobre los capítulos
document.querySelectorAll(".chapter-list a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
    });
});
