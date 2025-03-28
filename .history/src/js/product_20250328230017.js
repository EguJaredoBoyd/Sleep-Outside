import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { addToCart } from "./cart.js";

const productList = document.getElementById("product-list");

function renderProductList(products) {
    productList.innerHTML = "";
    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="add-to-wishlist" data-id="${product.id}">♡ Wishlist</button>
            </div>
        `;
        productList.innerHTML += productHTML;
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", event => {
            addToCart(event.target.dataset.id);
        });
    });

    document.querySelectorAll(".add-to-wishlist").forEach(button => {
        button.addEventListener("click", event => {
            addToWishlist(event.target.dataset.id);
        });
    });
}

function addToWishlist(productId) {
    let wishlist = getLocalStorage("wishlist") || [];
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        setLocalStorage("wishlist", wishlist);
        alert("Added to Wishlist!");
    }
}

const productData = new ProductData();
productData.getProducts().then(renderProductList);
