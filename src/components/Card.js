export default class Card {
  constructor({ name, link }, cardTemplate, handleImageClick) {
    this.name = name;
    this.link = link;
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._trashBtn.addEventListener("click", () => {
      // this._handleDeleteCard();
      console.log("deez nuts");
      // this._openConfirm(this._confirmPopup);
    });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this.name, link: this.link });
    });
  }

  // _openConfirm(popup) {
  //   popup.classList.add("modal_opened");
  // }

  _handleLikeIcon() {
    this._likeBtn.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeBtn = this._cardElement.querySelector(".card__like-button");
    this._trashBtn = this._cardElement.querySelector(".card__trash-button");
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(
      ".card__description-text"
    );

    this._cardTitleEl.textContent = this.name;
    this._cardImageEl.src = this.link;
    this._cardImageEl.alt = this.name + "Photo";

    this._setEventListeners();

    return this._cardElement;
  }
}
