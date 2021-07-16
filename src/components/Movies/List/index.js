import './index.css';

import Movie from "./Movie";

const List = ({ movies, handleBtnClick, movieVisible }) => {
  const viewMovies = movies
    .filter(movie => movie.visible)
    .slice(0, movieVisible);

  return (
    <ul className="movies__list">
      {viewMovies
        .map((movie) => (
          <Movie key={movie.id}
            data={movie}
            handleBtnClick={handleBtnClick} />
        ))}
        {movies && viewMovies.length === 0 &&
            <p className='movies__not-found-txt'>Ничего не найдено?</p>
        }
    </ul>
  );
};

export default List;
