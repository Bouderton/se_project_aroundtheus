import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._confirmBtn = this._popupElement.querySelector(".modal__save-button");
    console.log(this._confirmBtn);
  }

  setSubmitAction(handler) {
    handler.preventDefault();
    console.log("balls");
  }

  setEventListeners() {
    super.setEventListeners();

    this._confirmBtn.addEventListener("click", () => {
      this.setSubmitAction();
    });
  }
}
