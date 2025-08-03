'use client';

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function DogModel({ mouse }: { mouse: { x: number; y: number } }) {
  const gltf = useGLTF('/models/dog_head.glb');
  const ref = useRef<THREE.Object3D>(null);

  useFrame(({ camera }) => {
    if (ref.current) {
      // Convert mouse coords to 3D world position
      const ndc = new THREE.Vector3(mouse.x, mouse.y, 0.5); // z = 0.5 for halfway between near/far planes
      ndc.unproject(camera);

      ref.current.lookAt(ndc);
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={0.2} />;
}

export default function DogViewer() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1; // Y axis is flipped in WebGL
    setMouse({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-24 h-24">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <DogModel mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
