import {NavLink} from "react-router-dom";

import AccountButton from "../AccountButton";

import paths from '../../utils/constants/paths';

import cross from '../../images/cross.svg';
import './index.css';

const Menu = ({isOpen, handleCloseClick}) => {
  return (
    <div className={ `menu ${ isOpen ? 'menu_opened' : '' }` }>
      <button className='menu__close'>
        <img src={ cross }
             alt='значок закрытия'
             className='menu__close-icon'
             onClick={ handleCloseClick }/>
      </button>
      <nav className='menu__nav'>
        <ul className='menu__links-wrapper'>
          <li className='menu__link-wrapper'>
            <NavLink to={ paths.main }
                     className='menu__link'>
              Главная
            </NavLink>
          </li>
          <li className='menu__link-wrapper'>
            <NavLink to={ paths.allMovies }
                     className='menu__link'>
              Фильмы
            </NavLink>
          </li>
          <li className='menu__link-wrapper'>
            <NavLink to={ paths.savedMovies }
                     className='menu__link'>
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
      </nav>
      <AccountButton/>
    </div>
  );
};

export default Menu;