import './index.css';

import Movie from "./Movie";

const List = ({ movies, handleBtnClick, movieVisible }) => {
  return (
    <ul className="movies__list">
      {movies
      .filter(movie => movie.visible)
      .slice(0, movieVisible)
      .map((movie) => (
        <Movie key={movie.id}
          data={movie}
          handleBtnClick={handleBtnClick} />
      ))}
    </ul>
  );
};

export default List;
