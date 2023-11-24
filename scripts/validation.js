function showInputError(forms, inputElements, { inputErrorClass }) {
  const errorMessageEl = forms.querySelector(`#${inputElements.id}-error`);
  inputElements.classList.add(".modal__error");
  errorMessageEl.textContent = inputElements.validationMessage;
  inputElements.classList.add(inputErrorClass);
}

function hideInputError(forms, inputElements, { inputErrorClass }) {
  const errorMessageEl = forms.querySelector(`#${inputElements.id}-error`);
  inputElements.classList.remove(".modal__error");
  inputElements.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
}

function checkInputValidity(forms, inputElements) {
  if (!inputElements.validity.valid) {
    showInputError(forms, inputElements, config);
  } else {
    hideInputError(forms, inputElements, config);
  }
  profileEditBtn.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileSubtitleInput.value = profileSubtitle.textContent;
    [profileTitleInput, profileSubtitleInput].forEach((input) =>
      checkInputValidity(profileForm, input)
    );
    openPopup(profileEditModal);
  });
}

function setEventListeners(forms, config) {
  const { inputSelector } = config;
  const inputElements = forms.querySelectorAll(inputSelector);
  inputElements.forEach((inputElements) => {
    inputElements.addEventListener("input", (e) => {
      checkInputValidity(forms, inputElements, config);
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
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
