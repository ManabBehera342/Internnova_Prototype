import React from 'react'
import Navbar from './../Navbar/Navbar';
import "./Home.css"
import { FaSearch } from 'react-icons/fa';


const Home = () => {
  return (
    <>
     <div className="home-nav"><Navbar/></div>
     <div className="home-page" id='home'>

        <div className='home-container'  >
          {/* <h1 className='home-head'>home</h1> */}
          <div className="leftSec">
            <h1 className='home-head'>Spotting talent, shaping futures</h1>
            <div className="search-bar">
            <input
              placeholder='Search what you want...'
              type='text'
              value={""}
              onChange={""}
              />
              <FaSearch/>
            </div>
    
     {/*  <HiLocationMarker color="var(--blue)" size={25} /> */}
            <p className='popular'>Popular : Full Stack Web Developer,UI/UX Designer,ML Engineer,....</p>
          </div>
          <div className="head-sec">
            <img src="./images/Group 10.png" alt="home" width={500} height={550}/>
          </div>
        </div>
     </div>
    </>
  )
}

export default Home
