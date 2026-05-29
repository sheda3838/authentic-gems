import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GemModel = ({ scrollY, isMobile, isTablet, windowHeight }) => {
  const { scene } = useGLTF('/models/gem.glb');
  const gemRef = useRef();

  useFrame((state, delta) => {
    if (!gemRef.current || !scrollY || !windowHeight) return;

    // 1. Calculate Scroll Progress for 2 segments
    const y = scrollY.get();
    
    let progress1 = 0; // Segment 1: Hero -> About
    let progress2 = 0; // Segment 2: About -> Certification

    if (y <= windowHeight) {
      progress1 = y / windowHeight;
    } else {
      progress1 = 1;
      progress2 = Math.min((y - windowHeight) / windowHeight, 1);
    }

    // 2. Map 3D Viewport Dimensions
    const vWidth = state.viewport.width;
    const vHeight = state.viewport.height;

    // 3. X Offset (Hero: Center -> About: Left -> Cert: Center)
    const targetX1 = isMobile ? 0 : (isTablet ? -0.20 * vWidth : -0.25 * vWidth);
    const targetX2 = 0; // Return to center

    let currentX = 0;
    if (progress2 === 0) {
      currentX = THREE.MathUtils.lerp(0, targetX1, progress1);
    } else {
      currentX = THREE.MathUtils.lerp(targetX1, targetX2, progress2);
    }

    // 4. Y Offset (CSS -vh moves element UP, which is +Y in 3D)
    const startY = isMobile ? 0.10 * vHeight : 0.05 * vHeight;
    const endY1 = isMobile ? 0.25 * vHeight : 0;
    const endY2 = isMobile ? 0.25 * vHeight : -0.10 * vHeight; // Shift down slightly on desktop

    let currentY = 0;
    if (progress2 === 0) {
      currentY = THREE.MathUtils.lerp(startY, endY1, progress1);
    } else {
      currentY = THREE.MathUtils.lerp(endY1, endY2, progress2);
    }

    // 5. Scale applied as a multiplier to base scale (32)
    const startScaleMult = isMobile ? 0.75 : (isTablet ? 0.85 : 1);
    const midScaleMult = isMobile ? 0.6 : (isTablet ? 0.7 : 0.75);
    const endScaleMult = isMobile ? 0.65 : (isTablet ? 0.75 : 0.85);

    let currentScaleMult = 1;
    if (progress2 === 0) {
      currentScaleMult = THREE.MathUtils.lerp(startScaleMult, midScaleMult, progress1);
    } else {
      currentScaleMult = THREE.MathUtils.lerp(midScaleMult, endScaleMult, progress2);
    }

    // 6. Synchronize with the 2D Orbital Ring Float Animation
    const floatTime = state.clock.elapsedTime;
    const floatPx = -15 * Math.cos(floatTime * (Math.PI / 3)); 
    const float3D = -(floatPx / state.size.height) * vHeight; 

    // 7. Apply Transforms
    gemRef.current.scale.setScalar(32 * currentScaleMult);
    gemRef.current.position.x = currentX;
    gemRef.current.position.y = 0.3 + currentY + float3D;

    // 8. Cinematic Rotation
    gemRef.current.rotation.y += delta * 0.2;
    gemRef.current.rotation.x = 0.1; 
  });

  return (
    <primitive object={scene} ref={gemRef} />
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
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#2563EB" />
      <directionalLight position={[0, -10, 5]} intensity={0.5} color="#D4AF37" />
      
      <Environment preset="city" />

      <Suspense fallback={null}>
        <GemModel scrollY={scrollY} isMobile={isMobile} isTablet={isTablet} windowHeight={windowHeight} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload('/models/gem.glb');

export default React.memo(GemScene);
