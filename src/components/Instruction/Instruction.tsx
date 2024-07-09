import { InstructionContainer } from "./Instruction.style.ts";

export const Instruction = () => (
  <InstructionContainer>
    <h1>Instructions</h1>
    <p>
      Available shapes: <b>sphere, box, pyramid</b>
    </p>
    <p>Rules:</p>
    <ul>
      <li>
        Each shape must be initiated by the <b>draw</b> keyword
      </li>
      <li>Each shape must be followed by a set of parentheses</li>
      <li>
        Shapes must be separated by a semicolon "<b>;</b>"
      </li>
    </ul>
    <p>
      Example input: <b>draw sphere()</b>
    </p>
    <p>
      Example input: <b>draw sphere() ; draw box()</b>
    </p>
    <p>Parameters:</p>
    <ul>
      <li>
        Available parameters: <b>radius/size, position, color, rotation</b>
      </li>
      <li>
        Each parameter must be followed by a comma "<b>,</b>"
      </li>
      <li>Each parameter must be included within the shape parentheses</li>
      <li>
        <b>position</b> and <b>rotation</b> must be a float
      </li>
      <li>
        <b>radius/size</b> must be an integer
      </li>
      <li>
        <b>color</b> can be either string or a hex value
      </li>
    </ul>
    <p>
      Example input:{" "}
      <b>
        draw sphere(radius 2, position 1.0/1.0/1.0, color red, rotation
        2.0/1.0/4.5,)
      </b>
    </p>
    <p>
      Example input:{" "}
      <b>
        draw box(size 2/2/3, position 4.0/4.0/4.0, color blue, rotation
        1.5/2.0/3.5,)
      </b>
    </p>
  </InstructionContainer>
);
