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
import firebase from "../images/icon-firebase.png";
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
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={html} alt="html5 icon"></img>
          </div>
          <span className="title">HTML5</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={css} alt="css3 icon"></img>
          </div>
          <span className="title">CSS3/SCSS</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={js} alt="javascript icon"></img>
          </div>
          <span className="title">Javascript</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={react} alt="reactjs icon"></img>
          </div>
          <span className="title">Reactjs</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={nextjs} alt="nextjs icon"></img>
          </div>
          <span className="title">NextJS</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={nodejs} alt="nodejs icon"></img>
          </div>
          <span className="title">NodeJS</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={aws} alt="aws icon"></img>
          </div>
          <span className="title">AWS</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={mysql} alt="mysql icon"></img>
          </div>
          <span className="title">MySQL</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={mongodb} alt="mongodb icon"></img>
          </div>
          <span className="title">MongoDB</span>
        </div>
        <div className="icon-container">
          <div className="icon-imageContainer">
            <img src={firebase} alt="firebase icon"></img>
          </div>
          <span className="title">Firebase</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
