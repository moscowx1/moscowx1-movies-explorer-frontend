import './index.css';

import Movie from "./Movie";

const List = ({movies, handleBtnClick}) => {
  return (
    <ul className="movies__list">
      { movies.map((movie) => (
        <Movie key={ movie.id }
               data={ movie }
               handleBtnClick={ handleBtnClick }/>
      )) }
    </ul>
  );
};

export default List;
