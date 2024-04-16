import { GeometryGrammarListener } from "./gen/src/grammar/GeometryGrammarListener";
import {
  BoxContext,
  PyramidContext,
  SphereContext,
} from "./gen/src/grammar/GeometryGrammarParser";
import { Blueprint, ShapeType } from "../shared/types.ts";

export class CustomGeometryListener implements GeometryGrammarListener {
  memory: Blueprint[] = [];

  exitSphere(ctx: SphereContext): void {
    const tempSphere: Blueprint = {
      type: ShapeType.Sphere,
      size: ctx.radius()?.text,
      position: ctx.position()?.text,
      color: ctx.color()?.text,
      rotation: ctx.rotation()?.text,
    };

    this.memory.push(tempSphere);
  }

  exitBox(ctx: BoxContext): void {
    const tempBox: Blueprint = {
      type: ShapeType.Box,
      size: ctx.size()?.text,
      position: ctx.position()?.text,
      color: ctx.color()?.text,
      rotation: ctx.rotation()?.text,
    };

    this.memory.push(tempBox);
  }

  exitPyramid(ctx: PyramidContext): void {
    const tempPyramid: Blueprint = {
      type: ShapeType.Pyramid,
      size: ctx.size()?.text,
      position: ctx.position()?.text,
      color: ctx.color()?.text,
      rotation: ctx.rotation()?.text,
    };

    this.memory.push(tempPyramid);
  }

  returnMemory(): Blueprint[] {
    return this.memory;
  }
}
