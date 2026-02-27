if (localStorage.getItem('logueado') !== 'si') {
    var path = location.pathname;
    var parts = path.split('/').filter(Boolean);
    if (parts[parts.length - 1] !== 'index.html') parts.pop();
    parts.pop();
    location.href = location.origin + (parts.length ? '/' + parts.join('/') + '/' : '/') + 'index.html';
}
