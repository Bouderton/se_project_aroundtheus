export default class Section {
  constructor({ items, renderer }, cssSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = cssSelector;
  }
  renderItems() {
    this._items.forEach((data) => {
      this.addItem(data);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
