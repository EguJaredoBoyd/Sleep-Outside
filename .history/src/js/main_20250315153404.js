import ProductData from "./path/to/ProductData.mjs";
const productData = new ProductData();

import ProductList from "./path/to/ProductList.mjs";

const listElement = document.querySelector(".product-list");
const productList = new ProductList("tents", productData, listElement);
productList.init();
