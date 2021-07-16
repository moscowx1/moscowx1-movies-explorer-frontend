import { useEffect, useState } from "react";

import Movies from './Movies';

import MoviesApi from "../../utils/api/MoviesApi";

import heart from '../../images/heart.svg';
import activeHeart from '../../images/activeHeart.svg';

const AllMovies = () => {
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
    delete dto.id;
    delete dto.visible;
    dto.trailer = movie.trailerLink;
    delete dto.trailerLink;
    delete dto.created_at;
    delete dto.updated_at;
    delete dto.btnImg;
    delete dto.isFavourite;
    dto.thumbnail = MoviesApi.getMoviesHost() + movie.image.url;
    dto.image = MoviesApi.getMoviesHost() + movie.image.url;
    return dto;
  }

  const toggleMovieLike = (movies, id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }

      if (movie.isFavourite)
        MoviesApi.dislikeMovie(movie.myId);
      else
        MoviesApi.likeMovie(getMovieDto(movie));

      movie.isFavourite = !movie.isFavourite;
      setBtnImage(movie)
      return movie;
    })

    localStorage.setItem('movies', JSON.stringify(updatedMovies));

    return updatedMovies;
  }

  function trimChar(string, charToRemove) {
    while (string.charAt(0) === charToRemove) {
      string = string.substring(1);
    }

    while (string.charAt(string.length - 1) === charToRemove) {
      string = string.substring(0, string.length - 1);
    }

    return string;
  }

  const getMyIds = (movies) => {
    const res = {};
    movies.forEach(movie => res[trimChar(movie.movieId || '-1', '0')] = movie._id);
    return res;
  }

  const getInitMovies = () => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      return Promise.resolve(movies);
    }

    return MoviesApi
      .getMyMovies();
  }

  const getMovies = () => {
    return getInitMovies()
      .then(getMyIds)
      .then((ids) => {
        return MoviesApi
          .getMovies()
          .then((movies) => movies.map((movie) => {
            movie.isFavourite = Object.keys(ids).includes(movie.id.toString())
            if (movie.isFavourite)
              movie.myId = ids[movie.id];
            return movie;
          }));
      })
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        return movies;
      })
  };

  return (
    <Movies getMovies={getMovies}
      handleBtnClick={toggleMovieLike}
      movieBtnImageSetter={setBtnImage} />
  );
};

export default AllMovies;