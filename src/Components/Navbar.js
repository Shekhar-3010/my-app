import React, { useState } from 'react'
import "./Navbarstyles.css"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const[click,setClick] =useState(false);
    const handleCLicking = () =>setClick(!click);


    const  [color,setColor]=useState(false);
    const changeColor = () =>{
      if(window.scrollY>=100){
        setColor(true);
      }else{
        setColor(false);
      }
      
    };
    window.addEventListener("scroll",changeColor,true);
    
  return (
    <div className={color ? "header header-bg":"header"}>
    <Link to="/">
    
    <h1 className='nameheading'>Shashishekhar</h1>
    </Link>
    <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Projects">Project</Link>
        </li>
        <li>
        <Link to="/About">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/Skills">Skills</Link>
        </li>
    </ul>
    <div className='HamBurger' onClick={handleCLicking }>
        {click ? (  <FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>
        ) }
    </div>
      
    </div>
  )
}

export default Navbar
