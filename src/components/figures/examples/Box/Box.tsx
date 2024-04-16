import { BoxProps } from "./types.ts";
import { Shape } from "../../Shape";

export const Box = ({
  position = [0, 0, 0],
  size = [1, 1, 1],
  color = "orange",
  rotationSpeed = [1, 1, 1],
  ...props
}: BoxProps) => (
  <Shape
    position={position}
    color={color}
    rotationSpeed={rotationSpeed}
    {...props}
  >
    <boxGeometry args={size} />
  </Shape>
);
