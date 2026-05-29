import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GemModel = ({ scrollY, isMobile, isTablet }) => {
  const { scene } = useGLTF('/models/gem.glb');
  const gemRef = useRef();

  useFrame((state, delta) => {
    if (!gemRef.current || !scrollY) return;

    // 1. Calculate Scroll Progress (0 to 1)
    const y = scrollY.get();
    const progress = Math.min(Math.max(y / 800, 0), 1); // Clamp between 0 and 1

    // 2. Map 3D Viewport Dimensions
    const vWidth = state.viewport.width;
    const vHeight = state.viewport.height;

    // 3. Target Coordinates Equivalent to 2D CSS Transforms
    // CSS xOffset mapped to 3D Viewport Width
    let targetX = 0;
    if (!isMobile) {
       targetX = isTablet ? -0.20 * vWidth : -0.25 * vWidth;
    }

    // CSS yOffset mapped to 3D Viewport Height (CSS -vh moves element UP, which is +Y in 3D)
    let startY = 0;
    let endY = 0;
    if (isMobile) {
      startY = 0.10 * vHeight; // Matches CSS -10vh
      endY = 0.25 * vHeight;   // Matches CSS -25vh
    } else {
      startY = 0.05 * vHeight; // Matches CSS -5vh
      endY = 0;
    }

    // CSS Scale applied as a multiplier to base scale (32)
    let startScaleMult = isMobile ? 0.75 : (isTablet ? 0.85 : 1);
    let endScaleMult = isMobile ? 0.6 : (isTablet ? 0.7 : 0.75);

    // 4. Linear Interpolation of position based on scroll
    const currentX = THREE.MathUtils.lerp(0, targetX, progress);
    const currentY = THREE.MathUtils.lerp(startY, endY, progress);
    const currentScaleMult = THREE.MathUtils.lerp(startScaleMult, endScaleMult, progress);

    // 5. Synchronize with the 2D Orbital Ring Float Animation
    // The SVGs use: animate={{ y: [-15, 15, -15] }} over 6 seconds
    // -15px means moving UP (which is +Y in Three.js).
    const floatTime = state.clock.elapsedTime;
    // Cosine wave starts at peak (-1 to 1). We want it to mimic the CSS keyframes.
    // period = 6s, so freq = Math.PI / 3
    const floatPx = -15 * Math.cos(floatTime * (Math.PI / 3)); 
    // Convert float pixel value to 3D unit offset
    const float3D = -(floatPx / state.size.height) * vHeight; 

    // 6. Apply Transforms
    gemRef.current.scale.setScalar(32 * currentScaleMult);
    gemRef.current.position.x = currentX;
    gemRef.current.position.y = 0.3 + currentY + float3D; // Base 0.3 + scroll + float

    // 7. Cinematic Rotation
    gemRef.current.rotation.y += delta * 0.2;
    gemRef.current.rotation.x = 0.1; // Base tilt
  });

  return (
    <primitive 
      ref={gemRef} 
      object={scene} 
      // Base scale/position handled dynamically in useFrame
    />
  );
};

const GemScene = ({ scrollY, isMobile, isTablet }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]} // Optimize pixel ratio to prevent rendering lag on high-DPI
      className="w-full h-full pointer-events-auto"
    >
      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#2563EB" />
      <directionalLight position={[0, -10, 5]} intensity={0.5} color="#D4AF37" />
      
      <Environment preset="city" />

      <Suspense fallback={null}>
        <GemModel scrollY={scrollY} isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
    </Canvas>
  );
};

// Preload to avoid pop-in
useGLTF.preload('/models/gem.glb');

export default React.memo(GemScene);
