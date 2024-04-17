import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree";

import { CustomGeometryListener } from "./CustomListener.ts";
import { GeometryGrammarLexer } from "./gen/GeometryGrammarLexer.ts";
import { GeometryGrammarListener } from "./gen/GeometryGrammarListener.ts";
import { GeometryGrammarParser } from "./gen/GeometryGrammarParser.ts";
import { Blueprint } from "../shared/types.ts";

export const compileGrammar = (input: string): Blueprint[] => {
  const inputStream = CharStreams.fromString(input);
  const lexer = new GeometryGrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new GeometryGrammarParser(tokenStream);

  const tree = parser.command();

  const listener: CustomGeometryListener = new CustomGeometryListener();
  ParseTreeWalker.DEFAULT.walk(listener as GeometryGrammarListener, tree);

  if (parser.numberOfSyntaxErrors > 0) {
    return [];
  }

  return listener.returnMemory();
};
