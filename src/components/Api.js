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
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  // getUserinfo() {
  //   return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
  //     method: "GET",
  //     headers: this._headers,
  //   }).then((res) => this._checkResponce(res));
  // }

  updateUserInfo({ name, description }) {}

  deleteCard() {}

  getCard(name, link) {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  //other methods

  // get likes
}

//set up fetches for each request
