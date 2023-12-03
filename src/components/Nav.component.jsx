import "./Nav.styles.scss";
import { Button } from "react-bootstrap";

const Nav = () => {
  return (
    <div className="NavContainer">
      <div className="IntroText">
        <h1>Genevieve Anderson</h1>
        <p>Please call me Gen</p>
        <p>Welcome to my work profile</p>
      </div>
      <ul className="nav">
        <li className="navItem">
          <a href="routes/about.jsx">About me</a>
        </li>
        <li className="navItem">
          <a href="routes/projects.jsx">Projects</a>
        </li>
      </ul>
      <Button>
        <a href="https://github.com/GenAnderson?tab=repositories">
          <img src="github.svg" alt="github icon" />
        </a>
      </Button>
    </div>
  );
};

export default Nav;
