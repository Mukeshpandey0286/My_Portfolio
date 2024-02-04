import React, { useState } from "react";
import "../styles/home.css";
import Logo from "../components/logo/Logo";
import PowerBtn from "../components/powerBtn/PowerBtn";
import { Link } from "react-router-dom";
import Social from "../components/Social";
import Intro from "../components/Intro";
import { motion } from "framer-motion";
import configDark from "../config/particlesjs-config.json";
import ParticleComponent from "../components/ParticleComponent";
import TransitionEffect from "../components/TransitionEffect";

const Home = () => {
  const [click, setClick] = useState(false);
  const styles = {
    roter: {
      alignItems: click && "end",
      justifyContent: click && "end",
      padding: click && "0 1rem 1.6rem 0rem",
    },
    svg: {
      width: click && "5rem",
    },
    dark: {
      position: "absolute",
      top: 0,
      right: "48.6%",
      width: click ? "53%" : 0,
      height: click ? "100%" : 0,
      backgroundColor: "black",
      zIndex: -1,
      transition: "height 0.5s ease, width 1s ease 0.5s",
    },
    work: {
      color: click && "white",
    },
    about: {
      color: click && "white",
    },
  };
  const handleClick = () => {
    setClick(!click);
    console.log("Clicked");
  };

  return (
    <>
      <TransitionEffect />

      <div className="dark" style={styles.dark}></div>

      <div data-aos="fade-up" className="container-fluid" id="home">
        <ParticleComponent options={configDark} />
        <Logo click={click} />
        <div className="power">
          <PowerBtn click={click} />
        </div>

        <div className="home-roter" style={styles.roter} click={click}>
          <svg
            onClick={handleClick}
            style={styles.svg}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="yin-yang"
            class="svg-inline--fa fa-yin-yang fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
            ></path>
          </svg>
          <Link to="/about">Click Here</Link>
        </div>

        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/contact">Say Hi..</Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/blog">Blog</Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/skills">My Skills</Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link style={styles.about} to="/about">
            About
          </Link>
        </motion.span>
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link style={styles.about} to="/work">
            Work
          </Link>
        </motion.span>
        <motion.span className="social">
          <Social click={click} />
        </motion.span>
      </div>

      {click && <Intro />}
    </>
  );
};

export default Home;
