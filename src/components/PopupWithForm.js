import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal-form");
    this._handleFormSubmit = handleFormSubmit;
  }

  open() {
    super.open();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

//index.js

const formPopup = new PopupWithForm("#profile-edit-modal", () => {});
formPopup.open();
formPopup.close();