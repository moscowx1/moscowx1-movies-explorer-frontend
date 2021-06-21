import './index.css';

import favorite from '../../../../images/favorite.svg';

const Movie = ({name, duration, img}) => {

    return (
        <li className="movie">
            <p className="movie__title">name</p>
            <time className="movie__duration">duration</time>
            <img className="movie__like-btn" src={favorite}/>  
            <img className="movie__preview" src={img}/>
        </li>
    );
};

export default Movie;
