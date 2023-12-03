import Nav from "./components/Nav.component.jsx";
import Projects from "./components/Projects.component.jsx";
import About from "./components/about.component.jsx";

import "./App.scss";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  return (
    <Container fluid className="appContainer vh-100  g-0">
      <Row className="h-100 g-0">
        <Col xs={4}>
          <Nav />
        </Col>
        <Col xs={8} className="rmvPadding g-0">
          <About />
          <Projects />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
