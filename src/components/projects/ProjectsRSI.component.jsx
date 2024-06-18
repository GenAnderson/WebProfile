import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import rsi1 from "../../images/rsi1.png";
import rsi2 from "../../images/rsi2.png";
import rsi3 from "../../images/rsi3.png";
import rsiBG from "../../images/rsiBG.jpg";

import {
  getRSIPhotoUpValues,
  getRSIPhotoLeftValues,
  getRSIPhotoRightValues,
} from "../utilities/motions.utils";

import {
  useScreenSizeRSIup,
  useScreenSizeRSISides,
} from "../utilities/screenSize.utils";

import "./ProjectsRSI.styles.scss";

const ProjectsRSI = ({ onSectionInView }) => {
  const [rsiDesc, setRsiDesc] = useState(false);
  const [rsiPics, setRsiPics] = useState(null);
  const { scrollYProgress } = useScroll();
  const screenSizeRSIup = useScreenSizeRSIup();
  const screenSizeRSIsides = useScreenSizeRSISides();
  const rsiRef = useRef(null);

  const photoUpValues = getRSIPhotoUpValues(screenSizeRSIup);
  const photoRightValues = getRSIPhotoRightValues(screenSizeRSIsides);
  const photoLeftValues = getRSIPhotoLeftValues(screenSizeRSIsides);

  const movePhotoUp = useTransform(
    scrollYProgress,
    [0, 0.2],
    rsiPics ? photoUpValues : [" ", " "]
  );

  const movePhotoRight = useTransform(
    scrollYProgress,
    [0, 0.2],
    photoRightValues
  );
  const movePhotoLeft = useTransform(
    scrollYProgress,
    [0, 0.2],
    photoLeftValues
  );

  const rsiDescAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      zIndex: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const lineVariant = {
    hidden: {
      x: "0%",
    },
    leftLineVisible: {
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    rightLineVisible: {
      x: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const picObserver = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setRsiPics(isIntersecting);
        onSectionInView(isIntersecting);
      },
      { threshold: 0.1 }
    );
    const descObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRsiDesc(true);
        } else setRsiDesc(false);
      },
      { threshold: 0.81 }
    );

    const currentRef = rsiRef.current;

    if (rsiRef.current) {
      descObserver.observe(currentRef);
      picObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        descObserver.unobserve(currentRef);
        picObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="rsi" ref={rsiRef}>
      <div className="rsi-gridGallery">
        <a
          href="https://genanderson.github.io/rsi-react/"
          target="_blank"
          rel="noreferrer"
          className="sidePicAnchor"
        >
          <motion.img
            src={rsi1}
            alt="rsi website pic1"
            className="rsi-gridPic side side1"
            style={{ y: movePhotoUp, x: movePhotoRight }}
          />
        </a>
        <a
          href="https://genanderson.github.io/rsi-react/"
          target="_blank"
          rel="noreferrer"
          className="midPicAnchor"
        >
          <motion.img
            src={rsi3}
            alt="rsi website mobile"
            className="rsi-gridPic middle"
            style={{ y: movePhotoUp }}
          />
        </a>
        <a
          href="https://genanderson.github.io/rsi-react/"
          target="_blank"
          rel="noreferrer"
          className="sidePicAnchor"
        >
          <motion.img
            src={rsi2}
            alt="rsi website pic2"
            className="rsi-gridPic side side2"
            style={{ y: movePhotoUp, x: movePhotoLeft }}
          />
        </a>
      </div>

      <motion.div
        className="line line__midLeft"
        variants={lineVariant}
        initial="hidden"
        animate={rsiDesc ? "leftLineVisible" : "hidden"}
      ></motion.div>
      <motion.div
        className="line line__midRight"
        variants={lineVariant}
        initial="hidden"
        animate={rsiDesc ? "rightLineVisible" : "hidden"}
      ></motion.div>

      <motion.div
        className="rsi-desc"
        variants={rsiDescAnimation}
        initial="hidden"
        animate={rsiDesc ? "visible" : "hidden"}
      >
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
  );
};

export default ProjectsRSI;
