export default class Api {
  constructor(options) {}

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "250daeea-0b63-48f9-a4b3-e529116433c4",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  //other methods
}

//set up fetches for each request
