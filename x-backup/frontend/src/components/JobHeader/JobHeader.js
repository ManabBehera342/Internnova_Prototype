import React, { useState } from "react";
import "./JobHeader.css";
import { NavLink } from "react-router-dom";

const JobHeader = () => {
  // State to manage the hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="jobnavbar">
      {/* Brand Logo */}
      {/* <div className="jobnavbar-brand">
        {/* <span className="brand-logo">
          intern<span className="brand-highlight">ova.</span>
        </span> 
      </div> */}
      <div className="logo">
        <NavLink to="/">
          <img src="./images/logo.png" alt="logo" className="logoimg" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="jobhamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/internships">Internships</NavLink>
        </li>
        <li>
          <NavLink to="/mentorship">Mentorship</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
        <li className="profile-toggle">
          <a href="#profile" className="profile-link">
            Profile
          </a>
          <img
            src="profile-pic.jpg" // Replace with the path to the user's profile image
            alt="Profile"
            className="profile-pic"
          />
        </li>
      </ul>
    </nav>
  );
};

export default JobHeader;
