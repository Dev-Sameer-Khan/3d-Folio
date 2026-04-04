import { Float, Text3D } from "@react-three/drei"
import { color } from "three/tsl"
import { ParkBench } from "../components/models/ParkBench"
import { Balloon } from "../components/models/Balloon"
import { Mailbox } from "../components/models/Mailbox"
import { Pigeon } from "../components/models/Pigeon"
import { useMobile } from "../components/hooks/useMobile"


const Contact = () => {

const {isMobile} = useMobile()

  return (
<group
          position-z={30}
        >
          <Text3D
            position-x={isMobile ? -1.5 :-2}
            font={"/fonts/Inter_Bold.json"}
            size={isMobile ? 0.4 : 1}
            position-z={-1}
          >
            CONTACT
            <meshStandardNodeMaterial colorNode={color("#D4CFD0")} />
          </Text3D>
          <group position-x={isMobile? -1 :-2}>
            <ParkBench
              scale={0.5}
              position-x={-0.5}
              position-z={-2.5}
              rotation-y={-Math.PI / 4}
            />
            <group position-y={2.2} position-z={-0.5}>
              <Float floatIntensity={2} rotationIntensity={1.5}>
                <Balloon scale={1.5} position-x={-0.5} color="#71a2d9" />
              </Float>
              <Float
                floatIntensity={1.5}
                rotationIntensity={2}
                position-z={0.5}
              >
                <Balloon scale={1.3} color="#d97183" />
              </Float>
              <Float speed={2} rotationIntensity={2}>
                <Balloon scale={1.6} position-x={0.4} color="yellow" />
              </Float>
            </group>
          </group>

          <Mailbox
            scale={0.25}
            rotation-y={1.25 * Math.PI}
            position-x={1}
            position-y={0.25}
            position-z={0.5}
          />
          <Float floatIntensity={1.5} speed={3}>
            <Pigeon
              position-x={isMobile ? 1 :2}
              position-y={1.5}
              position-z={-0.5}
              scale={0.3}
            />
          </Float>
        </group>
  )
}

export default Contact