class Section {
  constructor({ items, renderer }) {
    this.items = items;
    this.renderer = renderer;
  }
  renderItems() {
    this._items.forEach((data) => {
      this.addItem(data);
    });
  }
  addItem(data) {
    const element = this._renderer(data);
    this._container.prepend(element);
  }
}
