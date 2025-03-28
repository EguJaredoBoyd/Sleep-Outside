import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { addToCart } from "./cart.js";

function renderProductDetail(product) {
    const productDetail = document.getElementById("product-detail");
    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <button id="add-to-cart">Add to Cart</button>
        <button id="add-to-wishlist">♡ Wishlist</button>
    `;

    document.getElementById("add-to-cart").addEventListener("click", () => {
        addToCart(product.id);
    });

    document.getElementById("add-to-wishlist").addEventListener("click", () => {
        addToWishlist(product.id);
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
