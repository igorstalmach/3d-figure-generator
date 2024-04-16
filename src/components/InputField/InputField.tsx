import { useEffect, useMemo, useState } from "react";

import { InputFieldStyled } from "./InputField.style.ts";
import { InputFieldProps } from "./types.ts";
import { compileGrammar } from "../../grammar/compileGrammar.tsx";
import { Blueprint } from "../../shared/types.ts";

export const InputField = ({ setGrammarOutput }: InputFieldProps) => {
  const [userInput, setUserInput] = useState("");

  const result: Blueprint[] = useMemo(
    () => compileGrammar(userInput),
    [userInput],
  );

  useEffect(() => {
    setGrammarOutput(result);
  }, [result, setGrammarOutput]);

  return (
    <InputFieldStyled
      type="text"
      placeholder="Enter shapes here"
      onChange={(e) => setUserInput(e.target.value)}
    />
  );
};
