import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className="navs container">
        <div className="logo">
          <Link to="landing" smooth={true} offset={0} duration={500}>
            <img src="./images/logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="menu">
          <li><Link to="landing" smooth={true} offset={0} duration={500}>HOME</Link></li>
          <li><Link to="about" smooth={true} offset={-70} duration={500}>ABOUT</Link></li>
          <li><Link to="faq" smooth={true} offset={-10} duration={500}>FAQ</Link></li>
        </ul>

        <div className="auth-buttons">
          <button className="login">LOGIN</button>
          <button className="signup">SIGNUP</button>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" role="button">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </nav>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
          <NavLink to="/faq" onClick={closeMobileMenu}>Faq</NavLink>
          <button className="login" onClick={closeMobileMenu}>LOGIN</button>
          <button className="signup" onClick={closeMobileMenu}>SIGNUP</button>
        </div>
      
   </>
  );
};

export default Navbar;

