import "./HeroImgStyles.css";
import React from 'react';
import IntroImage from "../assets/bg-image.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
    <img className="Intro_image" src={IntroImage}/>
    </div>
    <div className="content"> 
    <p> HI ! I am shashishekhar </p>
    <h1> Front end developer</h1>
    <div>
    <Link to="/project" className="btn btn">Projects</Link>
    <Link to="/project" className=" btn btn-light">Contact</Link>


    </div>
    </div>
      
    </div>
  )
}

export default HeroImg