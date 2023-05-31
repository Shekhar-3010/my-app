import "./WordCardstyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkCarddata from "./WorkCarddata";
import "./workcardstyles.css"

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="Project-heading">SERVICES WE PROVIDE</h1>
      <div className="project-container">
                {
                    WorkCarddata.map((val,ind)=>{
                        return(
                            <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            titles={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                            />
                        )

                    })
                }
        
        
      </div>
    </div>
  );
};

export default Work;
