import { Canvas } from "@react-three/fiber";

import { DisplayProps } from "./types.ts";
import { Box, Pyramid, Sphere } from "../figures/examples";
import { Light } from "../utils/Light";

export const Display = ({ shapeInput }: DisplayProps) => {
  console.log(shapeInput);

  return (
    <Canvas>
      <Light />
      <Box
        position={[-1.2, 1.2, 0]}
        size={[1, 1, 1]}
        color={"orange"}
        rotationSpeed={[1, 10, 5]}
      />
      <Pyramid
        position={[1.2, 0, 0]}
        size={[1, 1, 4]}
        color={"blue"}
        rotationSpeed={[1, 2, 1]}
      />
      <Sphere
        position={[-2, -2, 0]}
        radius={1}
        color={"red"}
        rotationSpeed={[1, 0, 0]}
      />
    </Canvas>
  );
};
