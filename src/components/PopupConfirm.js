import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._submitBtn = document.querySelector("#confirm-button");
    console.log({ popupSelector });
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
