import React from 'react';
import logo from '../assets/disney_logo_dark@2x-45d70f7dd57b.png';
import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <a href="disney">DISNEY+</a>
      <a href="shop">SHOP</a>
      <a href="movies">MOVIES</a>
      <a href="shows">SHOWS</a>
      <a href="parks">PARKS</a>
      <a href="disney">DISNEY100</a>
    </header>
  )
}

export default Header;