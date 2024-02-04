import React from "react";
import { motion } from "framer-motion";
import "../styles/transition.css";
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="trans1"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        mass=".8"
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <motion.div
        className="trans2"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        mass=".8"
        transition={{ delay: 0.25, duration: 0.7, ease: "easeInOut" }}
      />
      <motion.div
        className="trans3"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        mass=".8"
        transition={{ delay: 0.45, duration: 0.7, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
