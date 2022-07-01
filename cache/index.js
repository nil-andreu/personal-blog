import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";

const FrontPage = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 20 }}
      style={{
        backgroundColor: "#111a21",
        width: "100vw",
        height: "100vh"
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <Model position={[0, -1, 1]} />
      </Suspense>
    </Canvas>
  );
};

export default FrontPage;
