grammar SimpleGrammar;

expr: term ( ( '+' | '-' ) term )* ;
term: INT ;

INT : [0-9]+ ;
PLUS: '+' ;
MINUS: '-' ;
WS : [ \t\r\n]+ -> skip ;
