import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2';
import WorkCard from '../Components/WorkCard';
import Work from '../Components/Work';


const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects." text="Some of my most react projects"/ >
      <Work/>
      <Footer/>
      
      
    </div>
  );
};

export default Projects
