import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._imageEditForm = this._popupElement.querySelector(".modal__form");
  }

  setSubmitAction(handler) {
    this._handleSubmit = handler;
  }

  setEventListeners() {
    super.setEventListeners();

    this._imageEditForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit();
      this.close();
    });
  }
}
