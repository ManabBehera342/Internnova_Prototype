import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink, useNavigate } from 'react-router-dom'; // Updated import
import './Navbar.css';



const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Updated to useNavigate

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

  const handleLoginClick = () => {
    navigate('/login'); // Use navigate to redirect to login page
  };

  return (
    <>
      <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
        <div className="navs container">
          <div className="logo">
            <Link to="landing" smooth={true} offset={0} duration={500}>
              <img src="./images/logo.png" alt="logo" className="logoimg"/>
            </Link>
          </div>

          <ul className="menu">
            <li><NavLink to="/home">HOME</NavLink></li>
            {/* <li><Link to="landing" smooth={true} offset={0} duration={500}>HOME</Link></li> */}
            <li><Link to="about" smooth={true} offset={0} duration={500}>ABOUT</Link></li>
            <li><Link to="faq" smooth={true} offset={0} duration={500}>FAQ</Link></li>
          </ul>
            <div className="out-landing">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/faq">Faq</NavLink>
            </div>
          <div className="auth-buttons">
            <button className="login" onClick={handleLoginClick}>LOGIN</button>
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
        <NavLink to="/home" onClick={closeMobileMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
        <NavLink to="/faq" onClick={closeMobileMenu}>Faq</NavLink>
        <button className="login" onClick={handleLoginClick}>LOGIN</button>
        <button className="signup" onClick={closeMobileMenu}>SIGNUP</button>
      </div>
    </>
  );
};

export default Navbar;
