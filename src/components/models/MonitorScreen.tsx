import { useCursor, useTexture } from "@react-three/drei";
import { useAtom } from "jotai";
import { config } from "../../../constants";
import { projectAtom } from "../../sections/UI";
import { useState } from "react";

export const MonitorScreen = ({ ...props }) => {
  const [project] = useAtom(projectAtom);
  const projectTexture = useTexture(project.image);
  const [hover, setHover] = useState(false)

  useCursor(hover)

  return (
    <group {...props}>
      <mesh
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={() => window.open(project.link, "_blank")}
      >
 
        <planeGeometry args={[1.14, 0.66]} />
        <meshBasicMaterial map={projectTexture} />
      </mesh>
    </group>
  );
};

config.projects.forEach((project) => {
  useTexture.preload(project.image);
});
