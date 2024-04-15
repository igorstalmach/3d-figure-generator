import { GeometryGrammarListener } from "./gen/src/grammar/GeometryGrammarListener";
import {
  SphereContext,
  BoxContext,
  PyramidContext,
} from "./gen/src/grammar/GeometryGrammarParser";

export class CustomGeometryListener implements GeometryGrammarListener {
  enterSphere(ctx: SphereContext) {
    console.log(`Entering a sphere with parameters: ${ctx.text}`);
  }

  exitSphere(_ctx: SphereContext) {
    console.log(`Exiting a sphere`);
  }

  enterBox(ctx: BoxContext) {
    console.log(`Entering a box with parameters: ${ctx.text}`);
  }

  exitBox(_ctx: BoxContext) {
    console.log(`Exiting a box`);
  }

  enterPyramid(ctx: PyramidContext) {
    console.log(`Entering a pyramid with parameters: ${ctx.text}`);
  }

  exitPyramid(_ctx: PyramidContext) {
    console.log(`Exiting a pyramid`);
  }
}
