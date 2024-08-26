import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

import skyScene from "../assets/3d/new-sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = () => {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.13 * delta;
    skyRef.current.rotation.x += 0.13 * delta;
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
