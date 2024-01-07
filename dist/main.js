(() => {
  "use strict";
  class t {
    constructor(t, e) {
      (this._form = e),
        (this._inputSelector = t.inputSelector),
        (this._submitButtonSelector = t.submitButtonSelector),
        (this._inactiveButtonClass = t.inactiveButtonClass),
        (this._inputErrorClass = t.inputErrorClass),
        (this._errorClass = t.errorClass);
    }
    _setEventListeners() {
      (this._inputElements = [
        ...this._form.querySelectorAll(this._inputSelector),
      ]),
        (this.submitBtn = this._form.querySelector(this._submitButtonSelector)),
        this._inputElements.forEach((t) => {
          t.addEventListener("input", (e) => {
            this._checkInputValidity(t), this._toggleButtonState();
          });
        });
    }
    _showInputError(t) {
      const e = this._form.querySelector(`#${t.id}-error`);
      t.classList.add(this._errorClass), (e.textContent = t.validationMessage);
    }
    _hideInputError(t) {
      const e = this._form.querySelector(`#${t.id}-error`);
      t.classList.remove(this._errorClass),
        t.classList.remove(this._inputErrorClass),
        (e.textContent = "");
    }
    _checkInputValidity(t) {
      t.validity.valid ? this._hideInputError(t) : this._showInputError(t);
    }
    _isFormValid() {
      return this._inputElements.every((t) => t.validity.valid);
    }
    _toggleButtonState() {
      this._isFormValid()
        ? (this.submitBtn.classList.remove(this._inactiveButtonClass),
          (this.submitBtn.disabled = !1))
        : (this.submitBtn.classList.add(this._inactiveButtonClass),
          (this.submitBtn.disabled = !0));
    }
    enableValidation() {
      this._form.addEventListener("submit", (t) => {
        t.preventDefault();
      }),
        this._setEventListeners();
    }
    resetValidation() {
      this._toggleButtonState(),
        this._inputElements.forEach((t) => {
          this._hideInputError(t);
        });
    }
  }
  class e {
    constructor({ name: t, link: e }, n, r) {
      (this.name = t),
        (this.link = e),
        (this._cardTemplate = n),
        (this._handleImageClick = r);
    }
    _setEventListeners() {
      this._likeBtn.addEventListener("click", () => {
        this._handleLikeIcon();
      }),
        this._trashBtn.addEventListener("click", () => {
          this._handleDeleteCard();
        }),
        this._cardImageEl.addEventListener("click", () => {
          this._handleImageClick(this);
        });
    }
    _handleLikeIcon() {
      this._likeBtn.classList.toggle("card__like-button_active");
    }
    _handleDeleteCard() {
      this._cardElement.remove(), (this._cardElement = null);
    }
    getView() {
      return (
        (this._cardElement = document
          .querySelector(this._cardTemplate)
          .content.querySelector(".card")
          .cloneNode(!0)),
        (this._likeBtn = this._cardElement.querySelector(".card__like-button")),
        (this._trashBtn = this._cardElement.querySelector(
          ".card__trash-button"
        )),
        (this._cardImageEl = this._cardElement.querySelector(".card__image")),
        (this._cardTitleEl = this._cardElement.querySelector(
          ".card__description-text"
        )),
        (this._cardTitleEl.textContent = this.name),
        (this._cardImageEl.src = this.link),
        (this._cardImageEl.alt = this.name + "Photo"),
        this._setEventListeners(),
        this._cardElement
      );
    }
  }
  console.log("Hello World");
  const n = document.querySelector("#profile-edit-modal"),
    r = document.querySelector(".profile__title"),
    o = document.querySelector(".profile__subtitle"),
    s = document.querySelector("#profile-title-input"),
    i = document.querySelector("#profile-subtitle-input"),
    a = document.forms["modal-form"],
    l = document.querySelector("#add-card-modal"),
    c = l.querySelector("#add-card-form"),
    d = document.querySelector("#card-title-input"),
    u = document.querySelector("#modal-url-input"),
    m = document.querySelector(".cards__list"),
    _ = document.querySelector("#preview-modal"),
    h = _.querySelector(".modal__image"),
    p = _.querySelector(".modal__caption"),
    v = document.querySelector("#profile-edit-button"),
    E = document.querySelector("#add-card-button");
  function f(t) {
    document.addEventListener("keydown", k), t.classList.add("modal_opened");
  }
  function S(t) {
    document.removeEventListener("keydown", k),
      t.classList.remove("modal_opened");
  }
  function y(t) {
    (h.src = t.link), (h.alt = t.name), (p.textContent = t.name), f(_);
  }
  function g(t) {
    return new e(t, "#card-template", y).getView();
  }
  function k(t) {
    "Escape" === t.key && S(document.querySelector(".modal_opened"));
  }
  document.querySelectorAll(".modal__close-button").forEach((t) => {
    const e = t.closest(".modal");
    t.addEventListener("click", () => S(e));
  }),
    l.addEventListener("submit", function (t) {
      t.preventDefault();
      const e = g({ name: d.value, link: u.value });
      m.prepend(e), S(l), t.target.reset(), b.resetValidation();
    }),
    v.addEventListener("click", () => {
      (s.value = r.textContent),
        (i.value = o.textContent),
        w.resetValidation(),
        f(n);
    }),
    a.addEventListener("submit", function (t) {
      t.preventDefault(),
        (r.textContent = s.value),
        (o.textContent = i.value),
        S(n);
    }),
    [
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
    ].forEach((t) => {
      const e = g(t);
      m.append(e);
    }),
    E.addEventListener("click", () => {
      f(l);
    }),
    v.addEventListener("click", () => {
      (s.value = r.textContent), (i.value = o.textContent), f(n);
    }),
    document.querySelectorAll(".modal").forEach((t) => {
      t.addEventListener("mousedown", (e) => {
        e.target.classList.contains("modal") && S(t);
      });
    });
  const L = {
      formSelector: ".modal__form",
      inputSelector: ".modal__form-input",
      submitButtonSelector: ".modal__save-button",
      inactiveButtonClass: "modal__save-button_disabled",
      inputErrorClass: "modal__error",
      errorClass: "modal__form-input_type_error",
    },
    b = new t(L, c);
  b.enableValidation();
  const w = new t(L, a);
  w.enableValidation();
})();
