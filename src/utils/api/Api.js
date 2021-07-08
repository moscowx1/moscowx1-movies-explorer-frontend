class Api {
  constructor(host) {
    if (!host) {
      throw new Error('host cann`t be empty')
    }
    this._host = host;
  }

  handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  }
}

export default Api;
