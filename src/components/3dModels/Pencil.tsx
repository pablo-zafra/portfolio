"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3, Object3D } from "three";

const PencilModel: React.FC = () => {
  const { scene } = useGLTF("/3dmodels/pencil/scene.gltf");
  const ref = useRef<Object3D>(null);
  const [position] = useState(() => new Vector3(0, -11, 0));
  const targetPosition = new Vector3(0, -1.8, 0);
  const animationSpeed = 0.05;

  useFrame(() => {
    if (ref.current) {
      ref.current.position.lerp(targetPosition, animationSpeed);
    }
  });

  return (
    <primitive ref={ref} object={scene} dispose={null} position={position} />
  );
};

export const Pencil: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 15, 20], fov: 11 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.1} />
        <Environment preset="city" background={false} />
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          rotateSpeed={1}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          // setPolarAngle={Math.PI / 2}
        />
        <PencilModel />
      </Canvas>
    </div>
  );
};

export default Pencil;
