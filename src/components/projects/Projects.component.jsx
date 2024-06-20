import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

import ProjectsKupono from "./ProjectsKupono.component";
import ProjectsRSI from "./ProjectsRSI.component";
import ProjectsOther from "./ProjectsOther.component";

import "./Projects.styles.scss";

const Projects = ({ currentPage, onNavigate }) => {
  const [changeZ, setChangeZ] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [wasZero, setWasZero] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const [rsiPicBG, setRsiPicBG] = useState(false);

  const isInViewBGHandler = (state) => {
    setRsiPicBG(state);
  };

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    rsiPicBG ? ["#f3f9d2", "#d6e5e3"] : ["#f3f9d2", "#f3f9d2"]
  );

  // For back button to 4th page (called Opener)
  const handleUpClick = () => {
    onNavigate(4);
  };

  // Changes project's page z-index with delay to allow page 4 exit animation
  useEffect(() => {
    if (currentPage === 5) {
      const timer = setTimeout(() => {
        setChangeZ(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setChangeZ(false);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = (latest) => {
      // Log scrollY values for debugging
      // console.log("ScrollY value:", latest);

      //For back button drop down & reset settings
      if (latest === 0) {
        setScrolledUp(true);
        setWasZero(true);
      } else if (latest > 0 && wasZero) {
        setScrolledUp(false);
      }
    };

    scrollY.on("change", handleScroll);
    return () => scrollY.clearListeners();
  }, [scrollY, wasZero]);

  return (
    <motion.div
      className={`projects-container ${currentPage >= 5 ? "hidevhvw" : ""} ${
        changeZ ? "changeZup" : ""
      }`}
      style={{ backgroundColor }}
    >
      {scrolledUp && (
        <motion.div
          className="backUpButton"
          initial={{ y: "0%", x: "-50%" }}
          animate={{ y: "100%", x: "-50%" }}
          onClick={() => {
            handleUpClick();
          }}
        >
          ▲
        </motion.div>
      )}

      <ProjectsKupono />
      <ProjectsRSI onSectionInView={isInViewBGHandler} />
      <ProjectsOther />
    </motion.div>
  );
};
export default Projects;
