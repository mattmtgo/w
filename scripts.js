// Función para cambiar la imagen del producto al hacer clic
document.addEventListener("DOMContentLoaded", function () {
    const productImages = document.querySelectorAll(".product img");

    productImages.forEach((img) => {
        img.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});

// Hacer que el header sea fijo al hacer scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth",
        });
    });
});