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
      <h1>HONEYBADGERSCO
      </h1>
      <p>HoneyBadgers is a technology and digital IT Consultation firm specializing in innovative software solutions. Which is Known for delivering high-quality and exceptional customer service. We believe that technology has the power to change the world, and we're driven to play a role in shaping its future. Whether it's making it easier for people to connect or improving how businesses operate, our goal is to use technology to positively impact people's lives. Our team of experts is dedicated to staying ahead of the curve in terms of technology and innovation and is persistently researching and developing new solutions to meet the ever-changing needs of our clients. Whether it's developing a custom software solution or launching a new high-tech product, we always strive to push the boundaries of what's possible. With a team of experts, a commitment to excellence, and a passion for innovation, we're poised to continue leading the way in the tech industry for many years to come.
      YOUR DREAMS, OUR INNOVATIONS. TRANSFORMING TOGETHER FOR A BETTER FUTURE!
      Vision:
      To meet the ever-evolving needs of the world by providing innovative, faster, more productive, and more secure solutions for their pressing business problems and help improve their business performance.
      Mission:
      To constantly keep researching and developing new, innovative, and digital solutions for our clients.
      Core Values:
      Our values sculpt the culture of our organization and define who we are, and trust and respect are integral parts of it. Other values that shape who we are include:
      • Commitment to our clients
      • Dedication towards research, innovation, and transformation
      • Delivering excellence in every service we provide
      • Teamwork, allowing us to be meticulous and innovative.</p>
      <Link to="/contact">
      <button className="btn">Contact</button>
      </Link>
      </div>
      
    </div>
  )
}

export default AboutContent
