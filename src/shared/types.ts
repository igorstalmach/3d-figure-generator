export type Blueprint = {
  type: ShapeType;
  size: string | undefined;
  position: string | undefined;
  color: string | undefined;
  rotation: string | undefined;
};

export enum ShapeType {
  Sphere = "sphere",
  Box = "box",
  Pyramid = "pyramid",
}
