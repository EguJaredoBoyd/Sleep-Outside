const baseURL = import.meta.env.VITE_SERVER_URL;

import { convertToJson, getLocalStorage, setLocalStorage } from './utils.mjs';

export default class ProductData {
  constructor(category) {
    this.category = category;
  }

  async getData(category = this.category) {
    try {
      const response = await fetch(`${baseURL}products/search/${category}`);
      const data = await convertToJson(response);
      return data.Result;
    } catch (err) {
      console.error("Error fetching product data:", err);
    }
  }

  async findProductById(id) {
    try {
      const response = await fetch(`${baseURL}product/${id}`);
      const data = await convertToJson(response);
      return data.Result;
    } catch (err) {
      console.error("Error fetching product by ID:", err);
    }
  }
}
