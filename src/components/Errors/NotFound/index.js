import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import './index.css';

const NotFound = () => {
  const history = useHistory();

  const handleCLick = (evt) => {
    history.goBack();
  }

  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='not-found__link'
        onClick={handleCLick}>
        назад
      </Link>
    </section>
  );
};

export default NotFound;