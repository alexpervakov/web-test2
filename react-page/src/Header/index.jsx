import React from 'react';
import logo from '../assets/disney_logo_dark@2x-45d70f7dd57b.png';
import styles from './index.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <a href="#">DISNEY+</a>
            <a href="#">SHOP</a>
            <a href="#">MOVIES</a>
            <a href="#">SHOWS</a>
            <a href="#">PARKS</a>
            <a href="#">DISNEY100</a>
        </header>
    )
}

export default Header;