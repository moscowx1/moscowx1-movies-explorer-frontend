import './index.css';

const Techs = () => (
  <section className="techs">
    <h2 className="techs__title">О проекте</h2>
    <div className="techs_content">
      <h3 className="techs__text">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили
        в дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__elem">HTML</li>
        <li className="techs__elem">CSS</li>
        <li className="techs__elem">JS</li>
        <li className="techs__elem">React</li>
        <li className="techs__elem">Git</li>
        <li className="techs__elem">Express.js</li>
        <li className="techs__elem">mongoDB</li>
      </ul>
    </div>
  </section>
);

export default Techs;
