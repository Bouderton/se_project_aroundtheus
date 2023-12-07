export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _setEventListeners() {
    const { inputSelector } = config;
    const inputElements = form.querySelectorAll(this._inputSelector);
    const submitBtn = form.querySelector(this._submitButtonSelector);
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        checkInputValidity(form, inputElement, config);
        toggleButtonState(inputElements, submitBtn, config);
      });
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

  _toggleButtonState() {}

  _hasValidInput() {}

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(form, config);
  }
}

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__form-input_type_error",
};

const editFormValidator = new FormValidator();
