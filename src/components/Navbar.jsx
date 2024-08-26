import React from "react";
import me from "../../public/me.png";
import resume from "../assets/resume.pdf";

const Navbar = ({ setCurrentStage }) => {
  return (
    <>
      <div className="navigator desktop">
        <div className="about-card">
          <div className="avatar">
            <img src={me} />
          </div>
          <p>Abhishek Kumar Rana</p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Delhi, India
          </p>
        </div>
        <div className="nav-card">
          <p className="nav-items" onClick={() => setCurrentStage(1)}>
            About
          </p>
          <p className="nav-items" onClick={() => setCurrentStage(2)}>
            Skills
          </p>
          <p className="nav-items" onClick={() => setCurrentStage(3)}>
            Project
          </p>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-rana"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in" title="LinkedIn"></i>
          </a>
          <a href="https://github.com/rana-ji" target="_blank">
            <i className="fa-brands fa-github" title="Github"></i>
          </a>
          <a href={resume} download="Abhishek_Kumar_Rana.pdf">
            <i className="fa-solid fa-file"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
