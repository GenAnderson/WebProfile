import { motion, useScroll, useTransform } from "framer-motion";
import { useKupono } from "../utilities/motions.utils";

import kuponoMain from "../../images/kuponoacres1.png";
import kuponoMini from "../../images/kuponoacres2.png";
import kuponoLeaf from "../../images/leaf.png";

import "./ProjectsKupono.styles.scss";

const ProjectsKupono = () => {
  const { scrollY } = useScroll();

  const kupTopline = useTransform(scrollY, [0, 100], ["0%", "100%"]);
  const kupBottomline = useTransform(scrollY, [0, 100], ["0%", "-100%"]);

  const kupMainX = useKupono(scrollY, [0, -100, -150, -250, -350]);
  const kupMainY = useKupono(scrollY, [0, -200, -400, -600, -800]);
  const kupMiniY = useKupono(scrollY, [0, -200, -500, -700, -900]);
  const kupDescY = useKupono(scrollY, [0, -100, -200, -300, -400]);
  const kupDescX = useKupono(scrollY, [0, 100, 150, 250, 300]);
  return (
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
          <a href={"https://kuponoacres.com"} target="_blank" rel="noreferrer">
            <motion.img
              src={kuponoMain}
              alt="kupono website"
              className="kuponoSiteMain"
              style={{ x: kupMainX, y: kupMainY }}
            ></motion.img>
          </a>
          <a href={"https://kuponoacres.com"} target="_blank" rel="noreferrer">
            <motion.img
              src={kuponoMini}
              alt="kupono website cart"
              className="kuponoSiteMini"
              style={{ y: kupMiniY }}
            ></motion.img>
          </a>
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
            Kupono Acres specializes in cultivating and distribution microgreens
            exclusively in Hawaii. Utilizing React and SCSS, the site implements
            media querying to provide a responsive design for use on phones and
            tablets. It also involves functional components and typical hooks
            such as useState, useEffect, useRef and useContext for cart
            management.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="line line__lowerLeft"
        style={{ x: kupBottomline }}
      ></motion.div>
    </div>
  );
};

export default ProjectsKupono;
