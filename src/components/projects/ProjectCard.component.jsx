import React from "react";
import { motion } from "framer-motion";
import "./ProjectCard.styles.scss";

const ProjectCard = ({ project, index, inView, cardRef }) => {
  const { id, name, link, img, desc, stack } = project;

  return (
    <motion.div
      key={id}
      ref={cardRef}
      data-id={index}
      className="projectCard"
      animate={{ scale: inView ? 1 : 0 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.2 }}
    >
      <a href={link} target="_blank" rel="noreferrer" className="projectLink">
        <h3 className="projectTitle">{name}</h3>
        <img src={img} alt={name}></img>
        <p>{desc}</p>
        <div className="techStack">
          {stack.map((item, index) => (
            <span key={index} className="stackItem">
              {item}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
