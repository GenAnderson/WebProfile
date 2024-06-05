import "./ProjectCard.styles.scss";

const ProjectCard = ({ project }) => {
  const { id, name, link, img, desc, stack } = project;

  return (
    <div className="projectCard" key={id}>
      <a href={link} target="_blank" rel="noreferrer" className="projectLink">
        <h3 className="projectTitle">{name}</h3>
        <img src={img} alt="my chatty app"></img>
        <p>{desc}</p>
        <div className="techStack">
          {stack.map((item, index) => (
            <span key={index} className="stackItem">
              {item}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
