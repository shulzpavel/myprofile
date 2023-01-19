import React from 'react';
import mail from '../../images/icons/mail.svg';
import github_me from '../../images/icons/github.svg';
import telegram from '../../images/icons/telegram.svg';

function Contacts() {
    return ( <
        div className = 'contacts'
        id = 'contacts' >
        <
        p className = 'contacts__title' > Контакты < /p> <
        div className = "contacts__container" >
        <
        a href = "https://github.com/bmstustudent"
        className = "contacts__link"
        target = '_blank'
        rel = "noreferrer" >
        <
        img className = 'contacts__image'
        src = { github_me }
        alt = 'ul1' / >
        <
        /a> <
        a href = "https://t.me/shulzp4444"
        className = "contacts__link"
        target = '_blank'
        rel = "noreferrer" >
        <
        img className = 'contacts__image'
        src = { telegram }
        alt = 'ul1' / >
        <
        /a> <
        a href = "mailto:bmstustudent@yandex.ru"
        className = "contacts__link"
        target = '_blank'
        title = "email"
        rel = "noopener noreferrer" >
        <
        img className = 'contacts__image'
        src = { mail }
        alt = 'ul1' / >
        <
        /a> < /
        div > <
        /div>
    )
}

export default Contacts;