import React from "react";
import Card from "../Cards/Cards";
import { DATA } from "../Cards/data";

function Projects() {
  const cards = DATA.map((item) => <Card item={item} key={item.id} />);

  return (
    <section className="project">
      <p className="project__title-mode">Проекты</p>
      <div className="project__list">{cards}</div>
    </section>
  );
}

export default Projects;
