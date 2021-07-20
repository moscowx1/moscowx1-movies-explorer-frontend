class Api {
  constructor(host) {
    if (!host) {
      throw new Error('host cann`t be empty')
    }
    this._host = host;
  }

  setToken(token) {
    this._token = token;
  }

  removeToken() {
    this._token = '';
  }

  handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  }
}

export default Api;
