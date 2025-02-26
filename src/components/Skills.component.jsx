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
  const iconData = [
    { src: css, name: "CSS" },
    { src: html, name: "HTML" },
    { src: js, name: "Javascript" },
    { src: react, name: "React" },
    { src: nextjs, name: "Nextjs" },
    { src: nodejs, name: "Nodejs" },
    { src: aws, name: "AWS" },
    { src: mysql, name: "MySQL" },
    { src: mongodb, name: "MongoDB" },
    { src: typescript, name: "Typescript" },
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
        {iconData.map((icon) => (
          <div key={icon.name} className="icon-container">
            <div className="icon-imageContainer">
              <img src={icon.src} alt={`${icon.name}-icon`}></img>
            </div>
            <span className="title">{icon.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
