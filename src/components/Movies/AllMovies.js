import {useEffect, useState} from "react";

import Search from './Search';
import List from './List';
import LoadMoreButton from './LoadMoreButton';
import MovieWrapper from './MovieWrapper';

import heart from '../../images/heart.svg';
import activeHeart from '../../images/activeHeart.svg';

const AllMovies = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "test3",
      duration: "120",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      isFavourite: false,
    },
    {
      id: 2,
      name: "test4",
      duration: "122:11",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Katana_%28common_shema%29.png",
      isFavourite: true,
    },
    {
      id: 3,
      name: "test5",
      duration: "10:12",
      img: "https://st3.depositphotos.com/8615356/13148/v/600/depositphotos_131487254-stock-illustration-zen-circle-paint-brush-stroke.jpg",
      isFavourite: false,
    },
  ]);

  const setBtnImage = (movie) => {
    movie.btnImg = movie.isFavourite
      ? activeHeart
      : heart
    return movie;
  }

  useEffect(() => {
    setMovies(movies.map(movie => setBtnImage(movie)));
  }, []);

  const toggleActiveBtn = (id) => {
    setMovies(movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }

      movie.isFavourite = !movie.isFavourite;
      setBtnImage(movie)
      return movie;
    }));
  };

  return (
    <MovieWrapper>
      <Search/>
      <List movies={ movies } handleBtnClick={ toggleActiveBtn }/>
      <LoadMoreButton/>
    </MovieWrapper>
  );
};

export default AllMovies;