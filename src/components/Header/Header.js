import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/GitHub.svg';
import NavTab from '../NavTab/NavTab';

function Header({ loggedIn, windowWidth }) {
  const history = useHistory();

  function handleLogoClick() {
    history.push('/');
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__link' href='https://github.com/shulzpavel' target='_blank' rel='noreferrer'>        
        <img className='header__logo' src={logo} alt='Логотип сайта' onClick={handleLogoClick} />
        </a>
        <NavTab />
      </div>
    </header>
  )
}

export default Header;
