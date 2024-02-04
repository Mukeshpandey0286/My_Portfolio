import React from "react";
import "../styles/skillscard.css";
const SkillsCard = (props) => {
  return (
    <>
      <div className="skills-card" data-aos="flip-left">
        <h2>
          <i className={props.logo}></i>
          {"   "}
          {props.heading}
        </h2>
        <p>{props.desc} </p>
        <div className="skills">
          <h3>Skills</h3>
          <p>{props.skills} </p>
        </div>
        <div className="tools">
          <h3>Tools</h3>
          <p>{props.tools}</p>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
