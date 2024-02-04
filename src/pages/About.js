import React from "react";
import PowerBtn from "../components/powerBtn/PowerBtn";
import "../styles/about.css";
import spaceman from "../assets/images/spaceman.png";
import ParticleComponent from "../components/ParticleComponent";
import configDark from "../config/particlesjs-config.json";
import TransitionEffect from "../components/TransitionEffect";
const About = () => {
  return (
    <>
      <TransitionEffect />
      <ParticleComponent options={configDark} />
      <div className="about-heading">
        <span>
          A
          <br />
          B
          <br />
          O
          <br />
          U
          <br />T
        </span>
      </div>
      <div className="about">
        <PowerBtn />
        <div className="logo">MP</div>
        <div className="about-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <div className="line">
            <span></span>
          </div>
        </div>
        <div className="about-container" data-aos="fade-left">
          <p>
            I'm a Full Stack developer located in India. I love to create simple
            yet beautiful websites with great user experience. Passionate about
            clean code, scalability, and performance optimization.
          </p>
          <p>
            I'm interested in the MERN stack. Like to learn new things and
            building great projects. I possess a strong understanding of modern
            web technologies and best practices. Proven ability to develop
            responsive and visually appealing web applications with a focus on
            user experience.
          </p>
          <p>
            I believe everything is an Art when you put your consciousness in
            it. You can connect with me via social links.
          </p>
        </div>
        <div className="image">
          <img src={spaceman} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
