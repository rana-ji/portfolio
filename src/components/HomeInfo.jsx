import React, { useState, useEffect } from "react";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";

const renderContent = {
  1: <AboutSection />,
  2: <SkillsSection />,
  3: <ProjectsSection />,
};

const HomeInfo = ({ currentStage }) => {
  const [currentContent, setCurrentContent] = useState(
    renderContent[currentStage]
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);

    const timeoutId = setTimeout(() => {
      setCurrentContent(renderContent[currentStage]);
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [currentStage]);

  return (
    <div className={`content ${isVisible ? "visible" : "hidden"}`}>
      {currentContent}
    </div>
  );
};

export default HomeInfo;
