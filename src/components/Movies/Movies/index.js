import { useEffect, useState } from 'react';

import Search from '../Search';
import List from '../List';
import LoadMoreButton from '../LoadMoreButton';
import Preloader from '../../Preloader';

import movieSizeSettings from '../../../utils/constants/moviesSettings';

import './index.css';

const Movies = ({ getMovies, handleBtnClick, movieBtnImageSetter }) => {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const sizeSettings = getSizeSettings()
  const [visibleCount, setVisibleCount] = useState(sizeSettings.defaultCount);

  function getSizeSettings() {
    for (let settingsWidth in movieSizeSettings) {
      if (window.innerWidth > settingsWidth) {
        return movieSizeSettings[settingsWidth];
      }
    }
  }

  const search = (filters) => {
    const m = movies.map((movie) => {
      movie.visible = filters.every(filter => filter(movie));
      return movie;
    })
    setMovies(m);
  }

  const addMore = () => setVisibleCount(visibleCount + sizeSettings.addCount);

  const setMovieBtnImgs = (movies) => movies.map(movie => movieBtnImageSetter(movie));
  const initVisibility = (movies) => movies.map(movie => {
    movie.visible = true
    return movie;
  });

  useEffect(() => {
    setIsLoading(true);

    getMovies()
      .then(setMovieBtnImgs)
      .then(initVisibility)
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const btnClickWrapper = (id) => {
    setMovies(handleBtnClick(movies, id));
  }

  return (
    <main className='movies'>
      {isLoading && <Preloader />}
      <Search handleSubmit={search}/>
      <List movies={movies}
        handleBtnClick={btnClickWrapper}
        movieVisible={visibleCount} />
      {visibleCount < movies.length &&  <LoadMoreButton handleClick={addMore}/>}
    </main>
  );
}

export default Movies;