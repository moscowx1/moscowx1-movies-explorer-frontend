import { useEffect, useState } from "react";

import Movies from './Movies';

import MoviesApi from "../../utils/api/MoviesApi";

import cross from '../../images/cross.svg';

const SavedMovies = () => {
  const removeMovie = (movies, id) => {
    MoviesApi.dislikeMovie(id);

    return movies.filter(movie => movie.id !== id || movie._id !== id);
  }

  const setBtnImage = (movie) => {
    movie.btnImg = cross;
    return movie;
  };

  const getMovies = () => MoviesApi.getMyMovies();

  return (
    <Movies getMovies={getMovies}
      handleBtnClick={removeMovie}
      movieBtnImageSetter={setBtnImage} />
  );
}

export default SavedMovies;