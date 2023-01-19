import React from "react";
import github from "../../images/github-logo.svg";

function Card({ item }) {
    const { url, imgUrl, title, description, githubUrl } = item;

    return ( <
        div className = "card" >
        <
        div className = "card__image-block" >
        <
        a href = { url }
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img

        src = { imgUrl }
        className = "card__image"
        alt = "изображение страницы" >
        < /img> <
        /a> <
        /div> <
        div className = "card__content" >
        <
        h1 className = "card__title" > { title } < /h1> <
        p className = "card__description" > { description } < /p> <
        div >
        <
        a href = { githubUrl }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "card__github" >
        <
        img src = { github }
        alt = "логотип github"
        className = "card__github-logo" /
        >
        <
        span className = "card__github-link" > перейти на GitHub проекта < /span> <
        /a> <
        /div> <
        /div> <
        /div>
    );
};

export default Card;