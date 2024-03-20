import { SimpleGrammarListener } from "./gen/src/grammar/SimpleGrammarListener";
import {
  ExprContext,
  TermContext,
} from "./gen/src/grammar/SimpleGrammarParser";

export class CustomListener implements SimpleGrammarListener {
  public result: number = 0;
  private values: Map<TermContext, number> = new Map();

  enterExpr(context: ExprContext) {
    console.log("Entering expression:", context.text);
  }

  exitExpr(context: ExprContext) {
    if (context.childCount === 1) {
      this.result = this.values.get(context.term(0)) ?? 0;
    } else {
      let tempResult = this.values.get(context.term(0)) ?? 0;
      for (let i = 1; i <= context.childCount / 2; i++) {
        const operator = context.getChild(2 * i - 1).text;
        const value = this.values.get(context.term(i)) ?? 0;
        if (operator === "+") {
          tempResult += value;
        } else if (operator === "-") {
          tempResult -= value;
        }
      }
      this.result = tempResult;
    }
  }

  exitTerm(context: TermContext) {
    this.values.set(context, parseInt(context.text, 10));
  }
}
