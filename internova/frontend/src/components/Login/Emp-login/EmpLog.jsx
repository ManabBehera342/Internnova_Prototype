import React from 'react'
import Form from '../Form/Form';
import Navbar from '../../Navbar/Navbar';
import './EmpLog.css'


const EmpLog = () => {
  return (
    <>
    <div className="log-nav"><Navbar/></div>
    <div className="emplog-page" id='emplog'>
      <div className="yellow-gradient"/>
      <div className="emplog-container">
        <div className="sec">
          <Form/>
        </div>
        <div className="sec">
          <div className='head-sec'>Welcome to 
            <h1>Internova</h1>
            <div className='para-sec' style={{fontSize:'26px'}}>Join us to <span style={{color:"#543E6C"}}>Connect </span>more Talents !</div>
          </div>
          {/* globe */}
          <div></div>
        </div>
    
      </div> 
    <div className="violet-gradient"/>
    </div>
    </>
  );
};



 

export default EmpLog;
