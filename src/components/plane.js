import { DoubleSide } from 'three';



const Plane = ({
  scale = 5,
  position = [0, 0, 0],
  color = '#000',
  rotation = [0.5, 0, 0]
}) => {
  const offset = scale * 0.5
  const rotationRad = rotation.map((axes) => (
    Math.PI * axes
  ))
  // console.log('rotationRad', rotationRad);
  const originCorner = (position) => {
    const newOrigin = position.map((num, i) => {
      // console.log(scale, offset)
      if (i === 0) num += offset
      if (i === 2) num += offset
      return num
    })
    // console.log('newOrigin', newOrigin)
    return newOrigin
  }

  return (
    <mesh
      position={originCorner(position)}
      scale={scale}
      rotation={[rotationRad[0], rotationRad[1], rotationRad[2]]}
    >
      <planeGeometry />
      <meshPhongMaterial color={color} side={DoubleSide} />
    </mesh>
  )
}

export default Plane