import { useState } from 'react';

import LoadMoreButton from '../LoadMoreButton';

import movieSizeSettings from '../../../utils/constants/moviesSettings';
import './index.css';

import Movie from "./Movie";

const List = ({ movies, handleBtnClick, isLoading }) => {
  const sizeSettings = getSizeSettings();
  const [visibleCount, setVisibleCount] = useState(sizeSettings.defaultCount);

  const viewMovies = movies
    ?.filter(movie => movie.visible)
    ?.slice(0, visibleCount);

  const isEmpty = movies && !viewMovies?.length;
  const isAllViewed = isEmpty || viewMovies?.length === movies?.length;

  function getSizeSettings() {
    for (const settingsWidth in movieSizeSettings) {
      if (window.innerWidth > settingsWidth) {
        return movieSizeSettings[settingsWidth];
      }
    }
  }

  const addMore = () => setVisibleCount(visibleCount + sizeSettings.addCount);

  return (
    <>
      <ul className="movies__list">
        {viewMovies
          ?.map((movie) => (
            <Movie key={movie.id}
              data={movie}
              handleBtnClick={handleBtnClick} />
          ))}
      </ul>
      {!isLoading &&  isEmpty && <p className='movies__not-found-txt'>Ничего не найдено?</p>}
      {!isLoading && !isAllViewed && <LoadMoreButton handleClick={addMore} />}
    </>
  );
};

export default List;
