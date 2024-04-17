import { useState } from "react";

import { Display } from "../../components/Display";
import { InputField } from "../../components/InputField";
import { Instruction } from "../../components/Instruction";
import { Blueprint } from "../../shared/types.ts";

const App = () => {
  const [grammarOutput, setGrammarOutput] = useState<Blueprint[]>([]);

  return (
    <>
      <Instruction />
      <Display shapeInput={grammarOutput} />
      <InputField setGrammarOutput={setGrammarOutput} />
    </>
  );
};

export default App;
