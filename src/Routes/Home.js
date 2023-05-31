import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Work from "../Components/Work"
import Skills from '../Components/Skills'
import downloadTxtFile from '../Components/downloadTxtFile'
import { FaDownload } from 'react-icons/fa'


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
