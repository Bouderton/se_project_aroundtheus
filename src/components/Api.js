export default class Api {
  constructor(options) {}

  getInitialCards() {}

  //other methods
}

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "250daeea-0b63-48f9-a4b3-e529116433c4",
    "Content-Type": "application/json",
  },
});
