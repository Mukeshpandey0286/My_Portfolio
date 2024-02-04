import React, { useEffect, useRef } from "react";
import PowerBtn from "../components/powerBtn/PowerBtn";
import ParticleComponent from "../components/ParticleComponent";
import configDark from "../config/particlesjs-config.json";
import "../styles/work.css";
import { Work } from "../data/WorkData";
import WorkCard from "../components/WorkCard";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Works = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.scrollY}px)`;
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <>
      <TransitionEffect />
      <ParticleComponent options={configDark} />
      <div className="work-heading">
        <span>
          W
          <br />
          O
          <br />
          R
          <br />K
        </span>
      </div>
      <div className="w">
        <div className="work">
          <PowerBtn />
          <div className="logo">MP</div>
          <div className="work-icons">
            <i className="fab fa-github"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <div className="line">
              <span></span>
            </div>
          </div>

          <motion.div
            className="work-container"
            ref={ref}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {Work.map((d) => {
              return <WorkCard id={d.id} data={d} />;
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Works;
