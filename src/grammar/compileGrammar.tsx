import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree";

import { CustomGeometryListener } from "./CustomListener.ts";
import { GeometryGrammarLexer } from "./gen/src/grammar/GeometryGrammarLexer.ts";
import { GeometryGrammarListener } from "./gen/src/grammar/GeometryGrammarListener.ts";
import { GeometryGrammarParser } from "./gen/src/grammar/GeometryGrammarParser.ts";
import { Blueprint } from "../shared/types.ts";

export const compileGrammar = (input: string): Blueprint[] => {
  const inputStream = CharStreams.fromString(input);
  const lexer = new GeometryGrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new GeometryGrammarParser(tokenStream);

  const tree = parser.drawCmd();

  const listener: CustomGeometryListener = new CustomGeometryListener();
  ParseTreeWalker.DEFAULT.walk(listener as GeometryGrammarListener, tree);

  return listener.returnMemory();
};
