import Popup from "./Popup.js";

export default class PopWithImages extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._modalImage = document.querySelector(".modal__image");
    this._previewCaption = document.querySelector(".modal__caption");
    console.log(this._modalImage);
  }

  open({ name, link }) {
    this._modalImage.src = link;
    this._modalImage.alt = name;
    this._previewCaption.textContent = name;
    super.open();
  }

  close() {
    super.close();
  }

  setEventListeners() {
    this._modalImage.addEventListener("click", () => {
      console.log("card");
    });
  }
}
// DO THIS ^^^^
