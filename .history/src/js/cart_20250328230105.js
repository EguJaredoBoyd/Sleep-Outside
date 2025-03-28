import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function moveToWishlist(productId) {
    let cart = getLocalStorage("cart") || [];
    let wishlist = getLocalStorage("wishlist") || [];

    cart = cart.filter(id => id !== productId);
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
    }

    setLocalStorage("cart", cart);
    setLocalStorage("wishlist", wishlist);
    alert("Moved to Wishlist!");
    renderCart();
}

function renderCart() {
    const cartItems = getLocalStorage("cart") || [];
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    cartItems.forEach(id => {
        const itemHTML = `
            <div class="cart-item">
                <p>Product ${id}</p>
                <button class="move-to-wishlist" data-id="${id}">♡ Move to Wishlist</button>
            </div>
        `;
        cartContainer.innerHTML += itemHTML;
    });

    document.querySelectorAll(".move-to-wishlist").forEach(button => {
        button.addEventListener("click", event => {
            moveToWishlist(event.target.dataset.id);
        });
    });
}
