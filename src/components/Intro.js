import React from "react";
import "../styles/intro.css";
import Profile from "../assets/images/profile-img.png";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <>
      <motion.div
        initial={{ maxHeight: "0vh" }}
        animate={{ maxHeight: "68vh" }}
        transition={{
          type: "spring",
          duration: 3,
          delay: 0.7,
        }}
        className="intro"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="sub-box content"
        >
          <div className="intro-content">
            <h1>Hi,</h1>
            <h3>I' am Mukesh Pandey</h3>
            <p>
              I am a web devloper with no experience. I code and design simple
              yet beautiful websites
            </p>
          </div>
        </motion.div>

        <div className="sub-box img">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div>
              <img src={Profile} alt="Mukesh" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;
