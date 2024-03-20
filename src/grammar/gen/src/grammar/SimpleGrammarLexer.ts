// Generated from ./src/grammar/SimpleGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SimpleGrammarLexer extends Lexer {
	public static readonly INT = 1;
	public static readonly PLUS = 2;
	public static readonly MINUS = 3;
	public static readonly WS = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"INT", "PLUS", "MINUS", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INT", "PLUS", "MINUS", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleGrammarLexer._LITERAL_NAMES, SimpleGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SimpleGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SimpleGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SimpleGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SimpleGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06\x1B\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x06\x02" +
		"\r\n\x02\r\x02\x0E\x02\x0E\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x06" +
		"\x05\x16\n\x05\r\x05\x0E\x05\x17\x03\x05\x03\x05\x02\x02\x02\x06\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\x03\x02\x04\x03\x022;\x05\x02\v" +
		"\f\x0F\x0F\"\"\x02\x1C\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\f\x03\x02\x02\x02\x05" +
		"\x10\x03\x02\x02\x02\x07\x12\x03\x02\x02\x02\t\x15\x03\x02\x02\x02\v\r" +
		"\t\x02\x02\x02\f\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\f\x03\x02" +
		"\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x04\x03\x02\x02\x02\x10\x11\x07-" +
		"\x02\x02\x11\x06\x03\x02\x02\x02\x12\x13\x07/\x02\x02\x13\b\x03\x02\x02" +
		"\x02\x14\x16\t\x03\x02\x02\x15\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02" +
		"\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x03\x02\x02" +
		"\x02\x19\x1A\b\x05\x02\x02\x1A\n\x03\x02\x02\x02\x05\x02\x0E\x17\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleGrammarLexer.__ATN) {
			SimpleGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleGrammarLexer._serializedATN));
		}

		return SimpleGrammarLexer.__ATN;
	}

}

