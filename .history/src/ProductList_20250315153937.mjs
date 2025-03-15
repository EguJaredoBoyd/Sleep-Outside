function productCardTemplate(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>$${product.price}</span>
    </div>
  `;
}




export default class 

ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  import { renderListWithTemplate } from "./utils.mjs";

renderList(list) {
  renderListWithTemplate(productCardTemplate, this.listElement, list);
}


  renderList(list) {
    const htmlStrings = list.map(productCardTemplate);
    this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
  }
}


