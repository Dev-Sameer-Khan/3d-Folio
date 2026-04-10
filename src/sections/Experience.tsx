import Scene from "./Scene";
import { Canvas, extend,} from "@react-three/fiber";
import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import * as THREE from "three/webgpu";

import type { ThreeElement } from "@react-three/fiber";
import { config } from "../../constants";
import { UI } from "./UI";
import CameraController from "../components/MouseMove";

// Manually extend only the classes you are using in JSX
extend({
  MeshStandardNodeMaterial: THREE.MeshStandardNodeMaterial,
  // Add any other specific WebGPU classes here
});

// To stop TS complaining about the JSX tags, add this:
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshStandardNodeMaterial: ThreeElement<
      typeof THREE.MeshStandardNodeMaterial
    >;
  }
}

const Experience = () => {


  return (
    <Canvas
      shadows
    camera={{position:[0,1.5,5]}}
      gl={async (canvas: any) => {
        const rendrer = new THREE.WebGPURenderer(canvas);
        await rendrer.init();
        return rendrer;
      }}
    >
      <fog attach="fog" args={["#fff", 10, 20]} />

      {/* <OrbitControls enableDamping /> */}
      <CameraController/>
      <Environment preset="studio" />
      <ScrollControls pages={config.sections.length} damping={0.1} maxSpeed={0.3}>
        <Scroll html>
          {/* <Menu/> */}
        <UI/>
        </Scroll>
        <Scene />
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
