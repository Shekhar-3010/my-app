import "./WordCardstyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="Project-card">
      <img src={props.imgsrc} alt="{props.title}" />

      <h2 className="project-title">{props.titles}</h2>

      <div className="pro-details">
        
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} target="_blank" className="btn">
            contact 
          </NavLink>
          <NavLink to={props.source} target="_blank" className="btn">
            reviews
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
