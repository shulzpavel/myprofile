// import me from '../../images/portfolio.jpg';
// import me from '../../images/photo-me.jpg';
import React from "react";
import me from "../../images/paul.jpg";

function Profile() {
  return (
    <div className="profile" id="about-me">
      <div className="profile__container">
        <a className="profiel__link">
          <img className="profile__image" src={me} alt="me" />
        </a>
        <p className="profile__title"> Шульц Павел </p>
      </div>
      <p className="profile__subtitle"> Juniour Frontend Developer </p>
      <h1 className="profile__item">
        Привет! Меня зовут Павел, и мне нравится создавать вещи, которые живут в
        Интернете. Мой интерес к веб - разработке начался еще в 2020 году, когда
        я решил полностью сменить профессию.
      </h1>
      <h1 className="profile__item">
        В настоящее время мое основное внимание уделяется созданию доступных
        продуктов и цифровых услуг для широкого круга клиентов.Мне нравится
        решать проблемы дизайна, создавать умный пользовательский интерфейс при
        разработке больших веб - приложений.
      </h1>
      <h1 className="profile__item">
        Когда я не работаю или не вожусь с кодом, я люблю изучать новые
        технологии в мире IT или ходить на прогулку со своим псом Шелби.
      </h1>
      <div className="profile__container">
        <p className="profile__title"> Skills </p>
      </div>
      <div className="profile__stack">
        <h1 className="profile__item-green">JavaScript</h1>
        <h1 className="profile__item-green">HTML</h1>
        <h1 className="profile__item-green">CSS</h1>
        <h1 className="profile__item-green">React</h1>
        <h1 className="profile__item-green">Node.js</h1>
        <h1 className="profile__item-green">Git</h1>
        <h1 className="profile__item-green">FIgma</h1>
        <h1 className="profile__item-green">dev tools</h1>
      </div>
      {/* <div className="profile__skills">
        <p className="profile__title"> Софт скилы </p>
      </div> */}
    </div>
  );
}

export default Profile;
