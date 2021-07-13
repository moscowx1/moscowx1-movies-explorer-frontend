import { useState } from 'react';
import './index.css';

const ShortMovieFilter = ({ toggleShortMovie }) => {
  const [checked, setChecked] = useState(true);
  const handleClick = (evt) => {
    setChecked(!checked);
    toggleShortMovie();
  }

  return (
    <div className="filter">
      <input className="filter__checkbox"
        type="checkbox"
        onChange={handleClick}
        checked={checked} />
      <p className='filter__caption'>Короткометражки</p>
    </div>
  );
};

export default ShortMovieFilter;
