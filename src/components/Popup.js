export default class Popup {
  constructor({ popupSelector }, handleEscape) {
    this._popupElement = document.querySelector(popupSelector);
    console.log(this._popupElement);
    this._button = document.querySelector("#profile-edit-button");
    this._handleEscape = handleEscape;
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
