import { useEffect, useState } from "react";

import Movies from './Movies';

import MoviesApi from "../../utils/api/MoviesApi";

import cross from '../../images/cross.svg';

const SavedMovies = () => {
  const removeMovie = (movies, id) => {
    MoviesApi.dislikeMovie(id);

    const filteredMovies = movies.filter(movie => movie._id !== id);

    return filteredMovies;
  }

  const setBtnImage = (movie) => {
    movie.btnImg = cross;
    return movie;
  };

  const getMovies = () => {
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