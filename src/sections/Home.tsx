import { Center, Float, Text3D } from "@react-three/drei";
import { color } from "three/tsl";
import { Star } from "../components/models/Star";
import { MacBookPro } from "../components/models/MacBookPro";
import { PalmTree } from "../components/models/PalmTree";
import { config } from "../../constants";
import { degToRad } from "three/src/math/MathUtils.js";
import { useMobile } from "../components/hooks/useMobile";

const Home = () => {

    const { isMobile } = useMobile();

  return (
    <group>
      <Star position-z={-2} position-y={4} scale={0.3} />
      <Float floatIntensity={2} speed={2}>
        <MacBookPro
          position-x={isMobile ? -1.5 : -2}
          position-y={isMobile? -0.5 :0.5}
          position-z={0}
          scale={0.5}
          rotation-y={Math.PI / 4}
          castShadow
          receiveShadow
        />
      </Float>
      <PalmTree
        scale={0.03}
        rotation-y={degToRad(140)}
        position={[isMobile ? 2 :4, 0, -5]}
      />
      <Float floatIntensity={0.6}>
        <Center disableY disableZ>
          <Text3D
            castShadow
            receiveShadow
            font={"/fonts/Inter_Bold.json"}
            size={isMobile ? 0.5 :0.8}
            position-y={1.6}
            position-z={-3}
            bevelEnabled
            bevelThickness={0.3}
          >
            {config.home.title}
            <meshStandardNodeMaterial colorNode={color("#D4CFD0")} />
          </Text3D>
        </Center>
      </Float>
      <Center disableY disableZ>
        <Text3D
        visible={!isMobile}
          castShadow
          receiveShadow
          font={"/fonts/Inter_Bold.json"}
          size={isMobile? 0.5 :1.2}
          position-x={isMobile? -1 :-2.6}
          position-z={-3}
          bevelEnabled
          bevelThickness={0.3}
          rotation-y={Math.PI / 10}
        >
          {config.home.subtitle}
          <meshStandardNodeMaterial colorNode={color("#D4CFD0")} />
        </Text3D>
        <Text3D
        visible={isMobile}
          castShadow
          receiveShadow
          font={"/fonts/Inter_Bold.json"}
          size={isMobile? 0.5 :1.2}
          position-x={1}
          position-y={0.7}
          position-z={-3}
          bevelEnabled
          bevelThickness={0.3}
          rotation-y={Math.PI / 10}
        >
          {config.home.msubtitle}
          <meshStandardNodeMaterial colorNode={color("#D4CFD0")} />
        </Text3D>
        <Text3D
        visible={isMobile}
          castShadow
          receiveShadow
          font={"/fonts/Inter_Bold.json"}
          size={isMobile? 0.5 :1.2}
          position-x={1}
          position-z={-3}
          bevelEnabled
          bevelThickness={0.3}
          rotation-y={Math.PI / 10}
        >
          {config.home.msubtitle1}
          <meshStandardNodeMaterial colorNode={color("#D4CFD0")} />
        </Text3D>
      </Center>
    </group>
  );
};

export default Home;
