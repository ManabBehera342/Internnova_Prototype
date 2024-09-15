
import React from 'react';
import './Landing.css'; 

const Landing = () => {
  return (
    <div className="landing">
      <div className="yellow-gradient" />
      <div className="content">
       
        <img src="./images/Group 18.png" alt='mid' width={1100} className='mid'/>
        <p className='low'>Unlock Your Potential—Find Your <span className='span' style={{color:"yellow"}}>Dream</span> Internship Today!</p>
        
      </div>
      <div className="violet-gradient" />
      
    </div>
  );
};

export default Landing;
