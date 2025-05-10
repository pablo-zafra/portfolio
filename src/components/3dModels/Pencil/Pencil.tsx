"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
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
      <Canvas dpr={[1, 2]} camera={{ position: [0, 15, 20], fov: 9 }}>
        {/* <ambientLight intensity={0.9} />
        <directionalLight position={[3, -10, -3]} intensity={1.6} />
        <directionalLight position={[-3, 10, 3]} intensity={0.9} /> */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[-3, 10, -2]} intensity={0.6} />
        <directionalLight position={[5, 10, 10]} intensity={0.9} />
        <directionalLight position={[0, -5, 0]} intensity={3} />
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

export default Pencil;
