import { useEffect, useState } from 'react';


import Movies from './Movies';

import MoviesApi from "../../utils/api/MoviesApi";

import { trimChar } from '../../utils/stringFuncs';
import heart from '../../images/heart.svg';
import activeHeart from '../../images/activeHeart.svg';

const AllMovies = ({ allMovies, saveAllMovies, likeMovie, dislikeMovie }) => {
  const [isLoading, setLoading] = useState(true);

  const setBtnImage = (movie) => {
    movie.btnImg = movie.isFavourite
      ? activeHeart
      : heart
    return movie;
  }

  const getLongId = (id) => '0'.repeat(24 - id.toString().length) + id;

  const getMovieDto = (movie) => {

    const dto = { ...movie };
    dto.movieId = getLongId(dto.id);
    dto.trailer = movie.trailerLink;
    dto.thumbnail = MoviesApi.getMoviesHost() + movie.image.url;
    dto.image = MoviesApi.getMoviesHost() + movie.image.url;

    delete dto.id;
    delete dto._id;
    delete dto.visible;
    delete dto.trailerLink;
    delete dto.created_at;
    delete dto.updated_at;
    delete dto.btnImg;
    delete dto.isFavourite;
    return dto;
  }

  const toggleMovieLike = (id) => {
    const movie = allMovies.find((movie) => movie.id === id);
    const { _id } = movie;
    if (movie.isFavourite) {
      MoviesApi
        .dislikeMovie(_id)
        .then(() => dislikeMovie(_id));
    }
    else {
      MoviesApi
        .likeMovie(getMovieDto(movie))
        .then(likeMovie);
    }
  }

  const getMyIds = (movies) => {
    const res = {};
    movies.forEach(movie => res[trimChar(movie.movieId || '-1', '0')] = movie._id);
    return res;
  }

  const initVisibility = (movies) => movies.map(movie => {
    movie.visible = true
    return movie;
  });

  const setMovieBtnImgs = (movies) => movies.map(movie => {
    setBtnImage(movie);
    return movie;
  });

  useEffect(() => {
    if (allMovies?.length) {
      setLoading(false);
      return;
    }

    MoviesApi
      .getMyMovies()
      .then(getMyIds)
      .then((ids) => {
        return MoviesApi
          .getMovies()
          .then((movies) => movies.map((movie) => {
            movie.isFavourite = Object.keys(ids).includes(movie.id.toString())
            if (movie.isFavourite)
              movie._id = ids[movie.id];
            return movie;
          }));
      })
      .then(setMovieBtnImgs)
      .then(initVisibility)
      .then((movies) => saveAllMovies(movies))
      .finally(() => setLoading(false));
  })

  return (
    <Movies movies={allMovies}
      handleBtnClick={toggleMovieLike}
      saveMovies={saveAllMovies}
      isLoading={isLoading} />
  );
};

export default AllMovies;