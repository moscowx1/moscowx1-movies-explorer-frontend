import ShortMovieFilter from "./ShortMovieFilter";

import './index.css';
import { useState } from "react";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const handleInputChange = (evt) => {
    setSearchTxt(evt.target.value);
  }

  const submitWrap = (evt) => {
    evt.preventDefault();
    if (!searchTxt) {
      alert('Нужно ввести ключевое слово');
      return;
    }
  }

  return (
    <section className="search">
      <form className="search__form"
        name="search"
        onSubmit={submitWrap}>
        <input className="search__input"
          placeholder="Фильм"
          onChange={setSearchTxt} />
        <button type="submit"
          className="search__submit">
          Поиск
        </button>
      </form>
      <ShortMovieFilter />
    </section>
  );
};

export default Search;
