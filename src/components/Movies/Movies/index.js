import { useEffect, useState } from 'react';

import Search from '../Search';
import List from '../List';
import LoadMoreButton from '../LoadMoreButton';
import Preloader from '../../Preloader';

import MoviesApi from '../../../utils/api/MoviesApi';
import moviesSettings from '../../../utils/constants/moviesSettings';

import './index.css';

const Movies = ({ onMovieBtnClick, movieBtnImageSetter }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesSettings, setMoviesSettings] = useState()

  const setMovieBtnImgs = (movies) => movies.map(movie => movieBtnImageSetter(movie));

  const updateMoviesSettings = () => {
    let width = window.innerWidth;

    for(let w in moviesSettings) {
        if (w > width) {
          setMoviesSettings(...w);
          console.log(moviesSettings);
          break;
        }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateMoviesSettings());

    return () => {
      window.removeEventListener('resize', updateMoviesSettings);
    }
  });

  useEffect(() => {
    setIsLoading(true);

    MoviesApi
      .getMovies()
      .then(setMovieBtnImgs)
      .then((movies) => setMovies(movies))
      .catch((err) => {
        console.log(err);
        alert('Ошибка при загрузке фильмов');
      })
      .finally(() => setIsLoading(false));
  }, [])



  return (
    <main className='movies'>
      {isLoading && <Preloader />}
      <Search />
      <List movies={movies} handleBtnClick={onMovieBtnClick} />
      <LoadMoreButton />
    </main>
  );
}

export default Movies;