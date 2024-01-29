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

  getUserinfo() {}

  updateUserInfo({ name, description }) {}

  deleteCard() {}

  //other methods

  // get likes
}

//set up fetches for each request
