import Main from "./components/Main.component.jsx";
import About from "./components/About.component.jsx";
import Skills from "./components/Skills.component.jsx";
import Opener from "./components/Opener.component.jsx";
import Projects from "./components/projects/Projects.component.jsx";

import { useState } from "react";

import "./App.scss";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let touchStartY = 0;
  let touchEndY = 0;

  const handleWheel = (e) => {
    if (currentPage < 5) {
      if (e.deltaY > 10 && currentPage < 5) {
        setCurrentPage(currentPage + 1);
      } else if (e.deltaY < -10 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleTouchMove = (e) => {
    touchEndY = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = () => {
    if (touchEndY < touchStartY && currentPage < 5) {
      // Swipe up and move to the next page if not on page 5
      setCurrentPage(currentPage + 1);
    }
    // No swipe down allowed from page 5
    else if (touchEndY > touchStartY && currentPage > 1 && currentPage < 5) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className="app-container"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
