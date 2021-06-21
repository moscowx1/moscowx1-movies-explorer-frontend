import './index.css';

const Portfolio = () => (
    <section className="portfolio">
        <p className="portfolio__title">Портфолио</p>
        <nav>
            <ul className="portfolio__nav">
                <li className="portfolio__container">
                    <a  href="https://github.com/"
                        className="portfolio__link"
                        target="_blank"
                        rel="noreferrer">
                        Статичный сайт
                    </a>
                </li>
                <li className="portfolio__container">
                    <a  href="https://github.com/"
                        className="portfolio__link"
                        target="_blank"
                        rel="noreferrer">
                        Адаптивный сайт
                    </a>
                </li>
                <li className="portfolio__container">
                    <a  href="https://github.com/"
                        className="portfolio__link"
                        target="_blank"
                        rel="noreferrer">
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </nav>
    </section>
);

export default Portfolio;
