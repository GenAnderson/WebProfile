import "./Nav.styles.scss";

const Nav = () => {
  return (
    <div className="NavContainer">
      <div>
        <div className="IntroText">
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
      <a
        href="https://github.com/GenAnderson?tab=repositories"
        className="gitHubLink"
        target="_blank"
        rel="noreferrer"
      >
        <img src="github.svg" alt="github icon" />
      </a>
    </div>
  );
};

export default Nav;
