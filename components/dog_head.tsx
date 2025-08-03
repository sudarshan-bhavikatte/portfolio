'use client';

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function DogModel({ mouse }: { mouse: { x: number; y: number } }) {
  const gltf = useGLTF('/models/dog_head.glb');
  const ref = useRef<THREE.Object3D>(null);

  
useFrame(() => {
  if (ref.current) {
    ref.current.rotation.y = mouse.x * 0.5;        // horizontal
    ref.current.rotation.x = -mouse.y * 0.5;       // fixed: vertical tilt
  }
});

  return <primitive ref={ref} object={gltf.scene} scale={0.2} />;
}

export default function DogViewer() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
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
        {/* Remove orbit controls to let mouse-follow take over */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
