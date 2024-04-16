import { GeometryGrammarListener } from "./gen/GeometryGrammarListener";
import {
  BoxContext,
  PyramidContext,
  SphereContext,
} from "./gen/GeometryGrammarParser";
import { Blueprint, ShapeType } from "../shared/types.ts";

export class CustomGeometryListener implements GeometryGrammarListener {
  memory: Blueprint[] = [];

  exitSphere(ctx: SphereContext): void {
    const tempSphere: Blueprint = {
      type: ShapeType.Sphere,
      size: ctx.radius()?.text.slice(6).slice(0, -1),
      position: ctx.position()?.text.slice(8).slice(0, -1),
      color: ctx.color()?.text.slice(5).slice(0, -1),
      rotation: ctx.rotation()?.text.slice(8).slice(0, -1),
    };

    this.memory.push(tempSphere);
  }

  exitBox(ctx: BoxContext): void {
    const tempBox: Blueprint = {
      type: ShapeType.Box,
      size: ctx.size()?.text.slice(4).slice(0, -1),
      position: ctx.position()?.text.slice(8).slice(0, -1),
      color: ctx.color()?.text.slice(5).slice(0, -1),
      rotation: ctx.rotation()?.text.slice(8).slice(0, -1),
    };

    this.memory.push(tempBox);
  }

  exitPyramid(ctx: PyramidContext): void {
    const tempPyramid: Blueprint = {
      type: ShapeType.Pyramid,
      size: ctx.size()?.text.slice(4).slice(0, -1),
      position: ctx.position()?.text.slice(8).slice(0, -1),
      color: ctx.color()?.text.slice(5).slice(0, -1),
      rotation: ctx.rotation()?.text.slice(8).slice(0, -1),
    };

    this.memory.push(tempPyramid);
  }

  returnMemory(): Blueprint[] {
    return this.memory;
  }
}
