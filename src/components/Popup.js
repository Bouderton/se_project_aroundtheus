export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.classList.add("modal-opened");
    document.addEventListener("keydown", handleEscape);
  }

  close() {
    document.removeEventListener("keydown", handleEscape);
    this._popupElement.classList.remove("modal-opened");
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    //add click event
  }
}
