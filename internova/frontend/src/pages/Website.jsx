import React from 'react'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import Faq from '../components/Faq/Faq'

const Website = () => {
  return (
    <div className='App'>
    <div>
      {/* <div className="yellow-gradient"/> */}
      <Landing/>
{/*       <div className="violet-gradient"/> */}
    </div>
    <About/>
    <Faq/>
  </div>
  )
}

export default Website
