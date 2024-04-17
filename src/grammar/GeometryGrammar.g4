grammar GeometryGrammar;

command
    : drawCmd (';' drawCmd)* EOF
    ;

drawCmd
    : 'draw' shape
    ;

shape
    : sphere | box | pyramid
    ;


sphere
    : 'sphere' '(' sphereParams* ')'
    ;

sphereParams
    : radius ','
    | position ','
    | color ','
    | rotation ','
    ;


box
    : 'box' '(' boxParams* ')'
    ;

boxParams
    : size ','
    | position ','
    | color ','
    | rotation ','
    ;


pyramid
    : 'pyramid' '(' pyramidParams* ')'
    ;

pyramidParams
    : size ','
    | position ','
    | color ','
    | rotation ','
    ;


size
	: 'size' INT '/' INT '/' INT
	;

radius
	: 'radius' INT
	;

color
	: 'color' ( COLOR | HEX_COLOR )+
	;

position
    : 'position' FLOAT '/' FLOAT '/' FLOAT
    ;

rotation
    : 'rotation' FLOAT '/' FLOAT '/' FLOAT
    ;


INT
    : [0-9]+
    ;

COLOR
    : 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple' | 'black' | 'gray' | 'brown'
    ;

HEX_COLOR
    : '#' HEX_DIGIT HEX_DIGIT HEX_DIGIT (HEX_DIGIT HEX_DIGIT HEX_DIGIT)?
    ;

HEX_DIGIT
    : [0-9a-fA-F]
    ;

FLOAT
    : '-'?[0-9]+'.'[0-9]+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
