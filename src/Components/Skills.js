import React from 'react'
import "./SkillsStyle.css"
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import HeroImg from './HeroImg'


const Skills = () => {
  return (
    <div className='Heading'>
    <h1>what skills do i have ?</h1>
    
    <div className="skills-container">
    <p >HTML</p>
    <div class="container">
      <div class="skills html">90%</div>
    </div>
    
    <p>CSS</p>
    <div class="container">
      <div class="skills css">80%</div>
    </div>
    
    <p>JavaScript</p>
    <div class="container">
      <div class="skills js">65%</div>
    </div>
    
    <p>React.js</p>
    <div class="container">
      <div class="skills php">60%</div>
    </div> 
    
    
    <p>C/C++</p>
    <div class="container">
      <div class="skills c">65%</div>
    </div>
    
    
    
    
    </div>
    </div>
  )
}

export default Skills;
 