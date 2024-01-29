import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._confirmBtn = document.querySelector(".modal__confirm-button");
  }

  setSubmitAction(handler) {}

  setEventListeners() {
    super.setEventListeners();

    this._confirmBtn.addEventListener("click", (e) => {
      console.log("balls");
      e.preventDefault();
    });
  }
}
