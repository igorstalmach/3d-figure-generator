// Generated from ./src/grammar/GeometryGrammar.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import * as Utils from "antlr4ts/misc/Utils";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { TokenStream } from "antlr4ts/TokenStream";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

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
  public static readonly SIZE = 12;
  public static readonly COLOR = 13;
  public static readonly HEX_COLOR = 14;
  public static readonly INT = 15;
  public static readonly FLOAT = 16;
  public static readonly WS = 17;
  public static readonly RULE_command = 0;
  public static readonly RULE_drawCmd = 1;
  public static readonly RULE_shape = 2;
  public static readonly RULE_sphere = 3;
  public static readonly RULE_box = 4;
  public static readonly RULE_pyramid = 5;
  public static readonly RULE_size = 6;
  public static readonly RULE_radius = 7;
  public static readonly RULE_color = 8;
  public static readonly RULE_position = 9;
  public static readonly RULE_rotation = 10;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "command",
    "drawCmd",
    "shape",
    "sphere",
    "box",
    "pyramid",
    "size",
    "radius",
    "color",
    "position",
    "rotation",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'draw'",
    "'sphere'",
    "'box'",
    "'pyramid'",
    "'size'",
    "','",
    "'radius'",
    "'color'",
    "'position'",
    "'/'",
    "'rotation'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "SIZE",
    "COLOR",
    "HEX_COLOR",
    "INT",
    "FLOAT",
    "WS",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    GeometryGrammarParser._LITERAL_NAMES,
    GeometryGrammarParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return GeometryGrammarParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "GeometryGrammar.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return GeometryGrammarParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return GeometryGrammarParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(GeometryGrammarParser._ATN, this);
  }
  // @RuleVersion(0)
  public command(): CommandContext {
    const _localctx: CommandContext = new CommandContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, GeometryGrammarParser.RULE_command);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 22;
        this.drawCmd();
        this.state = 23;
        this.match(GeometryGrammarParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public drawCmd(): DrawCmdContext {
    const _localctx: DrawCmdContext = new DrawCmdContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, GeometryGrammarParser.RULE_drawCmd);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 25;
        this.match(GeometryGrammarParser.T__0);
        this.state = 26;
        this.shape();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shape(): ShapeContext {
    const _localctx: ShapeContext = new ShapeContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, GeometryGrammarParser.RULE_shape);
    try {
      this.state = 31;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GeometryGrammarParser.T__1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 28;
            this.sphere();
          }
          break;
        case GeometryGrammarParser.T__2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 29;
            this.box();
          }
          break;
        case GeometryGrammarParser.T__3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 30;
            this.pyramid();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sphere(): SphereContext {
    const _localctx: SphereContext = new SphereContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, GeometryGrammarParser.RULE_sphere);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 33;
        this.match(GeometryGrammarParser.T__1);
        this.state = 46;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
          case 1:
            {
              this.state = 35;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__6) {
                {
                  this.state = 34;
                  this.radius();
                }
              }

              this.state = 38;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__8) {
                {
                  this.state = 37;
                  this.position();
                }
              }

              this.state = 41;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__7) {
                {
                  this.state = 40;
                  this.color();
                }
              }

              this.state = 44;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__10) {
                {
                  this.state = 43;
                  this.rotation();
                }
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public box(): BoxContext {
    const _localctx: BoxContext = new BoxContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, GeometryGrammarParser.RULE_box);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 48;
        this.match(GeometryGrammarParser.T__2);
        this.state = 61;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1:
            {
              this.state = 50;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__4) {
                {
                  this.state = 49;
                  this.size();
                }
              }

              this.state = 53;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__8) {
                {
                  this.state = 52;
                  this.position();
                }
              }

              this.state = 56;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__7) {
                {
                  this.state = 55;
                  this.color();
                }
              }

              this.state = 59;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__10) {
                {
                  this.state = 58;
                  this.rotation();
                }
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pyramid(): PyramidContext {
    const _localctx: PyramidContext = new PyramidContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, GeometryGrammarParser.RULE_pyramid);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 63;
        this.match(GeometryGrammarParser.T__3);
        this.state = 76;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
          case 1:
            {
              this.state = 65;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__4) {
                {
                  this.state = 64;
                  this.size();
                }
              }

              this.state = 68;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__8) {
                {
                  this.state = 67;
                  this.position();
                }
              }

              this.state = 71;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__7) {
                {
                  this.state = 70;
                  this.color();
                }
              }

              this.state = 74;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GeometryGrammarParser.T__10) {
                {
                  this.state = 73;
                  this.rotation();
                }
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public size(): SizeContext {
    const _localctx: SizeContext = new SizeContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, GeometryGrammarParser.RULE_size);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 78;
        this.match(GeometryGrammarParser.T__4);
        this.state = 79;
        this.match(GeometryGrammarParser.SIZE);
        this.state = 80;
        this.match(GeometryGrammarParser.T__5);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public radius(): RadiusContext {
    const _localctx: RadiusContext = new RadiusContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, GeometryGrammarParser.RULE_radius);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 82;
        this.match(GeometryGrammarParser.T__6);
        this.state = 83;
        this.match(GeometryGrammarParser.INT);
        this.state = 84;
        this.match(GeometryGrammarParser.T__5);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public color(): ColorContext {
    const _localctx: ColorContext = new ColorContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, GeometryGrammarParser.RULE_color);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 86;
        this.match(GeometryGrammarParser.T__7);
        this.state = 87;
        this.match(GeometryGrammarParser.COLOR);
        this.state = 88;
        this.match(GeometryGrammarParser.T__5);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public position(): PositionContext {
    const _localctx: PositionContext = new PositionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, GeometryGrammarParser.RULE_position);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 90;
        this.match(GeometryGrammarParser.T__8);
        this.state = 91;
        this.match(GeometryGrammarParser.INT);
        this.state = 92;
        this.match(GeometryGrammarParser.T__9);
        this.state = 93;
        this.match(GeometryGrammarParser.INT);
        this.state = 94;
        this.match(GeometryGrammarParser.T__9);
        this.state = 95;
        this.match(GeometryGrammarParser.INT);
        this.state = 96;
        this.match(GeometryGrammarParser.T__5);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public rotation(): RotationContext {
    const _localctx: RotationContext = new RotationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 20, GeometryGrammarParser.RULE_rotation);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 98;
        this.match(GeometryGrammarParser.T__10);
        this.state = 99;
        this.match(GeometryGrammarParser.FLOAT);
        this.state = 100;
        this.match(GeometryGrammarParser.T__9);
        this.state = 101;
        this.match(GeometryGrammarParser.FLOAT);
        this.state = 102;
        this.match(GeometryGrammarParser.T__9);
        this.state = 103;
        this.match(GeometryGrammarParser.FLOAT);
        this.state = 104;
        this.match(GeometryGrammarParser.T__5);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13m\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
    '\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04"\n\x04' +
    "\x03\x05\x03\x05\x05\x05&\n\x05\x03\x05\x05\x05)\n\x05\x03\x05\x05\x05" +
    ",\n\x05\x03\x05\x05\x05/\n\x05\x05\x051\n\x05\x03\x06\x03\x06\x05\x06" +
    "5\n\x06\x03\x06\x05\x068\n\x06\x03\x06\x05\x06;\n\x06\x03\x06\x05\x06" +
    ">\n\x06\x05\x06@\n\x06\x03\x07\x03\x07\x05\x07D\n\x07\x03\x07\x05\x07" +
    "G\n\x07\x03\x07\x05\x07J\n\x07\x03\x07\x05\x07M\n\x07\x05\x07O\n\x07\x03" +
    "\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02" +
    "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x02\x02r\x02" +
    "\x18\x03\x02\x02\x02\x04\x1B\x03\x02\x02\x02\x06!\x03\x02\x02\x02\b#\x03" +
    "\x02\x02\x02\n2\x03\x02\x02\x02\fA\x03\x02\x02\x02\x0EP\x03\x02\x02\x02" +
    "\x10T\x03\x02\x02\x02\x12X\x03\x02\x02\x02\x14\\\x03\x02\x02\x02\x16d" +
    "\x03\x02\x02\x02\x18\x19\x05\x04\x03\x02\x19\x1A\x07\x02\x02\x03\x1A\x03" +
    "\x03\x02\x02\x02\x1B\x1C\x07\x03\x02\x02\x1C\x1D\x05\x06\x04\x02\x1D\x05" +
    '\x03\x02\x02\x02\x1E"\x05\b\x05\x02\x1F"\x05\n\x06\x02 "\x05\f\x07' +
    '\x02!\x1E\x03\x02\x02\x02!\x1F\x03\x02\x02\x02! \x03\x02\x02\x02"\x07' +
    "\x03\x02\x02\x02#0\x07\x04\x02\x02$&\x05\x10\t\x02%$\x03\x02\x02\x02%" +
    "&\x03\x02\x02\x02&(\x03\x02\x02\x02')\x05\x14\v\x02('\x03\x02\x02\x02" +
    "()\x03\x02\x02\x02)+\x03\x02\x02\x02*,\x05\x12\n\x02+*\x03\x02\x02\x02" +
    "+,\x03\x02\x02\x02,.\x03\x02\x02\x02-/\x05\x16\f\x02.-\x03\x02\x02\x02" +
    "./\x03\x02\x02\x02/1\x03\x02\x02\x020%\x03\x02\x02\x0201\x03\x02\x02\x02" +
    "1\t\x03\x02\x02\x022?\x07\x05\x02\x0235\x05\x0E\b\x0243\x03\x02\x02\x02" +
    "45\x03\x02\x02\x0257\x03\x02\x02\x0268\x05\x14\v\x0276\x03\x02\x02\x02" +
    "78\x03\x02\x02\x028:\x03\x02\x02\x029;\x05\x12\n\x02:9\x03\x02\x02\x02" +
    ":;\x03\x02\x02\x02;=\x03\x02\x02\x02<>\x05\x16\f\x02=<\x03\x02\x02\x02" +
    "=>\x03\x02\x02\x02>@\x03\x02\x02\x02?4\x03\x02\x02\x02?@\x03\x02\x02\x02" +
    "@\v\x03\x02\x02\x02AN\x07\x06\x02\x02BD\x05\x0E\b\x02CB\x03\x02\x02\x02" +
    "CD\x03\x02\x02\x02DF\x03\x02\x02\x02EG\x05\x14\v\x02FE\x03\x02\x02\x02" +
    "FG\x03\x02\x02\x02GI\x03\x02\x02\x02HJ\x05\x12\n\x02IH\x03\x02\x02\x02" +
    "IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KM\x05\x16\f\x02LK\x03\x02\x02\x02" +
    "LM\x03\x02\x02\x02MO\x03\x02\x02\x02NC\x03\x02\x02\x02NO\x03\x02\x02\x02" +
    "O\r\x03\x02\x02\x02PQ\x07\x07\x02\x02QR\x07\x0E\x02\x02RS\x07\b\x02\x02" +
    "S\x0F\x03\x02\x02\x02TU\x07\t\x02\x02UV\x07\x11\x02\x02VW\x07\b\x02\x02" +
    "W\x11\x03\x02\x02\x02XY\x07\n\x02\x02YZ\x07\x0F\x02\x02Z[\x07\b\x02\x02" +
    "[\x13\x03\x02\x02\x02\\]\x07\v\x02\x02]^\x07\x11\x02\x02^_\x07\f\x02\x02" +
    "_`\x07\x11\x02\x02`a\x07\f\x02\x02ab\x07\x11\x02\x02bc\x07\b\x02\x02c" +
    "\x15\x03\x02\x02\x02de\x07\r\x02\x02ef\x07\x12\x02\x02fg\x07\f\x02\x02" +
    "gh\x07\x12\x02\x02hi\x07\f\x02\x02ij\x07\x12\x02\x02jk\x07\b\x02\x02k" +
    "\x17\x03\x02\x02\x02\x12!%(+.047:=?CFILN";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GeometryGrammarParser.__ATN) {
      GeometryGrammarParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(GeometryGrammarParser._serializedATN),
      );
    }

    return GeometryGrammarParser.__ATN;
  }
}

export class CommandContext extends ParserRuleContext {
  public drawCmd(): DrawCmdContext {
    return this.getRuleContext(0, DrawCmdContext);
  }
  public EOF(): TerminalNode {
    return this.getToken(GeometryGrammarParser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_command;
  }
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
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_drawCmd;
  }
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
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_shape;
  }
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
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_sphere;
  }
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

export class BoxContext extends ParserRuleContext {
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
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_box;
  }
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

export class PyramidContext extends ParserRuleContext {
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
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_pyramid;
  }
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

export class SizeContext extends ParserRuleContext {
  public SIZE(): TerminalNode {
    return this.getToken(GeometryGrammarParser.SIZE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_size;
  }
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
  public INT(): TerminalNode {
    return this.getToken(GeometryGrammarParser.INT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_radius;
  }
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
  public COLOR(): TerminalNode {
    return this.getToken(GeometryGrammarParser.COLOR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_color;
  }
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
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_position;
  }
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
  public get ruleIndex(): number {
    return GeometryGrammarParser.RULE_rotation;
  }
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
