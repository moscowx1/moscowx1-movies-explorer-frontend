import Search from "./Search";
import List from "./List";

import './index.css';

const Movies = () => {
    return (
        <main className="movies">
            <Search/>
            <List/>
            <button className="movies__more-btn">
                Еще
            </button>
        </main>
    );
}

export default Movies;