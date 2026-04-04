import {Text3D } from "@react-three/drei";
import { color } from "three/tsl";
import { BookCase } from "../components/models/BookCase";
import { CouchSmall } from "../components/models/CouchSmall";
import { Lamp } from "../components/models/Lamp";
import { useMobile } from "../components/hooks/useMobile";

const Skills = () => {

const {isMobile} = useMobile()

  return (
    <group position-z={10}>
      <group position-x={-2}>
        <Text3D
          font={"/fonts/Inter_Bold.json"}
          position-z={1}
          rotation-y={isMobile ? -Math.PI / 6 : Math.PI / 6}
          position-x={isMobile ? 1.5:1}
          size={isMobile ? 0.5 :1}
        >
          SKILLS
          <meshStandardNodeMaterial colorNode={color("#D4CFD0")} />
        </Text3D>
        <BookCase position-z={-2} position-x={isMobile ? 1.2 : 1 } />
        <CouchSmall
          scale={0.4}
          position-z={0}
          position-x={isMobile ? 1.2 :0.2}
          rotation-y={Math.PI / 3}
        />
        <Lamp
          position-z={0.6}
          position-x={isMobile ? 1.2 :-0.4}
          position-y={-0.8}
          rotation-y={-Math.PI}
        />
      </group>
      <mesh position-y={2} position-z={-4} position-x={2}>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
    </group>
  );
};

export default Skills;
