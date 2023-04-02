import React, { useState } from 'react'
import "./Navbarstyles.css"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const[click,setClick] =useState(false);
    const handleCLicking = () =>setClick(!click)

    
  return (
    <div className='header'>
    <Link to="/">
    <h1>Shashishekhar</h1>
    </Link>
    <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Project">Project</Link>
        </li>
        <li>
        <Link to="/About">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
    </ul>
    <div className='HamBurger' onClick={handleCLicking }>
        {click ? (  <FaBars size={20} style={{color:"#fff"}}/>):(<FaTimes size={20} style={{color:"#fff"}}/>
        ) }
        

    </div>
      
    </div>
  )
}

export default Navbar
