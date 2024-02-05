export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  updateUserInfo({ name, description }) {
    // FETCH USER INFO AND PATCH IT
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description,
      }),
    }).then((res) => this._checkResponce(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._checkResponce(res));
  }

  // getLikes(id) {
  //   return fetch(`${this._baseUrl}/cards/${id}/likes`, {
  //     method: "GET",
  //     headers: this._headers,
  //   }).then((res) => this._checkResponce(res));
  // }

  setLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  // FIGURE OUT HOW TO SET THE LIKES INDEX.JS

  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  // FIGURE OUT HOW TO REMOVE LIKES INDEX.JS

  // getAvatar() {
  //   return fetch(`${this._baseUrl}/users/me/avatar`, {
  //     method: "GET",
  //     headers: this._headers,
  //   }).then((res) => this._checkResponce);
  // }

  changeAvatar(url) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => this._checkResponce(res));
  }
}

//set up fetches for each request
// HOW

//SO
// Request to the server in api THEN
// after the promise it returns is successful (then)
// JS code runs and affects the contents of the page
// YOU GOT THIS WOOOOOOOOOO
