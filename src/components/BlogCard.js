import React from "react";
import "../styles/blogcard.css";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <>
      <div className="blog-card" data-aos="fade-up">
        <Link target="_blank" to={{ pathname: link }}>
          <div className="image">
            <img src={imgSrc} alt="" />
          </div>
          <h6>{name}</h6>

          <p>{date}</p>
          <div className="hashtags">
            {tags.map((t, id) => {
              return <h7 key={id}>#{t} </h7>;
            })}
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
