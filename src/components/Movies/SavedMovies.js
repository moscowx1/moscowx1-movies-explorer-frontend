import {useEffect, useState} from "react";

import Search from './Search';
import List from './List';
import LoadMoreButton from './LoadMoreButton';
import MovieWrapper from './MovieWrapper';

import cross from '../../images/cross.svg';

const SavedMovies = () => {
  const [movies, setMovies] = useState([
    {
      id: 4,
      name: "test",
      duration: "120",
      img: "https://inventrade.ru/upload/iblock/eb4/eb4fb522967a294ff36f1837bd60fd76.jpg"
    },
    {
      id: 5,
      name: "test1",
      duration: "122:11",
      img: "https://rp-wow.ru/upload/000/u6/bf/8d/asdzxcv.png"
    },
    {
      id: 6,
      name: "test2",
      duration: "10:12",
      img: "https://asdzxcv.com/resources/img/redis.png"
    },
  ]);

  useEffect(() => {
    setMovies(movies.map(movie => {
      movie.btnImg = cross;
      return movie;
    }))
  }, [])

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <MovieWrapper>
      <Search/>
      <List movies={ movies } handleBtnClick={ removeMovie }/>
      <LoadMoreButton/>
    </MovieWrapper>
  );
}

export default SavedMovies;