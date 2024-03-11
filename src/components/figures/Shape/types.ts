import { ReactNode } from "react";

import { GeneralShapeProps } from "../types.ts";

export type ShapeProps = GeneralShapeProps & {
  children: ReactNode;
};
