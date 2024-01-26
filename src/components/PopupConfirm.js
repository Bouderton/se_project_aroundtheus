import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupElement) {
    super({ popupElement });
    this._trashBtn = document.querySelector("#trash-button");
    console.log(this._trashBtn);
  }

  setEventListeners() {
    this._trashBtn.addEventListener("click", () => {
      super.open();
    });
  }
}

//THIS IS A MESS AHHHHH
