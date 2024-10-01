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
          
        </div>
    
      </div> 
    <div className="violet-gradient"/>
    </div>
    </>
  );
};



 

export default EmpLog;
