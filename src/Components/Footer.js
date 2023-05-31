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
          
            <h4> <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} 
        
            />Nigdi

           
            Pune, Maharashtra</h4>
            
          </div>
          
          
          
        </div>
        <div className="phone">
          <h4>
            {" "}
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            7887317615,
             8668554794
          </h4>
        </div>
        <div className="location">
          <h4>
            
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />support@honeybadgersco.com


          </h4>
        </div>
        <div className="right">
          <h4>About Us</h4>
          
          <p>is a technology and digital IT Consultation firm specializing in innovative software solutions. Which is Known for delivering high-quality and exceptional customer service. We believe that technology has the power to change the world, and we're driven to play a role in shaping its future. Whether it's making it easier for people to connect or improving how businesses operate, our goal is to use technology to positively impact people's lives.</p>
          <div className="socials">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/honeybadgersco/mycompany/"
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
                href="https://api.whatsapp.com/send/?phone=918668554794&text&type=phone_number&app_absent=0"
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
