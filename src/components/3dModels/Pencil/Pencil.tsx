"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Object3D, Vector3 } from "three";
import styles from "./Pencil.module.css";

const PencilModel: React.FC = () => {
  const { scene } = useGLTF("/3dmodels/pencil/scene.gltf");
  const ref = useRef<Object3D>(null);
  const position = new Vector3(0, -1.7, 0);

  return (
    <primitive ref={ref} object={scene} dispose={null} position={position} />
  );
};

export const Pencil: React.FC = () => {
  return (
    <div className={`w-full h-full ${styles["slide-in"]}`}>
      <Canvas camera={{ position: [0, 15, 20], fov: 9 }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[0, 10, 0]} intensity={2} />
        <directionalLight position={[0, -10, 0]} intensity={2.6} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          rotateSpeed={1}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <PencilModel />
      </Canvas>
    </div>
  );
};
