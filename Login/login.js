if (localStorage.getItem('logueado') === 'si') {
    location.href = 'Landing/landing.html';
}

document.getElementById('login-form').onsubmit = function (e) {
    e.preventDefault();
    var usuario = document.getElementById('usuario').value.trim();
    var password = document.getElementById('password').value;
    var mensaje = document.getElementById('mensaje-error');

    if (usuario === 'alvarito y ferxxo' && password === '1234') {
        localStorage.setItem('logueado', 'si');
        location.href = 'Landing/landing.html';
    } else {
        mensaje.textContent = 'Usuario o contraseña incorrectos.';
    }
};
