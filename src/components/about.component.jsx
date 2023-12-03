import "./about.styles.scss";

const About = () => {
  return (
    <div className="AboutContainer">
      <div className="skillsContainer">
        <div className="skill-box">
          <span className="title">HTML5</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Javascript</span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">SCSS</span>
          <div className="skill-bar">
            <span className="skill-per scss">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">React</span>
          <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">NextJS</span>
          <div className="skill-bar">
            <span className="skill-per nextjs">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">NodeJS</span>
          <div className="skill-bar">
            <span className="skill-per nodejs">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Typescript</span>
          <div className="skill-bar">
            <span className="skill-per typescript">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">MySQL</span>
          <div className="skill-bar">
            <span className="skill-per typescript">
              <span className="tooltip">45%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">MongoDB</span>
          <div className="skill-bar">
            <span className="skill-per mongodb">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Firebase</span>
          <div className="skill-bar">
            <span className="skill-per firebase">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="aboutTextBox">
        <p>
          My journey started with self-directed learning back in 2021. I delved
          into various online courses and tutorials to grasp the fundamentals of
          web development and from there, created a couple of professional-grade
          websites for colleagues. I relished in the creative process and
          decided to fortify what I'd learned by enrolling in a boot camp. This
          immersive experience not only expanded my technical skills but also
          provided a deeper understanding of the intricacies within the coding
          world. I hope to one day have the opportunity to make my place in this
          industry.
        </p>
      </div>
    </div>
  );
};

export default About;
