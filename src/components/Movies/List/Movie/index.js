import './index.css';

const Movie = ({ data, handleBtnClick }) => {
  return (
    <li className='movie'>
      <p className='movie__title'>{data.name}</p>
      <time className='movie__duration'>{data.duration}</time>
      <button className='movie__button'
        onClick={() => handleBtnClick(data.id)}>
        <image className='movie__button-img'
          src={data.btnImg}
          alt='btn-image' />
      </button>
      <image className='movie__preview'
        src={data.img}
        alt='more image' />
    </li>
  );
};

export default Movie;
