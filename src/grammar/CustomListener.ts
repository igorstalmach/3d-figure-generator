import { GeometryGrammarListener } from "./gen/GeometryGrammarListener";
import {
  BoxContext,
  PyramidContext,
  SphereContext,
} from "./gen/GeometryGrammarParser";
import {
  findAndParseColor,
  findAndParsePosition,
  findAndParseRadius,
  findAndParseRotation,
  findAndParseSize,
} from "../shared/parsers.ts";
import { Blueprint, ShapeType } from "../shared/types.ts";

export class CustomGeometryListener implements GeometryGrammarListener {
  memory: Blueprint[] = [];

  exitSphere(ctx: SphereContext): void {
    const sphereParams = ctx.sphereParams().map((param) => param.text);

    const tempSphere: Blueprint = {
      type: ShapeType.Sphere,
      size: findAndParseRadius(sphereParams),
      position: findAndParsePosition(sphereParams),
      color: findAndParseColor(sphereParams),
      rotation: findAndParseRotation(sphereParams),
    };

    this.memory.push(tempSphere);
  }

  exitBox(ctx: BoxContext): void {
    const boxParams = ctx.boxParams().map((param) => param.text);

    const tempBox: Blueprint = {
      type: ShapeType.Box,
      size: findAndParseSize(boxParams),
      position: findAndParsePosition(boxParams),
      color: findAndParseColor(boxParams),
      rotation: findAndParseRotation(boxParams),
    };

    this.memory.push(tempBox);
  }

  exitPyramid(ctx: PyramidContext): void {
    const pyramidParams = ctx.pyramidParams().map((param) => param.text);

    const tempPyramid: Blueprint = {
      type: ShapeType.Pyramid,
      size: findAndParseSize(pyramidParams),
      position: findAndParsePosition(pyramidParams),
      color: findAndParseColor(pyramidParams),
      rotation: findAndParseRotation(pyramidParams),
    };

    this.memory.push(tempPyramid);
  }

  returnMemory(): Blueprint[] {
    return this.memory;
  }
}
