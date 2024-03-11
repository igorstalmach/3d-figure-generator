import { PyramidProps } from "./types.ts";
import { Shape } from "../../Shape";

export const Pyramid = ({
  position = [1, 1, 1],
  size = [1, 1, 4],
  color = "orange",
  rotationSpeed = [1, 1, 1],
  ...props
}: PyramidProps) => (
  <Shape
    position={position}
    color={color}
    rotationSpeed={rotationSpeed}
    {...props}
  >
    <coneGeometry args={size} />
  </Shape>
);
