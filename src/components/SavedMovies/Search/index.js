import ShortMovieFilter from "./ShortMovieFilter";

import './index.css';

const Search = () => {
    return (
        <section className="search">
            <form className="search__form">
                    <input className="search__input" placeholder="Фильм"/>
                    <button type="submit" 
                            className="search__submit">
                        Поиск
                    </button>
            </form>
          <ShortMovieFilter/>
        </section>
    );
};

export default Search;
