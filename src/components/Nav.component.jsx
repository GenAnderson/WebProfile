import "./Nav.styles.scss";

const Nav = () => {
  return (
    <div className="NavContainer">
      <div>
        <div className="introText">
          <h1>Genevieve Anderson</h1>
          <p>Please call me Gen</p>
          <p>Welcome to my work profile</p>
        </div>
        <ul className="nav">
          <li className="navItem">
            <a href="#about">About</a>
          </li>
          <li className="navItem">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div className="contactLinks">
        <a
          href="mailto:genanderson78@gmail.com"
          className="contactLink"
          target="_blank"
          rel="noreferrer"
        >
          <img src="email.png" alt="github icon" />
        </a>
        <a
          href="https://github.com/GenAnderson?tab=repositories"
          className="contactLink"
          target="_blank"
          rel="noreferrer"
        >
          <img src="whiteGitHub.png" alt="github icon" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
