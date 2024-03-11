import { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { ShapeProps } from "./types.ts";

export const Shape = ({
  children,
  position,
  color,
  rotationSpeed,
  ...props
}: ShapeProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    ref.current.rotation.x += delta * rotationSpeed[0];
    ref.current.rotation.y += delta * rotationSpeed[1];
    ref.current.rotation.z += delta * rotationSpeed[2];
  });

  return (
    <mesh position={position} {...props} ref={ref}>
      {children}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
