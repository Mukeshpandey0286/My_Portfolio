import React from "react";
import SkillsCard from "../components/SkillsCard";
import "../styles/skills.css";
import PowerBtn from "../components/powerBtn/PowerBtn";
import Social from "../components/Social";
import Logo from "../components/logo/Logo";
import ParticleComponent from "../components/ParticleComponent";
import configLight from "../config/particlesjs-config-light.json";
import TransitionEffect from "../components/TransitionEffect";

const Skills = () => {
  const frontend = {
    logo: "fa fa-desktop",
    heading: "Frontend",
    desc: "I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.",
    skills: "Html, Css, Js, React, Bootstrap, EJS, Firebase etc.",
    tools: "VScode, Github, Codesandbox, Codepan etc.",
  };

  const backend = {
    logo: "fa  fa-display-code",
    heading: "Backend",
    desc: "I value jhasgf asisa ufff asofuias oddf aduyas dalsfkfja.",
    skills:
      "Node Js, MongoDB, Express, JSON, REST, Version Control (Github), Server Handling",
    tools: "VScode, Github, Postman etc.",
  };

  return (
    <>
      <TransitionEffect />
      <PowerBtn />
      <Logo />
      <ParticleComponent options={configLight} />
      <div className="skills-heading">
        <span>S K I L L S</span>
      </div>
      <div id="skills">
        <Social />
        <div className="skills-container">
          <SkillsCard
            logo={frontend.logo}
            heading={frontend.heading}
            skills={frontend.skills}
            desc={frontend.desc}
            tools={frontend.tools}
          />
          <SkillsCard
            logo={backend.logo}
            heading={backend.heading}
            skills={backend.skills}
            desc={backend.desc}
            tools={backend.tools}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
