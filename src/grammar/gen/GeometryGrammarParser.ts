// Generated from ./src/grammar/GeometryGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GeometryGrammarListener } from "./GeometryGrammarListener";

export class GeometryGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly INT = 15;
	public static readonly COLOR = 16;
	public static readonly HEX_COLOR = 17;
	public static readonly HEX_DIGIT = 18;
	public static readonly FLOAT = 19;
	public static readonly WS = 20;
	public static readonly RULE_command = 0;
	public static readonly RULE_drawCmd = 1;
	public static readonly RULE_shape = 2;
	public static readonly RULE_sphere = 3;
	public static readonly RULE_sphereParams = 4;
	public static readonly RULE_box = 5;
	public static readonly RULE_boxParams = 6;
	public static readonly RULE_pyramid = 7;
	public static readonly RULE_pyramidParams = 8;
	public static readonly RULE_size = 9;
	public static readonly RULE_radius = 10;
	public static readonly RULE_color = 11;
	public static readonly RULE_position = 12;
	public static readonly RULE_rotation = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"command", "drawCmd", "shape", "sphere", "sphereParams", "box", "boxParams", 
		"pyramid", "pyramidParams", "size", "radius", "color", "position", "rotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'draw'", "'sphere'", "'('", "')'", "','", "'box'", 
		"'pyramid'", "'size'", "'/'", "'radius'", "'color'", "'position'", "'rotation'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "INT", "COLOR", "HEX_COLOR", "HEX_DIGIT", "FLOAT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GeometryGrammarParser._LITERAL_NAMES, GeometryGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GeometryGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GeometryGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return GeometryGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GeometryGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GeometryGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GeometryGrammarParser.RULE_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.drawCmd();
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GeometryGrammarParser.T__0) {
				{
				{
				this.state = 29;
				this.match(GeometryGrammarParser.T__0);
				this.state = 30;
				this.drawCmd();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(GeometryGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public drawCmd(): DrawCmdContext {
		let _localctx: DrawCmdContext = new DrawCmdContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GeometryGrammarParser.RULE_drawCmd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(GeometryGrammarParser.T__1);
			this.state = 39;
			this.shape();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shape(): ShapeContext {
		let _localctx: ShapeContext = new ShapeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GeometryGrammarParser.RULE_shape);
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GeometryGrammarParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.sphere();
				}
				break;
			case GeometryGrammarParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.box();
				}
				break;
			case GeometryGrammarParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.pyramid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sphere(): SphereContext {
		let _localctx: SphereContext = new SphereContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GeometryGrammarParser.RULE_sphere);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(GeometryGrammarParser.T__2);
			this.state = 47;
			this.match(GeometryGrammarParser.T__3);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GeometryGrammarParser.T__10) | (1 << GeometryGrammarParser.T__11) | (1 << GeometryGrammarParser.T__12) | (1 << GeometryGrammarParser.T__13))) !== 0)) {
				{
				{
				this.state = 48;
				this.sphereParams();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
			this.match(GeometryGrammarParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sphereParams(): SphereParamsContext {
		let _localctx: SphereParamsContext = new SphereParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GeometryGrammarParser.RULE_sphereParams);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GeometryGrammarParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.radius();
				this.state = 57;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 59;
				this.position();
				this.state = 60;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__11:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 62;
				this.color();
				this.state = 63;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__13:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 65;
				this.rotation();
				this.state = 66;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public box(): BoxContext {
		let _localctx: BoxContext = new BoxContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GeometryGrammarParser.RULE_box);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(GeometryGrammarParser.T__6);
			this.state = 71;
			this.match(GeometryGrammarParser.T__3);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GeometryGrammarParser.T__8) | (1 << GeometryGrammarParser.T__11) | (1 << GeometryGrammarParser.T__12) | (1 << GeometryGrammarParser.T__13))) !== 0)) {
				{
				{
				this.state = 72;
				this.boxParams();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
			this.match(GeometryGrammarParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boxParams(): BoxParamsContext {
		let _localctx: BoxParamsContext = new BoxParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GeometryGrammarParser.RULE_boxParams);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GeometryGrammarParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.size();
				this.state = 81;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.position();
				this.state = 84;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__11:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 86;
				this.color();
				this.state = 87;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__13:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 89;
				this.rotation();
				this.state = 90;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pyramid(): PyramidContext {
		let _localctx: PyramidContext = new PyramidContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GeometryGrammarParser.RULE_pyramid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(GeometryGrammarParser.T__7);
			this.state = 95;
			this.match(GeometryGrammarParser.T__3);
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GeometryGrammarParser.T__8) | (1 << GeometryGrammarParser.T__11) | (1 << GeometryGrammarParser.T__12) | (1 << GeometryGrammarParser.T__13))) !== 0)) {
				{
				{
				this.state = 96;
				this.pyramidParams();
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 102;
			this.match(GeometryGrammarParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pyramidParams(): PyramidParamsContext {
		let _localctx: PyramidParamsContext = new PyramidParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GeometryGrammarParser.RULE_pyramidParams);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GeometryGrammarParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				this.size();
				this.state = 105;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.position();
				this.state = 108;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__11:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 110;
				this.color();
				this.state = 111;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			case GeometryGrammarParser.T__13:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 113;
				this.rotation();
				this.state = 114;
				this.match(GeometryGrammarParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public size(): SizeContext {
		let _localctx: SizeContext = new SizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, GeometryGrammarParser.RULE_size);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(GeometryGrammarParser.T__8);
			this.state = 119;
			this.match(GeometryGrammarParser.INT);
			this.state = 120;
			this.match(GeometryGrammarParser.T__9);
			this.state = 121;
			this.match(GeometryGrammarParser.INT);
			this.state = 122;
			this.match(GeometryGrammarParser.T__9);
			this.state = 123;
			this.match(GeometryGrammarParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public radius(): RadiusContext {
		let _localctx: RadiusContext = new RadiusContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GeometryGrammarParser.RULE_radius);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(GeometryGrammarParser.T__10);
			this.state = 126;
			this.match(GeometryGrammarParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public color(): ColorContext {
		let _localctx: ColorContext = new ColorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GeometryGrammarParser.RULE_color);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(GeometryGrammarParser.T__11);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 129;
				_la = this._input.LA(1);
				if (!(_la === GeometryGrammarParser.COLOR || _la === GeometryGrammarParser.HEX_COLOR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GeometryGrammarParser.COLOR || _la === GeometryGrammarParser.HEX_COLOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GeometryGrammarParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(GeometryGrammarParser.T__12);
			this.state = 135;
			this.match(GeometryGrammarParser.FLOAT);
			this.state = 136;
			this.match(GeometryGrammarParser.T__9);
			this.state = 137;
			this.match(GeometryGrammarParser.FLOAT);
			this.state = 138;
			this.match(GeometryGrammarParser.T__9);
			this.state = 139;
			this.match(GeometryGrammarParser.FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rotation(): RotationContext {
		let _localctx: RotationContext = new RotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GeometryGrammarParser.RULE_rotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(GeometryGrammarParser.T__13);
			this.state = 142;
			this.match(GeometryGrammarParser.FLOAT);
			this.state = 143;
			this.match(GeometryGrammarParser.T__9);
			this.state = 144;
			this.match(GeometryGrammarParser.FLOAT);
			this.state = 145;
			this.match(GeometryGrammarParser.T__9);
			this.state = 146;
			this.match(GeometryGrammarParser.FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16\x97\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x07\x02\"\n\x02\f\x02" +
		"\x0E\x02%\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x05\x04/\n\x04\x03\x05\x03\x05\x03\x05\x07\x054\n\x05\f\x05\x0E" +
		"\x057\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06G\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x07\x07L\n\x07\f\x07\x0E\x07O\v\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b_\n\b\x03\t\x03\t\x03\t\x07\td\n\t\f\t\x0E\tg\v\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\nw\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x06\r\x85\n\r\r\r\x0E\r\x86\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x02\x03\x03\x02\x12\x13\x02\x98\x02\x1E\x03\x02\x02\x02\x04(\x03\x02" +
		"\x02\x02\x06.\x03\x02\x02\x02\b0\x03\x02\x02\x02\nF\x03\x02\x02\x02\f" +
		"H\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10`\x03\x02\x02\x02\x12v\x03\x02" +
		"\x02\x02\x14x\x03\x02\x02\x02\x16\x7F\x03\x02\x02\x02\x18\x82\x03\x02" +
		"\x02\x02\x1A\x88\x03\x02\x02\x02\x1C\x8F\x03\x02\x02\x02\x1E#\x05\x04" +
		"\x03\x02\x1F \x07\x03\x02\x02 \"\x05\x04\x03\x02!\x1F\x03\x02\x02\x02" +
		"\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02" +
		"\x02%#\x03\x02\x02\x02&\'\x07\x02\x02\x03\'\x03\x03\x02\x02\x02()\x07" +
		"\x04\x02\x02)*\x05\x06\x04\x02*\x05\x03\x02\x02\x02+/\x05\b\x05\x02,/" +
		"\x05\f\x07\x02-/\x05\x10\t\x02.+\x03\x02\x02\x02.,\x03\x02\x02\x02.-\x03" +
		"\x02\x02\x02/\x07\x03\x02\x02\x0201\x07\x05\x02\x0215\x07\x06\x02\x02" +
		"24\x05\n\x06\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x02" +
		"56\x03\x02\x02\x0268\x03\x02\x02\x0275\x03\x02\x02\x0289\x07\x07\x02\x02" +
		"9\t\x03\x02\x02\x02:;\x05\x16\f\x02;<\x07\b\x02\x02<G\x03\x02\x02\x02" +
		"=>\x05\x1A\x0E\x02>?\x07\b\x02\x02?G\x03\x02\x02\x02@A\x05\x18\r\x02A" +
		"B\x07\b\x02\x02BG\x03\x02\x02\x02CD\x05\x1C\x0F\x02DE\x07\b\x02\x02EG" +
		"\x03\x02\x02\x02F:\x03\x02\x02\x02F=\x03\x02\x02\x02F@\x03\x02\x02\x02" +
		"FC\x03\x02\x02\x02G\v\x03\x02\x02\x02HI\x07\t\x02\x02IM\x07\x06\x02\x02" +
		"JL\x05\x0E\b\x02KJ\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02" +
		"MN\x03\x02\x02\x02NP\x03\x02\x02\x02OM\x03\x02\x02\x02PQ\x07\x07\x02\x02" +
		"Q\r\x03\x02\x02\x02RS\x05\x14\v\x02ST\x07\b\x02\x02T_\x03\x02\x02\x02" +
		"UV\x05\x1A\x0E\x02VW\x07\b\x02\x02W_\x03\x02\x02\x02XY\x05\x18\r\x02Y" +
		"Z\x07\b\x02\x02Z_\x03\x02\x02\x02[\\\x05\x1C\x0F\x02\\]\x07\b\x02\x02" +
		"]_\x03\x02\x02\x02^R\x03\x02\x02\x02^U\x03\x02\x02\x02^X\x03\x02\x02\x02" +
		"^[\x03\x02\x02\x02_\x0F\x03\x02\x02\x02`a\x07\n\x02\x02ae\x07\x06\x02" +
		"\x02bd\x05\x12\n\x02cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02" +
		"\x02ef\x03\x02\x02\x02fh\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07\x07\x02" +
		"\x02i\x11\x03\x02\x02\x02jk\x05\x14\v\x02kl\x07\b\x02\x02lw\x03\x02\x02" +
		"\x02mn\x05\x1A\x0E\x02no\x07\b\x02\x02ow\x03\x02\x02\x02pq\x05\x18\r\x02" +
		"qr\x07\b\x02\x02rw\x03\x02\x02\x02st\x05\x1C\x0F\x02tu\x07\b\x02\x02u" +
		"w\x03\x02\x02\x02vj\x03\x02\x02\x02vm\x03\x02\x02\x02vp\x03\x02\x02\x02" +
		"vs\x03\x02\x02\x02w\x13\x03\x02\x02\x02xy\x07\v\x02\x02yz\x07\x11\x02" +
		"\x02z{\x07\f\x02\x02{|\x07\x11\x02\x02|}\x07\f\x02\x02}~\x07\x11\x02\x02" +
		"~\x15\x03\x02\x02\x02\x7F\x80\x07\r\x02\x02\x80\x81\x07\x11\x02\x02\x81" +
		"\x17\x03\x02\x02\x02\x82\x84\x07\x0E\x02\x02\x83\x85\t\x02\x02\x02\x84" +
		"\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86" +
		"\x87\x03\x02\x02\x02\x87\x19\x03\x02\x02\x02\x88\x89\x07\x0F\x02\x02\x89" +
		"\x8A\x07\x15\x02\x02\x8A\x8B\x07\f\x02\x02\x8B\x8C\x07\x15\x02\x02\x8C" +
		"\x8D\x07\f\x02\x02\x8D\x8E\x07\x15\x02\x02\x8E\x1B\x03\x02\x02\x02\x8F" +
		"\x90\x07\x10\x02\x02\x90\x91\x07\x15\x02\x02\x91\x92\x07\f\x02\x02\x92" +
		"\x93\x07\x15\x02\x02\x93\x94\x07\f\x02\x02\x94\x95\x07\x15\x02\x02\x95" +
		"\x1D\x03\x02\x02\x02\v#.5FM^ev\x86";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GeometryGrammarParser.__ATN) {
			GeometryGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GeometryGrammarParser._serializedATN));
		}

		return GeometryGrammarParser.__ATN;
	}

}

export class CommandContext extends ParserRuleContext {
	public drawCmd(): DrawCmdContext[];
	public drawCmd(i: number): DrawCmdContext;
	public drawCmd(i?: number): DrawCmdContext | DrawCmdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DrawCmdContext);
		} else {
			return this.getRuleContext(i, DrawCmdContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(GeometryGrammarParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_command; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
}


export class DrawCmdContext extends ParserRuleContext {
	public shape(): ShapeContext {
		return this.getRuleContext(0, ShapeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_drawCmd; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterDrawCmd) {
			listener.enterDrawCmd(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitDrawCmd) {
			listener.exitDrawCmd(this);
		}
	}
}


export class ShapeContext extends ParserRuleContext {
	public sphere(): SphereContext | undefined {
		return this.tryGetRuleContext(0, SphereContext);
	}
	public box(): BoxContext | undefined {
		return this.tryGetRuleContext(0, BoxContext);
	}
	public pyramid(): PyramidContext | undefined {
		return this.tryGetRuleContext(0, PyramidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_shape; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterShape) {
			listener.enterShape(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitShape) {
			listener.exitShape(this);
		}
	}
}


export class SphereContext extends ParserRuleContext {
	public sphereParams(): SphereParamsContext[];
	public sphereParams(i: number): SphereParamsContext;
	public sphereParams(i?: number): SphereParamsContext | SphereParamsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SphereParamsContext);
		} else {
			return this.getRuleContext(i, SphereParamsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_sphere; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterSphere) {
			listener.enterSphere(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitSphere) {
			listener.exitSphere(this);
		}
	}
}


export class SphereParamsContext extends ParserRuleContext {
	public radius(): RadiusContext | undefined {
		return this.tryGetRuleContext(0, RadiusContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public color(): ColorContext | undefined {
		return this.tryGetRuleContext(0, ColorContext);
	}
	public rotation(): RotationContext | undefined {
		return this.tryGetRuleContext(0, RotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_sphereParams; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterSphereParams) {
			listener.enterSphereParams(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitSphereParams) {
			listener.exitSphereParams(this);
		}
	}
}


export class BoxContext extends ParserRuleContext {
	public boxParams(): BoxParamsContext[];
	public boxParams(i: number): BoxParamsContext;
	public boxParams(i?: number): BoxParamsContext | BoxParamsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BoxParamsContext);
		} else {
			return this.getRuleContext(i, BoxParamsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_box; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterBox) {
			listener.enterBox(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitBox) {
			listener.exitBox(this);
		}
	}
}


export class BoxParamsContext extends ParserRuleContext {
	public size(): SizeContext | undefined {
		return this.tryGetRuleContext(0, SizeContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public color(): ColorContext | undefined {
		return this.tryGetRuleContext(0, ColorContext);
	}
	public rotation(): RotationContext | undefined {
		return this.tryGetRuleContext(0, RotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_boxParams; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterBoxParams) {
			listener.enterBoxParams(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitBoxParams) {
			listener.exitBoxParams(this);
		}
	}
}


export class PyramidContext extends ParserRuleContext {
	public pyramidParams(): PyramidParamsContext[];
	public pyramidParams(i: number): PyramidParamsContext;
	public pyramidParams(i?: number): PyramidParamsContext | PyramidParamsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PyramidParamsContext);
		} else {
			return this.getRuleContext(i, PyramidParamsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_pyramid; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterPyramid) {
			listener.enterPyramid(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitPyramid) {
			listener.exitPyramid(this);
		}
	}
}


export class PyramidParamsContext extends ParserRuleContext {
	public size(): SizeContext | undefined {
		return this.tryGetRuleContext(0, SizeContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public color(): ColorContext | undefined {
		return this.tryGetRuleContext(0, ColorContext);
	}
	public rotation(): RotationContext | undefined {
		return this.tryGetRuleContext(0, RotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_pyramidParams; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterPyramidParams) {
			listener.enterPyramidParams(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitPyramidParams) {
			listener.exitPyramidParams(this);
		}
	}
}


export class SizeContext extends ParserRuleContext {
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeometryGrammarParser.INT);
		} else {
			return this.getToken(GeometryGrammarParser.INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_size; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterSize) {
			listener.enterSize(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitSize) {
			listener.exitSize(this);
		}
	}
}


export class RadiusContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(GeometryGrammarParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_radius; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterRadius) {
			listener.enterRadius(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitRadius) {
			listener.exitRadius(this);
		}
	}
}


export class ColorContext extends ParserRuleContext {
	public COLOR(): TerminalNode[];
	public COLOR(i: number): TerminalNode;
	public COLOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeometryGrammarParser.COLOR);
		} else {
			return this.getToken(GeometryGrammarParser.COLOR, i);
		}
	}
	public HEX_COLOR(): TerminalNode[];
	public HEX_COLOR(i: number): TerminalNode;
	public HEX_COLOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeometryGrammarParser.HEX_COLOR);
		} else {
			return this.getToken(GeometryGrammarParser.HEX_COLOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_color; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterColor) {
			listener.enterColor(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitColor) {
			listener.exitColor(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public FLOAT(): TerminalNode[];
	public FLOAT(i: number): TerminalNode;
	public FLOAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeometryGrammarParser.FLOAT);
		} else {
			return this.getToken(GeometryGrammarParser.FLOAT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_position; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
}


export class RotationContext extends ParserRuleContext {
	public FLOAT(): TerminalNode[];
	public FLOAT(i: number): TerminalNode;
	public FLOAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeometryGrammarParser.FLOAT);
		} else {
			return this.getToken(GeometryGrammarParser.FLOAT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeometryGrammarParser.RULE_rotation; }
	// @Override
	public enterRule(listener: GeometryGrammarListener): void {
		if (listener.enterRotation) {
			listener.enterRotation(this);
		}
	}
	// @Override
	public exitRule(listener: GeometryGrammarListener): void {
		if (listener.exitRotation) {
			listener.exitRotation(this);
		}
	}
}


