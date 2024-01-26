import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupConfirm from "../components/Popup.js";
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

const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileForm = document.forms["modal-form"];
// const profileImage = document.querySelector("#profile-image");
const editImageForm = document.querySelector("#image-edit-form");
const confirmDelete = document.querySelector("#delete-confirm");

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
  profileUserInfo.setUserInfo(data);
}

function handleCardSubmit({ title: name, subtitle: link }) {
  newCardSection.addItem({ name, link });
  addImageForm.close();
}

function handleImageClick(card) {
  previewImagePopup.open(card);
}

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView();
}

// EVENT LISTENERS

addNewCardBtn.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addImageForm.open();
});

profileEditBtn.addEventListener("click", () => {
  const { name, description } = profileUserInfo.getUserInfo();
  profileTitleInput.value = name;
  profileSubtitleInput.value = description;
  newPopupForm.open();
});

modalImage.addEventListener("click", () => {
  previewImagePopup.open();
});

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__form-input_type_error",
};

//New Classes

const profileEditImage = new FormValidator(config, editImageForm);
profileEditImage.enableValidation();

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

const previewImagePopup = new PopupWithImage("#preview-modal");
previewImagePopup.setEventListeners();

const newCardSection = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  cardsWrap
);

newCardSection.renderItems();

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "250daeea-0b63-48f9-a4b3-e529116433c4",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((result) => {})
  .catch((err) => {
    console.error(err);
  });
