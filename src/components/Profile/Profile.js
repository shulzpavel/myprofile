// import me from '../../images/portfolio.jpg';
// import me from '../../images/photo-me.jpg';
import React from 'react';
import me from '../../images/me_one.jpg';

function Profile() {
    return (
        <div className='profile' id='about-me'>
            <a className='profiel__link' href='https://github.com/bmstustudent' target='_blank' rel='noreferrer'>
                <img className='profile__image' src={me} alt='me' />
            </a>
            <p className='profile__title'>Немного информации обо мне</p>
            <h1 className='profile__subtitle'>
                Мне 26 лет. Я живу в городе Москва!
                7 лет учился в МГТУ им.Н.Э.Баумана на факультете "Машиносроительные технологии".
                Не женат, детей нет. Люблю слушать музыку, увлекаюсь автомобилями. С 2015 года работаю в компании «Юнитком».
                Недавно начал кодить. На данный момент прошёл курс в Яндекс.Практикум на факультете "Веб-разработка", успешно сдал диплом.
                В данный момент нахожусь в активном поиске новой и интересной работы в крутой команде.
            </h1>
        </div>

    )
}

export default Profile;