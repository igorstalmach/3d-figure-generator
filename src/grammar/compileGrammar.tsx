import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree";

import { CustomListener } from "./CustomListener.ts";
import { SimpleGrammarLexer } from "./gen/src/grammar/SimpleGrammarLexer.ts";
import { SimpleGrammarListener } from "./gen/src/grammar/SimpleGrammarListener.ts";
import { SimpleGrammarParser } from "./gen/src/grammar/SimpleGrammarParser.ts";

export const compileGrammar = (input: string): string => {
  const inputStream = CharStreams.fromString(input);
  const lexer = new SimpleGrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new SimpleGrammarParser(tokenStream);

  const tree = parser.expr();

  const listener: CustomListener = new CustomListener();
  ParseTreeWalker.DEFAULT.walk(listener as SimpleGrammarListener, tree);

  return String(listener.result);
};
