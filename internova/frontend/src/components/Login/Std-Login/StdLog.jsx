import React from 'react'
import Form from '../Form/Form';
import Navbar from '../../Navbar/Navbar';
import './StdLog.css'

const EmpLog = () => {
  return (
    <>
    <div className="log-nav"><Navbar/></div>
    <div className="stdlog-page" id='stdlog'>
      <div className="yellow-gradient"/>
      <div className="stdlog-container">
        <div className="sec">
          <div className='head-sec'>Welcome to 
            <h1>Internova</h1>
            <div className='para-sec' style={{fontSize:'26px'}}>Join us to <span style={{color:"#e4c61b"}}>Unlock </span>your Potential !</div>
          </div>
          {/* globe */}
          <div></div>
        </div>
        <div className="sec">
        <Form/>
        </div>
    
      </div> 
    <div className="violet-gradient"/>
    </div>
    </>
  );
};



 

export default EmpLog;
