"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, PresentationControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function OrganicMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle baseline rotation
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      // Interactive rotation based on mouse pointer
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);

      // Scale animation lerp
      const targetScale = clicked ? 1.3 : hovered ? 1.05 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <icosahedronGeometry args={[2, 16]} />
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={0.8}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={0.5}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          attenuationDistance={1}
          attenuationColor="#ffffff"
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#d4d0c8" />
        <Environment preset="city" />
        <PresentationControls 
          global 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <OrganicMesh />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
