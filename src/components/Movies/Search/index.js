import ShortMovieFilter from "./ShortMovieFilter";

import './index.css';
import { useState } from "react";

const Search = ({ handleSubmit }) => {
  const [showShort, setShowShort] = useState(true);
  const [searchTxt, setSearchTxt] = useState('');

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setSearchTxt(value);
  }

  const handleTogglerChange = () => setShowShort(!showShort);

  const submitWrap = (evt) => {
    evt.preventDefault();

    var reg = new RegExp(searchTxt, 'i');
    return handleSubmit([
      (movie) => !searchTxt || reg.test(movie.nameRU),
      (movie) => showShort || movie.duration > 40
    ]);
  }

  return (
    <section className="search">
      <form className="search__form"
        name="search"
        onSubmit={submitWrap}>
        <input className="search__input"
          placeholder="Фильм"
          onChange={handleInputChange} />
        <button type="submit"
          className="search__submit">
          Поиск
        </button>
      </form>
      <ShortMovieFilter toggleShortMovie={handleTogglerChange} />
    </section>
  );
};

export default Search;
