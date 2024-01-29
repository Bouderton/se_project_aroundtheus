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
      headers: {
        authorization: "250daeea-0b63-48f9-a4b3-e529116433c4",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getUserinfo() {}

  updateUserInfo({ name, description }) {
    return fetch("${this._baseUrl}/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        about: description,
      }),
    }).then((res) => this._checkResponce(res));
  }

  deleteCard() {}

  //other methods

  // get likes
}

//set up fetches for each request
