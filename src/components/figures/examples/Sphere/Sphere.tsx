import { SphereProps } from "./types.ts";
import { Shape } from "../../Shape";

export const Sphere = ({
  position = [1, 1, 1],
  radius = 1,
  color = "orange",
  rotationSpeed = [1, 1, 1],
  ...props
}: SphereProps) => (
  <Shape
    position={position}
    color={color}
    rotationSpeed={rotationSpeed}
    {...props}
  >
    <sphereGeometry args={[radius, 64, 64]} />
  </Shape>
);
