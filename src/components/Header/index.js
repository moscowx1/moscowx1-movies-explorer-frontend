import {useHistory, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

import AccountButton from '../AccountButton';

import paths from '../../utils/constants/paths';

import logo from '../../images/logo.svg';
import menu from '../../images/menu.svg';

import './index.css';

const Header = ({handleMenuClick}) => {
  const history = useHistory();
  const [content, setContent] = useState(getContent(history.location.pathname));

  useEffect(() => {
    history.listen(({pathname}) => setContent(getContent(pathname)));
  }, [history]);

  function getContent(path) {
    path = path.toLowerCase();

    switch (path) {
      case paths.allMovies:
      case paths.profile:
      case paths.savedMovies:
        return (
          <header className='header header_color_g'>
            <img className='header__logo' src={ logo } alt='logo'/>
            <div className='header__elem_display_b'>
              <Link className='header__link'
                    to={ paths.allMovies }>Фильмы</Link>
              <Link className='header__link'
                    to={ paths.savedMovies }>Сохраненные фильмы</Link>
              <AccountButton/>
            </div>
            <button className='header__button header__button_transparent header__button_menu header__elem_display_s'
                    onClick={ handleMenuClick }>
              <img src={ menu } alt='menu'/>
            </button>
          </header>
        );

      case paths.signUp:
      case paths.signIn:
        const title =
          path === paths.signIn ? 'Рады видеть!' : 'Добро пожаловать';
        return (
          <header className='header header_style_column header_color_g'>
            <div className='header__container'>
              <img
                className='header__logo header__logo_top-padding_b'
                src={ logo }
                alt='logo'
              />
              <h2 className='header__title'>{ title }</h2>
            </div>
          </header>
        );

      case paths.main:
        return (
          <header className='header'>
            <img className='header__logo'
                 src={ logo }
                 alt='logo'/>
            <div>
              <button className='header__button header__button_transparent'>
                Регистрация
              </button>
              <button className='header__button header__button_green'>
                Войти
              </button>
            </div>
          </header>
        );
      default:
        return "";
    }
  }

  return content;
};

export default Header;
