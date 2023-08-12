import React from 'react'

import './Header.css'
import logo from './logo.png'

//ToDo добавить роутер

export const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className="header__logo" alt="logo" />
      <div className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">Главная</li>
          <li className="header__nav-item">Фильмотека</li>
          <li className="header__nav-item">Акции</li>
          <li className="header__nav-item">О нас</li>
        </ul>
      </div>
      <div className="header__auth">
        <button className="header__auth-btn">Войти</button>
      </div>
    </div>
  )
}
