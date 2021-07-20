import Search from '../Search';
import List from '../List';

import './index.css';
import Preloader from '../../Preloader';

const Movies = ({ movies, handleBtnClick, saveMovies, isLoading }) => {
  const search = (filters) => {
    const filteredMovie = movies.map((movie) => {
      movie.visible = filters.every(filter => filter(movie));
      return movie;
    })

    saveMovies(filteredMovie);
  }

  return (
    <main className='movies'>
      <Search handleSubmit={search} />
      {isLoading && <Preloader />}
      <List movies={movies}
        handleBtnClick={handleBtnClick}
        isLoading={isLoading} />
    </main>
  );
}

export default Movies;