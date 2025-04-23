"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3, Object3D } from "three";

const PencilModel: React.FC = () => {
  const { scene } = useGLTF("/3dmodels/pencil.glb");
  const ref = useRef<Object3D>(null);
  const [position] = useState(() => new Vector3(0, -3, 0));
  const targetPosition = new Vector3(0, -1.8, 0);
  const animationSpeed = 0.05;

  useFrame(() => {
    if (ref.current) {
      ref.current.position.lerp(targetPosition, animationSpeed);
      console.log(position);
    }
  });

  return <primitive object={scene} dispose={null} position={position} />;
};

export const Pencil: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 15, 20], fov: 11 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.1} />
        <Environment preset="sunset" background={false} />
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          rotateSpeed={1}
          autoRotateSpeed={Math.PI / 2} // Ajusta la velocidad de rotación aquí (radianes por segundo)
          minPolarAngle={Math.PI / 2} // Fija el ángulo vertical mínimo (90 grados - mirando desde arriba)
          maxPolarAngle={Math.PI / 2} // Fija el ángulo vertical máximo (90 grados - mirando desde arriba)
        />
        <PencilModel />
      </Canvas>
    </div>
  );
};

export default Pencil;
