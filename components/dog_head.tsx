'use client'

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';


function DogModel({ mouse }: { mouse: { x: number; y: number } }) {
  const gltf = useGLTF("/models/Duck.glb")
  const groupRef = useRef<THREE.Group>(null)
  const modelRef = useRef<THREE.Object3D>(null)

  useEffect(() => {
    if (modelRef.current) {
      // Try different rotation combinations to make duck face forward
      // Option 1: Rotate on Y-axis
      modelRef.current.rotation.y = -(Math.PI / 2 *1.175)
      modelRef.current.rotation.x = Math.PI*0.03
      modelRef.current.rotation.z = -Math.PI*0.08

      // Option 2: If that doesn't work, try rotating on X-axis too
      // modelRef.current.rotation.x = -Math.PI / 2

      // Option 3: Or try Z-axis rotation
      // modelRef.current.rotation.z = Math.PI

      console.log("Duck rotation applied:", modelRef.current.rotation)
    }
  }, [])

  useFrame(({ camera }) => {
    if (groupRef.current) {
      const ndc = new THREE.Vector3(mouse.x, mouse.y, 0.5)
      ndc.unproject(camera)

      // Store the original rotation
      const originalRotation = modelRef.current?.rotation.clone()

      // Apply lookAt to the group, not the model itself
      groupRef.current.lookAt(ndc)

      // Restore the model's local rotation
      if (modelRef.current && originalRotation) {
        modelRef.current.rotation.copy(originalRotation)
      }
    }
  })

  return (
    <group ref={groupRef} position={[-1, -1, 0]}>
      <primitive ref={modelRef} object={gltf.scene} scale={1.5} />
    </group>
  )
}export default function DogViewer() {
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
    <div className="w-50 h-50">
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
