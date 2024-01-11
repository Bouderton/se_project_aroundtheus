export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._button = document.querySelector("#close-button");
  }
  open() {
    this._popupElement.classList.add("modal-opened");
    document.addEventListener("keydown", this._handleEscape);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscape);
    this._popupElement.classList.remove("modal-opened");
  }

  _handleEscape(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    //add click event
    this._button.addEventListener("click", () => {
      this._popupElement.classList.add("modal_opened");
    });
  }
}
