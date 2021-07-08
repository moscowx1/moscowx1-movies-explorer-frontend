import { useEffect, useState } from "react";

import Movies from './Movies';

import heart from '../../images/heart.svg';
import activeHeart from '../../images/activeHeart.svg';

const AllMovies = () => {
  const setBtnImage = (movie) => {
    movie.btnImg = movie.isFavourite
      ? activeHeart
      : heart
    return movie;
  }

  const toggleActiveBtn = (movies, id) => movies.map(movie => {
    if (movie.id !== id) {
      return movie;
    }

    movie.isFavourite = !movie.isFavourite;
    setBtnImage(movie)
    return movie;
  })

  return (
    <Movies handleBtnClick={toggleActiveBtn}
      movieBtnImageSetter={setBtnImage} />
  );
};

export default AllMovies;