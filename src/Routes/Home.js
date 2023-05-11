import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Work from "../Components/Work"
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
     
      <Footer/>
    </div>
  )
}

export default Home
