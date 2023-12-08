export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _setEventListeners(form, config) {
    const { inputSelector } = config;
    const inputElements = form.querySelectorAll(this._inputSelector);
    const submitBtn = form.querySelector(this._submitButtonSelector);
    this._inputElement.addEventListener("input", (e) => {
      checkInputValidity(this._form, this._inputElement, config);
      toggleButtonState(inputElements, submitBtn, config);
    });
  }

  _showInputError(inputElement) {
    const errorMessageEl = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._errorClass);
    errorMessageEl.textContent = inputElement.validationMessage;
  }

  _hideInputError() {
    const errorMessageEl = form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
  }

  _toggleButtonState() {
    let foundInvalid = false;
    inputElements.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
        foundInvalid = true;
      }
    });

    if (foundInvalid) {
      submitBtn.classList.add(config.inactiveButtonClass);
      submitBtn.disabled = true;
    } else {
      submitBtn.classList.remove(config.inactiveButtonClass);
      submitBtn.disabled = false;
    }
  }

  enableValidation(config) {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(form, config);
  }
}
