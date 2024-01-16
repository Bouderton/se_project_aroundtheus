export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._editButton = document.querySelector("#profile-edit-button");
    this._closeButton = document.querySelector(".modal__close-button");
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());

    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
