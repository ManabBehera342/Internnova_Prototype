/* import React from 'react'
import "./Landing.css"

const Landing = () => {
  return (
    <div className='landing container'>
    <div className='hero'>
      <div className="centeritem">

      </div>
      <h1>Unlock Your Potential—Find Your <span style={{ color:"rgba(255, 215, 0, 1)" }}> Dream </span> Internship Today!</h1>
    </div>
    </div>
  )
}

export default Landing */

import React from 'react';
import './Landing.css'; // Importing the CSS file for styling

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="yellow-gradient" />
      <div className="content">
        <h1>Where Skills Meet Opportunity</h1>
        <p>Unlock Your Potential—Find Your Dream Internship Today!</p>
        
      </div>
      <div className="violet-gradient" />
      {/* <img src="./images/Group 4 (1).png" alt=" " width={1000} style={{marginLeft:"35%"}}/> */}
    </div>
  );
};

export default Landing;
