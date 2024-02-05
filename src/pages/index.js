import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupConfirm from "../components/PopupConfirm.js";
import "../pages/index.css";

// VARIABLES

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__form-input_type_error",
};

// Profile Variables

const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileForm = document.forms["modal-form"];
const editImageForm = document.querySelector("#image-edit-form");
const avatarImage = document.querySelector("#profile-avatar-image");
const profileEditImageForm = document.querySelector("#image-edit-form");
const pencil = document.querySelector("#profile-pencil");

// Card Variables

const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardsWrap = document.querySelector(".cards__list");

// Preview Image Variables

const previewModal = document.querySelector("#preview-modal");
const modalImage = previewModal.querySelector(".modal__image");

// Buttons

const profileEditBtn = document.querySelector("#profile-edit-button");
const addNewCardBtn = document.querySelector("#add-card-button");

// API'S

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "250daeea-0b63-48f9-a4b3-e529116433c4",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((cards) => {
    newCardSection.setItems(cards);
    newCardSection.renderItems();
  })
  .catch((err) => {
    alert(`${err} Failed to get cards.`);
  });

api
  .getUserInfo()
  .then((info) => {
    profileUserInfo.setUserInfo({
      name: info.name,
      description: info.about,
    });
    profileUserInfo.setUserAvatar(info.avatar);
  })
  .catch((err) => {
    alert(`${err} Failed to get user info.`);
  });

// API FUNCTIONS

function handleProfileEditSubmit(data) {
  profileEditForm.setLoading(true);
  api
    .updateUserInfo(data)
    .then((result) => {
      profileUserInfo.setUserInfo(data);
      profileEditForm.setLoading(false);
    })
    .catch((err) => {
      alert(`${err} Failed to change user info.`);
    });
}

function handleCardSubmit({ title: name, subtitle: link }) {
  addImageForm.setLoading(true);
  api
    .addCard({ name, link })
    .then((card) => {
      newCardSection.addItem({ name, link });
      addImageForm.setLoading(false);
      addImageForm.close();
    })
    .catch((err) => {
      alert(`${err} Failed to add card.`);
    });
}

function handleAvatarSubmit(input) {
  avatarEditForm.setLoading(true);
  api
    .changeAvatar(input.link)
    .then((result) => {
      profileUserInfo.setUserAvatar(result.avatar);
      avatarEditForm.setLoading(false);
    })
    .catch((err) => {
      alert(`${err} Failed to change avatar.`);
    });
}

function handleAddLike(card) {
  if (card.isLiked) {
    return api
      .removeLike(card._id)
      .then((res) => {
        card.handleLikeIcon(res.isLiked);
      })
      .catch((err) => {
        alert(`${err} Failed to add/remove like.`);
      });
  } else {
    return api
      .setLike(card._id)
      .then((res) => {
        card.handleLikeIcon(res.isLiked);
      })
      .catch((err) => {
        alert(`${err} Failed to add/remove like.`);
      });
  }
}

// FUNCTIONS

function handleImageClick(card) {
  previewImagePopup.open(card);
}

function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleDeleteClick,
    handleAddLike
  );
  return card.getView();
}

function handleDeleteClick(card) {
  confirmDeletePopup.open();
  confirmDeletePopup.setSubmitAction(() => {
    api
      .deleteCard(card._id)
      .then((result) => {
        card.handleDeleteCard(result);
      })
      .catch((err) => {
        alert(`${err} Failed to delete post.`);
      });
  });
}

// EVENT LISTENERS

avatarImage.addEventListener("click", () => {
  avatarEditForm.open();
});

pencil.addEventListener("click", () => {
  avatarEditForm.open();
});

addNewCardBtn.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addImageForm.open();
});

profileEditBtn.addEventListener("click", () => {
  const { name, description } = profileUserInfo.getUserInfo();
  profileTitleInput.value = name;
  profileSubtitleInput.value = description;
  profileEditForm.open();
});

modalImage.addEventListener("click", () => {
  previewImagePopup.open();
});

//CLASSES

const profileEditImage = new FormValidator(config, editImageForm);
profileEditImage.enableValidation();

const addCardFormValidator = new FormValidator(config, addCardForm);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(config, profileForm);
editProfileFormValidator.enableValidation();

const profileEditForm = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
profileEditForm.setEventListeners();

const profileUserInfo = new UserInfo({
  title: ".profile__title",
  subtitle: ".profile__subtitle",
  avatar: ".profile__image",
});

const addImageForm = new PopupWithForm("#add-card-modal", handleCardSubmit);
addImageForm.setEventListeners();

const previewImagePopup = new PopupWithImage("#preview-modal");
previewImagePopup.setEventListeners();

const confirmDeletePopup = new PopupConfirm("#delete-popup");
confirmDeletePopup.setEventListeners();

const avatarEditForm = new PopupWithForm(
  "#profile-image-modal",
  handleAvatarSubmit
);
avatarEditForm.setEventListeners();

const avatarEditFormValidation = new FormValidator(
  config,
  profileEditImageForm
);
avatarEditFormValidation.enableValidation();

const newCardSection = new Section(
  {
    items: [],
    renderer: createCard,
  },
  cardsWrap
);

/* To-Do List:
- SUBMIT AND PRAY LOL */
