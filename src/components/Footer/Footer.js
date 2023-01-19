import React from 'react';

// eslint-disable-next-line no-empty-pattern
function Footer({ }) {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>Мои проекты на Яндекс.Практикум</p>
        {/* <div className='footer__text-mode'>Автор иконок: <a className='footer__link' href="https://www.freepik.com" title="Freepik">Freepik</a> from <a className='footer__link' href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> */}
        <div className='footer__content'>
          <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
          <ul className='footer__list'>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://praktikum.yandex.ru' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://github.com/bmstustudent' target='_blank' rel="noreferrer">Github</a>
            </li>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://www.facebook.com/shults.msk' target='_blank' rel="noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
