export default class UserInfo {
  constructor(title, subtitle) {
    this._title = title;
    this._subtitle = subtitle;
  }

  getUserInfo() {
    return {
      title: this._title.textContent,
      subtitle: this._subtitle.textContent,
    };
  }

  setUserInfo(data) {}
}
