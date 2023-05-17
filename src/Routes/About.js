import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text=" HEY ! developers this  is shashishekhar choudhry and i am a friendly front end developer" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About

