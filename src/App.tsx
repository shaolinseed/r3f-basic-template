import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Leva } from "leva";

function App() {
  return (
    <div className="App h-screen v-screen">
      <Canvas>
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
        <Box />
      </Canvas>
      <Leva />
    </div>
  );
}

export default App;
