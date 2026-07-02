import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* Floating bubble background — deliberate, meditative drift.
   Translucent spheres with subtle crimson/orange inner glow. */

function Bubbles({ count = 60 }) {
  const meshRef = useRef()
  const materialRef = useRef()

  const { positions, velocities, scales, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const scl = new Float32Array(count)
    const phs = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Spread across a wide area
      pos[i * 3] = (Math.random() - 0.5) * 16
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2

      // Very slow upward drift with slight horizontal wander
      vel[i * 3] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = 0.002 + Math.random() * 0.004
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001

      // Varied sizes
      scl[i] = 0.03 + Math.random() * 0.08
      phs[i] = Math.random() * Math.PI * 2
    }
    return { positions: pos, velocities: vel, scales: scl, phases: phs }
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      // Move
      positions[i * 3] += velocities[i * 3]
      positions[i * 3 + 1] += velocities[i * 3 + 1]
      positions[i * 3 + 2] += velocities[i * 3 + 2]

      // Soft horizontal sway
      const swayX = Math.sin(time * 0.3 + phases[i]) * 0.003
      positions[i * 3] += swayX

      // Reset when bubbles drift too high
      if (positions[i * 3 + 1] > 12) {
        positions[i * 3 + 1] = -12
        positions[i * 3] = (Math.random() - 0.5) * 16
      }

      // Boundary wrap horizontal
      if (Math.abs(positions[i * 3]) > 9) {
        positions[i * 3] *= -0.9
      }

      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      )

      // Gentle breathing scale
      const breathe = 1 + Math.sin(time * 0.5 + phases[i]) * 0.15
      const s = scales[i] * breathe
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true

    // Subtle material pulse
    if (materialRef.current) {
      materialRef.current.opacity = 0.12 + Math.sin(time * 0.2) * 0.03
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        ref={materialRef}
        color="#DC2626"
        transparent
        opacity={0.12}
        depthWrite={false}
      />
    </instancedMesh>
  )
}

function BubblesSecondary({ count = 30 }) {
  const meshRef = useRef()

  const { positions, velocities, scales, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const scl = new Float32Array(count)
    const phs = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 3

      vel[i * 3] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 1] = 0.001 + Math.random() * 0.003
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001

      scl[i] = 0.02 + Math.random() * 0.05
      phs[i] = Math.random() * Math.PI * 2
    }
    return { positions: pos, velocities: vel, scales: scl, phases: phs }
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities[i * 3]
      positions[i * 3 + 1] += velocities[i * 3 + 1]
      positions[i * 3 + 2] += velocities[i * 3 + 2]

      const swayX = Math.sin(time * 0.25 + phases[i]) * 0.002
      positions[i * 3] += swayX

      if (positions[i * 3 + 1] > 13) {
        positions[i * 3 + 1] = -13
        positions[i * 3] = (Math.random() - 0.5) * 18
      }

      if (Math.abs(positions[i * 3]) > 10) {
        positions[i * 3] *= -0.9
      }

      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      )

      const breathe = 1 + Math.sin(time * 0.4 + phases[i]) * 0.1
      dummy.scale.setScalar(scales[i] * breathe)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial
        color="#F97316"
        transparent
        opacity={0.08}
        depthWrite={false}
      />
    </instancedMesh>
  )
}

export default function BubbleBackground() {
  return (
    <div className="bubble-canvas">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Bubbles count={50} />
        <BubblesSecondary count={25} />
      </Canvas>
    </div>
  )
}
