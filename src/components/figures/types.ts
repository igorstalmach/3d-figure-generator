import { ThreeElements } from "@react-three/fiber";

export type GeneralShapeProps = ThreeElements["mesh"] & {
  position: [number, number, number] | undefined;
  color: string | undefined;
  rotationSpeed: [number, number, number] | undefined;
};
