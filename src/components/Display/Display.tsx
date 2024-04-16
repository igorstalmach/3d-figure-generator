import { ReactNode } from "react";

import { Canvas } from "@react-three/fiber";

import { DisplayProps } from "./types.ts";
import { mapStringToArray } from "../../shared/mappers.ts";
import { Blueprint, ShapeType } from "../../shared/types.ts";
import { Box, Pyramid, Sphere } from "../figures/examples";
import { Light } from "../utils/Light";

export const Display = ({ shapeInput }: DisplayProps) => {
  const createShape = (shape: Blueprint, idx: number): ReactNode => {
    console.log(shape);

    switch (shape.type) {
      case ShapeType.Sphere:
        return (
          <Sphere
            key={idx}
            position={mapStringToArray(shape.position)}
            radius={shape.size ? parseFloat(shape.size) : undefined}
            color={shape.color}
            rotationSpeed={mapStringToArray(shape.rotation)}
          />
        );
      case ShapeType.Box:
        return (
          <Box
            key={idx}
            position={mapStringToArray(shape.position)}
            size={mapStringToArray(shape.size)}
            color={shape.color}
            rotationSpeed={mapStringToArray(shape.rotation)}
          />
        );
      case ShapeType.Pyramid:
        return (
          <Pyramid
            key={idx}
            position={mapStringToArray(shape.position)}
            size={mapStringToArray(shape.size)}
            color={shape.color}
            rotationSpeed={mapStringToArray(shape.rotation)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Canvas>
      <Light />
      {shapeInput.map((shape, idx) => createShape(shape, idx))}

      {/*<Box*/}
      {/*  position={[-1.2, 1.2, 0]}*/}
      {/*  size={[1, 1, 1]}*/}
      {/*  color={"orange"}*/}
      {/*  rotationSpeed={[1, 10, 5]}*/}
      {/*/>*/}
      {/*<Pyramid*/}
      {/*  position={[1.2, 0, 0]}*/}
      {/*  size={[1, 1, 4]}*/}
      {/*  color={"blue"}*/}
      {/*  rotationSpeed={[1, 2, 1]}*/}
      {/*/>*/}
      {/*<Sphere*/}
      {/*  position={[-2, -2, 0]}*/}
      {/*  radius={1}*/}
      {/*  color={"red"}*/}
      {/*  rotationSpeed={[1, 0, 0]}*/}
      {/*/>*/}
    </Canvas>
  );
};
