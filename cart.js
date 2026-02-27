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
  var cart = getCart();
  var box = document.getElementById('cart-items');
  var totalEl = document.getElementById('cart-total');
  if (!box) return;
  box.innerHTML = '';
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var it = cart[i];
    total += it.price;
    box.innerHTML += '<div class="cart-panel-item">' + it.title + ' - $' + it.price + ' <a href="#" class="cart-item-remove" data-i="' + i + '">Quitar</a></div>';
  }
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
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
    if (t.classList && t.classList.contains('btn-add-cart') && t.closest('.products-item')) {
      var p = t.closest('.products-item');
      addToCart(p.dataset.id, p.dataset.title, parseFloat(p.dataset.price));
    }
    if (t.classList && t.classList.contains('cart-item-remove')) {
      e.preventDefault();
      removeFromCart(parseInt(t.getAttribute('data-i'), 10));
    }
  });
});
