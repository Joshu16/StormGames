// Esperar a que el HTML esté cargado; si no, el botón y el header aún no existen.
document.addEventListener('DOMContentLoaded', function () {
    var botonHamburguesa = document.getElementById('boton-hamburguesa');
    var header = document.getElementById('header');

    botonHamburguesa.addEventListener('click', function () {
        header.classList.toggle('menu-open');
    });
});
