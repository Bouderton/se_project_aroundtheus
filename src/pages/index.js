import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

const initialCards = [
  {
    name: "Yosmite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Profile Variables

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileForm = document.forms["modal-form"];

// Card Variables

const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#modal-url-input");
const cardsWrap = document.querySelector(".cards__list");

// Preview Image Variables

const previewModal = document.querySelector("#preview-modal");
const modalImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

// Buttons

const profileEditBtn = document.querySelector("#profile-edit-button");
const addNewCardBtn = document.querySelector("#add-card-button");
const closeBtns = document.querySelectorAll(".modal__close-button");

closeBtns.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => newPopupForm.close());
});

// FUNCTIONS

// function openPopup(popup) {
//   document.addEventListener("keydown", handleEscape);
//   popup.classList.add("modal_opened");
// }

// function closePopup(popup) {
//   document.removeEventListener("keydown", handleEscape);
//   popup.classList.remove("modal_opened");
// }

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  newPopupForm.close();
}

function handleCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardElement = createCard({ name, link });
  cardsWrap.prepend(cardElement);
  closePopup(addCardModal);
  e.target.reset();
  addCardFormValidator.resetValidation();
}

function handleImageClick(card) {
  modalImage.src = card.link;
  modalImage.alt = card.name;
  previewCaption.textContent = card.name;
  // openPopup(previewModal);
}

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView();
}

// EVENTS

addCardModal.addEventListener("submit", handleCardSubmit);

profileForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardsWrap.append(cardElement);
});

addNewCardBtn.addEventListener("click", () => {
  // openPopup(addCardModal);
});

profileEditBtn.addEventListener("click", () => {
  // profileTitleInput.value = profileTitle.textContent;
  // profileSubtitleInput.value = profileSubtitle.textContent;
  newPopupForm.open();
});

// function handleEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     // closePopup(openedModal);
//   }
// }

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__form-input_type_error",
};

const addCardFormValidator = new FormValidator(config, addCardForm);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(config, profileForm);
editProfileFormValidator.enableValidation();

const newPopupForm = new PopupWithForm("#profile-edit-modal");
newPopupForm.setEventListeners();

const editProfileForm = new UserInfo(profileTitleInput, profileSubtitleInput);
