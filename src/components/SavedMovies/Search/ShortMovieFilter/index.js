import './index.css';

import checkbox from '../../../../images/checkbox.png'

const ShortMovieFilter = () => {
	return (
			<label htmlFor="short-movie" 
						 className="filter">
				<img src={checkbox} className="filter__image"/>
				<span className="filter__text">
					Короткометражки
				</span>
			</label>
	);
};

export default ShortMovieFilter;
