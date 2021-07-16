import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';

import AccountButton from '../AccountButton';

import paths from '../../utils/constants/paths';

import logo from '../../images/logo.svg';
import menu from '../../images/menu.svg';

import './index.css';

const Header = ({ handleMenuClick, isLoggedIn }) => {
  const history = useHistory();
  const [content, setContent] = useState(getContent(history.location.pathname));

  history.listen(({ pathname }) => setContent(getContent(pathname)));

  function handleLogoClick(evt) {
    history.push(paths.main);
  }

  function getContent(path) {
    path = path.toLowerCase();

    if (path === paths.movies ||
      path === paths.profile ||
      path === paths.savedMovies ||
      isLoggedIn) {
      return (
        <header className='header header_color_g'>
          <img className='header__logo'
            src={logo}
            alt='logo'
            onClick={handleLogoClick} />
          <div className='header__elem_display_b'>
            <Link className='header__link'
              to={paths.movies}>Фильмы</Link>
            <Link className='header__link'
              to={paths.savedMovies}>Сохраненные фильмы</Link>
            <AccountButton />
          </div>
          <button className='header__button header__button_transparent header__button_menu header__elem_display_s'
            onClick={handleMenuClick}>
            <img src={menu} alt='menu' />
          </button>
        </header>
      );
    }

    if (path === paths.login ||
      path === paths.register) {
      const title = path === paths.register
        ? 'Добро пожаловать'
        : 'Рады видеть!';

      return (
        <header className='header header_style_column header_color_g'>
          <div className='header__container'>
            <img className='header__logo header__logo_top-padding_b'
              src={logo}
              alt='logo'
              onClick={handleLogoClick} />
            <h2 className='header__title'>{title}</h2>
          </div>
        </header>
      );
    }

    if (path === paths.main) {
      return (
        <header className='header'>
          <img className='header__logo'
            src={logo}
            alt='logo'
            onClick={handleLogoClick} />
          <div>
            <button className='header__button header__button_transparent'
              onClick={() => history.push(paths.register)}>
              Регистрация
            </button>
            <button className='header__button header__button_green'
              onClick={() => history.push(paths.login)}>
              Войти
            </button>
          </div>
        </header>
      );
    }

    return '';
  }

  return content;
};

export default Header;
