import ProductData from './ProductData.mjs';
import { getParam, convertToJson, loadHeaderFooter } from './utils.mjs';
import { setLocalStorage } from './utils.mjs';

loadHeaderFooter();

const productId = getParam('productId');
const dataSource = new ProductData();

async function renderProductDetails() {
  const product = await dataSource.findProductById(productId);
  document.querySelector('.product-title').innerText = product.Name;
  document.querySelector('.product-image').src = product.Images.PrimaryLarge;
  document.querySelector('.product-description').innerText = product.Description;
  document.querySelector('.product-price').innerText = `$${product.FinalPrice}`;
  document.querySelector('#addToCart').addEventListener('click', () => addProductToCart(product));
}

function addProductToCart(product) {
  setLocalStorage('so-cart', product);
}

renderProductDetails();
