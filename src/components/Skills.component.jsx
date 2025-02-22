import { motion } from "framer-motion";
import "./Skills.styles.scss";

import css from "../images/icon-css.png";
import html from "../images/icon-html.png";
import js from "../images/icon-js.png";
import react from "../images/icon-react.png";
import nextjs from "../images/icon-nextjs.png";
import nodejs from "../images/icon-nodejs.png";
import aws from "../images/icon-aws.png";
import mysql from "../images/icon-mysql.png";
import mongodb from "../images/icon-mongodb.png";
import typescript from "../images/icon-typescript.png";
import keyboardBG from "../images/keyboardBG.jpg";

const Skills = ({ currentPage }) => {
  const motionUp = {
    initial: {
      x: "-50%",
      y: "-50%",
      rotate: 0,
    },
    move: {
      x: ["-50%", "90%", "130%"],
      y: ["-50%", "-130%", "-200%"],
      rotate: [0, -55, -130],
      transition: {
        duration: 0.5,
        ease: "linear",
        times: [0, 0.2, 0.4, 1],
      },
    },
  };
  const icons = [
    css,
    html,
    js,
    react,
    nextjs,
    nodejs,
    aws,
    mysql,
    mongodb,
    typescript,
  ];

  return (
    <motion.div
      className={`circle circle-three`}
      initial="initial"
      variants={motionUp}
      animate={currentPage >= 4 ? "move" : ""}
    >
      <img src={keyboardBG} alt="keyboard" className="skillsBG"></img>
      <div className="skills-container">
        <h2>Skills</h2>
        {icons.map((icon) => (
          <div key={icon} className="icon-container">
            <div className="icon-imageContainer">
              <img src={icon} alt={`${icon}-icon`}></img>
            </div>
            <span className="title">icon</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
