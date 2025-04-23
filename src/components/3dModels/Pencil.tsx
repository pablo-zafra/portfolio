"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";
import { Suspense } from "react";

// Componente interno que contiene el modelo 3D
const PencilModel: React.FC = () => {
  const { nodes, materials } = useGLTF("/3dmodels/pencil.glb");

  return (
    <group dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={(nodes.Cylinder_Material001_0 as Mesh).geometry}
          material={materials["Material.001"]}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
          scale={70}
        />
      </group>
    </group>
  );
};

export const Pencil: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={<div>Cargando modelo...</div>}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="sunset" background={false} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <PencilModel />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Pencil;
