document.addEventListener('DOMContentLoaded', function () {

    // Dropdown oculto (menú para móvil)
    const menu = document.querySelector("#menu");
    const toggleMenu = (event) => {
        menu.classList.toggle("hidden");
        event.stopPropagation();
    };
    document.querySelector("#boton").addEventListener("click", toggleMenu);
    document.addEventListener("click", () => menu.classList.add("hidden"));

    // Hover verde
    var elementos = document.querySelectorAll('.hoververde');
    elementos.forEach(function (elemento) {
        elemento.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#0C2B00';
        });
        elemento.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '';
        });
    });

    // Hover amarillo
    var elementos = document.querySelectorAll('.hoveramarillo');
    elementos.forEach(function (elemento) {
        elemento.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#252300';
        });
        elemento.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '';
        });
    });




});