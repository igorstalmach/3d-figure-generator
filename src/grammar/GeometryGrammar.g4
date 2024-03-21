grammar GeometryGrammar;

command: drawCmd EOF ;

drawCmd
    : 'draw' shape
    ;


shape
    : sphere
    | box
    | pyramid
    ;

sphere
    : 'sphere' ','? radius? position? color? rotation?
    ;

box
    : 'box,' ','? size? position? color? rotation?
    ;

pyramid
    : 'pyramid,' ','? size? position? color? rotation?
    ;


size
	: 'size' SIZE ','
	;

radius
	: 'radius' INT ','
	;

color
	: 'color' COLOR ','
	;

position
    : 'position' INT '/' INT '/' INT ','
    ;

rotation
    : 'rotation' FLOAT '/' FLOAT '/' FLOAT ','
    ;


SIZE: INT '/' INT '/' INT;
COLOR: 'red' | 'blue' | 'green' | 'yellow' | 'orange' | HEX_COLOR; 
HEX_COLOR: '0x' [0-9a-fA-F]{6};
INT: [0-9]+;
FLOAT: '-'?[0-9]+'.'[0-9]+;

WS: [ \t\n\r]+ -> skip ;
