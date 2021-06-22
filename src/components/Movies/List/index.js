import './index.css';

import Movie from "./Movie";

const List = ({mode}) => {
  const movies = [{
    name: "test",
    duration: "120",
    img: "https://inventrade.ru/upload/iblock/eb4/eb4fb522967a294ff36f1837bd60fd76.jpg"
  }];

  return (
    <ul className="list">
      { movies.map((movie) => (
        <Movie { ...movie }
               mode={ mode }
               key={ movie.name }/>
      )) }
    </ul>
  );
};

export default List;
