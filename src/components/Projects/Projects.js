import React from "react";
import Card from "../Cards/Cards";
import { DATA } from "../Cards/data";

function Projects() {
    const cards = DATA.map((item) => <Card item={item} key={item.id} />);

    return (
        <section className="project">
            <p className='project__title-mode'>Мои проекты</p>
            <div className="project__list">{cards}</div>
            <div alt="Синий треугольник" className="project__triangle rotation"></div>
            <div className="project__square-pic rotation"></div>
        </section>
    );
};

export default Projects;