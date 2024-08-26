import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import HomeInfo from "../components/HomeInfo";
import Navbar from "../components/Navbar";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);

  const handleMobMenu = () => {
    const menu = document.querySelector(".navigator");
    console.log("menu clicked", menu);
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
    document.addEventListener("click", performClickAction);
    return () => {
      document.removeEventListener("click", performClickAction);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <Navbar setCurrentStage={setCurrentStage} />
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && (
          <HomeInfo
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        )}
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000"
            intensity={1}
          />
          <Sky />
        </Suspense>
      </Canvas>
      <div className="mobile" onClick={handleMobMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </section>
  );
};

export default Home;
