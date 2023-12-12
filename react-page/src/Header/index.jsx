import React, { useState } from 'react';
import './HamburgerMenu.css'
// import logo from '../assets/disney_logo_dark@2x-45d70f7dd57b.png';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      {isOpen && (
        <div className="menu-items">
          <a href="disney">DISNEY+</a>
          <div className='line1'></div>
          <a href="shop">SHOP</a>
          <div className='line1'></div>
          <a href="movies">MOVIES</a>
          <div className='line1'></div>
          <a href="shows">SHOWS</a>
          <div className='line1'></div>
          <a href="parks">PARKS</a>
          <div className='line1'></div>
          <a href="disney">DISNEY100</a>
        </div>
      )}
    </div>
  );
}

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