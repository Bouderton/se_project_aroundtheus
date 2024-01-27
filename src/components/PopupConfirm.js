import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, handleDeleteClick) {
    super({ popupSelector });
    this._handleDeleteClick = handleDeleteClick;
    this._trashBtn = document.querySelector("#trash-button");
  }
}
