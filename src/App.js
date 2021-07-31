import { useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Text } from '@react-three/drei';

import './App.css';
import OrbitControls from './components/controls'
import AxesRoom from './groups/axesRoom'
import Geometries from './groups/geometries'

export default function App() {
  const camera = useRef()
  return (
    <Canvas style={{ width: '100vw', height: '100vh', backgroundColor: '#111' }}>
      <axesHelper args={[10]} />
      
      <AxesRoom />
      <Geometries />

      {/* <ambientLight /> */}
      <pointLight position={[8, 8, 6]} />
      <PerspectiveCamera ref={camera} fov={75} position={[3, 6, 8]} makeDefault />
      <OrbitControls camera={camera.current} />
    </Canvas>
  );
}