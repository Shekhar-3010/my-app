import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaTwitch, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
          
            
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} 
        
            />
          </div>
          <div>
            <p> Meghpar Borichi Anjar</p>
            <p>India</p>
          </div>
        </div>
        <div className="phone">
          <h4>
            {" "}
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            +91 9265944215
          </h4>
        </div>
        <div className="location">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            shashshekhar302001@gmail.com
          </h4>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I am a frontend developer with knowledge of 
          <ul>
          <li>HTML</li>
          <li>CSS(Bootstrap)</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>REDUX</li>
          <li>c/c++</li>
          <li>DataStructures and algorithm</li>

          </ul>
          </p>
          <div className="social">
            <FaFacebook 
              size={30} 
              style={{ color: "#fff", 
              marginRight: "1rem" }}
            />
            <FaTwitter
            size={30} 
            style={{ color: "#fff", 
            marginRight: "1rem" }}
          />
         
          <FaLinkedin 
          
          size={30} 
          style={{ color: "#fff", 
          marginRight: "1rem" }}
        />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
