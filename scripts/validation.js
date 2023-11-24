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
  profileEditBtn.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileSubtitleInput.value = profileSubtitle.textContent;
    [profileTitleInput, profileSubtitleInput].forEach((input) =>
      checkInputValidity(profileForm, input)
    );
    openPopup(profileEditModal);
  });
  addNewCardBtn.addEventListener("click", () => {
    cardTitleInput.value = "";
    cardUrlInput.value = "";
    [cardTitleInput, cardUrlInput].forEach((input) => {
      checkInputValidity(input);
    });
    openPopup(addCardForm);
  });
}

function setEventListeners(forms, config) {
  const { inputSelector } = config;
  const inputElements = forms.querySelectorAll(inputSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(forms, inputElement, config);
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
  inactiveButtonClass: ".modal__button_disabled",
  inputErrorClass: ".modal__error",
  errorClass: ".modal__form-input_type_error",
};

enableValidation(config);
