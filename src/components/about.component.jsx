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
          My background includes 8 years in project management, where I honed my
          ability to communicate effectively, think critically, and prioritize
          tasks to meet deadlines. I became highly resourceful in finding
          solutions and optimizing workflows, ensuring that projects stayed on
          track even in challenging circumstances. I pivoted to tech about three
          years ago and have relished everything I've learned since.
        </p>

        <p>
          Currently I'm working with a team builing a SaaS application that
          leverages Nextjs, SQL, and typescript. We hope to have our product to
          market by 2026.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
