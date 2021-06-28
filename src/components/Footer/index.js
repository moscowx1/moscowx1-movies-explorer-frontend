import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import { browserHistory } from 'react-router-dom';

import Links from './Links';

import paths from '../../utils/constants/paths';

import './index.css';

const Footer = () => {
  const history = useHistory();
  const [content, setContent] = useState(getContent(history.location.pathname));

  history.listen(({ pathname }) => setContent(getContent(pathname)));

  function getContent(path) {
    path = path.toLowerCase();

    switch (path) {
      case paths.register:
      case paths.login:
      case paths.profile:
      case paths.notFound:
        return '';

      default:
        return (
          <footer className="footer">
            <p className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__container">
              <p className="footer__copyright">
                &copy;
                {' '}
                {new Date().getFullYear()}
              </p>
              <Links />
            </div>
          </footer>
        )
    }
  }

  return content;
};

export default Footer;
