import Social from './Social';

import './index.css';
import student from '../../../images/student.png';


const About = () => (
    <section className="about">
        <h2 className="about__title">Студент</h2>
        <div className="about__container">
            <div className="about__info">
                <h3 className="about__name">Виталий</h3>
                <p className="about__preview">Фронтенд-разработчик, 30 лет</p>
                <p className="about__desc">
                    Я родился и живу в Саратове, закончил факультет экономики СГУ.
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                    Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке, начал заниматься
                    фриланс-заказами и ушёл с постоянной работы.
                </p>
                <Social />
            </div>
            <img
                src={student}
                alt="Студент"
                className="about__photo"
            />
        </div>
    </section>
);

export default About;
