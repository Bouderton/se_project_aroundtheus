import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";

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

const cardData = {
  name: "Yosmite",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const card = new Card(cardData, "#card-template", handleImageClick);
card.getView();

// Profile Variables

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileForm = document.forms["modal-form"];

// Card Variables

const addCardForm = document.querySelector("#add-card-modal");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#modal-url-input");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardsWrap = document.querySelector(".cards__list");

// Preview Image Variables

const previewModal = document.querySelector("#preview-modal");
const modalImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

// Buttons

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileSubmitBtn = profileEditModal.querySelector(".modal__save-button");
const cardSubmitBtn = addCardForm.querySelector("#card-save-button");
const addNewCardBtn = document.querySelector("#add-card-button");
const closeBtns = document.querySelectorAll(".modal__close-button");

closeBtns.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});

// FUNCTIONS

function openPopup(popup) {
  document.addEventListener("keydown", handleEscape);
  popup.classList.add("modal_opened");
}

function closePopup(popup) {
  document.removeEventListener("keydown", handleEscape);
  popup.classList.remove("modal_opened");
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup(profileEditModal);
}

function handleCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const card = new Card({ name, link }, "#card-template", handleImageClick);
  const cardElement = card.getView();
  cardsWrap.prepend(cardElement);
  closePopup(addCardForm);
  e.target.reset();
  cardSubmitBtn.classList.add(config.inactiveButtonClass);
  cardSubmitBtn.disabled = true;
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__description-text");

  // const likeBtn = cardElement.querySelector(".card__like-button");
  // const cardTrashBtn = cardElement.querySelector(".card__trash-button");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name + "Photo";

  // const handleLikeIcon = (evt) => {
  //   evt.classList.toggle("card__like-button_active");
  // };

  // const handleDeleteCard = () => {
  //   cardElement.remove();
  // };

  // likeBtn.addEventListener("click", () => {
  //   handleLikeIcon(likeBtn);
  // });

  // cardTrashBtn.addEventListener("click", (e) => {
  //   handleDeleteCard();
  // });

  // cardImageEl.addEventListener("click", () => {
  //   modalImage.src = cardData.link;
  //   modalImage.alt = cardData.name;
  //   previewCaption.textContent = cardData.name;
  //   openPopup(previewModal);
  // });

  return cardElement;
}

function handleImageClick(card) {
  modalImage.src = card.link;
  modalImage.alt = card.name;
  previewCaption.textContent = card.name;
  openPopup(previewModal);
}

// EVENTS

addCardForm.addEventListener("submit", handleCardSubmit);

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
  openPopup(profileEditModal);
});

profileForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.getView();
  cardsWrap.append(cardElement);
});

addNewCardBtn.addEventListener("click", () => {
  cardSubmitBtn.classList.add(config.inactiveButtonClass);
  cardSubmitBtn.disabled = true;
  openPopup(addCardForm);
});

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
  profileSubmitBtn.classList.remove(config.inactiveButtonClass);
  profileSubmitBtn.disabled = false;
  openPopup(profileEditModal);
});

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closePopup(modal);
    }
  });
});

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopup(openedModal);
  }
}

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

const editProfileFormValidator = new FormValidator(config, profileEditModal);
editProfileFormValidator.enableValidation();
