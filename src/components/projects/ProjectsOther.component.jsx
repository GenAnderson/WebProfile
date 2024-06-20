import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import projectsData from "./projectsOtherData";
import ProjectCard from "./ProjectCard.component";

import gear from "../../images/gear.png";
import smallGear from "../../images/smallgear.png";

import "./ProjectsOther.styles.scss";

const ProjectsOther = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cardsInView, setCardsInView] = useState([]);
  const [changeCardZ, setChangeCardZ] = useState(null);
  const cardRefs = useRef([]);
  const otherProjectsRef = useRef(null);

  const gearOneControl = useAnimation();
  const gearTwoControl = useAnimation();
  const { ref: gearOneRef, inView: gearOneInView } = useInView({
    threshold: 0.1,
  });
  const { ref: gearTwoRef, inView: gearTwoInView } = useInView({
    threshold: 0.2,
  });

  const [rotation, setRotation] = useState("");
  const [removeArrow, setRemoveArrow] = useState("");

  const rotateLeft = () => {
    if (rotation === "") {
      setRotation("rotateLeft");
      setRemoveArrow("removeLeft");
    } else if (rotation === "rotateRight") {
      setRotation("");
      setRemoveArrow("");
    }
  };

  const rotateRight = () => {
    if (rotation === "") {
      setRotation("rotateRight");
      setRemoveArrow("removeRight");
    } else if (rotation === "rotateLeft") {
      setRotation("");
    }
  };

  console.log("rotation: ", rotation);
  console.log("arrow: ", removeArrow);

  const animateGear = (control, inView, scrollDirection) => {
    if (inView) {
      control.start({
        rotate: scrollDirection === "down" ? [0, 90] : [0, -90],
        transition: { duration: 0.4, ease: "linear" },
      });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
    const visibleCards = [];

    animateGear(gearOneControl, gearOneInView, scrollDirection);
    animateGear(gearTwoControl, gearTwoInView, scrollDirection);
    setLastScrollY(currentScrollY);

    const otherProjectsRect = otherProjectsRef.current.getBoundingClientRect();

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const rect = card.getBoundingClientRect();
        const relativeTop = rect.top - otherProjectsRect.top;
        const relativeBottom = rect.bottom - otherProjectsRect.top;

        if (relativeTop < windowHeight && relativeBottom >= 0) {
          visibleCards.push(String(index));
        }
      }
    });

    if (otherProjectsRect.top < 1) {
      setChangeCardZ(true);
    } else {
      setChangeCardZ(false);
    }

    setCardsInView(visibleCards);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    lastScrollY,
    gearOneInView,
    gearTwoInView,
    gearOneControl,
    gearTwoControl,
    otherProjectsRef,
  ]);

  return (
    <div
      className={`otherProjects ${changeCardZ ? "zUp" : ""}`}
      ref={otherProjectsRef}
    >
      <motion.img
        ref={gearOneRef}
        src={gear}
        alt="gear icon large"
        className="largeGear"
        initial={{ rotate: 0 }}
        animate={gearOneControl}
      ></motion.img>
      <motion.img
        ref={gearTwoRef}
        src={smallGear}
        alt="gear icon small"
        className="smallGear"
        initial={{ rotate: 0 }}
        animate={gearTwoControl}
      ></motion.img>
      <div
        className={`arrow arrow__left ${
          removeArrow === "removeLeft" ? "removeArrow" : ""
        }`}
        onClick={rotateLeft}
      >
        ⟪
      </div>
      <div
        className={`arrow arrow__right ${
          removeArrow === "removeRight" ? "removeArrow" : ""
        }`}
        onClick={rotateRight}
      >
        ⟫
      </div>
      <div className={`otherProjectsContainer main`}>
        <div className={`cardContainer main cardContainer__one  ${rotation}`}>
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={cardsInView.includes(String(index))}
              cardRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
        <div
          className={`cardContainer main cardContainer__two ${
            rotation ? "back" : ""
          }`}
        >
          {projectsData.slice(3, 6).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 3}
              inView={cardsInView.includes(String(index + 3))}
              cardRef={(el) => (cardRefs.current[index + 3] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOther;
