import kuponoMain from "../images/kuponoacres1.png";
import kuponoMini from "../images/kuponoacres2.png";
import kuponoLeaf from "../images/leaf.png";
import rsi1 from "../images/rsi1.png";
import rsi2 from "../images/rsi2.png";
import rsi3 from "../images/rsi3.png";
import rsiBG from "../images/rsiBG.jpg";
import gear from "../images/gear.png";
import smallGear from "../images/smallgear.png";
import ProjectCard from "./ProjectCard.component";
import projectsData from "./projectsData";

import {
  useKuponoLarge,
  useRSILarge,
  getRSIParams,
  getSlidingParams,
  getBGParams,
} from "./utilities/motions.utils";
import useScreenSize from "./utilities/screenSize.utils";
import useGearAnimation from "./utilities/useGear.utils";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

import "./Projects.styles.scss";

const Projects = ({ currentPage, onNavigate }) => {
  const [changeZ, setChangeZ] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [wasZero, setWasZero] = useState(false);
  const { scrollY } = useScroll();
  const screenSize = useScreenSize();

  // For up button back to 4th (opener) page
  const handleUpClick = () => {
    onNavigate(4);
  };

  // Changes projects z-index but allows page 4 exit animation
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
      console.log("ScrollY value:", latest);

      //For back button drop down
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

  // KUPONO MOTIONS
  const kupTopline = useTransform(scrollY, [0, 100], ["0%", "100%"]);
  const kupBottomline = useTransform(scrollY, [0, 100], ["0%", "-100%"]);
  const kupMainX = useKuponoLarge(scrollY, [0, -100, -150, -250, -350]);
  const kupMainY = useKuponoLarge(scrollY, [0, -200, -400, -600, -800]);
  const kupMiniY = useKuponoLarge(scrollY, [0, -200, -500, -700, -900]);
  const kupDescY = useKuponoLarge(scrollY, [0, -100, -200, -300, -400]);
  const kupDescX = useKuponoLarge(scrollY, [0, 100, 150, 250, 300]);

  // RSI MOTIONS
  const rsiBGColor = getBGParams(screenSize);
  const backgroundColor = useTransform(scrollY, rsiBGColor, [
    "#f3f9d2",
    "#d6e5e3",
  ]);

  const animationRSIParams = getRSIParams(screenSize);

  const photoUp = useRSILarge(scrollY, ["0rem", "-40rem", "-80rem"]);
  const photoGoRight = useRSILarge(scrollY, ["0rem", "5rem", "10rem"]);
  const photoGoLeft = useRSILarge(scrollY, ["0rem", "-5rem", "-10rem"]);

  const opacity = useTransform(
    scrollY,
    animationRSIParams.opacityRange,
    [0, 1]
  );
  const scale = useTransform(scrollY, animationRSIParams.scaleRange, [0.1, 1]);
  const zIndex = useTransform(scrollY, animationRSIParams.zIndexRange, [-1, 0]);
  const rsiMidLeft = useTransform(scrollY, animationRSIParams.rsiMidLeftRange, [
    "0%",
    "100%",
  ]);
  const rsiMidRight = useTransform(
    scrollY,
    animationRSIParams.rsiMidRightRange,
    ["0%", "-100%"]
  );

  //OTHER PROJECTS MOTIONS
  const otherProjectsParams = getSlidingParams(screenSize);
  const xTransform = useTransform(scrollY, otherProjectsParams, ["0%", "-33%"]);
  const { gearOne, gearTwo } = useGearAnimation(scrollY);

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
          animate={{ y: "100%" }}
          onClick={() => {
            handleUpClick();
          }}
        >
          ▲
        </motion.div>
      )}
      <div className="kuponoContainer">
        <motion.img
          src={kuponoLeaf}
          alt="leaf outline"
          className="kuponoLeaf"
          style={{ x: kupBottomline }}
        ></motion.img>
        <motion.div
          className="line line__upperRight"
          style={{ x: kupTopline }}
        ></motion.div>
        <div className="kupono">
          <div className="imageContainer">
            <motion.img
              src={kuponoMain}
              alt="kupono website"
              className="kuponoSiteMain"
              style={{ x: kupMainX, y: kupMainY }}
            ></motion.img>
            <motion.img
              src={kuponoMini}
              alt="kupono website cart"
              className="kuponoSiteMini"
              style={{ y: kupMiniY }}
            ></motion.img>
          </div>
          <motion.div
            className="kuponoDescContainer"
            style={{ x: kupDescX, y: kupDescY }}
          >
            <h3>
              <a
                className="project-header"
                href={"https://kuponoacres.com"}
                target="_blank"
                rel="noreferrer"
              >
                KUPONO ACRES →
              </a>
            </h3>
            <p className="kuponoDesc">
              Kupono Acres specializes in cultivating and distribution
              microgreens exclusively in Hawaii. Utilizing React and SCSS, the
              site implements media querying to provide a responsive design for
              use on phones and tablets. It also involves functional components
              and typical hooks such as useState, useEffect, useRef and
              useContext for cart management.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="line line__lowerLeft"
          style={{ x: kupBottomline }}
        ></motion.div>
      </div>

      <div className="rsi">
        <div className="rsi-gridGallery">
          <motion.img
            src={rsi1}
            alt="rsi website pic1"
            className="rsi-gridPic side"
            style={{ y: photoUp, x: photoGoRight }}
          />
          <motion.img
            src={rsi3}
            alt="rsi website mobile"
            className="rsi-gridPic middle"
            style={{ y: photoUp }}
          />
          <motion.img
            src={rsi2}
            alt="rsi website pic2"
            className="rsi-gridPic side"
            style={{ y: photoUp, x: photoGoLeft }}
          />
        </div>
        <motion.div
          className="line line__midLeft"
          style={{ x: rsiMidLeft }}
        ></motion.div>
        <motion.div
          className="line line__midRight"
          style={{ x: rsiMidRight }}
        ></motion.div>
        <motion.div className="rsi-desc" style={{ opacity, scale, zIndex }}>
          <h3 className="project-header-container">
            <a
              className="project-header"
              href="https://genanderson.github.io/rsi-react/"
              target="_blank"
              rel="noreferrer"
            >
              RALPH S. INOUYE CO., LTD →
            </a>
          </h3>
          <p>
            Developed using ReactJS, this website leverages the Framer Motion
            library to deliver a seamless and dynamic user experience. By
            integrating sticky positioning and sophisticated animations, the
            application provides an engaging and informative interface. The site
            is currently in a pre-launch phase awaiting the owners to finalize
            additional content. If you'd like to see the initial site developed
            for RSI a year ago, see below in the other notable projects section.
          </p>
        </motion.div>
        <img src={rsiBG} alt="construction background" className="rsiBG"></img>
      </div>

      <div className="otherProjects">
        <motion.img
          src={gear}
          alt="gear icon large"
          className="largeGear"
          initial={{ rotate: 0 }}
          animate={gearOne}
          transition={{ duration: 0.4 }}
        ></motion.img>
        <motion.img
          src={smallGear}
          alt="gear icon small"
          className="smallGear"
          initial={{ rotate: 0 }}
          animate={gearTwo}
          transition={{ duration: 0.4 }}
        ></motion.img>

        <div className="overFlowContainer">
          <motion.div
            className="cardFlexContainer"
            style={{ x: xTransform }}
            transition={{ type: "tween", ease: "linear" }}
          >
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
