// Generated from ./src/grammar/SimpleGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SimpleGrammarListener } from "./SimpleGrammarListener";

export class SimpleGrammarParser extends Parser {
	public static readonly INT = 1;
	public static readonly PLUS = 2;
	public static readonly MINUS = 3;
	public static readonly WS = 4;
	public static readonly RULE_expr = 0;
	public static readonly RULE_term = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expr", "term",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INT", "PLUS", "MINUS", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleGrammarParser._LITERAL_NAMES, SimpleGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimpleGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimpleGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimpleGrammarParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4;
			this.term();
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleGrammarParser.PLUS || _la === SimpleGrammarParser.MINUS) {
				{
				{
				this.state = 5;
				_la = this._input.LA(1);
				if (!(_la === SimpleGrammarParser.PLUS || _la === SimpleGrammarParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 6;
				this.term();
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleGrammarParser.RULE_term);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.match(SimpleGrammarParser.INT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06\x11\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x07\x02\n\n\x02\f\x02\x0E" +
		"\x02\r\v\x02\x03\x03\x03\x03\x03\x03\x02\x02\x02\x04\x02\x02\x04\x02\x02" +
		"\x03\x03\x02\x04\x05\x02\x0F\x02\x06\x03\x02\x02\x02\x04\x0E\x03\x02\x02" +
		"\x02\x06\v\x05\x04\x03\x02\x07\b\t\x02\x02\x02\b\n\x05\x04\x03\x02\t\x07" +
		"\x03\x02\x02\x02\n\r\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v\f\x03\x02\x02" +
		"\x02\f\x03\x03\x02\x02\x02\r\v\x03\x02\x02\x02\x0E\x0F\x07\x03\x02\x02" +
		"\x0F\x05\x03\x02\x02\x02\x03\v";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleGrammarParser.__ATN) {
			SimpleGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleGrammarParser._serializedATN));
		}

		return SimpleGrammarParser.__ATN;
	}

}

export class ExprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleGrammarParser.PLUS);
		} else {
			return this.getToken(SimpleGrammarParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleGrammarParser.MINUS);
		} else {
			return this.getToken(SimpleGrammarParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleGrammarParser.RULE_expr; }
	// @Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(SimpleGrammarParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleGrammarParser.RULE_term; }
	// @Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


