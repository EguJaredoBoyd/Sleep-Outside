import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { addToCart } from "./cart.js";

function renderWishlist() {
    const wishlistItems = getLocalStorage("wishlist") || [];
    const wishlistContainer = document.getElementById("wishlist-items");
    wishlistContainer.innerHTML = "";

    wishlistItems.forEach(id => {
        const itemHTML = `
            <div class="wishlist-item">
                <p>Product ${id}</p>
                <button class="move-to-cart" data-id="${id}">🛒 Move to Cart</button>
                <button class="remove-from-wishlist" data-id="${id}">❌ Remove</button>
            </div>
        `;
        wishlistContainer.innerHTML += itemHTML;
    });

    document.querySelectorAll(".move-to-cart").forEach(button => {
        button.addEventListener("click", event => {
            moveToCart(event.target.dataset.id);
        });
    });

    document.querySelectorAll(".remove-from-wishlist").forEach(button => {
        button.addEventListener("click", event => {
            removeFromWishlist(event.target.dataset.id);
        });
    });
}

function moveToCart(productId) {
    let wishlist = getLocalStorage("wishlist") || [];
    let cart = getLocalStorage("cart") || [];

    wishlist = wishlist.filter(id => id !== productId);
    if (!cart.includes(productId)) {
        cart.push(productId);
    }

    setLocalStorage("wishlist", wishlist);
    setLocalStorage("cart", cart);
    alert("Moved to Cart!");
    renderWishlist();
}

function removeFromWishlist(productId) {
    let wishlist = getLocalStorage("wishlist") || [];
    wishlist = wishlist.filter(id => id !== productId);
    setLocalStorage("wishlist", wishlist);
    alert("Removed from Wishlist!");
    renderWishlist();
}

document.addEventListener("DOMContentLoaded", renderWishlist);
