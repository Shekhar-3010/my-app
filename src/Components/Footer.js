import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaHome, FaLinkedin,FaGithub, FaMailBulk, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
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
          <div className="socials">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shashishekhar-choudhary/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaLinkedin  className="icons-linkedin"
              size={50} style={{ color: "#0072b1", marginRight: "1rem" }}
              />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Shekhar-3010?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaGithub className="icons"
              size={50} style={{ color: "#fff", marginRight: "1rem" }}

              />

                <span className="ico-circle">
                  <i className="ion-social-github"></i>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=917698058621&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaWhatsapp className="icons"
              size={50} style={{ color: "#aaf3aa", marginRight: "1rem" }}

              />
              <span className="ico-circle">
                  <i className="ion-social-linkedin"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
