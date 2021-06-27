import './index.css';

const ShortMovieFilter = () => {
	return (
    <div className="filter">
      <input className="filter__checkbox"
        type="checkbox"/>
      <p className='filter__caption'>Короткометражки</p>
    </div>
	);
};

export default ShortMovieFilter;
