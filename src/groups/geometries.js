import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { GUI } from 'dat.gui'

const Geometries = () => {
  
  return (
    <group>
      {/* <gui /> */}
      <Box
        dimensions={[1, 1.8, 1.5]}
        position={[2.5, 1.4, 1.5]}
        color={0x1328e3}
        // wireframe
      />
      <Cone
        args={[0.5, 2, 32, 8]}
        position={[1, 4, 1.5]}
        color={0x9955ee}
        // wireframe
      />
      <Sphere
        args={[0.8, 16, 16]}
        position={[4, 3.5, 1.5]}
        color={0xdb2cca}
        // wireframe
      />
      <Cylinder
        args={[0.5, 0.6, 1, 16, 10]}
        position={[1, 2, 4]}
        color={0xdb782c}
        // wireframe
      />
      <Torus
        args={[0.5, 0.2, 16, 16]}
        position={[2.8, 3.3, 4]}
        color={0xdbcc2c}
        // wireframe
      />
      <TorusKnot
        args={[0.5, 0.2, 64, 16, 2, 3]}
        position={[4, 1.5, 4]}
        color={0x0bb02c}
        // wireframe
      />
    </group>
  )
}

export default Geometries


function Box({
  dimensions = [1, 1, 1],
  scale = 1,
  position = [0, 0, 0],
  color = '#000',
  rotation = [0, 0, 0],
  wireframe = false,
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const geometry = useRef()
  const material = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })
  const parameters = {
    depth: dimensions[0],
    wireframe: wireframe,
    color: color,
    spin: () => {
      gsap.to(mesh.current.rotation, { duration: 1, y: mesh.current.rotation.y + (Math.PI * 2) })
      gsap.to(mesh.current.rotation, { duration: 2, delay: 1.3, y: mesh.current.rotation.y - mesh.current.rotation.y })
    }
  }

  useEffect(() => {
    const gui = new GUI()
    const box = gui.addFolder('Box')
    box.add(parameters, 'wireframe').onChange(() => material.current.wireframe = parameters.wireframe)
    box.addColor(parameters, 'color').onChange(() => material.current.color.set(parameters.color))

    box.add(mesh.current.position, 'x', 0, 4, 0.25).name('PosX')
    box.add(mesh.current.position, 'y', 0, 4, 0.25).name('PosY')
    box.add(mesh.current.position, 'z', 0, 4, 0.25).name('PosZ')
    
    box.add(parameters, 'spin')
  }, [])

  return (
    <mesh
      ref={mesh}
      scale={active ? 2 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={position}
      rotation={rotation}
    >
      <boxGeometry ref={geometry} args={dimensions} />
      <meshPhongMaterial ref={material} color={hovered ? 'hotpink' : parameters.color} wireframe={parameters.wireframe && !active} />

    </mesh>
  )
}

function Cone({
  args = [5, 5, 20, 32],
  scale = 1,
  position = [0, 0, 0],
  color = '#000',
  rotation = [0, 0, 0],
  wireframe = false,
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })

  return (
    <mesh
      ref={mesh}
      scale={active ? 2 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={position}
      rotation={rotation}
    >
      <coneGeometry args={args} />
      <meshPhongMaterial color={hovered ? 'hotpink' : color} wireframe={wireframe && !active} />

    </mesh>
  )
}

function Cylinder({
  args = [1, 1, 2, 20, 32],
  scale = 1,
  position = [0, 0, 0],
  color = '#000',
  rotation = [0, 0, 0],
  wireframe = false,
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })

  return (
    <mesh
      ref={mesh}
      scale={active ? 2 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={position}
      rotation={rotation}
    >
      <cylinderGeometry args={args} />
      <meshPhongMaterial color={hovered ? 'hotpink' : color} wireframe={wireframe && !active} />

    </mesh>
  )
}

function Sphere({
  args = [1, 20, 32],
  scale = 1,
  position = [0, 0, 0],
  color = '#000',
  rotation = [0, 0, 0],
  wireframe = false,
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })

  return (
    <mesh
      ref={mesh}
      scale={active ? 2 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={position}
      rotation={rotation}
    >
      <sphereGeometry args={args} />
      <meshPhongMaterial color={hovered ? 'hotpink' : color} wireframe={!active && wireframe} />

    </mesh>
  )
}

function Torus({
  args = [2, 2, 20, 32],
  scale = 1,
  position = [0, 0, 0],
  color = '#000',
  rotation = [0, 0, 0],
  wireframe = false,
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })

  return (
    <mesh
      ref={mesh}
      scale={active ? 2 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={position}
      rotation={rotation}
    >
      <torusGeometry args={args} />
      <meshPhongMaterial color={hovered ? 'hotpink' : color} wireframe={wireframe && !active} />

    </mesh>
  )
}

function TorusKnot({
  args = [2, 2, 20, 32, 2, 3],
  scale = 1,
  position = [0, 0, 0],
  color = '#000',
  rotation = [0, 0, 0],
  wireframe = false,
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })

  return (
    <mesh
      ref={mesh}
      scale={active ? 2 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={position}
      rotation={rotation}
    >
      <torusKnotGeometry args={args} />
      <meshPhongMaterial color={hovered ? 'hotpink' : color} wireframe={wireframe && !active} />

    </mesh>
  )
}