import { ThreeElements } from "@react-three/fiber";

export type GeneralShapeProps = ThreeElements["mesh"] & {
  position: [number, number, number];
  color: string;
  rotationSpeed: [number, number, number];
};
