
import Plane from '../components/plane'

const AxesRoom = () => {
  return (
    <group>
      <Plane color={0xff00ff} scale={5} position={[0, 0, 0]} rotation={[0.5, 0, 0]} />
      <Plane color={0xffff00} scale={5} position={[0, 2.5, -2.5]} rotation={[0, 0, 0]} />
      <Plane color={0x00ffff} scale={5} position={[-2.5, 2.5, 0]} rotation={[0, 0.5, 0]} />
    </group>
  )
}

export default AxesRoom
