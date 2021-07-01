import './index.css';

const Movie = ({ data, handleBtnClick }) => {
  return (
    <li className='movie'>
      <p className='movie__title'>{data.name}</p>
      <time className='movie__duration'>{data.duration}</time>
      <button className='movie__button'
        onClick={() => handleBtnClick(data.id)}>
        <img className='movie__button-img'
          src={data.btnImg}
          alt='Превью фильма' />
      </button>
      <img className='movie__preview'
        src={data.img}
        alt='Загрузить больше фильмов' />
    </li>
  );
};

export default Movie;
