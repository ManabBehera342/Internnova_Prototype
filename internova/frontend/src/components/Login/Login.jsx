import React from 'react';
import './Login.css';
import { Link } from 'react-scroll';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  return (
    <>
    <div className="log-nav"><Navbar/></div>
    <div className="login-page">
      {/* Left Gradient */}
      <div className="yellow-gradient"></div>

      {/* Content Container */}
      <div className="log-container">
        <div className="sec">
          <h1 className='head'>For Employers</h1>
          <h5>Discovering tomorrow's talent today by <br/>
            <span className="highlight">recruiting interns ready to make an impact.</span>
          </h5>
          <button className="login-btn">Login</button><br/><br/>
          <Link>New to Internova? Register (Student / Employer)</Link>
        </div>
          <div className="divide"/>
        <div className="sec">
          <h1 className='head'>For Students</h1>
          <h5>Unlock Your Future: Find the Perfect <br/>
            <span className="highlight">Internship to Kickstart Your Career!</span>
          </h5>
          <button className="login-btn">Login</button><br/><br/>
          <Link>New to Internova? Register (Student / Employer)</Link>
        </div>
      </div>

      {/* Skyline Image */}
      <div className="footer">
        <img src="./images/build-image.png" alt="Skyline" className="build-img" />
      </div>

      {/* Right Gradient */}
      <div className="violet-gradient"></div>
    </div>
    </>
  );
}

export default Login;
