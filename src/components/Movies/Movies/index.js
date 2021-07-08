import { useEffect, useState } from 'react';

import Search from '../Search';
import List from '../List';
import LoadMoreButton from '../LoadMoreButton';

import MoviesApi from '../../../utils/api/MoviesApi';

import './index.css';

const Movies = ({ onMovieBtnClick, movieBtnImageSetter  }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //TODO: get movies
    //TODO: set loader
    //TODO: setImage
  })

  return (
    <main className='movies'>
      <Search />
      <List movies={movies} handleBtnClick={onMovieBtnClick} />
      <LoadMoreButton />
    </main>
  );
}

export default Movies;