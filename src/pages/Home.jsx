import React, { useEffect, useState } from "react";
import HomeInfo from "../components/HomeInfo";
import Navbar from "../components/Navbar";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [meteorStyles, setMeteorStyles] = useState([]);
  const [number] = useState(100);

  const handleMobMenu = () => {
    const menu = document.querySelector(".navigator");
    if (menu) {
      menu.classList.toggle("show");
    }
  };

  const performClickAction = (e) => {
    if (e.target.classList.contains("nav-items")) {
      const menu2 = document.querySelector(".navigator");
      if (menu2) {
        menu2.classList.toggle("show");
      }
    }
  };

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => {
      const size = Math.random() * 5 + 0.5;
      return {
        top: `${Math.floor(Math.random() * (window.innerHeight - 50))}px`,
        left: `${Math.floor(Math.random() * window.innerWidth)}px`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random() * 1 + 0.2}s`,
        animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
      };
    });
    setMeteorStyles(styles);
  }, [number]);

  useEffect(() => {
    document.addEventListener("click", performClickAction);
    return () => {
      document.removeEventListener("click", performClickAction);
    };
  }, []);

  return (
    <section className="w-full h-screen relative bg-black overflow-hidden">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className="pointer-events-none absolute rotate-[215deg] animate-meteor rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]"
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
      <Navbar setCurrentStage={setCurrentStage} />
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && (
          <HomeInfo
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        )}
      </div>
      <div className="mobile" onClick={handleMobMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </section>
  );
};

export default Home;
