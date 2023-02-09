import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Programs.css";

const ArchiveProgram = (props) => {
  return (
    <div className="row">
      {props.mentorshipList.map((item, index)=>(
      <div className="poster-content col-lg-4 col-md-6 col-12">
        <h2 className="text-center">
            {item.season}
        </h2>
        <img
          src={item.flyer}
          className="programs-poster rounded m-auto d-block"
          alt="mentorship flyer"
        ></img>
      </div>
      ))}
    </div>
  );
};

export default ArchiveProgram;
