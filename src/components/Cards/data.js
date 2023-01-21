import how from "../../images/howto.jpg";
import russian from "../../images/russian.jpg";
import mesto from "../../images/mesto.jpg";
import movies from "../../images/movies.jpg";

const DATA = [
  {
    title: "01. Научиться учиться",
    description:
      "Типовой одностраничный сайт. Страница не адаптивная, использованы технологии: BEM, Flexbox, Git, GH-pages.",
    githubUrl: "https://github.com/shulzpavel/how-to-learn",
    url: "https://shulzpavel.github.io/how-to-learn/",
    imgUrl: how,
    id: 1,
  },
  {
    title: "02. Russian Travel",
    description:
      "Проект о путешествиях по стране. Страница полностью адаптивна ко всем разрешениям, реализовано плавное сжатие сайта, файловая структура по БЭМ. Bспользованы технологии: BEM, Flexbox, Git, GH-pages.",
    githubUrl: "https://github.com/shulzpavel/russian-travel",
    url: "https://shulzpavel.github.io/russian-travel/",
    imgUrl: russian,
    id: 2,
  },
  {
    title: "03. Mesto",
    description:
      "Это сервис, где пользователь может делиться фотографими с другими пользователями, а также просматривать фотографии других. Bспользованы технологии: BEM, Grid, React, Webpack, Git, GH-pages.",
    githubUrl: "https://github.com/bmstustudent/mesto-react",
    url: "https://bmstustudent.github.io/mesto-react/",
    imgUrl: mesto,
    id: 3,
  },
  {
    title: "04. Movies Explorer",
    description:
      "Дипломная работа по созданию интерактивной страницы, на которой пользователи могут искать фильмы по ключевым словам и добавлять их в избранное в личном кабинете. Функционал: aвторизация и регистрация пользователей, редактирование профиля, поиск фильмов по ключевым словам, поиск фильмов по длительности ,сохрание фильмов в избранное в личном кабинете.",
    githubUrl: "https://github.com/bmstustudent/movies-explorer-frontend",
    url: "https://github.com/bmstustudent/movies-explorer-frontend",
    imgUrl: movies,
    id: 4,
  },
];

export { DATA };
