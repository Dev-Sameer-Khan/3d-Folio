import { ContactShadows, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { color } from "three/tsl";
import * as THREE from "three";
import { Avatar } from "../components/models/Avatar";
import { config } from "../../constants";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Scene = () => {
  const parent = useRef<THREE.Group>(null);
  const scrollData = useScroll();

  useFrame(() => {
    if (parent.current) {
      parent.current.position.z =
        -scrollData.offset * (config.sections.length - 1) * 10;
    }
  });

  const { viewport } = useThree();

  return (
    <>
      <ContactShadows opacity={0.5} position-y={-5} color="#9c8e66" />
      <Avatar scale={2} position-y={-2} />
      <mesh
        castShadow
        receiveShadow
        position-y={-2}
        rotation-x={Math.PI / 2 }
      >
        <planeGeometry args={[viewport.width * 4, viewport.height * 4]} />
        <meshStandardNodeMaterial side={2} colorNode={color("white")} />
      </mesh>
      <group ref={parent} position-y={-1}>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </group>
    </>
  );
};

export default Scene;
