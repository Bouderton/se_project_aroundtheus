function showInputError(form, inputElement, { inputErrorClass, errorClass }) {
  const errorMessageEl = form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(errorClass);
  errorMessageEl.textContent = inputElement.validationMessage;
}

function hideInputError(form, inputElement, { inputErrorClass, errorClass }) {
  const errorMessageEl = form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(errorClass);
  inputElement.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
}

function checkInputValidity(form, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(form, inputElement, config);
  } else {
    hideInputError(form, inputElement, config);
  }
}

function toggleButtonState(inputElements, submitBtn, config) {
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

function setEventListeners(form, config) {
  const { inputSelector } = config;
  const inputElements = form.querySelectorAll(inputSelector);
  const submitBtn = form.querySelector(".modal__save-button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(form, inputElement, config);
      toggleButtonState(inputElements, submitBtn, config);
    });
  });
}

function enableValidation(config) {
  const forms = document.querySelectorAll(".modal__form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(form, config);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__form-input_type_error",
};

enableValidation(config);
