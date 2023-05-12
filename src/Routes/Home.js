import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Work from "../Components/Work"
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import downloadTxtFile from '../Components/downloadTxtFile'
import { FaDownload } from 'react-icons/fa'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <button id="foot"><button class="button-os"><a href="https://drive.google.com/file/d/12xu5eanrTlTrRXAHZeYcwFvuN8w7qciL/view?usp=sharin" target="blank" download="resume.pdf"> <FaDownload/>  Resume</a></button></button>

      <Work/>
      
      <Footer/>
    </div>
  )
}

export default Home
