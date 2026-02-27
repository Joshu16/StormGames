var CART_KEY = 'stormCart';

function getCart() {
  var s = localStorage.getItem(CART_KEY);
  return s ? JSON.parse(s) : [];
}

function addToCart(id, title, price) {
  var cart = getCart();
  cart.push({ id: id, title: title, price: price });
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  paintCart();
}

function removeFromCart(i) {
  var cart = getCart();
  cart.splice(i, 1);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  paintCart();
}

function paintCart() {
  var box = document.getElementById('cart-items');
  if (!box) return;
  var cart = getCart();
  var total = 0;
  box.innerHTML = '';
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
    box.innerHTML += '<div class="cart-panel-item">' + cart[i].title + ' - $' + cart[i].price + ' <a href="#" class="cart-item-remove" data-i="' + i + '">Quitar</a></div>';
  }
  var tot = document.getElementById('cart-total');
  if (tot) tot.textContent = '$' + total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
  paintCart();
  document.body.addEventListener('click', function (e) {
    var t = e.target;
    if (t.tagName === 'BUTTON' && t.closest('.item')) {
      var item = t.closest('.item');
      var title = item.querySelector('.item-title').textContent;
      var priceEl = item.querySelector('.item-price');
      if (priceEl) addToCart(title, title, parseFloat(priceEl.textContent.replace('$', '')));
    }
    if (t.classList && t.classList.contains('btn-add-cart')) {
      var p = t.closest('.products-item');
      addToCart(p.dataset.id, p.dataset.title, parseFloat(p.dataset.price));
    }
    if (t.classList && t.classList.contains('cart-item-remove')) {
      e.preventDefault();
      removeFromCart(parseInt(t.getAttribute('data-i'), 10));
    }
    if (t.classList && t.classList.contains('cart-panel-buy')) {
      e.preventDefault();
      alert('Función futura');
    }
  });
});
