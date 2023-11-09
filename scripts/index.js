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

// VARIABLES

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseBtn = profileEditModal.querySelector("#profile-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileEditForm = profileEditModal.querySelector("#modal-form");
const addCardForm = document.querySelector("#add-card-modal");
const addNewCardBtn = document.querySelector("#add-card-button");
const addCardCloseBtn = document.querySelector("#add-card-close-button");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#url-input");
const cardSubmitBtn = addCardForm.querySelector("#card-save-button");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardsWrap = document.querySelector(".cards__list");

// FUNCTIONS

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function closeCardPopup() {
  addCardForm.classList.remove("modal_opened");
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup();
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__description-text");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name + "Photo";
  return cardElement;
}

function handleCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardsWrap.prepend(cardElement);
  closeCardPopup();
}

// EVENTS

profileEditBtn.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
});

profileCloseBtn.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardsWrap.append(cardElement);
});

addNewCardBtn.addEventListener("click", () => {
  addCardForm.classList.add("modal_opened");
});

addCardCloseBtn.addEventListener("click", closeCardPopup);

addCardForm.addEventListener("submit", handleCardSubmit);

const likeBtns = document.querySelectorAll(".card__like-button");
likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-button_active");
  });
});

const cardTrashBtns = document.querySelectorAll(".card__trash-button");
cardTrashBtns.forEach((cardTrashBtn) => {
  cardTrashBtn.addEventListener("click", (e) => {
    e.target.closest(".card").remove();
  });
});
