import React from 'react'
import Banner from '../component/Banner'
import About from '../component/About'
import Experiences from '../component/Experiences'
import Services from '../component/Services'
import Contact from '../component/Contact'
import RoboticsDisplay from '../component/RoboticsDisplay'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div id="home">
        <Banner />
      </div>

      <div id="about">
            <About />
      </div>

      <div id='expertise'>
              <Experiences />
      </div>
      <div id='experience'>
              <Services/>
      </div>

       <div id='roboticsshowcase'>
              <RoboticsDisplay />
      </div>

      <div id='contact'>
              <Contact/>
      </div>
     
    </div>
  )
}

export default Home