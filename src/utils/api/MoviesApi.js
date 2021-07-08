import Api from './Api';

class MainApi extends Api {

  getMovies() {
    return fetch(`${this._host}/beatfilm-movies`, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'GET'
    })
      .then(this.handleResponse);
  }
}

const mainApi = new MainApi('https://api.nomoreparties.co/');

export default mainApi;
