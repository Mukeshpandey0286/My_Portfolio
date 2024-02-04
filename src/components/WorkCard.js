import React from "react";
import "../styles/workcard.css";
import { Link } from "react-router-dom";
const WorkCard = (props) => {
  // eslint-disable-next-line
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <>
      <div className="work-card" data-aos="slide-right">
        <h1>{name} </h1>
        <p>{description} </p>
        <hr />
        <div className="tags">
          {tags.map((t) => {
            return (
              <p>
                #{t} {"  "}
              </p>
            );
          })}
        </div>

        <div className="btn">
          <Link to={{ pathname: `${demo}` }} target="_blank">
            Visit
          </Link>
          <Link to={{ pathname: `${github}` }} target="_blank">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
