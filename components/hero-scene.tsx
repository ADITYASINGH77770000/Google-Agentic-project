"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Text3D, Environment } from "@react-three/drei"
import * as THREE from "three"

function CityBuildings() {
  const groupRef = useRef<THREE.Group>(null)

  const buildings = useMemo(() => {
    const buildingData = []
    for (let i = 0; i < 50; i++) {
      buildingData.push({
        position: [(Math.random() - 0.5) * 20, Math.random() * 5, (Math.random() - 0.5) * 20] as [
          number,
          number,
          number,
        ],
        height: Math.random() * 8 + 2,
        color: Math.random() > 0.7 ? "#00FFFF" : "#FF00FF",
      })
    }
    return buildingData
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {buildings.map((building, index) => (
        <mesh key={index} position={building.position}>
          <boxGeometry args={[0.5, building.height, 0.5]} />
          <meshStandardMaterial color={building.color} emissive={building.color} emissiveIntensity={0.2} />
        </mesh>
      ))}
    </group>
  )
}

// function DataFlowLines() {
//   const linesRef = useRef<THREE.Group>(null)

//   useFrame((state) => {
//     if (linesRef.current) {
//       linesRef.current.children.forEach((line, index) => {
//         line.position.y = Math.sin(state.clock.elapsedTime + index) * 2
//       })
//     }
//   })

//   const lines = useMemo(() => {
//     const lineData = []
//     for (let i = 0; i < 20; i++) {
//       lineData.push({
//         start: [(Math.random() - 0.5) * 15, 0, (Math.random() - 0.5) * 15],
//         end: [(Math.random() - 0.5) * 15, 8, (Math.random() - 0.5) * 15],
//       })
//     }
//     return lineData
//   }, [])

//   return (
//     <group ref={linesRef}>
//       {lines.map((line, index) => {
//         const points = [new THREE.Vector3(...line.start), new THREE.Vector3(...line.end)]
//         const geometry = new THREE.BufferGeometry().setFromPoints(points)

//         return (
//           <line key={index} geometry={geometry}>
//             <lineBasicMaterial color="#00FFFF" opacity={0.6} transparent />
//           </line>
//         )
//       })}
//     </group>
//   )
// }

function DataFlowLines() {
  const linesRef = useRef<THREE.Group>(null)

  const lines = useMemo(() => {
    return new Array(20).fill(0).map(() => {
      const start = new THREE.Vector3((Math.random() - 0.5) * 15, 0, (Math.random() - 0.5) * 15)
      const end = new THREE.Vector3((Math.random() - 0.5) * 15, 8, (Math.random() - 0.5) * 15)

      const geometry = new THREE.BufferGeometry().setFromPoints([start, end])
      return geometry
    })
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, index) => {
        line.position.y = Math.sin(state.clock.elapsedTime + index) * 2
      })
    }
  })

  return (
    <group ref={linesRef}>
      {lines.map((geometry, index) => (
        <line key={index}>
          <primitive object={geometry} attach="geometry" />
          <lineBasicMaterial color="#00FFFF" opacity={0.6} transparent />
        </line>
      ))}
    </group>
  )
}





export function HeroScene() {
  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{  position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
        <pointLight position={[-10, 10, -10]} intensity={1} color="#FF00FF" />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <Environment preset="night" />

        <CityBuildings />
        <DataFlowLines />

        <Text3D font="/fonts/Geist_Bold.json" size={1} height={0.1} position={[0, 8, 0]}>
          PULSE OF BENGALURU
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
        </Text3D>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold neon-text mb-8">Pulse of Bengaluru</h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Real-time AI-powered dashboard connecting citizens with their smart city
          </p>
          <button className="pointer-events-auto bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 neon-glow">
            Enter the Pulse
          </button>
        </div>
      </div>
    </div>
  )
}
 