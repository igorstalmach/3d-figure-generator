import { useState } from "react";

import { Display } from "../../components/Display";
import { InputField } from "../../components/InputField";
import { Blueprint } from "../../shared/types.ts";

const App = () => {
  const [grammarOutput, setGrammarOutput] = useState<Blueprint[]>([]);

  return (
    <>
      <Display shapeInput={grammarOutput} />
      <InputField setGrammarOutput={setGrammarOutput} />
    </>
  );
};

export default App;
