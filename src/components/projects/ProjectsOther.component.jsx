import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import gear from "../../images/gear.png";
import smallGear from "../../images/smallgear.png";

import projectsData from "./projectsOtherData";
import ProjectCard from "./ProjectCard.component";
import useGearAnimation from "../utilities/useGear.utils";
import { useScreenSizeSlider } from "../utilities/screenSize.utils";

import "./ProjectsOther.styles.scss";

const ProjectsOther = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [slideAnimation, setSlideAnimation] = useState(false);
  const ref = useRef(null);

  const sliderScreenSize = useScreenSizeSlider();
  console.log(sliderScreenSize);

  const xTransform = useTransform(
    scrollYProgress,
    slideAnimation ? [0.75, 1] : [0.8, 1],
    sliderScreenSize
    // ["0%", "-99%"]
  );

  console.log(slideAnimation);

  const { gearOne, gearTwo } = useGearAnimation(scrollY);

  // for other projects
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          setSlideAnimation(true);
        } else setSlideAnimation(false);
      },
      { threshold: 1, rootMargin: "0px 0px -5px 0px" } // Adjust threshold as needed
    );

    const sliderRef = ref.current;

    if (sliderRef) {
      observer.observe(sliderRef);
    }

    return () => {
      if (sliderRef) {
        observer.unobserve(sliderRef);
      }
    };
  }, []);

  return (
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

      <div className="overFlowContainer" ref={ref}>
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
  );
};

export default ProjectsOther;
