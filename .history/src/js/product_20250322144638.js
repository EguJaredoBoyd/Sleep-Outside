import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

const baseURL = import.meta.env.VITE_SERVER_URL;

async findProductById(id) {
  const response = await fetch(`${baseURL}product/${id}`);
  const data = await convertToJson(response);
  return data.Result;
}





