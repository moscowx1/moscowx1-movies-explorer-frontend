import './index.css';

// import favorite from '../../../../images/favorite.svg';
import cross from '../../../../images/cross.svg';
import heart from '../../../../images/heart.svg';
import activeHeart from '../../../../images/activeHeart.svg';

const Movie = ({name, duration, img, mode, isActive}) => {
  const btnImage = mode === 0
    ? isActive ? activeHeart : heart
    : cross;

  return (
    <li className='movie'>
      <p className='movie__title'>name</p>
      <time className='movie__duration'>duration</time>
      <button className='movie__button'>
        <img className='movie__button-img'
             src={ btnImage }
             alt='btn-image'/>
      </button>
      <img className='movie__preview'
           src={ img }
           alt='more image'/>
    </li>
  );
};

export default Movie;
