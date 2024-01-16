import Popup from "./Popup.js";

export default class PopWithImages extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._modalImage = document.querySelector(".modal__image");
    this._previewCaption = document.querySelector(".modal__caption");
    this._previewCloseBtn = document.querySelector("#preview-close-button");
  }

  open({ name, link }) {
    this._modalImage.src = link;
    this._modalImage.alt = name;
    this._previewCaption.textContent = name;
    super.open();
  }

  setEventListeners() {
    this._modalImage.addEventListener("click", () => {
      this.open();
    });

    this._previewCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", () => {
      this.close();
    });
  }
}
// DO THIS ^^^^
