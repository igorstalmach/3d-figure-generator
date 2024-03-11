import { GeneralShapeProps } from "../../types.ts";

export type BoxProps = GeneralShapeProps & {
  size: [number, number, number];
};
