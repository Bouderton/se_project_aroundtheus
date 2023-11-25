function showInputError(forms, inputElement, { inputErrorClass }, errorClass) {
  const errorMessageEl = forms.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("modal__form-input_type_error");
  errorMessageEl.textContent = inputElement.validationMessage;
  errorMessageEl.classList.add(errorClass);
}

function hideInputError(forms, inputElement, { inputErrorClass }) {
  const errorMessageEl = forms.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("modal__form-input_type_error");
  inputElement.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
}

function checkInputValidity(forms, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(forms, inputElement, config);
  } else {
    hideInputError(forms, inputElement, config);
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

function setEventListeners(forms, config) {
  const { inputSelector } = config;
  const inputElements = forms.querySelectorAll(inputSelector);
  const submitBtn = forms.querySelector(".modal__save-button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(forms, inputElement, config);
      toggleButtonState(inputElements, submitBtn, config);
    });
  });
}

function enableValidation(config) {
  const forms = document.querySelectorAll(".modal__form");
  forms.forEach((forms) => {
    forms.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(forms, config);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: ".modal__error",
  errorClass: ".modal__form-input_type_error",
};

enableValidation(config);
