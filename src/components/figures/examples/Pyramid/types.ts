import { GeneralShapeProps } from "../../types.ts";

export type PyramidProps = GeneralShapeProps & {
  size: [number, number, number] | undefined;
};
