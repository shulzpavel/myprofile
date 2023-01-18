// import me from '../../images/portfolio.jpg';
// import me from '../../images/photo-me.jpg';
import React from 'react';
import me from '../../images/paul.jpg';

function Profile() {
    return (
        <div className='profile' id='about-me'>
            <a className='profiel__link' href='https://github.com/shulzpavel' target='_blank' rel='noreferrer'>
                <img className='profile__image' src={me} alt='me' />
            </a>
            <p className='profile__title'>Немного информации обо мне</p>
            <h1 className='profile__subtitle-1'>
                Мне 28 лет. Я живу в городе Москва!
                Junior frontend-developer с опытом разработки pet-проектов.
            </h1>
            <h1 className='profile__subtitle-2'>
Нравится создавать вещи, которые живут в Интернете. Интерес к веб-разработке начался еще в 2020 году, когда я решил полностью сменить профессию.
            </h1>
            <h1 className='profile__subtitle-3'>
Основное внимание уделяю созданию доступных продуктов и цифровых услуг для широкого круга клиентов.
Нравится решать проблемы дизайна, создавать умный пользовательский интерфейс при разработке больших веб-приложений.
            </h1>
        </div>

    )
}

export default Profile;