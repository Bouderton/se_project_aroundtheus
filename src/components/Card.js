export default class Card {
  constructor(
    { name, link, _id },
    cardTemplate,
    handleImageClick,
    handleDeleteClick,
    handleAddLike
  ) {
    this.name = name;
    this.link = link;
    this._id = _id;
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLike = handleAddLike;
  }

  // setLikeStatus(status) {
  //   this._isLiked = status;
  // }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this.handleLikeIcon();
    });

    this._cardElement
      .querySelector("#trash-button")
      .addEventListener("click", () => {
        this._handleDeleteClick(this);
      });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this.name, link: this.link });
    });
  }

  handleLikeIcon() {
    this._likeBtn.classList.toggle("card__like-button_active");
    // this._handleAddLike();
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeBtn = this._cardElement.querySelector(".card__like-button");
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
