"use client"
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/models/soulless.glb');
  const modelRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 500, 1000], fov: 50 }}>
  <ambientLight intensity={5} />
  <directionalLight position={[5, 5, 5]} />
  <Model />
</Canvas>
  );
};

export default Scene;
