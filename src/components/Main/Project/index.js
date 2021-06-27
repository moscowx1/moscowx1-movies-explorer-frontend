import './index.css';

const Project = () => (
    <section className="project">
        <h2 className="project__title">О проекте</h2>
        <div className="project__desc-container">
            <div className="project__desc">
                <h3 className="project__desc-header">
                    Дипломный проект включал 5 этапов
                </h3>
                <p className="project__desc-content">
                    Составление плана, работу над бэкендом, вёрстку, добавление
                    функциональности и финальные доработки.
                </p>
            </div>
            <div className="project__desc">
                <h3 className="project__desc-header">
                    На выполнение диплома ушло 5 недель
                </h3>
                <p className="project__desc-content">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                    соблюдать, чтобы успешно защититься.
                </p>
            </div>
        </div>
        <ul className="project__timeline-container">
            <li className="project__timeline">
                <p className="project__timeline-header project_timeline_green">
                    1 неделя
                </p>
                <p className="project__timeline-header project_timeline_grey">
                    4 недели
                </p>
            </li>
            <li className="project__timeline-desc">
                <p className="project__timeline-desc-content">
                    Back-end
                </p>
                <p className="project__timeline-desc-content">
                    Front-end
                </p>
            </li>
        </ul>
    </section>
);

export default Project;
