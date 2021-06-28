class AuthApi {
  constructor(host) {
    this._host = host;
  }

  handleResponse(response) {
    if (!response.ok) {
      throw new Error(response);
    }

    return response.json();
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
}

const authApi = new AuthApi("https://api.mantra.nomoredomains.club");

export default authApi;
