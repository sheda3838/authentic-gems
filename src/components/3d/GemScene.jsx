import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

const GemModel = ({ scrollY, isMobile, isTablet, windowHeight }) => {
  const { nodes } = useGLTF("/models/gem.glb");
  const gemRef = useRef();

  useFrame((state, delta) => {
    if (!gemRef.current || !scrollY || !windowHeight) return;

    const y = scrollY.get();

    let progress1 = 0;
    let progress2 = 0; 

    if (y <= windowHeight) {
      progress1 = y / windowHeight;
    } else {
      progress1 = 1;
      progress2 = Math.min((y - windowHeight) / windowHeight, 1);
    }

    const vWidth = state.viewport.width;
    const vHeight = state.viewport.height;

    const targetX1 = isMobile ? 0 : isTablet ? -0.2 * vWidth : -0.25 * vWidth;
    const targetX2 = 0;

    let currentX = 0;
    if (progress2 === 0) {
      currentX = THREE.MathUtils.lerp(0, targetX1, progress1);
    } else {
      currentX = THREE.MathUtils.lerp(targetX1, targetX2, progress2);
    }

    const startY = isMobile ? 0.02 * vHeight : 0.05 * vHeight;
    const endY1 = isMobile ? 0.25 * vHeight : 0;
    const endY2 = isMobile ? 0.25 * vHeight : -0.1 * vHeight; 

    let currentY = 0;
    if (progress2 === 0) {
      currentY = THREE.MathUtils.lerp(startY, endY1, progress1);
    } else {
      currentY = THREE.MathUtils.lerp(endY1, endY2, progress2);
    }

    const startScaleMult = isMobile ? 0.75 : isTablet ? 0.85 : 1;
    const midScaleMult = isMobile ? 0.6 : isTablet ? 0.7 : 0.75;
    const endScaleMult = isMobile ? 0.65 : isTablet ? 0.75 : 0.85;

    let currentScaleMult = 1;
    if (progress2 === 0) {
      currentScaleMult = THREE.MathUtils.lerp(
        startScaleMult,
        midScaleMult,
        progress1,
      );
    } else {
      currentScaleMult = THREE.MathUtils.lerp(
        midScaleMult,
        endScaleMult,
        progress2,
      );
    }

    const floatTime = state.clock.elapsedTime;
    const floatPx = -15 * Math.cos(floatTime * (Math.PI / 3));
    const float3D = -(floatPx / state.size.height) * vHeight;

    gemRef.current.scale.setScalar(2.4 * currentScaleMult);
    gemRef.current.position.x = currentX;
    gemRef.current.position.y = 0.3 + currentY + float3D;

    gemRef.current.rotation.y += delta * 0.2;
    gemRef.current.rotation.x = 0.1;
  });

  return (
    <mesh ref={gemRef} geometry={nodes.Cylinder.geometry}>
      <MeshTransmissionMaterial
        backside
        backsideThickness={1}
        thickness={1}
        chromaticAberration={0.06}
        anisotropy={0.1}
        ior={2.4}
        color="#ffffff"
        metalness={0.3}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={4.0}
        resolution={1024}
        transmission={0.9}
        roughness={0}
        background={new THREE.Color("#040610")} // CRITICAL: Fixes invisibility on transparent canvas
      />
    </mesh>
  );
};

const GemScene = ({ scrollY, isMobile, isTablet, windowHeight }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      className="w-full h-full pointer-events-auto"
    >
      {/* Extremely subtle ambient to not overpower HDR */}
      <ambientLight intensity={0.1} />
      {/* We strip out the harsh directional lights so the HDRI does 100% of the cinematic reflections */}
      <Environment files="/hdr/luxury_studio.hdr" background={false} />

      <Suspense fallback={null}>
        <GemModel
          scrollY={scrollY}
          isMobile={isMobile}
          isTablet={isTablet}
          windowHeight={windowHeight}
        />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/models/gem.glb");

export default React.memo(GemScene);
