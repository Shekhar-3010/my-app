import "./HeroImgStyles.css";
import React from 'react';
import IntroImage from "../assets/nasa.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
    <img className="Intro_image" src={IntroImage}/>
    </div>
    <div className="content"> 
    <p className="top"> PASSION. POSSIBILITIES. INNOVATIONS! </p>
    <h1> HoneyBadgersco</h1>
    <div>
    <Link to="/projects" className="btn btn">Products</Link>
    <Link to="/contact" className=" btn btn-light">Contact Us</Link>

  



    

   



    </div>
    </div>
      
    </div>
  )
}


export default HeroImg
