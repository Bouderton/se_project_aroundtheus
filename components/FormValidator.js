export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _setEventListeners() {
    this._inputElements = this._form.querySelectorAll(this._inputSelector);
    this._submitBtn = this._form.querySelector(this._submitButtonSelector);
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(inputElement);
        toggleButtonState();
      });
    });
  }

  _showInputError(inputElement) {
    const errorMessageEl = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    this._inputElement.classList.add(this._errorClass);
    errorMessageEl.textContent = this._inputElement.validationMessage;
  }

  _hideInputError() {
    this._inputElement.classList.remove(this._errorClass);
    this._inputElement.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
  }

  toggleButtonState() {
    let foundInvalid = false;
    if (!this._inputElement.validity.valid) {
      foundInvalid = true;
    }

    if (foundInvalid) {
      this._submitBtn.classList.add(this._inactiveButtonClass);
      this._submitBtn.disabled = true;
    } else {
      this._submitBtn.classList.remove(this._inactiveButtonClass);
      this._submitBtn.disabled = false;
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}
