import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._closeButton = document.querySelectorAll(".modal__close-button");
  }

  open() {
    super.open();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    // get user info inputs from getUserInfo
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      this.close();
      e.preventDefault();
    });

    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal_opened")) {
        this.close();
      }
    });

    this._closeButton.forEach((button) => {
      button.addEventListener("click", () => this.close());
    });
  }
}
