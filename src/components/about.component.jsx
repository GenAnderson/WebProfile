import { motion } from "framer-motion";

import "./About.styles.scss";

const About = ({ currentPage }) => {
  const motionUp = {
    initial: {
      x: "-50%",
      y: "-50%",
      rotate: 0,
    },
    move: {
      x: ["-50%", "-50%", "-50%"],
      y: ["-50%", "-130%", "-200%"],
      rotate: [0, -55, -120],
      transition: {
        duration: 0.5,
        ease: "linear",
        times: [0, 0.2, 0.4, 1],
      },
    },
  };

  const appearAbout = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    appear: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`circle circle-two`}
      initial="initial"
      variants={motionUp}
      animate={currentPage >= 3 ? "move" : ""}
    >
      <motion.div
        className="about-container"
        initial="initial"
        variants={appearAbout}
        animate={currentPage === 2 ? "appear" : ""}
      >
        <h2>About me</h2>
        <p>
          My journey started with self-directed learning back in 2021. I delved
          into various online courses and tutorials to grasp the fundamentals of
          web development and from there, created a couple of websites for
          colleagues. I relish in the creative process and fortified what I'd
          learned by enrolling in a boot camp. This not only expanded my
          technical skills but also provided a deeper understanding of the
          intricacies within the coding world. I hope to one day have the
          opportunity to make my place in this industry.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
