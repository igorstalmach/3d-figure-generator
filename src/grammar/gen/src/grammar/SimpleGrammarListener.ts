// Generated from ./src/grammar/SimpleGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExprContext } from "./SimpleGrammarParser";
import { TermContext } from "./SimpleGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleGrammarParser`.
 */
export interface SimpleGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SimpleGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleGrammarParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleGrammarParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
}

