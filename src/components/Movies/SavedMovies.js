import Movies from './Movies';

import MoviesApi from "../../utils/api/MoviesApi";

import cross from '../../images/cross.svg';
import { useEffect, useState } from 'react';

const SavedMovies = ({ savedMovies, saveSavedMovies, dislikeMovie }) => {
  const [isLoading, setLoading] = useState(true);

  const removeMovie = (id) => {
    MoviesApi
      .dislikeMovie(id)
      .then(() => dislikeMovie(id));
  }

  const setBtnImage = (movie) => {
    movie.btnImg = cross;
    return movie;
  };

  const setMovieBtnImgs = (movies) => movies.map(movie => {
    setBtnImage(movie);
    return movie;
  });

  const initVisibility = (movies) => movies.map(movie => {
    movie.visible = true
    return movie;
  });

  useEffect(() => {
    if (savedMovies?.length) {
      setLoading(false);
      return;
    }

    MoviesApi
      .getMyMovies()
      .then(initVisibility)
      .then(setMovieBtnImgs)
      .then(saveSavedMovies)
      .finally(() => setLoading(false));
  }, [])

  return (
    <Movies movies={savedMovies}
      saveMovies={saveSavedMovies}
      handleBtnClick={removeMovie}
      isLoading={isLoading} />
  );
}

export default SavedMovies;