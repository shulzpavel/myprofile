import React from "react";
import me from "../../images/profile.jpg";

function Profile() {
  return (
    <div className="profile" id="about-me">
      <div className="profile__container">
        <a className="profiel__link">
          <img className="profile__image" src={me} alt="me" />
        </a>
        <p className="profile__title"> Шульц Павел </p>
      </div>
      <h2 className="profile__subtitle"> Juniour Frontend Developer </h2>
      <p className="profile__item">
        Привет! Меня зовут Павел, и мне нравится создавать вещи, которые живут в
        Интернете. Мой интерес к веб - разработке начался еще в 2020 году, когда
        я решил полностью сменить профессию.
      </p>
      <p className="profile__item">
        В настоящее время мое основное внимание уделяется созданию доступных
        продуктов и цифровых услуг для широкого круга клиентов.Мне нравится
        решать проблемы дизайна, создавать умный пользовательский интерфейс при
        разработке больших веб - приложений.
      </p>
      <p className="profile__item">
        Когда я не работаю или не вожусь с кодом, я люблю изучать новые
        технологии в мире IT или ходить на прогулку со своим псом Шелби.
      </p>
      <div className="profile__container">
        <p className="profile__title"> Skills </p>
      </div>
      <div className="profile__stack">
        <p className="profile__item-green">JavaScript</p>
        <p className="profile__item-green">HTML</p>
        <p className="profile__item-green">CSS</p>
        <p className="profile__item-green">React</p>
        <p className="profile__item-green">Node.js</p>
        <p className="profile__item-green">Git</p>
        <p className="profile__item-green">FIgma</p>
        <p className="profile__item-green">dev tools</p>
      </div>
    </div>
  );
}

export default Profile;
