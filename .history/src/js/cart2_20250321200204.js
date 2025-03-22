const cartItemsDiv = document.getElementById('cart-items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    total += product.price * item.quantity;
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <label>Quantity: 
          <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="quantity-input" />
        </label>
        <hr />
      </div>
    `;
  });
  document.getElementById('total-price').textContent = total;
  addQuantityListeners();
}

function addQuantityListeners() {
  const quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', e => {
      const newQty = parseInt(e.target.value);
      const productId = e.target.dataset.id;
      cart = cart.map(item => {
        if (item.id === productId) {
          item.quantity = newQty;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    });
  });
}

displayCart();
