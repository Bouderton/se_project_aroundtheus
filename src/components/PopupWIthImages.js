import Popup from "./Popup.js";

export default class PopWithImages extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewModal = this._popupElement.querySelector(popupSelector);
    this._modalImage = document.querySelector(".modal__image");
    this._previewCaption = document.querySelector(".modal__caption");
    console.log(this._previewModal);
  }

  open({ name, link }) {
    this._modalImage.src = link.link;
    this._modalImage.alt = name.name;
    this._previewCaption.textContent = name.name;
    super.open();
  }

  close() {
    super.close();
  }

  setEventListeners() {
    this._modalImage.forEach((image) => {
      image.addEventListener("click", () => {
        this.open();
      });
    });
  }
}

// DO THIS ^^^^
