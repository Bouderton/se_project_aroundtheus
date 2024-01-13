export default class UserInfo {
  constructor({ title, subtitle }) {
    this._title = document.querySelector(title);
    this._subtitle = document.querySelector(subtitle);
  }

  getUserInfo() {
    return {
      name: this._title.textContent,
      description: this._subtitle.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._title.textContent = name;
    this._subtitle.textContent = description;
  }
}
