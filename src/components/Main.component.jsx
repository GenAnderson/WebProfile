import { motion } from "framer-motion";
import Contact from "./Contact.component";
import { useState } from "react";

import "./Main.styles.scss";

const Main = ({ currentPage }) => {
  const [formOpacity, setFormOpacity] = useState();

  const motionUpLeft = {
    initial: {
      x: "-50%",
      y: "-50%",
      rotate: 0,
    },
    move: {
      x: ["-50%", "-100%", "-200%"],
      y: ["-50%", "-150%", "-200%"],
      rotate: [0, -55, -110],
      transition: {
        duration: 0.5,
        ease: "linear",
        times: [0, 0.2, 0.4, 1],
      },
    },
  };

  const contactHandler = () => {
    setFormOpacity((prevState) => !prevState);
  };

  return (
    <motion.div
      className={`circle circle-one`}
      initial="initial"
      variants={motionUpLeft}
      animate={currentPage !== 1 ? "move" : ""}
    >
      <div className="main-container">
        <h1>Genevieve Anderson</h1>
        <button
          className="button contactMeButton"
          onClick={() => {
            contactHandler();
          }}
        >
          Contact me
        </button>
      </div>
      <div className="scrollDown">
        <p className="scrollDown__text">scroll down</p>
        <p>▼</p>
        <p>▼</p>
      </div>
      <Contact opacity={formOpacity} contactHandler={contactHandler} />
    </motion.div>
  );
};

export default Main;
