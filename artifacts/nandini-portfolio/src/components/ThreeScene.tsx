import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from "@react-three/drei";
import * as THREE from "three";
import React from "react";

// Error boundary for WebGL context failures
class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function DistortSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#f59e0b"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive="#92400e"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingRing({ radius, speed, color, thickness }: { radius: number; speed: number; color: string; thickness: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = state.clock.elapsedTime * speed;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Torus args={[radius, thickness, 16, 100]}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </Torus>
    </group>
  );
}

function FloatingGeometry() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    return pts;
  }, []);

  const positions = useMemo(() => {
    const arr = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [points]);

  const dotRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!dotRef.current) return;
    dotRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={dotRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#f59e0b" size={0.03} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

// CSS fallback for when WebGL is not available
function HeroFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Animated circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${(i + 1) * 120}px`,
              height: `${(i + 1) * 120}px`,
              borderColor: i % 2 === 0 ? 'hsl(38 92% 50% / 0.2)' : 'hsl(280 60% 65% / 0.15)',
              animation: `spin ${8 + i * 3}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            }}
          />
        ))}
        {/* Central orb */}
        <div
          className="w-32 h-32 rounded-full float"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(42 95% 65%), hsl(38 92% 50%), hsl(280 60% 65%))',
            boxShadow: '0 0 80px hsl(38 92% 50% / 0.4), 0 0 160px hsl(38 92% 50% / 0.2)',
          }}
        />
      </div>
      {/* Floating dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            backgroundColor: i % 3 === 0 ? 'hsl(38 92% 50%)' : i % 3 === 1 ? 'hsl(280 60% 65%)' : 'hsl(45 30% 95%)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.3,
            animation: `float ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export function HeroThreeScene() {
  return (
    <ThreeErrorBoundary fallback={<HeroFallback />}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ failIfMajorPerformanceCaveat: false }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#f59e0b" />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />
          <pointLight position={[0, 0, 3]} intensity={1.5} color="#fbbf24" />

          <Stars radius={80} depth={60} count={3000} factor={4} saturation={0} fade speed={0.5} />

          <DistortSphere />
          <OrbitingRing radius={2.2} speed={0.3} color="#f59e0b" thickness={0.02} />
          <OrbitingRing radius={2.8} speed={-0.2} color="#a855f7" thickness={0.015} />
          <OrbitingRing radius={3.3} speed={0.15} color="#fbbf24" thickness={0.01} />
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </ThreeErrorBoundary>
  );
}

function RotatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
  });

  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#f59e0b"
          wireframe
          emissive="#f59e0b"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function MiniOrbFallback({ color }: { color: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-20 h-20 rounded-full float"
        style={{
          background: `radial-gradient(circle at 30% 30%, white, ${color})`,
          boxShadow: `0 0 40px ${color}60`,
        }}
      />
    </div>
  );
}

export function MiniThreeScene({ color = "#f59e0b" }: { color?: string }) {
  return (
    <ThreeErrorBoundary fallback={<MiniOrbFallback color={color} />}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ failIfMajorPerformanceCaveat: false }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 2, 2]} intensity={1.5} color={color} />
          <RotatingIcosahedron />
        </Suspense>
      </Canvas>
    </ThreeErrorBoundary>
  );
}
