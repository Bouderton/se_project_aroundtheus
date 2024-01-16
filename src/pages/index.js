import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImages from "../components/PopupWithImages.js";

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
  {
    name: "Mt Everest",
    link: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
  },
  {
    name: "Great Wall of China",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
  },
  {
    name: "Grand Canyon",
    link: "https://www.amtrakvacations.com/sites/amtrak/files/styles/hero/public/media/images/grand-canyon_670151752-web.jpg?h=f790d5ec&itok=PmHMpYK5",
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

// FUNCTIONS

function handleProfileEditSubmit(data) {
  // debugger;
  // profileTitle.textContent = profileTitleInput.value;
  // profileSubtitle.textContent = profileSubtitleInput.value;
  // debugger;
  profileUserInfo.setUserInfo(data);
}

function handleCardSubmit(e) {
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  newCardSection.renderItems();
  const cardElement = createCard({ name, link });
  newCardSection.addItem(cardElement);
  addImageForm.close();
  addCardFormValidator.resetValidation();
}

function handleImageClick(card) {
  // modalImage.src = card.link;
  // modalImage.alt = card.name;
  // previewCaption.textContent = card.name;
  previewImagePopup.open(card);
}

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView();
}

// EVENT LISTENERS

// addCardModal.addEventListener("submit", handleCardSubmit);

// profileForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardsWrap.append(cardElement);
});

addNewCardBtn.addEventListener("click", () => {
  addImageForm.open();
});

profileEditBtn.addEventListener("click", () => {
  const { name, description } = profileUserInfo.getUserInfo();
  profileTitleInput.value = name;
  profileSubtitleInput.value = description;
  newPopupForm.open();
});

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

const newPopupForm = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
newPopupForm.setEventListeners();

const profileUserInfo = new UserInfo({
  title: ".profile__title",
  subtitle: ".profile__subtitle",
});

const addImageForm = new PopupWithForm("#add-card-modal", handleCardSubmit);
addImageForm.setEventListeners();

const previewImagePopup = new PopupWithImages("#preview-modal");
previewImagePopup.setEventListeners();

const newCardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(cardData, "#card-template", handleImageClick);
      return card.addItem(item);
    },
  },
  cardsWrap
);

// FOR SUBMITTING THE FORM
// profileUserInfo.setUserInfo(profileTitleInput, profileSubtitleInput);

// this._handleFormSubmit(this._getInputValues())

// function handleProfileEditSubmit(data) { .. }

// setUserInfo(data)
