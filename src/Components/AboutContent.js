import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import react1 from "../assets/react.jpg"
import react2 from "../assets/react2.jpeg"
import react3 from "../assets/react3.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <h1>Who Am I</h1>ts
      <p> Hi there! My name is shashishekhar choudhary, and I am a front-end developer with a passion for coding and problem-solving. With my expertise in HTML, CSS, JavaScript, React, and Redux, I have helped create beautiful and intuitive user interfaces for a variety of clients and projects.

In addition to my front-end development skills, I am also proficient in C/C++, which has helped me tackle more complex programming challenges. I have honed my problem-solving abilities by solving over 400 questions on LeetCode, a platform that helps developers sharpen their coding skills through various algorithmic problems.</p>
      <Link to="/contact">
      <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="right">
      <div className="Img-container">
            <div className="img-stack top">
            <img src={react3 } className="img" alt="react1icon"/>
            </div>
           
      </div>
      </div>
    </div>
  )
}

export default AboutContent
