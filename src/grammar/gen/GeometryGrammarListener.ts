// Generated from ./src/grammar/GeometryGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CommandContext } from "./GeometryGrammarParser";
import { DrawCmdContext } from "./GeometryGrammarParser";
import { ShapeContext } from "./GeometryGrammarParser";
import { SphereContext } from "./GeometryGrammarParser";
import { SphereParamsContext } from "./GeometryGrammarParser";
import { BoxContext } from "./GeometryGrammarParser";
import { BoxParamsContext } from "./GeometryGrammarParser";
import { PyramidContext } from "./GeometryGrammarParser";
import { PyramidParamsContext } from "./GeometryGrammarParser";
import { SizeContext } from "./GeometryGrammarParser";
import { RadiusContext } from "./GeometryGrammarParser";
import { ColorContext } from "./GeometryGrammarParser";
import { PositionContext } from "./GeometryGrammarParser";
import { RotationContext } from "./GeometryGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GeometryGrammarParser`.
 */
export interface GeometryGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.drawCmd`.
	 * @param ctx the parse tree
	 */
	enterDrawCmd?: (ctx: DrawCmdContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.drawCmd`.
	 * @param ctx the parse tree
	 */
	exitDrawCmd?: (ctx: DrawCmdContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.shape`.
	 * @param ctx the parse tree
	 */
	enterShape?: (ctx: ShapeContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.shape`.
	 * @param ctx the parse tree
	 */
	exitShape?: (ctx: ShapeContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.sphere`.
	 * @param ctx the parse tree
	 */
	enterSphere?: (ctx: SphereContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.sphere`.
	 * @param ctx the parse tree
	 */
	exitSphere?: (ctx: SphereContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.sphereParams`.
	 * @param ctx the parse tree
	 */
	enterSphereParams?: (ctx: SphereParamsContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.sphereParams`.
	 * @param ctx the parse tree
	 */
	exitSphereParams?: (ctx: SphereParamsContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.box`.
	 * @param ctx the parse tree
	 */
	enterBox?: (ctx: BoxContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.box`.
	 * @param ctx the parse tree
	 */
	exitBox?: (ctx: BoxContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.boxParams`.
	 * @param ctx the parse tree
	 */
	enterBoxParams?: (ctx: BoxParamsContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.boxParams`.
	 * @param ctx the parse tree
	 */
	exitBoxParams?: (ctx: BoxParamsContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.pyramid`.
	 * @param ctx the parse tree
	 */
	enterPyramid?: (ctx: PyramidContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.pyramid`.
	 * @param ctx the parse tree
	 */
	exitPyramid?: (ctx: PyramidContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.pyramidParams`.
	 * @param ctx the parse tree
	 */
	enterPyramidParams?: (ctx: PyramidParamsContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.pyramidParams`.
	 * @param ctx the parse tree
	 */
	exitPyramidParams?: (ctx: PyramidParamsContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.size`.
	 * @param ctx the parse tree
	 */
	enterSize?: (ctx: SizeContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.size`.
	 * @param ctx the parse tree
	 */
	exitSize?: (ctx: SizeContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.radius`.
	 * @param ctx the parse tree
	 */
	enterRadius?: (ctx: RadiusContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.radius`.
	 * @param ctx the parse tree
	 */
	exitRadius?: (ctx: RadiusContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.color`.
	 * @param ctx the parse tree
	 */
	enterColor?: (ctx: ColorContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.color`.
	 * @param ctx the parse tree
	 */
	exitColor?: (ctx: ColorContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by `GeometryGrammarParser.rotation`.
	 * @param ctx the parse tree
	 */
	enterRotation?: (ctx: RotationContext) => void;
	/**
	 * Exit a parse tree produced by `GeometryGrammarParser.rotation`.
	 * @param ctx the parse tree
	 */
	exitRotation?: (ctx: RotationContext) => void;
}

