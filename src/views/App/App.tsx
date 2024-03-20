import { useState } from "react";

import { Display } from "../../components/Display";
import { InputField } from "../../components/InputField";

const App = () => {
  const [grammarOutput, setGrammarOutput] = useState("");

  return (
    <>
      <Display shapeInput={grammarOutput} />
      <InputField setGrammarOutput={setGrammarOutput} />
    </>
  );
};

export default App;
