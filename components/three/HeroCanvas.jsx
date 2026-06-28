'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Retro / synthwave wireframe grid floor that scrolls toward the camera.
// Solid line colors only, unlit basic material — no gradients, no shadows.
function GridFloor({ reduced }) {
  const ref = useRef();
  const grid = useMemo(() => {
    const g = new THREE.GridHelper(80, 80, '#4fe084', '#16623c');
    g.material.depthWrite = false;
    return g;
  }, []);

  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    // cell size is 1 (size / divisions), so wrap on 1 for a seamless loop
    ref.current.position.z = (ref.current.position.z + delta * 3) % 1;
  });

  return <primitive object={grid} ref={ref} position={[0, -1.4, 0]} />;
}

// Floating low-poly wireframe solids (the "game object" feel).
function FloatingSolids({ reduced }) {
  const group = useRef();
  const solids = useMemo(
    () => [
      { p: [-3.4, 1.3, -3], r: 0.9, geo: 'ico', c: '#4fe084', s: 1 },
      { p: [3.6, 2.4, -5], r: 0.7, geo: 'octa', c: '#e9fff2', s: 0.8 },
      { p: [0.4, 3.1, -8], r: 1.1, geo: 'ico', c: '#4fe084', s: 0.6 },
      { p: [-2.2, 2.7, -7], r: 0.6, geo: 'tetra', c: '#4fe084', s: 1.2 },
      { p: [4.4, 0.9, -2.5], r: 0.55, geo: 'octa', c: '#4fe084', s: 1 },
    ],
    []
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.children.forEach((m, i) => {
      if (reduced) return;
      m.rotation.x += delta * 0.25 * (i % 2 ? 1 : -1);
      m.rotation.y += delta * 0.35;
    });
  });

  return (
    <group ref={group}>
      {solids.map((s, i) => (
        <mesh key={i} position={s.p}>
          {s.geo === 'ico' && <icosahedronGeometry args={[s.r, 0]} />}
          {s.geo === 'octa' && <octahedronGeometry args={[s.r, 0]} />}
          {s.geo === 'tetra' && <tetrahedronGeometry args={[s.r, 0]} />}
          <meshBasicMaterial color={s.c} wireframe />
        </mesh>
      ))}
    </group>
  );
}

function Rig({ reduced }) {
  const { camera } = useThree();
  useFrame((state) => {
    camera.lookAt(0, 0.3, -8);
    if (reduced) return;
    const tx = state.pointer.x * 1.4;
    const ty = 2.2 + state.pointer.y * 0.5;
    camera.position.x += (tx - camera.position.x) * 0.04;
    camera.position.y += (ty - camera.position.y) * 0.04;
  });
  return null;
}

export default function HeroCanvas() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  return (
    <Canvas
      camera={{ position: [0, 2.2, 9], fov: 62 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <GridFloor reduced={reduced} />
      <FloatingSolids reduced={reduced} />
      <Rig reduced={reduced} />
    </Canvas>
  );
}
