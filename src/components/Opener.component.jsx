import { easeInOut, motion } from "framer-motion";
import "./Opener.styles.scss";

const Opener = ({ currentPage }) => {
  const openUp = currentPage >= 5 ? "open-up" : "";
  const openDown = currentPage >= 5 ? "open-down" : "";

  const scale = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    scale: {
      opacity: 1,
      scale: 1.5,
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
  };

  const Xaxis = {
    initial: {
      x: "0%",
    },

    initialHidden: {
      scaleX: 0,
      originX: 0,
      x: "0%",
    },
    move1goLeft: {
      scaleX: currentPage === 2 ? "-100%" : currentPage >= 4 ? "100%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
    move1goRight: {
      scaleX: currentPage === 2 ? "100%" : currentPage >= 4 ? "0%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },

    move1HideLeft: {
      x: currentPage >= 2 ? "-100%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
    move1HideRight: {
      x: currentPage >= 2 ? "100%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
  };

  const Yaxis = {
    initial: {
      y: "0",
    },

    initialHidden: {
      scaleY: 0,
      originX: 0,
      y: "0%",
    },
    move1goDown: {
      y: currentPage === 2 ? "200%" : currentPage >= 4 ? "-200%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
    move1goUp: {
      y: currentPage === 2 ? "-100%" : currentPage >= 4 ? "-200%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
    move2goDown: {
      y: currentPage >= 3 ? "-200%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
    move2goUp: {
      y: currentPage >= 3 ? "100%" : "0%",
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="opener">
      <div className={`panel panel__left ${openDown}`}>
        <motion.div
          className="borderY leftabs"
          variants={Yaxis}
          initial="initial"
          animate="move2goDown"
        ></motion.div>
        <motion.div
          className="borderX upabs"
          variants={Xaxis}
          initial="initial"
          animate="move1HideLeft"
        ></motion.div>
        <motion.div
          className="borderX downabs"
          variants={Xaxis}
          initial="initial"
          animate="move1HideLeft"
        ></motion.div>
      </div>

      <div className={`panel panel__middle ${openUp}`}>
        <motion.div
          className="borderY rightabs"
          variants={Yaxis}
          initial="initial"
          animate="move1goUp"
        ></motion.div>
        <motion.div
          className="borderY leftabs"
          variants={Yaxis}
          initial="initial"
          animate="move1goDown"
        ></motion.div>
        <motion.div
          className="borderX upabsGoLeft"
          variants={Xaxis}
          initial="initialHidden"
          animate="move1goLeft"
        ></motion.div>
        <motion.div
          className="borderX downabs"
          variants={Xaxis}
          initial="initialHidden"
          animate="move1goRight"
        ></motion.div>

        <motion.h1
          className="openerHeading"
          variants={scale}
          initial="initial"
          animate={currentPage === 4 ? "scale" : ""}
        >
          PROJECTS
        </motion.h1>
        <div className="scrollDown">
          <p className="scrollDown__text">scroll down</p>
          <p>▼</p>
          <p>▼</p>
        </div>
      </div>

      <div className={`panel panel__right  ${openDown}`}>
        <motion.div
          className="borderY rightabs downabs"
          variants={Yaxis}
          initial="initial"
          animate="move2goUp"
        ></motion.div>

        <motion.div
          className="borderX upabs"
          variants={Xaxis}
          initial="initial"
          animate="move1HideRight"
        ></motion.div>
        <motion.div
          className="borderX downabs"
          variants={Xaxis}
          initial="initial"
          animate="move1HideRight"
        ></motion.div>
      </div>
    </div>
  );
};

export default Opener;
