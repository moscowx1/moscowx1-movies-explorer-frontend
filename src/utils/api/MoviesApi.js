import Api from './Api';

class MoviesApi extends Api {

  getMoviesHost() {
    return 'https://api.nomoreparties.co';
  }

  getMovies() {
    return fetch(`${this.getMoviesHost()}/beatfilm-movies`, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'GET'
    })
      .then(this.handleResponse);
  }

  getMyMovies() {
    return fetch(`https://api.mantra.nomoredomains.club/movies`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token,
      },
      method: 'GET',
    })
      .then(this.handleResponse);
  }

  likeMovie(movie) {
    return fetch(`https://api.mantra.nomoredomains.club/movies`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token,
      },
      method: 'POST',
      body: JSON.stringify(movie)
    })
      .then(this.handleResponse);
  }

  dislikeMovie(id) {
    return fetch(`https://api.mantra.nomoredomains.club/movies/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': this._token,
      },
      method: 'DELETE',
    })
      .then(this.handleResponse);
  }

  getHost() {
    return this._host;
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co');

export default moviesApi;
