import Main from "./components/Main.component.jsx";
import About from "./components/About.component.jsx";
import Skills from "./components/Skills.component.jsx";
import Opener from "./components/Opener.component.jsx";
import Projects from "./components/Projects.component.jsx";

import { useState } from "react";

import "./App.scss";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleWheel = (e) => {
    if (currentPage < 5) {
      if (e.deltaY > 10 && currentPage < 5) {
        setCurrentPage(currentPage + 1);
      } else if (e.deltaY < -10 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container" onWheel={handleWheel}>
      <div className="circles-container">
        <Main currentPage={currentPage} />
        <About currentPage={currentPage} />
        <Skills currentPage={currentPage} />
        <Opener currentPage={currentPage} />
      </div>
      <Projects currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
