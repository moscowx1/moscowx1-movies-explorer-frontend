import './index.css';

import MainApi from '../../../../utils/api/MoviesApi';

const Movie = ({ data, handleBtnClick }) => {

  const getPreviewImg = (movie) => {
    if (movie.thumbnail)
      return movie.thumbnail;

    return MainApi.getHost() + movie.image.formats.thumbnail.url;
  }

  const getFormattedDuration = ({ duration }) => {
    let res = '';

    const hours = Math.floor(duration / 60);
    if (hours) {
      res += hours + 'ч ';
    }

    const minutes = duration % 60;
    if (minutes) {
      res += minutes + 'м';
    }

    return res;
  }

  return (
    <li className='movie'>
      <p className='movie__title'>{data.nameRU}</p>
      <time className='movie__duration'>{getFormattedDuration(data)}</time>
      <button className='movie__button'
        onClick={() => handleBtnClick(data.id || data._id)}>
        <img className='movie__button-img'
          src={data.btnImg}
          alt='Кнопка' />
      </button>
      <img className='movie__preview'
        src={getPreviewImg(data)}
        alt={`Превью ${data.name}`} />
    </li>
  );
};

export default Movie;
