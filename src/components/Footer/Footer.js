import React from "react";

// eslint-disable-next-line no-empty-pattern
function Footer({}) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Get in touch</p>
        <div className="footer__content">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://t.me/shults_shults_shults"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://github.com/shulzpavel"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://praktikum.yandex.ru"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
