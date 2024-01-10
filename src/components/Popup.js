export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open(data) {}

  close(data) {}

  _handleEscClose() {
    //esc key event
  }

  setEventListeners() {
    //add click event
  }
}
