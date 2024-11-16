"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Objects } from "./components/Objects";


// const world = new CANNON.World({
//   gravity: new CANNON.Vec3(0, -9.82, 0)
// });

export default function Home() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 20, -20], fov: 90 }}
      shadows
    >
      <color attach={'background'} args={['lightblue']}/>
      <Suspense fallback={null}>
        <Physics debug>
          <Objects/>
        </Physics>
      </Suspense>
    </Canvas>
  );
}
