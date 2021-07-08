import { useEffect, useState } from "react";

import Movies from './Movies';

import cross from '../../images/cross.svg';

const SavedMovies = () => {
  const removeMovie = (movies, id) =>
    movies.filter(movie => movie.id !== id);

  const setBtnImage = (movies) => movies.map(movie =>
    movie.btnImg = cross);

  return (
    <Movies onMovieBtnClick={removeMovie}
      movieBtnImageSetter={setBtnImage} />
  );
}

export default SavedMovies;