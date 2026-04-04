import { RoundedBox, Text3D } from "@react-three/drei";
import { color } from "three/tsl";
import { Monitor } from "../components/models/Monitor";
import { MonitorScreen } from "../components/models/MonitorScreen";
import { useMobile } from "../components/hooks/useMobile";

const Projects = () => {

    const {isMobile} = useMobile()

  return (
    <group position-z={20}
  >
    <group position-x={1}>
      <Text3D
        font={"/fonts/Inter_Bold.json"}
        position-x={isMobile ? -2.8 :-6}
        position-z={0}
        rotation-y={Math.PI / 6}
        size={isMobile ? 0.4 : 1  }
      >
        PROJECTS
        <meshStandardNodeMaterial colorNode={color("#D4CFD0")} />
      </Text3D>

      <group
        position-x={0.5}
        position-z={0}
        rotation-y={-Math.PI / 6}
        scale={0.8}
      >
        <Monitor
          scale={0.02}
          position-y={1}
          rotation-y={-Math.PI / 2}
          position-z={-1}
        />
        <MonitorScreen
          rotation-x={-0.18}
          position-z={-0.895}
          position-y={1.74}
        />
        <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
          <meshStandardNodeMaterial colorNode={color("white")} />
        </RoundedBox>
      </group>
    </group>
  </group>
  );
};

export default Projects;
