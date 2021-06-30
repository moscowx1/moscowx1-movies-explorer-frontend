import { Link } from "react-router-dom";

import world from '../../../images/world.png';
import './index.css';

const Promo = () => {
  return (
    <section className="promo">
      <img src={world}
        className="promo__world-image"
        alt="Мир веба" />
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета
          {' '}
          <span className="promo__span">Веб-разработки</span>
          .
        </h1>
        <p className="promo__desc">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
      </div>
      <Link className="promo__link" to="#">Узнать больше</Link>
    </section>
  );
}

export default Promo;