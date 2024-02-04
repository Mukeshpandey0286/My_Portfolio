import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "../styles/particle.css";

const ParticleComponent = (props) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div className="particle-box">
        <Particles options={props.options} init={particlesInit} />
      </div>
    </>
  );
};

export default ParticleComponent;
