const productList = document.getElementById('product-list');

function displayProducts(products) {
  productList.innerHTML = '';
  products.forEach(product => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" width="150" />
        <h2 class="product-name">${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart('${product.id}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

displayProducts(products);

// Search Feature
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function (e) {
  const searchValue = e.target.value.toLowerCase();
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchValue));
  displayProducts(filteredProducts);
});
