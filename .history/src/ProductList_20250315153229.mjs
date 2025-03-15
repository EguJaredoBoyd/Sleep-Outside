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

  renderList(list) {
    const htmlStrings = list.map(productCardTemplate);
    this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
  }
}
