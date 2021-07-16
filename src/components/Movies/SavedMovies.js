import { useEffect, useState } from "react";

import Movies from './Movies';

import MoviesApi from "../../utils/api/MoviesApi";

import cross from '../../images/cross.svg';

const SavedMovies = () => {
  const removeMovie = (movies, id) => {
    MoviesApi.dislikeMovie(id);

    const filteredMovies = movies.filter(movie => movie.id !== id || movie._id !== id);

    localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));

    return filteredMovies;
  }

  const setBtnImage = (movie) => {
    movie.btnImg = cross;
    return movie;
  };

  const getMovies = () => {
    const movies = JSON.parse(localStorage.getItem('savedMovies'));
    if (movies) {
      return Promise.resolve(movies);
    }

    return MoviesApi
      .getMyMovies()
  };

  return (
    <Movies getMovies={getMovies}
      handleBtnClick={removeMovie}
      movieBtnImageSetter={setBtnImage} />
  );
}

export default SavedMovies;