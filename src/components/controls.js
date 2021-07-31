import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Controls = ({ camera, ...args }) => {
  const controls = useRef()

  useFrame(() => controls.current.update())

  return <OrbitControls ref={controls} camera={camera} {...args} />
}

export default Controls