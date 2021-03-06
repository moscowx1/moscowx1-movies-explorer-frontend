import {Link} from "react-router-dom";

import './index.css';

const NotFound = () => {
  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='not-found__link'>назад</Link>
    </section>
  );
};

export default NotFound;