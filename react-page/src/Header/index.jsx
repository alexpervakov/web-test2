import React, { useState } from 'react';
import './HamburgerMenu.css'
// import logo from '../assets/disney_logo_dark@2x-45d70f7dd57b.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleMenuClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="links">
        <a href="disney">DISNEY+</a>
        <a href="shop">SHOP</a>
        <a href="movies">MOVIES</a>
        <a href="shows">SHOWS</a>
        <a href="parks">PARKS</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;

//   const Header = () => {
//    return (
//     <header className={styles.header}>
//        <img src={logo} alt="logo" />
//        <a href="disney">DISNEY+</a>
//        <a href="shop">SHOP</a>
//        <a href="movies">MOVIES</a>
//        <a href="shows">SHOWS</a>
//        <a href="parks">PARKS</a>
//        <a href="disney">DISNEY100</a>
//      </header>
//    )
//  }

//  export default Header; 