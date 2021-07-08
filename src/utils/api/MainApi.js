import Api from './Api';

class MainApi extends Api {
  setToken(token) {
    this._token = token;
  }

  removeToken() {
    this._token = '';
  }

  register(name, email, password) {
    return fetch(`${this._host}/signup`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password, name })
    })
      .then(this.handleResponse);
  }

  login(email, password) {
    return fetch(`${this._host}/signin`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
      .then(this.handleResponse);
  }

  getInfo() {
    if (!this._token) {
      return new Promise.reject();
    }

    return fetch(`${this._host}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token,
      },
      method: 'GET',
    })
      .then(this.handleResponse)
  }
}

const mainApi = new MainApi('https://api.mantra.nomoredomains.club');

export default mainApi;
