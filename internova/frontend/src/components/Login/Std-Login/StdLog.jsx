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
