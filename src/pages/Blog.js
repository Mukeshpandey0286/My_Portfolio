import React from "react";
import "../styles/blog.css";
import PowerBtn from "../components/powerBtn/PowerBtn";
import Social from "../components/Social";
import Logo from "../components/logo/Logo";
import BlogCard from "../components/BlogCard";
import { Blogs } from "../data/BlogData";
import TransitionEffect from "../components/TransitionEffect";

const Blog = () => {
  return (
    <>
      <TransitionEffect />
      <div id="main">
        <div className="blog-main">
          <div className="blog-heading">
            <span>
              B
              <br />
              L
              <br />
              O
              <br />G
            </span>
          </div>
          <div className="container">
            <Logo />
            <PowerBtn />
            <Social />

            <div className="center">
              <div className="grid">
                {Blogs.map((blog) => {
                  return <BlogCard key={blog.id} blog={blog} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
